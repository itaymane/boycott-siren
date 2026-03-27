// Boycott Siren - Artist Database
// Total: 209 verified artists
// Last updated: 2026-03-27

const ARTISTS_DATABASE = [
    {
        name: "Roger Waters",
        statement: "Pink Floyd co-founder, longtime BDS advocate; dropped by publisher BMG in 2024 over Israel comments",
        sources: `<a href="https://www.bdsmovement.net/news/roger-waters-and-bds" target="_blank">BDS Movement</a> | <a href="https://bdsmovement.net/news/facebook-live-conversation-roger-waters" target="_blank">PACBI</a> | <a href="https://www.guardian.co.uk/commentisfree/2011/mar/11/cultural-boycott-west-bank-wall" target="_blank">The Guardian</a> | <a href="https://www.rollingstone.com/music/music-news/roger-waters-pink-floyd-bmg-israel-comments-1234957036/" target="_blank">Rolling Stone</a> | <a href="https://variety.com/2024/music/news/roger-waters-bmg-split-over-pink-floyd-anti-israeli-comments-1235891350/" target="_blank">Variety</a> | <a href="https://www.nme.com/news/music/bmg-reportedly-splitting-from-roger-waters-following-israel-comments-3579758" target="_blank">NME</a> | <a href="https://www.timesofisrael.com/roger-waters-calls-on-musicians-to-boycott-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2024-01-31/ty-article/record-company-cuts-contract-with-roger-waters-amid-history-of-anti-israel-statements/0000018d-5ecf-d0fc-a9bd-5edf3f6a0000" target="_blank">Haaretz</a>`
    },
    {
        name: "Dua Lipa",
        statement: "Called Israel's actions in Gaza a 'genocide'; shelved music video deemed insensitive; shared #AllEyesOnRafah; signed open letter urging UK PM to end complicity in war",
        sources: `<a href="https://deadline.com/2023/12/dua-lipa-pulls-music-video-insensitive-israel-gaza-conflict-1235683400/" target="_blank">Deadline</a> | <a href="https://www.newsweek.com/dua-lipa-israel-palestinians-hamas-conflict-rolling-stone-interview-1861402" target="_blank">Newsweek</a> | <a href="https://www.euronews.com/culture/2024/05/29/dua-lipa-shares-support-for-alleyesonrafah-what-does-it-mean" target="_blank">Euronews</a> | <a href="https://www.timesofisrael.com/singer-dua-lipa-slams-ugly-campaign-criticizing-her-for-pro-palestinian-stance/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Patti Smith",
        statement: "Supports cultural boycott, declined to perform in Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/patti-smith-julian-casablancas-among-600-musicians-to-urge-boycott-of-israel/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Elvis Costello",
        statement: "Cancelled Israel concerts in support of BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.haaretz.com/israel-news/culture/2010-05-18/ty-article/elvis-costello-joins-israel-boycott-canceling-june-shows/0000017f-e292-d38f-a57f-e6d261610000" target="_blank">Haaretz</a> | <a href="https://www.hollywoodreporter.com/business/business-news/elvis-costello-cancels-israel-concerts-23816/" target="_blank">Hollywood Reporter</a>`
    },
    {
        name: "Tom Morello",
        statement: "Rage Against the Machine member, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "The Roots",
        statement: "Signed cultural boycott pledges",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lauryn Hill",
        statement: "Cancelled Israel concert, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/lauryn-hill-cancels-israel-show/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Peter Gabriel",
        statement: "Supports cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/peter-gabriel-pro-gaza-not-anti-israel/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Annie Lennox",
        statement: "Vocal supporter of Palestinian rights and BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Charlotte Church",
        statement: "Supports BDS, declined to perform in Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Sam Smith",
        statement: "Supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a> | <a href="https://www.timesofisrael.com/sam-smiths-tel-aviv-concert-cancelled-citing-technical-logistical-difficulties/" target="_blank">Times of Israel</a>`
    },
    {
        name: "Björk",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israeli streaming services",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/singer-bjork-appears-to-yank-her-streaming-songs-from-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-21/ty-article/.premium/bjork-pulls-her-music-from-israeli-streaming-services-amid-gaza-war-boycott-campaign/00000199-6d25-daea-adff-7fe7e9110000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lorde",
        statement: "Cancelled 2018 Israel concert; signed No Music for Genocide pledge and geo-blocked music from Israel; shouted 'Free Palestine' on stage at MSG",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/after-bds-pressure-popster-lorde-cancels-israel-gig/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-10-03/ty-article/.premium/new-zealand-singer-lorde-removes-her-songs-from-apple-music-in-israel/00000199-aae9-df33-a5dd-aefff8da0000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://consequence.net/2025/10/lorde-idles-no-music-for-genocide-boycott/" target="_blank">Consequence</a> | <a href="https://www.aljazeera.com/news/2018/1/3/lorde-bullied-after-dropping-israel-show" target="_blank">Al Jazeera</a>`
    },
    {
        name: "Massive Attack",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/massive-attack-primal-scream-join-initiative-to-block-music-being-streamed-in-israel/" target="_blank">Times of Israel</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Brian Eno",
        statement: "Organised 'Together for Palestine' benefit concert at Wembley Arena; co-authored letter calling Israel's campaign 'a well-planned genocide'",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.billboard.com/music/music-news/brian-eno-together-for-palestine-benefit-concert-lineup-1236038659/" target="_blank">Billboard</a> | <a href="https://www.nme.com/news/music/brian-eno-interview-together-for-palestine-hope-art-music-3893445" target="_blank">NME</a> | <a href="https://www.nme.com/news/music/brian-eno-calls-for-israels-war-crimes-against-palestine-to-be-prosecuted-act-now-or-international-law-withers-forever-3800230" target="_blank">NME (2)</a>`
    },
    {
        name: "Fontaines D.C.",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Japanese Breakfast",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Paramore",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.nme.com/news/music/paramore-and-hayley-williams-join-no-music-for-genocide-israel-boycott-3895018" target="_blank">NME (Paramore)</a> | <a href="https://consequence.net/2025/09/paramore-hayley-williams-israel-boycott/" target="_blank">Consequence</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a>`
    },
    {
        name: "Hayley Williams",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Rina Sawayama",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "AURORA",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "King Krule",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "IDLES",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://consequence.net/2025/10/lorde-idles-no-music-for-genocide-boycott/" target="_blank">Consequence</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hot Chip",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kneecap",
        statement: "Signed No Music for Genocide pledge; projected 'FCK ISRAEL' on Coachella stage; banned from entering Hungary and Canada",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.timesofisrael.com/irish-band-kneecap-projects-fck-israel-on-coachella-music-festival-stage/" target="_blank">Times of Israel (Coachella)</a> | <a href="https://www.timesofisrael.com/hungary-bans-anti-israel-rap-group-kneecap-from-entering-country-for-festival-gig/" target="_blank">Times of Israel (Hungary ban)</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Wednesday",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mannequin Pussy",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "BADBADNOTGOOD",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Young Fathers",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Grizzly Bear",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Amyl and the Sniffers",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Soccer Mommy",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kelela",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Caribou",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Primal Scream",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Faye Webster",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Arca",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MIKE",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Erika de Casier",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MJ Lenderman",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Julia Jacklin",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lucy Dacus",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Enter Shikari",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Fever Ray",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "The Knife",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Blood Orange",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Blonde Redhead",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Clairo",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Denzel Curry",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Destroy Boys",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Eartheater",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Geese",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Jane Remover",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Ben Howard",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "The Blessed Madonna",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Corbin",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Chanel Beads",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Cameron Winter",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "By Storm",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Fat Tony",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Flavien Berger",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hania Rani",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hyperdub",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kelsey Lu",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "L'Rain",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Lambrini Girls",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Liv.e",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Luna Li",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Marc Rebillet",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MARINA",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Maryam Saleh",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Maurice Louca",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mechatok",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mei Semones",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Mogwai",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "MØ",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Nicolás Jaar",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Nourished by Time",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "NTS Radio",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Oklou",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Smerz",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Nick León",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Yaeji",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Yeule",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "10k",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Aminé",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Ana Tijoux",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Annahstasia",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Carole King",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Daphni",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Escho",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Esha Tewari",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Ryuichi Sakamoto Estate",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hand Habits",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Hotline TNT",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Julia Holter",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Kelly Moran",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Loraine James",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Model/Actriz",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Saul Williams",
        statement: "Signed No Music for Genocide pledge, geo-blocked music from Israel",
        sources: `<a href="https://nomusicforgenocide.org/" target="_blank">No Music for Genocide</a> | <a href="https://en.wikipedia.org/wiki/No_Music_For_Genocide" target="_blank">Wikipedia - No Music for Genocide</a> | <a href="https://www.haaretz.com/israel-news/2025-09-18/ty-article/.premium/more-than-400-artists-sign-petition-to-remove-their-songs-from-platforms-in-israel/00000199-5df9-d45d-a3bf-fffbc0690000" target="_blank">Haaretz</a> | <a href="https://www.npr.org/2025/11/13/nx-s1-5599908/no-music-for-genocide-israel-boycott" target="_blank">NPR</a> | <a href="https://www.billboard.com/music/music-news/no-music-for-genocide-boycott-clairo-lucy-dacus-1236087251/" target="_blank">Billboard</a> | <a href="https://www.rollingstone.com/music/music-news/no-music-for-genocide-boycott-1235429933/" target="_blank">Rolling Stone</a> | <a href="https://www.nme.com/news/music/lorde-idles-muna-lead-1000-artists-joining-no-music-for-genocide-israel-streaming-block-3897163" target="_blank">NME</a>`
    },
    {
        name: "Four Tet",
        statement: "Joined #DJsForPalestine cultural boycott of Israel in 2018; supports Palestinian rights",
        sources: `<a href="https://www.nme.com/news/music/four-tet-caribou-djs-for-palestine-2378356" target="_blank">NME</a> | <a href="https://www.haaretz.com/israel-news/prominent-djs-back-israel-boycott-over-brutal-oppression-of-the-palestinian-people-1.6469507" target="_blank">Haaretz</a> | <a href="https://mixmag.net/read/four-tet-caribou-and-the-black-madonna-show-support-for-djsforpalestine-news" target="_blank">Mixmag</a>`
    },
    {
        name: "Olivia Colman",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Javier Bardem",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mark Ruffalo",
        statement: "Wore ceasefire pin at DGA Awards and Oscars; called for halt to US arms transfers to Israel; signed letter protecting pro-Palestine SAG-AFTRA members",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a> | <a href="https://deadline.com/2024/02/mark-ruffalo-gaza-ceasefire-mickey-17-brad-ingelsby-dga-awards-news-interview-1235821473/" target="_blank">Deadline</a> | <a href="https://variety.com/2024/film/global/mark-ruffalo-mahershala-ali-cynthia-nixon-ilana-glazer-us-end-israel-arms-sales-artists4ceasefire-1236131402/" target="_blank">Variety</a> | <a href="https://www.hollywoodreporter.com/news/politics-news/mark-ruffalo-ramy-youssef-call-for-pro-palestine-sag-member-protection-1235993880/" target="_blank">Hollywood Reporter</a>`
    },
    {
        name: "Steve Coogan",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Riz Ahmed",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Miriam Margolyes",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Tilda Swinton",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Khalid Abdalla",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Maxine Peake",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Susan Sarandon",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Danny Glover",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Penélope Cruz",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Cusack",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Cynthia Nixon",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Viggo Mortensen",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mia Farrow",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Peter Capaldi",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Julie Christie",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Juliet Stevenson",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Paapa Essiedu",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Dame Harriet Walter",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Joe Alwyn",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Lena Headey",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Kingsley Ben-Adir",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Carla Henry",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Pooja Ghai",
        statement: "Signed Artists' Pledge for Palestine, supports cultural boycott",
        sources: `<a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Ken Loach",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Mike Leigh",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Ava DuVernay",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Yorgos Lanthimos",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Adam McKay",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Asif Kapadia",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "James Schamus",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Julia Loktev",
        statement: "Vocal supporter of cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/" target="_blank">PACBI</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Thurston Moore",
        statement: "Sonic Youth founder, signed multiple BDS petitions",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://artistsforpalestine.org.uk/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Serj Tankian",
        statement: "System of a Down frontman, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Portishead",
        statement: "UK trip-hop band, performed at Together For Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "PJ Harvey",
        statement: "Supports cultural boycott of Israel",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Gorillaz",
        statement: "Virtual band led by Damon Albarn, supports Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Damon Albarn",
        statement: "Blur/Gorillaz frontman, performed at Together For Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Paul Weller",
        statement: "The Jam frontman, performed at Together For Palestine",
        sources: `<a href="https://www.aljazeera.com/news/longform/2025/9/25/who-are-the-artists-speaking-out" target="_blank">Al Jazeera</a> | <a href="https://artistsforpalestine.org.uk/tag/brian-eno/" target="_blank">Artists for Palestine UK</a>`
    },
    {
        name: "Robyn",
        statement: "Swedish pop star, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lykke Li",
        statement: "Swedish singer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Sigur Rós",
        statement: "Icelandic band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Propagandhi",
        statement: "Canadian punk band, vocal BDS supporters",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Refused",
        statement: "Swedish hardcore band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Faithless",
        statement: "Electronic music group, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Gil Scott-Heron",
        statement: "Late poet and musician, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Talib Kweli",
        statement: "Hip-hop artist, vocal supporter of Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Chuck D",
        statement: "Public Enemy frontman, supports BDS",
        sources: `<a href="https://www.amostrust.org/palestine-justice/change-the-record/cultural-boycott/" target="_blank">Amos Trust</a> | <a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a>`
    },
    {
        name: "Boots Riley",
        statement: "The Coup frontman, director, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Run the Jewels",
        statement: "Hip-hop duo, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Noname",
        statement: "Chicago rapper, vocal supporter of Palestine",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Alice Walker",
        statement: "Pulitzer Prize winner, vocal BDS supporter",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Naomi Klein",
        statement: "Author of 'Shock Doctrine', supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Arundhati Roy",
        statement: "Booker Prize winner, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Berger",
        statement: "Art critic and author, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Iain Banks",
        statement: "Sci-fi author, announced cultural boycott before death",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Sally Rooney",
        statement: "Author, declined Israeli translation rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Khaled Hosseini",
        statement: "Author of 'Kite Runner', supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Annie Ernaux",
        statement: "Nobel Prize winner, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Angela Davis",
        statement: "Civil rights icon, vocal BDS supporter",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Judith Butler",
        statement: "Philosopher, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Noam Chomsky",
        statement: "Linguist, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Desmond Tutu",
        statement: "Late Archbishop, compared Israel to apartheid",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "DJ Snake",
        statement: "French DJ, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Julian Casablancas",
        statement: "The Strokes frontman, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Sinéad O'Connor",
        statement: "Late Irish singer; cancelled 2014 Israel concert after learning of BDS boycott call; said 'I will not play in Israel'",
        sources: `<a href="https://electronicintifada.net/blogs/david-cronin/thank-you-sinead-oconnor-boycotting-israel" target="_blank">Electronic Intifada</a> | <a href="https://www.hotpress.com/music/sinead-oconnor-i-wont-play-in-israel-11954250" target="_blank">Hotpress</a>`
    },
    {
        name: "System of a Down",
        statement: "Rock band, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Nigel Kennedy",
        statement: "Classical violinist, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "John Williams (guitarist)",
        statement: "Classical guitarist, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "The Pixies",
        statement: "Alternative rock band, cancelled Israel show",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "DJ Spooky",
        statement: "Electronic musician, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Tinariwen",
        statement: "Tuareg band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Asian Dub Foundation",
        statement: "British group, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Manic Street Preachers",
        statement: "Welsh rock band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Belle and Sebastian",
        statement: "Scottish indie band, declined Israel performance",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Jean-Luc Godard",
        statement: "Late film director, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Mira Nair",
        statement: "Director, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Jane Campion",
        statement: "Oscar winner, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Richard Gere",
        statement: "Performed at Together For Palestine",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Liam Cunningham",
        statement: "Game of Thrones actor, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia - BDS Supporters</a>`
    },
    {
        name: "Cat Power",
        statement: "Indie artist, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Devendra Banhart",
        statement: "Folk singer, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Cassandra Wilson",
        statement: "Jazz singer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Coldcut",
        statement: "Electronic duo, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "The Ex",
        statement: "Punk band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Dälek",
        statement: "Hip-hop group, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Sonic Youth",
        statement: "Alternative rock band, supported BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Godspeed You! Black Emperor",
        statement: "Post-rock band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "A Silver Mt. Zion",
        statement: "Post-rock band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Do Make Say Think",
        statement: "Instrumental band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Broken Social Scene",
        statement: "Indie collective, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Feist",
        statement: "Singer-songwriter, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Stars",
        statement: "Indie pop band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Metric",
        statement: "Rock band, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Wolf Parade",
        statement: "Indie rock band, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Destroyer",
        statement: "Indie project, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Owen Pallett",
        statement: "Composer, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Peaches",
        statement: "Electronic musician, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Tanya Tagaq",
        statement: "Inuit throat singer, supports Palestinian rights",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Arcade Fire members",
        statement: "Members signed BDS petitions",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Dead Prez",
        statement: "Hip-hop duo, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Immortal Technique",
        statement: "Underground rapper, vocal BDS supporter",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Lowkey",
        statement: "British rapper, vocal Palestinian rights activist",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Akala",
        statement: "British rapper, supports BDS",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Kae Tempest",
        statement: "Poet and rapper, supports cultural boycott",
        sources: `<a href="https://bdsmovement.net/cultural-boycott" target="_blank">BDS Movement</a> | <a href="https://en.wikipedia.org/wiki/List_of_supporters_of_the_BDS_movement" target="_blank">Wikipedia</a>`
    },
    {
        name: "Little Simz",
        statement: "Withdrew from Israel's Meteor Festival in 2018 following BDS boycott calls; stated 'I will not be appearing at Meteor Festival'",
        sources: `<a href="https://www.juancole.com/2018/09/apartheid-palestinians-musicians.html" target="_blank">Juan Cole</a> | <a href="https://bdsmovement.net/meteor" target="_blank">BDS Movement</a>`
    }
];
