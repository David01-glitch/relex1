import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { NAV, GUIDE_NAV } from '../data/site.js'
import { lakes } from '../data/images.js'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for has drifted off course. Find your way back to Golden Years Canoeing."
        path="/404"
      />
      <section className="relative isolate overflow-hidden">
        <img
          src={lakes.lakeReflection}
          alt="A calm lake reflecting the sky"
          width="1200"
          height="800"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-lake-900/75" aria-hidden="true" />
        <div className="container-page py-24 text-center text-sand-50 sm:py-32">
          <p className="font-rustic text-sm font-semibold uppercase tracking-[0.2em] text-sand-200">
            Lost on the water
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">404</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-sand-100/90">
            This page seems to have drifted off course. The good news is that calm
            water is never far away — here are a few places to paddle back to.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-accent">Return home</Link>
            <Link to="/blog" className="btn-ghost bg-white/10 text-sand-50 ring-1 ring-white/30 hover:bg-white/20">Browse the blog</Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="font-display text-2xl text-lake-900">Popular destinations</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...NAV.filter((n) => n.to !== '/'), ...GUIDE_NAV].map((l) => (
            <Link key={l.to} to={l.to} className="card card-hover p-5 font-semibold text-lake-800">
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
