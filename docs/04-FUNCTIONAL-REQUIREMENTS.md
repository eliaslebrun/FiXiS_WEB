# 04 — Functional Requirements

> Version 1.0 — V1 scope only
> Format: FR-[section]-[number] | Priority: P0 (must), P1 (should), P2 (nice-to-have)

---

## FR-NAV — Navigation

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-NAV-01 | Site logo/name is visible in the top nav at all times | P0 | Logo visible on all viewports; clicking returns to top/#hero |
| FR-NAV-02 | Navigation links scroll smoothly to their anchor sections | P0 | Click on "Services" → smooth scroll to #services; URL updates to `/#services` |
| FR-NAV-03 | Nav becomes sticky after scrolling past the hero | P1 | Nav fixed to top after 100px scroll; subtle background backdrop |
| FR-NAV-04 | Mobile nav collapses to hamburger | P0 | At < 768px, nav links hidden; hamburger icon shown; tap opens full overlay |
| FR-NAV-05 | Active section is highlighted in nav | P2 | Nav link matching current scroll position has active style |

---

## FR-LANG — Internationalisation

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-LANG-01 | All user-facing copy exists in FR and EN | P0 | Full parity of content across languages; no untranslated strings |
| FR-LANG-02 | Language toggle visible in nav and footer | P0 | Clicking FR/EN swaps all copy without page reload |
| FR-LANG-03 | Language preference is persisted | P1 | Choice stored in localStorage; respected on return visits |
| FR-LANG-04 | Browser language detection on first visit | P2 | If navigator.language is 'en-*', default to EN; otherwise FR |
| FR-LANG-05 | HTML lang attribute updates on switch | P0 | `<html lang="fr">` or `<html lang="en">` reflects current language |
| FR-LANG-06 | Contact form error messages are localised | P0 | All form validation messages appear in the active language |

---

## FR-HERO — Hero Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-HERO-01 | Headline, sub-headline, and primary CTA are visible on load | P0 | All three elements present; CTA links to #contact |
| FR-HERO-02 | Hero section fills the viewport on load | P0 | min-height: 100svh |
| FR-HERO-03 | Staggered entrance animation on page load | P1 | Elements reveal with delay: headline → subhead → CTA (total < 1.2s) |
| FR-HERO-04 | Visual/decorative element present | P1 | Abstract graphic, typography art, or geometric fills right column |
| FR-HERO-05 | Scroll indicator present | P2 | Arrow or "Scroll" label at bottom center; fades after first scroll |

---

## FR-SERV — Services Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-SERV-01 | 3–4 service areas are displayed | P0 | Each with numbered label, title, and 1–2 line description |
| FR-SERV-02 | Services are fully localised | P0 | All service copy in active language |
| FR-SERV-03 | Cards have hover interaction | P1 | Hover changes border/background to yellow accent; transition < 200ms |
| FR-SERV-04 | Responsive grid layout | P0 | 4-col desktop, 2-col tablet, 1-col mobile |

---

