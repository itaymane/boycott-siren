// ArtSiren — background data sync
// Fetches the live artist database from artsiren.co and caches it in
// chrome.storage.local. content.js overlays this onto the bundled
// artists-data.js (which stays as the offline/first-run fallback), so the
// database can be updated without shipping a new extension version.

const DATA_URL = 'https://artsiren.co/artists.json';
const ALARM_NAME = 'artsiren-refresh-data';
const REFRESH_MINUTES = 60 * 24; // once a day

async function refreshArtistData() {
    try {
        const res = await fetch(DATA_URL, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length) {
            await chrome.storage.local.set({
                artistsDataRemote: data,
                artistsDataFetchedAt: Date.now()
            });
        }
    } catch (e) {
        // Offline or the endpoint is unreachable — keep whatever is cached
        // (or fall back to the bundled artists-data.js) and try again next alarm.
    }
}

chrome.runtime.onInstalled.addListener(() => {
    refreshArtistData();
    chrome.alarms.create(ALARM_NAME, { periodInMinutes: REFRESH_MINUTES });
});

chrome.runtime.onStartup.addListener(() => {
    refreshArtistData();
});

chrome.alarms.onAlarm.addListener(alarm => {
    if (alarm.name === ALARM_NAME) refreshArtistData();
});
