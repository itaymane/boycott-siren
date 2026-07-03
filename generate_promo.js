// Generates promo_tile.png (440x280) for Chrome Web Store
const sharp = require('sharp');
const path = require('path');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 280" width="440" height="280">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0C233E"/>
      <stop offset="100%" stop-color="#0a1a30"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1C5FEA" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#1C5FEA" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="440" height="280" fill="url(#bg)"/>

  <!-- Subtle blue glow top-left -->
  <ellipse cx="80" cy="80" rx="160" ry="100" fill="url(#glow)"/>

  <!-- Decorative dots grid (top-right) -->
  <g fill="#1C5FEA" opacity="0.12">
    <circle cx="320" cy="24" r="2.5"/><circle cx="340" cy="24" r="2.5"/><circle cx="360" cy="24" r="2.5"/><circle cx="380" cy="24" r="2.5"/><circle cx="400" cy="24" r="2.5"/><circle cx="420" cy="24" r="2.5"/>
    <circle cx="320" cy="44" r="2.5"/><circle cx="340" cy="44" r="2.5"/><circle cx="360" cy="44" r="2.5"/><circle cx="380" cy="44" r="2.5"/><circle cx="400" cy="44" r="2.5"/><circle cx="420" cy="44" r="2.5"/>
    <circle cx="320" cy="64" r="2.5"/><circle cx="340" cy="64" r="2.5"/><circle cx="360" cy="64" r="2.5"/><circle cx="380" cy="64" r="2.5"/><circle cx="400" cy="64" r="2.5"/><circle cx="420" cy="64" r="2.5"/>
    <circle cx="320" cy="84" r="2.5"/><circle cx="340" cy="84" r="2.5"/><circle cx="360" cy="84" r="2.5"/><circle cx="380" cy="84" r="2.5"/><circle cx="400" cy="84" r="2.5"/><circle cx="420" cy="84" r="2.5"/>
  </g>

  <!-- ArtSiren icon (white on navy), scaled to ~100x61 centered left -->
  <!-- Original paths from full icon 1.svg, shifted to position -->
  <g transform="translate(30, 52) scale(0.192)">
    <path fill="white" d="M369.65 129.01L288.49 216.27L277.5 206.05L277.32 206.25L236.8 169.19L254.09 150.28L286.93 180.32L350.88 111.56L369.64 129.01H369.65Z"/>
    <path fill="#084DD1" d="M62.9801 198.97C81.9897 198.97 97.4001 183.273 97.4001 163.91C97.4001 144.547 81.9897 128.85 62.9801 128.85C43.9704 128.85 28.5601 144.547 28.5601 163.91C28.5601 183.273 43.9704 198.97 62.9801 198.97Z"/>
    <path fill="white" d="M474.59 116.61V42.64C474.59 34.57 468.05 28.03 459.98 28.03H78.4901C70.4201 28.03 63.8701 34.57 63.8701 42.64V116.61C90.0001 116.61 111.18 137.79 111.18 163.92C111.18 190.05 90.0001 211.22 63.8701 211.22V285.19C63.8701 293.26 70.4201 299.8 78.4901 299.8H459.98C468.05 299.8 474.59 293.26 474.59 285.19V211.22C448.46 211.22 427.28 190.04 427.28 163.92C427.28 137.8 448.46 116.61 474.59 116.61ZM161.72 88.05H174.91V114.19H161.72V88.05ZM161.72 129.91H174.91V156.05H161.72V129.91ZM161.72 171.77H174.91V197.91H161.72V171.77ZM161.72 213.64H174.91V239.77H161.72V213.64ZM174.91 281.64H161.72V255.5H174.91V281.64ZM174.91 72.32H161.72V46.18H174.91V72.32ZM425.05 102.54C404.99 115.59 391.73 138.21 391.73 163.92C391.73 189.63 404.99 212.24 425.05 225.29V251.48C425.05 257.43 420.18 262.3 414.23 262.3H219.4C213.45 262.3 208.58 257.43 208.58 251.48V76.35C208.58 70.4 213.45 65.53 219.4 65.53H414.23C420.18 65.53 425.05 70.4 425.05 76.35V102.54Z"/>
  </g>

  <!-- Brand name -->
  <text x="143" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="36" font-weight="800" fill="white" letter-spacing="-0.5">ArtSiren</text>

  <!-- Tagline -->
  <text x="143" y="107" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="14" font-weight="400" fill="#7BA7FF" letter-spacing="0.2">Know Before You Go</text>

  <!-- Divider line -->
  <line x1="30" y1="132" x2="410" y2="132" stroke="#1C5FEA" stroke-width="1" stroke-opacity="0.35"/>

  <!-- Value prop -->
  <text x="220" y="162" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" fill="white" text-anchor="middle" letter-spacing="-0.2">Source-backed context</text>
  <text x="220" y="186" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="400" fill="rgba(255,255,255,0.72)" text-anchor="middle">before you stream, book, or support.</text>

  <!-- Bottom trust badges -->
  <rect x="20" y="218" width="120" height="42" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#1C5FEA" stroke-opacity="0.3" stroke-width="1"/>
  <text x="80" y="235" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#7BA7FF" text-anchor="middle" letter-spacing="0.5">VERIFIED</text>
  <text x="80" y="250" font-family="Arial, sans-serif" font-size="9.5" font-weight="400" fill="rgba(255,255,255,0.7)" text-anchor="middle">Information</text>

  <rect x="160" y="218" width="120" height="42" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#1C5FEA" stroke-opacity="0.3" stroke-width="1"/>
  <text x="220" y="235" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#7BA7FF" text-anchor="middle" letter-spacing="0.5">321 ARTISTS</text>
  <text x="220" y="250" font-family="Arial, sans-serif" font-size="9.5" font-weight="400" fill="rgba(255,255,255,0.7)" text-anchor="middle">Tracked</text>

  <rect x="300" y="218" width="120" height="42" rx="8" fill="#ffffff" fill-opacity="0.06" stroke="#1C5FEA" stroke-opacity="0.3" stroke-width="1"/>
  <text x="360" y="235" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#7BA7FF" text-anchor="middle" letter-spacing="0.5">100% LOCAL</text>
  <text x="360" y="250" font-family="Arial, sans-serif" font-size="9.5" font-weight="400" fill="rgba(255,255,255,0.7)" text-anchor="middle">Privacy First</text>
</svg>`;

sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(__dirname, 'promo_tile.png'))
    .then(() => console.log('✓ promo_tile.png (440x280)'))
    .catch(err => console.error('Error:', err));
