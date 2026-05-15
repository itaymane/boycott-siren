import re

with open("index.html", encoding="utf-8") as f:
    c = f.read()

replacements = [
    ('<html lang="en">', '<html lang="he" dir="rtl">'),
    ('ArtSiren | Artist Boycott Database – 284 Verified Artists</title>', 'ArtSiren | מאגר אמנים המחרימים ישראל – 284 אמנים מאומתים</title>'),
    ('content="Search 284+ verified artists who support the cultural boycott of Israel. Roger Waters, Lorde, Dua Lipa, Brian Eno and more – all from publicly documented sources. Get instant alerts with our free Chrome extension."', 'content="חפש 284+ אמנים מאומתים התומכים בחרם התרבותי על ישראל. Roger Waters, Lorde, Dua Lipa, Brian Eno ועוד – הכל ממקורות מתועדים. קבל התראות מיידיות עם תוסף Chrome החינמי שלנו."'),
    ('og:title" content="ArtSiren | Artist Boycott Database – 284 Verified Artists"', 'og:title" content="ArtSiren | מאגר אמנים המחרימים ישראל – 284 אמנים מאומתים"'),
    ('og:description" content="Search 284+ verified artists who support the cultural boycott of Israel. All from publicly documented, mainstream media sources. Free Chrome extension for instant alerts."', 'og:description" content="חפש 284+ אמנים מאומתים התומכים בחרם התרבותי על ישראל. הכל ממקורות תקשורת מובילים. תוסף Chrome חינמי."'),
    ('"og:locale" content="en_US"', '"og:locale" content="he_IL"'),
    ('twitter:title" content="ArtSiren | Artist Boycott Database – 284 Verified Artists"', 'twitter:title" content="ArtSiren | מאגר אמנים המחרימים ישראל – 284 אמנים מאומתים"'),
    ('twitter:description" content="Search 284+ verified artists who support the cultural boycott of Israel. Roger Waters, Lorde, Dua Lipa, Brian Eno and more."', 'twitter:description" content="חפש 284+ אמנים התומכים בחרם התרבותי על ישראל. Roger Waters, Lorde, Dua Lipa, Brian Eno ועוד."'),
    ('<link rel="canonical" href="https://artsiren.co/">', '<link rel="canonical" href="https://artsiren.co/he/">\n    <link rel="alternate" hreflang="en" href="https://artsiren.co/">\n    <link rel="alternate" hreflang="he" href="https://artsiren.co/he/">\n    <link rel="alternate" hreflang="x-default" href="https://artsiren.co/">'),
    ('src="logo.png"', 'src="/logo.png"'),
    ('href="index.html" class="logo"', 'href="/" class="logo"'),
    ('href="about.html"', 'href="/about.html"'),
    ('href="terms.html"', 'href="/terms.html"'),
    ('href="privacy.html"', 'href="/privacy.html"'),
    ('href="extension.html"', 'href="/extension.html"'),
    ('href="boycott-siren-extension.zip"', 'href="/boycott-siren-extension.zip"'),
    ('Get Instant Alerts', 'קבל התראות מיידיות'),
    ('⚡ Chrome Alerts', '⚡ התראות כרום'),
    ('⚡ Alerts', '⚡ התראות'),
    ('\U0001f4f1 Install App', '\U0001f4f1 התקן אפליקציה'),

    ('The Artist Accountability Tool', 'כלי אחריות האמנים'),
    ('<h1>Know <span>Before</span> You Go</h1>', '<h1>דע <span>לפני</span> שאתה הולך</h1>'),
    ("Before you buy a ticket or stream — find out if that artist has called to boycott Israel.", "לפני שאתה קונה כרטיס או מסטרים — בדוק אם האמן קרא לחרם על ישראל."),
    ('<p class="hero-count"><span id="heroCount">284</span>+ verified artists &nbsp;·&nbsp; Mainstream media sources &nbsp;·&nbsp; Last updated: May 2026</p>', '<p class="hero-count"><span id="heroCount">284</span>+ אמנים מאומתים &nbsp;·&nbsp; מקורות תקשורת מיינסטרים &nbsp;·&nbsp; עודכן לאחרונה: מאי 2026</p>'),
    ('🔍 Search any artist', '🔍 חפש כל אמן'),
    ('placeholder="Search artists…"', 'placeholder="חפש אמנים..."'),
    ('<span class="filter-label">Category:</span>', '<span class="filter-label">קטגוריה:</span>'),
    ('data-filter="all">All</button>', 'data-filter="all">הכל</button>'),
    ('data-filter="musician">Musicians</button>', 'data-filter="musician">מוזיקאים</button>'),
    ('data-filter="actor">Actors</button>', 'data-filter="actor">שחקנים</button>'),
    ('data-filter="director">Directors</button>', 'data-filter="director">במאים</button>'),
    ('<span class="filter-label">Severity:</span>', '<span class="filter-label">רמה:</span>'),
    ('data-level="all">All</button>', 'data-level="all">הכל</button>'),
    ('data-level="CRITICAL">● Critical</button>', 'data-level="CRITICAL">● קריטי</button>'),
    ('data-level="HIGH">● High</button>', 'data-level="HIGH">● גבוה</button>'),
    ('data-level="LOW">● Low</button>', 'data-level="LOW">● נמוך</button>'),
    ('<summary>How Artists Are Classified</summary>', '<summary>כיצד מסווגים האמנים</summary>'),
    ('<span class="stance-badge level-CRITICAL">Critical</span>', '<span class="stance-badge level-CRITICAL">קריטי</span>'),
    ('<strong>Active Boycott</strong> — Formally declared participation in a boycott of Israel: signed BDS cultural boycott, joined No Music for Genocide with geo-blocking, or signed letters explicitly calling for a boycott.', '<strong>חרם פעיל</strong> — הצהרה רשמית על השתתפות בחרם על ישראל: חתמו על חרם תרבותי BDS, הצטרפו ל-No Music for Genocide עם חסימה גיאוגרפית, או חתמו על מכתבים הקוראים במפורש לחרם.'),
    ('<span class="stance-badge level-HIGH">High</span>', '<span class="stance-badge level-HIGH">גבוה</span>'),
    ('<strong>Public Condemnation</strong>', '<strong>גינוי פומבי</strong>'),
    ('Made strong public statements against Israeli military actions (e.g. "genocide", "apartheid") or faced personal/professional risk for speaking out — without formally joining an organised boycott.', 'הצהרות פומביות חזקות נגד פעולות ישראל (כגון: "רצח עם", "אפרטהייד") — מבלי הצטרפות רשמית לחרם מאורגן.'),
    ('<span class="stance-badge level-LOW">Low</span>', '<span class="stance-badge level-LOW">נמוך</span>'),
    ('<strong>Signed Declaration</strong> — Signed a petition or solidarity statement opposing Israeli policy.', '<strong>חתמו על הצהרה</strong> — חתמו על עצומה או מכתב סולידריות המתנגד למדיניות ישראל.'),
    ('<div class="stat-label">Musicians</div>', '<div class="stat-label">מוזיקאים</div>'),
    ('<div class="stat-label">Actors</div>', '<div class="stat-label">שחקנים</div>'),
    ('<div class="stat-label">Directors</div>', '<div class="stat-label">במאים</div>'),
    ('<div class="stat-label">Writers & Activists</div>', '<div class="stat-label">סופרים ופעילים</div>'),
    ('>About<', '>אודות<'),
    ('>Terms of Use<', '>תנאי שימוש<'),
    ('>Privacy Policy<', '>מדיניות פרטיות<'),
    ('>Get Extension<', '>הורד תוסף<'),
    ('>Contact<', '>צור קשר<'),
    ('<h2>Get in Touch</h2>', '<h2>צור קשר</h2>'),
    ('<p class="contact-sub">We read every message. Select a category so we can respond faster.</p>', '<p class="contact-sub">אנו קוראים כל הודעה. בחר קטגוריה כדי שנוכל להגיב מהר יותר.</p>'),
    ('<label>Category</label>', '<label>קטגוריה</label>'),
    ('<option value="" disabled selected>Select a reason for contact</option>', '<option value="" disabled selected>בחר סיבה ליצירת קשר</option>'),
    ('<label>Name</label>', '<label>שם</label>'),
    ('placeholder="Your name"', 'placeholder="שמך"'),
    ('<label>Email</label>', '<label>אימייל</label>'),
    ('<label>Message</label>', '<label>הודעה</label>'),
    ('placeholder="Tell us more..."', 'placeholder="ספר לנו עוד..."'),
    ('>Send Message</button>', '>שלח הודעה</button>'),
    ('<h3>Message received</h3>', '<h3>ההודעה התקבלה</h3>'),
    ("We'll get back to you at the email you provided.", 'נחזור אליך לכתובת האימייל שמסרת.'),
    ("Verified sources</span>", "מקורות מאומתים</span>"),
    ("View details <svg", "לפרטים <svg"),
    (">Statement:</div>", ">הצהרה:</div>"),
    (">Verified Sources:</div>", ">מקורות מאומתים:</div>"),
    (">No sources available</p>", ">אין מקורות זמינים</p>"),
    (">Share:</div>", ">שתף:</div>"),
    ("cursor: pointer;\">\n                                Copy Link", "cursor: pointer;\">\n                                העתק קישור"),
    ("'Copy Link'", "'העתק קישור'"),
    ("'Copied!'", "'הועתק!'"),
    ("filtered.length + ' artist' + (filtered.length !== 1 ? 's' : '') + ' shown'", "filtered.length + (filtered.length === 1 ? ' אמן מוצג' : ' אמנים מוצגים')"),
    ("const cat = artist.category ? artist.category.charAt(0).toUpperCase() + artist.category.slice(1) : 'Artist';", "const catMap = { musician: 'מוזיקאי', actor: 'שחקן', director: 'במאי', writer: 'סופר', activist: 'פעיל', academic: 'אקדמאי' };\n                const cat = (artist.category && catMap[artist.category]) ? catMap[artist.category] : 'אמן';"),
    ('All information from publicly documented sources. Independently verifiable.', 'כל המידע ממקורות מתועדים. ניתן לאמת באופן עצמאי.'),
    ("btn.textContent = 'Send Message';", "btn.textContent = 'שלח הודעה';"),
    ("btn.textContent = 'Sending...';", "btn.textContent = 'שולח...';"),
    ("alert('Something went wrong. Please try again.');", "alert('משהו השתבש. אנא נסה שוב.');"),
    ('<h2 style="font-size:1rem;font-weight:700;color:#44D7FF;margin-bottom:12px;">Artists in this database</h2>', '<h2 style="font-size:1rem;font-weight:700;color:#44D7FF;margin-bottom:12px;">אמנים במאגר</h2>'),
    ('The following artists have publicly supported the cultural boycott of Israel. Each entry is sourced from mainstream media and verified open letters.', 'האמנים הבאים תמכו פומבית בחרם התרבותי על ישראל. כל רשומה מגובה בתקשורת מיינסטרים ומכתבים מאומתים.'),
]

not_found = []
for old, new in replacements:
    if old in c:
        c = c.replace(old, new)
    else:
        not_found.append(old[:60])

if not_found:
    print("NOT FOUND:")
    for s in not_found:
        print(" -", s)
else:
    print("All replacements applied successfully.")

with open("he/index.html", "w", encoding="utf-8") as f:
    f.write(c)

print("Written to he/index.html")
