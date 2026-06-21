/**
 * shared-nav.js — ArtSiren unified navigation
 * Injects navbar, contact modal, and footer strip into all secondary pages.
 * index.html manages its own nav and is excluded automatically.
 */
(function () {
  'use strict';

  var path = window.location.pathname;

  // ── Skip index.html and Hebrew homepage ──
  if (path === '/' || path.endsWith('index.html') || path.match(/\/he\/?$/) || path.match(/\/he\/index\.html$/)) {
    return;
  }

  // ── FOUC guard: hide body until nav is injected ──
  var foucStyle = document.createElement('style');
  foucStyle.id = 'sn-fouc';
  foucStyle.textContent = 'body{visibility:hidden!important}';
  document.head.appendChild(foucStyle);

  // ── Poppins font (skip if already loaded) ──
  if (!document.querySelector('link[href*="Poppins"]')) {
    var fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(fontLink);
  }

  // ── All styles (sn- prefixed to avoid conflicts) ──
  var styleEl = document.createElement('style');
  styleEl.id = 'sn-styles';
  styleEl.textContent = [
    /* Design tokens */
    ':root{',
    '  --sn-blue:#1C5FEA;--sn-blue-mid:#1a52cc;',
    '  --sn-navy:#0C233E;--sn-text-sec:#6B7280;',
    '  --sn-border:#DDE1ED;--sn-blue-tint:rgba(28,95,234,0.08);',
    '}',

    /* Navbar */
    '.sn-navbar{background:#fff;box-shadow:0 2px 12px rgba(12,35,62,0.05);padding:0.85rem 0;position:sticky;top:0;z-index:200;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}',
    '.sn-container{max-width:1360px;margin:0 auto;padding:0 1.5rem;}',
    '.sn-nav-content{display:flex;align-items:center;}',
    '.sn-logo{display:flex;align-items:center;text-decoration:none;flex-shrink:0;}',
    '.sn-logo img{height:36px;width:auto;max-width:180px;display:block;}',
    '.sn-nav-links{display:flex;align-items:center;gap:0.25rem;margin-left:auto;}',
    '.sn-nav-link{color:var(--sn-text-sec);text-decoration:none;font-size:0.9rem;font-weight:400;padding:0.45rem 1rem;border-radius:8px;transition:color .15s,background .15s;white-space:nowrap;font-family:inherit;}',
    '.sn-nav-link:hover{color:var(--sn-navy);background:rgba(12,35,62,0.06);}',
    '.sn-nav-link.sn-active{color:var(--sn-blue);font-weight:600;}',
    '.sn-nav-right{display:flex;align-items:center;margin-left:1.5rem;}',
    '.sn-btn-cta{background:var(--sn-blue);color:#fff!important;border:none;padding:0.55rem 1.2rem;border-radius:100px;font-size:0.85rem;font-weight:600;cursor:pointer;text-decoration:none!important;font-family:inherit;box-shadow:0 4px 12px rgba(28,95,234,0.3);transition:background .15s,box-shadow .15s;white-space:nowrap;display:inline-block;}',
    '.sn-btn-cta:hover{background:var(--sn-blue-mid);box-shadow:0 6px 20px rgba(28,95,234,0.4);}',
    '@media(max-width:760px){.sn-nav-links{display:none!important;}}',

    /* Footer strip */
    '.sn-footer{position:fixed;bottom:0;left:0;right:0;z-index:190;display:flex;justify-content:center;align-items:center;background:var(--sn-navy);padding:0.6rem 1rem;gap:0;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}',
    '.sn-footer-copy{color:rgba(255,255,255,0.3);font-size:0.72rem;padding:0.2rem 1.1rem 0.2rem 0;margin-right:0.5rem;border-right:1px solid rgba(255,255,255,0.12);white-space:nowrap;}',
    '.sn-footer-link{color:rgba(255,255,255,0.55);text-decoration:none;font-size:0.75rem;padding:0.2rem 1rem;border-right:1px solid rgba(255,255,255,0.12);transition:color .15s;white-space:nowrap;}',
    '.sn-footer-link:last-child{border-right:none;}',
    '.sn-footer-link:hover{color:rgba(255,255,255,0.9);}',
    '@media(max-width:600px){.sn-footer-copy{display:none!important;}.sn-footer-link{padding:0.2rem 0.6rem;font-size:0.68rem;}}',
    'body{padding-bottom:42px;}',

    /* Contact modal */
    '.sn-overlay{display:none;position:fixed;inset:0;background:rgba(10,15,30,0.55);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:1000;align-items:center;justify-content:center;padding:1rem;font-family:"Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}',
    '.sn-overlay.open{display:flex;}',
    '.sn-modal{background:#fff;border-radius:20px;width:100%;max-width:520px;padding:2.5rem;position:relative;box-shadow:0 24px 64px rgba(0,0,0,0.18);animation:snUp .25s ease;}',
    '@keyframes snUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
    '.sn-modal h2{font-size:1.4rem;font-weight:700;color:#0a0f1e;margin-bottom:0.4rem;letter-spacing:-.5px;}',
    '.sn-modal-sub{font-size:0.875rem;color:#718096;margin-bottom:1.75rem;}',
    '.sn-close{position:absolute;top:1.25rem;right:1.25rem;background:none;border:none;font-size:1.5rem;color:#a0aec0;cursor:pointer;line-height:1;padding:0.25rem;}',
    '.sn-close:hover{color:#0a0f1e;}',
    '.sn-field{margin-bottom:1rem;}',
    '.sn-field label{display:block;font-size:0.8rem;font-weight:600;color:#4a5568;margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:.4px;}',
    '.sn-field input,.sn-field select,.sn-field textarea{width:100%;padding:0.75rem 1rem;border:1.5px solid #e2e8f0;border-radius:10px;font-size:0.9rem;font-family:inherit;color:#0a0f1e;background:#f8f9fc;transition:border .15s,box-shadow .15s;outline:none;box-sizing:border-box;}',
    '.sn-field input:focus,.sn-field select:focus,.sn-field textarea:focus{border-color:var(--sn-blue);background:#fff;box-shadow:0 0 0 3px rgba(28,95,234,0.08);}',
    '.sn-field textarea{resize:vertical;min-height:110px;}',
    '.sn-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}',
    '.sn-submit{width:100%;padding:0.875rem;background:var(--sn-blue);color:#fff;border:none;border-radius:10px;font-size:0.95rem;font-weight:600;font-family:inherit;cursor:pointer;margin-top:0.5rem;transition:background .15s,transform .15s;}',
    '.sn-submit:hover{background:var(--sn-blue-mid);transform:translateY(-1px);}',
    '.sn-submit:disabled{background:#a0aec0;cursor:not-allowed;transform:none;}',
    '.sn-success{display:none;text-align:center;padding:2rem 0;}',
    '.sn-success-icon{font-size:3rem;margin-bottom:1rem;}',
    '.sn-success h3{font-size:1.2rem;font-weight:700;color:#0a0f1e;margin-bottom:.5rem;}',
    '.sn-success p{color:#718096;font-size:.9rem;}',
    '@media(max-width:540px){.sn-modal{padding:1.75rem 1.25rem;}.sn-row{grid-template-columns:1fr;gap:0;}}'
  ].join('');
  document.head.appendChild(styleEl);

  // ── Active page detection ──
  var page = (path.split('/').pop() || '').split('.')[0];
  var pageMap = { about: 'about', sources: 'sources', 'how-it-works': 'how-it-works', extension: 'extension' };
  var active = pageMap[page] || '';

  function link(href, label, key) {
    var cls = 'sn-nav-link' + (active === key ? ' sn-active' : '');
    if (key === 'contact') {
      return '<a href="#" class="' + cls + '" onclick="openContact();return false;">' + label + '</a>';
    }
    return '<a href="' + href + '" class="' + cls + '">' + label + '</a>';
  }

  // ── HTML fragments ──
  var LOGO = 'https://media.base44.com/images/public/6a3256d03c8df239cec9d212/4ebf28762_fulllogo2.png';
  var MAKE_HOOK = 'https://hook.us2.make.com/5juuuyrvf37yi2wgr86igjg4q373h37z';

  var navbarHTML = '<nav class="sn-navbar" id="sn-navbar"><div class="sn-container"><div class="sn-nav-content">'
    + '<a href="/index.html" class="sn-logo"><img src="' + LOGO + '" alt="ArtSiren" onerror="this.style.display=\'none\'"></a>'
    + '<div class="sn-nav-links">'
    + link('/about.html', 'About', 'about')
    + link('/sources.html', 'Sources', 'sources')
    + link('/how-it-works.html', 'How It Works', 'how-it-works')
    + link('#', 'Contact', 'contact')
    + '</div>'
    + '<div class="sn-nav-right">'
    + '<a href="/boycott-siren-extension.zip" download onclick="if(window.gtag)gtag(\'event\',\'extension_download\');" class="sn-btn-cta">Get Browser Alerts</a>'
    + '</div>'
    + '</div></div></nav>';

  var modalHTML = '<div class="sn-overlay" id="snOverlay" onclick="if(event.target===this)closeContact()">'
    + '<div class="sn-modal">'
    + '<button class="sn-close" onclick="closeContact()">×</button>'
    + '<div id="snForm">'
    + '<h2>Get in Touch</h2>'
    + '<p class="sn-modal-sub">We read every message. Select a category so we can respond faster.</p>'
    + '<form onsubmit="submitContact(event)">'
    + '<div class="sn-field"><label>Category</label>'
    + '<select name="category" id="snCategory" required>'
    + '<option value="" disabled selected>Select a reason for contact</option>'
    + '<option value="artist-submission">Artist Submission</option>'
    + '<option value="report-mistake">Report a Mistake</option>'
    + '<option value="press-media">Press &amp; Media</option>'
    + '<option value="legal">Legal</option>'
    + '<option value="partnership">Partnership</option>'
    + '<option value="feedback">Feedback</option>'
    + '</select></div>'
    + '<div class="sn-row">'
    + '<div class="sn-field"><label>Name</label><input type="text" name="name" placeholder="Your name" required></div>'
    + '<div class="sn-field"><label>Email</label><input type="email" name="email" placeholder="your@email.com" required></div>'
    + '</div>'
    + '<div class="sn-field"><label>Message</label><textarea name="message" placeholder="Tell us more..." required></textarea></div>'
    + '<button type="submit" class="sn-submit" id="snSubmitBtn">Send Message</button>'
    + '</form></div>'
    + '<div class="sn-success" id="snSuccess"><div class="sn-success-icon">✓</div><h3>Message received</h3><p>We\'ll get back to you at the email you provided.</p></div>'
    + '</div></div>';

  var footerHTML = '<div class="sn-footer" id="sn-footer">'
    + '<span class="sn-footer-copy">© 2026 ArtSiren</span>'
    + '<a href="/about.html" class="sn-footer-link">About</a>'
    + '<a href="/terms.html" class="sn-footer-link">Terms of Use</a>'
    + '<a href="/privacy.html" class="sn-footer-link">Privacy Policy</a>'
    + '<a href="#" onclick="openContact();return false;" class="sn-footer-link">Contact</a>'
    + '</div>';

  // ── DOM injection ──
  document.addEventListener('DOMContentLoaded', function () {
    // Remove any existing navbar
    var oldNav = document.querySelector('nav');
    if (oldNav) oldNav.remove();

    // Remove any existing footer-trust/sn-footer
    ['.footer-trust', '.sn-footer', '#sn-footer'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (el) el.remove();
    });

    // Inject navbar at very top of body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Inject modal + footer at end of body
    document.body.insertAdjacentHTML('beforeend', modalHTML + footerHTML);

    // Reveal body
    var guard = document.getElementById('sn-fouc');
    if (guard) guard.remove();
    document.body.style.visibility = '';
  });

  // ── Contact functions ──
  if (!window.openContact) {
    window.openContact = function (category) {
      var overlay = document.getElementById('snOverlay');
      if (!overlay) return;
      // Reset form
      var form = overlay.querySelector('form');
      if (form) form.reset();
      var btn = document.getElementById('snSubmitBtn');
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message'; }
      document.getElementById('snForm').style.display = '';
      document.getElementById('snSuccess').style.display = '';
      // Pre-select category if passed
      if (category) {
        var sel = document.getElementById('snCategory');
        if (sel) sel.value = category;
      }
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    window.closeContact = function () {
      var overlay = document.getElementById('snOverlay');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    window.submitContact = async function (e) {
      e.preventDefault();
      var btn = document.getElementById('snSubmitBtn');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      var fd = new FormData(e.target);
      try {
        await fetch(MAKE_HOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fd.get('name'), email: fd.get('email'),
            created_at: new Date().toISOString(), title: 'contact',
            body: fd.get('message'),
            data: { name: fd.get('name'), email: fd.get('email'), category: fd.get('category'), message: fd.get('message') }
          })
        });
        if (window.gtag) gtag('event', 'contact_submit', { category: fd.get('category') });
        document.getElementById('snForm').style.display = 'none';
        document.getElementById('snSuccess').style.display = 'block';
        setTimeout(window.closeContact, 3000);
      } catch (_) {
        btn.disabled = false;
        btn.textContent = 'Send Message';
        alert('Something went wrong. Please try again.');
      }
    };

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') window.closeContact();
    });
  }

})();
