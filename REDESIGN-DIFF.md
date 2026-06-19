# Redesign Diff — What's in Old Design but Not in New

Last updated: 2026-06-19  
Old design = `master` branch  
New design = `redesign` branch

---

## 1. Filter Bar (Stance + Category)

**Status:** Missing — HTML removed, JS handlers still exist but hit empty querySelectorAll  
**Impact:** Users cannot filter by Boycotters / Welcomes All / Musicians / Actors / Directors

**What to restore:**  
Add this HTML block inside `.container` just above `<div class="grid-header">` in `index.html`:

```html
<div class="filters">
  <div class="filter-group">
    <span class="filter-label">Stance:</span>
    <button class="filter-btn stance-btn active" data-stance="all">All</button>
    <button class="filter-btn stance-btn" data-stance="BOYCOTTER">Boycotters</button>
    <button class="filter-btn stance-btn" data-stance="WELCOMES_ALL">Welcomes All</button>
  </div>
  <div class="filter-group">
    <span class="filter-label">Category:</span>
    <button class="filter-btn category-btn active" data-filter="all">All</button>
    <button class="filter-btn category-btn" data-filter="musician">Musicians</button>
    <button class="filter-btn category-btn" data-filter="actor">Actors</button>
    <button class="filter-btn category-btn" data-filter="director">Directors</button>
  </div>
</div>
```

Style with brand tokens (Navy active state, Electric Blue hover) to match new design.

---

## 2. Level Filter (CRITICAL / HIGH / LOW)

**Status:** Intentionally hidden — `const SHOW_LEVELS = false` in index.html (~line 2357)  
**Data:** Preserved in `ARTISTS_DATABASE` on every artist object + archived in `artist-levels-archive.json`

**What to restore:**  
Change `const SHOW_LEVELS = false;` → `const SHOW_LEVELS = true;`  
JS will auto-inject level buttons into `.filter-bar` (see the if-block below the flag).

---

## 3. Levels Legend ("How Artists Are Classified")

**Status:** Removed along with level filter  
**What to restore:**  
Add this block below the filter bar, and only if `SHOW_LEVELS = true`:

```html
<details class="levels-legend">
  <summary>How Artists Are Classified</summary>
  <div class="legend-grid">
    <div class="legend-item">
      <span class="stance-badge level-CRITICAL">Critical</span>
      <span class="legend-text"><strong>Active Boycott:</strong> Formally declared participation in a boycott of Israel.</span>
    </div>
    <div class="legend-item">
      <span class="stance-badge level-HIGH">High</span>
      <span class="legend-text"><strong>Public Condemnation:</strong> Made strong public statements against Israeli military actions.</span>
    </div>
    <div class="legend-item">
      <span class="stance-badge level-LOW">Low</span>
      <span class="legend-text"><strong>Signed Declaration:</strong> Signed a petition or solidarity statement.</span>
    </div>
  </div>
</details>
```

---

## 4. PWA Manifest Link

**Status:** Missing from `<head>` in redesign  
**Impact:** "Add to Home Screen" / installable app functionality broken

**What to restore:**  
Add inside `<head>` in `index.html`:

```html
<link rel="manifest" href="/manifest.json">
```

The `manifest.json` file already exists in the repo.

---

## 5. Secondary Pages — Not Redesigned Yet

**Status:** Still showing old design (dark navbar, old colors, old typography)

| Page | File | Priority |
|------|------|----------|
| About | `about.html` | High |
| How It Works / Extension | `extension.html` | High |
| Terms of Use | `terms.html` | Low |
| Privacy Policy | `privacy.html` | Low |
| Sources | `sources.html` | Medium (already partially updated) |

**What to do:** Apply new navbar, Poppins font, brand tokens (Navy `#0C233E`, Blue `#1C5FEA`, Coral `#F44634`) to each page. Use `sources.html` as a reference — it already uses the new brand language.

---

## 6. Install Guide Modal

**Status:** Still uses old dark design (`#000940`, `#44D7FF` cyan)  
**Location:** `index.html` — `showInstallGuide()` function, inline styles  
**What to do:** Restyle modal to use `--navy`, `--blue`, `--border`, Poppins — matching the artist detail modal style.

---

## 7. Orphan Elements (Clean Up)

These exist in the redesign but are no longer needed:

| Element | Location | Action |
|---------|----------|--------|
| `#mobile-add-btn` (old PWA button) | `index.html` nav-right HTML + CSS | Remove — replaced by `mob-get-app` |
| `#000940` color references (8 total) | `index.html` — theme-color meta, install modal inline styles, one gradient | Replace with `#0C233E` (Navy) |

---

## How to Use This File

- Work through items top-to-bottom by priority before or after merging to master
- Check off items by replacing `**Status:** Missing` with `**Status:** ✅ Done — [date]`
- Items 2 and 3 (levels) are intentional — only restore if the product decision changes
