// Boycott Siren - Workaround Version
// Uses floating overlay that can't be hidden by page CSS

(function() {
    'use strict';
    
    const CONFIG = {
        checkInterval: 2000,
        debounceDelay: 500
    };
    
    const processedElements = new WeakSet();
    const displayedArtists = new Set();
    
    // Detect which site we're on
    function getSiteDetector() {
        const hostname = window.location.hostname;
        
        if (hostname.includes('ticketmaster')) {
            return detectTicketmaster;
        }
        if (hostname.includes('ticketek')) {
            return detectTicketek;
        }
        if (hostname.includes('moshtix')) {
            return detectMoshtix;
        }
        if (hostname.includes('tixel')) {
            return detectTixel;
        }
        if (hostname.includes('frontiertouring')) {
            return detectFrontierTouring;
        }
        if (hostname.includes('livenation')) {
            return detectLiveNation;
        }
        if (hostname.includes('stubhub')) {
            return detectStubHub;
        }
        if (hostname.includes('seatgeek')) {
            return detectSeatGeek;
        }
        if (hostname.includes('axs')) {
            return detectAXS;
        }
        if (hostname.includes('vividseats')) {
            return detectVividSeats;
        }
        if (hostname.includes('eventbrite')) {
            return detectEventbrite;
        }
        if (hostname.includes('seetickets')) {
            return detectSeeTickets;
        }
        if (hostname.includes('gigantic')) {
            return detectGigantic;
        }
        if (hostname.includes('bandsintown')) {
            return detectBandsintown;
        }
        if (hostname.includes('songkick')) {
            return detectSongkick;
        }
        
        return null;
    }
    
    // Ticketmaster detection
    function detectTicketmaster() {
        const selectors = [
            'h1', 'h2', 'h3', 'h4',
            '.event-details h1',
            '.event-name',
            '[data-testid="event-name"]',
            'h1.event-listing__name',
            '.event-card__title',
            '.eds-card-header__title',
            '.event-listing__headliners',
            '.eds-text-color--primary',
            '.eds-text-bm',
            '[class*="artist"]',
            '[class*="performer"]',
            '[class*="headliner"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Live Nation detection
    function detectLiveNation() {
        const selectors = [
            'h1', 'h2', 'h3',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="headline"]',
            '[data-testid="artist-name"]',
            '[data-testid="event-name"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // StubHub detection
    function detectStubHub() {
        const selectors = [
            'h1', 'h2',
            '[data-testid="event-title"]',
            '[data-testid="performer-name"]',
            '.EventHeader__Title',
            '.PerformerName',
            '[class*="event-title"]',
            '[class*="performer"]',
            '[class*="artist"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // SeatGeek detection
    function detectSeatGeek() {
        const selectors = [
            'h1', 'h2',
            '[data-testid="event-title"]',
            '.EventTitle',
            '.PerformerName',
            '[class*="event"]',
            '[class*="performer"]',
            '[class*="title"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // AXS detection
    function detectAXS() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[data-event-name]',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="performer"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Vivid Seats detection
    function detectVividSeats() {
        const selectors = [
            'h1', 'h2',
            '[data-testid="event-name"]',
            '.event-title',
            '.production-name',
            '[class*="event"]',
            '[class*="production"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Eventbrite detection
    function detectEventbrite() {
        const selectors = [
            'h1', 'h2',
            '[class*="event-title"]',
            '[class*="organizer"]',
            '.event-card__title',
            '.listing-organizer-name',
            '[data-automation="event-title"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // See Tickets detection
    function detectSeeTickets() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Gigantic detection
    function detectGigantic() {
        const selectors = [
            'h1', 'h2',
            '.event-title',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Bandsintown detection
    function detectBandsintown() {
        const selectors = [
            'h1', 'h2',
            '[data-testid="artist-name"]',
            '[data-testid="event-title"]',
            '.artist-name',
            '.event-name',
            '[class*="artist"]',
            '[class*="event"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Songkick detection
    function detectSongkick() {
        const selectors = [
            'h1', 'h2',
            '.artist-name',
            '.event-title',
            '[class*="artist"]',
            '[class*="event"]',
            'strong a'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Australian Sites
    function detectTicketek() {
        const selectors = [
            'h1', 'h2', 'h3',
            '.event-name',
            '.artist-name', 
            '[class*="title"]',
            '[class*="artist"]',
            '[data-testid*="event"]',
            'a[href*="/artist/"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    function detectMoshtix() {
        const selectors = [
            'h1', 'h2',
            '.artist-name',
            '.event-title',
            '[class*="artist"]',
            '[class*="event"]',
            'a.event-link'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    function detectTixel() {
        const selectors = [
            'h1', 'h2',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="title"]',
            'a[href*="/event/"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    function detectFrontierTouring() {
        const selectors = [
            'h1', 'h2', 'h3',
            '.artist-name',
            '.tour-title',
            '[class*="artist"]',
            '[class*="event"]',
            'a[href*="/tours/"]'
        ];
        
        return getElementsFromSelectors(selectors);
    }
    
    // Helper function to get elements from selectors
    function getElementsFromSelectors(selectors) {
        const elements = [];
        selectors.forEach(selector => {
            try {
                const found = document.querySelectorAll(selector);
                found.forEach(el => {
                    if (!processedElements.has(el) && el.textContent.trim().length > 0) {
                        elements.push(el);
                    }
                });
            } catch (e) {
                // Ignore invalid selectors
            }
        });
        
        return elements;
    }
    
    // Find matching artist with improved whole-word matching
    function findMatchingArtist(text) {
        if (!text || text.length < 3) return null;
        
        const normalizedText = text.toLowerCase().trim();
        
        for (const artist of ARTISTS_DATABASE) {
            const artistName = artist.name.toLowerCase();
            
            // Exact match
            if (normalizedText === artistName) {
                return artist;
            }
            
            // Word boundary matching - prevents "The Ex" matching in "Massive Attack"
            const wordBoundaryRegex = new RegExp('\\b' + artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
            if (wordBoundaryRegex.test(text)) {
                return artist;
            }
            
            // Handle "The" prefix
            if (artistName.startsWith('the ')) {
                const nameWithoutThe = artistName.substring(4);
                const withoutTheRegex = new RegExp('\\b' + nameWithoutThe.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
                if (withoutTheRegex.test(text)) {
                    return artist;
                }
            }
        }
        
        return null;
    }
    
    // Create floating overlay alert
    function createFloatingAlert(artist) {
        // Don't show duplicate alerts
        if (displayedArtists.has(artist.name)) {
            return;
        }
        displayedArtists.add(artist.name);
        
        const overlay = document.createElement('div');
        overlay.className = 'boycott-floating-alert';
        overlay.setAttribute('data-artist', artist.name);
        
        // All artists are boycotters - always show red badge
        const stanceColor = '#ff4444';
        const stanceLabel = 'BOYCOTTER';
        
        overlay.innerHTML = `
            <div class="boycott-alert-content">
                <div class="boycott-alert-header">
                    <div class="boycott-alert-logo">
                        <img src="${chrome.runtime.getURL('logo.png')}" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;">
                    </div>
                    <div class="boycott-header-text">
                        <div class="boycott-alert-title">BOYCOTT SIREN</div>
                        <div class="boycott-alert-subtitle">Artist detected on boycott list</div>
                    </div>
                    <button class="boycott-alert-close" aria-label="Close">×</button>
                </div>
                
                <div class="boycott-alert-body">
                    <div class="boycott-artist-name">${artist.name}</div>
                    <div class="boycott-stance-badge" style="background: ${stanceColor};">${stanceLabel}</div>
                    <div class="boycott-statement">${artist.statement}</div>
                    <button class="boycott-details-btn">View Sources & Details</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Animate in
        setTimeout(() => overlay.classList.add('show'), 10);
        
        // Close button
        overlay.querySelector('.boycott-alert-close').addEventListener('click', () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        });
        
        // Details button - open website
        overlay.querySelector('.boycott-details-btn').addEventListener('click', () => {
            const artistName = encodeURIComponent(artist.name);
            window.open(`https://boycott-siren.netlify.app/?artist=${artistName}`, '_blank');
        });
        
        // NO AUTO-HIDE - stays until user closes it manually
        
        console.log('🚨 FLOATING ALERT CREATED FOR:', artist.name);
    }
    
    // Show detailed modal
    function showArtistModal(artist) {
        const existing = document.getElementById('boycott-alert-modal');
        if (existing) existing.remove();
        
        const modal = document.createElement('div');
        modal.id = 'boycott-alert-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 2147483646;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        `;
        
        const stanceColor = artist.stance === 'boycott' ? '#ff8c42' : '#ffc107';
        const stanceLabel = artist.stance === 'boycott' ? 'Boycott' : 'Critical';
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: white;
            border-radius: 16px;
            padding: 32px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        `;
        
        content.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h2 style="margin: 0 0 8px 0; color: #0047ab; font-size: 24px;">${artist.name}</h2>
                <div style="display: inline-block; padding: 4px 12px; background: ${stanceColor}; color: white; border-radius: 12px; font-size: 12px; font-weight: 500;">
                    ${stanceLabel}
                </div>
            </div>
            
            <div style="background: #f5f7fa; padding: 16px; border-radius: 12px; margin-bottom: 20px;">
                <div style="font-size: 13px; color: #666; margin-bottom: 4px;">Statement:</div>
                <div style="font-size: 14px; color: #333;">${artist.statement}</div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <div style="font-size: 13px; color: #666; margin-bottom: 8px; font-weight: 500;">Sources:</div>
                ${artist.sources.map(source => `
                    <div style="font-size: 12px; color: #0047ab; margin-bottom: 4px;">• ${source}</div>
                `).join('')}
            </div>
            
            <div style="background: #f8f9fa; padding: 12px; border-radius: 8px; margin-bottom: 20px;">
                <div style="font-size: 11px; color: #666; line-height: 1.5;">
                    Information from publicly documented sources. All data is independently verifiable.
                </div>
            </div>
            
            <button id="close-modal" style="
                width: 100%;
                padding: 12px;
                background: linear-gradient(135deg, #0047ab 0%, #4a90e2 100%);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
            ">Close</button>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        content.querySelector('#close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
    
    // Create small icon indicator (in addition to floating alert)
    function createSmallIcon(artist) {
        const icon = document.createElement('span');
        icon.className = 'boycott-small-icon';
        icon.setAttribute('data-artist', artist.name);
        icon.title = `⚠️ BOYCOTT SIREN: ${artist.name} - Click for details`;
        
        const color = artist.stance === 'boycott' ? '#ff4444' : '#ffc107';
        
        icon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="icon-glow-${artist.name.replace(/\s/g, '')}">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path d="M10 3 L16 15 L4 15 Z" fill="${color}" stroke="#ffffff" stroke-width="1.5" filter="url(#icon-glow-${artist.name.replace(/\s/g, '')})"/>
                <g transform="translate(10, 10) scale(0.3)">
                    <path d="M0,-6 L3,0 L-3,0 Z" fill="white"/>
                    <path d="M0,6 L3,0 L-3,0 Z" fill="white"/>
                </g>
            </svg>
        `;
        
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showArtistModal(artist);
        });
        
        return icon;
    }
    
    // Process elements
    function processElements() {
        const detector = getSiteDetector();
        if (!detector) {
            console.log('🔵 No detector found for this site');
            return;
        }
        
        const elements = detector();
        console.log('🔵 Workaround: Found', elements.length, 'elements to check');
        
        let matchCount = 0;
        elements.forEach(element => {
            const text = element.textContent;
            const artist = findMatchingArtist(text);
            
            if (artist && !processedElements.has(element)) {
                console.log('🔵 MATCH FOUND:', artist.name, 'in text:', text.substring(0, 50));
                
                // Show floating alert (only once per artist)
                createFloatingAlert(artist);
                
                // Add small icon to this element
                if (!element.querySelector('.boycott-small-icon')) {
                    const icon = createSmallIcon(artist);
                    element.appendChild(icon);
                    console.log('📌 Added small icon to element');
                }
                
                processedElements.add(element);
                matchCount++;
            }
        });
        
        console.log('🔵 Total matches found:', matchCount);
    }
    
    // Debounce
    let debounceTimeout;
    function debounce(func, delay) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(func, delay);
    }
    
    // Initialize
    function init() {
        console.log('🔵 Boycott Siren - Workaround: Started');
        console.log('🔵 Current URL:', window.location.href);
        console.log('🔵 Artists in database:', ARTISTS_DATABASE.length);
        
        setTimeout(() => {
            console.log('🔵 Running first detection...');
            processElements();
        }, 1000);
        
        const observer = new MutationObserver(() => {
            debounce(processElements, CONFIG.debounceDelay);
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        setInterval(() => {
            console.log('🔵 Periodic check...');
            processElements();
        }, CONFIG.checkInterval);
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
