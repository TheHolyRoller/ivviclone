# ivvi Clone

This project is a Next.js App Router website for ivvi marketing pages, content pages, and lead capture flows.

## Tech Stack

- Next.js `16`
- React `19`
- Tailwind CSS `4` (via PostCSS)
- CSS modules plus global CSS variables
- Vercel Analytics

## Local Setup

### Requirements

- Node.js (current LTS recommended)
- npm (repo includes `package-lock.json`)

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and Production Run

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

### Bundle Analysis

```bash
npm run analyze
```

## Environment Variables

There is no committed `.env.example`. The following environment variables are used by code:

- `NEXT_PUBLIC_SITE_URL` (optional): used for metadata base URL in `app/siteUrl.js`.
  - If missing, defaults to `https://ivviclone.vercel.app`.
  - Accepts values with or without protocol.
- `ASSESSORS_CONTACT_UPSTREAM_URL` (optional): used by `app/api/contact/assessors/route.js`.
  - If set, assessor form submissions are proxied upstream.
  - If unset, the API still returns success JSON locally.
- `ANALYZE`: used in `next.config.mjs` to enable `@next/bundle-analyzer` (set automatically by `npm run analyze`).

Example `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=localhost:3000
ASSESSORS_CONTACT_UPSTREAM_URL=https://example.com/form-endpoint
```

## Routing Overview

This project uses only the Next.js App Router in `app/`.

### Site Routes (`page.js`)

- `/` -> `app/page.js`
- `/accessibility` -> `app/accessibility/page.js`
- `/accesstowork` -> `app/accesstowork/page.js`
- `/action` -> `app/action/page.js`
- `/agreement` -> `app/agreement/page.js`
- `/assessors` -> `app/assessors/page.js`
- `/bett-press-release` -> `app/bett-press-release/page.js`
- `/blog` -> `app/blog/page.js`
- `/contact` -> `app/contact/page.js`
- `/cookies` -> `app/cookies/page.js`
- `/customersupport` -> `app/customersupport/page.js`
- `/dsa` -> `app/dsa/page.js`
- `/ivvi` -> `app/ivvi/page.js`
- `/login` -> `app/login/page.js`
- `/pressrelease` -> `app/pressrelease/page.js`
- `/pricing` -> `app/pricing/page.js`
- `/privacy` -> `app/privacy/page.js`
- `/resources` -> `app/resources/page.js`
- `/schools` -> `app/schools/page.js`
- `/students` -> `app/students/page.js`
- `/team` -> `app/team/page.js`

### API Routes (`route.js`)

- `POST /api/contact/assessors` -> `app/api/contact/assessors/route.js`
  - Validates and sanitizes assessor contact submissions.
  - Optionally forwards to an upstream form endpoint.

### Route Notes

- No dynamic route segments (`[slug]`, `[id]`, catch-all) are currently present.
- No `middleware.js` in the repository.
- No custom redirects/rewrites are defined in `next.config.mjs` or `vercel.json`.

## Project Structure

```text
ivviclone/
  app/
    api/contact/assessors/route.js   # API endpoint for assessor form
    Components/                      # Reusable UI/content components
    Styles/                          # CSS modules and component styles
    layout.js                        # Root layout (Navbar, Hamburger, Footer, Analytics)
    globals.css                      # Global styles, fonts, design tokens
    siteUrl.js                       # Metadata base URL helper
    ...route folders...              # Each folder with page.js maps to a route
  lib/
    assessorsContactForm.js          # Validation/sanitization logic for assessor API
  public/
    images/                          # Marketing/site imagery
    icons/                           # Favicons and icon assets
    *.pdf                            # Downloadable guides/assets
  next.config.mjs                    # Next config, security headers, image config
  csp.mjs                            # CSP policy construction
  vercel.json                        # Vercel security headers
  package.json                       # Scripts and dependencies
```

## How the App Is Structured

- `app/layout.js` provides the global shell for all routes:
  - Includes global CSS and metadata.
  - Renders `Hamburger`, `Navbar`, page content, and `Footer`.
  - Adds Vercel Analytics.
- Each route page in `app/*/page.js` composes route-specific sections from `app/Components`.
- Styling is a mix of:
  - Global CSS variables and base styles (`app/globals.css`)
  - CSS modules in `app/Styles`
  - Component-level class names and some inline styles.
- Forms are primarily client-side submission flows, with one local API route for assessor contact handling.

## Security and Headers

- CSP and security headers are configured in both:
  - `next.config.mjs` (`headers()` for app/static/image/font routes)
  - `vercel.json` (platform-level headers)
- CSP policy source helper: `csp.mjs`.

## Deployment

- Optimized for Vercel deployment.
- Standard Next.js build/start process:
  - `npm run build`
  - `npm start`

## Notes

- `app/layout.js` preloads fonts from `/fonts/...`; ensure matching font files are available under `public/fonts` in deployment.
