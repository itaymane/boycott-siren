document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('viewWebsite').addEventListener('click', function() {
        chrome.tabs.create({ url: 'https://artsiren.co/' });
    });

    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'https://artsiren.co/terms.html' });
    });

    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'https://artsiren.co/privacy.html' });
    });

    document.getElementById('correctionsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'mailto:contact@artsiren.co?subject=ArtSiren - Report an Issue' });
    });

    if (typeof artistsData !== 'undefined') {
        document.getElementById('totalArtists').textContent = artistsData.length;
    }

    // Alert mode selector
    const modeBtns = document.querySelectorAll('.mode-btn');
    chrome.storage.local.get(['alertMode'], result => {
        const mode = result.alertMode || 'both';
        modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
    });
    modeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            chrome.storage.local.set({ alertMode: this.dataset.mode });
            modeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // YouTube hide-in-feed toggle
    const ytToggle = document.getElementById('ytHideToggle');
    chrome.storage.sync.get(['hideYouTubeFeed'], result => {
        ytToggle.checked = !!result.hideYouTubeFeed;
    });
    ytToggle.addEventListener('change', function() {
        chrome.storage.sync.set({ hideYouTubeFeed: this.checked });
    });

    // Page scanner (Spotify / YouTube)
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const tab = tabs[0];
        if (!tab || !tab.url) return;

        const isSpotify = tab.url.includes('spotify.com');
        const isYouTube = tab.url.includes('youtube.com');
        if (!isSpotify && !isYouTube) return;

        const scanSection = document.getElementById('pageScanSection');
        const scanSite = document.getElementById('scanSiteName');
        const scanOutput = document.getElementById('scanOutput');

        scanSection.style.display = 'block';
        scanSite.textContent = (isSpotify ? '🎵 Spotify' : '▶ YouTube') + ' — this page';

        function runScan() {
            scanOutput.innerHTML = '<span class="scan-scanning">Scanning…</span>';
            chrome.tabs.sendMessage(tab.id, { action: 'scanPage' }, response => {
                if (chrome.runtime.lastError || !response) {
                    scanOutput.innerHTML = '<span class="scan-none">Reload the page and try again</span>';
                    return;
                }
                const artists = response.artists || [];
                if (artists.length === 0) {
                    scanOutput.innerHTML = '<span class="scan-none">No boycotting artists detected</span>';
                } else {
                    const items = artists.map(n => `<div class="scan-artist">🚫 ${n}</div>`).join('');
                    scanOutput.innerHTML = `<div class="scan-count">Found ${artists.length} boycotting artist${artists.length > 1 ? 's' : ''}</div>${items}`;
                }
            });
        }

        runScan();
        document.getElementById('scanNowBtn').addEventListener('click', runScan);
    });
});
