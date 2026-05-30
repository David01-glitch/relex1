import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { SITE } from '../data/site.js'
import { hero } from '../data/images.js'
import { organizationLd, breadcrumbLd } from '../utils/jsonld.js'
import { trackEvent } from '../utils/analytics.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'General question', message: '' })

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    trackEvent('contact_submit', { subject: form.subject })
    setSent(true)
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Contact Golden Years Canoeing. Email goldenyearscanoeing@gmail.com, call (612) 547-3182, or write to 901 Lakeview Harbor Rd, Minneapolis, MN 55408."
        path="/contact"
        jsonLd={[organizationLd, breadcrumbLd([{ label: 'Home', to: '/' }, { label: 'Contact', to: '/contact' }])]}
      />

      <PageHero
        eyebrow="Say hello"
        title="We read every message — and reply like old friends."
        lead="Questions about getting started, a destination to recommend, or a story of your own? Reach out using the details below or the form. A real person is always on the other end."
        image={hero.heroDockMorning}
        alt="A quiet dock reaching into a misty morning lake"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Our details" title="Golden Years Canoeing" intro="An independent lake adventure blog for adults over 50, based on the shores of Minneapolis, Minnesota." />
            <address className="not-italic mt-8 space-y-6">
              <div className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sunset-600">Email</p>
                <a className="mt-1 block font-display text-xl text-lake-900 hover:text-lake-700 break-all" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sunset-600">Phone</p>
                <a className="mt-1 block font-display text-xl text-lake-900 hover:text-lake-700" href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </div>
              <div className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sunset-600">Mailing address</p>
                <p className="mt-1 font-display text-xl text-lake-900">{SITE.address.street}</p>
                <p className="text-lake-700">{SITE.address.city}, {SITE.address.region} {SITE.address.postal}, {SITE.address.country}</p>
              </div>
              <div className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-sunset-600">Office hours</p>
                <p className="mt-1 text-lg text-lake-800">{SITE.hours}</p>
                <p className="mt-1 text-sm text-mist-400">We aim to reply to every email within two business days.</p>
              </div>
            </address>
          </div>

          <div className="card p-8 sm:p-10">
            <h2 className="font-display text-2xl text-lake-900">Send us a message</h2>
            {sent ? (
              <div className="mt-6 rounded-2xl bg-forest-50 p-6 ring-1 ring-forest-100" role="status">
                <p className="font-display text-xl text-forest-700">Thank you, {form.name || 'friend'}! 🛶</p>
                <p className="prose-warm mt-2">
                  Your message is on its way. A real person reads every note, and we
                  will get back to you within two business days. In the meantime, you
                  are always welcome to email us directly at{' '}
                  <a className="link-underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              </div>
            ) : (
              <form className="mt-6 space-y-5" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="c-name" className="block text-sm font-semibold text-lake-800">Your name</label>
                  <input id="c-name" type="text" required value={form.name} onChange={update('name')} autoComplete="name"
                    className="mt-1 w-full rounded-2xl border border-lake-200 bg-white px-4 py-3 text-lake-900 focus:border-lake-400" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-semibold text-lake-800">Email address</label>
                  <input id="c-email" type="email" required value={form.email} onChange={update('email')} autoComplete="email"
                    className="mt-1 w-full rounded-2xl border border-lake-200 bg-white px-4 py-3 text-lake-900 focus:border-lake-400" />
                </div>
                <div>
                  <label htmlFor="c-subject" className="block text-sm font-semibold text-lake-800">Subject</label>
                  <select id="c-subject" value={form.subject} onChange={update('subject')}
                    className="mt-1 w-full rounded-2xl border border-lake-200 bg-white px-4 py-3 text-lake-900 focus:border-lake-400">
                    <option>General question</option>
                    <option>Getting started with canoeing</option>
                    <option>Share my story</option>
                    <option>Suggest a destination</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="c-message" className="block text-sm font-semibold text-lake-800">Message</label>
                  <textarea id="c-message" required rows={5} value={form.message} onChange={update('message')}
                    className="mt-1 w-full rounded-2xl border border-lake-200 bg-white px-4 py-3 text-lake-900 focus:border-lake-400" />
                </div>
                <button type="submit" className="btn-primary w-full text-lg">Send message</button>
                <p className="text-sm text-mist-400">
                  By sending, you agree to our{' '}
                  <a className="link-underline" href="/legal/privacy">Privacy Policy</a>. We never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-forest-50 p-8 ring-1 ring-forest-100 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="prose-warm max-w-none">
              <h2>What to expect when you reach out</h2>
              <p>
                Golden Years Canoeing is a small, independent blog, not a faceless
                contact form that disappears into a void. When you write to us, a
                real member of our team reads your message and replies personally —
                usually within one to two business days, and almost always with the
                warmth you would hope for from a fellow paddler. We are based on the
                shores of Minneapolis, Minnesota, and we keep regular weekday office
                hours, so a note sent over the weekend will be waiting for a friendly
                reply first thing Monday morning.
              </p>
              <p>
                If you are brand new to canoeing and feeling unsure where to begin,
                please do not hesitate to ask the simple questions. There is no such
                thing as a silly question on the water, and the things that worry
                beginners most — getting in and out of the boat, how far to go, what
                to do if the wind picks up — are exactly the things we love helping
                with. Tell us a little about where you live, what you are hoping to
                try, and any health considerations you have in mind, and we will point
                you toward the guides and gentle first steps that fit you best.
              </p>
            </div>
            <div className="prose-warm max-w-none">
              <h2>Ways we are glad to help</h2>
              <p>
                Readers reach out to us for all sorts of reasons, and every one of
                them is welcome. Some of the most common are below — but if your
                question does not fit neatly into any of these, send it anyway.
              </p>
              <ul>
                <li>
                  <strong>Getting started safely.</strong> Advice on choosing calm
                  water, renting a stable beginner canoe, and planning a gentle first
                  outing close to home.
                </li>
                <li>
                  <strong>Sharing your story.</strong> If canoeing or lake life has
                  meant something to you in your later years, we would be honored to
                  read about it and, with your permission, share it with the community.
                </li>
                <li>
                  <strong>Suggesting a destination.</strong> Know a quiet, beautiful
                  waterway that deserves a wider audience? Tell us about it so we can
                  explore and write it up for fellow readers.
                </li>
                <li>
                  <strong>Questions about our content.</strong> Corrections, follow-up
                  questions, or requests for a topic you would like us to cover next.
                </li>
              </ul>
              <p>
                Please remember that we are an editorial blog, not a tour operator or
                a gear shop — we cannot take bookings or process purchases — but we are
                always happy to help you plan your own adventure on calm, beautiful
                water.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
