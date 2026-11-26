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
 *   sitemap.xml                static pages + directory + every artist page
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

// ── Manifest (stable lastmod) ────────────────────────────────────────────────
const manifestPath = path.join(OUT_DIR, 'manifest.json');
const oldManifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
const manifest = {};

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
.note{font-size:.82rem;color:var(--muted)}
@media(max-width:560px){.card{padding:1.2rem}h1{font-size:1.4rem}.avatar,.initials{width:64px;height:64px;font-size:1.2rem}}
`;

function headHtml({ title, description, canonical, image, jsonld }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XZRJ6TZY2Y"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XZRJ6TZY2Y');</script>
<script src="/shared-nav.js?v=8"></script>
<title>${esc(title)}</title>
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
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>
</head>
<body>
`;
}

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

  const hash = crypto.createHash('sha1').update(JSON.stringify([a.name, a.stance, a.level, a.category, a.statement, sources.map(s => s.url), a.image])).digest('hex').slice(0, 12);
  const prev = oldManifest[slug];
  const modified = prev && prev.hash === hash ? prev.modified : TODAY;
  manifest[slug] = { id: a.id, name: a.name, hash, modified };

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url, name: title, description, dateModified: modified,
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'ArtSiren', url: SITE + '/' },
    breadcrumb: {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ArtSiren', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Artists', item: SITE + '/artist/' },
        { '@type': 'ListItem', position: 3, name: a.name, item: url }
      ]
    },
    mainEntity: { '@type': 'Thing', name: a.name, description: a.statement, ...(a.image ? { image: a.image } : {}) },
    citation: sources.map(s => ({ '@type': 'CreativeWork', name: s.name, url: s.url }))
  };

  const initials = a.name.split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
  const avatar = a.image
    ? `<img class="avatar" src="${esc(a.image)}" alt="${esc(a.name)}" width="84" height="84" loading="eager" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=&quot;initials&quot;>${esc(initials)}</div>'">`
    : `<div class="initials">${esc(initials)}</div>`;

  const srcHtml = sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener nofollow"><span>${esc(s.name)}${isApproved(s.domain) ? '<span class="tag">Verified outlet</span>' : ''}</span><span class="src-domain">${esc(s.domain)}</span></a></li>`).join('\n');
  const rel = relatedFor(a).map(b => `<li><a href="/artist/${slugs.get(b.id)}/">${esc(b.name)}</a></li>`).join('\n');
  const nApproved = approvedCount(a);

  return headHtml({ title, description, canonical: url, image: a.image, jsonld }) + `
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

<p class="note" style="margin-top:1.6rem">ArtSiren records publicly documented actions and statements by artists regarding Israel, with links to the original reporting. <a href="/sources.html">How we verify sources</a> · <a href="/artist/">All artists</a></p>
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
<p class="note" style="margin-top:.5rem">${qualifying.length} artists with at least ${MIN} independent news sources. Search the full database on the <a href="/">home page</a>.</p>
${body}
</div>
</main>
` + FOOT;
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
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 1) + '\n');

// ── Sitemap ──────────────────────────────────────────────────────────────────
const STATIC = [
  ['/', 'weekly', '1.0'], ['/he/', 'weekly', '0.9'], ['/artist/', 'weekly', '0.9'],
  ['/about.html', 'monthly', '0.7'], ['/extension.html', 'monthly', '0.8'], ['/sources.html', 'monthly', '0.6'],
  ['/how-it-works.html', 'monthly', '0.6'], ['/privacy.html', 'yearly', '0.3'], ['/terms.html', 'yearly', '0.3']
];
const lastmodAll = Object.values(manifest).map(m => m.modified).sort().pop() || TODAY;
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const [p, f, pr] of STATIC) {
  const lm = (p === '/' || p === '/he/' || p === '/artist/') ? lastmodAll : '2026-05-20';
  sm.push(`  <url><loc>${SITE}${p}</loc><lastmod>${lm}</lastmod><changefreq>${f}</changefreq><priority>${pr}</priority></url>`);
}
for (const a of qualifying) {
  const s = slugs.get(a.id);
  sm.push(`  <url><loc>${SITE}/artist/${s}/</loc><lastmod>${manifest[s].modified}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
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
console.log(`sitemap.xml: ${STATIC.length + qualifying.length} URLs; index.html static links changed: ${relinked}`);
