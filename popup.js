// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // View website button
    document.getElementById('viewWebsite').addEventListener('click', function() {
        chrome.tabs.create({ url: 'https://your-website-url.com' });
    });
    
    // Terms link
    document.getElementById('termsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: chrome.runtime.getURL('terms.html') });
    });
    
    // Privacy link
    document.getElementById('privacyLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: chrome.runtime.getURL('privacy.html') });
    });
    
    // Corrections link
    document.getElementById('correctionsLink').addEventListener('click', function(e) {
        e.preventDefault();
        chrome.tabs.create({ url: 'mailto:corrections@boycott-alerts.com?subject=Information Correction Request' });
    });
    
    // Update total artists count if available
    if (typeof ARTISTS_DATABASE !== 'undefined') {
        document.getElementById('totalArtists').textContent = ARTISTS_DATABASE.length;
    }
});
