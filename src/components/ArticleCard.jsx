import Accordion from './Accordion.jsx'

// Blog preview card with inline-expandable full text. The complete article
// body is always rendered in the HTML source (revealed via CSS accordion),
// so nothing navigates away and nothing is hidden from crawlers.
export default function ArticleCard({ article, index = 0 }) {
  return (
    <article className="card card-hover flex flex-col overflow-hidden">
      <div className="relative aspect-[3/2] overflow-hidden bg-lake-100">
        <img
          src={article.image}
          alt={article.alt}
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
          width="1000"
          height="700"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute left-3 top-3 chip bg-white/90 backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl text-lake-900">{article.title}</h3>
        <p className="mt-2 text-sm text-mist-400">
          By {article.author} · {article.readingTime}
        </p>
        <p className="mt-3 flex-1 text-[0.975rem] text-lake-700">{article.excerpt}</p>
        <div className="mt-3">
          <Accordion question="" trigger="Read full story" triggerOpen="Show less">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Accordion>
        </div>
      </div>
    </article>
  )
}
