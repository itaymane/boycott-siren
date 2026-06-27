// ArtSiren Artist Database — Chrome Extension
// Total: 243 verified artists
// Last updated: 2026-06-26

const artistsData = [
  {
    name: "Roger Waters",
    level: "CRITICAL",
    statement: "Pink Floyd co-founder and longest-standing BDS advocate in rock music; has called on fellow musicians to join the cultural boycott since 2006; dropped by publisher BMG in 2024 over pro-boycott statements; performed concerts featuring imagery comparing regional actions to Nazi Germany",

    sources: `<a href="https://www.rollingstone.com/music/music-news/roger-waters-pink-floyd-bmg-israel-comments-1234957036/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/roger-waters-responds-to-nick-cave-criticising-his-bds-stance-its-not-complicated-nick-3789564">NME</a> | <a href="https://www.bdsmovement.net/news/roger-waters-and-bds-moral-courage-and-unwavering-commitment-human-rights">BDS Movement</a>`
  },
  {
    name: "Dua Lipa",
    level: "HIGH",
    statement: "Called the region's military campaign in Gaza 'a genocide'; shelved a music video deemed insensitive amid the conflict; shared the viral #AllEyesOnRafah image; signed an open letter to the UK Prime Minister calling for an end to UK complicity in the regioni actions",

    sources: `<a href="https://deadline.com/2023/12/dua-lipa-pulls-music-video-insensitive-israel-gaza-conflict-1235683400/">Deadline</a> | <a href="https://www.newsweek.com/dua-lipa-israel-palestinians-hamas-conflict-rolling-stone-interview-1861402">Newsweek</a> | <a href="https://www.euronews.com/culture/2024/05/29/dua-lipa-shares-support-for-alleyesonrafah-what-does-it-mean">Euronews</a> | <a href="https://www.timesofisrael.com/singer-dua-lipa-slams-ugly-campaign-criticizing-her-for-pro-palestinian-stance/">Times of Israel</a>`
  },
  {
    name: "Patti Smith",
    level: "CRITICAL",
    statement: "Supports cultural boycott, declined to perform in the region",

    sources: `<a href="https://www.nme.com/news/music/julian-casablancas-rage-against-the-machine-and-patti-smith-among-600-artists-calling-for-palestinian-rights-2950132">NME</a> | <a href="https://www.timesofisrael.com/patti-smith-julian-casablancas-among-600-musicians-to-urge-boycott-of-israel/">Times of Israel</a>`
  },
  {
    name: "Elvis Costello",
    level: "CRITICAL",
    statement: "Cancelled his June 2010 Tel Aviv and Caesarea concerts explicitly citing the region's military actions against Palestinians; published a statement saying he could not 'in good conscience' appear in the region, becoming one of the first major artists to cancel for political reasons",

    sources: `<a href="https://www.nme.com/news/music/elvis-costello-9-1297950">NME</a> | <a href="https://www.haaretz.com/israel-news/culture/elvis-costello-joins-israel-boycott-canceling-june-shows-1.290936">Haaretz</a>`
  },
  {
    name: "Tom Morello",
    level: "CRITICAL",
    statement: "Rage Against the Machine guitarist who signed the 2021 open letter with 600+ musicians explicitly calling on artists to join the cultural boycott; stated there is 'no room for Anti-Semitism' while condemning 'horrific war crimes in Gaza'",

    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.haaretz.com/us-news/2021-05-28/ty-article/.premium/patti-smith-run-the-jewels-among-over-600-artists-calling-to-boycott-israel/0000017f-db96-df9c-a17f-ff9ea4580000">Haaretz</a> | <a href="https://consequence.net/2021/05/rage-against-the-machine-solidarity-palestinians/">Consequence</a> | <a href="https://www.nme.com/news/music/tom-morello-says-theres-no-room-for-anti-semitism-when-criticising-horrific-war-crimes-in-gaza-3537940">NME</a>`
  },
  {
    name: "The Roots",
    level: "CRITICAL",
    statement: "Signed cultural boycott pledges",

    sources: `<a href="https://edition.cnn.com/2021/05/27/entertainment/musicians-support-palestinians-letter-israel">CNN</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Lauryn Hill",
    level: "CRITICAL",
    statement: "Cancelled her May 2015 Tel Aviv concert, stating she could not perform only in the region without also playing Ramallah; appeared in the 'When I See Them I See Us' BDS solidarity video alongside BDS co-founder Omar Barghouti holding a 'Free Political Prisoners' sign",

    sources: `<a href="https://www.timesofisrael.com/lauryn-hill-cancels-israel-show/">Times of Israel</a> | <a href="https://www.haaretz.com/2015-05-05/ty-article/lauryn-hill-cancels-israel-concert-citing-inablity-to-perform-in-ramallah-as-well/0000017f-db88-d856-a37f-ffc8a9cb0000">Haaretz</a> | <a href="https://www.rollingstone.com/music/music-news/lauryn-hill-cancels-israel-show-amid-controversy-240622/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lauryn-hill-5-1207215">NME</a>`
  },
  {
    name: "Peter Gabriel",
    level: "CRITICAL",
    statement: "Supports the cultural boycott",

    sources: `<a href="https://www.timesofisrael.com/peter-gabriel-pro-gaza-not-anti-israel/">Times of Israel</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Charlotte Church",
    level: "HIGH",
    statement: "Repeatedly used the chant 'From the River to the Sea, Palestine will be free' at her shows and publicly defended doing so; stated her family received threats over her support for Gaza; among the most outspoken British artists condemning military actions",

    sources: `<a href="https://www.nme.com/news/music/charlotte-church-defends-use-of-pro-palestinian-river-to-the-sea-chant-at-show-3593172">NME</a> | <a href="https://www.nme.com/news/music/charlotte-church-says-her-family-have-been-threatened-by-some-pretty-scary-people-over-support-of-gaza-3600203">NME (threats)</a>`
  },
  {
    name: "Sam Smith",
    level: "CRITICAL",
    statement: "Supports cultural boycott",

    sources: `<a href="https://www.middleeasteye.net/news/sam-smith-israel-concert-cancelled">Middle East Eye</a> | <a href="https://www.thepinknews.com/2023/05/05/sam-smith-tel-aviv-israel-cancelled/">PinkNews</a>`
  },
  {
    name: "Björk",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge in 2025 and geo-blocked her entire catalogue from regional streaming services; one of the most high-profile artists to join the streaming boycott",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/singer-bjork-appears-to-yank-her-streaming-songs-from-israel/">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-21/ty-article/.premium/bjork-pulls-her-music-from-israeli-streaming-services-amid-gaza-war-boycott-campaign/00000199-6d25-daea-adff-7fe7e9110000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Lorde",
    level: "CRITICAL",
    statement: "Cancelled her 2018 Tel Aviv concert after receiving an open letter from New Zealand activists; signed No Music for Genocide pledge in 2025 and geo-blocked her music from regional streaming platforms; shouted 'Free Palestine' on stage at Madison Square Garden",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Massive Attack",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge and geo-blocked music from regional streamingi streaming; among the first wave of artists to join the campaign in September 2025; co-founders Robert Del Naja and Grant Marshall have been vocal about Palestinian rights",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Brian Eno",
    level: "CRITICAL",
    statement: "Organised the 'Together for Palestine' benefit concert at Wembley Arena; co-authored an open letter calling the region's military campaign 'a well-planned genocide'; signed No Music for Genocide pledge; has written extensively calling for sanctions against the region",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Fontaines D.C.",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Japanese Breakfast",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Paramore",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Hayley Williams",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Rina Sawayama",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "AURORA",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "King Krule",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "IDLES",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Hot Chip",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Kneecap",
    level: "CRITICAL",
    statement: "Irish-language rap trio who have been among the most vocal artists condemning the region; performed wearing Palestinian keffiyehs; made statements calling regional actions genocide; faced pressure from British government over their pro-Palestinian stance",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Wednesday",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide in 2025, geo-blocking their catalogue from regional streaming services",

    sources: `<a href="https://www.avclub.com/japanese-breakfast-boycott-israel-pledge-mj-lenderman-400-more">AV Club</a> | <a href="https://stereogum.com/2323347/hundreds-of-artists-back-no-music-for-genocide-campaign-to-geo-block-israel/news">Stereogum</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "Mannequin Pussy",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "BADBADNOTGOOD",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Young Fathers",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Amyl and the Sniffers",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Soccer Mommy",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Kelela",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Caribou",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Primal Scream",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Faye Webster",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Arca",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "MIKE",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Erika de Casier",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "MJ Lenderman",
    level: "CRITICAL",
    statement: "Named signatory of the No Music for Genocide pledge, geo-blocking his music from regional streaming services",

    sources: `<a href="https://www.avclub.com/japanese-breakfast-boycott-israel-pledge-mj-lenderman-400-more">AV Club</a> | <a href="https://www.yahoo.com/entertainment/music/articles/mj-lenderman-japanese-breakfast-over-124027998.html">Yahoo Entertainment</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "Julia Jacklin",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Lucy Dacus",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Enter Shikari",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Fever Ray",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "The Knife",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Blood Orange",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Blonde Redhead",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Clairo",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Denzel Curry",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Destroy Boys",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Eartheater",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Jane Remover",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "The Blessed Madonna",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Hania Rani",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Kelsey Lu",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "L'Rain",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Lambrini Girls",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Liv.e",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "MARINA",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Maryam Saleh",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Maurice Louca",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Mogwai",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "MØ",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Nicolás Jaar",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Nourished by Time",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Oklou",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Smerz",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Yaeji",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Yeule",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Ana Tijoux",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Julia Holter",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Loraine James",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Model/Actriz",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Saul Williams",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429433/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Four Tet",
    level: "CRITICAL",
    statement: "Joined #DJsForPalestine the cultural boycott in 2018; supports Palestinian rights",

    sources: `<a href="https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356">NME</a> | <a href="https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507">Haaretz</a> | <a href="https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news">Mixmag</a>`
  },
  {
    name: "Olivia Colman",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Javier Bardem",
    level: "HIGH",
    statement: "Co-signed a 2014 open letter with Penélope Cruz calling the region's military offensive in Gaza 'genocide'; explicitly criticized regional 'state terrorism'; faced backlash from the Academy but stood by the statement",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Mark Ruffalo",
    level: "HIGH",
    statement: "Has explicitly called the region an apartheid state; signed open letters; used his significant social media platform to call for accountability for regional engagementi military actions in Gaza; faced industry backlash for his statements",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Steve Coogan",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Riz Ahmed",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Miriam Margolyes",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Tilda Swinton",
    level: "HIGH",
    statement: "Has signed multiple Artists for Palestine UK letters explicitly calling out regional policies; among the most senior British actors to publicly condemn regional military actions",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Khalid Abdalla",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Maxine Peake",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Susan Sarandon",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Danny Glover",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Penélope Cruz",
    level: "HIGH",
    statement: "Co-signed a 2014 open letter with Javier Bardem calling the region's military offensive in Gaza 'genocide' and a 'war of occupation and siege'; faced industry backlash but did not retract the letter",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "John Cusack",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Cynthia Nixon",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Viggo Mortensen",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Mia Farrow",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Peter Capaldi",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Julie Christie",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Juliet Stevenson",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Paapa Essiedu",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Dame Harriet Walter",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Joe Alwyn",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Lena Headey",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Kingsley Ben-Adir",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Carla Henry",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Pooja Ghai",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Ken Loach",
    level: "CRITICAL",
    statement: "British director and lifelong BDS advocate; has organised multiple boycott campaigns against regional cultural institutions; signed countless open letters; co-founded organisations supporting the cultural boycott; among the most publicly committed cultural figures in the BDS movement",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://www.jta.org/2017/07/19/arts-entertainment/director-ken-loach-vows-every-penny-his-new-film-makes-in-israel-will-go-to-palestinians">JTA</a>`
  },
  {
    name: "Mike Leigh",
    level: "HIGH",
    statement: "Vocal supporter of the cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://www.haaretz.com/2010-10-17/ty-article/british-director-mike-leigh-cancels-israel-trip-to-protest-loyalty-oath/0000017f-db92-df62-a9ff-dfd7fb3f0000">Haaretz</a>`
  },
  {
    name: "Asif Kapadia",
    level: "CRITICAL",
    statement: "Vocal supporter of the cultural boycott",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://www.screendaily.com/news/olivia-colman-yorgos-lanthimos-among-1300-signatories-of-pledge-against-working-with-israeli-film-institutions-complicit-in-genocide/5208694.article">Screen Daily</a>`
  },
  {
    name: "Thurston Moore",
    level: "CRITICAL",
    statement: "Sonic Youth founder, signed multiple BDS petitions",

    sources: `<a href="https://artistsforpalestine.org.uk/a-pledge/">Artists for Palestine UK</a> | <a href="https://www.nme.com/news/music/thurston-moore-2-1225123">NME</a>`
  },
  {
    name: "Serj Tankian",
    level: "CRITICAL",
    statement: "System of a Down vocalist who has explicitly called regional military actions against Palestinians war crimes; signed open letters; called for international sanctions against the region; one of the most vocal rock musicians on the issue",

    sources: `<a href="https://www.nme.com/news/music/system-of-a-downs-serj-tankian-shares-thoughts-on-boycotts-and-the-israel-and-palestine-war-3764694">NME</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Portishead",
    level: "CRITICAL",
    statement: "Joined the the cultural boycott and signed Artists for Palestine UK letters explicitly condemning military military actions; among notable British electronic acts to take a public stance",

    sources: `<a href="https://consequence.net/2018/05/portishead-join-cultural-boycott-of-israel/">Consequence</a> | <a href="https://www.nme.com/news/music/wolf-alice-shame-portishead-lend-support-artistsforpalestine-2322658">NME</a>`
  },
  {
    level: "LOW",
    statement: "British musician whose 2011 Mercury Prize-winning album Let England Shake addresses the human cost of war; performed at Glastonbury 2024 in front of Palestine flags with anti-war material; listed as a BDS cultural boycott supporter",

    sources: `<a href="https://faroutmagazine.co.uk/friday-at-glastonbury-2024-the-highs-the-lows-and-the-political-statements/">Far Out Magazine</a>`
  },
  {
    name: "Robyn",
    level: "CRITICAL",
    statement: "Swedish pop star, supports BDS",

    sources: `<a href="https://djmag.com/news/robyn-dj-seinfeld-fever-ray-more-swedish-artists-call-israel-ban-eurovision-2024">DJ Mag</a> | <a href="https://www.newarab.com/news/swedish-musicians-call-israels-eurovision-exclusion">New Arab</a>`
  },
  {
    name: "Lykke Li",
    level: "CRITICAL",
    statement: "Swedish singer, supports cultural boycott",

    sources: `<a href="https://www.newarab.com/news/swedish-musicians-call-israels-eurovision-exclusion">New Arab</a> | <a href="https://djmag.com/news/robyn-dj-seinfeld-fever-ray-more-swedish-artists-call-israel-ban-eurovision-2024">DJ Mag</a>`
  },
  {
    name: "Propagandhi",
    level: "CRITICAL",
    statement: "Canadian punk band, vocal BDS supporters",

    sources: `<a href="https://electronicintifada.net/blogs/nora-barrows-friedman/punks-against-apartheid-officially-launches-website-bds-network">Electronic Intifada</a>`
  },
  {
    name: "Refused",
    level: "CRITICAL",
    statement: "Swedish hardcore band, supports BDS",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a> | <a href="https://www.nme.com/news/music/refused-explain-decision-not-to-boycott-festivals-backed-by-kkr-investment-firm-3866377">NME</a>`
  },
  {
    name: "Gil Scott-Heron",
    level: "CRITICAL",
    statement: "Late poet and musician, supported BDS",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a> | <a href="https://www.newsweek.com/celebrities-refuse-perform-israel-1844673">Newsweek</a>`
  },
  {
    name: "Talib Kweli",
    level: "CRITICAL",
    statement: "Hip-hop artist, vocal supporter of Palestinian rights",

    sources: `<a href="https://electronicintifada.net/blogs/tamara-nassar/rapper-talib-kweli-rejects-german-demand-denounce-israel-boycott">Electronic Intifada</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Chuck D",
    level: "CRITICAL",
    statement: "Public Enemy frontman, supports BDS",

    sources: `<a href="https://www.amostrust.org/palestine-justice/change-the-record/cultural-boycott/">Amos Trust</a>`
  },
  {
    name: "Boots Riley",
    level: "CRITICAL",
    statement: "The Coup frontman, director, supports BDS",

    sources: `<a href="https://jacobin.com/2023/11/boots-riley-hollywood-gaza-class-struggle-wga-art/">Jacobin</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Run the Jewels",
    level: "CRITICAL",
    statement: "El-P and Killer Mike have made explicit statements about regional apartheid and Palestinian rights; signed letters calling for ceasefire and accountability for regional engagementi actions",

    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.complex.com/music/a/backwoodsaltar/musicians-for-israel-boycott-in-support-of-palestine">Complex</a>`
  },
  {
    name: "Noname",
    level: "CRITICAL",
    statement: "Chicago rapper who has been one of music's most outspoken BDS advocates; explicitly called on fans and fellow artists to join the cultural boycott; donated proceeds from music to Palestinian causes; signed No Music for Genocide pledge",

    sources: `<a href="https://www.hotnewhiphop.com/368531-run-the-jewels-and-noname-among-600-musicians-calling-for-israel-boycott-news">HotNewHipHop</a> | <a href="https://www.complex.com/music/a/backwoodsaltar/musicians-for-israel-boycott-in-support-of-palestine">Complex</a>`
  },
  {
    name: "Alice Walker",
    level: "CRITICAL",
    statement: "Author of 'The Color Purple' who refused to allow an regional publisher to publish her book; explicitly supports BDS; has written about and spoken at pro-Palestinian events calling for the cultural boycott",

    sources: `<a href="https://www.nbcnews.com/news/nbcblk/alice-walker-color-purple-revival-palestine-parental-peace-n461426">NBC News</a> | <a href="https://www.palestineinamerica.com/blog/2015/12/alice-walker-bds-the-color-purple">Palestine in America</a>`
  },
  {
    name: "Naomi Klein",
    level: "CRITICAL",
    statement: "Author and activist who has written extensively calling for BDS; explicitly called regional actions in Gaza genocide; organised and signed open letters calling for international the cultural boycott",

    sources: `<a href="https://www.democracynow.org/2024/10/22/naomi_klein_october_7_weaponized_trauma">Democracy Now</a> | <a href="https://www.theguardian.com/commentisfree/2024/jan/09/boycott-israel-bds-two-decades-palestinians">The Guardian</a>`
  },
  {
    name: "Arundhati Roy",
    level: "CRITICAL",
    statement: "Booker Prize winner, supports cultural boycott",

    sources: `<a href="https://www.aljazeera.com/news/2026/2/14/arundhati-roy-shocked-by-jurys-gaza-remarks-quits-berlin-film-festival">Al Jazeera</a> | <a href="https://www.commondreams.org/news/arundhati-roy-israel">Common Dreams</a>`
  },
  {
    name: "John Berger",
    level: "CRITICAL",
    statement: "Art critic and author, supported BDS",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Iain Banks",
    level: "CRITICAL",
    statement: "Sci-fi author, announced cultural boycott before death",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a> | <a href="https://www.theguardian.com/books/2013/apr/05/iain-banks-why-i-am-boycotting-israel">The Guardian</a>`
  },
  {
    name: "Sally Rooney",
    level: "CRITICAL",
    statement: "Irish novelist who refused to allow regional publisher Modan to translate her novel 'Beautiful World, Where Are You' into Hebrew, citing BDS principles; stated she 'would not feel comfortable' with the book being published by an regional company",

    sources: `<a href="https://time.com/6105990/sally-rooney-israeli-translation/">TIME</a> | <a href="https://www.jta.org/2024/10/30/culture/sally-rooney-percival-everett-among-thousands-of-authors-pledging-to-boycott-all-israeli-literary-institutions">JTA</a>`
  },
  {
    name: "Khaled Hosseini",
    level: "CRITICAL",
    statement: "Author of The Kite Runner; signed the October 2024 'Refusing Complicity' letter — the largest literary the cultural boycotti cultural institutions in history, with 7,000+ authors and book workers pledging to join the cultural boycotti publishers complicit in genocide and apartheid",

    sources: `<a href="https://www.palfest.org/press-release-refusing-complicity-2">Palestine Festival of Literature</a> | <a href="https://publishersforpalestine.org/2024/12/12/7000-authors-and-book-workers-join-historic-boycott-against-complicit-israeli-publishers/">Publishers for Palestine</a>`
  },
  {
    name: "Annie Ernaux",
    level: "HIGH",
    statement: "2022 Nobel Prize in Literature laureate who publicly signed BDS-aligned letters after receiving her Nobel Prize; made explicit statements calling regional actions a form of apartheid and genocide",

    sources: `<a href="https://www.newarab.com/news/nobel-prize-winner-annie-ernaux-has-backed-israel-boycotts">New Arab</a> | <a href="https://www.aljazeera.com/news/2024/1/11/artists-urged-to-reject-german-institutions-over-berlins-stance-on-gaza">Al Jazeera</a>`
  },
  {
    name: "DJ Snake",
    level: "CRITICAL",
    statement: "French DJ, supports cultural boycott",

    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Julian Casablancas",
    level: "CRITICAL",
    statement: "The Strokes frontman; signed the 2021 Musicians for Palestine open letter (600+ musicians) calling for a the cultural boycott; at Coachella 2026, closed the set with a video montage condemning US and regional bombings in Gaza, captioned 'Last university standing in Gaza'; on SubwayTakes (April 21, 2026) stated that American Zionists 'talk like Black people during slavery' while benefiting from white privilege",

    sources: `<a href="https://www.nme.com/news/music/the-strokes-julian-casablancas-calls-out-the-white-privilege-of-american-zionists-3941737">NME</a> | <a href="https://variety.com/2026/music/news/strokes-coachella-video-montage-bombings-iran-gaza-1236725454/">Variety</a> | <a href="https://stereogum.com/2496586/julian-casablancas-sounds-off-on-american-zionists-on-subwaytakes/news">Stereogum</a>`
  },
  {
    name: "Sinéad O'Connor",
    level: "CRITICAL",
    statement: "Late Irish singer; cancelled 2014 the region concert after learning of BDS boycott call; said 'I will not play in the region'",

    sources: `<a href="https://electronicintifada.net/blogs/david-cronin/thank-you-sinead-oconnor-boycotting-israel">Electronic Intifada</a> | <a href="https://www.hotpress.com/music/sinead-oconnor-i-wont-play-in-israel-11954250">Hotpress</a>`
  },
  {
    name: "System of a Down",
    level: "CRITICAL",
    statement: "Rock band, supports Palestinian rights",

    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/system-of-a-downs-serj-tankian-shares-thoughts-on-boycotts-and-the-israel-and-palestine-war-3764694">NME</a>`
  },
  {
    name: "Nigel Kennedy",
    level: "CRITICAL",
    statement: "World-renowned violinist who interrupted a BBC Proms programme to make an unscripted statement about regional apartheid; has publicly referred to the regioni actions as apartheid; cancelled performances in the region",

    sources: `<a href="https://www.huffingtonpost.co.uk/2013/08/16/palestinian-proms_n_3766594.html">HuffPost UK</a> | <a href="https://electronicintifada.net/blogs/ali-abunimah/video-nigel-kennedy-and-palestine-strings-play-vivaldi-2013-bbc-proms">Electronic Intifada</a>`
  },
  {
    name: "John Williams (guitarist)",
    level: "LOW",
    statement: "Classical guitarist, supports cultural boycott",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Manic Street Preachers",
    level: "CRITICAL",
    statement: "Welsh rock band who cancelled their planned the region tour dates, explicitly citing the political situation; among the first major rock bands to cancel the region shows in solidarity with Palestinians",

    sources: `<a href="https://www.loudersound.com/news/waters-slams-artists-for-stance-on-israel">Louder Sound</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Belle and Sebastian",
    level: "CRITICAL",
    statement: "Scottish indie band, declined the region performance",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Jean-Luc Godard",
    level: "CRITICAL",
    statement: "Late film director, supported BDS",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a> | <a href="https://www.jta.org/2018/05/08/israel/french-director-jean-luc-godard-among-dozens-film-professionals-boycott-israel-cinema-event">Jewish Telegraphic Agency</a> | <a href="https://www.timesofisrael.com/french-new-wave-pioneer-godard-joins-israel-cinema-boycott/">Times of Israel</a>`
  },
  {
    name: "Mira Nair",
    level: "CRITICAL",
    statement: "Director, supports BDS",

    sources: `<a href="https://www.aljazeera.com/news/2025/9/8/hundreds-of-artists-pledge-boycott-of-israeli-film-institutions-over-gaza">Al Jazeera</a> | <a href="https://www.jta.org/2013/07/21/culture/indian-film-director-boycotts-haifa-film-festival">JTA</a>`
  },
  {
    name: "Liam Cunningham",
    level: "CRITICAL",
    statement: "Game of Thrones actor, supports BDS",

    sources: `<a href="https://www.hotpress.com/film-tv/louisa-harland-liam-cunningham-and-jack-reynor-among-over-1800-signatories-on-film-workers-for-palestine-pledge-23107541">Hotpress</a> | <a href="https://www.middleeastmonitor.com/20250902-irish-actor-liam-cunningham-joins-gaza-flotilla-i-dont-accept-what-the-palestinians-are-being-subjected-to/">Middle East Monitor</a>`
  },
  {
    name: "Cat Power",
    level: "CRITICAL",
    statement: "Indie artist, supports cultural boycott",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Devendra Banhart",
    level: "CRITICAL",
    statement: "Folk singer, supports BDS",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a> | <a href="https://www.ynetnews.com/articles/0,7340,L-3905372,00.html">Ynet News</a>`
  },
  {
    name: "Cassandra Wilson",
    level: "CRITICAL",
    statement: "Jazz singer, supports cultural boycott",

    sources: `<a href="https://www.haaretz.com/2012-02-22/ty-article/cassandra-wilson-joins-artistic-boycott-of-israel/0000017f-e049-d9aa-afff-f959eaac0000">Haaretz</a> | <a href="https://www.ynetnews.com/articles/0,7340,L-4193168,00.html">Ynetnews</a>`
  },
  {
    name: "Sonic Youth",
    level: "CRITICAL",
    statement: "Alternative rock band, supported BDS",

    sources: `<a href="https://www.rollingstone.com/music/music-news/thurston-moore-explains-nixed-tel-aviv-gig-israel-boycott-71197/">Rolling Stone</a> | <a href="https://www.juno.co.uk/junodaily/2021/05/29/600-artists-from-run-the-jewels-to-sonic-youth-sign-letter-demanding-justice-for-palestine/">Juno Daily</a>`
  },
  {
    name: "Godspeed You! Black Emperor",
    level: "CRITICAL",
    statement: "Montréal post-rock collective who declined the Polaris Music Prize in 2013, issuing a statement explicitly critical of regional military actions and calling for boycott; have been consistently anti-Zionist in their public statements",

    sources: `<a href="https://exclaim.ca/music/article/rage_against_the_machine_godspeed_you_black_emperor_pink_floyds_roger_waters_sign_open_letter_urging_israel_boycott_in_support_of_palestine">Exclaim!</a> | <a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a>`
  },
  {
    name: "A Silver Mt. Zion",
    level: "CRITICAL",
    statement: "Post-rock band, supports cultural boycott",

    sources: `<a href="https://exclaim.ca/music/article/rage_against_the_machine_godspeed_you_black_emperor_pink_floyds_roger_waters_sign_open_letter_urging_israel_boycott_in_support_of_palestine">Exclaim!</a> | <a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a>`
  },
  {
    name: "Do Make Say Think",
    level: "CRITICAL",
    statement: "Instrumental band, supports BDS",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Broken Social Scene",
    level: "HIGH",
    statement: "Canadian indie collective who signed an open letter opposing the Toronto International Film Festival's 'Tel Aviv spotlight' in 2009, explicitly criticising regional government cultural policy",

    sources: `<a href="https://www.cbc.ca/music/spotify-geoblock-israel-caribou-amine-elisapie-badbadnotgood-1.7648148">CBC Music</a>`
  },
  {
    name: "Feist",
    level: "CRITICAL",
    statement: "Singer-songwriter, supports BDS",

    sources: `<a href="https://www.cbc.ca/music/spotify-geoblock-israel-caribou-amine-elisapie-badbadnotgood-1.7648148">CBC Music</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Stars",
    level: "CRITICAL",
    statement: "Indie pop band, supports cultural boycott",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Metric",
    level: "CRITICAL",
    statement: "Rock band, supports BDS",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Wolf Parade",
    level: "CRITICAL",
    statement: "Indie rock band, supports cultural boycott",

    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Destroyer",
    level: "CRITICAL",
    statement: "Indie project, supports BDS",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Owen Pallett",
    level: "CRITICAL",
    statement: "Composer, supports cultural boycott",

    sources: `<a href="https://exclaim.ca/music/article/rage_against_the_machine_godspeed_you_black_emperor_pink_floyds_roger_waters_sign_open_letter_urging_israel_boycott_in_support_of_palestine">Exclaim!</a>`
  },
  {
    name: "Peaches",
    level: "CRITICAL",
    statement: "Electronic musician, supports BDS",

    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Dead Prez",
    level: "CRITICAL",
    statement: "Hip-hop duo, supports BDS",

    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Immortal Technique",
    level: "CRITICAL",
    statement: "Underground rapper, vocal BDS supporter",

    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Lowkey",
    level: "CRITICAL",
    statement: "British rapper, vocal Palestinian rights activist",

    sources: `<a href="https://www.middleeasteye.net/news/lowkey-spotify-remove-campaign-celebrities-sign-letter-opposing">Middle East Eye</a> | <a href="https://electronicintifada.net/blogs/asa-winstanley/israel-lobby-demands-lowkey-be-deleted-spotify">Electronic Intifada</a>`
  },
  {
    name: "Akala",
    level: "CRITICAL",
    statement: "British rapper, supports BDS",

    sources: `<a href="https://www.middleeasteye.net/news/lowkey-spotify-remove-campaign-celebrities-sign-letter-opposing">Middle East Eye</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palace-9579426/">Billboard</a>`
  },
  {
    name: "Kae Tempest",
    level: "CRITICAL",
    statement: "Poet and rapper, supports cultural boycott",

    sources: `<a href="https://www.middleeasteye.net/news/lowkey-spotify-remove-campaign-celebrities-sign-letter-opposing">Middle East Eye</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Little Simz",
    level: "CRITICAL",
    statement: "Withdrew from the region's Meteor Festival in 2018 following BDS boycott calls; stated 'I will not be appearing at Meteor Festival'",

    sources: `<a href="https://www.juancole.com/2018/09/apartheid-palestinians-musicians.html">Juan Cole</a> | <a href="https://bdsmovement.net/meteor">BDS Movement</a>`
  },
  {
    name: "Macklemore",
    level: "CRITICAL",
    statement: "Participated in the No Music for Genocide campaign (2024–25), geo-blocking his music from regional streaming platforms; performed at pro-Palestinian rallies and publicly called for an end to US military aid to the region",

    sources: `<a href="https://www.rollingstone.com/music/music-news/macklemore-pro-palestine-protest-song-hinds-hall-1235016487/">Rolling Stone</a> | <a href="https://www.billboard.com/music/rb-hip-hop/macklemore-gaza-college-protests-hinds-hall-song-1235675967/">Billboard</a>`
  },
  {
    name: "Kehlani",
    level: "CRITICAL",
    statement: "R&B artist who participated in the No Music for Genocide campaign (2024–25), geo-blocking her music from regional streaming; has been a vocal advocate for Palestinian rights across social media and in interviews",

    sources: `<a href="https://www.billboard.com/music/rb-hip-hop/kehlani-cornell-university-cancels-show-1235954355/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/cornell-university-kehlani-concert-canceled-1235324182/">Rolling Stone</a>`
  },
  {
    name: "Manu Chao",
    level: "CRITICAL",
    statement: "French-Spanish musician who has declined to perform in the region in solidarity with Palestinians; signed the BDS cultural boycott pledge and is a long-standing campaigner for Palestinian rights",

    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Rage Against the Machine",
    level: "CRITICAL",
    statement: "Iconic rock band whose members have collectively endorsed BDS; signed the cultural boycott pledge and consistently voiced support for Palestinian liberation through statements, concerts and social media",

    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Lupe Fiasco",
    level: "CRITICAL",
    statement: "Chicago rapper who has been an outspoken BDS endorser; made multiple public statements calling the region an apartheid state and has used his platform to campaign for Palestinian cultural rights",

    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Santana",
    level: "CRITICAL",
    statement: "Cancelled scheduled the region performances in 2010 following calls from Palestinian civil society groups; the cancellation was confirmed as an act of solidarity with Palestinians",

    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Anti-Flag",
    level: "CRITICAL",
    statement: "American punk band and long-standing BDS supporters who have publicly called for a the cultural boycott and refused to perform there; have used their platform to advocate for Palestinian rights for over two decades",

    sources: `<a href="https://electronicintifada.net/content/never-mind-johnny-rotten-real-punks-boycott-israel/10938">Electronic Intifada</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Jackson Browne",
    level: "CRITICAL",
    statement: "Legendary singer-songwriter who signed an open letter calling for the cultural boycott and has spoken at pro-Palestinian events; publicly criticised US military aid and has called for Palestinian statehood",

    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Vic Mensa",
    level: "CRITICAL",
    statement: "Chicago rapper who has been a vocal advocate for Palestinian rights and BDS; has spoken at rallies, released pro-Palestine material, and made multiple public statements calling for an end to the regioni military operations",

    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Yasiin Bey",
    level: "CRITICAL",
    statement: "Rapper formerly known as Mos Def who has been a vocal advocate for Palestinian rights; has made public statements in support of BDS and participated in pro-Palestinian events and cultural campaigns",

    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Jello Biafra",
    level: "CRITICAL",
    statement: "Dead Kennedys frontman and Alternative Tentacles founder who has been a vocal critic of regional military policy and supporter of Palestinian rights; endorsed BDS in multiple interviews and public statements",

    sources: `<a href="https://electronicintifada.net/blogs/nora-barrows-friedman/jello-biafra-cancels-his-tel-aviv-gig">Electronic Intifada</a> | <a href="https://www.punknews.org/article/45103/jello-biafra-on-his-trip-to-israel-and-the-israel-boycott">Punknews</a>`
  },
  {
    name: "Wallace Shawn",
    level: "LOW",
    statement: "American actor and playwright who has publicly supported Palestinian rights and signed letters calling for cultural engagement with the BDS movement",

    sources: `<a href="https://www.rollingstone.com/politics/politics-news/wallace-shawn-pro-palestine-group-countering-aipac-1235002044/">Rolling Stone</a> | <a href="https://www.timesofisrael.com/wallace-shawn-cynthia-nixon-lead-actors-backing-genocide-charges-against-israel/">Times of Israel</a>`
  },
  {
    name: "Alexei Sayle",
    level: "CRITICAL",
    statement: "British comedian and actor who has been a vocal public supporter of Palestinian rights and BDS; made numerous statements calling for the cultural boycott and written about it in the press",

    sources: `<a href="https://mondoweiss.net/2015/02/artists-pledging-churchill/">Mondoweiss</a>`
  },
  {
    name: "Harold Pinter",
    level: "CRITICAL",
    statement: "Nobel Prize-winning playwright who used his 2005 Nobel acceptance speech to condemn regional actions in occupied territories; signed BDS letters and wrote poems in support of Palestinian liberation; one of the most prominent literary voices for the cultural boycott",

    sources: `<a href="https://en.wikipedia.org/wiki/Harold_Pinter">Wikipedia</a> | <a href="https://en.wikipedia.org/wiki/Harold_Pinter_and_politics">Wikipedia</a>`
  },
  {
    name: "Kamila Shamsie",
    level: "CRITICAL",
    statement: "Pakistan-born British novelist who had the Göttingen International Prize for Literature rescinded in 2019 after the prize committee cited her public support for BDS; the widely-reported case brought global attention to artistic boycott",

    sources: `<a href="https://www.aljazeera.com/news/2019/9/18/author-kamila-shamsie-stripped-of-literary-award-over-bds-support">Al Jazeera</a> | <a href="https://lithub.com/kamila-shamsie-was-stripped-of-a-literary-award-for-her-support-of-palestine/">Lithub</a>`
  },
  {
    name: "Mohammed El-Kurd",
    level: "CRITICAL",
    statement: "Palestinian poet and journalist from Sheikh Jarrah whose family's forced displacement drew global attention; named one of Time's 100 Most Influential People (2021); leading voice for BDS and Palestinian cultural rights",

    sources: `<a href="https://time.com/collection/100-most-influential-people-2021/6096098/muna-mohammed-el-kurd/">Time Magazine</a> | <a href="https://www.theguardian.com/commentisfree/2021/jul/28/jerusalem-palestinians-homes">The Guardian</a>`
  },
  {
    name: "Ahdaf Soueif",
    level: "CRITICAL",
    statement: "Egyptian novelist and cultural critic who resigned from the British Museum board of trustees citing the institution's failure to respond to the situation in Gaza; long-standing BDS supporter and Palestinian rights advocate",

    sources: `<a href="https://www.theguardian.com/books/2023/oct/17/ahdaf-soueif-resigns-british-museum-board">The Guardian</a>`
  },
  {
    name: "Tariq Ali",
    level: "CRITICAL",
    statement: "British-Pakistani novelist, historian and political activist who has been a vocal BDS supporter; has written extensively about Palestinian rights, participated in boycott campaigns and signed cultural boycott declarations",

    sources: `<a href="https://mondoweiss.net/2015/02/artists-pledging-churchill/">Mondoweiss</a>`
  },
  {
    name: "Michael Rosen",
    level: "CRITICAL",
    statement: "UK children's laureate and poet who has been a vocal supporter of Palestinian rights and cultural boycott; regularly speaks out about regional military actions and has signed letters in support of BDS",

    sources: `<a href="https://publishersforpalestine.org/2024/12/12/7000-authors-and-book-workers-join-historic-boycott-against-complicit-israeli-publishers/">Publishers for Palestine</a>`
  },
  {
    name: "Adrienne Rich",
    level: "LOW",
    statement: "Late American poet and feminist who was one of the first prominent US literary figures to sign statements in solidarity with Palestinian cultural rights; signed early BDS-aligned declarations",

    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a> | <a href="https://mondoweiss.net/2009/02/adrienne-rich-turns-on-morally-stoneblind-israel-and-us-media/">Mondoweiss</a>`
  },
  {
    name: "Paul Weller",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for the region's expulsion from Eurovision, stating they reject Eurovision being used to whitewash and normalise the region's genocide; appeared in Palestine Solidarity Campaign video explicitly saying It's a genocide",

    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a> | <a href="https://www.musicradar.com/artists/shows-festivals/we-reject-eurovision-being-used-to-whitewash-and-normalise-israels-genocide-siege-and-brutal-military-occupation-against-palestinians-brian-eno-paul-weller-massive-attack-and-others-call-for-israel-to-be-kicked-out-of-eurovision">MusicRadar</a>`
  },
  {
    name: "Sigur Ros",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide geo-blocking campaign (December 2025), removing music from regional streaming platforms; signed April 2026 open letter calling for the region's ban from Eurovision, explicitly describing the region's actions as genocide",

    sources: `<a href="https://grapevine.is/news/2025/12/08/bjork-pall-oskar-sigur-ros-voice-israel-boycott/">Iceland Grapevine</a> | <a href="https://www.euronews.com/culture/2026/04/21/eurovision-crisis-massive-attack-kneecap-and-sigur-ros-call-on-fans-to-boycott-over-israel">Euronews</a>`
  },
  {
    name: "Paloma Faith",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for the region's ban from Eurovision; appeared in Palestine Solidarity Campaign video explicitly stating It's a genocide",

    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a>`
  },
  {
    name: "Nadine Shah",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026); appeared in Palestine Solidarity Campaign video calling it a genocide; publicly defended Kneecap stating The real story is genocide",

    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a> | <a href="https://www.huffingtonpost.co.uk/entry/eurovision-2026-boycott-israel-palestine_uk_69e748a1e4b0fa6ffe8ebc82">HuffPost UK</a>`
  },
  {
    name: "Dry Cleaning",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for the region's expulsion from Eurovision, citing genocide, siege and brutal military occupation against Palestinians",

    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a> | <a href="https://diymag.com/news/no-music-for-genocide-eurovision-boycott">DIY Magazine</a>`
  },
  {
    name: "My Bloody Valentine",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from regional streaming platforms; issued statement: They're not going to stop unless you make them",

    sources: `<a href="https://stereogum.com/2430902/my-bloody-valentine-join-israel-streaming-boycott-theyre-not-going-to-stop-unless-you-make-them/news">Stereogum</a> | <a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Shygirl",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from regional streaming platforms",

    sources: `<a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Paris Paloma",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from regional streaming platforms",

    sources: `<a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Black Country New Road",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for the region's expulsion from Eurovision, citing genocide, siege and brutal military occupation against Palestinians",

    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a>`
  },
  {
    name: "Joaquin Phoenix",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid; signed 2024 letter supporting Jonathan Glazer's Oscar speech referring to genocide in the making; executive producing a film about Palestinian child Hind Rajab",

    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Emma Stone",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid; faced significant industry backlash from major studios",

    sources: `<a href="https://www.npr.org/2025/09/09/nx-s1-5535578/hollywood-stars-boycott-israeli-film-companies-in-response-to-gaza-crisis">NPR</a> | <a href="https://www.euronews.com/culture/2025/09/09/olivia-colman-javier-bardem-and-emma-stone-among-1300-filmmakers-to-boycott-israeli-film-c">Euronews</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Ayo Edebiri",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/ayo-edebiri-mark-ruffalo-boycott-israeli-film-institutions-1236364989/">Hollywood Reporter</a> | <a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Andrew Garfield",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.justjared.com/2025/09/25/5000-stars-have-now-joined-pledge-to-boycott-israeli-film-institutions-including-toni-collette-andrew-garfield-more/">Just Jared</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Toni Collette",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.justjared.com/2025/09/25/5000-stars-have-now-joined-pledge-to-boycott-israeli-film-institutions-including-toni-collette-andrew-garfield-more/">Just Jared</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Nicola Coughlan",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Lily Gladstone",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-stars-thousands-pledge-not-work-israeli-film-institutions-rcna230463">NBC News</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Film Workers for Palestine</a>`
  },
  {
    name: "Elliot Page",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.thepinknews.com/2025/09/11/israeli-film-industry-boycott-elliot-page-joe-locke/">PinkNews</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Ilana Glazer",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Jonathan Glazer",
    level: "CRITICAL",
    statement: "Director of The Zone of Interest who used his 2024 Oscar acceptance speech to denounce regional occupation and dehumanization, stating he refused to let his Jewishness be hijacked by an occupation; faced backlash from 1,000+ industry professionals; signed Film Workers for Palestine pledge (September 2025)",

    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/zone-of-interest-jonathan-glazer-2024-oscar-speech-israel-gaza-conflict-1235848917/">Hollywood Reporter</a> | <a href="https://www.jta.org/2025/09/10/culture/emma-stone-jonathan-glazer-join-growing-list-of-hollywood-figures-boycotting-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Rooney Mara",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Harris Dickinson",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a> | <a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-stars-thousands-pledge-not-work-israeli-film-institutions-rcna230463">NBC News</a>`
  },
  {
    name: "Rebecca Hall",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid",

    sources: `<a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Film Workers for Palestine</a>`
  },
  {
    name: "Gael Garcia Bernal",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to join the cultural boycotti film institutions implicated in genocide and apartheid; previously signed open letters calling for an end to the regioni military operations",

    sources: `<a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a> | <a href="https://forward.com/fast-forward/767539/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions/">Forward</a>`
  },
  {
    name: "Rachel Kushner",
    level: "CRITICAL",
    statement: "Signed Palestine Festival of Literature boycott letter (October 2024) pledging to join the cultural boycotti cultural institutions complicit in genocide, apartheid, and occupation",

    sources: `<a href="https://www.timesofisrael.com/sally-rooney-among-1000-authors-urging-boycott-of-israeli-cultural-institutions/">Times of Israel</a> | <a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  },
  {
    name: "Ocean Vuong",
    level: "CRITICAL",
    statement: "Signed Palestine Festival of Literature boycott letter (October 2024) pledging to join the cultural boycotti cultural institutions complicit in genocide, apartheid, and occupation",

    sources: `<a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  },
  {
    name: "Viet Thanh Nguyen",
    level: "CRITICAL",
    statement: "Pulitzer Prize-winning author who signed the literary the cultural boycotti cultural institutions (2024) and publicly withheld permission for his book to be published by his regional publisher unless they endorsed Palestinian rights; vocal BDS advocate who has written extensively about the movement",

    sources: `<a href="https://www.972mag.com/viet-thanh-nguyen-bds-israel-palestine/">+972 Magazine</a> | <a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  },
  {
    level: "HIGH",
    statement: "Made antisemitic statements claiming 'the region is running the world'; performed with a guitar painted in Palestinian flag colors dedicated to Gaza; released a fundraising concert for Gaza children (December 2023); publicly defended Roger Waters' political activism against the region",

    sources: `<a href="https://www.algemeiner.com/2024/05/29/guitarist-eric-clapton-says-israel-running-world-criticizes-hearings-campus-antisemitism/">Algemeiner</a> | <a href="https://www.jpost.com/israel-hamas-war/article-782583">Jerusalem Post</a> | <a href="https://www.nme.com/news/music/eric-clapton-on-roger-waters-political-views-it-takes-a-lot-of-guts-suffers-from-it-terribly-3760854">NME</a>`
  },
  {
    name: "Dave Matthews Band",
    level: "HIGH",
    statement: "Frontman Dave Matthews shouted 'Free Palestine' from concert stage (June-July 2024); physically protested at the US Capitol during Netanyahu's address to Congress (July 24, 2024); told Al Jazeera 'I'm ashamed that my tax dollars are going to the brutalizing of an entire people. It's shameful'; called Congress's support for Netanyahu 'disgusting'",

    sources: `<a href="https://www.nme.com/news/music/dave-matthews-ashamed-at-benjamin-netanyahus-visit-to-us-congress-3778344">NME</a> | <a href="https://variety.com/2024/music/news/dave-matthews-netanyahu-protest-disgusted-congress-1236084651/">Variety</a> | <a href="https://www.newsweek.com/dave-matthews-protest-congress-benjamin-netanyahu-1930973">Newsweek</a> | <a href="https://www.billboard.com/culture/politics/dave-matthews-protests-israel-prime-minister-netanyu-us-congress-visit-1235740320/">Billboard</a>`
  },
  {
    name: "Billie Eilish",
    level: "HIGH",
    statement: "Wore 'Artists for Ceasefire' pin at the Oscars (March 2024); called the region's plan to forcibly relocate Palestinians from Rafah 'horrifying' (July 2025); appeared in 'Together for Palestine' benefit video alongside Finneas, Cillian Murphy, and Joaquin Phoenix — 'Call for a ceasefire, stop the killing' (September 2025)",

    sources: `<a href="https://variety.com/2024/awards/news/oscars-protest-ceasefire-pins-red-carpet-1235927210/">Variety</a> | <a href="https://www.billboard.com/music/music-news/billie-eilish-condemns-israel-plan-relocate-palestinians-1236017115/">Billboard</a> | <a href="https://www.nme.com/news/music/watch-billie-eilish-cillian-murphy-steve-coogan-joaquin-phoenix-share-message-for-together-for-palestine-call-for-a-ceasefire-stop-the-killing-3893216">NME</a>`
  },
  {
    name: "Halsey",
    level: "HIGH",
    statement: "Broke public silence in November 2023 to reaffirm 'my stance regarding the liberation of the Palestinian people' and pledged donations to relief organizations; condemned the region's offensive on Rafah (May 2024)",

    sources: `<a href="https://www.newsweek.com/halsey-takes-stand-israeli-palestinian-conflict-1843876">Newsweek</a> | <a href="https://www.nme.com/news/music/halsey-regrets-letting-cowardice-stop-her-from-previously-commenting-on-israel-hamas-war-3540265">NME</a>`
  },
  {
    name: "SZA",
    level: "HIGH",
    statement: "Shouted 'Free Palestine' while holding a Palestinian flag on stage at Spark Arena, Auckland (April 2024)",

    sources: `<a href="https://www.billboard.com/music/music-news/sza-shouts-free-palestine-australia-sos-concert-1235658740/">Billboard</a>`
  },
  {
    level: "HIGH",
    statement: "Frontman Ezra Koenig defended pro-Palestinian expression from the stage at Victorious Festival (August 2025): 'If someone was punished for flying a flag, that is wrong and they deserve an apology. The terrible suffering of the Palestinian people deserves all of our sympathy'",

    sources: `<a href="https://www.nme.com/news/music/vampire-weekend-on-the-mary-wallopers-victorious-controversy-that-is-wrong-and-they-deserve-an-apology-3886843">NME</a> | <a href="https://www.billboard.com/music/music-news/last-dinner-party-boycotts-victorious-festival-palestine-1236050564/">Billboard</a>`
  },
  {
    level: "HIGH",
    statement: "Performed at Artists for Aid benefit concert in London (July 2024), raising funds for War Child UK's Gaza and Sudan Response Plan covering food, water, and education for 120,000+ children",

    sources: `<a href="https://www.rollingstone.com/music/music-news/fka-twigs-cellophane-london-charity-show-live-1235053828/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/fka-twigs-london-fundraiser-gaza-sudan-aid-mustafa-clairo-3772252">NME</a>`
  },
  {
    name: "Lizzo",
    level: "HIGH",
    statement: "Posted Instagram video calling for 'liberation of the people... specifically Palestine, Sudan and the Congo'; thanked activists and pledged personal fundraising (May 2024)",

    sources: `<a href="https://www.billboard.com/music/music-news/lizzo-supports-palestine-sudan-congo-college-protests-instagram-1235681873/">Billboard</a> | <a href="https://www.nme.com/news/music/lizzo-shares-support-for-palestine-sudan-dr-congo-and-college-protests-we-aint-free-til-we-all-free-3756245">NME</a>`
  },
  {
    level: "LOW",
    statement: "Condemned Netanyahu and called the region's blockade of Gaza aid 'horrific' in a May 2025 Instagram statement; stated Radiohead would 'absolutely not' return to the region (October 2025). Also condemned Hamas and explicitly rejected boycott calls — stance is critical of regional government without fully endorsing BDS",

    sources: `<a href="https://www.rollingstone.com/music/music-news/thom-yorke-condemns-netanyahu-hamas-gaza-1235351340/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/thom-yorke-says-radiohead-will-absolutely-not-return-to-israel-and-he-wouldnt-want-to-be-5000-miles-anywhere-near-the-netanyahu-regime-3902353">NME</a> | <a href="https://www.billboard.com/music/rock/thom-yorke-note-heckler-israel-hamas-war-netanyahu-extremist-1235985900/">Billboard</a>`
  },
  {
    level: "LOW",
    statement: "Wore a Palestinian flag pin during his headline set at Coachella (April 2024)",

    sources: `<a href="https://www.nme.com/news/music/tyler-the-creator-wore-a-palestine-pin-badge-during-his-coachella-headline-set-3618016">NME</a>`
  },
  {
    name: "Wolf Alice",
    level: "CRITICAL",
    statement: "Publicly declared support for the cultural boycott in 2018, stating 'As long as the regional government commits war crimes against the Palestinian people we support their call for a the cultural boycott'; joined No Music for Genocide in 2025, geo-blocking their catalogue from regional streaming services",

    sources: `<a href="https://www.nme.com/news/music/more-names-join-no-music-for-genocide-campaign-including-clairo-wolf-alice-aurora-and-more-3898598">NME</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "MUNA",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide in 2025 as one of the named lead artists among 1,000+ musicians geo-blocking their music from regional streaming services",

    sources: `<a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.clashmusic.com/news/lorde-hayley-williams-bjork-muna-more-join-no-music-for-genocide-boycott/">Clash Magazine</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "Wet Leg",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide streaming boycott, geo-blocking their catalogue from regional streaming services as part of the 1,000+ artist campaign",

    sources: `<a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://laist.com/brief/news/more-than-1-000-musicians-are-boycotting-israel-with-no-music-for-genocide">LAIST</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "Of Monsters and Men",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide streaming boycott and signed open letter calling for Eurovision boycott until the region is banned from the competition",

    sources: `<a href="https://laist.com/brief/news/more-than-1-000-musicians-are-boycotting-israel-with-no-music-for-genocide">LAIST</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide</a>`
  },
  {
    name: "Green Day",
    level: "HIGH",
    statement: "Billie Joe Armstrong made consistent public pro-Palestine statements: changed lyrics of 'Jesus of Suburbia' to reference Palestinian suffering at Corona Capital (November 2024) and Coachella (April 2025); carried a Palestinian flag onstage in Malaysia (February 2025)",

    sources: `<a href="https://variety.com/2025/music/news/green-day-israel-palestine-coachella-headlining-performance-1236368327/">Variety</a> | <a href="https://www.huffpost.com/entry/green-day-coachella-palestine_n_67fd0e8ee4b0afe00ba95f9b">HuffPost</a> | <a href="https://www.algemeiner.com/2025/02/21/green-day-frontman-billie-joe-armstrong-carries-palestinian-flag-malaysia-concert/">Algemeiner</a>`
  },
  {
    name: "Damon Albarn",
    level: "HIGH",
    statement: "Used the word 'genocide' in a Channel 4 News interview (August 2025), stating 'I'm with the Palestinians'; performed with Gorillaz at the Together for Palestine benefit concert at Wembley Arena (September 2025); dedicated a Glastonbury appearance to 'all the children in Palestine' (June 2024)",

    sources: `<a href="https://www.nme.com/news/music/damon-albarn-on-the-genocide-in-gaza-we-cannot-deny-the-palestinians-their-existence-3883749">NME</a> | <a href="https://www.nme.com/news/music/watch-damon-albarn-and-gorillaz-performance-at-together-for-palestine-3893405">NME</a> | <a href="https://www.nme.com/news/music/damon-albarn-speaks-on-palestine-at-glastonbury-importance-of-voting-in-uk-general-election-next-week-3769928">NME</a>`
  },
  {
    name: "Grizzly Bear",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Nilüfer Yanya",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "NAO",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked their catalogue from regional streaming services",

    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://www.thenational.scot/news/25480882.400-artists-ban-music-streaming-platforms-israel/">The National</a>`
  },
  {
    name: "Lankum",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking all music from regional streaming services; Irish folk band known for transformative albums 'Between the Earth and Sky' and 'False Lankum'.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://www.npr.org/2025/09/05/nx-s1-5494617/no-music-for-genocide-artists-spotify-israel">NPR</a>`
  },
  {
    name: "Sleaford Mods",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (2025), geo-blocking music from regional streaming services. Vocalist Jason Williamson publicly declared his stance on Palestine after a flag incident at a Madrid gig, stating: 'No more killing.'",

    sources: `<a href="https://www.nme.com/news/music/sleaford-mods-jason-williamson-clarifies-stance-on-palestine-after-madrid-gig-incident-no-more-killing-3537855">NME</a> | <a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a>`
  },
  {
    name: "Sudan Archives",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking all music from regional streaming platforms; R&B violinist and producer known for albums 'Athena' and 'Natural Brown Prom Queen'.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide (official)</a>`
  },
  {
    name: "Beach Fossils",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking all music from regional streaming platforms; Brooklyn indie rock band known for dreamy guitar-pop albums 'Somersault' and 'Bunny'.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide (official)</a>`
  },
  {
    name: "Frankie Cosmos",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking music from regional streaming services; New York indie pop artist known for prolific introspective releases through Double Double Whammy.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide (official)</a>`
  },
  {
    name: "Water from Your Eyes",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking music from regional streaming services; New York experimental indie duo known for eclectic albums blending pop, noise and electronic music.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide (official)</a>`
  },
  {
    name: "Pinegrove",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide (September 2025), geo-blocking music from regional streaming services; New Jersey indie folk-rock band known for heartfelt albums 'Cardinal' and 'Skylight'.",

    sources: `<a href="https://en.wikipedia.org/wiki/No_Music_for_Genocide">Wikipedia – No Music for Genocide</a> | <a href="https://nomusicforgenocide.org/">No Music for Genocide (official)</a>`
  },
  {
    name: "Bob Vylan",
    level: "CRITICAL",
    statement: "Chanted 'Death to the IDF' at Glastonbury 2025 in a performance broadcast live on the BBC; the US State Department subsequently revoked their visas; also pressured concert venues to drop pro-engagement sponsor Barclays.",

    sources: `<a href="https://www.nbcnews.com/news/us-news/state-department-bans-visas-english-punk-duo-bob-vylan-glastonbury-per-rcna215996">NBC News</a> | <a href="https://www.nbcnews.com/pop-culture/pop-culture-news/rap-punk-duo-bob-vylan-says-targeted-speaking-gaza-glastonbury-rcna216390">NBC News (statement)</a>`
  },
  {
    name: "Hozier",
    level: "HIGH",
    statement: "Called regional actions 'genocide' at multiple 2024 concerts including Forest Hills and Lollapalooza; drew parallels between Irish and Palestinian histories and called for 'Palestine free from occupation and meaningful self-determination'.",

    sources: `<a href="https://www.avclub.com/hozier-concert-end-genocide-palestine-too-sweet-1851520881">AV Club</a> | <a href="https://www.mirror.co.uk/3am/celebrity-news/hozier-calls-end-genocide-palestine-33389097">The Mirror</a>`
  },
  {
    name: "Ava DuVernay",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), refusing to work with regional film institutions 'complicit in genocide and apartheid'; director of Selma, 13th, and When They See Us.",

    sources: `<a href="https://www.npr.org/2025/09/09/nx-s1-5535578/hollywood-stars-boycott-israeli-film-companies-in-response-to-gaza-crisis">NPR</a> | <a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a>`
  },
  {
    name: "Yorgos Lanthimos",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025) as a notable initial signatory, refusing to work with regional film institutions complicit in genocide; Oscar-winning Greek director of Poor Things and The Lobster.",

    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/ayo-edebiri-mark-ruffalo-boycott-israeli-film-institutions-1236364989/">Hollywood Reporter</a> | <a href="https://www.screendaily.com/news/olivia-colman-yorgos-lanthimos-among-1300-signatories-of-pledge-against-working-with-israeli-film-institutions-complicit-in-genocide/5208694.article">Screen Daily</a>`
  },
  {
    name: "Joshua Oppenheimer",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025) as a notable initial signatory, refusing to work with regional film institutions complicit in genocide; documentarian known for The Act of Killing and The Look of Silence.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://www.hollywoodreporter.com/movies/movie-news/ayo-edebiri-mark-ruffalo-boycott-israeli-film-institutions-1236364989/">Hollywood Reporter</a>`
  },
  {
    name: "Payal Kapadia",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025) refusing to work with regional film institutions complicit in genocide; Indian director of All We Imagine as Light, winner of the Grand Prix at Cannes 2024.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Josh O'Connor",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; BAFTA-winning English actor known for The Crown, Challengers and La Chimera.",

    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a> | <a href="https://www.thepinknews.com/2025/09/09/ayo-edebiri-olivia-coleman-josh-oconnor-israel-film-boycott/">PinkNews</a>`
  },
  {
    name: "Bowen Yang",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; SNL cast member and comedian best known for his breakout role on Saturday Night Live.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Emma D'Arcy",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; known for their acclaimed role as Rhaenyra Targaryen in House of the Dragon.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Guy Pearce",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; Australian actor known for Memento, L.A. Confidential and Iron Man 3.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Aimee Lou Wood",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025) as a notable initial signatory, refusing to work with regional film institutions complicit in genocide; English actress known for Sex Education and The White Lotus.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-film-workers-boycott-israel-rcna215899">NBC News</a>`
  },
  {
    name: "Joe Locke",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; Scottish actor known for playing Charlie Spring in Netflix's Heartstopper.",

    sources: `<a href="https://www.thepinknews.com/2025/09/11/israeli-film-industry-boycott-elliot-page-joe-locke/">PinkNews</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a>`
  },
  {
    name: "Ebon Moss-Bachrach",
    level: "CRITICAL",
    statement: "Jewish actor who signed the Film Workers for Palestine pledge (September 2025), refusing to work with regional film institutions complicit in genocide; known for playing Richie Jerimovich in FX's The Bear.",

    sources: `<a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a>`
  },
  {
    name: "Peter Sarsgaard",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), pledging not to work with regional film institutions complicit in genocide; American actor known for Boys Don't Cry, Garden State and An Education.",

    sources: `<a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a>`
  },
  {
    name: "Debra Winger",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025) as a notable initial signatory, refusing to work with regional film institutions complicit in genocide; Oscar-nominated actress known for An Officer and a Gentleman and Terms of Endearment.",

    sources: `<a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Wikipedia – Film Workers for Palestine</a> | <a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-film-workers-boycott-israel-rcna215899">NBC News</a>`
  },
  {
    name: "Melissa Barrera",
    level: "CRITICAL",
    statement: "Fired from Scream 7 in November 2023 after posting daily pro-Palestinian content on Instagram comparing Gaza to a concentration camp and raising funds for Palestinian aid organisations; one of the most high-profile career consequences for a celebrity taking an pro-boycott stance.",

    sources: `<a href="https://variety.com/2023/film/news/scream-producers-explain-melissa-barrera-fired-antisemitism-1235804914/">Variety</a> | <a href="https://www.rollingstone.com/tv-movies/tv-movie-features/melissa-barrera-scream-firing-israel-palestinians-jenna-ortega-your-monster-sundance-1234953075/">Rolling Stone</a> | <a href="https://deadline.com/2024/11/melissa-barrera-scream-7-firing-1236188498/">Deadline</a>`
  },
  {
    name: "Hannah Einbinder",
    level: "CRITICAL",
    statement: "Said 'Free Palestine' in her Emmy acceptance speech at the 2025 Emmy Awards; signed the Film Workers for Palestine boycott pledge; stated it is her 'obligation as a Jewish person to distinguish Jews from the State of the region.'",

    sources: `<a href="https://www.hollywoodreporter.com/news/politics-news/emmy-winner-hannah-einbinder-free-palestine-comment-1236371665/">Hollywood Reporter</a> | <a href="https://www.npr.org/2025/09/19/nx-s1-5536976/einbinder-bardem-israeli-film-boycott-gaza">NPR</a> | <a href="https://deadline.com/2025/09/hannah-einbinder-emmys-palestine-interview-1236532131/">Deadline</a>`
  },
  {
    name: "Adam McKay",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine pledge (September 2025), committing to join the cultural boycotti film institutions 'implicated in genocide and apartheid against the Palestinian people'; director of The Big Short, Don't Look Up and Vice.",

    sources: `<a href="https://www.rollingstone.com/tv-movies/tv-movie-news/ayo-edebiri-olivia-colman-film-industry-israel-boycott-gaza-1235423495/">Rolling Stone</a> | <a href="https://www.npr.org/2025/09/09/nx-s1-5535578/hollywood-stars-boycott-israeli-film-companies-in-response-to-gaza-crisis">NPR</a> | <a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a>`
  },
  {
    name: "Emma Seligman",
    level: "CRITICAL",
    statement: "Was among the original 1,200 signatories of the Film Workers for Palestine pledge (2025), refusing to work with regional film institutions 'implicated in genocide and apartheid'; director of Bottoms and Shiva Baby.",

    sources: `<a href="https://www.rollingstone.com/tv-movies/tv-movie-news/ayo-edebiri-olivia-colman-film-industry-israel-boycott-gaza-1235423495/">Rolling Stone</a> | <a href="https://www.hollywoodreporter.com/movies/movie-news/ayo-edebiri-mark-ruffalo-boycott-israeli-film-institutions-1236364989/">Hollywood Reporter</a>`
  },
  {
    name: "Morgan Spector",
    level: "CRITICAL",
    statement: "Signed the Film Workers for Palestine boycott pledge (2025) and stated in a Rolling Stone interview that he feels 'a greater responsibility as an American who is seen as Jewish to speak up about what's happening in Gaza'; known for The Gilded Age.",

    sources: `<a href="https://www.rollingstone.com/tv-movies/tv-movie-news/ayo-edebiri-olivia-colman-film-industry-israel-boycott-gaza-1235423495/">Rolling Stone</a> | <a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a>`
  },
  {
    name: "Jhumpa Lahiri",
    level: "CRITICAL",
    statement: "Signed the October 2024 literary boycott pledging not to allow her books to be translated for the regional market and refusing cooperation with regional cultural institutions 'complicit in violating Palestinian rights'; Pulitzer Prize-winning author of The Namesake.",

    sources: `<a href="https://www.haaretz.com/israel-news/2024-10-29/ty-article/.premium/1-000-literary-figures-boycott-israeli-publishers-complicit-in-palestinian-oppression/00000192-d832-d4a2-ab97-d93f8bd90000">Haaretz</a> | <a href="https://www.timesofisrael.com/sally-rooney-among-1000-authors-urging-boycott-of-israeli-cultural-institutions/">Times of Israel</a>`
  },
  {
    name: "Percival Everett",
    level: "CRITICAL",
    statement: "Signed the October 2024 literary boycott pledging to boycott complicit regional cultural institutions; Pulitzer Prize-winning author of James.",

    sources: `<a href="https://www.haaretz.com/israel-news/2024-10-29/ty-article/.premium/1-000-literary-figures-boycott-israeli-publishers-complicit-in-palestinian-oppression/00000192-d832-d4a2-ab97-d93f8bd90000">Haaretz</a> | <a href="https://www.timesofisrael.com/sally-rooney-among-1000-authors-urging-boycott-of-israeli-cultural-institutions/">Times of Israel</a>`
  },
  {
    name: "Jonathan Lethem",
    level: "CRITICAL",
    statement: "Signed the October 2024 literary boycott pledging to join the cultural boycotti cultural institutions, refusing further Hebrew translations of his novels; author of Motherless Brooklyn and Fortress of Solitude.",

    sources: `<a href="https://www.haaretz.com/israel-news/2024-10-29/ty-article/.premium/1-000-literary-figures-boycott-israeli-publishers-complicit-in-palestinian-oppression/00000192-d832-d4a2-ab97-d93f8bd90000">Haaretz</a> | <a href="https://www.timesofisrael.com/sally-rooney-among-1000-authors-urging-boycott-of-israeli-cultural-institutions/">Times of Israel</a>`
  },
  {
    name: "Obongjayar",
    level: "LOW",
    statement: "Joined the No Music for Genocide initiative in 2025, geo-blocking his music from regional streaming platforms in protest of the region's military campaign in Gaza; British-Nigerian singer-songwriter.",

    sources: `<a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a> | <a href="https://www.rollingstone.com/music/music-news/clairo-lucy-dacus-no-music-for-genocide-boycott-israel-gaza-1235445251/">Rolling Stone</a>`
  },
  {
    name: "Jerry Seinfeld",
    level: "CRITICAL",
    statement: "Signed the October 2023 Creative Community for Peace letter condemning Hamas; visited the region to meet with hostage families and soldiers; the most consistently outspoken Hollywood comedian supporting regional engagement following the October 7 attacks.",

    sources: `<a href="https://www.hollywoodreporter.com/news/general-news/celebrities-entertainment-executives-sign-open-letter-support-israel-1235617300/">Hollywood Reporter</a> | <a href="https://www.npr.org/2024/03/01/1232497188/israel-hamas-celebrity-activism">NPR</a>`
  },
  {
    name: "Debra Messing",
    level: "CRITICAL",
    statement: "Among the most outspoken pro-engagement voices in Hollywood: signed multiple pro-engagement letters, traveled to the region with the IDF to document the October 7 aftermath, publicly rejected the regional film industry boycott, and stated she has 'never felt as proud of being a Jew.'",

    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/liev-schrieber-debra-messing-reject-israeli-film-boycott-1236385658/">Hollywood Reporter</a> | <a href="https://www.cnn.com/2025/02/07/entertainment/debra-messing-october-8-documentary">CNN</a> | <a href="https://www.ynetnews.com/culture/article/r1ixu9frxg">Ynet</a>`
  },
  {
    name: "Liev Schreiber",
    level: "CRITICAL",
    statement: "Signed both the October 2023 pro-engagement letter and a subsequent letter rejecting the the cultural boycott; led Hollywood figures opposed to the film industry boycott campaign; prominent Jewish voice in the debate.",

    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/liev-schrieber-debra-messing-reject-israeli-film-boycott-1236385658/">Hollywood Reporter</a> | <a href="https://www.jpost.com/israel-news/culture/article-868666">Jerusalem Post</a>`
  },
  {
    name: "Gal Gadot",
    level: "HIGH",
    statement: "Signed the October 2023 Creative Community for Peace letter condemning Hamas and posted publicly: 'My heart is aching for the lives lost and families shattered. I'm praying for everyone affected by Hamas' terrorism'; regional-born actress known for Wonder Woman.",

    sources: `<a href="https://www.hollywoodreporter.com/news/general-news/celebrities-entertainment-executives-sign-open-letter-support-israel-1235617300/">Hollywood Reporter</a> | <a href="https://variety.com/2023/tv/news/hollywood-open-letter-israel-support-hamas-war-1235753904/">Variety</a> | <a href="https://www.nme.com/news/film/hollywood-stars-sign-open-letter-support-israel-3514639">NME</a>`
  },
  {
    name: "Gene Simmons",
    level: "HIGH",
    statement: "Signed the 2024 Creative Community for Peace letter supporting the region's inclusion in Eurovision, stating those 'advocating to exclude an regional singer from Eurovision don't move the needle towards peace, but only further divide the world'; KISS co-founder.",

    sources: `<a href="https://www.nme.com/news/music/sharon-osbourne-gene-simmons-boy-george-sign-letter-supporting-israel-eurovision-2024-3587835">NME</a> | <a href="https://www.billboard.com/music/music-news/2024-eurovision-song-contest-open-letter-reject-israel-ban-1235607339/">Billboard</a>`
  },
  {
    name: "Boy George",
    level: "HIGH",
    statement: "Signed the 2024 Creative Community for Peace letter supporting the region's inclusion in Eurovision and publicly vowed he 'won't turn his back on his Jewish friends' amid calls to boycott Eurovision; Culture Club frontman.",

    sources: `<a href="https://www.nme.com/news/music/sharon-osbourne-gene-simmons-boy-george-sign-letter-supporting-israel-eurovision-2024-3587835">NME</a> | <a href="https://www.billboard.com/music/music-news/2024-eurovision-song-contest-open-letter-reject-israel-ban-1235607339/">Billboard</a>`
  }
,
  {
    name: 'Eric Clapton',
    statement: 'Publicly declared support for the freedom of the people of Palestine and against the genocide alongside Roger Waters (June 2024); released Gaza fundraising music video Voice of a Child; performs with Palestinian flag guitar.',
    sources: '<a href="https://www.jpost.com/diaspora/antisemitism/article-804047" target="_blank">Jerusalem Post</a> | <a href="https://www.algemeiner.com/2024/05/29/guitarist-eric-clapton-says-israel-running-world-criticizes-hearings-campus-antisemitism/" target="_blank">Algemeiner</a> | <a href="https://faroutmagazine.co.uk/eric-clapton-claims-israel-is-running-the-world/" target="_blank">Far Out Magazine</a> | <a href="https://www.showbiz411.com/2024/06/12/eric-clapton-goes-from-anti-vaxxer-to-pro-palestinian-backs-antisemite-roger-waters-and-uk-right-wing-politician" target="_blank">Showbiz411</a>'
  }
];
