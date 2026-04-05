const fs = require('fs');

// All artists to REMOVE from both databases
const toRemove = [
    'Dan Snaith',
    'Fugazi',
    'Carlos Santana',
    'Macy Gray',
    'Jello Biafra',
    'Erykah Badu',
    'Questlove',
    'Black Thought',
    'Grimes',
    'Jamie xx',
    'Aphex Twin',
    'FKA twigs',
    'Flying Lotus',
    'Thundercat',
    'Stormzy',
    'Dave',
    'Skepta',
    'Dizzee Rascal',
    'Tinie Tempah',
    'Professor Green',
    'Example',
    'Wiley',
    'Kano',
    'Giggs',
    'Wretch 32',
    'Mira Calix',
    'Vivian Green',
    'Minaret Records',
    'Yo La Tengo',
    'Shellac',
    'Dead Kennedys',
    'Oxbow',
    'Novelist',
    'Kojey Radical',
    'Ghetts',
    'Loyle Carner',
];

let html = fs.readFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/index.html', 'utf8');
let removed = 0;

for (const name of toRemove) {
    // Match single-line entries like: {id: N, name: "Name", ...},
    // These are all on one line in index.html
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('\\s*\\{id:\\s*\\d+,\\s*name:\\s*"' + escapedName + '"[^\\n]+\\},?\\n?', 'g');
    const before = html.length;
    html = html.replace(regex, '\n');
    if (html.length !== before) {
        console.log(`REMOVED: ${name}`);
        removed++;
    } else {
        console.log(`NOT FOUND: ${name}`);
    }
}

// Fix Four Tet entry
const fourTetOldPattern = /\{id:\s*\d+,\s*name:\s*"Four Tet",[^\n]+\},?/;
const fourTetMatch = html.match(fourTetOldPattern);
if (fourTetMatch) {
    const idMatch = fourTetMatch[0].match(/id:\s*(\d+)/);
    const id = idMatch ? idMatch[1] : '???';
    const newEntry = `{id: ${id}, name: "Four Tet", category: "musician", stance: "BOYCOTTER", statement: "Joined #DJsForPalestine cultural boycott of Israel in 2018; supports Palestinian rights", sources: [{name: "NME", url: "https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356"}, {name: "Haaretz", url: "https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507"}, {name: "Mixmag", url: "https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news"}]},`;
    html = html.replace(fourTetOldPattern, newEntry);
    console.log('\nFixed Four Tet entry');
} else {
    console.log('\nFour Tet NOT FOUND in HTML');
}

// Now renumber all IDs sequentially
let idCounter = 1;
html = html.replace(/\{id:\s*\d+,\s*name:\s*"/g, (match) => {
    const result = `{id: ${idCounter}, name: "`;
    idCounter++;
    return result;
});
console.log(`\nRenumbered ${idCounter - 1} entries`);

// Update title/meta counts
const totalCount = idCounter - 1;
html = html.replace(/\d+ Verified Artists/g, `${totalCount} Verified Artists`);
html = html.replace(/\d+ verified artists/g, `${totalCount} verified artists`);
html = html.replace(/Search \d+\+ verified/g, `Search ${totalCount}+ verified`);
html = html.replace(/\d+\+ verified artists who support/g, `${totalCount}+ verified artists who support`);
html = html.replace(/Database of \d+\+ verified/g, `Database of ${totalCount}+ verified`);
html = html.replace(/"description": "Database of \d+\+ verified artists[^"]*"/g, `"description": "Database of ${totalCount}+ verified artists supporting the cultural boycott of Israel, sourced from mainstream media"`);
html = html.replace(/"description": "\d+\+ verified artists[^"]*"/g, `"description": "${totalCount}+ verified artists supporting the cultural boycott of Israel"`);

console.log(`\nTotal entries: ${totalCount}`);
console.log(`Removed: ${removed} entries`);

fs.writeFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/index.html', html, 'utf8');
console.log('index.html saved!');
