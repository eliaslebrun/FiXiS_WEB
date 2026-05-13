# FiXiS — Project Documentation Suite

> SAP Consulting · Micro-Enterprise · Contact Website

---

## Document Index

| # | Document | Description |
|---|----------|-------------|
| 1 | `README.md` | This file — project overview & index |
| 2 | `01-BRIEF.md` | Creative & strategic brief |
| 3 | `02-SITEMAP.md` | Site architecture & URL structure |
| 4 | `03-WIREFRAMES.md` | Page-level wireframes (ASCII/text) |
| 5 | `04-FUNCTIONAL-REQUIREMENTS.md` | Feature specs & acceptance criteria |
| 6 | `05-DESIGN-SYSTEM.md` | Visual language, tokens, components |
| 7 | `06-TECH-STACK.md` | Recommended stack with rationale |
| 8 | `07-CONTENT.md` | Copy (FR + EN), i18n structure |
| 9 | `08-CONTACT-SPEC.md` | Detailed contact feature specification |
| 10 | `09-CHECKLIST.md` | Pre-launch checklist |

---

## Project at a Glance

**Client:** FiXiS  
**Type:** Micro-enterprise (1 employee), SAP consulting  
**Goal:** Establish a premium digital presence that communicates expertise, personality and trust — and converts visitors into leads via a top-notch contact experience.  
**Audience:** Decision-makers at mid-size companies looking for SAP consulting (FR + EN-speaking markets)  
**Languages:** French (primary), English  
**Pages:** 1 (single-page) or 2 (landing + contact) — TBD with client  
**Brand colors:** #FCD405 (Voltage Yellow), #1B8F3A (Forest Green)

---

## Design References

| URL | What to borrow |
|-----|---------------|
| juliavolkmar.de | Clean typographic hierarchy, editorial calm, personal warmth |
| beckmans.college/2024/sv | Bold grid-breaking layout, confident white space, strong headline rhythm |
| michaelspeichert.com | Micro-interactions, restrained but expressive motion, dark/light contrast |
| cavempt.com | Texture, anti-corporate rawness, unexpected color pops |

**Synthesis:** High-contrast editorial design with a human, craft-focused voice — not a corporate brochure, not a portfolio ego-trip. Something that feels built, considered, and quietly confident.

---

## Quick-Start for Developers

```bash
# Clone and install (once stack is confirmed — see 06-TECH-STACK.md)
git clone <repo>
cd fixis
npm install

# Dev
npm run dev

# Build
npm run build

# i18n keys live in
/src/i18n/fr.json
/src/i18n/en.json
```
