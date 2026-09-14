// Regenerates artists.json (served at artsiren.co/artists.json) from
// artists-data.js. Run this after editing artist entries — same workflow
// as sync_extension.py, just one more step. background.js in the extension
// fetches this file periodically, so pushing it updates the live extension
// database without a new Chrome Web Store submission.
const fs = require('fs');

const src = fs.readFileSync('artists-data.js', 'utf8');
const match = src.match(/const artistsData = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not find "const artistsData = [...]" in artists-data.js');
  process.exit(1);
}

const artistsData = new Function(`return ${match[1]};`)();
fs.writeFileSync('artists.json', JSON.stringify(artistsData));
console.log(`artists.json written: ${artistsData.length} artists`);
