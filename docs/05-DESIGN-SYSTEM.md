# 05 — Design System

> All values expressed as CSS custom properties. Import once at `:root`.

---

## 1. Color Tokens

```css
:root {
  /* Brand primaries */
  --color-yellow:       #FCD405;
  --color-yellow-dark:  #D4B004;  /* hover/active darken */
  --color-green:        #1B8F3A;
  --color-green-dark:   #146B2C;  /* hover/active */

  /* Neutrals */
  --color-black:        #0A0A0A;
  --color-near-black:   #111111;
  --color-gray-900:     #1A1A1A;
  --color-gray-700:     #3A3A3A;
  --color-gray-400:     #8A8A8A;
  --color-gray-100:     #EBEBEB;
  --color-cream:        #F5F2EC;
  --color-white:        #FFFFFF;

  /* Semantic */
  --color-bg-primary:   var(--color-black);
  --color-bg-light:     var(--color-cream);
  --color-bg-accent:    var(--color-green);
  --color-text-primary: var(--color-cream);
  --color-text-dark:    var(--color-black);
  --color-text-muted:   var(--color-gray-400);
  --color-accent:       var(--color-yellow);
  --color-border:       rgba(255,255,255,0.12);
  --color-border-light: rgba(0,0,0,0.1);

  /* Status */
  --color-error:        #E53E3E;
  --color-success:      var(--color-green);
}
```

### Color Usage Rules

| Use case | Token |
|----------|-------|
| Primary CTA button | `--color-yellow` bg, `--color-black` text |
| Section heading (dark bg) | `--color-cream` |
| Section heading (light bg) | `--color-black` |
| Body text (dark bg) | `--color-gray-100` |
| Body text (light bg) | `--color-gray-700` |
| Service card hover border | `--color-yellow` |
| Active nav link underline | `--color-yellow` |
| About section background | `--color-green` |
| Trust section background | `--color-black` |
| Form input border | `--color-border` (dark) or `--color-border-light` (light) |
| Form input focus ring | `--color-yellow` |

---

## 2. Typography

### Font Selection

```css
/* Option 1 (recommended — free via Google Fonts) */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Source+Serif+4:ital,wght@0,300;0,400;1,300&display=swap');

--font-display: 'Syne', sans-serif;      /* Headlines, nav, labels */
--font-body:    'Source Serif 4', serif; /* Body text, form labels */

/* Option 2 (self-hosted, stronger feel) */
/* Neue Haas Grotesk (licensed) + Freight Text (licensed) */
/* Or: Cabinet Grotesk (free) + Lora (free) */
```

**Rationale:** Syne is an architectural, slightly unusual grotesque — confident without being cold. Source Serif 4 brings warmth and legibility. The grotesque/serif pairing creates the editorial tension referenced in the design brief.

### Type Scale

```css
:root {
  /* Display — hero headline */
  --text-display:   clamp(3.5rem, 8vw, 7rem);
  --text-display-lh: 0.95;
  --text-display-ls: -0.03em;

  /* Heading 1 — section titles */
  --text-h1:        clamp(2.25rem, 5vw, 4rem);
  --text-h1-lh:     1.05;
  --text-h1-ls:     -0.02em;

  /* Heading 2 — card titles, sub-sections */
  --text-h2:        clamp(1.5rem, 3vw, 2.25rem);
  --text-h2-lh:     1.15;

  /* Label — section intros, caps labels */
  --text-label:     0.75rem;
  --text-label-ls:  0.12em;
  --text-label-transform: uppercase;

  /* Body */
  --text-body:      clamp(1rem, 1.5vw, 1.125rem);
  --text-body-lh:   1.7;

  /* Small / footnote */
  --text-small:     0.875rem;
  --text-small-lh:  1.5;
}
```

### Typography Rules

- Headlines: `--font-display`, bold/extrabold weight
- Body copy: `--font-body`, regular weight
- Labels & nav: `--font-display`, regular weight, tracked uppercase
- Numbers (service cards, stats): `--font-display`, 800 weight, huge scale
- Form labels: `--font-display`, small, tracked uppercase

---

## 3. Spacing

```css
:root {
  --space-1:  0.25rem;   /*  4px */
  --space-2:  0.5rem;    /*  8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.5rem;    /* 24px */
  --space-6:  2rem;      /* 32px */
  --space-8:  3rem;      /* 48px */
  --space-10: 4rem;      /* 64px */
  --space-12: 6rem;      /* 96px */
  --space-16: 8rem;      /* 128px */

  /* Section padding */
  --section-py:  clamp(var(--space-10), 10vw, var(--space-16));
  --section-px:  clamp(var(--space-5), 5vw, var(--space-12));

  /* Max content width */
  --max-width:    1320px;
  --max-width-sm: 760px;   /* text columns */
}
```

