// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

// https://astro.build/config
// output: 'static' — all pages pre-rendered by default.
// The API route (src/pages/api/contact.ts) opts into SSR via:
//   export const prerender = false
export default defineConfig({
  site: 'https://fixis.fr',
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
