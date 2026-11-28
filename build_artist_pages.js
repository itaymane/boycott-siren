#!/usr/bin/env node
/**
 * build_artist_pages.js: generates one static, indexable page per artist.
 *
 *   node build_artist_pages.js
 *
 * Reads ARTISTS_DATABASE from index.html (the website's data) and source_policy.json.
 * Only artists with at least `minApprovedSources` sources from approved outlets
 * (counted by distinct domain) get a page. Others are skipped until they qualify.
 *
 * Writes:
 *   artist/<slug>/index.html   one page per qualifying artist
 *   artist/index.html          directory of all artist pages
 *   artist/manifest.json       content hash + last-changed date per page (keeps lastmod stable)
 *   sitemap.xml                static pages + directory + updates + every artist page
 *   updates.json               changelog (added/updated/removed per day), appended by diffing the manifest
 *   updates/index.html, updates/feed.xml   recent-updates page and RSS feed
 *   llms.txt, llms-full.txt    site summary and full profile list for AI tools (llmstxt.org)
 *   index.html                 rewrites the static name list links to /artist/<slug>/ and the
 *                              ARTIST_PAGES map used by the modal's "Full profile" link
 *
 * Pages for artists that no longer qualify (or were removed) are deleted.
 * Run after every add/edit/remove of an artist, then commit everything it changed.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const SITE = 'https://artsiren.co';
const OUT_DIR = path.join(ROOT, 'artist');
const TODAY = new Date().toISOString().slice(0, 10);

// ── Load data ────────────────────────────────────────────────────────────────
const indexPath = path.join(ROOT, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
const dbMatch = indexHtml.match(/const ARTISTS_DATABASE\s*=\s*(\[[\s\S]*?\n\s*\]);/);
if (!dbMatch) throw new Error('ARTISTS_DATABASE not found in index.html');
const DB = new Function('return ' + dbMatch[1])();

const policy = JSON.parse(fs.readFileSync(path.join(ROOT, 'source_policy.json'), 'utf8'));
const APPROVED = policy.approvedDomains;
const MIN = policy.minApprovedSources;

// ── Helpers ──────────────────────────────────────────────────────────────────
const esc = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const domainOf = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
const isApproved = d => APPROVED.some(x => d === x || d.endsWith('.' + x));
const approvedCount = a => new Set((a.sources || []).map(s => domainOf(s.url)).filter(isApproved)).size;

function slugify(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/&/g, ' and ').replace(/['’.]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function stanceInfo(a) {
  if (a.stance === 'WELCOMES_ALL') return {
    key: 'welcomes', label: 'Welcomes All',
    answer: 'No.', question: `Does ${a.name} boycott Israel?`,
    summary: `${a.name} has performed in Israel or publicly opposed the cultural boycott, according to the public record below.`
  };
  if ((a.level || '').toUpperCase() === 'LOW') return {
    key: 'unclear', label: 'Stance Unclear',
    answer: 'Not clearly.', question: `Does ${a.name} boycott Israel?`,
    summary: `${a.name} has made public statements on Israel and Palestine, but has not clearly committed to a boycott. See the record below.`
  };
  return {
    key: 'boycott', label: 'Cultural Boycott',
    answer: 'Yes.', question: `Does ${a.name} boycott Israel?`,
    summary: `${a.name} has publicly supported a cultural boycott of Israel or taken a public stance against Israeli policy, according to the public record below.`
  };
}

// Bands/duos/collectives get schema.org MusicGroup; everyone else is a Person.
// Google's ProfilePage requires mainEntity to be a Person or an Organization (MusicGroup is one).
// Add new group acts here when they are added to the database.
const MUSIC_GROUPS = new Set([
  'A Silver Mt. Zion', 'Amyl and the Sniffers', 'BADBADNOTGOOD', 'Beoga', 'Blonde Redhead', 'Bob Vylan',
  'Bon Jovi', 'Dave Matthews Band', 'Destroy Boys', 'Enter Shikari', 'Fontaines D.C.',
  'Godspeed You! Black Emperor', 'Green Day', "Guns N' Roses", 'Hot Chip', 'IDLES', 'Kneecap',
  'Lambrini Girls', 'Lankum', 'Mannequin Pussy', 'Maroon 5', 'Massive Attack', 'Model/Actriz', 'Mogwai',
  'MUNA', 'My Bloody Valentine', 'Of Monsters and Men', 'Paramore', 'Portishead', 'Primal Scream',
  'Rage Against the Machine', 'Red Hot Chili Peppers', 'Refused', 'Rolling Stones', 'Run the Jewels',
  'Santana', 'Sigur Ros', 'Smerz', 'System of a Down', 'The Knife', 'The Roots', 'U2', 'Wednesday',
  'Wolf Alice', 'Young Fathers', 'Metric', 'Stars', 'Wolf Parade', 'Do Make Say Think', 'Dead Prez',
  'Broken Social Scene', 'Propagandhi', 'Anti-Flag', 'Grizzly Bear', 'Wet Leg', 'Dry Cleaning',
  'Black Country New Road', 'Beach Fossils', 'Pinegrove', 'Water from Your Eyes', 'Metallica'
]);
const schemaType = a => MUSIC_GROUPS.has(a.name) ? 'MusicGroup' : 'Person';
// Google wants a full ISO 8601 datetime with timezone, not a bare date.
const isoDateTime = d => d + 'T00:00:00+00:00';

const CAT_LABEL = { musician: 'Musician', actor: 'Actor', director: 'Director', writer: 'Writer', author: 'Author', comedian: 'Comedian' };
const catLabel = c => CAT_LABEL[c] || (c ? c[0].toUpperCase() + c.slice(1) : 'Artist');

function metaDescription(a, st) {
  const lead = st.key === 'welcomes' ? `${a.name}: performs in Israel / opposes the boycott. `
    : st.key === 'unclear' ? `${a.name}: stance on Israel unclear. `
    : `${a.name}: supports the cultural boycott of Israel. `;
  let d = lead + a.statement;
  if (d.length > 158) d = d.slice(0, 155).replace(/\s+\S*$/, '') + '…';
  return d;
}

// ── Select artists ───────────────────────────────────────────────────────────
const qualifying = DB.filter(a => approvedCount(a) >= MIN);
const slugs = new Map();
const used = new Set();
for (const a of qualifying) {
  let s = slugify(a.name) || ('artist-' + a.id);
  if (used.has(s)) s = s + '-' + a.id;
  used.add(s); slugs.set(a.id, s);
}

// ── Manifest (stable lastmod + change detection) ─────────────────────────────
// artist/manifest.json = { artists: { <id>: { name, slug, hash, modified, f: {stance, statement, sources} } } }
// `hash/modified` track the rendered page (sitemap lastmod); `f` holds per-field hashes of the
// database entry, diffed against the previous run to append entries to updates.json.
const manifestPath = path.join(OUT_DIR, 'manifest.json');
const oldRaw = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : null;
const oldArtists = oldRaw && oldRaw.artists ? oldRaw.artists : null;
const legacyBySlug = oldRaw && !oldRaw.artists ? oldRaw : {};
const manifest = { artists: {} };
const h12 = v => crypto.createHash('sha1').update(JSON.stringify(v)).digest('hex').slice(0, 12);
const fieldHashes = a => ({
  stance: h12([a.stance, a.level || '']),
  statement: h12(a.statement),
  sources: h12((a.sources || []).map(s => s.url))
});

// ── Changelog (updates.json) ─────────────────────────────────────────────────
const updatesPath = path.join(ROOT, 'updates.json');
let updates = fs.existsSync(updatesPath) ? JSON.parse(fs.readFileSync(updatesPath, 'utf8')) : [];
let newUpdates = 0;
if (oldArtists) {
  const pushU = u => {
    // collapse repeat runs on the same day into one entry per artist
    const i = updates.findIndex(x => x.date === u.date && x.id === u.id);
    if (i >= 0) {
      const e = updates[i];
      if (u.type === 'removed') { if (e.type === 'added') updates.splice(i, 1); else updates[i] = u; return; }
      if (e.type === 'updated' && u.changes) e.changes = [...new Set([...e.changes, ...u.changes])];
      return;
    }
    updates.unshift(u); newUpdates++;
  };
  for (const a of DB) {
    const prev = oldArtists[a.id];
    if (!prev) { pushU({ date: TODAY, type: 'added', id: a.id, name: a.name }); continue; }
    const f = fieldHashes(a);
    const changes = ['stance', 'statement', 'sources'].filter(k => prev.f && prev.f[k] !== f[k]);
    if (changes.length) pushU({ date: TODAY, type: 'updated', id: a.id, name: a.name, changes });
  }
  const ids = new Set(DB.map(a => a.id));
  for (const [id, prev] of Object.entries(oldArtists)) {
    if (!ids.has(Number(id)) && !DB.some(a => a.name === prev.name)) pushU({ date: TODAY, type: 'removed', id: Number(id), name: prev.name });
  }
  updates.sort((x, y) => y.date.localeCompare(x.date) || x.name.localeCompare(y.name));
}

// ── Shared page chrome ───────────────────────────────────────────────────────
const CSS = `
:root{--blue:#1C5FEA;--navy:#0C233E;--text:#0C233E;--muted:#6B7280;--border:#DDE1ED;--bg:#F8F9FB;--card:#fff;
--boycott:#C2410C;--boycott-bg:#FFF4ED;--welcomes:#15803D;--welcomes-bg:#ECFDF3;--unclear:#6B7280;--unclear-bg:#F3F4F6;}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:var(--bg);color:var(--text);line-height:1.65;padding-bottom:4rem}
a{color:var(--blue)}
.wrap{max-width:820px;margin:0 auto;padding:1.5rem 16px 2rem}
.crumbs{font-size:.8rem;color:var(--muted);margin-bottom:1rem}
.crumbs a{color:var(--muted);text-decoration:none}.crumbs a:hover{color:var(--blue)}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:1.75rem;box-shadow:0 2px 16px rgba(12,35,62,.04)}
.head{display:flex;gap:1.1rem;align-items:center;margin-bottom:1.25rem}
.avatar{width:84px;height:84px;border-radius:50%;object-fit:cover;flex-shrink:0;background:#E5E7EB}
.initials{width:84px;height:84px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--navy);color:#fff;font-weight:700;font-size:1.6rem;flex-shrink:0}
h1{font-size:1.75rem;line-height:1.2;letter-spacing:-.01em}
.cat{color:var(--muted);font-size:.9rem}
.badge{display:inline-block;font-weight:600;font-size:.8rem;padding:.3rem .8rem;border-radius:999px;margin-top:.4rem}
.badge.boycott{color:var(--boycott);background:var(--boycott-bg)}
.badge.welcomes{color:var(--welcomes);background:var(--welcomes-bg)}
.badge.unclear{color:var(--unclear);background:var(--unclear-bg)}
h2{font-size:1.15rem;margin:1.6rem 0 .6rem}
.answer{font-size:1rem}
.answer strong{font-weight:700}
.statement{font-size:.98rem;background:var(--bg);border-left:3px solid var(--blue);padding:.9rem 1rem;border-radius:0 10px 10px 0}
.sources{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.sources a{display:flex;justify-content:space-between;gap:1rem;text-decoration:none;color:var(--text);border:1px solid var(--border);border-radius:10px;padding:.65rem .9rem;font-size:.92rem;background:#fff}
.sources a:hover{border-color:var(--blue)}
.src-domain{color:var(--muted);font-size:.8rem;white-space:nowrap}
.tag{font-size:.7rem;font-weight:600;color:var(--blue);background:rgba(28,95,234,.08);border-radius:6px;padding:.1rem .45rem;margin-left:.4rem}
.meta{color:var(--muted);font-size:.8rem;margin-top:1.4rem}
.actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.4rem}
.btn{display:inline-block;font-family:inherit;font-size:.88rem;font-weight:600;border-radius:10px;padding:.6rem 1.1rem;text-decoration:none;cursor:pointer;border:1px solid var(--border);background:#fff;color:var(--navy)}
.btn.primary{background:var(--blue);border-color:var(--blue);color:#fff}
.btn:hover{border-color:var(--blue)}
.related{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.5rem;list-style:none}
.related a{display:block;text-decoration:none;color:var(--text);border:1px solid var(--border);border-radius:10px;padding:.55rem .8rem;font-size:.88rem;background:#fff}
.related a:hover{border-color:var(--blue)}
.dir-group{margin-top:1.6rem}
.dir-list{columns:3 200px;column-gap:1.5rem;list-style:none;font-size:.92rem}
.dir-list li{break-inside:avoid;padding:.15rem 0}
.dir-list a{text-decoration:none;color:var(--text)}.dir-list a:hover{color:var(--blue)}
.dir-group p{margin:.4rem 0;font-size:.92rem}.dir-group p a{text-decoration:none}.dir-group p a:hover{text-decoration:underline}
.note{font-size:.82rem;color:var(--muted)}
@media(max-width:560px){.card{padding:1.2rem}h1{font-size:1.4rem}.avatar,.initials{width:64px;height:64px;font-size:1.2rem}}
`;

// ── Hebrew translations (he_translations.json) ───────────────────────────────
// { <id>: { name_he, statement_he, en_hash } }; en_hash = sha1(English statement) when translated.
// A Hebrew page is built only when the English statement is unchanged since translation.
const HE = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'he_translations.json'), 'utf8')); } catch (e) { return {}; } })();
const enHash = s => crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
const heStale = [];
const heMissing = [];
const heReady = new Set(qualifying.filter(a => {
  const t = HE[a.id];
  if (!t) { heMissing.push(a.name); return false; }
  if (t.en_hash !== enHash(a.statement)) { heStale.push(a.name); return false; }
  return true;
}).map(a => a.id));

const CSS_HE = `
body{font-family:'Heebo','Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.statement{border-left:0;border-right:3px solid var(--blue);border-radius:10px 0 0 10px}
.tag{margin-left:0;margin-right:.4rem}
.he-top{background:#fff;box-shadow:0 2px 12px rgba(12,35,62,.05);padding:.8rem 0}
.he-top .wrap{padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.he-top a{text-decoration:none;color:var(--navy);font-size:.9rem}
.he-top .brand{font-weight:700;font-size:1.2rem;color:var(--blue)}
.he-top nav{display:flex;gap:1rem;flex-wrap:wrap}
.he-foot{text-align:center;font-size:.78rem;color:var(--muted);padding:1.5rem 16px}
.he-foot a{color:var(--muted)}
.en-name{color:var(--muted);font-size:.95rem;font-weight:400}
`;

function headHtml({ title, description, canonical, image, jsonld, lang = 'en', alternates = [] }) {
  const he = lang === 'he';
  const alt = alternates.map(([hl, href]) => `<link rel="alternate" hreflang="${hl}" href="${esc(href)}">`).join('\n');
  return `<!DOCTYPE html>
<html lang="${he ? 'he' : 'en'}"${he ? ' dir="rtl"' : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XZRJ6TZY2Y"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XZRJ6TZY2Y');</script>
${he ? '' : '<script src="/shared-nav.js?v=9"></script>\n'}${alt ? alt + '\n' : ''}<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="profile">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${esc(image || SITE + '/logo.png')}">
<meta property="og:site_name" content="ArtSiren">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<link rel="icon" href="/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${he ? 'Heebo:wght@400;500;700&family=' : ''}Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}${he ? CSS_HE : ''}</style>
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>
</head>
<body>
${he ? `<header class="he-top"><div class="wrap"><a class="brand" href="/he/">ArtSiren</a><nav><a href="/he/">חיפוש במאגר</a><a href="/he/artist/">כל האמנים</a><a href="/sources">מקורות</a></nav></div></header>\n` : ''}`;
}

const FOOT_HE = `
<footer class="he-foot">© 2026 ArtSiren · <a href="/he/">דף הבית</a> · <a href="/terms">תנאי שימוש</a> · <a href="/privacy#he">פרטיות</a></footer>
</body>
</html>
`;

const FOOT = `
<script>
function reportError(name,id){
  if(window.gtag)gtag('event','report_error_click',{artist_name:name,page:'artist_page'});
  if(!window.openContact)return;
  openContact('report-mistake','Artist: '+name+' (id '+id+')\\n\\nWhat is wrong, and a source link if you have one:\\n');
}
</script>
</body>
</html>
`;

function relatedFor(a) {
  const pool = qualifying.filter(b => b.id !== a.id && b.stance === a.stance);
  const same = pool.filter(b => b.category === a.category);
  const pick = (same.length >= 6 ? same : pool)
    .slice().sort((x, y) => (y.popularity || 0) - (x.popularity || 0));
  // rotate by id so pages don't all link to the same top-6
  const start = pick.length ? a.id % Math.max(1, Math.min(pick.length, 30)) : 0;
  const top = pick.slice(0, 30);
  return top.slice(start).concat(top.slice(0, start)).slice(0, 6);
}

// ── Artist pages ─────────────────────────────────────────────────────────────
function artistPage(a) {
  const slug = slugs.get(a.id);
  const url = `${SITE}/artist/${slug}/`;
  const st = stanceInfo(a);
  const cat = catLabel(a.category);
  const sources = (a.sources || []).map(s => ({ name: s.name || domainOf(s.url), url: s.url, domain: domainOf(s.url) }));
  sources.sort((x, y) => isApproved(y.domain) - isApproved(x.domain));

  const title = st.key === 'welcomes'
    ? `${a.name} and Israel: Stance and Sources | ArtSiren`
    : `Does ${a.name} Boycott Israel? Stance and Sources | ArtSiren`;
  const description = metaDescription(a, st);

  const hash = h12([a.name, a.stance, a.level, a.category, a.statement, sources.map(s => s.url), a.image]);
  const prev = oldArtists ? oldArtists[a.id] : legacyBySlug[slug];
  const modified = prev && prev.hash === hash && prev.modified ? prev.modified : TODAY;
  manifest.artists[a.id] = { name: a.name, slug, hash, modified, f: fieldHashes(a) };

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url, name: title, description, dateModified: isoDateTime(modified),
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/' },
    breadcrumb: {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ArtSiren', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Artists', item: SITE + '/artist/' },
        { '@type': 'ListItem', position: 3, name: a.name, item: url }
      ]
    },
    mainEntity: { '@type': schemaType(a), name: a.name, description: a.statement, url, ...(a.image ? { image: a.image } : {}) },
    citation: sources.map(s => ({ '@type': 'CreativeWork', name: s.name, url: s.url }))
  };

  const initials = a.name.split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  const avatar = a.image
    ? `<img class="avatar" src="${esc(a.image)}" alt="${esc(a.name)}" width="84" height="84" loading="eager" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=&quot;initials&quot;>${esc(initials)}</div>'">`
    : `<div class="initials">${esc(initials)}</div>`;

  const srcHtml = sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener nofollow"><span>${esc(s.name)}${isApproved(s.domain) ? '<span class="tag">Verified outlet</span>' : ''}</span><span class="src-domain">${esc(s.domain)}</span></a></li>`).join('\n');
  const rel = relatedFor(a).map(b => `<li><a href="/artist/${slugs.get(b.id)}/">${esc(b.name)}</a></li>`).join('\n');
  const nApproved = approvedCount(a);

  const alternates = heReady.has(a.id)
    ? [['en', url], ['he', `${SITE}/he/artist/${slug}/`], ['x-default', url]] : [];
  return headHtml({ title, description, canonical: url, image: a.image, jsonld, alternates }) + `
<main class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">ArtSiren</a> › <a href="/artist/">Artists</a> › ${esc(a.name)}</nav>
<article class="card">
<header class="head">
${avatar}
<div>
<h1>${esc(a.name)}</h1>
<div class="cat">${esc(cat)}</div>
<span class="badge ${st.key}">${esc(st.label)}</span>
</div>
</header>

<h2>${esc(st.question)}</h2>
<p class="answer"><strong>${esc(st.answer)}</strong> ${esc(st.summary)}</p>

<h2>What ${esc(a.name)} said or did</h2>
<p class="statement">${esc(a.statement)}</p>

<h2>Sources (${sources.length})</h2>
<ul class="sources">
${srcHtml}
</ul>
<p class="meta">${nApproved} of these sources are from established news outlets. Last reviewed ${esc(modified)}.</p>

<div class="actions">
<a class="btn primary" href="/?artist=${a.id}">Open in the ArtSiren database</a>
<button class="btn" type="button" onclick="reportError(${JSON.stringify(a.name).replace(/"/g, '&quot;')},${a.id})">Spot an error? Report it</button>
</div>
</article>

${rel ? `<h2>Related artists</h2>
<ul class="related">
${rel}
</ul>` : ''}

<p class="note" style="margin-top:1.6rem">ArtSiren records publicly documented actions and statements by artists regarding Israel, with links to the original reporting. <a href="/sources">How we verify sources</a> · <a href="/artist/">All artists</a> · <a href="/updates/">Recent updates</a>${heReady.has(a.id) ? ` · <a href="/he/artist/${slug}/" hreflang="he" lang="he">בעברית</a>` : ''}</p>
</main>
` + FOOT;
}

// ── Directory page ───────────────────────────────────────────────────────────
function directoryPage() {
  const groups = [
    ['Cultural Boycott', qualifying.filter(a => stanceInfo(a).key === 'boycott')],
    ['Stance Unclear', qualifying.filter(a => stanceInfo(a).key === 'unclear')],
    ['Welcomes All', qualifying.filter(a => stanceInfo(a).key === 'welcomes')]
  ];
  const title = `All Artists: Israel Boycott Stances with Sources | ArtSiren`;
  const description = `Browse ${qualifying.length} artists, musicians, actors and writers and their documented stance on the cultural boycott of Israel, each with links to news sources.`;
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', url: SITE + '/artist/', name: title, description,
    isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/' },
    mainEntity: { '@type': 'ItemList', numberOfItems: qualifying.length,
      itemListElement: qualifying.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/artist/${slugs.get(a.id)}/`, name: a.name })) }
  };
  const body = groups.filter(g => g[1].length).map(([label, list]) => `<section class="dir-group">
<h2>${esc(label)} (${list.length})</h2>
<ul class="dir-list">
${list.slice().sort((x, y) => x.name.localeCompare(y.name)).map(a => `<li><a href="/artist/${slugs.get(a.id)}/">${esc(a.name)}</a></li>`).join('\n')}
</ul>
</section>`).join('\n');
  return headHtml({ title, description, canonical: SITE + '/artist/', jsonld }) + `
<main class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">ArtSiren</a> › Artists</nav>
<div class="card">
<h1>All artists</h1>
<p class="note" style="margin-top:.5rem">${qualifying.length} artists with at least ${MIN} independent news sources. Search the full database on the <a href="/">home page</a> · <a href="/updates/">Recent updates</a></p>
${body}
</div>
</main>
` + FOOT;
}

// ── Hebrew pages (/he/artist/) ───────────────────────────────────────────────
const HE_OUT = path.join(ROOT, 'he', 'artist');
const CAT_HE = { musician: 'מוזיקה', actor: 'משחק', director: 'בימוי', writer: 'ספרות', author: 'ספרות', comedian: 'קומדיה' };
function stanceHe(a) {
  const k = stanceInfo(a).key;
  if (k === 'welcomes') return { key: k, label: 'מקבל/ת את כולם',
    summary: 'לפי המקורות שלהלן, יש תיעוד פומבי של הופעה בישראל או של התנגדות לחרם התרבותי עליה.' };
  if (k === 'unclear') return { key: k, label: 'עמדה לא ברורה',
    summary: 'יש התבטאויות פומביות בנושא ישראל והפלסטינים, אך אין תיעוד של התחייבות ברורה לחרם.' };
  return { key: k, label: 'חרם תרבותי',
    summary: 'לפי המקורות שלהלן, יש תיעוד פומבי של תמיכה בחרם תרבותי על ישראל או של עמדה פומבית נגד מדיניות ישראל.' };
}
const heName = a => (HE[a.id] && HE[a.id].name_he) || a.name;

function heArtistPage(a) {
  const slug = slugs.get(a.id);
  const url = `${SITE}/he/artist/${slug}/`;
  const enUrl = `${SITE}/artist/${slug}/`;
  const t = HE[a.id];
  const st = stanceHe(a);
  const nh = heName(a);
  const sources = (a.sources || []).map(s => ({ name: s.name || domainOf(s.url), url: s.url, domain: domainOf(s.url) }));
  sources.sort((x, y) => isApproved(y.domain) - isApproved(x.domain));
  const title = `${nh} (${a.name}) והחרם על ישראל: עמדה ומקורות | ArtSiren`;
  let description = `${nh}: ${st.label}. ${t.statement_he}`;
  if (description.length > 158) description = description.slice(0, 155).replace(/\s+\S*$/, '') + '…';
  const modified = manifest.artists[a.id].modified;
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'ProfilePage', url, name: title, description,
    dateModified: isoDateTime(modified), inLanguage: 'he',
    isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/he/' },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ArtSiren', item: SITE + '/he/' },
      { '@type': 'ListItem', position: 2, name: 'כל האמנים', item: SITE + '/he/artist/' },
      { '@type': 'ListItem', position: 3, name: nh, item: url }] },
    mainEntity: { '@type': schemaType(a), name: a.name, alternateName: nh, description: t.statement_he, url, ...(a.image ? { image: a.image } : {}) },
    citation: sources.map(s => ({ '@type': 'CreativeWork', name: s.name, url: s.url }))
  };
  const initials = a.name.split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  const avatar = a.image
    ? `<img class="avatar" src="${esc(a.image)}" alt="${esc(nh)}" width="84" height="84" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=&quot;initials&quot;>${esc(initials)}</div>'">`
    : `<div class="initials">${esc(initials)}</div>`;
  const srcHtml = sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener nofollow"><span>${esc(s.name)}${isApproved(s.domain) ? '<span class="tag">כלי תקשורת מוכר</span>' : ''}</span><span class="src-domain" dir="ltr">${esc(s.domain)}</span></a></li>`).join('\n');
  const rel = relatedFor(a).filter(b => heReady.has(b.id)).map(b => `<li><a href="/he/artist/${slugs.get(b.id)}/">${esc(heName(b))}</a></li>`).join('\n');
  const reportHref = `/he/?report=${a.id}&name=${encodeURIComponent(a.name)}`;
  return headHtml({ title, description, canonical: url, image: a.image, jsonld, lang: 'he',
    alternates: [['he', url], ['en', enUrl], ['x-default', enUrl]] }) + `
<main class="wrap">
<nav class="crumbs" aria-label="ניווט"><a href="/he/">ArtSiren</a> › <a href="/he/artist/">כל האמנים</a> › ${esc(nh)}</nav>
<article class="card">
<header class="head">
${avatar}
<div>
<h1>${esc(nh)} <span class="en-name" dir="ltr">${esc(a.name)}</span></h1>
<div class="cat">${esc(CAT_HE[a.category] || 'אמנות')}</div>
<span class="badge ${st.key}">${esc(st.label)}</span>
</div>
</header>

<h2>מה העמדה של ${esc(nh)} לגבי החרם על ישראל?</h2>
<p class="answer"><strong>${esc(st.label)}.</strong> ${esc(st.summary)}</p>

<h2>מה נאמר או נעשה</h2>
<p class="statement">${esc(t.statement_he)}</p>

<h2>מקורות (${sources.length})</h2>
<ul class="sources">
${srcHtml}
</ul>
<p class="meta">${approvedCount(a)} מהמקורות הם מכלי תקשורת מוכרים. המקורות באנגלית. נבדק לאחרונה ${esc(modified)}.</p>

<div class="actions">
<a class="btn primary" href="/he/?artist=${a.id}">פתיחה במאגר ArtSiren</a>
<a class="btn" href="${esc(reportHref)}" onclick="if(window.gtag)gtag('event','report_error_click',{artist_name:${esc(JSON.stringify(a.name))},page:'artist_page_he'})">מצאתם טעות? דווחו לנו</a>
</div>
</article>

${rel ? `<h2>אמנים נוספים</h2>
<ul class="related">
${rel}
</ul>` : ''}

<p class="note" style="margin-top:1.6rem">ArtSiren מתעד פעולות והצהרות פומביות של אמנים בנוגע לישראל, עם קישורים לדיווחים המקוריים. <a href="/he/artist/">כל האמנים</a> · <a href="/artist/${slug}/" hreflang="en" lang="en">English</a></p>
</main>
` + FOOT_HE;
}

function heDirectoryPage() {
  const list = qualifying.filter(a => heReady.has(a.id));
  const groups = [['חרם תרבותי', 'boycott'], ['עמדה לא ברורה', 'unclear'], ['מקבלים את כולם', 'welcomes']]
    .map(([label, key]) => [label, list.filter(a => stanceInfo(a).key === key)]);
  const title = 'כל האמנים: עמדות לגבי החרם התרבותי על ישראל, עם מקורות | ArtSiren';
  const description = `${list.length} מוזיקאים, שחקנים, במאים וסופרים והעמדה המתועדת שלהם לגבי החרם התרבותי על ישראל, עם קישורים למקורות חדשותיים.`;
  const jsonld = { '@context': 'https://schema.org', '@type': 'CollectionPage', url: SITE + '/he/artist/', name: title, description, inLanguage: 'he',
    isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/he/' },
    mainEntity: { '@type': 'ItemList', numberOfItems: list.length,
      itemListElement: list.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/he/artist/${slugs.get(a.id)}/`, name: heName(a) })) } };
  const body = groups.filter(g => g[1].length).map(([label, l]) => `<section class="dir-group">
<h2>${esc(label)} (${l.length})</h2>
<ul class="dir-list">
${l.slice().sort((x, y) => heName(x).localeCompare(heName(y), 'he')).map(a => `<li><a href="/he/artist/${slugs.get(a.id)}/">${esc(heName(a))}</a></li>`).join('\n')}
</ul>
</section>`).join('\n');
  return headHtml({ title, description, canonical: SITE + '/he/artist/', jsonld, lang: 'he',
    alternates: [['he', SITE + '/he/artist/'], ['en', SITE + '/artist/'], ['x-default', SITE + '/artist/']] }) + `
<main class="wrap">
<nav class="crumbs" aria-label="ניווט"><a href="/he/">ArtSiren</a> › כל האמנים</nav>
<div class="card">
<h1>כל האמנים</h1>
<p class="note" style="margin-top:.5rem">${list.length} אמנים עם לפחות ${MIN} מקורות חדשותיים בלתי תלויים. לחיפוש במאגר המלא: <a href="/he/">דף הבית</a>.</p>
${body}
</div>
</main>
` + FOOT_HE;
}

// ── Write pages ──────────────────────────────────────────────────────────────
fs.mkdirSync(OUT_DIR, { recursive: true });
const keep = new Set();
for (const a of qualifying) {
  const dir = path.join(OUT_DIR, slugs.get(a.id));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), artistPage(a));
  keep.add(slugs.get(a.id));
}
// remove stale pages
let removed = 0;
for (const entry of fs.readdirSync(OUT_DIR, { withFileTypes: true })) {
  if (entry.isDirectory() && !keep.has(entry.name)) {
    fs.rmSync(path.join(OUT_DIR, entry.name), { recursive: true, force: true });
    removed++;
  }
}
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), directoryPage());

// Hebrew pages (after the English loop, which fills manifest.artists[*].modified)
fs.mkdirSync(HE_OUT, { recursive: true });
const keepHe = new Set();
for (const a of qualifying) {
  if (!heReady.has(a.id)) continue;
  const dir = path.join(HE_OUT, slugs.get(a.id));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), heArtistPage(a));
  keepHe.add(slugs.get(a.id));
}
for (const entry of fs.readdirSync(HE_OUT, { withFileTypes: true })) {
  if (entry.isDirectory() && !keepHe.has(entry.name)) fs.rmSync(path.join(HE_OUT, entry.name), { recursive: true, force: true });
}
fs.writeFileSync(path.join(HE_OUT, 'index.html'), heDirectoryPage());
// artists without a page still get a manifest entry so later runs can detect their changes
for (const a of DB) {
  if (!manifest.artists[a.id]) manifest.artists[a.id] = { name: a.name, slug: null, hash: null, modified: null, f: fieldHashes(a) };
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 1) + '\n');
fs.writeFileSync(updatesPath, JSON.stringify(updates, null, 1) + '\n');

// ── Updates page + RSS feed ──────────────────────────────────────────────────
const fmtDate = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const slugById = new Map(qualifying.map(a => [a.id, slugs.get(a.id)]));
const nameLink = u => slugById.has(u.id) ? `<a href="/artist/${slugById.get(u.id)}/">${esc(u.name)}</a>` : esc(u.name);
const CHANGE_LABEL = { stance: 'stance', statement: 'statement', sources: 'sources' };
const byDate = [];
for (const u of updates) {
  let g = byDate[byDate.length - 1];
  if (!g || g.date !== u.date) { g = { date: u.date, added: [], updated: [], removed: [] }; byDate.push(g); }
  g[u.type].push(u);
}
const shownDates = byDate.slice(0, 40);
const daySummary = g => [g.added.length && `${g.added.length} added`, g.updated.length && `${g.updated.length} updated`, g.removed.length && `${g.removed.length} removed`].filter(Boolean).join(', ');

function updatesPage() {
  const title = 'Recent Updates to the Artist Database | ArtSiren';
  const description = 'Artists recently added, updated or removed from the ArtSiren database of documented stances on the cultural boycott of Israel.';
  const jsonld = { '@context': 'https://schema.org', '@type': 'CollectionPage', url: SITE + '/updates/', name: title, description,
    dateModified: isoDateTime(byDate.length ? byDate[0].date : TODAY), isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/' } };
  const body = shownDates.map(g => {
    const parts = [];
    if (g.added.length) parts.push(`<p><strong>Added:</strong> ${g.added.map(nameLink).join(', ')}</p>`);
    if (g.updated.length) {
      const sorted = g.updated.slice().sort((x, y) => x.name.localeCompare(y.name));
      parts.push(`<p><strong>Updated:</strong> ${sorted.map(u => nameLink(u) + (u.changes && u.changes.length ? ` <span class="note">(${u.changes.map(c => CHANGE_LABEL[c] || c).join(', ')})</span>` : '')).join(', ')}</p>`);
    }
    if (g.removed.length) parts.push(`<p><strong>Removed after review:</strong> ${g.removed.map(u => esc(u.name)).join(', ')}</p>`);
    return `<section class="dir-group" id="d-${g.date}">
<h2>${esc(fmtDate(g.date))} <span class="note">· ${esc(daySummary(g))}</span></h2>
${parts.join('\n')}
</section>`;
  }).join('\n');
  return headHtml({ title, description, canonical: SITE + '/updates/', jsonld })
    .replace('</head>', `<link rel="alternate" type="application/rss+xml" title="ArtSiren updates" href="${SITE}/updates/feed.xml">\n</head>`) + `
<main class="wrap">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">ArtSiren</a> › Updates</nav>
<div class="card">
<h1>Recent updates</h1>
<p class="note" style="margin-top:.5rem">Artists we added, re-sourced or removed. Every entry links to news sources; artists are removed when reliable reporting contradicts the record. Spotted something wrong? Use “Report an error” on any artist page. <a href="/updates/feed.xml">RSS feed</a></p>
${body || '<p>No updates yet.</p>'}
</div>
</main>
` + FOOT;
}
fs.mkdirSync(path.join(ROOT, 'updates'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'updates', 'index.html'), updatesPage());

const xml = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rss = ['<?xml version="1.0" encoding="UTF-8"?>', '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">', '<channel>',
  '<title>ArtSiren: database updates</title>', `<link>${SITE}/updates/</link>`,
  `<atom:link href="${SITE}/updates/feed.xml" rel="self" type="application/rss+xml"/>`,
  '<description>Artists added, updated or removed from the ArtSiren database.</description>', '<language>en</language>'];
for (const g of byDate.slice(0, 20)) {
  const lines = [];
  if (g.added.length) lines.push('Added: ' + g.added.map(u => u.name).join(', '));
  if (g.updated.length) lines.push('Updated: ' + g.updated.map(u => u.name).join(', '));
  if (g.removed.length) lines.push('Removed after review: ' + g.removed.map(u => u.name).join(', '));
  rss.push('<item>', `<title>${xml(fmtDate(g.date) + ': ' + daySummary(g))}</title>`, `<link>${SITE}/updates/#d-${g.date}</link>`,
    `<guid isPermaLink="false">artsiren-updates-${g.date}</guid>`, `<pubDate>${new Date(g.date + 'T12:00:00Z').toUTCString()}</pubDate>`,
    `<description>${xml(lines.join('\n'))}</description>`, '</item>');
}
rss.push('</channel>', '</rss>', '');
fs.writeFileSync(path.join(ROOT, 'updates', 'feed.xml'), rss.join('\n'));

// ── llms.txt / llms-full.txt (https://llmstxt.org) ───────────────────────────
const nBoy = qualifying.filter(a => stanceInfo(a).key === 'boycott').length;
const nUnc = qualifying.filter(a => stanceInfo(a).key === 'unclear').length;
const nWel = qualifying.filter(a => stanceInfo(a).key === 'welcomes').length;
const outletNames = 'Times of Israel, Haaretz, Jerusalem Post, Ynet, BBC, NPR, Reuters, AP, The Guardian, Rolling Stone, Billboard, Variety, NME, Deadline, The Hollywood Reporter, CNN, NBC News, JTA, Al Jazeera, Euronews and others';
const llms = `# ArtSiren

> ArtSiren is a database of musicians, actors, directors and writers and their publicly documented stance on the cultural boycott of Israel. Every entry links to the news reporting it is based on. The database has ${DB.length} artists; ${qualifying.length} of them have at least ${MIN} sources from established news outlets and a dedicated profile page.

ArtSiren also offers a free Chrome extension that shows an artist's stance on ticketing and streaming sites.

How entries are classified:
- **Cultural Boycott** (${nBoy} profiles): the artist cancelled or refused performances in Israel citing Israeli policy, signed an open letter or pledge calling for a cultural boycott (e.g. Film Workers for Palestine 2025, Musicians for Palestine 2021, No Music for Genocide 2025-26, Refusing Complicity 2024), geo-blocked their music from Israel, or made an explicit public statement in support of Palestinians.
- **Stance Unclear** (${nUnc} profiles): public statements on the conflict without a clear commitment to a boycott.
- **Welcomes All** (${nWel} profiles): the artist performed in Israel despite boycott calls or publicly opposed the cultural boycott (e.g. Creative Community for Peace letters).

Sourcing rule: a profile page is published only when at least ${MIN} distinct established outlets name the artist explicitly (${outletNames}). Wikipedia and activist sites may be linked as extra context but never count toward the rule. Entries contradicted by reliable reporting are corrected or removed; see the updates page.

When citing ArtSiren, please link to the artist's profile page and, where possible, the original news source listed on it.

## Main pages
- [All artist profiles](${SITE}/artist/): directory of every artist with a profile page, grouped by stance
- [Recent updates](${SITE}/updates/): artists added, updated or removed, by date ([RSS](${SITE}/updates/feed.xml))
- [Search the database](${SITE}/): home page with search across all ${DB.length} artists
- [How we verify sources](${SITE}/sources): sourcing methodology
- [How it works](${SITE}/how-it-works): how the database and extension work
- [About](${SITE}/about)

## Data
- [artists.json](${SITE}/artists.json): the full database as JSON (name, stance, level, statement, sources)
- [Full list of profiles with statements](${SITE}/llms-full.txt): one line per artist with stance, summary and sources

## Optional
- [Chrome extension](${SITE}/extension)
- [Hebrew version](${SITE}/he/)
`;
fs.writeFileSync(path.join(ROOT, 'llms.txt'), llms);

const fullLines = qualifying.slice().sort((x, y) => x.name.localeCompare(y.name)).map(a => {
  const st = stanceInfo(a);
  const outs = [...new Set((a.sources || []).filter(s => isApproved(domainOf(s.url))).map(s => s.name || domainOf(s.url)))];
  return `- [${a.name}](${SITE}/artist/${slugs.get(a.id)}/): ${st.label}. ${a.statement.replace(/\s+/g, ' ').trim()} (Sources: ${outs.join(', ')})`;
});
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), `# ArtSiren: all artist profiles

> ${qualifying.length} artists with at least ${MIN} established news sources, with their documented stance on the cultural boycott of Israel. Generated ${TODAY}. Each line links to the artist's profile page, which lists every source URL. Stances: Cultural Boycott, Stance Unclear, Welcomes All (see ${SITE}/llms.txt).

${fullLines.join('\n')}
`);

// ── Sitemap ──────────────────────────────────────────────────────────────────
const STATIC = [
  ['/', 'weekly', '1.0'], ['/he/', 'weekly', '0.9'], ['/artist/', 'weekly', '0.9'], ['/updates/', 'weekly', '0.8'],
  ['/about', 'monthly', '0.7'], ['/extension', 'monthly', '0.8'], ['/sources', 'monthly', '0.6'],
  ['/how-it-works', 'monthly', '0.6'], ['/privacy', 'yearly', '0.3'], ['/terms', 'yearly', '0.3']
];
const pageDates = Object.values(manifest.artists).map(m => m.modified).filter(Boolean);
const lastmodAll = [...pageDates, byDate.length ? byDate[0].date : ''].sort().pop() || TODAY;
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
const altLinks = (en, he) => `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="he" href="${he}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
STATIC.splice(4, 0, ['/he/artist/', 'weekly', '0.8']);
for (const [p, f, pr] of STATIC) {
  const lm = ['/', '/he/', '/artist/', '/he/artist/', '/updates/'].includes(p) ? lastmodAll : '2026-05-20';
  const alts = p === '/artist/' || p === '/he/artist/' ? altLinks(`${SITE}/artist/`, `${SITE}/he/artist/`) : '';
  sm.push(`  <url><loc>${SITE}${p}</loc><lastmod>${lm}</lastmod><changefreq>${f}</changefreq><priority>${pr}</priority>${alts}</url>`);
}
let heCount = 0;
for (const a of qualifying) {
  const s = slugs.get(a.id);
  const lm = manifest.artists[a.id].modified;
  const en = `${SITE}/artist/${s}/`, he = `${SITE}/he/artist/${s}/`;
  const alts = heReady.has(a.id) ? altLinks(en, he) : '';
  sm.push(`  <url><loc>${en}</loc><lastmod>${lm}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority>${alts}</url>`);
  if (heReady.has(a.id)) { heCount++; sm.push(`  <url><loc>${he}</loc><lastmod>${lm}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority>${alts}</url>`); }
}
sm.push('</urlset>', '');
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm.join('\n'));

// ── index.html: static name links + modal profile map ────────────────────────
const byName = new Map(qualifying.map(a => [a.name, slugs.get(a.id)]));
let relinked = 0;
indexHtml = indexHtml.replace(/<a href="(\/\?q=[^"]*|\/artist\/[^"]*\/)">([^<]+)<\/a>/g, (m, href, label) => {
  const s = byName.get(label.replace(/&amp;/g, '&'));
  const nh = s ? `/artist/${s}/` : '/?q=' + encodeURIComponent(label).replace(/%20/g, '+');
  if (nh !== href) relinked++;
  return `<a href="${nh}">${label}</a>`;
});
const mapJs = '/*ARTIST_PAGES*/const ARTIST_PAGES = ' + JSON.stringify(Object.fromEntries(qualifying.map(a => [a.id, slugs.get(a.id)]))) + ';/*END_ARTIST_PAGES*/';
if (/\/\*ARTIST_PAGES\*\/[\s\S]*?\/\*END_ARTIST_PAGES\*\//.test(indexHtml)) {
  indexHtml = indexHtml.replace(/\/\*ARTIST_PAGES\*\/[\s\S]*?\/\*END_ARTIST_PAGES\*\//, () => mapJs);
} else {
  console.warn('WARNING: ARTIST_PAGES marker not found in index.html; modal profile links not updated');
}
fs.writeFileSync(indexPath, indexHtml);

console.log(`artist pages: ${qualifying.length} written, ${DB.length - qualifying.length} skipped (<${MIN} approved sources), ${removed} stale removed`);
console.log(`sitemap.xml: ${STATIC.length + qualifying.length + heCount} URLs; index.html static links changed: ${relinked}`);
console.log(`hebrew pages: ${heReady.size} written` + (heMissing.length ? `; NO TRANSLATION (add to he_translations.json): ${heMissing.join(', ')}` : '') + (heStale.length ? `; STALE, English changed since translation (re-translate): ${heStale.join(', ')}` : ''));
console.log(`updates.json: ${updates.length} entries (${newUpdates} new this run); llms.txt + llms-full.txt written`);
