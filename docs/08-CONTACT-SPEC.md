# 08 — Contact Feature Specification

> Deep-dive spec for the contact section / form component.
> This is the centrepiece UX feature of the site.

---

## 1. Overview

The contact section is designed to feel like a premium, considered experience — not a generic web form. It should feel like the beginning of a real professional conversation.

**Layout:** Full-viewport section (100svh) split into two columns on desktop:
- **Left column (40%):** Context copy, direct contact info, availability signal
- **Right column (60%):** Interactive contact form

On mobile: single column, context copy above form.

---

## 2. Visual Layout

```
┌─────────────────────────────────────────────────────┐
│  CONTACT                                            │
│                                                     │
│  ┌──────────────────┐  ┌─────────────────────────┐ │
│  │                  │  │                         │ │
│  │  Un projet ?     │  │  [Sujet chips]          │ │
│  │  Parlons-en.     │  │                         │ │
│  │                  │  │  Prénom & Nom  ________  │ │
│  │  Répondez à      │  │  Entreprise    ________  │ │
│  │  quelques        │  │  E-mail        ________  │ │
│  │  questions —     │  │  Téléphone     ________  │ │
│  │  je vous réponds │  │                         │ │
│  │  sous 24h.       │  │  Message       ________  │ │
│  │                  │  │                ________  │ │
│  │  ──────────────  │  │                ________  │ │
│  │                  │  │                         │ │
│  │  📧 contact@     │  │  ☐ GDPR consent         │ │
│  │  📞 +33 ...      │  │                         │ │
│  │  💼 LinkedIn     │  │  [ ENVOYER →          ] │ │
│  │                  │  │                         │ │
│  │  📍 France · EU  │  └─────────────────────────┘ │
│  │  ⚡ Sous 24h     │                              │
│  │                  │                              │
│  └──────────────────┘                              │
└─────────────────────────────────────────────────────┘
```

---

## 3. Subject Selection — Chips Component

### Behaviour

- Renders **before** the form fields, at the top of the form column
- 5 chips displayed horizontally (wrap on mobile)
- Single selection only
- Selecting a chip: highlights it in yellow (`--color-yellow` bg, `--color-black` text), auto-fills the hidden `subject` field value
- Chips are required — form cannot be submitted without a selection
- Chip labels are fully localised

### States

| State | Visual |
|-------|--------|
| Default | `border: 1px solid rgba(255,255,255,0.2)`, cream text |
| Hover | `border-color: --color-yellow`, slight glow |
| Selected | `background: --color-yellow`, `color: --color-black`, `font-weight: 700` |
| Focused (keyboard) | Yellow outline, `outline-offset: 2px` |

### Chip Data

```ts
const subjects = [
  { key: 'migration', icon: '→' },
  { key: 'fico',      icon: '→' },
  { key: 'mco',       icon: '→' },
  { key: 'audit',     icon: '→' },
  { key: 'other',     icon: '→' },
]
```

Labels come from i18n: `t(lang, 'contact.subjects.migration')` etc.

### Accessibility

- Each chip is a `<button type="button" role="option" aria-selected="true|false">`
- Wrap in `<div role="listbox" aria-label="Sujet du contact">`
- Keyboard: Tab to focus group, Arrow keys to navigate, Enter/Space to select

---

## 4. Form Fields

### Field Order

1. Subject chips (top, spanning full width)
2. Prénom & Nom
3. Entreprise
4. E-mail
5. Téléphone (optional)
6. Message (textarea)
7. GDPR consent checkbox
8. Submit button

### Field Specifications

#### Prénom & Nom
```html
<input
  type="text"
  name="name"
  id="contact-name"
  autocomplete="name"
  required
  aria-required="true"
  aria-describedby="contact-name-error"
/>
```

#### Entreprise
```html
<input
  type="text"
  name="company"
  id="contact-company"
  autocomplete="organization"
  required
  aria-required="true"
/>
```

#### E-mail
```html
<input
  type="email"
  name="email"
  id="contact-email"
  autocomplete="email"
  required
  aria-required="true"
/>
```

