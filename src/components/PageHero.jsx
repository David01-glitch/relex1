// Reusable hero band for interior pages. Content (heading + lead) is plain HTML,
// fully present with JS off. The background photo is local and eager-loaded.
export default function PageHero({ eyebrow, title, lead, image, alt, crumbs }) {
  return (
    <section className="relative isolate overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt={alt || ''}
            width="1600"
            height="900"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-lake-900/70" aria-hidden="true" />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-t from-lake-900/90 via-lake-900/50 to-lake-900/40"
            aria-hidden="true"
          />
        </>
      )}
      <div className={'container-page ' + (image ? 'py-20 text-sand-50 sm:py-28' : 'py-14 sm:py-20')}>
        {crumbs && (
          <nav aria-label="Breadcrumb" className={image ? 'text-sand-200/90' : 'text-lake-600'}>
            <ol className="flex flex-wrap items-center gap-2 text-sm">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.to ? (
                    <a href={c.to} className="hover:underline">{c.label}</a>
                  ) : (
                    <span aria-current="page" className="font-semibold">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className={'mt-4 font-rustic text-sm font-semibold uppercase tracking-[0.18em] ' + (image ? 'text-sand-200' : 'text-sunset-600')}>
            {eyebrow}
          </p>
        )}
        <h1 className={'mt-3 max-w-3xl text-balance font-display text-4xl leading-tight sm:text-5xl ' + (image ? 'text-sand-50' : 'text-lake-900')}>
          {title}
        </h1>
        {lead && (
          <p className={'mt-5 max-w-2xl text-lg ' + (image ? 'text-sand-100/90' : 'text-lake-700')}>
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
