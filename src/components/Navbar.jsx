import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    'rounded-xl px-3 py-2 text-[0.95rem] font-semibold transition-colors ' +
    (isActive
      ? 'bg-lake-50 text-lake-800'
      : 'text-lake-700 hover:bg-lake-50 hover:text-lake-900')

  return (
    <header className="sticky top-0 z-50 border-b border-lake-100 bg-sand-50/90 backdrop-blur supports-[backdrop-filter]:bg-sand-50/75">
      <a
        href="#main"
        className="js-only sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-lake-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <nav
        className="container-page flex items-center justify-between py-3"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Golden Years Canoeing — home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-lake-800 text-sand-100" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 16c5 3 13 3 18 0" />
              <path d="M5 11c4-3 10-3 14 0-2 4-12 4-14 0z" />
              <path d="M12 3v8" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-700 text-lake-900">Golden Years</span>
            <span className="block font-rustic text-xs uppercase tracking-[0.22em] text-forest-600">Canoeing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-accent ml-2 px-5 py-2 text-[0.95rem]">
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          className="js-only inline-flex items-center justify-center rounded-xl border border-lake-200 p-2 text-lake-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={'lg:hidden ' + (open ? 'block' : 'hidden')}
      >
        <div className="container-page flex flex-col gap-1 pb-4">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-accent mt-2" onClick={() => setOpen(false)}>
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  )
}
