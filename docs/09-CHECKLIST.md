# 09 — Pre-Launch Checklist

> Cross-referenced against all docs (01→08). Check each item before shipping to production.
> Priority codes: 🔴 P0 (blocker) · 🟡 P1 (should) · 🟢 P2 (nice-to-have)

---

## 0. Client Sign-Off (before dev starts)

- [ ] 🔴 Client confirms domain: `fixis.fr` or alternative
- [ ] 🔴 Client provides: full name, SIRET number, legal address (for Mentions légales)
- [ ] 🔴 Client provides: contact email, phone number, LinkedIn URL
- [ ] 🔴 Client fills in all `[bracket]` placeholders in `07-CONTENT.md` (name, years of experience, project count, sectors, stats)
- [ ] 🔴 Client confirms layout choice: Option A (single page) or Option B (two pages) — see `02-SITEMAP.md`
- [ ] 🟡 Client provides photo (or approves abstract visual placeholder for About section)
- [ ] 🟡 Client confirms or provides client logos for Trust section (or approves stats-only fallback)
- [ ] 🟡 Client confirms or provides testimonial quote for Trust section
- [ ] 🟡 Client reviews and approves Politique de Confidentialité draft (see `07-CONTENT.md §9.2`)

---

## 1. Project Setup

- [ ] 🔴 Repository created and initialised (`git init`, `.gitignore`)
- [ ] 🔴 Astro project scaffolded (`npm create astro@latest`)
- [ ] 🔴 Tailwind CSS integrated (`npx astro add tailwind`)
- [ ] 🔴 Required packages installed: `lucide-astro`, `@astrojs/sitemap`, `resend`, `@astrojs/vercel`
- [ ] 🔴 `astro.config.mjs` configured (`output: 'hybrid'`, Vercel adapter, sitemap integration) — see `06-TECH-STACK.md §8`
- [ ] 🔴 `tailwind.config.mjs` configured with brand colors and font families — see `06-TECH-STACK.md §2`
- [ ] 🔴 Folder structure matches spec: `src/components/`, `src/i18n/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/utils/` — see `06-TECH-STACK.md §1`
- [ ] 🔴 Design system tokens in `src/styles/tokens.css` (all CSS custom properties) — see `05-DESIGN-SYSTEM.md §1–§8`
- [ ] 🔴 `src/styles/global.css` and `src/styles/animations.css` created
- [ ] 🔴 Google Fonts imported: **Syne** (400/600/700/800) + **Source Serif 4** (300/400/italic) with `font-display: swap`
- [ ] 🟡 Fonts self-hosted as fallback for performance (copies in `public/fonts/`)

---

## 2. i18n / Content

- [ ] 🔴 `src/i18n/fr.json` fully populated — all keys from `07-CONTENT.md §10`
- [ ] 🔴 `src/i18n/en.json` fully populated — EN parity with FR for all keys
- [ ] 🔴 `[bracket]` placeholders replaced with real client data in both JSON files
- [ ] 🔴 `src/utils/i18n.ts` utility implemented (`t(lang, key)` function) — see `06-TECH-STACK.md §3`
- [ ] 🔴 Language stored in `localStorage` as `fixis_lang`
- [ ] 🔴 First-visit language detection via `navigator.language` (default: `fr`)
- [ ] 🔴 `<html lang="">` attribute updates on language switch — FR-LANG-05
- [ ] 🔴 All form validation error messages localised in both languages — FR-LANG-06
- [ ] 🟡 Language preference persisted across sessions — FR-LANG-03

---

## 3. Components

### 3.1 Navigation (`Nav.astro`)

- [ ] 🔴 FiXiS wordmark visible, links to `#hero` — FR-NAV-01
- [ ] 🔴 Smooth scroll to anchors on nav link click — FR-NAV-02
- [ ] 🔴 Mobile hamburger at `< 768px`, opens full-screen overlay — FR-NAV-04
- [ ] 🔴 `aria-label` on hamburger and language toggle buttons — FR-A11Y-06
- [ ] 🟡 Nav becomes sticky after scrolling past hero (backdrop blur) — FR-NAV-03
- [ ] 🟡 Language toggle visible in nav and functional — FR-LANG-02
- [ ] 🟢 Active section highlighted in nav on scroll — FR-NAV-05

### 3.2 Hero (`Hero.astro`)

