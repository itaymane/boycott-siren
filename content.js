// ArtSiren - Workaround Version
// Uses floating overlay that can't be hidden by page CSS

(function() {
    'use strict';
    
    const CONFIG = {
        checkInterval: 2000,
        debounceDelay: 500
    };
    
    let processedElements = new WeakSet();
    let displayedArtists = new Set();
    let feedDetectedArtists = new Set();

    let settings = { hideYouTubeFeed: false, alertMode: 'both' };
    chrome.storage.sync.get(['hideYouTubeFeed'], result => {
        settings.hideYouTubeFeed = !!result.hideYouTubeFeed;
    });
    chrome.storage.sync.onChanged.addListener(changes => {
        if ('hideYouTubeFeed' in changes) {
            settings.hideYouTubeFeed = changes.hideYouTubeFeed.newValue;
            applyFeedHideSetting();
        }
    });
    chrome.storage.local.get(['alertMode'], result => {
        settings.alertMode = result.alertMode || 'both';
    });
    chrome.storage.local.onChanged.addListener(changes => {
        if ('alertMode' in changes) settings.alertMode = changes.alertMode.newValue || 'both';
    });
    
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
        if (hostname.includes('ticketnetwork')) {
            return detectTicketNetwork;
        }
        if (hostname.includes('tixr')) {
            return detectTixr;
        }
        if (hostname.includes('dice.fm')) {
            return detectDice;
        }
        if (hostname.includes('eventim')) {
            return detectEventim;
        }
        if (hostname.includes('showclix')) {
            return detectShowclix;
        }
        if (hostname.includes('universe.com')) {
            return detectUniverse;
        }
        if (hostname.includes('etix')) {
            return detectEtix;
        }
        if (hostname.includes('alttickets')) {
            return detectAltTickets;
        }
        if (hostname.includes('skiddle')) {
            return detectSkiddle;
        }
        if (hostname.includes('theticketfactory')) {
            return detectTheTicketFactory;
        }
        if (hostname.includes('ticketweb')) {
            return detectTicketWeb;
        }
        if (hostname.includes('ticketone')) {
            return detectTicketOne;
        }
        if (hostname.includes('fnac')) {
            return detectFnac;
        }
        if (hostname.includes('admission.com')) {
            return detectAdmission;
        }
        if (hostname.includes('oztix')) {
            return detectOztix;
        }
        if (hostname.includes('trybooking')) {
            return detectTryBooking;
        }
        if (hostname.includes('viagogo')) {
            return detectViaGogo;
        }
        if (hostname.includes('bookmyshow')) {
            return detectBookMyShow;
        }
        if (hostname.includes('youtube.com')) {
            return detectYouTube;
        }
        if (hostname.includes('spotify.com')) {
            return detectSpotify;
        }
        if (hostname.includes('music.apple.com')) {
            return detectAppleMusic;
        }
        if (hostname.includes('netflix.com')) {
            return detectNetflix;
        }
        if (hostname.includes('primevideo.com')) {
            return detectAmazonPrime;
        }
        if (hostname.includes('disneyplus.com')) {
            return detectDisneyPlus;
        }

        return null;
    }

    function getSiteCategory() {
        const hostname = window.location.hostname;
        const streamingHosts = ['youtube.com', 'spotify.com', 'music.apple.com', 'netflix.com', 'primevideo.com', 'disneyplus.com'];
        return streamingHosts.some(h => hostname.includes(h)) ? 'streaming' : 'tickets';
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
    
    // YouTube detection (video pages, channel pages, search results, Music)
    function detectYouTube() {
        const selectors = [
            // Video page: title (usually "Artist - Song Title")
            'h1.ytd-watch-metadata',
            'h1 yt-formatted-string',
            // Video page: channel/artist name below the video
            '#owner ytd-channel-name a',
            '#owner-name a',
            '#upload-info ytd-channel-name a',
            // Channel page: channel header name (specific to header, not sidebar)
            '#inner-header-container ytd-channel-name yt-formatted-string',
            // Search results: channel names
            'ytd-channel-renderer #text a',
            // Search results handled by processYouTubeFeed (badge only, no popup)
            // YouTube Music
            'ytmusic-detail-header-renderer h2 yt-formatted-string',
            'ytmusic-responsive-list-item-renderer .secondary-flex-columns a'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Spotify detection (artist pages, now-playing bar, track rows)
    function detectSpotify() {
        const selectors = [
            'h1',
            '[data-testid="entityTitle"]',
            '[data-testid="artist-link"]',
            '[data-testid="now-playing-widget"] a',
            '[data-testid="context-item-link"]',
            '[class*="artist-name"]',
            'span[data-encore-id="text"] a',
            '.encore-text-body-small a'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Apple Music detection (artist pages, album pages)
    function detectAppleMusic() {
        const selectors = [
            'h1',
            '.artist-header__title',
            '.product-creator',
            '[class*="artist-name"]',
            '[class*="product-artist"]',
            '[data-testid="artist-name"]',
            '.headings__title',
            '.headings__subtitles a'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Netflix detection (title pages, browse cards)
    function detectNetflix() {
        const selectors = [
            'h1',
            '.title-title',
            '[class*="title-title"]',
            '[class*="entity-title"]',
            '[data-uia="title"]',
            '[data-uia="video-title"]',
            '.previewModal--player-titleTreatmentWrapper h1',
            '[class*="TitleCard"] p'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Amazon Prime Video detection (title pages, cast sections)
    function detectAmazonPrime() {
        const selectors = [
            'h1',
            '[data-automation-id="title"]',
            '[class*="DpTitleName"]',
            '[class*="CastWidget"] a',
            '[data-testid="title"]',
            '[class*="actor-name"]',
            '[class*="cast-name"]',
            'a[href*="/gp/video/detail/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Disney+ detection (title pages, details panel)
    function detectDisneyPlus() {
        const selectors = [
            'h1',
            '[class*="title__title"]',
            '[data-testid="title"]',
            '[class*="hero-title"]',
            '[class*="StandaloneTitle"]',
            '[class*="detailsMetadata"] h1',
            '[class*="entity-title"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // TicketNetwork detection
    function detectTicketNetwork() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.performer-name',
            '[class*="event-title"]',
            '[class*="performer"]',
            '[class*="artist"]',
            'a[href*="/tickets/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Tixr detection
    function detectTixr() {
        const selectors = [
            'h1', 'h2',
            '[class*="artist"]',
            '[class*="event-name"]',
            '[class*="event-title"]',
            '[data-testid*="artist"]',
            '[data-testid*="event"]',
            '.lineup-artist'
        ];
        return getElementsFromSelectors(selectors);
    }

    // DICE detection
    function detectDice() {
        const selectors = [
            'h1', 'h2',
            '[class*="artist"]',
            '[class*="event"]',
            '[class*="lineup"]',
            '[data-testid="artist-name"]',
            '[data-testid="event-title"]',
            '.event-details__title'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Eventim detection (eventim.com and eventim.de)
    function detectEventim() {
        const selectors = [
            'h1', 'h2',
            '.stage-title',
            '.product-title',
            '.artist-name',
            '[class*="artist"]',
            '[class*="event-title"]',
            '[class*="stage"]',
            '[itemprop="name"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Showclix detection
    function detectShowclix() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.event-title',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="performer"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Universe detection
    function detectUniverse() {
        const selectors = [
            'h1', 'h2',
            '.event-title',
            '.organizer-name',
            '[class*="event-name"]',
            '[class*="organizer"]',
            '[data-automation*="event"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Etix detection
    function detectEtix() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="performer"]',
            'a[href*="/event/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // AltTickets detection
    function detectAltTickets() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]',
            'a[href*="/tickets/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Skiddle detection
    function detectSkiddle() {
        const selectors = [
            'h1', 'h2',
            '.artist-name',
            '.event-name',
            '[class*="artist"]',
            '[class*="event-title"]',
            '.headliner',
            'a[href*="/whats-on/artist/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // The Ticket Factory detection
    function detectTheTicketFactory() {
        const selectors = [
            'h1', 'h2',
            '.event-title',
            '.event-name',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="performer"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // TicketWeb detection
    function detectTicketWeb() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event-title"]',
            '[class*="artist"]',
            '[class*="performer"]',
            'a[href*="/event/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // TicketOne (Italy) detection
    function detectTicketOne() {
        const selectors = [
            'h1', 'h2',
            '.event-title',
            '.artist-name',
            '[class*="artist"]',
            '[class*="event"]',
            '[itemprop="name"]',
            'a[href*="/artist/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Fnac (France) detection
    function detectFnac() {
        const selectors = [
            'h1', 'h2',
            '.artist-name',
            '.event-title',
            '[class*="artist"]',
            '[class*="spectacle"]',
            '[class*="concert"]',
            '[itemprop="name"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Admission (Canada) detection
    function detectAdmission() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]',
            '[class*="performer"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // OzTix (Australia) detection
    function detectOztix() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.artist-name',
            '[class*="event"]',
            '[class*="artist"]',
            'a[href*="/event/"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // TryBooking (Australia) detection
    function detectTryBooking() {
        const selectors = [
            'h1', 'h2',
            '.event-name',
            '.organiser-name',
            '[class*="event-title"]',
            '[class*="organiser"]',
            '[class*="event"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // Viagogo detection
    function detectViaGogo() {
        const selectors = [
            'h1', 'h2',
            '[data-testid="performer-name"]',
            '[data-testid="event-title"]',
            '[class*="performer"]',
            '[class*="event-name"]',
            '[class*="artist"]'
        ];
        return getElementsFromSelectors(selectors);
    }

    // BookMyShow detection
    function detectBookMyShow() {
        const selectors = [
            'h1', 'h2',
            '.artist-name',
            '.event-name',
            '[class*="artist"]',
            '[class*="event-title"]',
            '[data-testid="event-name"]',
            'a[href*="/artist/"]'
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
        
        for (const artist of artistsData) {
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
                        <svg width="100%" height="100%" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="13" y="5" width="10" height="15" rx="5" fill="#44D7FF"/>
                            <path d="M9 20a9 9 0 0018 0" stroke="#44D7FF" stroke-width="2" stroke-linecap="round" fill="none"/>
                            <line x1="18" y1="29" x2="18" y2="33" stroke="#44D7FF" stroke-width="2.5" stroke-linecap="round"/>
                            <line x1="14" y1="33" x2="22" y2="33" stroke="#44D7FF" stroke-width="2.5" stroke-linecap="round"/>
                            <path d="M26 15c1.5 1.5 1.5 4.5 0 6" stroke="#44D7FF" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.8"/>
                            <path d="M30 12c3 3 3 9 0 12" stroke="#44D7FF" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.45"/>
                        </svg>
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
            window.open(`https://artsiren.co/?artist=${artistName}`, '_blank');
        });
        
        // NO AUTO-HIDE - stays until user closes it manually
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
        
        const stanceColor = '#ff4444';
        const stanceLabel = 'BOYCOTTER';
        
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
                <div style="font-size: 12px; color: #0047ab; line-height: 1.8;">${artist.sources}</div>
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
    
    // YouTube feed: mark/hide boycotting artists in home feed, search, sidebar, playlists
    function processYouTubeFeed() {
        const cardSelectors = [
            'ytd-rich-item-renderer',
            'ytd-video-renderer',
            'ytd-compact-video-renderer',
            'ytd-grid-video-renderer',
            'ytd-playlist-video-renderer',
            'ytd-playlist-panel-video-renderer',
            'ytd-radio-item-renderer'
        ];
        cardSelectors.forEach(sel => {
            document.querySelectorAll(sel + ':not([data-bs-checked])').forEach(card => {
                card.dataset.bsChecked = '1';
                const channelEl = card.querySelector('ytd-channel-name a, a[href^="/@"], a[href^="/channel/"], a[href^="/user/"], #channel-name a');
                const titleEl = card.querySelector('#video-title, h3 a');
                let artist = null;
                if (channelEl) artist = findMatchingArtist(channelEl.textContent.trim());
                if (!artist && titleEl) artist = findMatchingArtist(titleEl.textContent.trim());
                if (artist) {
                    card.dataset.bsBoycotter = artist.name;
                    feedDetectedArtists.add(artist.name);
                    if (settings.hideYouTubeFeed) {
                        card.style.display = 'none';
                    } else {
                        addFeedBadge(card, artist.name);
                    }
                }
            });
        });
    }

    function addFeedBadge(card, artistName) {
        if (card.querySelector('.bs-feed-badge')) return;
        const thumb = card.querySelector('a#thumbnail') || card.querySelector('#thumbnail') || card.querySelector('ytd-thumbnail');
        if (!thumb) return;
        thumb.style.position = 'relative';
        thumb.style.overflow = 'visible';
        const badge = document.createElement('div');
        badge.className = 'bs-feed-badge';
        badge.innerHTML = `<span>🚫 ${artistName}</span><button class="bs-hide-card" title="Hide this video">×</button>`;
        badge.querySelector('.bs-hide-card').addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            card.style.display = 'none';
        });
        thumb.appendChild(badge);
    }

    function applyFeedHideSetting() {
        document.querySelectorAll('[data-bs-boycotter]').forEach(card => {
            if (settings.hideYouTubeFeed) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
                addFeedBadge(card, card.dataset.bsBoycotter);
            }
        });
    }

    // Process elements
    function processElements() {
        const detector = getSiteDetector();
        if (!detector) return;

        const mode = settings.alertMode;
        if (mode === 'off') return;
        if (mode === 'tickets' && getSiteCategory() === 'streaming') return;
        if (mode === 'streaming' && getSiteCategory() === 'tickets') return;

        const elements = detector();

        elements.forEach(element => {
            const text = element.textContent;
            const artist = findMatchingArtist(text);

            if (artist && !processedElements.has(element)) {
                createFloatingAlert(artist);

                if (!element.querySelector('.boycott-small-icon')) {
                    const icon = createSmallIcon(artist);
                    element.appendChild(icon);
                }

                processedElements.add(element);
            }
        });
    }
    
    // Debounce
    let debounceTimeout;
    function debounce(func, delay) {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(func, delay);
    }
    
    function dismissAllAlerts() {
        document.querySelectorAll('.boycott-floating-alert').forEach(el => {
            el.classList.remove('show');
            setTimeout(() => el.remove(), 300);
        });
    }

    // Initialize
    function resetState() {
        processedElements = new WeakSet();
        displayedArtists = new Set();
        feedDetectedArtists = new Set();
        dismissAllAlerts();
        document.querySelectorAll('.boycott-small-icon').forEach(el => el.remove());
        document.querySelectorAll('[data-bs-checked]').forEach(el => {
            delete el.dataset.bsChecked;
            delete el.dataset.bsBoycotter;
            const badge = el.querySelector('.bs-feed-badge');
            if (badge) badge.remove();
        });
    }

    const isYT = () => window.location.hostname.includes('youtube.com');

    function runScan() {
        processElements();
        if (isYT() && settings.alertMode !== 'off' && settings.alertMode !== 'tickets') processYouTubeFeed();
    }

    // Returns only the meaningful part of the URL for navigation detection.
    // Ignores &t=, &pp=, and other YouTube playback params that change mid-video.
    function navKey(url) {
        try {
            const u = new URL(url);
            if (u.hostname.includes('youtube.com')) {
                const v = u.searchParams.get('v') || '';
                return u.pathname + (v ? '?v=' + v : '');
            }
            return u.hostname + u.pathname;
        } catch(e) { return url; }
    }

    function init() {
        setTimeout(runScan, 1000);

        // SPA navigation detection — ignores minor URL param changes
        let lastKey = navKey(location.href);
        setInterval(() => {
            const current = navKey(location.href);
            if (current !== lastKey) {
                lastKey = current;
                resetState();
                setTimeout(runScan, 1500);
            }
        }, 500);

        // YouTube also fires this event — sync lastKey to prevent double-fire
        if (isYT()) {
            document.addEventListener('yt-navigate-finish', () => {
                lastKey = navKey(location.href);
                resetState();
                setTimeout(runScan, 1500);
            });
        }

        const observer = new MutationObserver(() => {
            debounce(runScan, CONFIG.debounceDelay);
        });

        observer.observe(document.body, { childList: true, subtree: true });

        setInterval(runScan, CONFIG.checkInterval);
    }

    // Popup scanner: return all detected artists on this page
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
        if (msg.action === 'scanPage') {
            processElements();
            if (isYT()) processYouTubeFeed();
            setTimeout(() => {
                const all = new Set([...displayedArtists, ...feedDetectedArtists]);
                sendResponse({ artists: Array.from(all) });
            }, 600);
            return true;
        }
    });
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
