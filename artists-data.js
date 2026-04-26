// ArtSiren Artist Database — Chrome Extension
// Total: 229 verified artists
// Last updated: 2026-04-25

const artistsData = [
  {
    name: "Roger Waters",
    level: "CRITICAL",
    statement: "Pink Floyd co-founder and longest-standing BDS advocate in rock music; has called on fellow musicians to boycott Israel since 2005; dropped by publisher BMG in 2024 over anti-Israel statements; performed concerts featuring imagery comparing Israeli actions to Nazi Germany",
    sources: `<a href="https://www.bdsmovement.net/news/roger-waters-and-bds">BDS Movement</a> | <a href="https://bdsmovement.net/news/facebook-live-conversation-roger-waters">PACBI</a> | <a href="https://www.guardian.co.uk/commentisfree/2011/mar/11/cultural-boycott-west-bank-wall">The Guardian</a>`
  },
  {
    name: "Dua Lipa",
    level: "HIGH",
    statement: "Called Israel's military campaign in Gaza 'a genocide'; shelved a music video deemed insensitive amid the conflict; shared the viral #AllEyesOnRafah image; signed an open letter to the UK Prime Minister calling for an end to UK complicity in Israeli actions",
    sources: `<a href="https://deadline.com/2023/12/dua-lipa-pulls-music-video-insensitive-israel-gaza-conflict-1235683400/">Deadline</a> | <a href="https://www.newsweek.com/dua-lipa-israel-palestinians-hamas-conflict-rolling-stone-interview-1861402">Newsweek</a> | <a href="https://www.euronews.com/culture/2024/05/29/dua-lipa-shares-support-for-alleyesonrafah-what-does-it-mean">Euronews</a> | <a href="https://www.timesofisrael.com/singer-dua-lipa-slams-ugly-campaign-criticizing-her-for-pro-palestinian-stance/">Times of Israel</a>`
  },
  {
    name: "Patti Smith",
    level: "CRITICAL",
    statement: "Supports cultural boycott, declined to perform in Israel",
    sources: `<a href="https://www.nme.com/news/music/julian-casablancas-rage-against-the-machine-and-patti-smith-among-600-artists-calling-for-palestinian-rights-2950132">NME</a> | <a href="https://www.timesofisrael.com/patti-smith-julian-casablancas-among-600-musicians-to-urge-boycott-of-israel/">Times of Israel</a>`
  },
  {
    name: "Elvis Costello",
    level: "CRITICAL",
    statement: "Cancelled his June 2010 Tel Aviv and Caesarea concerts explicitly citing Israel's military actions against Palestinians; published a statement saying he could not 'in good conscience' appear in Israel, becoming one of the first major artists to cancel for political reasons",
    sources: `<a href="https://www.nme.com/news/music/elvis-costello-9-1297950">NME</a> | <a href="https://forward.com/fast-forward/128074/elvis-costello-cancels-israel-concerts-after-prote/">The Forward</a>`
  },
  {
    name: "Tom Morello",
    level: "CRITICAL",
    statement: "Rage Against the Machine guitarist who signed the 2021 open letter with 600+ musicians explicitly calling on artists to boycott Israel; stated there is 'no room for Anti-Semitism' while condemning 'horrific war crimes in Gaza'",
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
    statement: "Cancelled her May 2015 Tel Aviv concert, stating she could not perform only in Israel without also playing Ramallah; appeared in the 'When I See Them I See Us' BDS solidarity video alongside BDS co-founder Omar Barghouti holding a 'Free Political Prisoners' sign",
    sources: `<a href="https://www.timesofisrael.com/lauryn-hill-cancels-israel-show/">Times of Israel</a> | <a href="https://www.haaretz.com/2015-05-05/ty-article/lauryn-hill-cancels-israel-concert-citing-inablity-to-perform-in-ramallah-as-well/0000017f-db88-d856-a37f-ffc8a9cb0000">Haaretz</a> | <a href="https://www.rollingstone.com/music/music-news/lauryn-hill-cancels-israel-show-amid-controversy-240622/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lauryn-hill-5-1207215">NME</a>`
  },
  {
    name: "Peter Gabriel",
    level: "CRITICAL",
    statement: "Supports cultural boycott of Israel",
    sources: `<a href="https://www.timesofisrael.com/peter-gabriel-pro-gaza-not-anti-israel/">Times of Israel</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Charlotte Church",
    level: "HIGH",
    statement: "Repeatedly used the chant 'From the River to the Sea, Palestine will be free' at her shows and publicly defended doing so; stated her family received threats over her support for Gaza; among the most outspoken British artists condemning Israeli actions",
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
    statement: "Signed No Music for Genocide pledge in 2025 and geo-blocked her entire catalogue from Israeli streaming services; one of the most high-profile artists to join the streaming boycott",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/singer-bjork-appears-to-yank-her-streaming-songs-from-israel/">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-21/ty-article/.premium/bjork-pulls-her-music-from-israeli-streaming-services-amid-gaza-war-boycott-campaign/00000199-6d25-daea-adff-7fe7e9110000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Lorde",
    level: "CRITICAL",
    statement: "Cancelled her 2018 Tel Aviv concert after receiving an open letter from New Zealand activists; signed No Music for Genocide pledge in 2025 and geo-blocked her music from Israeli streaming platforms; shouted 'Free Palestine' on stage at Madison Square Garden",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Massive Attack",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge and geo-blocked music from Israeli streaming; among the first wave of artists to join the campaign in September 2025; co-founders Robert Del Naja and Grant Marshall have been vocal about Palestinian rights",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Brian Eno",
    level: "CRITICAL",
    statement: "Organised the 'Together for Palestine' benefit concert at Wembley Arena; co-authored an open letter calling Israel's military campaign 'a well-planned genocide'; signed No Music for Genocide pledge; has written extensively calling for sanctions against Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Fontaines D.C.",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Japanese Breakfast",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Paramore",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Hayley Williams",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Rina Sawayama",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "AURORA",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "King Krule",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "IDLES",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Hot Chip",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Kneecap",
    level: "CRITICAL",
    statement: "Irish-language rap trio who have been among the most vocal artists condemning Israel; performed wearing Palestinian keffiyehs; made statements calling Israeli actions genocide; faced pressure from British government over their pro-Palestinian stance",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Wednesday",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Mannequin Pussy",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "BADBADNOTGOOD",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Young Fathers",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Amyl and the Sniffers",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Soccer Mommy",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Kelela",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Caribou",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Primal Scream",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Faye Webster",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Arca",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "MIKE",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Erika de Casier",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "MJ Lenderman",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Julia Jacklin",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Lucy Dacus",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Enter Shikari",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Fever Ray",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "The Knife",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Blood Orange",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Blonde Redhead",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Clairo",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Denzel Curry",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Destroy Boys",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Eartheater",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Jane Remover",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "The Blessed Madonna",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Hania Rani",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Kelsey Lu",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "L'Rain",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Lambrini Girls",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Liv.e",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "MARINA",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Maryam Saleh",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Maurice Louca",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Mogwai",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "MØ",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Nicolás Jaar",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Nourished by Time",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Oklou",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Smerz",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Yaeji",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Yeule",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Ana Tijoux",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Julia Holter",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Loraine James",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Model/Actriz",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Saul Williams",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
    sources: `<a href="https://nomusicforgenocide.org/">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163">NME</a>`
  },
  {
    name: "Four Tet",
    level: "CRITICAL",
    statement: "Joined #DJsForPalestine cultural boycott of Israel in 2018; supports Palestinian rights",
    sources: `<a href="https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356">NME</a> | <a href="https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507">Haaretz</a> | <a href="https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news">Mixmag</a>`
  },
  {
    name: "Olivia Colman",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Javier Bardem",
    level: "HIGH",
    statement: "Co-signed a 2014 open letter with Penélope Cruz calling Israel's military offensive in Gaza 'genocide'; explicitly criticized Israeli 'state terrorism'; faced backlash from the Academy but stood by the statement",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Mark Ruffalo",
    level: "HIGH",
    statement: "Has explicitly called Israel an apartheid state; signed open letters; used his significant social media platform to call for accountability for Israeli military actions in Gaza; faced industry backlash for his statements",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Steve Coogan",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Riz Ahmed",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Miriam Margolyes",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Tilda Swinton",
    level: "HIGH",
    statement: "Has signed multiple Artists for Palestine UK letters explicitly calling out Israeli policies; among the most senior British actors to publicly condemn Israeli military actions",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Khalid Abdalla",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Maxine Peake",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Susan Sarandon",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Danny Glover",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Penélope Cruz",
    level: "HIGH",
    statement: "Co-signed a 2014 open letter with Javier Bardem calling Israel's military offensive in Gaza 'genocide' and a 'war of occupation and siege'; faced industry backlash but did not retract the letter",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "John Cusack",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Cynthia Nixon",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Viggo Mortensen",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Mia Farrow",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Peter Capaldi",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Julie Christie",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Juliet Stevenson",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Paapa Essiedu",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Dame Harriet Walter",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Joe Alwyn",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Lena Headey",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Kingsley Ben-Adir",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Carla Henry",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Pooja Ghai",
    level: "LOW",
    statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Ken Loach",
    level: "CRITICAL",
    statement: "British director and lifelong BDS advocate; has organised multiple boycott campaigns against Israeli cultural institutions; signed countless open letters; co-founded organisations supporting cultural boycott of Israel; among the most publicly committed cultural figures in the BDS movement",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Mike Leigh",
    level: "HIGH",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Ava DuVernay",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Yorgos Lanthimos",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Adam McKay",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Asif Kapadia",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "James Schamus",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Julia Loktev",
    level: "CRITICAL",
    statement: "Vocal supporter of cultural boycott of Israel",
    sources: `<a href="https://bdsmovement.net/">PACBI</a> | <a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Thurston Moore",
    level: "CRITICAL",
    statement: "Sonic Youth founder, signed multiple BDS petitions",
    sources: `<a href="https://artistsforpalestine.org.uk/">Artists for Palestine UK</a>`
  },
  {
    name: "Serj Tankian",
    level: "CRITICAL",
    statement: "System of a Down vocalist who has explicitly called Israeli military actions against Palestinians war crimes; signed open letters; called for international sanctions against Israel; one of the most vocal rock musicians on the issue",
    sources: `<a href="https://www.nme.com/news/music/system-of-a-downs-serj-tankian-shares-thoughts-on-boycotts-and-the-israel-and-palestine-war-3764694">NME</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Portishead",
    level: "CRITICAL",
    statement: "Joined the cultural boycott of Israel and signed Artists for Palestine UK letters explicitly condemning Israeli military actions; among notable British electronic acts to take a public stance",
    sources: `<a href="https://consequence.net/2018/05/portishead-join-cultural-boycott-of-israel/">Consequence</a> | <a href="https://www.nme.com/news/music/wolf-alice-shame-portishead-lend-support-artistsforpalestine-2322658">NME</a>`
  },
  {
    name: "PJ Harvey",
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
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Gil Scott-Heron",
    level: "CRITICAL",
    statement: "Late poet and musician, supported BDS",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
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
    statement: "El-P and Killer Mike have made explicit statements about Israeli apartheid and Palestinian rights; signed letters calling for ceasefire and accountability for Israeli actions",
    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.complex.com/music/a/backwoodsaltar/musicians-for-israel-boycott-in-support-of-palestine">Complex</a>`
  },
  {
    name: "Noname",
    level: "CRITICAL",
    statement: "Chicago rapper who has been one of music's most outspoken BDS advocates; explicitly called on fans and fellow artists to boycott Israel; donated proceeds from music to Palestinian causes; signed No Music for Genocide pledge",
    sources: `<a href="https://www.hotnewhiphop.com/368531-run-the-jewels-and-noname-among-600-musicians-calling-for-israel-boycott-news">HotNewHipHop</a> | <a href="https://www.complex.com/music/a/backwoodsaltar/musicians-for-israel-boycott-in-support-of-palestine">Complex</a>`
  },
  {
    name: "Alice Walker",
    level: "CRITICAL",
    statement: "Author of 'The Color Purple' who refused to allow an Israeli publisher to publish her book; explicitly supports BDS; has written about and spoken at pro-Palestinian events calling for boycott of Israel",
    sources: `<a href="https://www.nbcnews.com/news/nbcblk/alice-walker-color-purple-revival-palestine-parental-peace-n461426">NBC News</a> | <a href="https://www.palestineinamerica.com/blog/2015/12/alice-walker-bds-the-color-purple">Palestine in America</a>`
  },
  {
    name: "Naomi Klein",
    level: "CRITICAL",
    statement: "Author and activist who has written extensively calling for BDS; explicitly called Israeli actions in Gaza genocide; organised and signed open letters calling for international boycott of Israel",
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
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Sally Rooney",
    level: "CRITICAL",
    statement: "Irish novelist who refused to allow Israeli publisher Modan to translate her novel 'Beautiful World, Where Are You' into Hebrew, citing BDS principles; stated she 'would not feel comfortable' with the book being published by an Israeli company",
    sources: `<a href="https://time.com/6105990/sally-rooney-israeli-translation/">TIME</a> | <a href="https://www.jta.org/2024/10/30/culture/sally-rooney-percival-everett-among-thousands-of-authors-pledging-to-boycott-all-israeli-literary-institutions">JTA</a>`
  },
  {
    name: "Khaled Hosseini",
    level: "CRITICAL",
    statement: "Author of The Kite Runner; signed the October 2024 'Refusing Complicity' letter — the largest literary boycott of Israeli cultural institutions in history, with 7,000+ authors and book workers pledging to boycott Israeli publishers complicit in genocide and apartheid",
    sources: `<a href="https://www.palfest.org/press-release-refusing-complicity-2">Palestine Festival of Literature</a> | <a href="https://publishersforpalestine.org/2024/12/12/7000-authors-and-book-workers-join-historic-boycott-against-complicit-israeli-publishers/">Publishers for Palestine</a>`
  },
  {
    name: "Annie Ernaux",
    level: "HIGH",
    statement: "2022 Nobel Prize in Literature laureate who publicly signed BDS-aligned letters after receiving her Nobel Prize; made explicit statements calling Israeli actions a form of apartheid and genocide",
    sources: `<a href="https://www.newarab.com/news/nobel-prize-winner-annie-ernaux-has-backed-israel-boycotts">New Arab</a> | <a href="https://www.aljazeera.com/news/2024/1/11/artists-urged-to-reject-german-institutions-over-berlins-stance-on-gaza">Al Jazeera</a>`
  },
  {
    name: "Angela Davis",
    level: "CRITICAL",
    statement: "American scholar and lifelong Palestinian rights activist; one of the founding intellectual figures of BDS in the United States; has spoken at countless pro-BDS events; compared Israeli treatment of Palestinians to apartheid South Africa",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Judith Butler",
    level: "CRITICAL",
    statement: "Philosopher at UC Berkeley who has explicitly endorsed BDS; written extensively on the legitimacy of cultural boycott of Israel; signed open letters; argued that BDS is a legitimate form of political protest against Israeli policies",
    sources: `<a href="https://www.middleeasteye.net/news/sally-rooney-rupi-kaur-and-judith-butler-join-boycott-silent-israeli-cultural-institutions">Middle East Eye</a>`
  },
  {
    name: "Desmond Tutu",
    level: "HIGH",
    statement: "Late Archbishop of South Africa who explicitly compared Israeli treatment of Palestinians to apartheid South Africa, calling it 'worse in some respects'; called for international sanctions and boycott of Israel",
    sources: `<a href="https://www.aljazeera.com/news/2014/8/14/desmond-tutu-calls-for-end-to-attacks-on-gaza">Al Jazeera</a>`
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
    statement: "The Strokes frontman; signed the 2021 Musicians for Palestine open letter (600+ musicians) calling for a boycott of Israel; at Coachella 2026, closed the set with a video montage condemning US and Israeli bombings in Gaza, captioned 'Last university standing in Gaza'; on SubwayTakes (April 21, 2026) stated that American Zionists 'talk like Black people during slavery' while benefiting from white privilege",
    sources: `<a href="https://www.nme.com/news/music/the-strokes-julian-casablancas-calls-out-the-white-privilege-of-american-zionists-3941737">NME</a> | <a href="https://variety.com/2026/music/news/strokes-coachella-video-montage-bombings-iran-gaza-1236725454/">Variety</a> | <a href="https://stereogum.com/2496586/julian-casablancas-sounds-off-on-american-zionists-on-subwaytakes/news">Stereogum</a>`
  },
  {
    name: "Sinéad O'Connor",
    level: "CRITICAL",
    statement: "Late Irish singer; cancelled 2014 Israel concert after learning of BDS boycott call; said 'I will not play in Israel'",
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
    statement: "World-renowned violinist who interrupted a BBC Proms programme to make an unscripted statement about Israeli apartheid; has publicly referred to Israeli actions as apartheid; cancelled performances in Israel",
    sources: `<a href="https://www.huffingtonpost.co.uk/2013/08/16/palestinian-proms_n_3766594.html">HuffPost UK</a> | <a href="https://electronicintifada.net/blogs/ali-abunimah/video-nigel-kennedy-and-palestine-strings-play-vivaldi-2013-bbc-proms">Electronic Intifada</a>`
  },
  {
    name: "John Williams (guitarist)",
    level: "LOW",
    statement: "Classical guitarist, supports cultural boycott",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "DJ Spooky",
    level: "CRITICAL",
    statement: "Electronic musician, supports BDS",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Tinariwen",
    level: "CRITICAL",
    statement: "Tuareg band, supports BDS",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Asian Dub Foundation",
    level: "CRITICAL",
    statement: "British band who have been among the most consistently outspoken musical advocates for Palestinian rights; explicitly called for cultural boycott of Israel; performed at pro-Palestine events",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Manic Street Preachers",
    level: "CRITICAL",
    statement: "Welsh rock band who cancelled their planned Israel tour dates, explicitly citing the political situation; among the first major rock bands to cancel Israel shows in solidarity with Palestinians",
    sources: `<a href="https://www.loudersound.com/news/waters-slams-artists-for-stance-on-israel">Louder Sound</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Belle and Sebastian",
    level: "CRITICAL",
    statement: "Scottish indie band, declined Israel performance",
    sources: `<a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Jean-Luc Godard",
    level: "CRITICAL",
    statement: "Late film director, supported BDS",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia - BDS Supporters</a>`
  },
  {
    name: "Mira Nair",
    level: "CRITICAL",
    statement: "Director, supports BDS",
    sources: `<a href="https://www.aljazeera.com/news/2025/9/8/hundreds-of-artists-pledge-boycott-of-israeli-film-institutions-over-gaza">Al Jazeera</a>`
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
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Coldcut",
    level: "CRITICAL",
    statement: "Electronic duo, supports BDS",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "The Ex",
    level: "CRITICAL",
    statement: "Punk band, supports cultural boycott",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Dälek",
    level: "CRITICAL",
    statement: "Hip-hop group, supports BDS",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
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
    statement: "Montréal post-rock collective who declined the Polaris Music Prize in 2013, issuing a statement explicitly critical of Israeli military actions and calling for boycott; have been consistently anti-Zionist in their public statements",
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
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Broken Social Scene",
    level: "HIGH",
    statement: "Canadian indie collective who signed an open letter opposing the Toronto International Film Festival's 'Tel Aviv spotlight' in 2009, explicitly criticising Israeli government cultural policy",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://www.cbc.ca/music/spotify-geoblock-israel-caribou-amine-elisapie-badbadnotgood-1.7648148">CBC Music</a>`
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
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Metric",
    level: "CRITICAL",
    statement: "Rock band, supports BDS",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Wolf Parade",
    level: "CRITICAL",
    statement: "Indie rock band, supports cultural boycott",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Destroyer",
    level: "CRITICAL",
    statement: "Indie project, supports BDS",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
  },
  {
    name: "Owen Pallett",
    level: "CRITICAL",
    statement: "Composer, supports cultural boycott",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://exclaim.ca/music/article/rage_against_the_machine_godspeed_you_black_emperor_pink_floyds_roger_waters_sign_open_letter_urging_israel_boycott_in_support_of_palestine">Exclaim!</a>`
  },
  {
    name: "Peaches",
    level: "CRITICAL",
    statement: "Electronic musician, supports BDS",
    sources: `<a href="https://ca.billboard.com/music/music-news/musicians-for-palestine-montreal">Billboard Canada</a> | <a href="https://consequence.net/2021/05/musicians-for-palestine-israel-boycott/">Consequence</a>`
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
    statement: "Withdrew from Israel's Meteor Festival in 2018 following BDS boycott calls; stated 'I will not be appearing at Meteor Festival'",
    sources: `<a href="https://www.juancole.com/2018/09/apartheid-palestinians-musicians.html">Juan Cole</a> | <a href="https://bdsmovement.net/meteor">BDS Movement</a>`
  },
  {
    name: "Macklemore",
    level: "CRITICAL",
    statement: "Participated in the No Music for Genocide campaign (2024–25), geo-blocking his music from Israeli streaming platforms; performed at pro-Palestinian rallies and publicly called for an end to US military aid to Israel",
    sources: `<a href="https://www.nomusicforgenocide.com/">No Music for Genocide</a> | <a href="https://www.rollingstone.com/">Rolling Stone</a>`
  },
  {
    name: "Kehlani",
    level: "CRITICAL",
    statement: "R&B artist who participated in the No Music for Genocide campaign (2024–25), geo-blocking her music from Israeli streaming; has been a vocal advocate for Palestinian rights across social media and in interviews",
    sources: `<a href="https://www.nomusicforgenocide.com/">No Music for Genocide</a> | <a href="https://www.billboard.com/">Billboard</a>`
  },
  {
    name: "Manu Chao",
    level: "CRITICAL",
    statement: "French-Spanish musician who has refused to perform in Israel in solidarity with Palestinians; signed the BDS cultural boycott pledge and is a long-standing campaigner for Palestinian rights",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Rage Against the Machine",
    level: "CRITICAL",
    statement: "Iconic rock band whose members have collectively endorsed BDS; signed the cultural boycott pledge and consistently voiced support for Palestinian liberation through statements, concerts and social media",
    sources: `<a href="https://www.rollingstone.com/">Rolling Stone</a>`
  },
  {
    name: "Lupe Fiasco",
    level: "CRITICAL",
    statement: "Chicago rapper who has been an outspoken BDS endorser; made multiple public statements calling Israel an apartheid state and has used his platform to campaign for Palestinian cultural rights",
    sources: `<a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Billy Bragg",
    level: "CRITICAL",
    statement: "British folk-punk musician who publicly supports BDS, has declined Israeli performance invitations, and regularly speaks at pro-Palestinian events; wrote extensively on the need for cultural boycott in The Guardian",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Santana",
    level: "CRITICAL",
    statement: "Cancelled scheduled Israel performances in 2010 following calls from Palestinian civil society groups; the cancellation was confirmed as an act of solidarity with Palestinians",
    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/rage-against-the-machine-serj-tankian-roger-waters-sign-open-letter-artists-boycott-israel-1175281/">Rolling Stone</a>`
  },
  {
    name: "Yo La Tengo",
    level: "CRITICAL",
    statement: "New Jersey indie rock band who cancelled a planned Israel tour in solidarity with Palestinians; issued a public statement explaining their decision to honour the cultural boycott",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Klaxons",
    level: "CRITICAL",
    statement: "British band who refused to perform at Israel's 60th-anniversary cultural celebrations in 2008; publicly cited the occupation as their reason for declining",
    sources: `<a href="https://www.nme.com/">NME</a>`
  },
  {
    name: "Anti-Flag",
    level: "CRITICAL",
    statement: "American punk band and long-standing BDS supporters who have publicly called for a cultural boycott of Israel and refused to perform there; have used their platform to advocate for Palestinian rights for over two decades",
    sources: `<a href="https://electronicintifada.net/content/never-mind-johnny-rotten-real-punks-boycott-israel/10938">Electronic Intifada</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Jackson Browne",
    level: "CRITICAL",
    statement: "Legendary singer-songwriter who signed an open letter calling for cultural boycott of Israel and has spoken at pro-Palestinian events; publicly criticised US military aid and has called for Palestinian statehood",
    sources: `<a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a> | <a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a>`
  },
  {
    name: "Vic Mensa",
    level: "CRITICAL",
    statement: "Chicago rapper who has been a vocal advocate for Palestinian rights and BDS; has spoken at rallies, released pro-Palestine material, and made multiple public statements calling for an end to Israeli military operations",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Yasiin Bey",
    level: "CRITICAL",
    statement: "Rapper formerly known as Mos Def who has been a vocal advocate for Palestinian rights; has made public statements in support of BDS and participated in pro-Palestinian events and cultural campaigns",
    sources: `<a href="https://www.middleeasteye.net/news/israel-boycott-musicians-pledge-stand-solidarity-palestine">Middle East Eye</a> | <a href="https://www.billboard.com/music/music-news/israel-boycott-artists-open-letter-palestine-9579426/">Billboard</a>`
  },
  {
    name: "Moor Mother",
    level: "CRITICAL",
    statement: "Philadelphia avant-garde musician and poet who publicly supports Palestinian liberation and BDS; incorporates themes of resistance and solidarity into her work and has made public statements calling for cultural boycott",
    sources: `<a href="https://www.thewire.co.uk/">The Wire</a>`
  },
  {
    name: "Ani DiFranco",
    level: "LOW",
    statement: "Indie singer-songwriter and activist who has publicly supported Palestinian rights and signed letters calling for cultural engagement with the boycott; long-standing advocate for human rights causes",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Steve Earle",
    level: "LOW",
    statement: "Country-folk musician who has publicly spoken in support of Palestinian rights and cultural boycott; signed letters and made statements calling for an end to Israeli occupation",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Jello Biafra",
    level: "CRITICAL",
    statement: "Dead Kennedys frontman and Alternative Tentacles founder who has been a vocal critic of Israeli military policy and supporter of Palestinian rights; endorsed BDS in multiple interviews and public statements",
    sources: `<a href="https://electronicintifada.net/blogs/nora-barrows-friedman/jello-biafra-cancels-his-tel-aviv-gig">Electronic Intifada</a> | <a href="https://www.punknews.org/article/45103/jello-biafra-on-his-trip-to-israel-and-the-israel-boycott">Punknews</a>`
  },
  {
    name: "Thievery Corporation",
    level: "LOW",
    statement: "Washington D.C. electronic duo who have publicly supported Palestinian rights and signed letters calling for cultural engagement with the boycott movement",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Mick Jones",
    level: "LOW",
    statement: "The Clash guitarist who has signed letters in support of Palestinian rights and cultural boycott; long associated with progressive human rights causes",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Vanessa Redgrave",
    level: "CRITICAL",
    statement: "Legendary actress who has campaigned for Palestinian rights for decades; used her 1978 Academy Awards speech to call for Palestinian self-determination, has consistently supported cultural boycott, and signed BDS declarations",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a> | <a href="https://en.wikipedia.org/wiki/Vanessa_Redgrave">Wikipedia</a>`
  },
  {
    name: "Emma Thompson",
    level: "CRITICAL",
    statement: "Vocal supporter of Palestinian rights who has signed open letters calling for a cultural boycott of Israel; has written publicly about her views and participated in high-profile advocacy campaigns",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Tim Roth",
    level: "CRITICAL",
    statement: "British actor who has made public statements in support of Palestinian rights and endorsed the cultural boycott of Israel; signed open letters and spoken at pro-Palestinian events",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
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
    statement: "British comedian and actor who has been a vocal public supporter of Palestinian rights and BDS; made numerous statements calling for cultural boycott of Israel and written about it in the press",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Elia Suleiman",
    level: "CRITICAL",
    statement: "Palestinian filmmaker whose work directly addresses dispossession and occupation; has publicly supported BDS and refused engagements that would normalise Israeli cultural diplomacy",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Harold Pinter",
    level: "CRITICAL",
    statement: "Nobel Prize-winning playwright who used his 2005 Nobel acceptance speech to condemn Israeli actions in occupied territories; signed BDS letters and wrote poems in support of Palestinian liberation; one of the most prominent literary voices for the cultural boycott",
    sources: `<a href="https://en.wikipedia.org/wiki/Harold_Pinter">Wikipedia</a> | <a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Kamila Shamsie",
    level: "CRITICAL",
    statement: "Pakistan-born British novelist who had the Göttingen International Prize for Literature rescinded in 2019 after the prize committee cited her public support for BDS; the widely-reported case brought global attention to artistic boycott",
    sources: `<a href="https://www.theguardian.com/books/2019/jun/21/kamila-shamsie-german-literary-award-rescinded-bds">The Guardian</a>`
  },
  {
    name: "Mohammed El-Kurd",
    level: "CRITICAL",
    statement: "Palestinian poet and journalist from Sheikh Jarrah whose family's forced displacement drew global attention; named one of Time's 100 Most Influential People (2021); leading voice for BDS and Palestinian cultural rights",
    sources: `<a href="https://time.com/collection/100-most-influential-people-2021/">Time Magazine</a> | <a href="https://www.theguardian.com/">The Guardian</a>`
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
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Michael Rosen",
    level: "CRITICAL",
    statement: "UK children's laureate and poet who has been a vocal supporter of Palestinian rights and cultural boycott; regularly speaks out about Israeli military actions and has signed letters in support of BDS",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Teju Cole",
    level: "LOW",
    statement: "Nigerian-American novelist and essayist who has written widely shared essays on Gaza and supported cultural boycott; authored influential pieces in The New Yorker calling for solidarity with Palestinians",
    sources: `<a href="https://www.theguardian.com/">The Guardian</a>`
  },
  {
    name: "Adrienne Rich",
    level: "LOW",
    statement: "Late American poet and feminist who was one of the first prominent US literary figures to sign statements in solidarity with Palestinian cultural rights; signed early BDS-aligned declarations",
    sources: `<a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement">Wikipedia</a>`
  },
  {
    name: "Paul Weller",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for Israel's expulsion from Eurovision, stating they reject Eurovision being used to whitewash and normalise Israel's genocide; appeared in Palestine Solidarity Campaign video explicitly saying It's a genocide",
    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a> | <a href="https://www.musicradar.com/artists/shows-festivals/we-reject-eurovision-being-used-to-whitewash-and-normalise-israels-genocide-siege-and-brutal-military-occupation-against-palestinians-brian-eno-paul-weller-massive-attack-and-others-call-for-israel-to-be-kicked-out-of-eurovision">MusicRadar</a>`
  },
  {
    name: "Sigur Ros",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide geo-blocking campaign (December 2025), removing music from Israeli streaming platforms; signed April 2026 open letter calling for Israel's ban from Eurovision, explicitly describing Israel's actions as genocide",
    sources: `<a href="https://grapevine.is/news/2025/12/08/bjork-pall-oskar-sigur-ros-voice-israel-boycott/">Iceland Grapevine</a> | <a href="https://www.euronews.com/culture/2026/04/21/eurovision-crisis-massive-attack-kneecap-and-sigur-ros-call-on-fans-to-boycott-over-israel">Euronews</a>`
  },
  {
    name: "Paloma Faith",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for Israel's ban from Eurovision; appeared in Palestine Solidarity Campaign video explicitly stating It's a genocide",
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
    statement: "Signed No Music for Genocide open letter (April 2026) calling for Israel's expulsion from Eurovision, citing genocide, siege and brutal military occupation against Palestinians",
    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a> | <a href="https://diymag.com/news/no-music-for-genocide-eurovision-boycott">DIY Magazine</a>`
  },
  {
    name: "My Bloody Valentine",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from Israeli streaming platforms; issued statement: They're not going to stop unless you make them",
    sources: `<a href="https://stereogum.com/2480902/my-bloody-valentine-join-israel-streaming-boycott-theyre-not-going-to-stop-unless-you-make-them/news">Stereogum</a> | <a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Shygirl",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from Israeli streaming platforms",
    sources: `<a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Paris Paloma",
    level: "CRITICAL",
    statement: "Joined No Music for Genocide (November 2025), geo-blocking music from Israeli streaming platforms",
    sources: `<a href="https://www.billboard.com/music/music-news/denzel-curry-mbv-join-no-music-for-genocide-israel-boycott-1236122537/">Billboard</a>`
  },
  {
    name: "Black Country New Road",
    level: "CRITICAL",
    statement: "Signed No Music for Genocide open letter (April 2026) calling for Israel's expulsion from Eurovision, citing genocide, siege and brutal military occupation against Palestinians",
    sources: `<a href="https://www.nme.com/news/music/eurovision-2026-paul-weller-idles-massive-attack-paloma-faith-kneecap-primal-scream-sigur-ros-lead-1000-artists-calling-for-no-music-for-genocide-boycott-over-israel-3941533">NME</a>`
  },
  {
    name: "Joaquin Phoenix",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid; signed 2024 letter supporting Jonathan Glazer's Oscar speech referring to genocide in the making; executive producing a film about Palestinian child Hind Rajab",
    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Emma Stone",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid; faced significant industry backlash from major studios",
    sources: `<a href="https://www.npr.org/2025/09/09/nx-s1-5535578/hollywood-stars-boycott-israeli-film-companies-in-response-to-gaza-crisis">NPR</a> | <a href="https://www.euronews.com/culture/2025/09/09/olivia-colman-javier-bardem-and-emma-stone-among-1300-filmmakers-to-boycott-israeli-film-c">Euronews</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Ayo Edebiri",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/ayo-edebiri-mark-ruffalo-boycott-israeli-film-institutions-1236364989/">Hollywood Reporter</a> | <a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Andrew Garfield",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.justjared.com/2025/09/25/5000-stars-have-now-joined-pledge-to-boycott-israeli-film-institutions-including-toni-collette-andrew-garfield-more/">Just Jared</a> | <a href="https://www.thewrap.com/film-industry-pledge-end-complicity-israel-palestine-genocide-gaza/">The Wrap</a>`
  },
  {
    name: "Toni Collette",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.justjared.com/2025/09/25/5000-stars-have-now-joined-pledge-to-boycott-israeli-film-institutions-including-toni-collette-andrew-garfield-more/">Just Jared</a>`
  },
  {
    name: "Nicola Coughlan",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Lily Gladstone",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-stars-thousands-pledge-not-work-israeli-film-institutions-rcna230463">NBC News</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Film Workers for Palestine</a>`
  },
  {
    name: "Elliot Page",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.thepinknews.com/2025/09/11/israeli-film-industry-boycott-elliot-page-joe-locke/">PinkNews</a> | <a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Ilana Glazer",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Jonathan Glazer",
    level: "CRITICAL",
    statement: "Director of The Zone of Interest who used his 2024 Oscar acceptance speech to denounce Israeli occupation and dehumanization, stating he refused to let his Jewishness be hijacked by an occupation; faced backlash from 1,000+ industry professionals; signed Film Workers for Palestine pledge (September 2025)",
    sources: `<a href="https://www.hollywoodreporter.com/movies/movie-news/zone-of-interest-jonathan-glazer-2024-oscar-speech-israel-gaza-conflict-1235848917/">Hollywood Reporter</a> | <a href="https://www.jta.org/2025/09/10/culture/emma-stone-jonathan-glazer-join-growing-list-of-hollywood-figures-boycotting-israeli-film-institutions">JTA</a>`
  },
  {
    name: "Rooney Mara",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a>`
  },
  {
    name: "Harris Dickinson",
    level: "CRITICAL",
    statement: "Signed Film Workers for Palestine pledge (September 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://variety.com/2025/film/global/stars-sign-pledge-complicit-israeli-film-companies-1236511010/">Variety</a> | <a href="https://www.nbcnews.com/pop-culture/pop-culture-news/hollywood-stars-thousands-pledge-not-work-israeli-film-institutions-rcna230463">NBC News</a>`
  },
  {
    name: "Rebecca Hall",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to boycott Israeli film institutions implicated in genocide and apartheid",
    sources: `<a href="https://deadline.com/2025/09/film-workers-for-palestine-ava-duvernay-olivia-colman-1236511823/">Deadline</a> | <a href="https://en.wikipedia.org/wiki/Film_Workers_for_Palestine">Film Workers for Palestine</a>`
  },
  {
    name: "Gael Garcia Bernal",
    level: "CRITICAL",
    statement: "Among the initial signatories of Film Workers for Palestine pledge (September 8, 2025) to boycott Israeli film institutions implicated in genocide and apartheid; previously signed open letters calling for an end to Israeli military operations",
    sources: `<a href="https://www.jta.org/2025/09/08/culture/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions">JTA</a> | <a href="https://forward.com/fast-forward/767539/gael-garcia-bernal-ilana-glazer-ayo-edebiri-among-hollywood-a-listers-pledging-to-boycott-israeli-film-institutions/">Forward</a>`
  },
  {
    name: "Rachel Kushner",
    level: "CRITICAL",
    statement: "Signed Palestine Festival of Literature boycott letter (October 2024) pledging to boycott Israeli cultural institutions complicit in genocide, apartheid, and occupation",
    sources: `<a href="https://www.timesofisrael.com/sally-rooney-among-1000-authors-urging-boycott-of-israeli-cultural-institutions/">Times of Israel</a> | <a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  },
  {
    name: "Ocean Vuong",
    level: "CRITICAL",
    statement: "Signed Palestine Festival of Literature boycott letter (October 2024) pledging to boycott Israeli cultural institutions complicit in genocide, apartheid, and occupation",
    sources: `<a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  },
  {
    name: "Viet Thanh Nguyen",
    level: "CRITICAL",
    statement: "Pulitzer Prize-winning author who signed the literary boycott of Israeli cultural institutions (2024) and publicly withheld permission for his book to be published by his Israeli publisher unless they endorsed Palestinian rights; vocal BDS advocate who has written extensively about the movement",
    sources: `<a href="https://www.972mag.com/viet-thanh-nguyen-bds-israel-palestine/">+972 Magazine</a> | <a href="https://lithub.com/hundreds-of-authors-pledge-to-boycott-israeli-cultural-institutions/">Literary Hub</a>`
  }
];
