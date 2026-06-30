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
    let alertQueue = [];
    let isAlertVisible = false;

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
                    if (!processedElements.has(el) && el.textContent.trim().length > 0 && !el.closest('.boycott-floating-alert') && !el.closest('#boycott-alert-modal')) {
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
        if (!text || typeof text !== 'string' || text.length < 3) return null;

        const normalizedText = text.toLowerCase().trim();

        for (const artist of artistsData) {
            if (!artist || typeof artist.name !== 'string' || !artist.name) continue;
            const artistName = artist.name.toLowerCase();

            if (normalizedText === artistName) return artist;

            const wordBoundaryRegex = new RegExp('\\b' + artistName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
            if (wordBoundaryRegex.test(text)) return artist;

            if (artistName.startsWith('the ')) {
                const nameWithoutThe = artistName.substring(4);
                const withoutTheRegex = new RegExp('\\b' + nameWithoutThe.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
                if (withoutTheRegex.test(text)) return artist;
            }
        }
        return null;
    }
    
    // Create floating overlay alert — queued so only one shows at a time
    function createFloatingAlert(artist) {
        if (displayedArtists.has(artist.name)) return;
        displayedArtists.add(artist.name);
        alertQueue = [artist]; // replace queue — only latest artist matters
        if (isAlertVisible) {
            dismissAllAlerts();
            isAlertVisible = false;
            setTimeout(showNextAlert, 320);
        } else {
            showNextAlert();
        }
    }

    function showNextAlert() {
        if (alertQueue.length === 0) {
            isAlertVisible = false;
            return;
        }
        isAlertVisible = true;
        const artist = alertQueue.shift();

        const overlay = document.createElement('div');
        overlay.className = 'boycott-floating-alert';
        overlay.setAttribute('data-artist', artist.name);

        const sourcesUrl = `https://artsiren.co/?artist=${encodeURIComponent(artist.name)}`;
        const isWelcome = artist.stance === 'welcome';
        const dotColor = isWelcome ? '#22C55E' : '#FF4444';
        overlay.innerHTML = `
            <div class="boycott-alert-header">
                <svg class="boycott-alert-logo" viewBox="0 57 470 284" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
                    <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
                    <ellipse fill="${dotColor}" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>
                </svg>
                <span class="boycott-alert-title">ArtSiren</span>
                <button class="boycott-alert-close" aria-label="Close">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M2 2L12 12M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </button>
            </div>
            <div class="boycott-alert-body">
                <div class="boycott-artist-name">${artist.name}</div>
                <p class="boycott-statement">${artist.statement}</p>
                <a class="boycott-details-btn" href="${sourcesUrl}" target="_blank" rel="noopener">View Sources</a>
            </div>
        `;

        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add('show'), 10);

        function closeAlert() {
            overlay.classList.remove('show');
            overlay.classList.add('hide');
            setTimeout(() => {
                overlay.remove();
                showNextAlert();
            }, 300);
        }

        const autoCloseTimer = setTimeout(closeAlert, 12000);
        overlay.querySelector('.boycott-alert-close').addEventListener('click', () => {
            clearTimeout(autoCloseTimer);
            closeAlert();
        });
    }
    
    // Show detailed modal — matches artsiren.co design language
    function showArtistModal(artist) {
        const existing = document.getElementById('boycott-alert-modal');
        if (existing) existing.remove();

        const isWelcome = artist.stance === 'welcome';
        const dotColor  = isWelcome ? '#22C55E' : '#FF4444';
        const stanceColor = isWelcome ? '#0891b2' : '#F44634';
        const stanceBg    = isWelcome ? '#ecfeff' : 'rgba(244,70,52,0.08)';
        const stanceLabel = isWelcome ? 'WELCOMES ALL' : 'EXCLUDING';

        const initials = artist.name.split(/\s+/).map(w => w[0] || '').join('').slice(0, 2).toUpperCase();

        // Parse sources HTML into individual links
        const srcLinks = [];
        const srcRe = /<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
        let m;
        while ((m = srcRe.exec(artist.sources || '')) !== null) srcLinks.push({ url: m[1], name: m[2].trim() });

        const sourcesHTML = srcLinks.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:#F4F6FD;border-radius:10px;text-decoration:none;font-size:13px;font-weight:500;color:#0d1117;margin-bottom:6px;transition:background 0.15s;" onmouseover="this.style.background='#e5eaf8'" onmouseout="this.style.background='#F4F6FD'">
                <span style="flex:1;">${s.name}</span>
                <span style="color:#0047ab;font-size:14px;">→</span>
            </a>`).join('');

        const modal = document.createElement('div');
        modal.id = 'boycott-alert-modal';
        modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,20,36,0.55);backdrop-filter:blur(3px);z-index:2147483646;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;direction:ltr;';

        const card = document.createElement('div');
        card.style.cssText = 'background:#fff;border-radius:24px;max-width:400px;width:92%;max-height:88vh;overflow-y:auto;padding:24px 22px 20px;position:relative;box-shadow:0 24px 64px rgba(10,20,36,0.22);direction:ltr;';

        card.innerHTML = `
            <button id="as-close" style="position:absolute;top:14px;right:14px;background:#f5f8ff;border:1px solid #e2e8f0;border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#4a5568;font-size:14px;line-height:1;padding:0;">✕</button>

            <div style="display:flex;align-items:center;gap:7px;margin-bottom:18px;padding-right:36px;">
                <svg style="width:36px;height:22px;flex-shrink:0;" viewBox="0 57 470 284" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
                    <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
                    <ellipse fill="${dotColor}" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>
                </svg>
                <span style="font-size:13px;font-weight:700;color:#0c233e;letter-spacing:-0.1px;">ArtSiren</span>
            </div>

            <div style="display:flex;align-items:center;gap:14px;margin-bottom:14px;">
                <div style="width:50px;height:50px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#000940,#0047ab);color:white;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;letter-spacing:0.02em;">${initials}</div>
                <div style="font-size:17px;font-weight:700;color:#0d1117;letter-spacing:-0.02em;line-height:1.2;">${artist.name}</div>
            </div>

            <div style="display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:12px;margin-bottom:14px;background:${stanceBg};">
                <span style="font-size:13px;font-weight:700;color:${stanceColor};letter-spacing:0.03em;">${stanceLabel}</span>
            </div>

            <p style="font-size:14px;color:#4a5568;line-height:1.65;margin-bottom:18px;">${artist.statement}</p>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin-bottom:14px;">

            <div style="font-size:12px;font-weight:600;color:#718096;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Sources</div>
            ${sourcesHTML || '<p style="font-size:13px;color:#718096;">No sources available.</p>'}

            <p style="font-size:11px;color:#a0aec0;text-align:center;margin-top:14px;line-height:1.5;">Information from publicly documented sources. All data is independently verifiable.</p>
        `;

        modal.appendChild(card);
        document.body.appendChild(modal);

        card.querySelector('#as-close').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
        const escH = (e) => { if (e.key === 'Escape') { modal.remove(); document.removeEventListener('keydown', escH); } };
        document.addEventListener('keydown', escH);
    }
    
    // Inline logo chip — small white pill with colored dot, works on any background
    function createLogoChip(artist) {
        const chip = document.createElement('span');
        chip.className = 'artsiren-chip';
        chip.title = artist.name + (artist.stance === 'welcome' ? ' — Welcomes All' : ' — Excluding');
        const dotColor = artist.stance === 'welcome' ? '#22C55E' : '#FF4444';
        chip.innerHTML = `<svg viewBox="0 57 470 284" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
            <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
            <ellipse fill="${dotColor}" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>
        </svg>`;
        chip.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); showArtistModal(artist); });
        return chip;
    }

    // YouTube watch-page badge (injected below channel info)
    function addYouTubeBadge(artist) {
        if (!window.location.pathname.startsWith('/watch')) return;
        if (document.querySelector('.artsiren-yt-badge')) return;
        const ownerEl = document.querySelector('#owner');
        if (!ownerEl) return;

        const isWelcome = artist.stance === 'welcome';
        const color = isWelcome ? '#22C55E' : '#EF4444';
        const dotColor = isWelcome ? '#22C55E' : '#FF4444';
        const statusText = isWelcome ? 'Welcomes All' : 'Excluding';
        const sourceCount = (artist.sources.match(/<a /g) || []).length || 1;

        const badge = document.createElement('div');
        badge.className = 'artsiren-yt-badge';
        badge.innerHTML = `
            <div class="artsiren-yt-inner">
                <svg class="artsiren-yt-logo" viewBox="0 57 470 284" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
                    <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
                    <ellipse fill="${dotColor}" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>
                </svg>
                <span class="artsiren-yt-brand">ArtSiren</span>
                <div class="artsiren-yt-status" style="color:${color};border-color:${color};background:${color}18;">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        ${isWelcome
                            ? '<path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
                            : '<path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'}
                    </svg>
                    ${statusText}
                </div>
                <span class="artsiren-yt-sources">· ${sourceCount} source${sourceCount !== 1 ? 's' : ''}</span>
                <button class="artsiren-yt-expand" title="View details">›</button>
            </div>
        `;
        badge.addEventListener('click', (e) => { e.stopPropagation(); showArtistModal(artist); });
        ownerEl.insertAdjacentElement('afterend', badge);
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
                    card.dataset.bsStance = artist.stance;
                    feedDetectedArtists.add(artist.name);
                    if (settings.hideYouTubeFeed) {
                        card.style.display = 'none';
                    } else {
                        addFeedBadge(card, artist);
                    }
                }
            });
        });
    }

    function addFeedBadge(card, artist) {
        if (card.querySelector('.artsiren-thumb-badge')) return;
        const thumb = card.querySelector('a#thumbnail') || card.querySelector('#thumbnail') || card.querySelector('ytd-thumbnail');
        if (!thumb) return;
        thumb.style.position = 'relative';

        const isWelcome = artist.stance === 'welcome';
        const dotColor = isWelcome ? '#22C55E' : '#FF4444';

        const badge = document.createElement('div');
        badge.className = 'artsiren-thumb-badge';
        badge.title = artist.name;
        badge.innerHTML = `
            <svg viewBox="0 57 470 284" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0c233e" d="M453.22,149.75v-73.97c0-8.07-6.54-14.61-14.61-14.61H57.12c-8.07,0-14.62,6.54-14.62,14.61v73.97c26.13,0,47.31,21.18,47.31,47.31s-21.18,47.3-47.31,47.3v73.97c0,8.07,6.55,14.61,14.62,14.61h381.49c8.07,0,14.61-6.54,14.61-14.61v-73.97c-26.13,0-47.31-21.18-47.31-47.3s21.18-47.31,47.31-47.31ZM140.35,121.19h13.19v26.14h-13.19v-26.14ZM140.35,163.05h13.19v26.14h-13.19v-26.14ZM140.35,204.91h13.19v26.14h-13.19v-26.14ZM140.35,246.78h13.19v26.13h-13.19v-26.13ZM153.55,314.78h-13.19v-26.14h13.19v26.14ZM153.55,105.47h-13.19v-26.14h13.19v26.14ZM403.68,135.68c-20.06,13.05-33.32,35.67-33.32,61.38s13.26,48.32,33.32,61.37v26.19c0,5.95-4.87,10.82-10.82,10.82h-194.83c-5.95,0-10.82-4.87-10.82-10.82V109.49c0-5.95,4.87-10.82,10.82-10.82h194.83c5.95,0,10.82,4.87,10.82,10.82v26.19Z"/>
                <path fill="#0c233e" d="M348.29,162.15l-81.16,87.26-10.99-10.22-.18.2-40.52-37.06,17.29-18.91,32.84,30.04,63.95-68.76,18.76,17.45Z"/>
                <ellipse fill="${dotColor}" cx="41.62" cy="197.06" rx="34.42" ry="35.06"/>
            </svg>
        `;
        thumb.appendChild(badge);
    }

    function applyFeedHideSetting() {
        document.querySelectorAll('[data-bs-boycotter]').forEach(card => {
            if (settings.hideYouTubeFeed) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
                addFeedBadge(card, { name: card.dataset.bsBoycotter, stance: card.dataset.bsStance });
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
                const isYTWatch = window.location.hostname.includes('youtube.com') && window.location.pathname.startsWith('/watch');
                if (isYTWatch) {
                    addYouTubeBadge(artist);
                } else if (!element.querySelector('.artsiren-chip')) {
                    element.appendChild(createLogoChip(artist));
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
        alertQueue = [];
        isAlertVisible = false;
        dismissAllAlerts();
        document.querySelectorAll('.artsiren-yt-badge, .artsiren-thumb-badge, .artsiren-chip').forEach(el => el.remove());
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
                const q = u.searchParams.get('search_query') || '';
                return u.pathname + (v ? '?v=' + v : '') + (q ? '?q=' + q : '');
            }
            return u.hostname + u.pathname + u.search;
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

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                dismissAllAlerts();
                alertQueue = [];
                displayedArtists = new Set();
                isAlertVisible = false;
            }
        }, true); // capture phase — fires before YouTube/Spotify stop propagation

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
