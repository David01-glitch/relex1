// Google Analytics (GA4) helpers + Google Consent Mode v2.
// The base gtag.js snippet and the `default` consent state are set in index.html
// so they are present even before the React bundle loads.

const GA_ID = 'G-4J046JXWVC'
const CONSENT_KEY = 'gyc-consent'

function gtagSafe(...args) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
  } else {
    window.dataLayer.push(arguments)
  }
}

// Track a single-page-app route change as a page_view.
export function trackPageView(path, title) {
  gtagSafe('event', 'page_view', {
    page_path: path,
    page_location: typeof window !== 'undefined' ? window.location.href : path,
    page_title: title || (typeof document !== 'undefined' ? document.title : ''),
    send_to: GA_ID,
  })
}

// Track an arbitrary custom event.
export function trackEvent(action, params = {}) {
  gtagSafe('event', action, { send_to: GA_ID, ...params })
}

// Read the stored consent decision: 'granted' | 'denied' | null (undecided).
export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

// Persist the decision and push the matching consent update to Google.
export function setConsent(granted) {
  const value = granted ? 'granted' : 'denied'
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    /* storage unavailable — still update the live consent state */
  }
  gtagSafe('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}

export { GA_ID, CONSENT_KEY }
