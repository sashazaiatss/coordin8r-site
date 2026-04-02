# Coordin8r Corporate Website — Claude Code Instructions

## Overview
This is a static HTML/CSS website for Coordin8r, a capacity planning SaaS for small project-based service firms.

**No build tools required.** Pure HTML + CSS + vanilla JS. No React, no Node, no bundler.

---

## File Structure

```
coordin8r-site/
├── index.html              ← Homepage (main landing page)
├── css/
│   └── global.css          ← Shared styles, tokens, nav, footer, buttons
└── pages/
    ├── features.html        ← Features deep-dive page
    ├── who.html             ← Who it's for page
    ├── pricing.html         ← Pricing page with FAQ accordion
    ├── signup.html          ← Sign up / free trial page
    ├── contact.html         ← Contact form page
    ├── privacy.html         ← Privacy policy
    └── terms.html           ← Terms of service
```

---

## How to Preview Locally

### Option 1 — Python (simplest, no install needed)
```bash
cd coordin8r-site
python3 -m http.server 3000
```
Then open: http://localhost:3000

### Option 2 — VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option 3 — npx serve (if Node is installed)
```bash
npx serve coordin8r-site
```

---

## Design System

All design tokens are in `css/global.css` under `:root {}`.

| Token | Value | Usage |
|-------|-------|-------|
| `--blue` | `#083A76` | Primary brand color, buttons, links |
| `--blue-light` | `#1254A8` | Hover states |
| `--blue-dim` | `#DBEAFE` | Chip backgrounds, icon backgrounds |
| `--blue-pale` | `#EDF4FB` | Labels on dark backgrounds |
| `--navy` | `#0F172A` | Dark section backgrounds, headings |
| `--slate` | `#334155` | Body text |
| `--muted` | `#64748B` | Secondary text |
| `--border` | `#E2E8F0` | Borders, dividers |
| `--amber` | `#F59E0B` | At-risk warning state |
| `--red` | `#EF4444` | Overloaded / critical state |

**Fonts:**
- `DM Serif Display` — headings, hero text, quotes
- `DM Sans` — all body text, UI labels

**Border radii:** `--radius-sm` 8px · `--radius-md` 12px · `--radius-lg` 16px · `--radius-xl` 20px

---

## Page-by-Page Notes

### index.html (Homepage)
- Has its own `<style>` block for page-specific styles (hero, dashboard mockup, sections)
- The dashboard mockup is pure HTML/CSS — no images
- Capacity bars animate on scroll via IntersectionObserver

### pages/features.html
- Alternating two-column layout (text + visual mockup)
- `.feature-detail.reverse` uses `direction: rtl` to flip layout on alternating rows

### pages/pricing.html
- Includes a working FAQ accordion — JS is inline at bottom of page
- Grayed-out features use `.price-features li.muted`

### pages/signup.html
- Full-page split layout (no fixed nav — intentionally clean)
- Form is UI only — wire to your backend/auth provider

### pages/contact.html
- Form is UI only — wire to your backend or a service like Formspree

---

## Navigation

All nav links are relative paths:
- From `index.html` → `pages/features.html`
- From `pages/*.html` → `../index.html` and `features.html` (same directory)

Do not change this structure without updating all `href` values.

---

## Making Changes

**To update colors:** Edit `:root {}` in `css/global.css`. Changes apply everywhere.

**To add a new page:**
1. Copy the closest existing page as a template
2. Update the `<title>` and `<meta name="description">`
3. Update the `class="active"` on the correct nav link
4. Update `href` paths to use `../` prefix for assets

**To update nav or footer:** Edit each HTML file individually (no templating engine — it's intentionally simple).

---

## Deployment (when ready)

This site is ready to deploy to:
- **Netlify** — drag and drop the `coordin8r-site/` folder
- **Vercel** — `vercel --prod` from the `coordin8r-site/` directory
- **GitHub Pages** — push to a repo, set Pages source to root or `/docs`
- **Any static host** — it's plain HTML, no server required

> ⚠️ Do not deploy until Sasha has reviewed and approved the preview.

---

## Out of Scope (do not add without direction)

- CMS or dynamic content
- Blog or changelog
- Client portal
- Mobile app deep links
- Analytics (add later — Plausible or Fathom recommended)
- Cookie consent banner (add before public launch)
