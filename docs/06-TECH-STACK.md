# 06 — Tech Stack

> Recommended stack for V1. Optimised for: speed to launch, zero backend overhead, long-term maintainability by a single developer.

---

## TL;DR

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Astro** | Static-first, zero JS by default, ideal for a content site with selective interactivity |
| Styling | **Vanilla CSS** (design tokens) + **Tailwind CSS** (utility layer) | Design system tokens as CSS vars; Tailwind for rapid layout |
| i18n | **astro-i18n** or manual `src/i18n/*.json` | Lightweight, no heavy dependency |
| Contact form | **Resend** (email API) + native fetch | Dead simple, free tier generous, great DX |
| Anti-spam | **hCaptcha** (invisible or checkbox) | GDPR-friendlier than reCAPTCHA, free |
| Hosting | **Vercel** | Free tier, automatic deploys from Git, edge CDN |
| DNS / Domain | **OVH** or **Cloudflare** (fixis.fr) | French registrar for .fr; Cloudflare for DNS management |
| Analytics | **Umami** (self-hosted or cloud) | Cookie-free, GDPR-compliant, no consent banner needed |
| Icons | **Lucide** | Stroke-based, tree-shakable, matches design system |
| Fonts | **Google Fonts** (Syne + Source Serif 4) | Free, self-hostable for perf |

---

## 1. Framework — Astro

### Why Astro

- Ships **zero JavaScript by default** — perfect for a content/contact site
- Islands architecture: only the contact form component is interactive
- Native **i18n routing** support
- Excellent Lighthouse scores out of the box
- Clean file-based routing: `src/pages/index.astro`, `src/pages/mentions-legales.astro`
- Can integrate React/Vue/Svelte components if needed (contact form island)

### Project Structure

```
fixis/
├── public/
│   ├── fonts/              ← self-hosted font files
│   ├── og-image.jpg
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Trust.astro
│   │   ├── Contact.astro       ← form island
│   │   ├── Footer.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── ServiceCard.astro
│   │       └── LangToggle.astro
│   ├── i18n/
│   │   ├── fr.json
│   │   └── en.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mentions-legales.astro
│   │   └── politique-confidentialite.astro
│   ├── styles/
│   │   ├── tokens.css          ← design system CSS vars
│   │   ├── global.css
│   │   └── animations.css
│   └── utils/
│       └── i18n.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

### Install

```bash
npm create astro@latest fixis -- --template minimal
cd fixis
npx astro add tailwind
npm install lucide-astro
npm install @astrojs/sitemap
```

---

## 2. Styling — CSS Tokens + Tailwind

### Approach

- **Design tokens** live in `src/styles/tokens.css` as CSS custom properties (see `05-DESIGN-SYSTEM.md`)
- **Tailwind** used for layout utilities only (`grid`, `flex`, `gap`, `px`, `py`, responsive prefixes)
- **No Tailwind for colors or typography** — those always go through CSS tokens to keep the design system the single source of truth
- Component-scoped `<style>` blocks in `.astro` files for component-specific CSS

### tailwind.config.mjs

```js
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        yellow:  '#FCD405',
        green:   '#1B8F3A',
        black:   '#0A0A0A',
        cream:   '#F5F2EC',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [],
}
```

---

## 3. Internationalisation

### Strategy

- Two JSON files: `src/i18n/fr.json` and `src/i18n/en.json`
- Language stored in `localStorage` as `fixis_lang`
- On first visit: detect `navigator.language`, default to `fr`
- Language toggle in nav + footer updates a global reactive store and swaps all copy without page reload
- `<html lang="">` attribute updated programmatically

### i18n Utility

```ts
// src/utils/i18n.ts
import fr from '../i18n/fr.json'
import en from '../i18n/en.json'

const translations = { fr, en }

export type Lang = 'fr' | 'en'