## FR-ABOUT — About Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-ABOUT-01 | About text and key credentials are displayed | P0 | Bio paragraph + credential list visible |
| FR-ABOUT-02 | Photo or visual placeholder is present | P0 | Space reserved; placeholder shown if no photo provided |
| FR-ABOUT-03 | Credentials list uses bullet/icon markers | P1 | Yellow dot or dash as list marker |
| FR-ABOUT-04 | Section has distinct visual treatment from adjacent sections | P0 | Green background (#1B8F3A) differentiates section |

---

## FR-TRUST — Trust / Social Proof Section

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-TRUST-01 | Client logos OR key stats are displayed | P0 | At least one trust element present (logos or stats) |
| FR-TRUST-02 | Stats formatted for visual impact | P1 | Large typographic numbers with labels (e.g., "15 ans d'expérience") |
| FR-TRUST-03 | Optional testimonial quote | P2 | Blockquote with attribution; can be hidden if not available |

---

## FR-CONTACT — Contact Form

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-CONT-01 | Form fields: Prénom/Nom, Entreprise, Email, Téléphone (optional), Sujet (select/chips), Message | P0 | All fields present; optional fields clearly labelled |
| FR-CONT-02 | Client-side validation before submit | P0 | Required fields validated; email format checked; error messages appear inline below field |
| FR-CONT-03 | GDPR consent checkbox required | P0 | Form cannot be submitted without ticking consent; links to privacy policy |
| FR-CONT-04 | Form submission sends email notification | P0 | Email received at contact@fixis.fr within 60 seconds of submit |
| FR-CONT-05 | Success state replaces form on submission | P0 | Animated confirmation message shown; no page reload |
| FR-CONT-06 | Error state handled (API failure) | P0 | User shown an error message with fallback email address |
| FR-CONT-07 | Anti-spam protection | P0 | Honeypot field OR CAPTCHA (prefer invisible reCAPTCHA v3 or hCaptcha) |
| FR-CONT-08 | Form is fully keyboard-accessible | P0 | All fields reachable and usable via keyboard; focus states visible |
| FR-CONT-09 | Direct contact info displayed alongside form | P1 | Email, phone, LinkedIn visible near the form |
| FR-CONT-10 | Subject selection uses visual chips/pills, not raw `<select>` | P1 | Clickable topic tags pre-fill the subject; UX delight |
| FR-CONT-11 | Phone field has country code prefix | P2 | Dropdown or detected country prefix (+33 default) |
| FR-CONT-12 | Form fields animate in on scroll into view | P2 | Staggered reveal when section enters viewport |

---

## FR-PERF — Performance

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-PERF-01 | Lighthouse Performance score ≥ 90 (mobile) | P0 | Measured on production build |
| FR-PERF-02 | Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1 | P0 | Verified via PageSpeed Insights |
| FR-PERF-03 | Images use modern format (WebP/AVIF) and lazy-loading | P0 | `<img loading="lazy">` on all below-fold images |
| FR-PERF-04 | Fonts loaded efficiently (font-display: swap) | P0 | No FOIT; use `font-display: swap` |

---

## FR-A11Y — Accessibility

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-A11Y-01 | WCAG 2.1 AA compliance | P0 | Automated + manual check (axe DevTools) |
| FR-A11Y-02 | Colour contrast ratios meet WCAG AA | P0 | Text on yellow: contrast ≥ 4.5:1; text on dark: contrast ≥ 4.5:1 |
| FR-A11Y-03 | All images have alt text | P0 | Decorative images: `alt=""`; informative images: descriptive alt |
| FR-A11Y-04 | Reduced motion respected | P0 | `@media (prefers-reduced-motion: reduce)` disables/reduces animations |
| FR-A11Y-05 | Skip to main content link | P1 | Hidden link at top of DOM, visible on focus |
| FR-A11Y-06 | ARIA labels on icon buttons | P0 | Hamburger, language toggle, LinkedIn icon all have aria-label |

---

## FR-SEO — SEO & Meta

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-SEO-01 | Unique `<title>` and meta description per page | P0 | Title: "FiXiS — Consulting SAP"; description ≤ 160 chars |
| FR-SEO-02 | Open Graph tags present | P1 | og:title, og:description, og:image, og:url |
| FR-SEO-03 | Structured data (Schema.org/LocalBusiness or Person) | P1 | JSON-LD block in `<head>` |
| FR-SEO-04 | Canonical URL set | P0 | `<link rel="canonical">` on all pages |
| FR-SEO-05 | sitemap.xml and robots.txt present | P0 | Both accessible at root domain |
| FR-SEO-06 | Hreflang for FR/EN | P1 | `<link rel="alternate" hreflang="fr">` and `hreflang="en"` |

---

## FR-LEGAL — Legal (France)

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-LEGAL-01 | Mentions légales page accessible from footer | P0 | Page includes: publisher identity, host details, SIRET |
| FR-LEGAL-02 | Politique de confidentialité accessible from footer | P0 | GDPR-compliant: data collected, purpose, retention, rights |
| FR-LEGAL-03 | Cookie consent banner (if analytics/tracking used) | P0 | Explicit opt-in before any non-essential cookies are set |
| FR-LEGAL-04 | No personal data stored client-side without consent | P0 | Form data not persisted to localStorage/sessionStorage |

---

## FR-RESP — Responsive Design

| ID | Requirement | Priority | Acceptance Criteria |
|----|-------------|----------|---------------------|
| FR-RESP-01 | Site functions at 375px width (iPhone SE) | P0 | No horizontal scroll; all content readable |
| FR-RESP-02 | Site functions at 768px (tablet portrait) | P0 | Layout adjusts gracefully |
| FR-RESP-03 | Site functions at 1440px+ (large desktop) | P0 | Max content width applied; no extreme stretching |
| FR-RESP-04 | Touch targets ≥ 44×44px on mobile | P0 | All interactive elements meet minimum tap target size |
