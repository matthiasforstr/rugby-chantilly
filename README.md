# Rugby Chantilly — Site officiel

Site officiel du Rugby Club de Chantilly. Bilingue FR (par défaut) / EN.

## Stack

- **Astro** — static site generator
- **Tailwind CSS v4** — styling, design tokens from `DESIGN.md`
- **Pages CMS** ([pagescms.org](https://pagescms.org)) — browser-based content editor, edits files in this repo via GitHub OAuth
- **Vercel** — hosting + auto-deploy on `main` push
- **GitHub** — code + content storage

## Local development

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # production build
```

## Project structure

```
src/
  content/
    news/          → Markdown articles (managed via Pages CMS)
    sponsors/      → sponsors.json
    tiktok/        → posts.json (TikTok post URLs)
    config/        → site.json (iCal URL, TikTok account)
  i18n/            → fr.json, en.json (UI strings)
  layouts/         → Layout.astro
  pages/
    fr/            → French routes (default)
    en/            → English routes
  styles/          → global.css (design tokens)
public/
  images/
    logos/         → club + sponsor logos (SVG preferred)
    news/          → article cover images
    hero/          → hero section images / video posters
DESIGN.md          → design system source of truth
.pages.yml         → Pages CMS configuration
```

## Asset upload locations

| What | Where | Format |
|------|-------|--------|
| Club logo (full color) | `public/images/logos/club-logo.svg` | SVG preferred, PNG @ ≥1024px fallback |
| Club logo (white/monochrome) | `public/images/logos/club-logo-white.svg` | for dark backgrounds |
| Club crest only | `public/images/logos/club-crest.svg` | for favicon, small spaces |
| Favicon | `public/favicon.svg` | SVG, square |
| Sponsor logos | `public/images/logos/sponsor-{name}.svg` | one per sponsor |
| Hero image / video poster | `public/images/hero/hero-1.jpg` | landscape, ≥2400×1350 |
| News cover images | uploaded via Pages CMS → `public/images/news/` | landscape, ≥1600×900 |

## Pages CMS setup (one-time)

1. Visit [pagescms.org](https://pagescms.org), sign in with GitHub
2. Authorize the Pages CMS GitHub App on this repo
3. Open `pagescms.org/<owner>/rugby-chantilly` to edit content

Pages CMS reads `.pages.yml` at the repo root for collection definitions.

## Vercel deployment

Push to `main` → Vercel auto-deploys. Custom domain configurable in Vercel dashboard.

## Design system

See [DESIGN.md](./DESIGN.md) — "Heritage Tactician" theme. No 1px borders, Space Grotesk only,
forest green + pitch red palette, intentional asymmetry.
