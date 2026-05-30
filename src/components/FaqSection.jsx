import Accordion from './Accordion.jsx'
import SectionHeading from './SectionHeading.jsx'
import { FAQS } from '../data/faqs.js'

export default function FaqSection({ limit }) {
  const items = limit ? FAQS.slice(0, limit) : FAQS
  return (
    <section aria-labelledby="faq-heading" className="container-page py-16 sm:py-20">
      <SectionHeading
        id="faq-heading"
        eyebrow="Good questions"
        title="Frequently asked questions"
        intro="Honest answers to what our readers most often wonder about starting and enjoying calm-water canoeing later in life."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="card divide-y divide-lake-100 px-5 sm:px-7">
          {items.slice(0, Math.ceil(items.length / 2)).map((f, i) => (
            <Accordion key={i} question={f.q} defaultOpen={i === 0}>
              <p>{f.a}</p>
            </Accordion>
          ))}
        </div>
        <div className="card divide-y divide-lake-100 px-5 sm:px-7">
          {items.slice(Math.ceil(items.length / 2)).map((f, i) => (
            <Accordion key={i} question={f.q}>
              <p>{f.a}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}