#### Téléphone (optional)
```html
<input
  type="tel"
  name="phone"
  id="contact-phone"
  autocomplete="tel"
  placeholder="+33 6 12 34 56 78"
/>
<!-- No required attr — clearly labelled optional in label text -->
```

#### Message
```html
<textarea
  name="message"
  id="contact-message"
  rows="5"
  required
  aria-required="true"
></textarea>
```

Auto-expand: textarea grows with content up to 10 rows, then scrolls.

#### Honeypot (anti-spam, hidden)
```html
<input
  type="text"
  name="_trap"
  tabindex="-1"
  autocomplete="off"
  style="position: absolute; left: -9999px; opacity: 0;"
  aria-hidden="true"
/>
```

#### GDPR Consent
```html
<div class="gdpr-field">
  <input
    type="checkbox"
    name="gdpr"
    id="contact-gdpr"
    required
    aria-required="true"
    aria-describedby="contact-gdpr-error"
  />
  <label for="contact-gdpr">
    J'accepte que mes données soient traitées pour répondre à ma demande.
    <a href="/politique-confidentialite" target="_blank" rel="noopener">
      En savoir plus
    </a>
  </label>
</div>
```

Custom checkbox styling: yellow checkmark on dark background, sharp corners.

---

## 5. Validation Logic

### Client-side (before submit)

```ts
interface FormData {
  name: string
  company: string
  email: string
  phone?: string
  subject: string
  message: string
  gdpr: boolean
  _trap: string
}

interface ValidationErrors {
  [field: string]: string
}

function validate(data: FormData, lang: Lang): ValidationErrors {
  const errors: ValidationErrors = {}

  if (!data.name.trim())
    errors.name = t(lang, 'contact.errors.name_required')

  if (!data.company.trim())
    errors.company = t(lang, 'contact.errors.company_required')

  if (!data.email.trim())
    errors.email = t(lang, 'contact.errors.email_required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = t(lang, 'contact.errors.email_invalid')

  if (!data.subject)
    errors.subject = t(lang, 'contact.errors.subject_required')

  if (!data.message.trim())
    errors.message = t(lang, 'contact.errors.message_required')

  if (!data.gdpr)
    errors.gdpr = t(lang, 'contact.errors.gdpr_required')

  return errors
}
```

### Error Display

