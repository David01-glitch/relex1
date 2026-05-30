import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { SITE } from '../data/site.js'
import { TESTIMONIALS } from '../data/testimonials.js'
import { community, camping } from '../data/images.js'
import { breadcrumbLd } from '../utils/jsonld.js'

export default function Community() {
  return (
    <>
      <Seo
        title="Community"
        description="Join the Golden Years Canoeing community — reader stories, paddling groups for seniors, and ways to connect with fellow lake lovers over 50."
        path="/community"
        jsonLd={breadcrumbLd([{ label: 'Home', to: '/' }, { label: 'Community', to: '/community' }])}
      />

      <PageHero
        eyebrow="Better together"
        title="A kind corner of the outdoors, built around people."
        lead="The lake gives us somewhere to go; the community gives us a reason to keep coming back. Here is how our readers connect, support one another, and share the water."
        image={community.communityCampfire}
        alt="Friends gathered around an evening campfire beside the lake"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Community' }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="prose-warm max-w-none">
            <h2>Why community is the heart of it</h2>
            <p>
              One of the quiet surprises of taking up canoeing later in life is how
              naturally it brings people together. A paddling group asks nothing of
              you socially — you are simply pointed at the same horizon, moving at
              the same gentle pace, sharing the same morning. That side-by-side
              companionship, free of small talk and pressure, is exactly the kind of
              connection that becomes harder to find after careers end and families
              scatter.
            </p>
            <p>
              Loneliness is one of the real health risks of later life, and a shared
              morning on the water is a gentle, powerful antidote. The groups that
              form around our blog tend to look after one another far beyond the
              lake — a ride to an appointment, a meal after surgery, a check-in call
              on a hard day. We have watched two neighbors and a borrowed canoe grow
              into a Saturday ritual that everyone protects.
            </p>

            <h2>How to start your own little fleet</h2>
            <p>
              You can begin with almost nothing. Pick a calm, accessible lake. Choose
              a regular morning — consistency matters more than size. Invite one
              person. Post a friendly note at a community center, library, or senior
              center. Keep the bar to entry low: rentals are welcome, all paces are
              welcome, and turning back early is always fine. Before long, someone
              brings coffee, a third paddler joins, and a community is born.
            </p>
            <p>
              If you would like help finding fellow readers near you, write to us at{' '}
              <a className="link-underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>{' '}
              and we will do our best to connect you. We cannot promise a match in
              every town, but we love making introductions where we can.
            </p>

            <h2>Share your story</h2>
            <p>
              Many of our most-read articles began as a reader's email — a few
              photographs and a paragraph about a memorable morning on the water.
              If you have a story of adventure, healing, friendship, or simply a
              perfect ordinary paddle, we would be honored to read it, and with your
              permission we may feature it for the wider community to enjoy.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="card overflow-hidden">
              <img src={camping.campingFire} alt="A warm campfire glowing beside the water at dusk" loading="lazy" width="1000" height="700" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl text-lake-900">Three ways to connect</h3>
                <ul className="prose-warm mt-3">
                  <li>Join the free morning paddle letter below.</li>
                  <li>Email us your story or a question.</li>
                  <li>Start a weekly paddle with one neighbor.</li>
                </ul>
                <Link to="/contact" className="btn-primary mt-4">Get in touch</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="voices-heading" className="container-page pb-8">
        <SectionHeading id="voices-heading" eyebrow="Voices from the water" title="Stories our readers have shared" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="card flex flex-col p-6">
              <p className="prose-warm flex-1 italic">“{t.quote}”</p>
              <footer className="mt-5 border-t border-lake-100 pt-4 text-sm font-semibold text-lake-900">
                {t.name}
                <span className="block font-normal text-mist-400">{t.location} · {t.age}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <Newsletter />
      </section>
    </>
  )
}
