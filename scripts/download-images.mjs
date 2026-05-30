// Downloads real, keyword-themed photos into src/assets/images/<category>/
// Source: loremflickr.com (real Flickr Creative Commons photos by keyword).
// Run: npm run images
import { mkdir, writeFile, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'src', 'assets', 'images')

// category -> [ { file, tags, w, h } ]
const PLAN = {
  hero: [
    { file: 'hero-lake-sunrise.jpg', tags: 'lake,sunrise,canoe', w: 1600, h: 900 },
    { file: 'hero-dock-morning.jpg', tags: 'lake,dock,morning', w: 1600, h: 900 },
    { file: 'hero-paddle-calm.jpg', tags: 'canoe,paddle,water', w: 1600, h: 900 },
  ],
  lakes: [
    { file: 'lake-reflection.jpg', tags: 'lake,reflection,calm', w: 1200, h: 800 },
    { file: 'lake-pines.jpg', tags: 'lake,pine,forest', w: 1200, h: 800 },
    { file: 'lake-minnesota.jpg', tags: 'minnesota,lake,water', w: 1200, h: 800 },
    { file: 'lake-misty.jpg', tags: 'lake,mist,fog', w: 1200, h: 800 },
  ],
  canoeing: [
    { file: 'canoe-couple.jpg', tags: 'canoe,paddling,people', w: 1200, h: 800 },
    { file: 'canoe-paddle.jpg', tags: 'canoe,paddle,oar', w: 1200, h: 800 },
    { file: 'canoe-shore.jpg', tags: 'canoe,shore,lake', w: 1200, h: 800 },
    { file: 'canoe-red.jpg', tags: 'canoe,boat,red', w: 1200, h: 800 },
  ],
  cabins: [
    { file: 'cabin-woods.jpg', tags: 'cabin,woods,wood', w: 1200, h: 800 },
    { file: 'cabin-lakeside.jpg', tags: 'cabin,lake,cottage', w: 1200, h: 800 },
    { file: 'cabin-porch.jpg', tags: 'cabin,porch,rustic', w: 1200, h: 800 },
  ],
  community: [
    { file: 'community-campfire.jpg', tags: 'campfire,friends,evening', w: 1200, h: 800 },
    { file: 'community-seniors.jpg', tags: 'seniors,outdoor,smiling', w: 1200, h: 800 },
    { file: 'community-gathering.jpg', tags: 'people,lake,gathering', w: 1200, h: 800 },
  ],
  camping: [
    { file: 'camping-tent.jpg', tags: 'camping,tent,forest', w: 1200, h: 800 },
    { file: 'camping-fire.jpg', tags: 'campfire,camping,night', w: 1200, h: 800 },
    { file: 'camping-gear.jpg', tags: 'camping,gear,backpack', w: 1200, h: 800 },
  ],
  travel: [
    { file: 'travel-trail-map.jpg', tags: 'map,trail,outdoor', w: 1200, h: 800 },
    { file: 'travel-road.jpg', tags: 'road,forest,travel', w: 1200, h: 800 },
    { file: 'travel-wildlife.jpg', tags: 'loon,bird,lake', w: 1200, h: 800 },
  ],
  blog: Array.from({ length: 12 }).map((_, i) => ({
    file: `blog-${String(i + 1).padStart(2, '0')}.jpg`,
    tags: [
      'canoe,lake', 'lake,sunrise', 'forest,trail', 'cabin,lake',
      'campfire,evening', 'paddle,water', 'dock,morning', 'pine,forest',
      'wildlife,lake', 'kayak,river', 'autumn,lake', 'tent,camping',
    ][i],
    w: 1000, h: 700,
  })),
}

let lock = 100
async function download(category, item) {
  const dir = join(OUT, category)
  await mkdir(dir, { recursive: true })
  const dest = join(dir, item.file)
  try {
    const s = await stat(dest)
    if (s.size > 4000) return `skip ${category}/${item.file}`
  } catch {}
  const seed = lock++
  const url = `https://loremflickr.com/${item.w}/${item.h}/${item.tags}?lock=${seed}`
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { redirect: 'follow' })
      if (!res.ok) throw new Error('HTTP ' + res.status)
      const buf = Buffer.from(await res.arrayBuffer())
      if (buf.length < 4000) throw new Error('tiny file ' + buf.length)
      await writeFile(dest, buf)
      return `ok   ${category}/${item.file} (${buf.length} bytes)`
    } catch (err) {
      if (attempt === 4) return `FAIL ${category}/${item.file}: ${err.message}`
      await new Promise((r) => setTimeout(r, 1200 * attempt))
    }
  }
}

const jobs = []
for (const [category, items] of Object.entries(PLAN)) {
  for (const item of items) jobs.push(download(category, item))
}
const results = await Promise.all(jobs)
for (const line of results) console.log(line)
const failed = results.filter((r) => r.startsWith('FAIL'))
console.log(`\nDone. ${results.length - failed.length}/${results.length} downloaded.`)
if (failed.length) process.exit(1)
