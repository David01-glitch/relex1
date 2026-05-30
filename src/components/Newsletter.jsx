import { useState } from 'react'
import { trackEvent } from '../utils/analytics.js'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    trackEvent('newsletter_signup', { method: 'footer_form' })
    setSubmitted(true)
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="overflow-hidden rounded-3xl bg-forest-700 text-sand-50 shadow-natural"
    >
      <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-rustic text-sm font-semibold uppercase tracking-[0.18em] text-sand-200">
            The morning paddle letter
          </p>
          <h2 id="newsletter-heading" className="mt-3 font-display text-3xl text-sand-50 sm:text-4xl">
            Quiet inspiration, delivered like a sunrise.
          </h2>
          <p className="mt-4 max-w-md text-sand-100/90">
            Join thousands of readers over 50 for new lake guides, gentle
            techniques, scenic destinations, and warm community stories. Free,
            unhurried, and easy to leave any time.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20" role="status">
              <p className="font-display text-xl text-white">Welcome aboard! ⛵</p>
              <p className="mt-2 text-sand-100/90">
                Thank you for joining the Golden Years Canoeing community. Watch your
                inbox for a friendly hello and your first guide.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-lake-900 placeholder:text-mist-400 focus:bg-white"
              />
              <button type="submit" className="btn-accent shrink-0">
                Subscribe
              </button>
            </form>
          )}
          <p className="mt-3 text-sm text-sand-100/70">
            We respect your privacy. Read our{' '}
            <a className="underline decoration-sand-300/60 underline-offset-4 hover:text-white" href="/legal/privacy">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
