# 03 — Wireframes

> ASCII wireframes. All measurements are proportional guides, not pixel values.
> Breakpoints: Mobile (< 768px), Tablet (768–1199px), Desktop (≥ 1200px)

---

## W1 — Navigation Bar (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FiXiS                  Services    À propos    Contact        FR | EN  │
│  ─────                                                                  │
└─────────────────────────────────────────────────────────────────────────┘

- Logo: wordmark "FiXiS" in display font, left-aligned
- Nav links: center or right cluster (spaced, uppercase tracking)
- Lang toggle: rightmost, minimal — "FR" active state underlined or filled
- On scroll: nav collapses to compact sticky bar with slight bg blur
- Mobile: logo left, hamburger icon right
```

---

## W2 — Navigation Bar (Mobile)

```
┌──────────────────────┐
│  FiXiS           ☰  │
└──────────────────────┘

On hamburger tap → full-screen overlay:

┌──────────────────────┐
│                    ✕ │
│                      │
│   Services           │
│                      │
│   À propos           │
│                      │
│   Contact            │
│                      │
│   FR | EN            │
│                      │
└──────────────────────┘
```

---

## W3 — Section 1: HERO (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                                                                         │
│   EXPERTISE SAP.                         ┌─────────────────────────┐   │
│   RÉSULTATS CONCRETS.                    │                         │   │
│                                          │   [Abstract geometric   │   │
│   Consulting SAP pour entreprises        │    visual / texture /   │   │
│   en transformation.                     │    typographic art]     │   │
│                                          │                         │   │
│   ┌────────────────────┐                 └─────────────────────────┘   │
│   │  Parlons-en →      │  (CTA — yellow bg)                            │
│   └────────────────────┘                                               │
│                                                                         │
│   ↓ scroll                                                              │
└─────────────────────────────────────────────────────────────────────────┘

Layout notes:
- Full viewport height (100svh)
- Dark background (#0A0A0A)
- Headline: very large, possibly 2 lines, left column
- Visual element: right column, could be an abstract yellow/green geometric
- CTA button: yellow fill, dark text, sharp rectangular — no border-radius
- Scroll indicator: subtle arrow or text at bottom
```

---

## W4 — Section 1: HERO (Mobile)

```
┌──────────────────────┐
│                      │
│  [Visual element]    │
│  abstract, top third │
│                      │
│  EXPERTISE SAP.      │
│  RÉSULTATS           │
│  CONCRETS.           │
│                      │
│  Consulting SAP      │
│  pour entreprises    │
│  en transformation.  │
│                      │
│  ┌──────────────┐    │
│  │ Parlons-en → │    │
│  └──────────────┘    │
│                      │
└──────────────────────┘
```

---

