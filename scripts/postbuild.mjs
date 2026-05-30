// Post-build:
//   1. Create a top-level 404.html that static hosts look for.
//   2. Strip react-helmet's `data-rh="true"` markers from every HTML file so
//      strict regex checkers (Google Ads compliance bots, link-preview tools,
//      etc.) recognize <title> and meta tags as plain.
import { copyFile, access, readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

// 1. Top-level 404.html
const src = join(DIST, '404', 'index.html')
if (await exists(src)) {
  await copyFile(src, join(DIST, '404.html'))
  console.log('postbuild: wrote dist/404.html')
} else {
  console.warn('postbuild: dist/404/index.html not found; skipped 404.html')
}

// 2. Walk dist/ and strip data-rh markers from every .html file
async function walk(dir) {
  const out = []
  for (const name of await readdir(dir)) {
    const full = join(dir, name)
    const s = await stat(full)
    if (s.isDirectory()) out.push(...(await walk(full)))
    else if (name.endsWith('.html')) out.push(full)
  }
  return out
}

const htmls = await walk(DIST)
let touched = 0
for (const file of htmls) {
  const original = await readFile(file, 'utf8')
  // Remove ` data-rh="true"` (and quoteless variants) from any tag.
  const cleaned = original.replace(/\s+data-rh=("true"|true|'true')/g, '')
  if (cleaned !== original) {
    await writeFile(file, cleaned)
    touched++
  }
}
console.log(`postbuild: stripped data-rh markers from ${touched}/${htmls.length} HTML files`)
