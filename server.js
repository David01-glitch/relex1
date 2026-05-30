// Production server for Golden Years Canoeing.
// Serves the pre-rendered static site from /dist with gzip compression,
// sensible cache headers, and a pre-rendered SPA/404 fallback.
import express from 'express'
import compression from 'compression'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'
import { existsSync, readFileSync } from 'node:fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, 'dist')
const PORT = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')
app.use(compression())

if (!existsSync(DIST)) {
  console.error('Build output not found. Run "npm run build" before starting the server.')
  process.exit(1)
}

const ONE_YEAR = 60 * 60 * 24 * 365

// Static assets. Hashed files in /assets are immutable; everything else
// (html, robots, sitemap, images at root) gets a short, revalidating cache.
app.use(
  express.static(DIST, {
    extensions: ['html'],
    redirect: false,
    setHeaders(res, filePath) {
      if (filePath.includes(`${join('assets')}`) || /\.(?:js|css|woff2?)$/.test(filePath)) {
        res.setHeader('Cache-Control', `public, max-age=${ONE_YEAR}, immutable`)
      } else if (extname(filePath) === '.html') {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
      } else {
        res.setHeader('Cache-Control', 'public, max-age=86400')
      }
    },
  })
)

// Resolve clean URLs like /about -> dist/about/index.html
app.get('*', (req, res) => {
  const clean = req.path.replace(/\/+$/, '')
  const candidate = join(DIST, clean, 'index.html')
  if (clean && existsSync(candidate)) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    return res.status(200).send(readFileSync(candidate))
  }

  // Unknown route: serve the pre-rendered 404 page with a 404 status.
  const notFound = join(DIST, '404.html')
  res.status(404)
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
  if (existsSync(notFound)) return res.send(readFileSync(notFound))
  return res.send(readFileSync(join(DIST, 'index.html')))
})

app.listen(PORT, () => {
  console.log(`Golden Years Canoeing running at http://localhost:${PORT}`)
})
