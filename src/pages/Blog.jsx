import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { ARTICLES } from '../data/blog.js'
import { lakes } from '../data/images.js'
import { breadcrumbLd } from '../utils/jsonld.js'

export default function Blog() {
  const featured = ARTICLES[0]
  const rest = ARTICLES.slice(1)

  return (
    <>
      <Seo
        title="Blog"
        description="Original, beginner-friendly articles on canoeing, scenic lakes, cabin getaways, outdoor wellbeing, and senior adventure stories — written for paddlers over 50."
        path="/blog"
        jsonLd={breadcrumbLd([{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }])}
      />

      <PageHero
        eyebrow="The journal"
        title="Stories and guides from the shoreline."
        lead="Twelve original, beginner-friendly reads on paddling, scenic destinations, gear, wellbeing, and the community we love. Every article opens right here on the page — no pop-ups, no redirects."
        image={lakes.lakeMisty}
        alt="Mist drifting over a calm northern lake at dawn"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Editor's pick" title="Featured story" />
        <article className="card mt-8 grid overflow-hidden lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden bg-lake-100 lg:aspect-auto">
            <img src={featured.image} alt={featured.alt} width="1000" height="700" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="chip w-fit">{featured.category}</span>
            <h3 className="mt-4 font-display text-2xl text-lake-900 sm:text-3xl">{featured.title}</h3>
            <p className="mt-2 text-sm text-mist-400">By {featured.author} · {featured.readingTime}</p>
            <div className="prose-warm mt-4">
              {featured.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section aria-labelledby="all-heading" className="container-page pb-20">
        <SectionHeading id="all-heading" eyebrow="Browse the archive" title="All articles" intro="Tap “Read full story” on any card to expand the complete article inline." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
