import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site.js'

// Renders canonical, Open Graph, Twitter, and JSON-LD tags into <head> at
// build time so they appear in the static HTML source of every route.
export default function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
}) {
  const fullTitle =
    title === SITE.name ? SITE.name : `${title} | ${SITE.name}`
  const url = `${SITE.url}${path === '/' ? '' : path}`
  const desc = description || SITE.description
  const ogImage = image ? `${SITE.url}${image}` : `${SITE.url}/og-image.jpg`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={SITE.name} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}