## W5 — Section 2: SERVICES (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Ce que je fais                                                        │
│   ───────────────                                                       │
│                                                                         │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│   │ 01           │  │ 02           │  │ 03           │  │ 04        │ │
│   │              │  │              │  │              │  │           │ │
│   │ Implémen-    │  │ Migration    │  │ Formation    │  │ Support & │ │
│   │ tation SAP   │  │ S/4HANA      │  │ & Change     │  │ Optimisa- │ │
│   │              │  │              │  │ Management   │  │ tion      │ │
│   │ Short desc   │  │ Short desc   │  │ Short desc   │  │ Short desc│ │
│   └──────────────┘  └──────────────┘  └──────────────┘  └───────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Layout notes:
- Light background (#F5F2EC) or dark with cards
- 4-column grid desktop, 2-col tablet, 1-col mobile
- Each card: number (large, muted), service name, 1–2 line description
- Hover: card border turns yellow or slight lift
```

---

## W6 — Section 3: ABOUT (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   ┌──────────────────────────────────┐   ┌───────────────────────────┐ │
│   │                                  │   │                           │ │
│   │   [Photo or abstract portrait]   │   │  Qui je suis              │ │
│   │   — square or vertical crop      │   │  ──────────               │ │
│   │                                  │   │                           │ │
│   │                                  │   │  15+ ans d'expérience SAP │ │
│   │                                  │   │  body text paragraph...   │ │
│   │                                  │   │                           │ │
│   │                                  │   │  ● Certifié SAP FI/CO     │ │
│   └──────────────────────────────────┘   │  ● Expérience S/4HANA     │ │
│                                          │  ● 40+ projets livrés     │ │
│                                          │                           │ │
│                                          └───────────────────────────┘ │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Layout notes:
- Green background (#1B8F3A) for contrast — unique section feel
- Photo left, text right (or reversed on mobile)
- Credential bullets styled as simple list with yellow dot markers
```

---

## W7 — Section 4: TRUST / SOCIAL PROOF (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Ils m'ont fait confiance                                              │
│                                                                         │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   ┌───────────┐ │
│   │  [Logo 1]   │   │  [Logo 2]   │   │  [Logo 3]   │   │ [Logo 4]  │ │
│   └─────────────┘   └─────────────┘   └─────────────┘   └───────────┘ │
│                                                                         │
│   ─────────────────────────────────────────────────────────            │
│                                                                         │
│   "Quote from a client about the quality of work and                    │
│    the impact on their SAP project."                                    │
│   — Name, Title, Company                                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Notes:
- If no logos available for V1: show 3 key stats instead
  (e.g., "15 ans", "40+ projets", "3 pays")
- Stats displayed large, typographically — not in boxes
- Optional: single strong testimonial quote beneath
```

---

## W8 — Section 5: CONTACT (Desktop) — Single-Page Option

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   Travaillons ensemble.                                                 │
│                                                                         │
│   ┌──────────────────────────────────────────────────────────────────┐ │
│   │                                                                  │ │
│   │   Prénom / Nom *           Entreprise *                          │ │
│   │   ┌─────────────────────┐  ┌──────────────────────────────────┐ │ │
│   │   │                     │  │                                  │ │ │
│   │   └─────────────────────┘  └──────────────────────────────────┘ │ │
│   │                                                                  │ │
│   │   Email *                  Téléphone (optionnel)                 │ │
│   │   ┌─────────────────────┐  ┌──────────────────────────────────┐ │ │
│   │   │                     │  │                                  │ │ │
│   │   └─────────────────────┘  └──────────────────────────────────┘ │ │
│   │                                                                  │ │
│   │   Sujet *                                                        │ │
│   │   ┌──────────────────────────────────────────────────────────┐  │ │
│   │   │  [ ] Implémentation   [ ] Migration   [ ] Formation       │  │ │
│   │   │  [ ] Autre                                                │  │ │
│   │   └──────────────────────────────────────────────────────────┘  │ │
│   │                                                                  │ │
│   │   Message *                                                      │ │
│   │   ┌──────────────────────────────────────────────────────────┐  │ │
│   │   │                                                          │  │ │
│   │   │                                                          │  │ │
│   │   └──────────────────────────────────────────────────────────┘  │ │
│   │                                                                  │ │
│   │   [ ] J'accepte la politique de confidentialité *               │ │
│   │                                                                  │ │
│   │                              ┌───────────────────────┐          │ │
│   │                              │  Envoyer le message → │ (yellow) │ │
│   │                              └───────────────────────┘          │ │
│   └──────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│   Ou directement :                                                      │
│   ✉  contact@fixis.fr       📞 +33 6 XX XX XX XX                       │
│   in  /in/prenom-nom                                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## W9 — Contact Success State

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                                                                      │
│            ✓                                                         │
│                                                                      │
│      Message envoyé.                                                 │
│      Je vous réponds sous 24h.                                       │
│                                                                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

- Replaces form in-place (no page reload)
- Animated checkmark (draw-on SVG or scale-in)
- Yellow accent on checkmark
```

---

## W10 — Footer

```
┌─────────────────────────────────────────────────────────────────────────┐
│  FiXiS                                                                  │
│  Consulting SAP                                                         │
│                                                                         │
│  contact@fixis.fr                                                       │
│                                                                         │
│  Mentions légales  ·  Politique de confidentialité   ·  FR | EN        │
│                                                                         │
│  © 2025 FiXiS. Tous droits réservés.                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## W11 — Contact Page (Option B only)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  NAV                                                           FR | EN  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────────┐   ┌─────────────────────────────────────┐│
│  │                          │   │                                     ││
│  │  Démarrons quelque       │   │  [FORM — same as W8]               ││
│  │  chose.                  │   │                                     ││
│  │                          │   │                                     ││
│  │  Je suis disponible      │   │                                     ││
│  │  pour des missions de    │   │                                     ││
│  │  conseil SAP en France   │   │                                     ││
│  │  et à l'international.   │   │                                     ││
│  │                          │   │                                     ││
│  │  ✉ contact@fixis.fr      │   │                                     ││
│  │  📞 +33 6 XX XX XX XX    │   │                                     ││
│  │  in /in/prenom-nom       │   │                                     ││
│  │                          │   │                                     ││
│  └──────────────────────────┘   └─────────────────────────────────────┘│
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  FOOTER                                                                 │
└─────────────────────────────────────────────────────────────────────────┘

- Full viewport height, vertically centered content
- Left: headline + direct contact info
- Right: form
- Dark background, yellow CTA
```

---

## Scroll Sequence (Single-Page)

```
[HERO]          100vh   dark bg
[SERVICES]      auto    light bg
[ABOUT]         auto    green bg
[TRUST]         auto    dark bg
[CONTACT]       100vh   dark bg
[FOOTER]        auto    near-black
```

The alternating backgrounds create natural section rhythm without needing explicit dividers.
