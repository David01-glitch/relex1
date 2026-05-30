import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../utils/analytics.js'

// Resets scroll position on route change and fires a GA page_view.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    // Defer so document.title (set by <Head>) is current.
    const t = setTimeout(() => trackPageView(pathname, document.title), 50)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