- Errors appear **inline below** their field
- Error text: `--color-error` (#E53E3E), `--text-small`, `--font-display`
- Field gets `class="form-input error"` → `border-color: var(--color-error)`
- `aria-describedby` links field to its error element
- On re-validation (blur or second submit attempt): errors clear individually as fields are corrected

---

## 6. Submission Flow

### State Machine

```
IDLE
  ↓ (user clicks submit)
VALIDATING
  ↓ (errors found)     → IDLE (errors shown)
  ↓ (no errors)
SUBMITTING
  ↓ (API success)      → SUCCESS
  ↓ (API error)        → ERROR
```

### SUBMITTING state
- Submit button: disabled, shows `t(lang, 'contact.form.submit_loading')` with animated ellipsis or spinner
- All fields: `pointer-events: none`, opacity 0.6
- No page reload

### SUCCESS state
- Form fields **fade out** (opacity 0→0, 300ms)
- Success message **fades + slides in** (translateY(16px→0) + opacity 0→1, 600ms, ease-out-expo)
- Success content:
  ```
  ✓  (animated SVG checkmark, stroke draw-on)

  Message reçu.
  Merci pour votre message.
  Je vous réponds dans les 24 heures.
  ```
- Checkmark: SVG circle with tick, stroke animated via `stroke-dashoffset`
- No "send another message" button in V1

### ERROR state
- Form remains visible and editable
- Error banner appears above submit button
- Text: `t(lang, 'contact.errors.api_failure')` with clickable email fallback
- Error banner auto-dismisses after 8 seconds or on next submit attempt

---

## 7. API Endpoint

### Route
`POST /api/contact`

### Request payload
```json
{
  "name": "Jean Dupont",
  "company": "Acme SA",
  "email": "jean@acme.fr",
  "phone": "+33 6 12 34 56 78",
  "subject": "Migration S/4HANA",
  "message": "Bonjour, nous envisageons une migration...",
  "gdpr": true,
  "_trap": ""
}
```

### Response — success
```json
{ "success": true }
```
HTTP 200

### Response — error
```json
{ "success": false, "error": "EMAIL_SEND_FAILED" }
```
HTTP 500

### Server-side validation
Even with client-side validation, server must re-validate:
- Honeypot `_trap` must be empty → silent 200 if filled (don't reveal detection)
- All required fields present and non-empty
- Email format valid
- Message length: min 10 chars, max 2000 chars
- Rate limiting: max 5 submissions per IP per hour (Vercel Edge middleware)

### Email template (Resend)
```
Subject: [FiXiS] Nouveau contact — {subject}

Nom       : {name}
Entreprise: {company}
E-mail    : {email}
Téléphone : {phone || '—'}
Sujet     : {subject}

Message :
{message}

---
Envoyé depuis fixis.fr le {date} à {time}
IP: {ip} (conservée 30 jours pour conformité RGPD)
```

Reply-to header set to `{email}` — allows direct reply from inbox.

---

## 8. Direct Contact Info Block

Displayed in the left column, separated from the body copy by a thin horizontal rule (`border-top: 1px solid rgba(255,255,255,0.12)`).

### Items

```
📧  contact@fixis.fr          ← clickable mailto:
📞  +33 X XX XX XX XX         ← clickable tel:
💼  LinkedIn                  ← opens in new tab, rel="noopener noreferrer"
📍  Basé en France · Europe   ← plain text
⚡  Réponse sous 24h          ← plain text, yellow accent
```

Icons: Lucide (`Mail`, `Phone`, `Linkedin`, `MapPin`, `Zap`) — 20px, stroke 1.5.

Each item: `display: flex; align-items: center; gap: var(--space-3)`.

The email and phone links have `title` attributes for accessibility.

---

## 9. Accessibility Checklist (Contact-specific)

- [ ] All form fields have associated `<label>` elements
- [ ] Required fields marked with `aria-required="true"` (not just HTML `required`)
- [ ] Error messages linked via `aria-describedby`
- [ ] Form errors announced via `aria-live="polite"` region
- [ ] Subject chips have `role="listbox"` / `role="option"` + `aria-selected`
- [ ] Custom checkbox is keyboard-operable
- [ ] Submit button has descriptive text (not just an icon)
- [ ] Focus management on SUCCESS: focus moves to the success message heading
- [ ] Focus management on ERROR: focus moves to the error banner
- [ ] All interactive elements meet 44×44px minimum tap target
- [ ] Form is operable without a mouse (full keyboard flow)

---

## 10. Performance Notes

- Form component is a **client-side island** — loaded only when contact section enters viewport (`client:visible` in Astro)
- No form library (React Hook Form, Formik etc.) — native browser form APIs + minimal custom JS
- hCaptcha script loaded **lazily** — injected only when form is in view
- Form JS target: < 8kb gzipped

---

## 11. GDPR Data Handling

| Data point | Stored? | Where? | Retention |
|------------|---------|--------|-----------|
| Name | Email body only | Resend → inbox | Until deleted from inbox |
| Email | Email body + reply-to | Resend → inbox | Until deleted |
| Phone | Email body only | Resend → inbox | Until deleted |
| Company | Email body only | Resend → inbox | Until deleted |
| Message | Email body only | Resend → inbox | Until deleted |
| IP address | Server log only | Vercel logs | 30 days (Vercel default) |
| Consent timestamp | Not stored in V1 | — | — |

**Key point:** No personal data persisted to a database in V1. All data flows directly to the inbox via Resend. This simplifies GDPR compliance significantly.

**V2 consideration:** Store submissions in a lightweight DB (PlanetScale / Turso) for CRM purposes — requires explicit mention in privacy policy.
