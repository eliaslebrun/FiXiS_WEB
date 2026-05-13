# 07 — Content & Copy

> All user-facing copy in FR (primary) and EN (secondary).
> Keys map directly to `src/i18n/fr.json` and `src/i18n/en.json`.
> Placeholders in `[brackets]` to be confirmed with client.

---

## i18n File Structure

```json
{
  "nav": { ... },
  "hero": { ... },
  "services": { ... },
  "about": { ... },
  "trust": { ... },
  "contact": { ... },
  "footer": { ... },
  "legal": { ... },
  "meta": { ... }
}
```

---

## 1. Navigation

| Key | FR | EN |
|-----|----|----|
| `nav.services` | Services | Services |
| `nav.about` | À propos | About |
| `nav.contact` | Contact | Contact |
| `nav.lang_switch` | EN | FR |
| `nav.menu_open` | Ouvrir le menu | Open menu |
| `nav.menu_close` | Fermer le menu | Close menu |

---

## 2. Hero Section

| Key | FR | EN |
|-----|----|----|
| `hero.label` | Consulting SAP · Indépendant | SAP Consulting · Independent |
| `hero.headline_1` | La précision | The precision |
| `hero.headline_2` | d'un cabinet. | of a firm. |
| `hero.headline_3` | L'agilité | The agility |
| `hero.headline_4` | d'un expert. | of one expert. |
| `hero.subheadline` | Accompagnement SAP Finance pour les entreprises qui veulent aller vite — et bien. | SAP Finance consulting for companies that want to move fast — and right. |
| `hero.cta` | Parlons-en | Let's talk |
| `hero.scroll_hint` | Défiler | Scroll |

**Copy notes:**
- Headline splits across 4 lines for typographic drama at display scale
- On mobile, consider condensing to 2 lines: "La précision d'un cabinet. / L'agilité d'un expert."
- `hero.label` renders as a small tracked uppercase label above the headline

---

## 3. Services Section

| Key | FR | EN |
|-----|----|----|
| `services.label` | Expertise | Expertise |
| `services.headline` | Ce que je fais | What I do |
| `services.subheadline` | Des missions ciblées, des livrables concrets, une interlocution directe. | Focused engagements, concrete deliverables, direct communication. |

### Service Cards

#### Card 1 — S/4HANA Migration

| Key | FR | EN |
|-----|----|----|
| `services.s4.number` | 01 | 01 |
| `services.s4.title` | Migration S/4HANA | S/4HANA Migration |
| `services.s4.description` | Conduite de projets de migration brownfield et greenfield. Analyse de l'existant, mapping fonctionnel, recette et go-live. | Brownfield and greenfield migration management. Current-state analysis, functional mapping, testing and go-live. |

#### Card 2 — SAP FI/CO

| Key | FR | EN |
|-----|----|----|
| `services.fico.number` | 02 | 02 |
| `services.fico.title` | SAP Finance & Controlling | SAP Finance & Controlling |
| `services.fico.description` | Implémentation et optimisation des modules FI, CO, AA. Paramétrage, formation utilisateurs, documentation fonctionnelle. | Implementation and optimisation of FI, CO, AA modules. Configuration, user training, functional documentation. |

#### Card 3 — MCO & Support

| Key | FR | EN |
|-----|----|----|
| `services.mco.number` | 03 | 03 |
| `services.mco.title` | MCO & Support applicatif | Application Maintenance & Support |
| `services.mco.description` | Maintien en condition opérationnelle, gestion des incidents, évolutions fonctionnelles post go-live. | Operational maintenance, incident management, post go-live functional improvements. |

#### Card 4 — Conseil & Cadrage

| Key | FR | EN |
|-----|----|----|
| `services.advisory.number` | 04 | 04 |
| `services.advisory.title` | Conseil & Cadrage | Advisory & Scoping |
| `services.advisory.description` | Audit de l'existant SAP, cadrage de projet, rédaction de cahiers des charges. Intervention en amont pour poser les bonnes bases. | SAP landscape audit, project scoping, specification writing. Early-stage engagement to set the right foundations. |

