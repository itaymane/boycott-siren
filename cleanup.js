const fs = require('fs');

// List of artists to REMOVE (with reasons)
const toRemove = [
    'Dan Snaith',      // Duplicate of Caribou (same person)
    'Fugazi',          // Ian MacKaye said would NOT boycott Israel
    'Carlos Santana',  // Explicitly rejected BDS, performed in Israel 2016
    'Macy Gray',       // Performed in Israel, no confirmed boycott
    'Jello Biafra',    // Explicitly stated NOT endorsing boycott
    'Erykah Badu',     // Performed in Israel, no confirmed BDS pledge
    'Questlove',       // Duplicate of The Roots (already in DB)
    'Black Thought',   // Duplicate of The Roots (already in DB)
    'Grimes',          // Not confirmed on any credible boycott list
    'Jamie xx',        // Not confirmed on any credible boycott list
    'Aphex Twin',      // No confirmed boycott statement found
    'FKA twigs',       // No confirmed boycott statement found
    'Flying Lotus',    // Not confirmed on Musicians for Palestine letter
    'Thundercat',      // Not confirmed on Musicians for Palestine letter
    'Stormzy',         // Not formal boycotter; partnered with McDonald\'s (boycotted by BDS)
    'Dave',            // No confirmed Israel boycott statement
    'Skepta',          // No confirmed Israel boycott statement
    'Dizzee Rascal',   // No confirmed BDS statement
    'Tinie Tempah',    // No confirmed BDS statement
    'Professor Green', // No confirmed BDS statement
    'Example',         // No confirmed BDS statement
    'Wiley',           // Known for antisemitic posts, not a Palestine/BDS activist
    'Kano',            // No confirmed BDS statement from major outlets
    'Giggs',           // No confirmed BDS statement from major outlets
    'Wretch 32',       // No confirmed BDS statement from major outlets
    'Mira Calix',      // Deceased 2022, no confirmed BDS statement from major outlets
    'Vivian Green',    // No confirmed BDS statement from major outlets
    'Minaret Records', // A label, not an artist
];

function removeArtistFromJS(content, name) {
    // Match a JS object block containing this artist name
    // Objects look like: {[whitespace] name: "...", [more content] }
    // We need to handle multiline template literals

    // Build a string to search for the name line
    const namePattern = `name: "${name}"`;
    const namePatternAlt = `name: '${name}'`;

    let idx = content.indexOf(namePattern);
    if (idx === -1) idx = content.indexOf(namePatternAlt);
    if (idx === -1) {
        console.log(`  NOT FOUND: ${name}`);
        return content;
    }

    // Find the start of the object (go backwards to find opening {)
    let start = idx;
    let depth = 0;
    // Find the { that opens this object
    while (start > 0) {
        start--;
        if (content[start] === '{') {
            // Check if this is the object opening (not inside a template literal)
            break;
        }
    }

    // Find the end of the object (go forward to find closing })
    let end = idx;
    let inTemplateLiteral = false;
    let i = start;
    depth = 0;

    while (i < content.length) {
        if (content[i] === '`') {
            inTemplateLiteral = !inTemplateLiteral;
        }
        if (!inTemplateLiteral) {
            if (content[i] === '{') depth++;
            if (content[i] === '}') {
                depth--;
                if (depth === 0) {
                    end = i;
                    break;
                }
            }
        }
        i++;
    }

    // Extract what to remove - include the comma and newlines around it
    // Go back from start to include leading comma and whitespace
    let removeStart = start;
    // Look backwards for a comma that separates this from previous entry
    let j = start - 1;
    while (j >= 0 && (content[j] === ' ' || content[j] === '\n' || content[j] === '\r' || content[j] === '\t')) {
        j--;
    }
    if (j >= 0 && content[j] === ',') {
        removeStart = j; // Remove the trailing comma of previous entry too
    }

    // After the closing }, there might be a comma for next entry, keep that
    let removeEnd = end + 1;

    const removed = content.substring(removeStart, removeEnd);
    console.log(`  REMOVING: ${name} (${removed.length} chars)`);

    content = content.substring(0, removeStart) + content.substring(removeEnd);
    return content;
}

// Process artists-data.js
console.log('\n=== Processing artists-data.js ===');
let jsContent = fs.readFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/artists-data.js', 'utf8');
let originalCount = (jsContent.match(/name: "/g) || []).length;

for (const name of toRemove) {
    jsContent = removeArtistFromJS(jsContent, name);
}

// Fix Sinéad O'Connor name (it's stored as "Sinéad O" in the file - need to check)
const sinead = jsContent.indexOf('Sinéad O');
console.log('\nSinéad O\'Connor entry check...');
if (sinead !== -1) {
    const slice = jsContent.substring(sinead, sinead + 30);
    console.log('Found:', JSON.stringify(slice));
}

let newCount = (jsContent.match(/name: "/g) || []).length;
console.log(`\nOriginal count: ${originalCount}, New count: ${newCount}, Removed: ${originalCount - newCount}`);

// Fix the broken { at line ~967 (double opening brace issue)
// There's a known syntax error: },\n    {\n    {\n        name: "Macy Gray"
// Since we're removing Macy Gray, check if the broken brace got cleaned up
if (jsContent.includes('    {\n    {')) {
    console.log('Found double brace issue, fixing...');
    jsContent = jsContent.replace(/    \{\n    \{/g, '    {');
}

// Update the count comment at the top
jsContent = jsContent.replace(/\/\/ Total: \d+ verified artists/, `// Total: ${newCount} verified artists`);

fs.writeFileSync('C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/artists-data.js', jsContent, 'utf8');
console.log('artists-data.js saved!');
