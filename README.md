# FiXiS — Site Web

Site vitrine + formulaire de contact pour **FiXiS**, cabinet de consulting SAP Finance indépendant.

> **Stack :** Astro 5 · Tailwind CSS · TypeScript · Resend · Vercel

---

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

---

## Structure du projet

```
fixis/
├── public/
│   ├── fonts/              ← polices auto-hébergées (optionnel)
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
│   │   ├── global.css
│   │   └── animations.css
│   └── utils/
│       └── i18n.ts         ← t(), getLang(), setLang()
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
├── tailwind.config.mjs
└── prettier.config.mjs
```

---

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Serveur de dev → `localhost:4321` |
| `npm run build` | Build de production → `./dist/` |
| `npm run preview` | Prévisualiser le build en local |
| `npm run astro check` | Vérification TypeScript Astro |
| `npx astro sync` | Regénérer `.astro/types.d.ts` |

---

## Variables d'environnement

Copier `.env.example` → `.env` et renseigner :

| Variable | Description | Requis |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'e-mails | ✅ |
| `HCAPTCHA_SECRET` | Secret hCaptcha (anti-spam avancé) | P1 |
| `PUBLIC_HCAPTCHA_SITEKEY` | Site key hCaptcha (côté client) | P1 |

> ⚠️ Ne jamais commiter `.env` — il est dans `.gitignore`.

---

## Internationalisation (i18n)

Toute la copie est dans `src/i18n/fr.json` et `src/i18n/en.json`.  
Les placeholders `[entre crochets]` sont à remplacer par les données client avant le lancement.

```ts
import { t } from '../utils/i18n'
t('fr', 'hero.cta') // → "Parlons-en"
t('en', 'hero.cta') // → "Let's talk"
```

---

## Formulaire de contact

- **Endpoint :** `POST /api/contact`
- **Envoi :** Resend → `contact@fixis.fr`
- **Anti-spam :** champ honeypot `_trap` + rate-limit 5 req/h/IP
- **RGPD :** aucune donnée stockée en base ; tout transite par e-mail

---

## Déploiement (Vercel)

```bash
# Déploiement manuel
npx vercel --prod

# Ou : connecter le dépôt GitHub à Vercel
# → déploiements automatiques sur chaque push sur main
```

Variables d'environnement à configurer dans le dashboard Vercel :
- `RESEND_API_KEY`
- `HCAPTCHA_SECRET` *(optionnel)*
- `PUBLIC_HCAPTCHA_SITEKEY` *(optionnel)*

---

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

---

## Prochaines étapes avant lancement

- [ ] Remplir les `[crochets]` dans `fr.json` et `en.json` (nom, SIRET, téléphone, LinkedIn, stats)
- [ ] Ajouter la photo client dans `public/` et mettre à jour `About.astro`
- [ ] Compléter les mentions légales (`mentions-legales.astro`) avec les vraies données
- [ ] Configurer le domaine `fixis.fr` sur Vercel
- [ ] Vérifier le domaine dans Resend pour l'envoi `from: contact@fixis.fr`
- [ ] Lancer un audit Lighthouse (cible : ≥ 90 mobile)
- [ ] Cocher toutes les cases de [`09-CHECKLIST.md`](docs/09-CHECKLIST.md)
