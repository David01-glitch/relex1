import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { PRIVACY, TERMS, REFUND } from '../data/legal.js'
import { breadcrumbLd } from '../utils/jsonld.js'

const DOCS = {
  privacy: { data: PRIVACY, path: '/legal/privacy' },
  terms: { data: TERMS, path: '/legal/terms' },
  refund: { data: REFUND, path: '/legal/refund' },
}

export default function LegalPage({ doc }) {
  const { data, path } = DOCS[doc]

  return (
    <>
      <Seo
        title={data.title}
        description={`${data.title} for Golden Years Canoeing. ${data.intro[0].slice(0, 150)}`}
        path={path}
        jsonLd={breadcrumbLd([{ label: 'Home', to: '/' }, { label: data.title, to: path }])}
      />

      <PageHero
        eyebrow="Legal"
        title={data.title}
        lead={`Last updated: ${data.updated}`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Legal' }, { label: data.title }]}
      />

      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_240px] lg:items-start">
          <article className="prose-warm max-w-none">
            {data.intro.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-lg text-lake-800' : ''}>{p}</p>
            ))}
            {data.sections.map((s, i) => (
              <section key={i} aria-labelledby={`l-${i}`}>
                <h2 id={`l-${i}`}>{s.heading}</h2>
                {s.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </section>
            ))}
          </article>

          <aside className="lg:sticky lg:top-24">
            <nav aria-label="Legal documents" className="card p-6">
              <h2 className="font-display text-lg text-lake-900">Legal documents</h2>
              <ul className="mt-3 space-y-2">
                {[
                  { label: 'Privacy Policy', to: '/legal/privacy' },
                  { label: 'Terms of Service', to: '/legal/terms' },
                  { label: 'Refund Policy', to: '/legal/refund' },
                ].map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={
                        'block rounded-xl px-3 py-2 text-[0.95rem] ' +
                        (l.to === path
                          ? 'bg-lake-50 font-semibold text-lake-900'
                          : 'text-lake-700 hover:bg-lake-50')
                      }
                      aria-current={l.to === path ? 'page' : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </>
  )
}
