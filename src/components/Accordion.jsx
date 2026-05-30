import { useId, useState } from 'react'
import { trackEvent } from '../utils/analytics.js'

// Inline accordion. The panel content is ALWAYS present in the HTML source —
// it is only visually collapsed with a CSS grid-rows transition. With JavaScript
// disabled the panel stays open (no `hidden` attribute is applied server-side),
// so every word remains crawlable and readable. No modals, no navigation.
export default function Accordion({
  question,
  children,
  defaultOpen = false,
  trigger = 'Read more',
  triggerOpen = 'Show less',
  tone = 'default',
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const panelId = `acc-panel-${id}`
  const btnId = `acc-btn-${id}`

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) trackEvent('accordion_expand', { label: question || trigger })
  }

  return (
    <div
      className={
        tone === 'card'
          ? 'card overflow-hidden'
          : 'border-b border-lake-100 last:border-b-0'
      }
    >
      <h3 className="m-0">
        <button
          id={btnId}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className={
            'flex w-full items-center justify-between gap-4 text-left ' +
            (tone === 'card'
              ? 'px-5 py-4 sm:px-6 sm:py-5 font-display text-lg text-lake-900 hover:bg-lake-50'
              : 'py-5 font-display text-lg text-lake-900 hover:text-lake-700')
          }
        >
          <span>{question || (open ? triggerOpen : trigger)}</span>
          <span
            aria-hidden="true"
            className={
              'shrink-0 rounded-full bg-lake-100 p-1.5 text-lake-700 transition-transform duration-300 ' +
              (open ? 'rotate-45' : '')
            }
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={'accordion-panel' + (open ? ' open' : '')}
      >
        <div className="accordion-inner">
          <div
            className={
              tone === 'card'
                ? 'px-5 pb-5 sm:px-6 sm:pb-6 prose-warm'
                : 'pb-6 prose-warm'
            }
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