- [ ] 🔴 Headline, sub-headline, and CTA visible on load — FR-HERO-01
- [ ] 🔴 Section fills viewport: `min-height: 100svh` — FR-HERO-02
- [ ] 🔴 CTA button links to `#contact`
- [ ] 🔴 Dark background (`#0A0A0A`), large display type, yellow CTA button (sharp corners, no border-radius)
- [ ] 🟡 Staggered entrance animation: headline → sub-headline → CTA (total < 1.2s) — FR-HERO-03
- [ ] 🟡 Abstract geometric / typographic visual element in right column (desktop) — FR-HERO-04
- [ ] 🟢 Scroll indicator (arrow/text) fades after first scroll — FR-HERO-05

### 3.3 Services (`Services.astro`)

- [ ] 🔴 4 service cards rendered with number, title, and description — FR-SERV-01
- [ ] 🔴 All copy fully localised — FR-SERV-02
- [ ] 🔴 Responsive grid: 4-col desktop, 2-col tablet, 1-col mobile — FR-SERV-04
- [ ] 🟡 Hover state: yellow border + subtle yellow background tint, transition < 200ms — FR-SERV-03

### 3.4 About (`About.astro`)

- [ ] 🔴 Bio text (2 paragraphs) and credentials list displayed — FR-ABOUT-01
- [ ] 🔴 Photo present or placeholder space reserved — FR-ABOUT-02
- [ ] 🔴 Green background (`#1B8F3A`) distinguishes section — FR-ABOUT-04
- [ ] 🟡 Credentials list uses yellow dot/dash marker — FR-ABOUT-03

### 3.5 Trust (`Trust.astro`)

- [ ] 🔴 At least one trust element present: client logos OR key stats block — FR-TRUST-01
- [ ] 🟡 Stats displayed as large typographic numbers with labels — FR-TRUST-02
- [ ] 🟢 Testimonial quote block rendered (or hidden if not available) — FR-TRUST-03

### 3.6 Contact (`Contact.astro` — form island)

- [ ] 🔴 Subject chips rendered above form, fully functional (single selection, required) — `08-CONTACT-SPEC.md §3`
- [ ] 🔴 All form fields present: Name, Company, Email, Phone (optional), Message — FR-CONT-01
- [ ] 🔴 GDPR consent checkbox with link to privacy policy — FR-CONT-03
- [ ] 🔴 Honeypot field `_trap` hidden and functional — FR-CONT-07
- [ ] 🔴 Client-side validation on submit: all required fields, email format, GDPR — FR-CONT-02
- [ ] 🔴 Inline error messages below each field in active language — `08-CONTACT-SPEC.md §5`
- [ ] 🔴 `aria-live="polite"` region for error announcements — `08-CONTACT-SPEC.md §9`
- [ ] 🔴 `aria-describedby` linking fields to their error elements
- [ ] 🔴 Submit calls `POST /api/contact`, handles loading/success/error states — `08-CONTACT-SPEC.md §6`
- [ ] 🔴 Success state: form replaced in-place with animated checkmark + confirmation message — FR-CONT-05
- [ ] 🔴 Error state: error banner above submit, fallback email shown — FR-CONT-06
- [ ] 🔴 All form fields keyboard-accessible, visible focus states — FR-CONT-08
- [ ] 🔴 Component loaded as `client:visible` Astro island — `08-CONTACT-SPEC.md §10`
- [ ] 🟡 Direct contact info (email, phone, LinkedIn, location, response time) displayed — FR-CONT-09
- [ ] 🟡 Subject chips use `role="listbox"` / `role="option"` + `aria-selected` — `08-CONTACT-SPEC.md §3`
- [ ] 🟡 Textarea auto-expands with content (up to 10 rows) — `08-CONTACT-SPEC.md §4`
- [ ] 🟢 Form fields animate in on scroll into view — FR-CONT-12

### 3.7 Footer (`Footer.astro`)

- [ ] 🔴 FiXiS wordmark, tagline displayed
- [ ] 🔴 Links to `mentions-legales` and `politique-confidentialite` pages
- [ ] 🔴 Language toggle present and functional — FR-LANG-02
- [ ] 🔴 Copyright year dynamic (`© {year}`)

### 3.8 UI Components

- [ ] 🔴 `Button.astro`: primary (yellow, sharp) and ghost variants — see `05-DESIGN-SYSTEM.md §7`
- [ ] 🔴 `ServiceCard.astro`: border, hover state with yellow, number + title + description
- [ ] 🔴 `LangToggle.astro`: accessible toggle with `aria-label`

---

## 4. Pages

- [ ] 🔴 `src/pages/index.astro` — main landing page with all sections
- [ ] 🔴 `src/pages/mentions-legales.astro` — legal notices page with real client data — FR-LEGAL-01
- [ ] 🔴 `src/pages/politique-confidentialite.astro` — GDPR privacy policy page — FR-LEGAL-02
- [ ] 🔴 All pages use `BaseLayout.astro` wrapper

