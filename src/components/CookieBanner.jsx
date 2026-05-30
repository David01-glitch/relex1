import { useEffect, useState } from 'react'
import { getStoredConsent, setConsent } from '../utils/analytics.js'

// Elegant slide-up consent banner. Rendered server-side so it appears in the
// raw HTML source (compliance + crawlers). On mount, if the visitor already
// chose, we hide it. Choice persists in localStorage and updates Google
// Consent Mode v2 live.
export default function CookieBanner() {
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (getStoredConsent()) {
      setVisible(false)
    } else {
      // tiny tick so the slide-up transition can play after hydration
      setMounted(false)
      const t = setTimeout(() => setMounted(true), 60)
      return () => clearTimeout(t)
    }
  }, [])

  if (!visible) return null

  const decide = (granted) => {
    setConsent(granted)
    setMounted(false)
    setTimeout(() => setVisible(false), 350)
  }

  return (
    <div
      data-cookie-banner=""
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and privacy consent"
    >
      <div
        className={
          'container-page rounded-2xl border border-lake-200 bg-white/95 p-5 shadow-natural backdrop-blur transition-all duration-300 sm:p-6 ' +
          (mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0')
        }
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(238,246,251,0.9) 0%, rgba(255,255,255,0.96) 100%)',
        }}
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-lg text-lake-900">A note about cookies</p>
            <p className="mt-1 text-[0.95rem] text-lake-700">
              We use privacy-friendly analytics to understand which lake guides our
              readers find most helpful. Nothing loads until you choose. You can
              accept to help us improve, or decline and keep browsing — the choice
              is entirely yours. See our{' '}
              <a className="link-underline" href="/legal/privacy">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button type="button" className="btn-ghost px-5 py-2.5" onClick={() => decide(false)}>
              Decline
            </button>
            <button type="button" className="btn-primary px-5 py-2.5" onClick={() => decide(true)}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
