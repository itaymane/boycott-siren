const sharp = require('sharp');

const FACE = 'C:/Users/Itay/AppData/Local/Temp/face_neutral_18.jpg';
const SRC = 'C:/Users/Itay/Pictures/Screenshots/';
const OUT = 'C:/Users/Itay/Downloads/Boycott-Siren-Full-Project/boycott-siren-full-project/';
const NAME_NEW = 'Peter West';

// SVG clip-path (both <circle> and rounded <rect>) renders corrupted/only-
// partially-clipped in this rasterizer. Raster masking (sharp dest-in blend)
// is the reliable substitute: process the photo to its FINAL on-canvas pixel
// size first, then cut the mask shape out of it, so no edge scaling artifacts.
async function maskedPhoto(processFn, w, h, maskSvg) {
  const buf = await processFn(sharp(FACE)).ensureAlpha().png().toBuffer();
  const masked = await sharp(buf)
    .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();
  return 'data:image/png;base64,' + masked.toString('base64');
}
function roundedRectMask(w, h, rx) {
  return `<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${rx}" fill="white"/></svg>`;
}
function circleMask(w, h) {
  const r = Math.min(w, h) / 2;
  return `<svg width="${w}" height="${h}"><circle cx="${w / 2}" cy="${h / 2}" r="${r}" fill="white"/></svg>`;
}

// Sharp's saliency-based "attention" crop was cutting the face off oddly
// (chin/forehead clipped). These are hand-picked crop boxes from the 1024x1024
// source that frame the face consistently well — a tight square for
// avatar/album-art uses, and a wider box (matching the Ticketmaster hero's
// ~1.37 aspect ratio) that includes a bit more shoulder for the landscape use.
const FACE_SQUARE = { left: 130, top: 110, width: 760, height: 760 };
const FACE_WIDE = { left: 0, top: 150, width: 1024, height: 746 };

// Real ArtSiren logo mark (verbatim from content.js). Repeated nested <svg>
// (and even <symbol>/<use>) instances rendered as corrupted/duplicated
// shapes in this SVG rasterizer when used more than once per document —
// direct path data under a plain translate+scale transform is the only
// approach that reproduces cleanly on every repeat.
function logoPaths() {
  return `<path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
    <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
    <ellipse fill="#FF4444" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>`;
}
function chipSvg(x, y) {
  const s = 0.072; // scales the 470x284 viewBox down to ~34x20 icon size
  return `
  <g transform="translate(${x},${y})">
    <rect width="48" height="28" rx="6" fill="white"/>
    <g transform="translate(5, ${4 - 57 * s}) scale(${s})">${logoPaths()}</g>
  </g>`;
}

// The real floating popup card (verbatim proportions from overlay.css
// .boycott-floating-alert, scaled 1.27x from its 268px CSS width to 340px
// so it reads clearly at this canvas size): white header with logo + close,
// navy body with artist name / statement / "View Sources" link.
const CARD_W = 340, CARD_H = 182;
function popupCard(x, y, name, line1, line2) {
  const s = 39 / 284; // logo scale: viewBox is 470 wide x 284 tall -> ~65x39
  return `
  <g transform="translate(${x},${y})">
    <rect width="${CARD_W}" height="${CARD_H}" rx="15" fill="#0C233E" stroke="#0047ab" stroke-width="3"/>
    <path d="M3 15 Q3 3 15 3 H${CARD_W - 15} Q${CARD_W - 3} 3 ${CARD_W - 3} 15 V57 H3 Z" fill="white"/>
    <line x1="3" y1="57" x2="${CARD_W - 3}" y2="57" stroke="#0047ab" stroke-width="3"/>
    <g transform="translate(13, ${9 - 57 * s}) scale(${s})">${logoPaths()}</g>
    <text x="90" y="38" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="19" font-weight="800" fill="#0c233e" letter-spacing="-0.2">ArtSiren</text>
    <line x1="${CARD_W - 34}" y1="20" x2="${CARD_W - 20}" y2="34" stroke="rgba(0,0,0,0.35)" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="${CARD_W - 20}" y1="20" x2="${CARD_W - 34}" y2="34" stroke="rgba(0,0,0,0.35)" stroke-width="2.5" stroke-linecap="round"/>

    <text x="15" y="94" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="18" font-weight="700" fill="white">${name}</text>
    <text x="15" y="120" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="15" fill="rgba(255,255,255,0.6)">${line1}</text>
    <text x="15" y="142" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="15" fill="rgba(255,255,255,0.6)">${line2}</text>
    <text x="15" y="168" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="15" font-weight="600" fill="#5B9BFF">View Sources →</text>
  </g>`;
}
const CARD_LINE1 = 'Has publicly addressed performing in the';
const CARD_LINE2 = 'region; statement independently verified…';

