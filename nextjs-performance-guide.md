# Next.js Performance Optimization Guide
### A comprehensive, actionable playbook for faster loading, leaner bundles, and better Core Web Vitals

---

## Table of Contents

1. [How to use this guide](#how-to-use-this-guide)
2. [Phase 0 — Measure before you touch anything](#phase-0--measure-before-you-touch-anything)
3. [Phase 1 — Bundle & JavaScript optimization](#phase-1--bundle--javascript-optimization)
4. [Phase 2 — Rendering strategy](#phase-2--rendering-strategy)
5. [Phase 3 — Images & static assets](#phase-3--images--static-assets)
6. [Phase 4 — CSS Modules optimization](#phase-4--css-modules-optimization)
7. [Phase 5 — Network, caching & delivery](#phase-5--network-caching--delivery)
8. [Phase 6 — Ongoing monitoring & CI enforcement](#phase-6--ongoing-monitoring--ci-enforcement)
9. [Quick reference checklist](#quick-reference-checklist)

---

## How to use this guide

Work through this guide in phase order. Each phase builds on the one before it, and — critically — Phase 0 must come first. The single most common mistake developers make when optimizing performance is skipping measurement and jumping straight to tweaks. Without a baseline, you cannot know whether your changes actually helped, how much they helped, or whether you accidentally introduced a regression somewhere else.

The phases are ordered by leverage, not difficulty. Phase 1 (bundle size) and Phase 2 (rendering strategy) typically produce the largest improvements. Phases 3–5 are often quicker to implement but have a smaller per-task ceiling. Phase 6 is about making sure gains are permanent.

For each technique, this guide tells you exactly what to run, what to look at in the output, and what to change in your code.

---

## Phase 0 — Measure before you touch anything

### Why this matters

You need three things before changing a single line of code: a performance baseline (so you know where you started), a way to identify which problems are actually the biggest (so you prioritize correctly), and a way to verify that each change actually helped. Skipping this phase means optimizing by intuition, which is usually wrong.

### Step 1 — Run a Lighthouse audit

Open Chrome, navigate to your site (run `npm run dev` or `npm run build && npm run start` for a more realistic reading), open DevTools, and go to the Lighthouse tab. Set the mode to "Navigation", the device to "Mobile" (mobile throttles CPU and network, which surfaces real-world slowness), and click "Analyze page load". Do this in an incognito window so browser extensions don't distort the results.

The report gives you scores for Performance, Accessibility, Best Practices, and SEO. Under Performance, look at the individual diagnostic items — these tell you the *why* behind a slow score. The most important metrics to understand are:

**LCP (Largest Contentful Paint)** measures how long it takes for the biggest visible element — usually a hero image or heading — to render. The target is under 2.5 seconds. A slow LCP is almost always caused by an unoptimized hero image, a render-blocking resource (a large CSS or JS file), or slow server response time.

**INP (Interaction to Next Paint)** replaced FID in 2024 and measures how quickly the page responds to user interactions like clicks and key presses. The target is under 200ms. A slow INP usually means too much JavaScript is running on the main thread.

**CLS (Cumulative Layout Shift)** measures how much the page layout shifts after the initial render — that annoying jump when an image loads and pushes content down. The target is under 0.1. CLS is almost always caused by images or embeds without explicit `width` and `height` attributes.

### Step 2 — Install and run the bundle analyzer

The bundle analyzer is the single most informative tool for a Next.js app. It generates a visual treemap of every module in your JavaScript bundles, sized proportionally by their gzipped weight. You will immediately see if something like `moment.js` (67KB gzipped) is being imported for one date format, or if `lodash` is bundled in its entirety when only one function is used.

```bash
npm install --save-dev @next/bundle-analyzer
```

Then update your `next.config.js`:

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // your existing config
})
```

Run it with:

```bash
ANALYZE=true npm run build
```

This opens two treemaps in your browser — one for the client bundle and one for the server bundle. In the **client bundle**, look for:

- Any single block that is disproportionately large (anything over 50KB gzipped deserves scrutiny).
- Duplicate packages — the same library appearing more than once, often at different versions, because two dependencies pulled in slightly different versions of the same package.
- Libraries you recognize as dev tools or server-only utilities that have leaked into the client bundle.
- Icon libraries where the entire set is bundled instead of just the icons you use.

In the **server bundle**, large size matters less (it runs on your server, not the user's device), but it can still affect cold start times on serverless platforms like Vercel.

### Step 3 — Inspect the Coverage tab

In Chrome DevTools, go to the Coverage tab (open the command palette with Cmd+Shift+P and search "Coverage"). Click the record button, reload the page, and stop recording. The Coverage tab shows you exactly what percentage of each loaded JavaScript and CSS file was actually executed or applied during that page load. Any file with 60%+ unused code is a candidate for code splitting or removal.

### Step 4 — Check the Network waterfall

In the Network tab of DevTools, reload the page with throttling set to "Slow 4G" and look at the waterfall chart. You are looking for:

- **Render-blocking resources** — files at the top of the waterfall with a long purple bar that delay everything below them. These are usually large CSS files or synchronously loaded scripts.
- **Sequential fetches** — a staircase pattern where requests start only after the previous one finishes. These should be parallelized.
- **Large uncompressed files** — check the "Size" column. If a file shows a large transfer size (e.g., 200KB), hover over it to see if compression (gzip/Brotli) is being applied.
- **Long TTFB (Time to First Byte)** — a long gray bar at the start of your HTML document request means your server is slow to respond, which usually indicates a slow database query or missing caching.

Record these numbers. They are your baseline.

---

## Phase 1 — Bundle & JavaScript optimization

### Why this is the highest-leverage phase

JavaScript is the most expensive resource a browser processes — it must be downloaded, parsed, compiled, and executed before it can do anything useful. Unlike images, which are decoded lazily, every byte of JS in your initial bundle delays interactivity. This phase is about making sure only the JavaScript that is strictly necessary for the initial page view is shipped to the browser at all.

### 1.1 — Move components to the server (App Router)

If you are using the Next.js App Router (the `app/` directory), the default for all components is Server Components. This means they render on the server and send **zero JavaScript** to the browser — only the resulting HTML. This is the single highest-leverage change you can make, because it eliminates entire swaths of JavaScript from the client bundle entirely.

The rule is simple: a component only needs `'use client'` if it uses `useState`, `useReducer`, `useEffect`, `useRef`, or any browser event handler. Everything else — data fetching, conditional rendering, layout — should remain a Server Component.

```tsx
// app/products/page.tsx
// No 'use client' directive — this runs ONLY on the server.
// The entire component's JavaScript is never sent to the browser.
async function ProductsPage() {
  // This database call happens on the server.
  // The client never sees this logic — only the rendered HTML.
  const products = await db.products.findMany({ orderBy: { name: 'asc' } })

  return (
    <main>
      <h1>Products</h1>
      <ProductList products={products} />
    </main>
  )
}

export default ProductsPage
```

To audit your codebase for misplaced `'use client'` directives, run this command from your project root. It lists every file marked as a client component. Go through each one and ask: does this file actually use hooks or event handlers? If not, remove the directive.

```bash
# Find every file marked as a client component
grep -r "use client" ./app --include="*.tsx" --include="*.ts" -l
```

For each file the command returns, open it and check whether the `'use client'` directive is truly required. A common pattern is marking an entire page or layout as a client component just because one small interactive piece (like a dropdown menu) needs it. The fix is to extract the interactive piece into its own small client component and keep the parent as a Server Component.

### 1.2 — Dynamic imports for non-critical components

Any component that is not visible during the initial page render should be loaded on demand, not upfront. This includes modals, drawers, tabs, rich text editors, chart libraries, date pickers, and anything else that requires a user interaction to appear.

```tsx
import dynamic from 'next/dynamic'

// This component's code is NOT included in the initial JS bundle.
// It is fetched as a separate chunk only when it first renders.
const AnalyticsChart = dynamic(() => import('../components/AnalyticsChart'), {
  loading: () => <div className={styles.chartSkeleton} />,
  ssr: false, // Skip server rendering for browser-only libraries (e.g., D3, canvas-based charts)
})

const EditModal = dynamic(() => import('../components/EditModal'), {
  loading: () => null, // No loading state needed for a modal — it opens on click
})
```

After adding dynamic imports, re-run `ANALYZE=true npm run build` and verify that the library used by that component (e.g., the chart library) now appears in its own separate chunk in the treemap, not in the main bundle.

### 1.3 — Tree-shake large libraries

Many popular libraries are not tree-shakeable by default — importing from the package root pulls in the entire library. Identify these in your bundle analyzer output and switch to named imports or per-module imports.

```ts
// BAD — imports the entire lodash library (~70KB gzipped)
import _ from 'lodash'
const result = _.merge(a, b)

// GOOD — only bundles the `merge` function (~2KB)
import merge from 'lodash/merge'

// BAD — some icon libraries import the entire icon set
import { FaUser } from 'react-icons/fa'

// GOOD — most modern icon libraries support this already,
// but verify by checking the bundle analyzer output
import FaUser from 'react-icons/fa/FaUser'

// For date-fns, always use named imports (it's tree-shakeable)
import { format, parseISO, isAfter } from 'date-fns'
```

To find all your large library imports and check whether they are tree-shakeable, look at each large block in the bundle analyzer. If you see a library that looks large, search your codebase for how it's imported:

```bash
# Find all imports of a specific library to check the import style
grep -r "from 'lodash'" ./src --include="*.ts" --include="*.tsx"
grep -r "from 'moment'" ./src --include="*.ts" --include="*.tsx"
```

If you find `moment.js` in your bundle, replace it with `date-fns` or the native `Intl` API — `moment` is not tree-shakeable and adds about 67KB gzipped even if you use one function.

### 1.4 — Eliminate duplicate dependencies

Open your `package-lock.json` or `yarn.lock` and search for libraries that appear more than once at different version numbers. This happens when two of your dependencies require different versions of the same package and npm cannot de-duplicate them. The result is the same library bundled twice (or more) in your client bundle.

```bash
# Check if a package has multiple versions installed
npm ls react
npm ls react-dom
npm ls typescript
```

If you see a library listed at two versions, try forcing a single version with a `resolutions` field (Yarn) or `overrides` field (npm 8+):

```json
// package.json (npm 8+)
{
  "overrides": {
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

After applying overrides, run `npm install` and then re-run the bundle analyzer to confirm the duplicate is gone.

### 1.5 — Audit and remove unused packages

Run the following to identify packages in `node_modules` that are never imported anywhere in your source code:

```bash
npx depcheck
```

`depcheck` prints a list of "Unused dependencies" — packages in your `package.json` that have no imports in your codebase. Review the list carefully (some packages are used indirectly via config, e.g., ESLint plugins), then uninstall the genuine unused ones:

```bash
npm uninstall <package-name>
```

Also check for packages that should be in `devDependencies` but are in `dependencies`. Anything used only in build tooling, testing, or type checking does not need to ship and should be moved:

```bash
# These should NOT be in "dependencies" — move them to "devDependencies"
# typescript, eslint, jest, @types/*, prettier, storybook, etc.
npm install --save-dev typescript @types/react
```

---

## Phase 2 — Rendering strategy

### Why rendering strategy is structural, not cosmetic

Choosing the wrong rendering mode for a route is a foundational performance mistake that cannot be patched with caching or compression. A fully static page served from a CDN will always outperform a server-rendered page, which will always outperform a client-rendered page. The goal is to make each route *as static as possible* and only loosen that constraint where the data genuinely requires freshness.

### 2.1 — Static Generation (SSG) for content that doesn't change per-user

Any page where the content is the same for every visitor and doesn't need to change in real time should be statically generated at build time. This includes marketing pages, blog posts, documentation, about pages, and pricing pages.

In the App Router, a route is static by default if it doesn't read dynamic data (cookies, headers, or query params) at request time. You can explicitly force it:

```tsx
// This page is built once at deploy time and served from the CDN.
// There is no server involved at runtime — it's just a file.
export const dynamic = 'force-static'

export default async function AboutPage() {
  const content = await getCMSContent('about')
  return <AboutLayout content={content} />
}
```

To verify a route is being statically generated, look at the build output after running `npm run build`. Next.js prints a symbol next to each route:

```
○  /about              (static)
●  /blog/[slug]        (SSG, N pages)
λ  /dashboard          (server-rendered)
```

A circle (○) means fully static. A filled circle (●) means statically generated with dynamic paths. A lambda (λ) means server-rendered on every request. Aim to have as many circles as possible.

### 2.2 — Incremental Static Regeneration (ISR) for content that changes occasionally

ISR is the sweet spot for most content-driven applications. Pages are statically generated at build time (fast first load, served from CDN), but they are regenerated in the background after a configurable revalidation window. The user never waits for regeneration — they always get a cached response, and the next user after the cache expires gets the fresh version.

```tsx
// This page is served statically and regenerated in the background
// every 60 seconds if a request comes in after the cache expires.
export const revalidate = 60

export default async function ProductsPage() {
  const products = await fetchProducts()
  return <ProductGrid products={products} />
}
```

For content that should update immediately when you publish (e.g., a CMS), use on-demand revalidation instead of a time-based window:

```ts
// app/api/revalidate/route.ts
// Call this from your CMS webhook when content is published
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const { path, tag } = await request.json()
  if (tag) revalidateTag(tag)
  if (path) revalidatePath(path)
  return Response.json({ revalidated: true })
}
```

### 2.3 — Server-Side Rendering (SSR) for truly dynamic, personalized content

SSR should be reserved for pages where the content genuinely differs per user and must be completely fresh on every request — for example, a user's account dashboard, a page that reads from session cookies, or a real-time trading view. The cost is that every page view hits your server, which means TTFB is always at least as slow as your slowest data source.

```tsx
// Force this route to render on every request
export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  // This reads from the session cookie, so it must be dynamic
  const user = await getSessionUser()
  const stats = await getUserStats(user.id)
  return <Dashboard user={user} stats={stats} />
}
```

### 2.4 — Streaming with Suspense to unblock the initial response

Even within a server-rendered page, you can dramatically improve perceived performance by streaming the response in chunks. Instead of waiting for all data to be fetched before sending a single byte of HTML, you send the page shell immediately and stream slower sections as their data becomes available. The user sees the page structure right away rather than a blank screen.

```tsx
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <>
      {/* This renders and sends immediately */}
      <DashboardHeader />
      <DashboardNav />

      {/* This streams in when the slow query resolves */}
      <Suspense fallback={<StatsSkeleton />}>
        <SlowStatsWidget /> {/* hits a slow third-party API */}
      </Suspense>

      {/* This streams independently of the widget above */}
      <Suspense fallback={<ActivitySkeleton />}>
        <RecentActivity /> {/* queries the database */}
      </Suspense>
    </>
  )
}
```

Each `<Suspense>` boundary is independent — the `RecentActivity` section doesn't wait for `SlowStatsWidget` to resolve. The page is assembled progressively in the browser as chunks arrive.

### 2.5 — Parallel data fetching on the server

A common mistake that causes slow server response times is sequential `await` calls for independent data sources. Each `await` pauses execution until the previous promise resolves, meaning the total wait time is the *sum* of all fetch times. Fetching in parallel with `Promise.all` cuts the wait time to the *maximum* of any single fetch.

```ts
// BAD — sequential: 150ms + 200ms + 100ms = 450ms total server time
const user = await getUser(id)
const posts = await getPosts(id)
const recommendations = await getRecommendations(id)

// GOOD — parallel: max(150, 200, 100) = 200ms total server time
// All three fetches start simultaneously
const [user, posts, recommendations] = await Promise.all([
  getUser(id),
  getPosts(id),
  getRecommendations(id),
])
```

Look for sequential `await` patterns in your `page.tsx` and `layout.tsx` files — these are the most common location where this mistake appears.

### 2.6 — Use Next.js fetch caching to deduplicate requests

In the App Router, Next.js extends the native `fetch` function with built-in request deduplication and caching. If two different Server Components on the same page both call `fetch('/api/user/123')`, Next.js will only make one actual HTTP request and share the result between them. You can also attach cache tags to make individual cached responses invalidatable on demand.

```ts
// Tag your fetches so they can be invalidated precisely
async function getProduct(id: string) {
  const res = await fetch(`https://api.example.com/products/${id}`, {
    next: {
      revalidate: 3600,           // Cache for 1 hour, then revalidate
      tags: [`product-${id}`, 'products'], // Tag for on-demand invalidation
    },
  })
  return res.json()
}

// To invalidate a single product (e.g., after an edit):
revalidateTag(`product-${id}`)

// To invalidate all products (e.g., after a bulk import):
revalidateTag('products')
```

---

## Phase 3 — Images & static assets

### 3.1 — Replace all `<img>` tags with `next/image`

This is one of the fastest wins available. The Next.js `<Image>` component automatically converts images to WebP or AVIF format (30–50% smaller than JPEG/PNG), generates a `srcset` for responsive sizing, lazy-loads below-the-fold images, and prevents Cumulative Layout Shift by reserving space before the image loads. None of this requires any manual configuration.

```tsx
import Image from 'next/image'

// The priority prop is critical for your LCP image (hero banner, above-the-fold image).
// It injects a <link rel="preload"> into the document head, telling the browser
// to fetch this image immediately — before it even finishes parsing the HTML.
<Image
  src="/hero.jpg"
  alt="Hero banner showing our product"
  width={1200}
  height={600}
  priority                                         // Only on the LCP image — not every image
  sizes="(max-width: 768px) 100vw, 1200px"        // Tells the browser which size to download
  quality={85}                                     // 85 is the sweet spot; default is 75
/>

// For below-the-fold images, omit priority — lazy loading is the default
<Image
  src="/team-photo.jpg"
  alt="Our team"
  width={800}
  height={400}
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

To audit your codebase for raw `<img>` tags that should be converted:

```bash
# Find all raw <img> tags in your source files
grep -r "<img " ./app ./components --include="*.tsx" --include="*.jsx" -n
```

Review each result and replace with `<Image>` from `next/image`. The main exceptions are: images inside third-party components you don't control, and SVG files used as inline images (which should be inlined as React components instead — see below).

### 3.2 — Configure remote image domains

If your images are hosted on an external CDN or service (Cloudinary, S3, Contentful, etc.), you must whitelist the domain in `next.config.js` for `next/image` to process them:

```js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.contentful.com',
        // pathname: '/space-id/**',  // optional: restrict to a path
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}
```

### 3.3 — Self-host fonts with next/font

Fonts loaded from Google Fonts require a separate DNS lookup, TCP connection, and TLS handshake to Google's servers. On a slow connection, this alone can delay text rendering by hundreds of milliseconds. The `next/font` package solves this by downloading the font files at build time and self-hosting them from your own CDN — so fonts are served from the exact same origin as your other assets, with zero additional connection overhead. It also automatically injects `font-display: swap` and generates a CSS variable, eliminating layout shift.

```tsx
// app/layout.tsx
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply both font variables to the root element
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* globals.css — reference the CSS variables */
body {
  font-family: var(--font-inter), system-ui, sans-serif;
}

code, pre {
  font-family: var(--font-fira-code), monospace;
}
```

If you are using a self-hosted custom font (not from Google Fonts), use `next/font/local`:

```tsx
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    { path: '../public/fonts/MyFont-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/MyFont-Bold.woff2',    weight: '700', style: 'normal' },
  ],
  variable: '--font-myfont',
})
```

### 3.4 — Inline SVG icons instead of loading them as files

Every icon loaded as an `<img src="icon.svg">` or an `<Image>` tag creates an HTTP request. For icons used frequently, inline the SVG directly as a React component. The SVG markup is included in your JS bundle (which is already being served), so it costs zero additional HTTP requests and zero additional server round-trips.

```tsx
// components/icons/ChevronRight.tsx
// This is a zero-request, zero-HTTP-cost icon
export function ChevronRight({ size = 16, className }: { size?: number, className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"   // Inherits text color automatically — no prop needed
      strokeWidth={2}
      className={className}
    >
      <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
```

For large icon sets (dozens of icons), use a library like `lucide-react` which is fully tree-shakeable — only the icons you actually import are included in your bundle. Verify this by checking the bundle analyzer after a build.

---

## Phase 4 — CSS Modules optimization

### Why CSS Modules are already a good foundation

CSS Modules are a sound architectural choice for performance. They scope styles to individual components (which prevents dead CSS from accumulating as your codebase grows), produce minimal specificity, and Next.js automatically code-splits them into per-route stylesheets. The problems described in this section are the specific ways developers accidentally undermine these built-in gains.

### 4.1 — Audit and minimize globals.css

Every byte in `globals.css` is shipped on every page load, regardless of which components are actually rendered. Open your `globals.css` and apply this audit:

What belongs in `globals.css`: CSS reset or normalize rules, CSS custom property definitions (`:root { --color-primary: ...; }`), base typography for `html`, `body`, and bare text elements, and third-party library style overrides that cannot go in a module file.

What does not belong in `globals.css`: component-level styles, utility classes that are only used in one or two places, and animation keyframes that belong to a specific component (move these into the component's `.module.css` file using `@keyframes` — keyframes in module files are locally scoped by Next.js).

```bash
# Count the lines in your globals.css to establish a baseline
wc -l ./styles/globals.css

# Then look for component-like class names in globals.css
# (classes that reference specific components are a red flag)
grep -n "\." ./styles/globals.css | head -50
```

### 4.2 — Use CSS custom properties for theming (not scattered values)

If your color values, spacing scales, and typography sizes are duplicated across dozens of `.module.css` files, changes become expensive and CSS bundle size grows unnecessarily. Define your design tokens once in `globals.css` as CSS custom properties, then reference them in every module file.

```css
/* globals.css — define all design tokens once */
:root {
  /* Colors */
  --color-primary:    #0070f3;
  --color-primary-dk: #0051b3;
  --color-text:       #1a1a1a;
  --color-text-muted: #6b7280;
  --color-bg:         #ffffff;
  --color-surface:    #f9fafb;
  --color-border:     #e5e7eb;

  /* Spacing scale */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;

  /* Typography */
  --text-sm:   13px;
  --text-base: 16px;
  --text-lg:   18px;
  --text-xl:   22px;
  --text-2xl:  28px;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
```

```css
/* card.module.css — reference tokens, never hardcode values */
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  color: var(--color-text);
}

.cardTitle {
  font-size: var(--text-lg);
  color: var(--color-text);
}

.cardMeta {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}
```

### 4.3 — Use `composes` to share styles without duplication

If you find yourself copying the same group of declarations across multiple module files, CSS Modules' `composes` keyword lets you inherit styles from another class without duplication in the final CSS. The browser receives one copy of the declarations; the component receives multiple class names at runtime.

```css
/* shared.module.css */
.flexRow {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.visuallyHidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
```

```css
/* navItem.module.css */
.navItem {
  composes: flexRow from './shared.module.css';  /* Inherits flexRow styles */
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
}

.navLabel {
  composes: truncate from './shared.module.css'; /* Prevents text overflow */
  font-size: var(--text-sm);
}
```

### 4.4 — Keep selectors flat and specific

Deeply nested selectors increase the specificity of your CSS, which makes overrides harder and debugging more painful. More importantly, they tend to grow file size significantly over time because each nesting level creates a longer, more complex selector string. CSS Modules encourage flat naming because the class name scoping already prevents collisions — you don't need nesting for scoping.

```css
/* BAD — deep nesting, high specificity, hard to read */
.container .header .nav .navList .navItem .navLink:hover span { color: blue; }

/* GOOD — flat, component-scoped, easy to understand */
.navLinkText {
  color: var(--color-text-muted);
  transition: color 0.15s ease;
}
.navLink:hover .navLinkText {
  color: var(--color-primary);
}
```

### 4.5 — Minimize `:global` usage

Every `:global` selector in a module file opts that rule out of CSS Modules' scoping mechanism, which means it won't be tree-shaken if the component is removed, and it pollutes the global CSS namespace. Reserve `:global` exclusively for overriding third-party library styles where you have no other option.

```css
/* BAD — puts a global rule inside a module file */
:global(.react-datepicker__header) {
  background: var(--color-primary);
}

/* BETTER — if you must override a third-party lib, do it in globals.css
   and add a comment explaining why it's there */
```

```bash
# Find all :global usages in your module files to audit them
grep -rn ":global" ./styles ./components --include="*.module.css"
```

### 4.6 — Check for unused CSS with PurgeCSS (optional but powerful)

If your codebase has grown over time, there may be CSS module classes that were defined but are no longer referenced by any component. The Coverage tab in Chrome DevTools (see Phase 0, Step 3) will highlight unused CSS from your modules. For a more automated approach, you can integrate `@fullhuman/postcss-purgecss` into your build:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./app/**/*.{tsx,ts}', './components/**/*.{tsx,ts}'],
            defaultExtractor: content =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
}
```

Note that PurgeCSS requires careful configuration for CSS Modules because class names are hashed. Test thoroughly in a staging environment before enabling in production.

---

## Phase 5 — Network, caching & delivery

### 5.1 — Deploy on a CDN-first platform

Your static assets — JavaScript chunks, CSS files, images, fonts — should be served from CDN edge nodes geographically close to your users. A user in Tokyo requesting a file from a server in Virginia adds 150–200ms of latency before a single byte arrives. When that same file is cached on a CDN edge node in Tokyo, latency drops to under 10ms.

Vercel has the tightest Next.js integration (automatic edge caching, streaming support, ISR invalidation), but Netlify, Cloudflare Pages, and AWS CloudFront all work well. What matters is that you are not serving static assets from a single-region origin server.

### 5.2 — Configure aggressive Cache-Control headers

Next.js sets smart defaults for assets it controls (hashed JS and CSS chunks get `immutable` caching), but you should verify and extend the caching configuration for all asset types.

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // Next.js hashed chunks — safe to cache forever because
        // the filename changes whenever the content changes
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Images in the public folder — long cache, revalidate in background
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000',
          },
        ],
      },
      {
        // Fonts — these almost never change, cache aggressively
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

To verify caching headers are being applied correctly, check the `Cache-Control` response header for each asset type in the Network tab of Chrome DevTools (look in the "Headers" panel for a specific request).

### 5.3 — Control third-party script loading strategy

Raw `<script>` tags in your layout can block rendering. Replace every third-party script with Next.js's `<Script>` component, which gives you fine-grained loading strategy control:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}

        {/* Analytics: load after the page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXX"
          strategy="afterInteractive"
        />

        {/* Chat widget: load during browser idle time — lowest priority */}
        <Script
          src="https://widget.intercom.io/widget/xxxx"
          strategy="lazyOnload"
        />

        {/* Consent manager: must run before anything else */}
        <Script
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
```

Use `beforeInteractive` only for scripts that absolutely must run before the page hydrates (consent managers, anti-bot scripts). Everything else should be `afterInteractive` or `lazyOnload`. Misusing `beforeInteractive` is as bad as a plain `<script>` tag.

### 5.4 — Add `preconnect` for critical third-party origins

For domains you will definitely connect to (analytics, fonts, API servers), instruct the browser to establish the connection (DNS lookup + TCP + TLS) before the request is actually made. This saves 100–300ms per connection on first load.

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Preconnect to your API server */}
        <link rel="preconnect" href="https://api.yourapp.com" />

        {/* Preconnect to your analytics provider */}
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* dns-prefetch is a lighter-weight fallback for less-critical origins */}
        <link rel="dns-prefetch" href="https://cdn.segment.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

Do not add `preconnect` for every third-party origin — only for ones you are certain the page will connect to. Unnecessary preconnect hints waste connection resources.

---

## Phase 6 — Ongoing monitoring & CI enforcement

### 6.1 — Track Core Web Vitals in production

Lab testing (Lighthouse, PageSpeed Insights) tests a simulated user. Real-user monitoring (RUM) captures what your actual visitors experience, which is almost always different — different devices, different connection speeds, different geographic locations. Next.js has a built-in mechanism for capturing Web Vitals from real users:

```tsx
// app/layout.tsx or a dedicated analytics component
export function reportWebVitals(metric) {
  // Send to your analytics service
  console.log(metric) // Replace with your analytics call

  // Example: send to a custom endpoint
  fetch('/api/vitals', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: { 'Content-Type': 'application/json' },
  })
}
```

For Vercel deployments, enable Vercel Speed Insights — it captures real-user Core Web Vitals with zero configuration:

```bash
npm install @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights /> {/* Captures real-user vitals automatically */}
      </body>
    </html>
  )
}
```

### 6.2 — Add Lighthouse CI to your GitHub Actions workflow

Performance regressions are cheapest to catch at the pull request stage — before they ever reach production. Lighthouse CI runs a Lighthouse audit on every deployment and can block merges if scores drop below your defined thresholds.

First, install the Lighthouse CI CLI:

```bash
npm install --save-dev @lhci/cli
```

Create the budget configuration file:

```json
// budget.json — define your performance thresholds
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint",  "budget": 2000 },
      { "metric": "largest-contentful-paint", "budget": 2500 },
      { "metric": "total-blocking-time",      "budget": 300  },
      { "metric": "cumulative-layout-shift",  "budget": 0.1  }
    ],
    "resourceSizes": [
      { "resourceType": "script",   "budget": 300 },
      { "resourceType": "total",    "budget": 1000 }
    ]
  }
]
```

Create the Lighthouse CI configuration:

```js
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000', 'http://localhost:3000/products'],
      numberOfRuns: 3,
    },
    assert: {
      budgetFile: './budget.json',
    },
    upload: {
      target: 'temporary-public-storage', // Or configure your own LHCI server
    },
  },
}
```

Add the GitHub Actions workflow:

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci

      - run: npm run build

      - name: Run Lighthouse CI
        run: npx lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

### 6.3 — Set up bundle size monitoring

Lighthouse CI catches rendering performance regressions. Bundle size monitoring catches JS bloat regressions before they affect users. The `bundlesize` package lets you define size budgets for your compiled chunks:

```bash
npm install --save-dev bundlesize
```

```json
// package.json
{
  "bundlesize": [
    {
      "path": "./.next/static/chunks/pages/*.js",
      "maxSize": "100 kB"
    },
    {
      "path": "./.next/static/css/*.css",
      "maxSize": "30 kB"
    }
  ],
  "scripts": {
    "bundlesize": "bundlesize"
  }
}
```

Run it after every build in CI:

```yaml
# Add to your CI workflow after npm run build
- run: npm run bundlesize
```

### 6.4 — The pre-deploy checklist

Before every production deploy, run through this checklist:

```bash
# 1. Build the production bundle
npm run build

# 2. Check the build output — count static vs SSR routes
# Look for λ symbols — each one is a server-rendered route that could
# potentially be converted to ○ (static) if the data allows it
cat .next/build-manifest.json | grep -c '"/'

# 3. Analyze the bundle (interactive treemap)
ANALYZE=true npm run build

# 4. Check for TypeScript errors (type errors can hide bad patterns)
npx tsc --noEmit

# 5. Run bundlesize checks
npm run bundlesize

# 6. Run a local Lighthouse audit on the production build
npm run start &
npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html
open ./lighthouse-report.html
```

---

## Quick reference checklist

Work through these items in order. Tick each one off only after you have verified the result using the measurement tool mentioned.

**Phase 0 — Measure**
— Run Lighthouse on Mobile preset and record all six metrics as a baseline.
— Run `ANALYZE=true npm run build` and open the bundle analyzer treemap.
— Open the Coverage tab in DevTools and record unused JS/CSS percentages.
— Open the Network tab on Slow 4G and note any render-blocking resources.

**Phase 1 — Bundle & JS**
— Audit every `'use client'` file and remove the directive wherever hooks/events aren't used.
— Wrap every modal, drawer, chart, and below-fold heavy component in `next/dynamic`.
— Replace all `import _ from 'lodash'` patterns with per-function imports.
— Run `npx depcheck` and uninstall all confirmed unused packages.
— Check `npm ls react` for duplicate package versions and add `overrides` if needed.

**Phase 2 — Rendering**
— Check `npm run build` output and confirm marketing/blog pages show ○ (static).
— Add `export const revalidate = N` to content pages that change occasionally.
— Replace sequential `await` chains with `Promise.all` in all `page.tsx` files.
— Add `<Suspense>` boundaries around any component with a slow data dependency.

**Phase 3 — Images & assets**
— Run `grep -r "<img " ./app ./components` and replace all results with `next/image`.
— Add `priority` to the LCP image on each page (typically the hero or top banner image).
— Replace `@import url('https://fonts.googleapis.com/...')` with `next/font`.
— Convert frequently used SVG icons to inline React components.

**Phase 4 — CSS Modules**
— Audit `globals.css` — move component styles into module files, keep only resets and custom properties.
— Define all color, spacing, and type tokens as CSS custom properties in `:root`.
— Run `grep -rn ":global" ./styles ./components` and justify or remove each result.
— Flatten any selector nesting deeper than two levels.

**Phase 5 — Network**
— Verify `/_next/static/` files return `Cache-Control: immutable` in the Network tab.
— Replace all raw `<script>` tags with `next/script` and assign appropriate strategies.
— Add `<link rel="preconnect">` for every guaranteed third-party origin.

**Phase 6 — Monitoring**
— Install `@vercel/speed-insights` or wire up `reportWebVitals`.
— Add `lighthouserc.js` and `budget.json` and configure GitHub Actions workflow.
— Add `bundlesize` to `package.json` and CI pipeline.

---

*Generated as part of a Next.js performance optimization engagement. Re-run your Lighthouse baseline after completing each phase to measure cumulative impact.*
