import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { GUIDES } from '../data/guides.js'
import { GUIDE_NAV } from '../data/site.js'
import { articleLd, breadcrumbLd } from '../utils/jsonld.js'

export default function GuidePage({ slug }) {
  const guide = GUIDES[slug]
  const path = `/${slug}`
  const related = GUIDE_NAV.filter((g) => g.to !== path).slice(0, 3)

  return (
    <>
      <Seo
        title={guide.title}
        description={guide.lead}
        path={path}
        image={undefined}
        type="article"
        jsonLd={[
          articleLd({ title: guide.title, description: guide.lead, author: 'Golden Years Canoeing', path }),
          breadcrumbLd([{ label: 'Home', to: '/' }, { label: guide.title, to: path }]),
        ]}
      />

      <PageHero
        eyebrow={guide.eyebrow}
        title={guide.title}
        lead={guide.lead}
        image={guide.image}
        alt={guide.alt}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Guides', to: '/lake-travel-guides' }, { label: guide.title }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start">
          <article className="prose-warm max-w-none">
            {guide.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-xl text-lake-800' : ''}>{p}</p>
            ))}

            {guide.sections.map((s, i) => (
              <section key={i} aria-labelledby={`s-${i}`}>
                <h2 id={`s-${i}`}>{s.heading}</h2>
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </section>
            ))}

            <div className="mt-10 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100">
              <p className="font-display text-lg text-lake-900">A gentle reminder</p>
              <p className="mt-2">
                Always paddle within your comfort, wear a properly fitted life
                jacket, check the wind and weather before you launch, and consult
                your doctor before beginning any new physical activity. The lake
                rewards patience far more than effort.
              </p>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <nav aria-label="All guides" className="card p-6">
              <h2 className="font-display text-lg text-lake-900">All guides</h2>
              <ul className="mt-3 space-y-2">
                {GUIDE_NAV.map((g) => (
                  <li key={g.to}>
                    <Link
                      to={g.to}
                      className={
                        'block rounded-xl px-3 py-2 text-[0.95rem] ' +
                        (g.to === path
                          ? 'bg-lake-50 font-semibold text-lake-900'
                          : 'text-lake-700 hover:bg-lake-50')
                      }
                      aria-current={g.to === path ? 'page' : undefined}
                    >
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="card bg-lake-800 p-6 text-sand-50">
              <h2 className="font-display text-lg">Read more on the blog</h2>
              <p className="mt-2 text-sand-100/90 text-[0.95rem]">
                Twelve original, beginner-friendly articles open inline — no pop-ups.
              </p>
              <Link to="/blog" className="btn-accent mt-4 w-full">Visit the blog</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-8">
        <h2 className="font-display text-2xl text-lake-900">Continue exploring</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {related.map((g) => (
            <Link key={g.to} to={g.to} className="card card-hover p-6">
              <p className="font-display text-lg text-lake-900">{g.label}</p>
              <span className="mt-3 inline-flex items-center gap-1 font-semibold text-lake-700">
                Read guide
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <Newsletter />
      </section>
    </>
  )
}
