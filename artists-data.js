// ArtSiren - Artist Database
// Total: 178 verified artists
// Last updated: 2026-04-03

const ARTISTS_DATABASE = [
    {
        name: "Roger Waters",
        level: "CRITICAL",
        statement: "Pink Floyd co-founder and longest-standing BDS advocate in rock music; has called on fellow musicians to boycott Israel since 2005; dropped by publisher BMG in 2024 over anti-Israel statements; performed concerts featuring imagery comparing Israeli actions to Nazi Germany",
        sources: `<a href="https://www.bdsmovement.net/news/roger-waters-and-bds" target="_blank">BDS Movement</a> | <a href="https://bdsmovement.net/news/facebook-live-conversation-roger-waters" target="_blank">PACBI</a> | <a href="https://www.guardian.co.uk/commentisfree/2011/mar/11/cultural-boycott-west-bank-wall" target="_blank">The Guardian</a> | <a href="https://www.rollingstone.com/music/music-news/roger-waters-pink-floyd-bmg-israel-comments-1234957036/" target="_blank">Rolling Stone</a> | <a href="https://variety.com/2024/music/news/roger-waters-bmg-split-over-pink-floyd-anti-israeli-comments-1235891350/" target="_blank">Variety</a> | <a href="https://www.nme.com/news/music/bmg-reportedly-splitting-from-roger-waters-following-israel-comments-3579758" target="_blank">NME</a> | <a href="https://www.timesofisrael.com/roger-waters-calls-on-musicians-to-boycott-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2024-01-31/ty-article/record-company-cuts-contract-with-roger-waters-amid-history-of-anti-israel-statements/0000018d-5ecf-d0fc-a9bd-5edf3f6a0000" target="_blank">Haaretz</a>`
    },
    {
        name: "Dua Lipa",
        level: "HIGH",
        statement: "Called Israel's military campaign in Gaza 'a genocide'; shelved a music video deemed insensitive amid the conflict; shared the viral #AllEyesOnRafah image; signed an open letter to the UK Prime Minister calling for an end to UK complicity in Israeli actions",
        sources: `<a href="https://deadline.com/2023/12/dua-lipa-pulls-music-video-insensitive-israel-gaza-conflict-1235683400/" target="_blank">Deadline</a> | <a href="https://www.newsweek.com/dua-lipa-israel-palestinians-hamas-conflict-rolling-stone-interview-1861402" target="_blank">Newsweek</a> | <a href="https://www.euronews.com/culture/2024/05/29/dua-lipa-shares-support-for-alleyesonrafah-what-does-it-mean" target="_blank">Euronews</a> | <a href="https://www.timesofisrael.com/singer-dua-lipa-slams-ugly-campaign-criticizing-her-for-pro-palestinian-stance/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Patti Smith",
        level: "HIGH",
        statement: "Supports cultural boycott, declined to perform in Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/patti-smith-julian-casablancas-among-600-musicians-to-urge-boycott-of-israel/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Elvis Costello",
        level: "HIGH",
        statement: "Cancelled his June 2010 Tel Aviv and Caesarea concerts explicitly citing Israel's military actions against Palestinians; published a statement saying he could not 'in good conscience' appear in Israel, becoming one of the first major artists to cancel for political reasons",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.haaretz.com/israel-news/culture/2010-05-18/ty-article/elvis-costello-joins-israel-boycott-canceling-june-shows/0000017f-e292-d38f-a57f-e6d261610000" target="_blank">Haaretz</a> | <a href="https://www.hollywoodreporter.com/business/business-news/elvis-costello-cancels-israel-concerts-23816/" target="_blank">Hollywood Reporter</a>`
    },
    {
        name: "Tom Morello",
        level: "HIGH",
        statement: "Rage Against the Machine guitarist who signed the 2021 open letter with 600+ musicians explicitly calling on artists to boycott Israel; stated there is 'no room for Anti-Semitism' while condemning 'horrific war crimes in Gaza'",
        sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/" target="_blank">Rolling Stone</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/" target="_blank">Billboard</a> | <a href="https://www.haaretz.com/us-news/2021-05-28/ty-article/.premium/patti-smith-run-the-jewels-among-over-600-artists-calling-to-boycott-israel/0000017f-db96-df9c-a17f-ff9ea4580000" target="_blank">Haaretz</a> | <a href="https://consequence.net/2021/05/rage-against-the-machine-solidarity-palestinians/" target="_blank">Consequence</a> | <a href="https://www.nme.com/news/music/tom-morello-says-theres-no-room-for-anti-semitism-when-criticising-horrific-war-crimes-in-gaza-3537940" target="_blank">NME</a>`
    },
    {
        name: "The Roots",
        level: "MEDIUM",
        statement: "Signed cultural boycott pledges",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lauryn Hill",
        level: "MEDIUM",
        statement: "Cancelled her May 2015 Tel Aviv concert, stating she could not perform only in Israel without also playing Ramallah; appeared in the 'When I See Them I See Us' BDS solidarity video alongside BDS co-founder Omar Barghouti holding a 'Free Political Prisoners' sign",
        sources: `<a href="https://www.timesofisrael.com/lauryn-hill-cancels-israel-show/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/2015-05-05/ty-article/lauryn-hill-cancels-israel-concert-citing-inablity-to-perform-in-ramallah-as-well/0000017f-db88-d856-a37f-ffc8a9cb0000" target="_blank">Haaretz</a> | <a href="https://www.rollingstone.com/music/music-news/lauryn-hill-cancels-israel-show-amid-controversy-240622/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lauryn-hill-5-1207215" target="_blank">NME</a>`
    },
    {
        name: "Peter Gabriel",
        level: "MEDIUM",
        statement: "Supports cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/peter-gabriel-pro-gaza-not-anti-israel/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Annie Lennox",
        level: "HIGH",
        statement: "Called for a ceasefire in Gaza at the 2024 Grammy Awards during Sinéad O'Connor tribute; signed open letter to UK PM Keir Starmer calling for action on Gaza; recorded a new version of 'Why?' for the 'Together for Palestine' charity project",
        sources: `<a href="https://www.rollingstone.com/music/music-news/annie-lennox-calls-for-ceasefire-in-gaza-sinead-oconnor-tribute-grammys-2024-1234960958/" target="_blank">Rolling Stone</a> | <a href="https://www.billboard.com/music/awards/annie-lennox-ceasefire-gaza-2024-grammys-1235598344/" target="_blank">Billboard</a> | <a href="https://www.nme.com/news/music/annie-lennox-ceasefire-palestine-2024-grammys-stevie-wonder-jon-batiste-3582317" target="_blank">NME</a> | <a href="https://variety.com/2024/music/news/palestine-protest-grammys-red-carpet-1235897370/" target="_blank">Variety</a> | <a href="https://www.nme.com/news/music/watch-annie-lennoxs-new-version-of-why-recorded-for-together-for-palestine-3893460" target="_blank">NME (Together for Palestine)</a>`
    },
    {
        name: "Charlotte Church",
        level: "HIGH",
        statement: "Repeatedly used the chant 'From the River to the Sea, Palestine will be free' at her shows and publicly defended doing so; stated her family received threats over her support for Gaza; among the most outspoken British artists condemning Israeli actions",
        sources: `<a href="https://www.nme.com/news/music/charlotte-church-defends-use-of-pro-palestinian-river-to-the-sea-chant-at-show-3593172" target="_blank">NME</a> | <a href="https://www.nme.com/news/music/charlotte-church-says-her-family-have-been-threatened-by-some-pretty-scary-people-over-support-of-gaza-3600203" target="_blank">NME (threats)</a>`
    },
    {
        name: "Sam Smith",
        level: "MEDIUM",
        statement: "Supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/sam-smiths-tel-aviv-concert-cancelled-citing-technical-logistical-difficulties/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Björk",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge in 2025 and geo-blocked her entire catalogue from Israeli streaming services; one of the most high-profile artists to join the streaming boycott",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/singer-bjork-appears-to-yank-her-streaming-songs-from-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-21/ty-article/.premium/bjork-pulls-her-music-from-israeli-streaming-services-amid-gaza-war-boycott-campaign/00000199-6d25-daea-adff-7fe7e9110000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lorde",
        level: "CRITICAL",
        statement: "Cancelled her 2018 Tel Aviv concert after receiving an open letter from New Zealand activists; signed No Music for Genocide pledge in 2025 and geo-blocked her music from Israeli streaming platforms; shouted 'Free Palestine' on stage at Madison Square Garden",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/after-bds-pressure-popster-lorde-cancels-israel-gig/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-10-03/ty-article/.premium/new-zealand-singer-lorde-removes-her-songs-from-apple-music-in-israel/00000199-aae9-df33-a5dd-aefff8da0000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://consequence.net/2025/10/lorde-idles-no-music-for-genocide-boycott/" target="_blank">Consequence</a> | <a href="https://www.aljazeera.com/news/2018/1/3/lorde-bullied-after-dropping-israel-show" target="_blank">Al Jazeera</a>`
    },
    {
        name: "Massive Attack",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge and geo-blocked music from Israeli streaming; among the first wave of artists to join the campaign in September 2025; co-founders Robert Del Naja and Grant Marshall have been vocal about Palestinian rights",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/massive-attack-primal-scream-join-initiative-to-block-music-being-streamed-in-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Brian Eno",
        level: "CRITICAL",
        statement: "Organised the 'Together for Palestine' benefit concert at Wembley Arena; co-authored an open letter calling Israel's military campaign 'a well-planned genocide'; signed No Music for Genocide pledge; has written extensively calling for sanctions against Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.billboard.com/music/music-news/brian-eno-together-for-palestine-benefit-concert-lineup-1236038659/" target="_blank">Billboard</a> | <a href="https://www.nme.com/news/music/brian-eno-interview-together-for-palestine-hope-art-music-3893445" target="_blank">NME</a> | <a href="https://www.nme.com/news/music/brian-eno-calls-for-israels-war-crimes-against-palestine-to-be-prosecuted-act-now-or-international-law-withers-forever-3800230" target="_blank">NME (2)</a>`
    },
    {
        name: "Fontaines D.C.",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Japanese Breakfast",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Paramore",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.nme.com/news/music/paramore-and-hayley-williams-join-no-music-for-genocide-israel-boycott-3895018" target="_blank">NME (Paramore)</a> | <a href="https://consequence.net/2025/09/paramore-hayley-williams-israel-boycott/" target="_blank">Consequence</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a>`
    },
    {
        name: "Hayley Williams",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Rina Sawayama",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "AURORA",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "King Krule",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "IDLES",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://consequence.net/2025/10/lorde-idles-no-music-for-genocide-boycott/" target="_blank">Consequence</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hot Chip",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kneecap",
        level: "CRITICAL",
        statement: "Irish-language rap trio who have been among the most vocal artists condemning Israel; performed wearing Palestinian keffiyehs; made statements calling Israeli actions genocide; faced pressure from British government over their pro-Palestinian stance",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/irish-band-kneecap-projects-fck-israel-on-coachella-music-festival-stage/" target="_blank">Times of Israel (Coachella)</a> | <a href="https://www.timesofisrael.com/hungary-bans-anti-israel-rap-group-kneecap-from-entering-country-for-festival-gig/" target="_blank">Times of Israel (Hungary ban)</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Wednesday",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mannequin Pussy",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "BADBADNOTGOOD",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Young Fathers",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Amyl and the Sniffers",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Soccer Mommy",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kelela",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Caribou",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Primal Scream",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Faye Webster",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Arca",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MIKE",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Erika de Casier",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MJ Lenderman",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Julia Jacklin",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lucy Dacus",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Enter Shikari",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Fever Ray",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "The Knife",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Blood Orange",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Blonde Redhead",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Clairo",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Denzel Curry",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Destroy Boys",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Eartheater",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Jane Remover",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "The Blessed Madonna",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hania Rani",
        level: "MEDIUM",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kelsey Lu",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "L'Rain",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lambrini Girls",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Liv.e",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MARINA",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Maryam Saleh",
        level: "MEDIUM",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Maurice Louca",
        level: "MEDIUM",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mogwai",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MØ",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Nicolás Jaar",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Nourished by Time",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Oklou",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Smerz",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Yaeji",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Yeule",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Ana Tijoux",
        level: "MEDIUM",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Julia Holter",
        level: "MEDIUM",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Loraine James",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Model/Actriz",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Saul Williams",
        level: "CRITICAL",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Four Tet",
        level: "CRITICAL",
        statement: "Joined #DJsForPalestine cultural boycott of Israel in 2018; supports Palestinian rights",
        sources: `<a href="https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356" target="_blank">NME</a> | <a href="https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507" target="_blank">Haaretz</a> | <a href="https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news" target="_blank">Mixmag</a>`
    },
    {
        name: "Olivia Colman",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Javier Bardem",
        level: "HIGH",
        statement: "Co-signed a 2014 open letter with Penélope Cruz calling Israel's military offensive in Gaza 'genocide'; explicitly criticized Israeli 'state terrorism'; faced backlash from the Academy but stood by the statement",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mark Ruffalo",
        level: "HIGH",
        statement: "Has explicitly called Israel an apartheid state; signed open letters; used his significant social media platform to call for accountability for Israeli military actions in Gaza; faced industry backlash for his statements",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a> | <a href="https://deadline.com/2024/02/mark-ruffalo-gaza-ceasefire-mickey-17-brad-ingelsby-dga-awards-news-interview-1235821473/" target="_blank">Deadline</a> | <a href="https://variety.com/2024/film/global/mark-ruffalo-mahershala-ali-cynthia-nixon-ilana-glazer-us-end-israel-arms-sales-artists4ceasefire-1236131402/" target="_blank">Variety</a> | <a href="https://www.hollywoodreporter.com/news/politics-news/mark-ruffalo-ramy-youssef-call-for-pro-palestine-sag-member-protection-1235993880/" target="_blank">Hollywood Reporter</a>`
    },
    {
        name: "Steve Coogan",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Riz Ahmed",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Miriam Margolyes",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Tilda Swinton",
        level: "HIGH",
        statement: "Has signed multiple Artists for Palestine UK letters explicitly calling out Israeli policies; among the most senior British actors to publicly condemn Israeli military actions",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Khalid Abdalla",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Maxine Peake",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Susan Sarandon",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Danny Glover",
        level: "MEDIUM",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Penélope Cruz",
        level: "HIGH",
        statement: "Co-signed a 2014 open letter with Javier Bardem calling Israel's military offensive in Gaza 'genocide' and a 'war of occupation and siege'; faced industry backlash but did not retract the letter",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Cusack",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Cynthia Nixon",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Viggo Mortensen",
        level: "HIGH",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mia Farrow",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Peter Capaldi",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Julie Christie",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Juliet Stevenson",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Paapa Essiedu",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Dame Harriet Walter",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Joe Alwyn",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Lena Headey",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Kingsley Ben-Adir",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Carla Henry",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Pooja Ghai",
        level: "LOW",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Ken Loach",
        level: "CRITICAL",
        statement: "British director and lifelong BDS advocate; has organised multiple boycott campaigns against Israeli cultural institutions; signed countless open letters; co-founded organisations supporting cultural boycott of Israel; among the most publicly committed cultural figures in the BDS movement",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Mike Leigh",
        level: "HIGH",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Ava DuVernay",
        level: "MEDIUM",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Yorgos Lanthimos",
        level: "LOW",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Adam McKay",
        level: "MEDIUM",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Asif Kapadia",
        level: "LOW",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "James Schamus",
        level: "LOW",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Julia Loktev",
        level: "LOW",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Thurston Moore",
        level: "HIGH",
        statement: "Sonic Youth founder, signed multiple BDS petitions",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Serj Tankian",
        level: "HIGH",
        statement: "System of a Down vocalist who has explicitly called Israeli military actions against Palestinians war crimes; signed open letters; called for international sanctions against Israel; one of the most vocal rock musicians on the issue",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Portishead",
        level: "HIGH",
        statement: "Joined the cultural boycott of Israel and signed Artists for Palestine UK letters explicitly condemning Israeli military actions; among notable British electronic acts to take a public stance",
        sources: `<a href="https://consequence.net/2018/05/portishead-join-cultural-boycott-of-israel/" target="_blank">Consequence</a> | <a href="https://www.nme.com/news/music/wolf-alice-shame-portishead-lend-support-artistsforpalestine-2322658" target="_blank">NME</a>`
    },
    {
        name: "PJ Harvey",
        level: "MEDIUM",
        statement: "Supports cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Gorillaz",
        level: "MEDIUM",
        statement: "Virtual band led by Damon Albarn, supports Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Damon Albarn",
        level: "MEDIUM",
        statement: "Blur/Gorillaz frontman, performed at Together For Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Paul Weller",
        level: "MEDIUM",
        statement: "The Jam frontman, performed at Together For Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://artistsforpalestine.org.uk/tag/brian-eno/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Robyn",
        level: "CRITICAL",
        statement: "Swedish pop star, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lykke Li",
        level: "CRITICAL",
        statement: "Swedish singer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Propagandhi",
        level: "CRITICAL",
        statement: "Canadian punk band, vocal BDS supporters",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Refused",
        level: "CRITICAL",
        statement: "Swedish hardcore band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Gil Scott-Heron",
        level: "MEDIUM",
        statement: "Late poet and musician, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Talib Kweli",
        level: "HIGH",
        statement: "Hip-hop artist, vocal supporter of Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Chuck D",
        level: "HIGH",
        statement: "Public Enemy frontman, supports BDS",
        sources: `<a href="https://www.amostrust.org/palestine-justice/change-the-record/cultural-boycott/" target="_blank">Amos Trust</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Boots Riley",
        level: "HIGH",
        statement: "The Coup frontman, director, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Run the Jewels",
        level: "CRITICAL",
        statement: "El-P and Killer Mike have made explicit statements about Israeli apartheid and Palestinian rights; signed letters calling for ceasefire and accountability for Israeli actions",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Noname",
        level: "CRITICAL",
        statement: "Chicago rapper who has been one of music's most outspoken BDS advocates; explicitly called on fans and fellow artists to boycott Israel; donated proceeds from music to Palestinian causes; signed No Music for Genocide pledge",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Alice Walker",
        level: "HIGH",
        statement: "Author of 'The Color Purple' who refused to allow an Israeli publisher to publish her book; explicitly supports BDS; has written about and spoken at pro-Palestinian events calling for boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Naomi Klein",
        level: "HIGH",
        statement: "Author and activist who has written extensively calling for BDS; explicitly called Israeli actions in Gaza genocide; organised and signed open letters calling for international boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Arundhati Roy",
        level: "HIGH",
        statement: "Booker Prize winner, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Berger",
        level: "LOW",
        statement: "Art critic and author, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Iain Banks",
        level: "LOW",
        statement: "Sci-fi author, announced cultural boycott before death",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Sally Rooney",
        level: "CRITICAL",
        statement: "Irish novelist who refused to allow Israeli publisher Modan to translate her novel 'Beautiful World, Where Are You' into Hebrew, citing BDS principles; stated she 'would not feel comfortable' with the book being published by an Israeli company",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Khaled Hosseini",
        level: "LOW",
        statement: "Author of 'Kite Runner', supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Annie Ernaux",
        level: "HIGH",
        statement: "2022 Nobel Prize in Literature laureate who publicly signed BDS-aligned letters after receiving her Nobel Prize; made explicit statements calling Israeli actions a form of apartheid and genocide",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Angela Davis",
        level: "CRITICAL",
        statement: "American scholar and lifelong Palestinian rights activist; one of the founding intellectual figures of BDS in the United States; has spoken at countless pro-BDS events; compared Israeli treatment of Palestinians to apartheid South Africa",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Judith Butler",
        level: "CRITICAL",
        statement: "Philosopher at UC Berkeley who has explicitly endorsed BDS; written extensively on the legitimacy of cultural boycott of Israel; signed open letters; argued that BDS is a legitimate form of political protest against Israeli policies",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Noam Chomsky",
        level: "MEDIUM",
        statement: "Linguist, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Desmond Tutu",
        level: "HIGH",
        statement: "Late Archbishop of South Africa who explicitly compared Israeli treatment of Palestinians to apartheid South Africa, calling it 'worse in some respects'; called for international sanctions and boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "DJ Snake",
        level: "MEDIUM",
        statement: "French DJ, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Julian Casablancas",
        level: "HIGH",
        statement: "The Strokes frontman who signed the 2021 'Musicians for Palestine' open letter signed by 600+ musicians calling for a boycott of Israel; made explicit statements comparing Israeli treatment of Palestinians to apartheid",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Sinéad O'Connor",
        level: "HIGH",
        statement: "Late Irish singer; cancelled 2014 Israel concert after learning of BDS boycott call; said 'I will not play in Israel'",
        sources: `<a href="https://electronicintifada.net/blogs/david-cronin/thank-you-sinead-oconnor-boycotting-israel" target="_blank">Electronic Intifada</a> | <a href="https://www.hotpress.com/music/sinead-oconnor-i-wont-play-in-israel-11954250" target="_blank">Hotpress</a>`
    },
    {
        name: "System of a Down",
        level: "HIGH",
        statement: "Rock band, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Nigel Kennedy",
        level: "HIGH",
        statement: "World-renowned violinist who interrupted a BBC Proms programme to make an unscripted statement about Israeli apartheid; has publicly referred to Israeli actions as apartheid; cancelled performances in Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Williams (guitarist)",
        level: "MEDIUM",
        statement: "Classical guitarist, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "DJ Spooky",
        level: "MEDIUM",
        statement: "Electronic musician, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Tinariwen",
        level: "MEDIUM",
        statement: "Tuareg band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Asian Dub Foundation",
        level: "HIGH",
        statement: "British band who have been among the most consistently outspoken musical advocates for Palestinian rights; explicitly called for cultural boycott of Israel; performed at pro-Palestine events",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Manic Street Preachers",
        level: "HIGH",
        statement: "Welsh rock band who cancelled their planned Israel tour dates, explicitly citing the political situation; among the first major rock bands to cancel Israel shows in solidarity with Palestinians",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Belle and Sebastian",
        level: "HIGH",
        statement: "Scottish indie band, declined Israel performance",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Jean-Luc Godard",
        level: "HIGH",
        statement: "Late film director, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mira Nair",
        level: "LOW",
        statement: "Director, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Jane Campion",
        level: "LOW",
        statement: "Oscar winner, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Richard Gere",
        level: "LOW",
        statement: "Performed at Together For Palestine",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Liam Cunningham",
        level: "MEDIUM",
        statement: "Game of Thrones actor, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Cat Power",
        level: "MEDIUM",
        statement: "Indie artist, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Devendra Banhart",
        level: "MEDIUM",
        statement: "Folk singer, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Cassandra Wilson",
        level: "MEDIUM",
        statement: "Jazz singer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Coldcut",
        level: "MEDIUM",
        statement: "Electronic duo, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "The Ex",
        level: "MEDIUM",
        statement: "Punk band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Dälek",
        level: "MEDIUM",
        statement: "Hip-hop group, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Sonic Youth",
        level: "HIGH",
        statement: "Alternative rock band, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Godspeed You! Black Emperor",
        level: "CRITICAL",
        statement: "Montréal post-rock collective who declined the Polaris Music Prize in 2013, issuing a statement explicitly critical of Israeli military actions and calling for boycott; have been consistently anti-Zionist in their public statements",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "A Silver Mt. Zion",
        level: "MEDIUM",
        statement: "Post-rock band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Do Make Say Think",
        level: "MEDIUM",
        statement: "Instrumental band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Broken Social Scene",
        level: "HIGH",
        statement: "Canadian indie collective who signed an open letter opposing the Toronto International Film Festival's 'Tel Aviv spotlight' in 2009, explicitly criticising Israeli government cultural policy",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Feist",
        level: "MEDIUM",
        statement: "Singer-songwriter, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Stars",
        level: "MEDIUM",
        statement: "Indie pop band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Metric",
        level: "MEDIUM",
        statement: "Rock band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Wolf Parade",
        level: "MEDIUM",
        statement: "Indie rock band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Destroyer",
        level: "MEDIUM",
        statement: "Indie project, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Owen Pallett",
        level: "MEDIUM",
        statement: "Composer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Peaches",
        level: "MEDIUM",
        statement: "Electronic musician, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Tanya Tagaq",
        level: "MEDIUM",
        statement: "Inuit throat singer, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Dead Prez",
        level: "HIGH",
        statement: "Hip-hop duo, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Immortal Technique",
        level: "HIGH",
        statement: "Underground rapper, vocal BDS supporter",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lowkey",
        level: "CRITICAL",
        statement: "British rapper, vocal Palestinian rights activist",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Akala",
        level: "CRITICAL",
        statement: "British rapper, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Kae Tempest",
        level: "CRITICAL",
        statement: "Poet and rapper, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Little Simz",
        level: "CRITICAL",
        statement: "Withdrew from Israel's Meteor Festival in 2018 following BDS boycott calls; stated 'I will not be appearing at Meteor Festival'",
        sources: `<a href="https://www.juancole.com/2018/09/apartheid-palestinians-musicians.html" target="_blank">Juan Cole</a> | <a href="https://bdsmovement.net/meteor" target="_blank">BDS Movement</a>`
    }
];
