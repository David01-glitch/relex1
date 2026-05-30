// Post-build: create a top-level 404.html that static hosts look for.
import { copyFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

const src = join(DIST, '404', 'index.html')
if (await exists(src)) {
  await copyFile(src, join(DIST, '404.html'))
  console.log('postbuild: wrote dist/404.html')
} else {
  console.warn('postbuild: dist/404/index.html not found; skipped 404.html')
}
