# 01 — Creative & Strategic Brief

## 1. Context

FiXiS is a one-person SAP consulting firm. The sole consultant operates at a senior level, advising mid-size enterprises on SAP implementation, migration, and optimization. The business is built on reputation, referrals, and trust — not volume.

The website serves a single, critical function: **make a serious first impression and make it easy to get in touch.**

---

## 2. Business Objectives

| Priority | Objective |
|----------|-----------|
| 1 | Generate qualified contact requests (inbound leads) |
| 2 | Establish credibility and expertise at first glance |
| 3 | Signal professional seriousness while remaining approachable |
| 4 | Serve both French and English-speaking prospects equally |

---

## 3. Target Audience

**Primary:** CFOs, IT Directors, Transformation Leads at French mid-market companies (50–500 employees) considering SAP S/4HANA migration, SAP FI/CO implementation, or operational consulting.

**Secondary:** International contacts (Benelux, Germany, Switzerland) preferring English communication.

**What they fear:** Overpriced big-4 consultants, flaky freelancers, vague deliverables, wasted time.  
**What they want:** Expertise, reliability, directness, a real human on the other end.

---

## 4. Brand Positioning

> **"The precision of a firm. The agility of one person."**

FiXiS is not trying to look like Accenture. It's also not trying to look like a solopreneur side hustle. The brand lives in a credible, confident middle ground — artisanal expertise, direct relationships, measurable results.

**Tone of voice:**
- Direct, not verbose
- Confident, not arrogant
- Human, not corporate
- Technical, but never jargon-heavy in the headline layer

---

## 5. Design Direction

### 5.1 Aesthetic Target

**Editorial-brutalist with warmth.**

Take the typographic rigour of a European art publication, the spatial confidence of a design portfolio, and cut it with the grounded warmth of someone who actually solves real problems for real companies.

NOT: a typical B2B SaaS landing page  
NOT: an overly precious portfolio site  
YES: something that makes a CFO think "this person knows what they're doing" AND "I'd enjoy working with them"

### 5.2 Color Role

| Color | Role |
|-------|------|
| `#FCD405` Voltage Yellow | Energy, accent, highlights, hover states, key CTAs |
| `#1B8F3A` Forest Green | Depth, trust, section backgrounds, secondary elements |
| `#0A0A0A` Near-black | Primary text, dominant backgrounds |
| `#F5F2EC` Off-white/cream | Light backgrounds, breathing space |

**Dominant mode:** Dark backgrounds with yellow accent. Green used sparingly for depth and contrast.

### 5.3 Typography Direction

Display: Something with personality — architectural, European. Consider: **Neue Haas Grotesk**, **Aktiv Grotesk Extended**, or open-source alternatives like **Space Grotesk** (avoid), **DM Sans** (avoid), **Cabinet Grotesk**, **Familjen Grotesk**, **Instrument Serif** (for contrast), **Syne**, or **Bebas Neue** at large scale.

Body: Highly legible, slightly warm. Consider **Lora**, **Source Serif 4**, or **Libre Baskerville** for body — creating a type tension between a grotesque display and serif body.

### 5.4 Motion Principles

- Slow, deliberate — not flashy
- Page-load sequence: staggered fade/slide reveals
- Hover states: subtle yellow underlines, color transitions
- Contact form: smooth field expansion, satisfying submit state
- No parallax gimmicks
- Respect `prefers-reduced-motion`

---

## 6. Scope

### In scope
- Landing page (hero, services overview, about/trust, contact CTA or full contact form)
- Contact page (if 2-page option chosen)
- FR/EN language switcher
- Contact form with email delivery
- Legal mentions page (mentions légales — required by French law)
- Responsive (mobile-first)

### Out of scope (V1)
- Blog / case studies
- Client login / portal
- CMS admin interface
- Booking / calendar integration
- Analytics dashboard

### V2 candidates
- Case study section
- Calendly/Cal.com integration
- Subtle cursor customization
- Dark/light toggle

---

## 7. Success Metrics

| Metric | Target (3 months post-launch) |
|--------|-------------------------------|
| Contact form submissions | ≥ 2/month |
| Bounce rate | < 60% |
| Avg. time on site | > 1:30 |
| Mobile usability score (Lighthouse) | > 90 |
| Performance score (Lighthouse) | > 90 |

---

## 8. Constraints & Notes

- **GDPR compliance required** — French law applies. Form data handling and cookie policy must be explicit.
- **Hosting:** Suggest Vercel (free tier sufficient) or Netlify.
- **Email delivery:** Resend or Formspark to avoid backend complexity.
- **Domain:** To be confirmed by client (fixis.fr or fixis.consulting recommended).
- **No CMS required for V1** — copy changes can be done via i18n JSON files.