---

## 4. About Section

| Key | FR | EN |
|-----|----|----|
| `about.label` | À propos | About |
| `about.headline` | Un consultant, pas une équipe | One consultant, not a team |
| `about.paragraph_1` | FiXiS, c'est [Prénom Nom]. Consultant SAP Finance indépendant avec [X] ans d'expérience sur des projets complexes en environnement grand compte. | FiXiS is [First Last]. An independent SAP Finance consultant with [X] years of experience on complex projects in enterprise environments. |
| `about.paragraph_2` | Ce que ça change pour vous : un seul interlocuteur du cadrage au go-live, une expertise sans frais de structure, et une vraie disponibilité. | What that means for you: one point of contact from scoping to go-live, expertise without overhead costs, and genuine availability. |
| `about.credentials_label` | Certifications & expérience | Certifications & experience |
| `about.cred_1` | SAP Certified — Finance in SAP S/4HANA | SAP Certified — Finance in SAP S/4HANA |
| `about.cred_2` | [X]+ projets SAP livrés | [X]+ SAP projects delivered |
| `about.cred_3` | Secteurs : [industrie, énergie, services…] | Sectors: [industry, energy, services…] |
| `about.cred_4` | Intervention en France et à l'international | Available in France and internationally |
| `about.photo_alt` | [Prénom Nom], consultant SAP Finance chez FiXiS | [First Last], SAP Finance consultant at FiXiS |

**Copy notes:**
- `[brackets]` = client to fill in
- Paragraphs should be kept to 2 max — brevity is on-brand
- Credentials rendered as a list with yellow marker dots

---

## 5. Trust Section

| Key | FR | EN |
|-----|----|----|
| `trust.label` | Références | Track record |
| `trust.headline` | Des résultats, pas des promesses | Results, not promises |

### Stats Block (if no client logos available)

| Key | FR | EN |
|-----|----|----|
| `trust.stat_1.value` | [X]+ | [X]+ |
| `trust.stat_1.label` | ans d'expérience SAP | years of SAP experience |
| `trust.stat_2.value` | [X]+ | [X]+ |
| `trust.stat_2.label` | projets livrés | projects delivered |
| `trust.stat_3.value` | [X]+ | [X]+ |
| `trust.stat_3.label` | utilisateurs formés | users trained |
| `trust.stat_4.value` | 3 | 3 |
| `trust.stat_4.label` | pays d'intervention | countries of operation |

### Optional Testimonial

| Key | FR | EN |
|-----|----|----|
| `trust.quote.text` | "[Citation du client à confirmer.]" | "[Client quote to be confirmed.]" |
| `trust.quote.author` | [Prénom Nom] | [First Last] |
| `trust.quote.role` | [Poste], [Entreprise] | [Role], [Company] |

### Client Logos (if available)

| Key | FR | EN |
|-----|----|----|
| `trust.logos_label` | Ils m'ont fait confiance | Trusted by |

---

## 6. Contact Section

| Key | FR | EN |
|-----|----|----|
| `contact.label` | Contact | Contact |
| `contact.headline` | Un projet ? Parlons-en. | A project in mind? Let's talk. |
| `contact.subheadline` | Répondez à quelques questions — je vous réponds sous 24h. | Fill in a few details — I'll get back to you within 24 hours. |

### Form Field Labels & Placeholders

