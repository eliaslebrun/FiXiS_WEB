# 02 — Sitemap

## Option A — Single Page (Recommended)

All content lives on one scrollable page. The contact form is reachable via anchor scroll. This maximises impact, minimises bounce, and keeps the codebase lean.

```
fixis.fr/
│
├── #hero              → Headline, tagline, primary CTA ("Parlons-en" / "Let's talk")
├── #services          → SAP expertise areas (3–4 tiles)
├── #about             → Short bio / positioning paragraph + photo or abstract visual
├── #trust             → Social proof (client logos OR a short quote/stat block)
└── #contact           → Full contact form + direct contact info

fixis.fr/mentions-legales   → Legal notices (required by French law, linked in footer)
fixis.fr/politique-confidentialite → Privacy policy (GDPR, linked in footer)
```

### Navigation (single-page)

```
[ FiXiS ]  ·  Services  ·  À propos  ·  Contact       [ FR | EN ]
```

- Logo/name → scrolls to top / #hero
- Nav items → smooth scroll to anchors
- Language toggle → swaps i18n context, reloads in place (no page navigation)
- On mobile: hamburger → full-screen overlay menu

---

## Option B — Two Pages

Split landing and contact into separate routes. Allows a richer contact experience with its own visual moment.

```
fixis.fr/                    → Landing page
│
├── #hero
├── #services
├── #about
└── #trust + CTA → /contact

fixis.fr/contact             → Dedicated contact page
│
├── Intro headline
├── Contact form
└── Alternative contact methods

fixis.fr/mentions-legales    → Legal notices
fixis.fr/politique-confidentialite → Privacy policy
```

### Navigation (two-page)

```
[ FiXiS ]  ·  Services  ·  À propos  ·  Contact (→ /contact)     [ FR | EN ]
```

---

## Recommendation

**→ Option A (single page)** unless the client wants a more ceremonial, dedicated contact moment. The single-page approach performs better for the target audience (busy decision-makers who don't want to click around).

The contact form can still be given its own full-viewport section that feels like a "page" within the scroll experience.

---

## URL Structure

| Route | Purpose | FR slug | EN slug |
|-------|---------|---------|---------|
| `/` | Main landing (or full single page) | `/` | `/` |
| `/contact` | Contact page (Option B only) | `/contact` | `/contact` |
| `/mentions-legales` | French legal requirement | `/mentions-legales` | `/legal` |
| `/politique-confidentialite` | GDPR privacy policy | `/politique-confidentialite` | `/privacy` |

*Note: FR slugs are canonical. EN routes redirect to canonical or use URL params (`?lang=en`).*

---

## Sitemap XML (for SEO)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://fixis.fr/</loc>
    <priority>1.0</priority>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://fixis.fr/mentions-legales</loc>
    <priority>0.1</priority>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://fixis.fr/politique-confidentialite</loc>
    <priority>0.1</priority>
    <changefreq>yearly</changefreq>
  </url>
</urlset>
```

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://fixis.fr/sitemap.xml
```
