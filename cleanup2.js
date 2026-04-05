const fs = require('fs');

// Additional artists to REMOVE based on further research
const toRemove = [
    'Yo La Tengo',   // Has performed in Israel (Tel Aviv 2010, 2011) - not a boycotter
    'Shellac',       // Steve Albini died May 2024; no confirmed BDS statement
    'Dead Kennedys', // Band (not Jello Biafra) has no confirmed boycott position
    'Oxbow',         // No confirmed BDS/boycott statement from major outlets
    'Novelist',      // No confirmed Israel boycott statement from major outlets
    'Kojey Radical', // No confirmed Israel boycott statement
    'Ghetts',        // Signed letter supporting Lowkey, not directly an Israel boycott pledge
    'Loyle Carner',  // Supported Palestinian charity, not a confirmed BDS boycott pledge
];

function removeArtistFromJS(content, name) {
    const namePattern = `name: "${name}"`;
    const namePatternAlt = `name: '${name}'`;

    let idx = content.indexOf(namePattern);
    if (idx === -1) idx = content.indexOf(namePatternAlt);
    if (idx === -1) {
        console.log(`  NOT FOUND: ${name}`);
        return content;
    }

    // Find the opening { of this object block
    let start = idx;
    while (start > 0) {
        start--;
        if (content[start] === '{') break;
    }

    // Find the closing } of this object block
    let end = idx;
    let inTemplateLiteral = false;
    let i = start;
    let depth = 0;

    while (i < content.length) {
        if (content[i] === '`') inTemplateLiteral = !inTemplateLiteral;
        if (!inTemplateLiteral) {
            if (content[i] === '{') depth++;
            if (content[i] === '}') {
                depth--;
                if (depth === 0) { end = i; break; }
            }
        }
        i++;
    }

    // Find the leading comma to remove
    let removeStart = start;
    let j = start - 1;
    while (j >= 0 && (content[j] === ' ' || content[j] === '\n' || content[j] === '\r' || content[j] === '\t')) j--;
    if (j >= 0 && content[j] === ',') removeStart = j;

    let removeEnd = end + 1;
    const removed = content.substring(removeStart, removeEnd);
    console.log(`  REMOVING: ${name} (${removed.length} chars)`);
    return content.substring(0, removeStart) + content.substring(removeEnd);
}

console.log('\n=== Processing artists-data.js (round 2) ===');
let jsContent = fs.readFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/artists-data.js', 'utf8');
let originalCount = (jsContent.match(/name: "/g) || []).length;

for (const name of toRemove) {
    jsContent = removeArtistFromJS(jsContent, name);
}

// Fix Four Tet entry - change from unverified NMF claim to confirmed #DJsForPalestine 2018
const fourTetOld = `    {
        name: "Four Tet",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: \`<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>\`
    }`;

const fourTetNew = `    {
        name: "Four Tet",
        statement: "Joined #DJsForPalestine cultural boycott of Israel in 2018; supports Palestinian rights",
        sources: \`<a href="https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356" target="_blank">NME</a> | <a href="https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507" target="_blank">Haaretz</a> | <a href="https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news" target="_blank">Mixmag</a>\`
    }`;

if (jsContent.includes('"Four Tet"')) {
    // Find and replace the Four Tet entry
    const ftIdx = jsContent.indexOf('"Four Tet"');
    // Find the object start
    let start = ftIdx;
    while (start > 0 && jsContent[start] !== '{') start--;
    // Find the object end
    let depth = 0, inTL = false, end = start;
    for (let i = start; i < jsContent.length; i++) {
        if (jsContent[i] === '`') inTL = !inTL;
        if (!inTL) {
            if (jsContent[i] === '{') depth++;
            if (jsContent[i] === '}') { depth--; if (depth === 0) { end = i; break; } }
        }
    }
    const oldEntry = jsContent.substring(start, end + 1);
    jsContent = jsContent.replace(oldEntry, fourTetNew.trim());
    console.log('\nFixed Four Tet entry');
} else {
    console.log('\nFour Tet NOT FOUND in file');
}

// Fix Sinéad O'Connor name (may still be truncated)
if (jsContent.includes('"Sinéad O\'Connor"')) {
    console.log('Sinéad O\'Connor name is correct');
} else if (jsContent.includes('"Sinéad O"')) {
    console.log('WARNING: Sinéad O is still truncated!');
}

let newCount = (jsContent.match(/name: "/g) || []).length;
console.log(`\nCount after round 2: ${newCount} (removed ${originalCount - newCount} more)`);

// Update count in header
jsContent = jsContent.replace(/\/\/ Total: \d+ verified artists/, `// Total: ${newCount} verified artists`);
// Update last updated
jsContent = jsContent.replace(/\/\/ Last updated: [\d-]+/, '// Last updated: 2026-03-27');

fs.writeFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/artists-data.js', jsContent, 'utf8');
console.log('artists-data.js saved!');