// ===================================================================
// 1. SPOTIFY — 1459x801 native, edited then cropped to 1280x800
// ===================================================================
async function buildSpotify() {
  const albumArtUri = await maskedPhoto(
    img => img.extract(FACE_SQUARE).resize(210, 210)
      .modulate({ brightness: 0.6, saturation: 0.32 }).tint({ r: 25, g: 50, b: 120 }),
    210, 210, roundedRectMask(210, 210, 4));
  const avatarUri = await maskedPhoto(
    img => img.extract(FACE_SQUARE).resize(34, 34)
      .modulate({ brightness: 0.85, saturation: 0.5 }),
    34, 34, circleMask(34, 34));
  const miniThumbUri = await maskedPhoto(
    img => img.extract(FACE_SQUARE).resize(52, 58, { fit: 'cover' })
      .modulate({ brightness: 0.6, saturation: 0.32 }).tint({ r: 25, g: 50, b: 120 }),
    52, 58, roundedRectMask(52, 58, 2));

  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1459" height="801" viewBox="0 0 1459 801">
    <defs>
      <linearGradient id="heroCover" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0573a9"/>
        <stop offset="45%" stop-color="#115180"/>
        <stop offset="100%" stop-color="#02477a"/>
      </linearGradient>
    </defs>

    <!-- album art + title -->
    <rect x="478" y="86" width="812" height="150" fill="url(#heroCover)"/>
    <image href="${albumArtUri}" x="480" y="88" width="210" height="210"/>
    <text x="708" y="156" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="600" fill="rgba(255,255,255,0.85)" letter-spacing="1">ALBUM</text>
    <text x="704" y="222" font-family="'Helvetica Neue', Arial, sans-serif" font-size="55" font-weight="800" fill="white">Windward Fields</text>

    <!-- avatar + name (leave meta text " • 2000 • ..." at x970+ untouched) -->
    <rect x="700" y="246" width="270" height="40" fill="#0f4676"/>
    <circle cx="725" cy="265" r="17" fill="#264a73"/>
    <image href="${avatarUri}" x="708" y="248" width="34" height="34"/>
    <text x="755" y="273" font-family="'Helvetica Neue', Arial, sans-serif" font-size="19" font-weight="700" fill="white">${NAME_NEW}</text>
    ${chipSvg(913, 248)}

    <!-- track 1 -->
    <rect x="530" y="606" width="740" height="34" fill="#121212"/>
    <text x="538" y="632" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="700" fill="white">Windward Fields</text>
    <rect x="530" y="634" width="270" height="44" fill="#121212"/>
    <text x="538" y="663" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#b3b3b3">${NAME_NEW}</text>
    ${chipSvg(637, 645)}

    <!-- track 2 -->
    <rect x="530" y="691" width="740" height="32" fill="#121212"/>
    <text x="538" y="717" font-family="'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="700" fill="white">Ordinary Skies</text>
    <rect x="530" y="719" width="270" height="44" fill="#121212"/>
    <text x="538" y="748" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#b3b3b3">${NAME_NEW}</text>
    ${chipSvg(637, 730)}

    <!-- mini player thumb -->
    <rect x="576" y="337" width="60" height="66" fill="#062440"/>
    <image href="${miniThumbUri}" x="580" y="341" width="52" height="58"/>

    <!-- ArtSiren popup — dropped below the big hero title (y96 collided with "Windward Fields"); this SVG is composited pre-crop (crop removes 178px from the left), so shifted +178 here -->
    ${popupCard(1096, 228, NAME_NEW, CARD_LINE1, CARD_LINE2)}
  </svg>`;

  const edited = await sharp(SRC + 'Screenshot 2026-07-04 101207.png')
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .toBuffer();

  await sharp(edited)
    .extract({ left: 178, top: 0, width: 1281, height: 800 })
    .resize(1280, 800)
    .png()
    .toFile(OUT + 'store_screenshot_spotify.png');
  console.log('spotify done');
}

// ===================================================================
// 2. TICKETMASTER — 1900x654 native. Hero kept at native pixel size
//    (no stretch — stretching introduced no real bug but is avoided on
//    principle now that we don't need it); leftover vertical space is
//    filled with a solid bar instead of distorting real content.
// ===================================================================
async function buildTicketmaster() {
  const heroPhotoUri = await maskedPhoto(
    img => img.extract(FACE_WIDE).resize(350, 255)
      .modulate({ brightness: 0.65, saturation: 0.4 }).tint({ r: 150, g: 95, b: 40 }),
    350, 255, roundedRectMask(350, 255, 8));

  const srcPath = SRC + 'Screenshot 2026-07-04 101236.png';

  const heroOverlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="654" viewBox="0 0 1280 654">
    <!-- breadcrumb: 'Rock' ends x302, '/' at 309-315, 'Elvis...' started x322 — cover only from x316 on -->
    <rect x="316" y="254" width="310" height="28" fill="#2a2928"/>
    <text x="324" y="276" font-family="Arial, sans-serif" font-size="16" fill="#cfcfcf">Peter West Tickets</text>
    <!-- hero photo -->
    <rect x="50" y="325" width="350" height="255" rx="8" fill="#3a2818"/>
    <image href="${heroPhotoUri}" x="50" y="325" width="350" height="255"/>
    <!-- H1 (widened: original had a ticket-icon badge trailing the longer "Elvis Costello Tickets" text, extending past x1140) -->
    <rect x="440" y="365" width="800" height="82" fill="#161616"/>
    <text x="443" y="435" font-family="Arial, sans-serif" font-size="52" font-weight="800" fill="white">Peter West Tickets</text>
  </svg>`;

  const heroEdited = await sharp(srcPath)
    .extract({ left: 0, top: 0, width: 1280, height: 654 })
    .composite([{ input: Buffer.from(heroOverlay), top: 0, left: 0 }])
    .toBuffer();

  const cardOverlay = `<svg xmlns="http://www.w3.org/2000/svg" width="440" height="300" viewBox="0 0 440 300">
    <rect x="30" y="90" width="220" height="34" fill="#0c233e"/>
    <text x="33" y="117" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="24" font-weight="800" fill="white">${NAME_NEW}</text>
    <rect x="30" y="128" width="360" height="60" fill="#0c233e"/>
    <text x="33" y="152" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.65)">Has publicly addressed performing in the</text>
    <text x="33" y="174" font-family="-apple-system, 'Segoe UI', Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.65)">region; statement independently verified…</text>
  </svg>`;

  const cardBlock = await sharp(srcPath)
    .extract({ left: 1450, top: 100, width: 440, height: 300 })
    .composite([{ input: Buffer.from(cardOverlay), top: 0, left: 0 }])
    .toBuffer();
  const cardScaled = await sharp(cardBlock).resize(340, 232).ensureAlpha().toBuffer();
  const cardMasked = await sharp(cardScaled)
    .composite([{ input: Buffer.from(roundedRectMask(340, 232, 14)), blend: 'dest-in' }])
    .png()
    .toBuffer();

  const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800">
    <rect x="0" y="654" width="1280" height="76" fill="#0C233E"/>
    <rect x="0" y="730" width="1280" height="70" fill="#0C233E"/>
    <text x="640" y="772" font-family="'Helvetica Neue', Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" letter-spacing="0.3">ArtSiren — Know before you go</text>
  </svg>`;

  await sharp({ create: { width: 1280, height: 800, channels: 3, background: '#0C233E' } })
    .composite([
      { input: heroEdited, top: 0, left: 0 },
      { input: cardMasked, top: 96, left: 918 },
      { input: Buffer.from(bannerSvg), top: 0, left: 0 },
    ])
    .png()
    .toFile(OUT + 'store_screenshot_ticketmaster.png');
  console.log('ticketmaster done');
}

// ===================================================================
// 3. YOUTUBE — 1555x805 native, edited then cropped to 1280x800
// ===================================================================
async function buildYoutube() {
  const avatarUri = await maskedPhoto(
    img => img.extract(FACE_SQUARE).resize(64, 64)
      .modulate({ brightness: 0.95, saturation: 0.5 }),
    64, 64, circleMask(64, 64));

  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="1555" height="805" viewBox="0 0 1555 805">
    <!-- search box text -->
    <rect x="1000" y="14" width="90" height="36" fill="#ffffff"/>
    <text x="1085" y="40" font-family="Arial, sans-serif" font-size="17" fill="#0f0f0f" text-anchor="end">peter west</text>

    <!-- suggestion row 'Lorde' -->
    <rect x="45" y="106" width="65" height="24" fill="#d2c8c6"/>
    <text x="50" y="126" font-family="Arial, sans-serif" font-size="15" fill="#0f0f0f">Peter West</text>

    <!-- title (measured absolute bbox x1055-1400,y670-702) -->
    <rect x="1045" y="660" width="420" height="52" fill="#ffffff"/>
    <text x="1050" y="695" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#0f0f0f">Peter West - Wildflower (Official Video)</text>

    <!-- channel row (name+icon x1258-1320,y724-756; subs line x1258-1350,y756-784; avatar center 1400,749 r32) -->
    <rect x="1250" y="718" width="230" height="72" fill="#ffffff"/>
    <circle cx="1400" cy="749" r="32" fill="#4a5568"/>
    <image href="${avatarUri}" x="1368" y="717" width="64" height="64"/>
    <text x="1255" y="742" font-family="Arial, sans-serif" font-size="15" font-weight="600" fill="#0f0f0f">${NAME_NEW}</text>
    <text x="1255" y="761" font-family="Arial, sans-serif" font-size="12" fill="#606060">5.18M subscribers</text>

    <!-- ArtSiren popup — same on-canvas position as the Ticketmaster shot (final x918,y96); this SVG is composited pre-crop (crop removes 275px from the left, 5px from the top), so shifted +275/+5 here -->
    ${popupCard(1193, 101, NAME_NEW, CARD_LINE1, CARD_LINE2)}
  </svg>`;

  const edited = await sharp(SRC + 'Screenshot 2026-07-04 101327.png')
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .toBuffer();

  await sharp(edited)
    .extract({ left: 275, top: 5, width: 1280, height: 800 })
    .png()
    .toFile(OUT + 'store_screenshot_youtube.png');
  console.log('youtube done');
}

(async () => {
  await buildSpotify();
  await buildTicketmaster();
  await buildYoutube();
})().catch(err => { console.error(err); process.exit(1); });
