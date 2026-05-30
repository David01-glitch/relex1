import { Link } from 'react-router-dom'
import { SITE, NAV, GUIDE_NAV, FOOTER_LINKS } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-lake-100 bg-lake-900 text-sand-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-lake-700 text-sand-100" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 16c5 3 13 3 18 0" />
                <path d="M5 11c4-3 10-3 14 0-2 4-12 4-14 0z" />
                <path d="M12 3v8" />
              </svg>
            </span>
            <span className="font-display text-xl">Golden Years Canoeing</span>
          </div>
          <p className="mt-4 max-w-xs text-sand-200/90">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-sm text-sand-200/70">
            An independent editorial blog for outdoor-minded adults over 50.
          </p>
        </div>

        <nav aria-label="Site" >
          <h2 className="font-display text-lg text-sand-50">Explore</h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sand-200/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Guides">
          <h2 className="font-display text-lg text-sand-50">Guides</h2>
          <ul className="mt-4 space-y-2">
            {GUIDE_NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sand-200/90 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg text-sand-50">Contact</h2>
          <address className="mt-4 not-italic text-sand-200/90">
            <p>{SITE.address.street}</p>
            <p>
              {SITE.address.city}, {SITE.address.region} {SITE.address.postal}
            </p>
            <p className="mt-3">
              <a className="hover:text-white" href={`tel:${SITE.phoneHref}`}>
                {SITE.phone}
              </a>
            </p>
            <p>
              <a className="hover:text-white break-all" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p className="mt-3 text-sm text-sand-200/70">{SITE.hours}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-sand-200/80 sm:flex-row">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