| Key | FR | EN |
|-----|----|----|
| `contact.form.name_label` | Prénom & Nom | First & Last Name |
| `contact.form.name_placeholder` | Jean Dupont | Jane Smith |
| `contact.form.company_label` | Entreprise | Company |
| `contact.form.company_placeholder` | Acme SA | Acme Ltd |
| `contact.form.email_label` | Adresse e-mail | Email address |
| `contact.form.email_placeholder` | jean@acme.fr | jane@acme.com |
| `contact.form.phone_label` | Téléphone (optionnel) | Phone (optional) |
| `contact.form.phone_placeholder` | +33 6 12 34 56 78 | +44 7700 000000 |
| `contact.form.subject_label` | Sujet | Subject |
| `contact.form.message_label` | Message | Message |
| `contact.form.message_placeholder` | Décrivez brièvement votre contexte et vos besoins… | Briefly describe your context and needs… |
| `contact.form.gdpr_label` | J'accepte que mes données soient traitées pour répondre à ma demande. [En savoir plus](/politique-confidentialite) | I agree to my data being processed to respond to my request. [Learn more](/privacy) |
| `contact.form.submit` | Envoyer le message | Send message |
| `contact.form.submit_loading` | Envoi en cours… | Sending… |

### Subject Chips

| Key | FR | EN |
|-----|----|----|
| `contact.subjects.migration` | Migration S/4HANA | S/4HANA Migration |
| `contact.subjects.fico` | SAP FI/CO | SAP FI/CO |
| `contact.subjects.mco` | MCO / Support | MCO / Support |
| `contact.subjects.audit` | Audit & Cadrage | Audit & Scoping |
| `contact.subjects.other` | Autre | Other |

### Form Validation Errors

| Key | FR | EN |
|-----|----|----|
| `contact.errors.name_required` | Votre nom est requis | Your name is required |
| `contact.errors.email_required` | Votre e-mail est requis | Your email is required |
| `contact.errors.email_invalid` | Adresse e-mail invalide | Invalid email address |
| `contact.errors.company_required` | Le nom de votre entreprise est requis | Your company name is required |
| `contact.errors.subject_required` | Veuillez sélectionner un sujet | Please select a subject |
| `contact.errors.message_required` | Un message est requis | A message is required |
| `contact.errors.gdpr_required` | Vous devez accepter pour continuer | You must accept to continue |
| `contact.errors.api_failure` | Une erreur est survenue. Écrivez-moi directement : [contact@fixis.fr] | Something went wrong. Email me directly: [contact@fixis.fr] |

### Success State

| Key | FR | EN |
|-----|----|----|
| `contact.success.headline` | Message reçu. | Message received. |
| `contact.success.body` | Merci pour votre message. Je vous réponds dans les 24 heures. | Thank you for reaching out. I'll reply within 24 hours. |

### Direct Contact Info

| Key | FR | EN |
|-----|----|----|
| `contact.direct.email_label` | E-mail direct | Direct email |
| `contact.direct.email` | contact@fixis.fr | contact@fixis.fr |
| `contact.direct.phone_label` | Téléphone | Phone |
| `contact.direct.phone` | [+33 X XX XX XX XX] | [+33 X XX XX XX XX] |
| `contact.direct.linkedin_label` | LinkedIn | LinkedIn |
| `contact.direct.linkedin` | [url LinkedIn] | [LinkedIn URL] |
| `contact.direct.location` | Basé en France · Interventions Europe | Based in France · Available across Europe |
| `contact.direct.response_time` | Réponse sous 24h | Responds within 24h |

---

## 7. Footer

| Key | FR | EN |
|-----|----|----|
| `footer.tagline` | La précision d'un cabinet. L'agilité d'un expert. | The precision of a firm. The agility of one expert. |
| `footer.legal_link` | Mentions légales | Legal notices |
| `footer.privacy_link` | Politique de confidentialité | Privacy policy |
| `footer.copyright` | © [year] FiXiS — Tous droits réservés | © [year] FiXiS — All rights reserved |
| `footer.made_with` | Conçu avec soin | Crafted with care |

---

## 8. Meta / SEO

