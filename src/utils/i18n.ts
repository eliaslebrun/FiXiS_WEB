/**
 * FiXiS i18n utility
 * See docs/06-TECH-STACK.md §3
 *
 * Usage:
 *   import { t, getLang, setLang } from '../utils/i18n'
 *   const label = t('fr', 'hero.cta')  // → "Parlons-en"
 */

import fr from '../i18n/fr.json'
import en from '../i18n/en.json'

export type Lang = 'fr' | 'en'

const translations: Record<Lang, Record<string, unknown>> = { fr, en }

const STORAGE_KEY = 'fixis_lang'
const DEFAULT_LANG: Lang = 'fr'

/**
 * Resolve a dot-notation key against a translations object.
 * Returns the key string itself if not found (never crashes).
 */
export function t(lang: Lang, key: string): string {
  const parts = key.split('.')
  let node: unknown = translations[lang]
  for (const part of parts) {
    if (node === null || typeof node !== 'object') return key
    node = (node as Record<string, unknown>)[part]
  }
  if (typeof node === 'string') return node
  return key
}

/**
 * Resolve a key that returns a string array (e.g. about.credentials).
 * Returns an empty array if the key doesn't resolve to an array.
 */
export function tArray(lang: Lang, key: string): string[] {
  const parts = key.split('.')
  let node: unknown = translations[lang]
  for (const part of parts) {
    if (node === null || typeof node !== 'object') return []
    node = (node as Record<string, unknown>)[part]
  }
  if (Array.isArray(node)) return node as string[]
  return []
}

/**
 * Resolve a key that returns an array of objects (e.g. trust.stats).
 */
export function tObjectArray<T = Record<string, string>>(lang: Lang, key: string): T[] {
  const parts = key.split('.')
  let node: unknown = translations[lang]
  for (const part of parts) {
    if (node === null || typeof node !== 'object') return []
    node = (node as Record<string, unknown>)[part]
  }
  if (Array.isArray(node)) return node as T[]
  return []
}

/* -----------------------------------------------------------------------
   Client-side helpers (browser only)
   ----------------------------------------------------------------------- */

/**
 * Get the active language — from localStorage, then browser preference,
 * then default 'fr'.  Safe to call server-side (returns DEFAULT_LANG).
 */
export function getLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG

  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
  if (stored === 'fr' || stored === 'en') return stored

  const browser = navigator.language?.slice(0, 2)
  if (browser === 'en') return 'en'

  return DEFAULT_LANG
}

/**
 * Persist language choice, update <html lang="">, dispatch a custom event
 * so all reactive components can re-render.
 */
export function setLang(lang: Lang): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
  window.dispatchEvent(new CustomEvent('fixis:lang-change', { detail: { lang } }))
}
