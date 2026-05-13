/**
 * /api/contact
 * Contact form email delivery via Resend.
 * See docs/06-TECH-STACK.md §4 | docs/08-CONTACT-SPEC.md §7
 *
 * Requires env vars:
 *   RESEND_API_KEY  — Resend API key
 *
 * This route opts out of static pre-rendering (SSR only).
 */

import type { APIRoute } from 'astro'
import { Resend } from 'resend'

// Opt into server-side rendering for this route only
export const prerender = false

interface ContactPayload {
  name:    string
  company: string
  email:   string
  phone?:  string
  subject: string
  message: string
  gdpr:    boolean
  _trap:   string
}

// ---------------------------------------------------------------------------
// Server-side validation
// ---------------------------------------------------------------------------
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(data: ContactPayload): string | null {
  if (!data.name?.trim())    return 'MISSING_NAME'
  if (!data.company?.trim()) return 'MISSING_COMPANY'
  if (!data.email?.trim())   return 'MISSING_EMAIL'
  if (!isValidEmail(data.email)) return 'INVALID_EMAIL'
  if (!data.subject?.trim()) return 'MISSING_SUBJECT'
  if (!data.message?.trim()) return 'MISSING_MESSAGE'
  if (data.message.trim().length < 10)  return 'MESSAGE_TOO_SHORT'
  if (data.message.trim().length > 2000) return 'MESSAGE_TOO_LONG'
  if (!data.gdpr)            return 'MISSING_GDPR'
  return null
}

// ---------------------------------------------------------------------------
// Rate limiting (simple in-memory store — resets on cold start)
// For production, use an Edge-compatible KV store.
// ---------------------------------------------------------------------------
const ipSubmissions = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const WINDOW_MS  = 60 * 60 * 1000 // 1 hour

function isRateLimited(ip: string): boolean {
  const now   = Date.now()
  const entry = ipSubmissions.get(ip)

  if (!entry || now > entry.resetAt) {
    ipSubmissions.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT) return true

  entry.count++
  return false
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress ?? '0.0.0.0'

  // Rate limiting
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ success: false, error: 'RATE_LIMITED' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    )
  }

  let data: ContactPayload

  try {
    data = await request.json()
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'INVALID_JSON' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Honeypot check — silent 200 (don't reveal detection to bots)
  if (data._trap) {
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Server-side validation
  const validationError = validate(data)
  if (validationError) {
    return new Response(
      JSON.stringify({ success: false, error: validationError }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    )
  }

  // Send email via Resend
  const apiKey = import.meta.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set')
    return new Response(
      JSON.stringify({ success: false, error: 'SERVER_CONFIG_ERROR' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const resend = new Resend(apiKey)

  const now      = new Date()
  const dateStr  = now.toLocaleDateString('fr-FR')
  const timeStr  = now.toLocaleTimeString('fr-FR')

  try {
    await resend.emails.send({
      from:    'contact@fixis.fr',
      to:      'contact@fixis.fr',
      replyTo: data.email,
      subject: `[FiXiS] Nouveau contact — ${data.subject}`,
      html: `
        <table style="font-family:sans-serif;font-size:14px;color:#1a1a1a;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Nom</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${sanitize(data.name)}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Entreprise</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${sanitize(data.company)}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>E-mail</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${sanitize(data.email)}">${sanitize(data.email)}</a></td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Téléphone</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${sanitize(data.phone ?? '—')}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Sujet</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${sanitize(data.subject)}</td></tr>
        </table>
        <br>
        <p style="font-family:sans-serif;font-size:14px;color:#1a1a1a"><strong>Message :</strong></p>
        <p style="font-family:sans-serif;font-size:14px;color:#3a3a3a;line-height:1.6;white-space:pre-wrap">${sanitize(data.message)}</p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee">
        <p style="font-family:sans-serif;font-size:12px;color:#8a8a8a">
          Envoyé depuis fixis.fr le ${dateStr} à ${timeStr}<br>
          IP: ${ip} (conservée 30 jours — conformité RGPD)
        </p>
      `,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (err) {
    console.error('[contact] Resend error:', err)
    return new Response(
      JSON.stringify({ success: false, error: 'EMAIL_SEND_FAILED' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

// ---------------------------------------------------------------------------
// Minimal HTML sanitiser (prevent header injection / XSS in email)
// ---------------------------------------------------------------------------
function sanitize(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
