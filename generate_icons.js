// Generates icon16.png, icon32.png, icon48.png, icon128.png for Chrome extension
const sharp = require('sharp');
const path = require('path');

// Square icon: white ticket+checkmark on #0C233E navy background
// Paths taken from "full icon 1.svg" with fill colors inverted for dark bg
const iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="76" fill="#0C233E"/>
  <g transform="translate(26,115) scale(0.880)">
    <!-- Checkmark (white) -->
    <path fill="white" d="M369.65 129.01L288.49 216.27L277.5 206.05L277.32 206.25L236.8 169.19L254.09 150.28L286.93 180.32L350.88 111.56L369.64 129.01H369.65Z"/>
    <!-- Status dot (blue) -->
    <path fill="#084DD1" d="M62.9801 198.97C81.9897 198.97 97.4001 183.273 97.4001 163.91C97.4001 144.547 81.9897 128.85 62.9801 128.85C43.9704 128.85 28.5601 144.547 28.5601 163.91C28.5601 183.273 43.9704 198.97 62.9801 198.97Z"/>
    <!-- Ticket body (white) -->
    <path fill="white" d="M474.59 116.61V42.64C474.59 34.57 468.05 28.03 459.98 28.03H78.4901C70.4201 28.03 63.8701 34.57 63.8701 42.64V116.61C90.0001 116.61 111.18 137.79 111.18 163.92C111.18 190.05 90.0001 211.22 63.8701 211.22V285.19C63.8701 293.26 70.4201 299.8 78.4901 299.8H459.98C468.05 299.8 474.59 293.26 474.59 285.19V211.22C448.46 211.22 427.28 190.04 427.28 163.92C427.28 137.8 448.46 116.61 474.59 116.61ZM161.72 88.05H174.91V114.19H161.72V88.05ZM161.72 129.91H174.91V156.05H161.72V129.91ZM161.72 171.77H174.91V197.91H161.72V171.77ZM161.72 213.64H174.91V239.77H161.72V213.64ZM174.91 281.64H161.72V255.5H174.91V281.64ZM174.91 72.32H161.72V46.18H174.91V72.32ZM425.05 102.54C404.99 115.59 391.73 138.21 391.73 163.92C391.73 189.63 404.99 212.24 425.05 225.29V251.48C425.05 257.43 420.18 262.3 414.23 262.3H219.4C213.45 262.3 208.58 257.43 208.58 251.48V76.35C208.58 70.4 213.45 65.53 219.4 65.53H414.23C420.18 65.53 425.05 70.4 425.05 76.35V102.54Z"/>
  </g>
</svg>`;

const sizes = [16, 32, 48, 128];
const buf = Buffer.from(iconSVG);

Promise.all(
    sizes.map(size =>
        sharp(buf)
            .resize(size, size)
            .png()
            .toFile(path.join(__dirname, `icon${size}.png`))
            .then(() => console.log(`✓ icon${size}.png`))
    )
).then(() => console.log('All icons generated.'))
 .catch(err => console.error('Error:', err));
