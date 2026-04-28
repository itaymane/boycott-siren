// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // View website button
    document.getElementById('viewWebsite').addEventListener('click', function() {
        chrome.tabs.create({ url: 'https://artsiren.co/' });
    });
    
    // Terms link
    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'https://artsiren.co/terms.html' });
    });

    // Privacy link
    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'https://artsiren.co/privacy.html' });
    });

    // Corrections link
    document.getElementById('correctionsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'mailto:contact@artsiren.co?subject=ArtSiren - Report an Issue' });
    });

    // Update total artists count if available
    if (typeof artistsData !== 'undefined') {
        document.getElementById('totalArtists').textContent = artistsData.length;
    }
});