| Key | FR | EN |
|-----|----|----|
| `meta.title` | FiXiS — Consulting SAP Finance Indépendant | FiXiS — Independent SAP Finance Consulting |
| `meta.description` | FiXiS est un cabinet de consulting SAP Finance indépendant. Migration S/4HANA, SAP FI/CO, MCO — expertise senior, interlocution directe. | FiXiS is an independent SAP Finance consulting firm. S/4HANA migration, SAP FI/CO, MCO — senior expertise, direct engagement. |
| `meta.og_title` | FiXiS — Consulting SAP | FiXiS — SAP Consulting |
| `meta.og_description` | Consulting SAP Finance indépendant. La précision d'un cabinet, l'agilité d'un expert. | Independent SAP Finance consulting. The precision of a firm, the agility of one expert. |

---

## 9. Legal Pages

### 9.1 Mentions Légales

```
Éditeur du site :
FiXiS
[Forme juridique : Micro-entreprise]
[Adresse]
SIRET : [numéro]
[Email de contact]
[Téléphone]

Directeur de la publication : [Prénom Nom]

Hébergement :
Vercel Inc.
340 S Lemon Ave #4133
Walnut, CA 91789, USA
https://vercel.com

Propriété intellectuelle :
L'ensemble des contenus présents sur ce site (textes, images, logos)
est la propriété exclusive de FiXiS, sauf mention contraire.
Toute reproduction est interdite sans autorisation préalable.
```

### 9.2 Politique de Confidentialité (GDPR)

Key points to include (draft to be reviewed by client):

- **Responsable du traitement :** FiXiS, [Prénom Nom], [email]
- **Données collectées :** nom, email, téléphone (optionnel), entreprise, message (via le formulaire de contact uniquement)
- **Finalité :** Répondre aux demandes de contact et de devis
- **Base légale :** Consentement explicite (case à cocher)
- **Durée de conservation :** 3 ans à compter du dernier contact
- **Destinataires :** Aucun transfert à des tiers. Données transmises via Resend (prestataire email, serveurs UE)
- **Droits :** Accès, rectification, suppression, opposition — par email à [contact@fixis.fr]
- **Cookies :** Aucun cookie publicitaire. Analytics Umami : anonymisé, sans cookie de traçage

---

## 10. JSON Files

### src/i18n/fr.json (structure)