---

## 5. API & Backend

- [ ] 🔴 `src/pages/api/contact.ts` endpoint created — `06-TECH-STACK.md §4`
- [ ] 🔴 Honeypot check: silent 200 if `_trap` is non-empty — `08-CONTACT-SPEC.md §7`
- [ ] 🔴 Server-side re-validation of all required fields — `08-CONTACT-SPEC.md §7`
- [ ] 🔴 Email sent via Resend to `contact@fixis.fr` with `replyTo` set to sender email — `06-TECH-STACK.md §4`
- [ ] 🔴 Email template includes: name, company, email, phone, subject, message, date, IP — `08-CONTACT-SPEC.md §7`
- [ ] 🔴 `RESEND_API_KEY` environment variable set (never committed to git)
- [ ] 🟡 Rate limiting: max 5 submissions per IP per hour (Vercel Edge middleware) — `08-CONTACT-SPEC.md §7`
- [ ] 🟡 hCaptcha invisible integration on form submit — FR-CONT-07, `06-TECH-STACK.md §4`
- [ ] 🟡 `HCAPTCHA_SECRET` and `PUBLIC_HCAPTCHA_SITEKEY` env vars set

---

## 6. SEO & Meta

- [ ] 🔴 Unique `<title>` set: "FiXiS — Consulting SAP Finance Indépendant" (FR) — FR-SEO-01
- [ ] 🔴 Meta description set (≤ 160 chars) for all pages — FR-SEO-01
- [ ] 🔴 `<link rel="canonical">` on all pages — FR-SEO-04
- [ ] 🔴 `sitemap.xml` accessible at `https://fixis.fr/sitemap.xml` — FR-SEO-05
- [ ] 🔴 `robots.txt` accessible at root with `Disallow: /api/` — FR-SEO-05
- [ ] 🟡 Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url` — FR-SEO-02
- [ ] 🟡 `og:image` created and placed in `public/og-image.jpg` (1200×630)
- [ ] 🟡 JSON-LD structured data (Schema.org `LocalBusiness` or `Person`) in `<head>` — FR-SEO-03
- [ ] 🟡 Hreflang tags: `<link rel="alternate" hreflang="fr">` and `hreflang="en">` — FR-SEO-06

---

## 7. Accessibility

- [ ] 🔴 WCAG 2.1 AA — verified with axe DevTools — FR-A11Y-01
- [ ] 🔴 Colour contrast ratios ≥ 4.5:1 (text on yellow, text on dark) — FR-A11Y-02
- [ ] 🔴 All images have `alt` attributes (decorative: `alt=""`, informative: descriptive) — FR-A11Y-03
- [ ] 🔴 `@media (prefers-reduced-motion: reduce)` disables/reduces all animations — FR-A11Y-04
- [ ] 🔴 `aria-label` on hamburger, language toggle, LinkedIn icon — FR-A11Y-06
- [ ] 🟡 Skip-to-main-content link at top of DOM, visible on focus — FR-A11Y-05

---

## 8. Responsive Design

- [ ] 🔴 No horizontal scroll at 375px (iPhone SE) — FR-RESP-01
- [ ] 🔴 Layout adapts gracefully at 768px (tablet portrait) — FR-RESP-02
- [ ] 🔴 Max content width applied at 1440px+ (`--max-width: 1320px`) — FR-RESP-03
- [ ] 🔴 All touch targets ≥ 44×44px on mobile — FR-RESP-04
- [ ] 🔴 Mobile nav overlay functional and full-screen — FR-NAV-04

---

## 9. Performance

- [ ] 🔴 Lighthouse Performance ≥ 90 (mobile) — FR-PERF-01
- [ ] 🔴 Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 — FR-PERF-02
- [ ] 🔴 All below-fold images use `loading="lazy"` — FR-PERF-03
- [ ] 🔴 `font-display: swap` set for all font faces — FR-PERF-04
- [ ] 🔴 Hero image (if any) exported as WebP, < 80kb
- [ ] 🔴 Total page weight < 200kb (initial load) — `06-TECH-STACK.md §9`
- [ ] 🔴 Client JS < 20kb gzipped — `06-TECH-STACK.md §9`
- [ ] 🔴 Contact form JS < 8kb gzipped — `08-CONTACT-SPEC.md §10`
- [ ] 🟡 Fonts self-hosted (from `public/fonts/`) for zero external DNS lookup

---

## 10. Legal & GDPR

- [ ] 🔴 Mentions légales page live with real data (publisher identity, SIRET, hosting details) — FR-LEGAL-01
- [ ] 🔴 Politique de confidentialité live (data collected, purpose, retention, rights) — FR-LEGAL-02
- [ ] 🔴 GDPR consent checkbox present and required on contact form — FR-CONT-03
- [ ] 🔴 No personal data stored client-side without consent (no localStorage of form data) — FR-LEGAL-04
- [ ] 🔴 Resend domain verified, sending from `contact@fixis.fr`
- [ ] 🔴 Cookie consent banner shown only if analytics/tracking cookies are used — FR-LEGAL-03
- [ ] 🔴 Umami analytics configured as cookie-free (no consent banner required if using Umami)
- [ ] 🟡 IP address note in privacy policy (Vercel logs, 30-day retention) — `08-CONTACT-SPEC.md §11`

---

## 11. Deployment & Infrastructure

- [ ] 🔴 Domain `fixis.fr` registered
- [ ] 🔴 DNS managed via Cloudflare (or OVH) — `06-TECH-STACK.md §7`
- [ ] 🔴 Project deployed to Vercel, linked to Git repository
- [ ] 🔴 Vercel environment variables set: `RESEND_API_KEY`, `HCAPTCHA_SECRET`, `PUBLIC_HCAPTCHA_SITEKEY`
- [ ] 🔴 Custom domain configured in Vercel (DNS A/CNAME records added)
- [ ] 🔴 HTTPS active and forced (auto via Vercel)
- [ ] 🔴 Email mailbox `contact@fixis.fr` configured and receiving mail
- [ ] 🔴 Test form submission received at `contact@fixis.fr` on production
- [ ] 🟡 Umami analytics script added to `BaseLayout.astro` — `06-TECH-STACK.md §6`
- [ ] 🟡 Favicon added to `public/favicon.ico` (and `favicon.svg` for modern browsers)
- [ ] 🟢 Preview deployments working on PRs

---

## 12. Cross-Browser & Device Testing

- [ ] 🔴 Chrome / Edge (latest) — desktop
- [ ] 🔴 Firefox (latest) — desktop
- [ ] 🔴 Safari (latest) — desktop + iOS
- [ ] 🔴 Chrome (latest) — Android
- [ ] 🔴 iPhone SE (375px) — iOS Safari
- [ ] 🔴 iPhone 14 (390px) — iOS Safari
- [ ] 🟡 iPad (768px) — Safari
- [ ] 🟡 Large desktop (1920px+) — no layout breakage

---

## 13. Content Final Review

- [ ] 🔴 All `[bracket]` placeholders replaced in both FR and EN JSON files
- [ ] 🔴 All copy proofread (FR) by a native French speaker
- [ ] 🔴 All copy proofread (EN)
- [ ] 🔴 Contact email, phone, and LinkedIn URL correct and functional
- [ ] 🔴 Legal page data verified by client (SIRET, address, legal form)
- [ ] 🟡 Testimonial quote approved by quoted person (if used)
- [ ] 🟡 Client logos approved for use (if used)
- [ ] 🟡 Photo approved and optimised (WebP, ≤ 120kb)

---

## 14. Final Smoke Test (production URL)

- [ ] 🔴 Site loads at `https://fixis.fr` without errors
- [ ] 🔴 All anchor navigation links work (Services, À propos, Contact)
- [ ] 🔴 Language toggle switches FR ↔ EN without page reload
- [ ] 🔴 Contact form submits successfully and email received at `contact@fixis.fr`
- [ ] 🔴 Contact form success state displays correctly
- [ ] 🔴 Contact form shows error state on API failure (test with invalid key)
- [ ] 🔴 Mentions légales and Politique de confidentialité pages accessible
- [ ] 🔴 Footer links functional
- [ ] 🔴 Mobile nav opens and closes correctly
- [ ] 🔴 `https://fixis.fr/sitemap.xml` returns valid XML
- [ ] 🔴 `https://fixis.fr/robots.txt` returns correct content
- [ ] 🔴 PageSpeed Insights score ≥ 90 (mobile) at production URL
- [ ] 🟡 No console errors in any browser
- [ ] 🟡 Hreflang tags validated (Google Search Console)

---

## Quick Reference: Success Metrics (from `01-BRIEF.md §7`)

| Metric | Target | Status |
|--------|--------|--------|
| Contact form submissions | ≥ 2/month | — |
| Bounce rate | < 60% | — |
| Avg. time on site | > 1:30 | — |
| Mobile Lighthouse score | > 90 | — |
| Performance Lighthouse score | > 90 | — |

*Track via Umami after 3 months of live operation.*
