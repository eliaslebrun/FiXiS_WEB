# FiXiS — Site Web

Site vitrine + formulaire de contact pour **FiXiS**, cabinet de consulting SAP Finance indépendant.

> **Stack :** Astro 6 · Tailwind CSS v4 · TypeScript · Resend · Vercel

## Prérequis

- **Node.js** ≥ 22.12.0
- Clé API [Resend](https://resend.com) pour le formulaire de contact

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env
# → Renseigner RESEND_API_KEY dans .env

# 3. Lancer le serveur de développement
npm run dev
# → http://localhost:4321
```

## Structure du projet

```
fixis/
├── public/
│   ├── images/
│   │   ├── Gemini_Generated_Image_i2nfxgi2nfxgi2nf_inspyrenet.png  ← logo
│   │   └── Gemini_Generated_Image_xonxauxonxauxonx-clean.png        ← photo
│   ├── favicon.svg / .ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── About.astro
│   │   ├── Trust.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── ServiceCard.astro
│   │       └── LangToggle.astro
│   ├── i18n/
│   │   ├── fr.json         ← copie FR (source de vérité)
│   │   └── en.json         ← copie EN
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mentions-legales.astro
│   │   ├── politique-confidentialite.astro
│   │   └── api/
│   │       └── contact.ts  ← endpoint email (SSR)
│   ├── styles/
│   │   ├── tokens.css      ← design system (CSS custom properties)
│   │   ├── global.css      ← Google Fonts, Tailwind v4, tokens, animations
│   │   └── animations.css
│   └── utils/
│       └── i18n.ts         ← t(), tArray(), tObjectArray(), getLang(), setLang()
├── docs/                   ← documentation complète du projet
│   ├── 01-BRIEF.md
│   ├── 02-SITEMAP.md
│   ├── 03-WIREFRAMES.md
│   ├── 04-FUNCTIONAL-REQUIREMENTS.md
│   ├── 05-DESIGN-SYSTEM.md
│   ├── 06-TECH-STACK.md
│   ├── 07-CONTENT.md
│   ├── 08-CONTACT-SPEC.md
│   └── 09-CHECKLIST.md
├── .env.example
├── astro.config.mjs
├── prettier.config.mjs
└── tsconfig.json
```

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Serveur de dev → `localhost:4321` |
| `npm run build` | Build de production → `./dist/` |
| `npm run preview` | Prévisualiser le build en local |
| `npx astro check` | Vérification TypeScript Astro |
| `npx astro sync` | Regénérer `.astro/types.d.ts` |

## Dépendances principales

| Package | Usage |
| :--- | :--- |
| `astro` | Framework |
| `@tailwindcss/vite` + `tailwindcss` | Styles (Tailwind CSS v4 via plugin Vite) |
| `@astrojs/sitemap` | Sitemap automatique |
| `@astrojs/vercel` | Adaptateur de déploiement Vercel |
| `resend` | Envoi d'e-mails (formulaire de contact) |
| `@lucide/astro` | Icônes (non utilisé actuellement) |
| `prettier` + `prettier-plugin-astro` | Formatage (config dans `prettier.config.mjs`) |

## Variables d'environnement

Copier `.env.example` → `.env` et renseigner :

| Variable | Description | Requis |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'e-mails | ✅ |
| `HCAPTCHA_SECRET` | Secret hCaptcha (anti-spam avancé) | P1 (non implémenté) |
| `PUBLIC_HCAPTCHA_SITEKEY` | Site key hCaptcha (côté client) | P1 (non implémenté) |

> ⚠️ Ne jamais commiter `.env` — il est dans `.gitignore`.

> ℹ️ Les variables hCaptcha sont réservées pour une future itération. La protection anti-spam actuelle repose sur un champ honeypot (`_trap`) et un rate-limit de 5 requêtes/heure/IP.

## Typographie

Les polices sont chargées depuis **Google Fonts** via `@import` dans `src/styles/global.css` :

- **Display :** [Syne](https://fonts.google.com/specimen/Syne) — titres, navigation, labels
- **Body :** [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) — paragraphes, texte courant

## Internationalisation (i18n)

Toute la copie est dans `src/i18n/fr.json` et `src/i18n/en.json`.  
Les placeholders `[entre crochets]` sont à remplacer par les données client avant le lancement.

Le système i18n fonctionne côté serveur (balises `{t(lang, 'key')}` dans les composants Astro) et côté client (un script dans `BaseLayout.astro` parcourt les éléments `[data-i18n]` au chargement et à chaque changement de langue).

```ts
import { t, tArray, tObjectArray, getLang, setLang } from '../utils/i18n'

t(lang, 'hero.cta')           // → "Parlons-en" (string)
tArray(lang, 'about.credentials') // → string[] (listes)
tObjectArray(lang, 'trust.stats') // → { value, label }[] (objets structurés)

getLang()  // lit localStorage → navigateur → 'fr' par défaut
setLang('en') // persiste + dispatch 'fixis:lang-change'
```

## Formulaire de contact

- **Endpoint :** `POST /api/contact` (SSR uniquement — `export const prerender = false`)
- **Envoi :** Resend → `contact@fixis.fr`
- **Anti-spam :** champ honeypot `_trap` + rate-limit 5 req/h/IP (en mémoire, reset au cold start)
- **Validation :** côté client (navigateur) + côté serveur (doublée dans l'API)
- **RGPD :** aucune donnée stockée en base ; tout transite par e-mail. Consentement GDPR obligatoire (case à cocher).
- **Accessibilité :** `aria-live` pour les annonces d'erreur, `aria-required`, `aria-selected` sur les chips sujet, focus management sur succès/erreur

## Déploiement (Vercel)

L'adaptateur `@astrojs/vercel` est déjà configuré dans `astro.config.mjs`. Le site est en mode `output: 'static'` — toutes les pages sont pré-rendues sauf `/api/contact` qui opte pour le SSR.

```bash
# Déploiement manuel
npx vercel --prod

# Ou : connecter le dépôt GitHub à Vercel
# → déploiements automatiques sur chaque push sur main
```

Variables d'environnement à configurer dans le dashboard Vercel :
- `RESEND_API_KEY`
- `HCAPTCHA_SECRET` *(optionnel, non utilisé actuellement)*
- `PUBLIC_HCAPTCHA_SITEKEY` *(optionnel, non utilisé actuellement)*

## Documentation

Toute la documentation de conception est dans le dossier `docs/` :

- [`01-BRIEF.md`](docs/01-BRIEF.md) — brief créatif et stratégique
- [`02-SITEMAP.md`](docs/02-SITEMAP.md) — architecture du site
- [`03-WIREFRAMES.md`](docs/03-WIREFRAMES.md) — wireframes ASCII
- [`04-FUNCTIONAL-REQUIREMENTS.md`](docs/04-FUNCTIONAL-REQUIREMENTS.md) — exigences fonctionnelles
- [`05-DESIGN-SYSTEM.md`](docs/05-DESIGN-SYSTEM.md) — système de design (tokens, typo, couleurs)
- [`06-TECH-STACK.md`](docs/06-TECH-STACK.md) — stack technique détaillé
- [`07-CONTENT.md`](docs/07-CONTENT.md) — copie FR/EN complète
- [`08-CONTACT-SPEC.md`](docs/08-CONTACT-SPEC.md) — spec détaillée du formulaire de contact
- [`09-CHECKLIST.md`](docs/09-CHECKLIST.md) — checklist pré-lancement

## Prochaines étapes avant lancement

- [ ] Remplir les `[crochets]` dans `fr.json` et `en.json` (nom, SIRET, téléphone, LinkedIn, stats)
- [ ] Ajouter la photo client dans `public/images/` et mettre à jour `About.astro`
- [ ] Compléter les mentions légales (`mentions-legales.astro`) avec les vraies données
- [ ] Configurer le domaine `fixis.fr` sur Vercel
- [ ] Vérifier le domaine dans Resend pour l'envoi `from: contact@fixis.fr`
- [ ] Implémenter hCaptcha (optionnel — les variables d'env sont déjà préparées)
- [ ] Lancer un audit Lighthouse (cible : ≥ 90 mobile)
- [ ] Cocher toutes les cases de [`09-CHECKLIST.md`](docs/09-CHECKLIST.md)