```json
{
  "nav": {
    "services": "Services",
    "about": "À propos",
    "contact": "Contact",
    "lang_switch": "EN",
    "menu_open": "Ouvrir le menu",
    "menu_close": "Fermer le menu"
  },
  "hero": {
    "label": "Consulting SAP · Indépendant",
    "headline_1": "La précision",
    "headline_2": "d'un cabinet.",
    "headline_3": "L'agilité",
    "headline_4": "d'un expert.",
    "subheadline": "Accompagnement SAP Finance pour les entreprises qui veulent aller vite — et bien.",
    "cta": "Parlons-en",
    "scroll_hint": "Défiler"
  },
  "services": {
    "label": "Expertise",
    "headline": "Ce que je fais",
    "subheadline": "Des missions ciblées, des livrables concrets, une interlocution directe.",
    "s4": {
      "number": "01",
      "title": "Migration S/4HANA",
      "description": "Conduite de projets de migration brownfield et greenfield. Analyse de l'existant, mapping fonctionnel, recette et go-live."
    },
    "fico": {
      "number": "02",
      "title": "SAP Finance & Controlling",
      "description": "Implémentation et optimisation des modules FI, CO, AA. Paramétrage, formation utilisateurs, documentation fonctionnelle."
    },
    "mco": {
      "number": "03",
      "title": "MCO & Support applicatif",
      "description": "Maintien en condition opérationnelle, gestion des incidents, évolutions fonctionnelles post go-live."
    },
    "advisory": {
      "number": "04",
      "title": "Conseil & Cadrage",
      "description": "Audit de l'existant SAP, cadrage de projet, rédaction de cahiers des charges. Intervention en amont pour poser les bonnes bases."
    }
  },
  "about": {
    "label": "À propos",
    "headline": "Un consultant, pas une équipe",
    "paragraph_1": "FiXiS, c'est [Prénom Nom]. Consultant SAP Finance indépendant avec [X] ans d'expérience sur des projets complexes en environnement grand compte.",
    "paragraph_2": "Ce que ça change pour vous : un seul interlocuteur du cadrage au go-live, une expertise sans frais de structure, et une vraie disponibilité.",
    "credentials_label": "Certifications & expérience",
    "credentials": [
      "SAP Certified — Finance in SAP S/4HANA",
      "[X]+ projets SAP livrés",
      "Secteurs : [industrie, énergie, services…]",
      "Intervention en France et à l'international"
    ],
    "photo_alt": "[Prénom Nom], consultant SAP Finance chez FiXiS"
  },
  "trust": {
    "label": "Références",
    "headline": "Des résultats, pas des promesses",
    "stats": [
      { "value": "[X]+", "label": "ans d'expérience SAP" },
      { "value": "[X]+", "label": "projets livrés" },
      { "value": "[X]+", "label": "utilisateurs formés" },
      { "value": "3",    "label": "pays d'intervention" }
    ],
    "logos_label": "Ils m'ont fait confiance",
    "quote": {
      "text": "[Citation du client à confirmer.]",
      "author": "[Prénom Nom]",
      "role": "[Poste], [Entreprise]"
    }
  },
  "contact": {
    "label": "Contact",
    "headline": "Un projet ? Parlons-en.",
    "subheadline": "Répondez à quelques questions — je vous réponds sous 24h.",
    "form": {
      "name_label": "Prénom & Nom",
      "name_placeholder": "Jean Dupont",
      "company_label": "Entreprise",
      "company_placeholder": "Acme SA",
      "email_label": "Adresse e-mail",
      "email_placeholder": "jean@acme.fr",
      "phone_label": "Téléphone (optionnel)",
      "phone_placeholder": "+33 6 12 34 56 78",
      "subject_label": "Sujet",
      "message_label": "Message",
      "message_placeholder": "Décrivez brièvement votre contexte et vos besoins…",
      "gdpr_label": "J'accepte que mes données soient traitées pour répondre à ma demande.",
      "submit": "Envoyer le message",
      "submit_loading": "Envoi en cours…"
    },
    "subjects": {
      "migration": "Migration S/4HANA",
      "fico": "SAP FI/CO",
      "mco": "MCO / Support",
      "audit": "Audit & Cadrage",
      "other": "Autre"
    },
    "errors": {
      "name_required": "Votre nom est requis",
      "email_required": "Votre e-mail est requis",
      "email_invalid": "Adresse e-mail invalide",
      "company_required": "Le nom de votre entreprise est requis",
      "subject_required": "Veuillez sélectionner un sujet",
      "message_required": "Un message est requis",
      "gdpr_required": "Vous devez accepter pour continuer",
      "api_failure": "Une erreur est survenue. Écrivez-moi directement : contact@fixis.fr"
    },
    "success": {
      "headline": "Message reçu.",
      "body": "Merci pour votre message. Je vous réponds dans les 24 heures."
    },
    "direct": {
      "email_label": "E-mail direct",
      "email": "contact@fixis.fr",
      "phone_label": "Téléphone",
      "phone": "[+33 X XX XX XX XX]",
      "linkedin_label": "LinkedIn",
      "linkedin": "[url LinkedIn]",
      "location": "Basé en France · Interventions Europe",
      "response_time": "Réponse sous 24h"
    }
  },
  "footer": {
    "tagline": "La précision d'un cabinet. L'agilité d'un expert.",
    "legal_link": "Mentions légales",
    "privacy_link": "Politique de confidentialité",
    "copyright": "© {year} FiXiS — Tous droits réservés",
    "made_with": "Conçu avec soin"
  },
  "meta": {
    "title": "FiXiS — Consulting SAP Finance Indépendant",
    "description": "FiXiS est un cabinet de consulting SAP Finance indépendant. Migration S/4HANA, SAP FI/CO, MCO — expertise senior, interlocution directe."
  }
}
```

*The EN JSON mirrors this structure exactly with English strings — omitted here for brevity; see the table sections above for all EN values.*
