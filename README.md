# Golden Years Canoeing

A canoeing and relaxing lake adventure blog for seniors. This is a **statically
pre-rendered React site** — every route is rendered to real HTML at build time,
so the full content (headings, articles, FAQs, testimonials, legal pages, contact
details, and adventure guides) is present in the page source and remains readable
**even with JavaScript disabled**.

- **Framework:** React 18 + Vite 5
- **Routing:** React Router DOM 6
- **Styling:** Tailwind CSS
- **Static pre-rendering:** [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg)
- **Production server:** Express + `compression`
- **Analytics:** Google Analytics 4 (GA4) with **Google Consent Mode v2** (default denied)

---

## Business details

- **Name:** Golden Years Canoeing
- **Email:** goldenyearscanoeing@gmail.com
- **Phone:** (612) 547-3182
- **Address:** 901 Lakeview Harbor Rd, Minneapolis, MN 55408

---

## Project structure

```
.
├── index.html                 # HTML template (GA4 + Consent Mode v2 + no-JS accordion CSS)
├── server.js                  # Express server: compression, static, cache headers, SPA/404 fallback
├── vite.config.js             # Vite + SSG options
├── tailwind.config.js         # Design system (lake/forest/sand palette, Fraunces + Inter)
├── postcss.config.js
├── package.json               # Node 20.x, scripts
├── Procfile / app.json        # Heroku
├── amplify.yml                # AWS Amplify
├── vercel.json / netlify.toml # Vercel / Netlify
├── scripts/
│   ├── download-images.mjs    # Downloads real keyword-themed photos locally
│   └── postbuild.mjs          # Emits top-level 404.html
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   ├── robots.txt             # Allows all crawling, points to sitemap
│   └── sitemap.xml
└── src/
    ├── main.jsx               # ViteReactSSG entry
    ├── routes.jsx             # Route table (all 15 routes)
    ├── index.css             # Tailwind layers + component classes
    ├── assets/images/         # All images (hero, lakes, canoeing, cabins, community, blog, camping, travel)
    ├── components/            # Navbar, Footer, Seo, Accordion, CookieBanner, ScrollToTop, ...
    ├── data/                  # site, blog, guides, home, faqs, testimonials, legal, images
    ├── pages/                 # Home, About, Blog, Community, Contact, GuidePage, LegalPage, NotFound
    └── utils/                 # analytics.js (trackEvent/trackPageView/consent), jsonld.js
```

### Routes

`/` · `/about` · `/blog` · `/community` · `/contact` ·
`/lake-travel-guides` · `/canoe-beginner-tips` · `/scenic-waterways` ·
`/outdoor-retirement-life` · `/camping-and-cabins` · `/senior-adventure-stories` ·
`/legal/privacy` · `/legal/terms` · `/legal/refund` · `/404`

---

## Getting started

Requires **Node 20.x**.

```bash
# 1. Install dependencies
npm install

# 2. (Optional) Re-download the local images by keyword
npm run images

# 3. Start the dev server (http://localhost:5173)
npm run dev
```

## NPM scripts

| Script            | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Vite dev server with hot reload.                                    |
| `npm run build`   | Pre-renders every route to static HTML in `dist/`, then `postbuild`.|
| `npm run preview` | Serves the built `dist/` with Vite's static preview.                |
| `npm run serve` / `npm start` | Runs the Express production server (`server.js`).       |
| `npm run images`  | Downloads themed photos into `src/assets/images/`.                  |

## Production build & serve

```bash
npm run build     # outputs static HTML for all routes into dist/
npm start         # serves dist/ via Express on PORT (default 3000)
```

Verify the no-JS requirement by opening `dist/index.html` (or any
`dist/<route>/index.html`) and confirming the article, FAQ, testimonial, legal,
and contact content is present in the raw markup.

---

## Deployment

### Render (recommended)
A `render.yaml` blueprint is included. It deploys a Node web service that runs
the Express server in `server.js`, with `$PORT`, gzip, and pre-rendered 404 all
handled.

1. Push this repo to GitHub.
2. In the Render dashboard, click **New → Blueprint**, point it at the repo,
   and let it detect `render.yaml`.
3. Render runs `npm ci && npm run build` then `node server.js`. The first
   deploy takes 2–3 minutes; subsequent pushes auto-deploy.

If you prefer to skip the blueprint and configure manually:

| Field             | Value                                  |
| ----------------- | -------------------------------------- |
| Service type      | Web Service                            |
| Runtime           | Node                                   |
| Build command     | `npm ci && npm run build`              |
| Start command     | `node server.js`                       |
| Node version      | `20.19.0` (env var `NODE_VERSION`)     |
| `NPM_CONFIG_PRODUCTION` | `false` (so Vite installs during build) |
| Health check path | `/`                                    |

The instance's $PORT is injected by Render; `server.js` reads it automatically.

### Heroku
Heroku uses `Procfile` (`web: node server.js`) and `app.json`.

```bash
heroku create golden-years-canoeing
git push heroku main
# Build runs automatically; server.js serves dist/ on $PORT.
```
`NPM_CONFIG_PRODUCTION=false` (set in `app.json`) ensures devDependencies install
so Vite is available at build time.

### Vercel
`vercel.json` sets `buildCommand: npm run build` and `outputDirectory: dist` with
`cleanUrls`. Import the repo in the Vercel dashboard or run:

```bash
npm i -g vercel
vercel --prod
```

### Netlify
`netlify.toml` sets the build command, publish directory (`dist`), Node 20, cache
headers, and a 404 rule.

```bash
npm i -g netlify-cli
netlify deploy --prod
```
Or connect the repo in the Netlify dashboard (build `npm run build`, publish `dist`).

### AWS Amplify
`amplify.yml` defines the build (`npm ci` → `npm run build`) and `dist` as the
artifact base directory. Connect the repository in the Amplify console; it detects
`amplify.yml` automatically.

---

## Analytics & consent

- The GA4 tag (`G-4J046JXWVC`) is embedded in `index.html`.
- **Consent Mode v2** defaults `ad_storage` and `analytics_storage` to **denied**.
- The cookie banner stores the visitor's choice in `localStorage` and updates
  consent to `granted` on accept. Re-visits restore the saved choice before GA loads.
- Helpers live in `src/utils/analytics.js`: `trackPageView()`, `trackEvent()`,
  `getStoredConsent()`, `setConsent()`. Route changes fire a `page_view` via
  `ScrollToTop`.

## Accessibility & SEO

- Semantic landmarks (`header`/`nav`/`main`/`footer`/`article`/`address`), skip link,
  visible focus states, ARIA-wired accordions, and strong contrast.
- Per-page `<title>`, meta description, canonical, Open Graph, and Twitter tags.
- JSON-LD: `Organization`, `WebSite`, `FAQPage`, `Article`, `BreadcrumbList`.
- `robots.txt` (allows all, links the sitemap) and `sitemap.xml` included.

---

## License

© Golden Years Canoeing. All rights reserved. Content and design are proprietary.
