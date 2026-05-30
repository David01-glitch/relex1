import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Accordion from '../components/Accordion.jsx'
import Newsletter from '../components/Newsletter.jsx'
import FaqSection from '../components/FaqSection.jsx'
import { SITE } from '../data/site.js'
import { CATEGORIES, HIGHLIGHTS, SPECIAL_SECTIONS } from '../data/home.js'
import { ARTICLES } from '../data/blog.js'
import { TESTIMONIALS } from '../data/testimonials.js'
import { FAQS } from '../data/faqs.js'
import { hero } from '../data/images.js'
import { organizationLd, websiteLd, faqLd } from '../utils/jsonld.js'

export default function Home() {
  const jsonLd = [organizationLd, websiteLd, faqLd(FAQS)]
  const trending = ARTICLES.slice(0, 6)

  return (
    <>
      <Seo
        title={SITE.name}
        description={SITE.description}
        path="/"
        jsonLd={jsonLd}
      />

      {/* 2. Scenic hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero.heroLakeSunrise}
          alt="A calm Minnesota lake at sunrise with a canoe resting near the shoreline"
          width="1600"
          height="900"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-lake-900/90 via-lake-900/55 to-lake-900/45" aria-hidden="true" />
        <div className="container-page py-24 text-sand-50 sm:py-32 lg:py-40">
          <p className="font-rustic text-sm font-semibold uppercase tracking-[0.2em] text-sand-200 animate-fade-in">
            Calm water · good company · unhurried adventures
          </p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Gentle canoeing and lake adventures for the second half of life.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/90 sm:text-xl">
            Golden Years Canoeing is a warm, trustworthy blog written for adults
            over 50. We share beginner-friendly paddling guides, scenic Minnesota
            waterways, cozy cabin getaways, and the real stories of readers who
            found adventure, health, and friendship on the water.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/lake-travel-guides" className="btn-accent text-lg">
              Explore the guides
            </Link>
            <Link to="/senior-adventure-stories" className="btn-ghost bg-white/10 text-sand-50 ring-1 ring-white/30 backdrop-blur hover:bg-white/20 text-lg">
              Read reader stories
            </Link>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6">
            <div>
              <dt className="text-sm uppercase tracking-wide text-sand-200/80">Reading since</dt>
              <dd className="font-display text-3xl">{SITE.founded}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-sand-200/80">Guides &amp; stories</dt>
              <dd className="font-display text-3xl">50+</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-sand-200/80">For paddlers</dt>
              <dd className="font-display text-3xl">50+</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Intro / mission band for crawlable context */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why we paddle"
              title="Adventure does not have an expiration date."
            />
            <div className="prose-warm mt-5">
              <p>
                Somewhere along the way, many of us absorb the quiet belief that
                adventure belongs to the young — that the best we can hope for in
                our sixties, seventies, and beyond is to watch from the dock. We
                started Golden Years Canoeing to gently disagree. A calm lake on a
                fair morning does not care how old you are. It only asks that you
                arrive unhurried and willing to learn.
              </p>
              <p>
                Canoeing is one of the kindest outdoor activities a person can
                choose later in life. It is gentle on knees and hips, builds the
                core strength and balance that matter most as we age, and unfolds
                entirely at the pace you set. Add the loon calls, the golden light,
                and the company of a good friend, and you have something close to
                perfect — a hobby that is good for the body, restful for the mind,
                and rich with connection.
              </p>
              <p>
                Everything here is written for you: practical beginner techniques,
                honest safety habits, scenic destinations close to home, cabin and
                camping plans, and the true stories of readers who picked up a
                paddle in their later years and never looked back. No hype, no
                pressure — just calm, trustworthy company for your next adventure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={hero.heroDockMorning} alt="A wooden dock reaching into a misty morning lake" loading="lazy" width="1000" height="700" className="card aspect-[3/4] w-full object-cover" />
            <img src={hero.heroPaddleCalm} alt="A paddler gliding across calm water at golden hour" loading="lazy" width="1000" height="700" className="card mt-8 aspect-[3/4] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Featured adventure categories */}
      <section aria-labelledby="cat-heading" className="container-page py-8 sm:py-12">
        <SectionHeading id="cat-heading" eyebrow="Find your path" title="Featured adventure categories" intro="Six calm starting points, whether you are choosing your first canoe or planning a four-day cabin escape." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <Link key={c.to} to={c.to} className="card card-hover group flex flex-col overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden bg-lake-100">
                <img src={c.image} alt={c.alt} loading="lazy" width="1000" height="625" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-xl text-lake-900 group-hover:text-lake-700">{c.title}</h3>
                <p className="mt-2 flex-1 text-[0.975rem] text-lake-700">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-lake-700">
                  View guide
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Trending outdoor articles */}
      <section aria-labelledby="trending-heading" className="container-page py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="trending-heading" eyebrow="From the journal" title="Trending outdoor articles" intro="Beginner-friendly reads our community returns to most. Tap “Read full story” to open any article right here on the page." />
          <Link to="/blog" className="btn-ghost">All articles</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((a, i) => (
            <ArticleCard key={a.id} article={a} index={i} />
          ))}
        </div>
      </section>

      {/* 5. Lake exploration highlights */}
      <section aria-labelledby="highlights-heading" className="bg-lake-900 py-16 text-sand-50 sm:py-20">
        <div className="container-page">
          <SectionHeading id="highlights-heading" eyebrow="On the water" title="Lake exploration highlights" intro="The small, repeatable moments that keep us coming back to the shoreline." center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <figure key={h.title} className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                <img src={h.image} alt={h.alt} loading="lazy" width="1000" height="700" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-5">
                  <h3 className="font-display text-lg text-sand-50">{h.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-sand-100/85">{h.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Special content sections — expandable inline */}
      <section aria-labelledby="special-heading" className="container-page py-16 sm:py-20">
        <SectionHeading id="special-heading" eyebrow="Reader resources" title="Guides &amp; resources at a glance" intro="Ten of our most useful primers, condensed. Expand any one to read it in full — no new page, no pop-up." />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {SPECIAL_SECTIONS.map((s, i) => (
            <Accordion key={i} tone="card" question={s.title} defaultOpen={i === 0}>
              <p>{s.body}</p>
            </Accordion>
          ))}
        </div>
      </section>

      {/* 6. Community adventure stories */}
      <section aria-labelledby="community-heading" className="container-page pb-4">
        <div className="overflow-hidden rounded-3xl bg-forest-50 ring-1 ring-forest-100">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading id="community-heading" eyebrow="Better together" title="Community adventure stories" />
              <p className="prose-warm mt-4">
                The heart of Golden Years Canoeing is its readers. Margaret, who
                cried with joy on her first paddle at sixty-three. Frank, who said
                a quiet goodbye to his wife on the lake they loved. Lorraine, who at
                seventy-four leads a little fleet of six neighbors every Saturday.
                Their stories remind us that the water gives us somewhere to go, and
                each other a reason to keep going.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/community" className="btn-primary">Visit the community</Link>
                <Link to="/senior-adventure-stories" className="btn-ghost">Read their stories</Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <blockquote key={t.name} className="card p-6">
                  <p className="prose-warm italic">“{t.quote.slice(0, 180)}…”</p>
                  <footer className="mt-4 text-sm font-semibold text-lake-900">
                    {t.name}
                    <span className="block font-normal text-mist-400">{t.location} · {t.age}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section aria-labelledby="testi-heading" className="container-page py-16 sm:py-20">
        <SectionHeading id="testi-heading" eyebrow="In their words" title="What our readers tell us" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="card flex flex-col p-6">
              <div className="text-sunset-500" aria-hidden="true">
                {'★★★★★'}
              </div>
              <p className="prose-warm mt-3 flex-1 italic">“{t.quote}”</p>
              <footer className="mt-5 border-t border-lake-100 pt-4 text-sm font-semibold text-lake-900">
                {t.name}
                <span className="block font-normal text-mist-400">{t.location} · {t.age}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="container-page pb-4">
        <Newsletter />
      </section>

      {/* 9. FAQ */}
      <FaqSection />

      {/* 10. Contact */}
      <section aria-labelledby="contact-heading" className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl bg-lake-800 text-sand-50 shadow-natural">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading id="contact-heading" eyebrow="Say hello" title="We would love to hear from you." />
              <p className="mt-4 max-w-md text-sand-100/90">
                Questions about getting started, a destination to recommend, or a
                story of your own to share? Reach out any time — a real person reads
                every message.
              </p>
              <Link to="/contact" className="btn-accent mt-6">Go to contact page</Link>
            </div>
            <address className="not-italic">
              <ul className="space-y-4 text-sand-100">
                <li>
                  <span className="block text-sm uppercase tracking-wide text-sand-200/80">Email</span>
                  <a className="font-display text-xl hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-wide text-sand-200/80">Phone</span>
                  <a className="font-display text-xl hover:text-white" href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-wide text-sand-200/80">Mailing address</span>
                  <span className="font-display text-xl">{SITE.address.full}</span>
                </li>
                <li>
                  <span className="block text-sm uppercase tracking-wide text-sand-200/80">Hours</span>
                  <span className="text-lg">{SITE.hours}</span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </section>
    </>
  )
}