export function t(lang: Lang, key: string): string {
  const keys = key.split('.')
  let result: any = translations[lang]
  for (const k of keys) result = result?.[k]
  return result ?? key
}
```

### No heavy i18n library needed

The site is small enough that a handwritten utility is cleaner than `astro-i18n` or `i18next`. Avoids 40kb+ overhead.

---

## 4. Contact Form

### Email delivery — Resend

```bash
npm install resend
```

- Create a serverless endpoint: `src/pages/api/contact.ts`
- Astro's server endpoints (SSR mode for this route only, rest stays static)
- Resend free tier: 3,000 emails/month — more than sufficient

```ts
// src/pages/api/contact.ts
import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json()

  // Honeypot check
  if (data._trap) return new Response('', { status: 200 })

  const { name, company, email, phone, subject, message } = data

  await resend.emails.send({
    from: 'contact@fixis.fr',
    to: 'contact@fixis.fr',
    subject: `[FiXiS] Nouveau contact — ${subject}`,
    html: `
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Entreprise:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Téléphone:</strong> ${phone || '—'}</p>
      <p><strong>Sujet:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `,
    replyTo: email,
  })

  return new Response(JSON.stringify({ success: true }), { status: 200 })
}
```

### Anti-spam — hCaptcha

```bash
npm install @hcaptcha/vanilla-hcaptcha
```

- Use **invisible hCaptcha** (fires on form submit, not a visible widget)
- GDPR-compliant: hCaptcha does not fingerprint users by default
- Fallback: honeypot field `<input name="_trap" style="display:none" tabindex="-1">`

---

## 5. Hosting — Vercel

### Why Vercel

- Zero-config Astro deployment
- Serverless functions for the `/api/contact` endpoint
- Free tier: sufficient for a contact site
- Automatic preview deployments on PRs
- Edge CDN for static assets

### Deployment

```bash
npm install -g vercel
vercel --prod
```

### Environment Variables (Vercel dashboard)

```
RESEND_API_KEY=re_xxxxxxxxxxxx
HCAPTCHA_SECRET=xxxxxxxxxxxxxxxx
PUBLIC_HCAPTCHA_SITEKEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

---

## 6. Analytics — Umami

- Self-host on a cheap VPS (€3/mo Hetzner) or use **Umami Cloud** (free tier)
- Cookie-free by default → **no consent banner required for analytics**
- Single script tag, <1kb
- Tracks: page views, referrers, device types, country
- No personal data collected

```html
<script
  async
  defer
  data-website-id="YOUR_UMAMI_ID"
  src="https://umami.yourdomain.com/script.js"
></script>
```

---

## 7. Domain & DNS

| Step | Action |
|------|--------|
| 1 | Register `fixis.fr` at OVH or Gandi |
| 2 | Transfer DNS management to Cloudflare (free) |
| 3 | Add Vercel DNS records (A / CNAME) |
| 4 | Configure `contact@fixis.fr` mailbox (OVH MX or Resend domain) |
| 5 | Verify domain in Resend for sending |

---

## 8. Astro Config

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  site: 'https://fixis.fr',
  output: 'hybrid',          // static by default, SSR for /api/*
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap(),
  ],
})
```

---

## 9. Performance Budget

| Asset | Target |
|-------|--------|
| Total page weight (initial) | < 200kb |
| JavaScript (client) | < 20kb |
| CSS | < 15kb |
| Fonts (2 families, 3 variants) | < 80kb |
| Hero image (if any) | < 80kb WebP |
| LCP | < 2.0s |
| TBT | < 50ms |

---

## 10. Dev Tooling

```json
{
  "devDependencies": {
    "astro": "^4.x",
    "@astrojs/tailwind": "^5.x",
    "@astrojs/sitemap": "^3.x",
    "@astrojs/vercel": "^7.x",
    "tailwindcss": "^3.x",
    "typescript": "^5.x",
    "prettier": "^3.x",
    "prettier-plugin-astro": "^0.13.x"
  }
}
```

### Recommended VS Code extensions

- Astro (official)
- Tailwind CSS IntelliSense
- Prettier
- ESLint

---

## 11. Alternatives Considered

| Option | Verdict |
|--------|---------|
| Next.js | Overkill for a 2-page static site; heavier runtime |
| SvelteKit | Excellent choice if team knows Svelte; slightly smaller ecosystem |
| Nuxt 3 | Same verdict as Next.js |
| Plain HTML/CSS | Tempting but no i18n DX, no component model, harder to maintain |
| Webflow | No code control, export is messy, recurring cost |
| Framer | Not suitable for custom form logic and API endpoints |