---

## 4. Grid

```css
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--section-px);
}

/* 12-column fluid grid */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-6);
}

/* Common spans */
.col-6  { grid-column: span 6; }
.col-4  { grid-column: span 4; }
.col-3  { grid-column: span 3; }

/* Service cards: 3 or 4 across */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-5);
}
```

---

## 5. Border & Radius

```css
:root {
  /* FiXiS uses sharp corners — no rounded-pill aesthetics */
  --radius-none: 0;
  --radius-sm:   2px;   /* subtle, for inputs */
  --radius-md:   4px;   /* cards only if necessary */

  --border-thin:   1px solid var(--color-border);
  --border-medium: 2px solid var(--color-border);
  --border-accent: 2px solid var(--color-yellow);
}
```

**Rule:** Prefer `border-radius: 0` throughout. Rectangular shapes reinforce the editorial-brutalist direction. Slight 2px radius only on form inputs if needed for cross-browser consistency.

---

## 6. Motion & Animation

```css
:root {
  --ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast:    150ms;
  --duration-medium:  300ms;
  --duration-slow:    600ms;
  --duration-xslow:   1000ms;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Animation Patterns

| Pattern | Usage | Config |
|---------|-------|--------|
| `fade-up` | Section headings on scroll-in | translateY(24px→0) + opacity(0→1), 600ms, ease-out-expo |
| `fade-in` | Body text, supporting elements | opacity(0→1), 400ms, ease-out |
| `stagger` | Service cards, stat items | delay: n * 80ms |
| `draw-on` | Success state checkmark | SVG stroke-dashoffset, 400ms |
| `slide-down` | Mobile nav overlay | translateY(-100%→0), 300ms |
| `border-grow` | CTA button hover | pseudo-element width 0→100%, 200ms |

---

## 7. Component Tokens

### Button — Primary

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-6);
  background: var(--color-yellow);
  color: var(--color-black);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-small);
  letter-spacing: var(--text-label-ls);
  text-transform: uppercase;
  border: none;
  border-radius: var(--radius-none);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-out-expo),
              transform var(--duration-fast);
}

.btn-primary:hover {
  background: var(--color-yellow-dark);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Button — Ghost

```css
.btn-ghost {
  background: transparent;
  color: var(--color-cream);
  border: 1px solid var(--color-cream);
  /* same padding/font as .btn-primary */
}
.btn-ghost:hover {
  background: var(--color-cream);
  color: var(--color-black);
}
```

### Form Input

```css
.form-input {
  width: 100%;
  padding: var(--space-4) var(--space-4);
  background: transparent;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: var(--radius-sm);
  color: var(--color-cream);
  font-family: var(--font-body);
  font-size: var(--text-body);
  transition: border-color var(--duration-fast);
  outline: none;
}

.form-input:focus {
  border-color: var(--color-yellow);
  box-shadow: 0 0 0 3px rgba(252, 212, 5, 0.15);
}

.form-input.error {
  border-color: var(--color-error);
}
```

### Service Card

```css
.service-card {
  padding: var(--space-8) var(--space-6);
  border: 1px solid var(--color-border);
  position: relative;
  transition: border-color var(--duration-medium) var(--ease-out-expo);
}

.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(252, 212, 5, 0.04);
  opacity: 0;
  transition: opacity var(--duration-medium);
}

.service-card:hover {
  border-color: var(--color-yellow);
}

.service-card:hover::before {
  opacity: 1;
}
```

---

## 8. Shadows

```css
:root {
  /* Used sparingly — prefer borders over shadows in this design */
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.3);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.4);
  --shadow-glow-yellow: 0 0 24px rgba(252, 212, 5, 0.25);
}
```

---

## 9. Iconography

- Use **Lucide Icons** (lightweight, consistent stroke style)
- Stroke width: 1.5 (default)
- Size: 20px standard, 16px inline, 24px standalone
- No filled icon sets — stroke only matches editorial direction
- Arrow icons for CTAs: `→` or `ArrowRight` from Lucide

---

## 10. Do's and Don'ts

| ✅ Do | ❌ Don't |
|-------|---------|
| Use sharp corners (0 radius) | Use pill-shaped buttons |
| Use tracked uppercase for labels | Use ALL CAPS in body text |
| Let whitespace breathe | Crowd elements with small margins |
| Pair large display type with lean body copy | Use similar weights for headline and body |
| Animate with purpose and slowness | Use rapid, jittery animations |
| Use yellow sparingly as a true accent | Apply yellow as a background color everywhere |
| Use green as a full-section treatment | Use green for small individual elements |
| Keep form fields minimal and generous | Use tight, cramped form layouts |
