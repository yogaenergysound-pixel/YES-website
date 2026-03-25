function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const OFFERINGS = [
  {
    index: '01',
    title: 'Studio\nClasses.',
    copy: 'Join our Frisco community for immersive sound baths, Vinyasa flows, Yin sessions, and energy workshops. Beginner-friendly and open to all levels — no experience required.',
    cta: 'View Schedule',
    href: '#',
  },
  {
    index: '02',
    title: 'Private\nSessions.',
    copy: 'Bespoke 1-on-1 guidance tailored to your personal frequency. Whether you\'re navigating burnout, chronic stress, or a desire for deeper transformation — this sacred space is held entirely for you.',
    cta: 'Book a Session',
    href: '#',
  },
  {
    index: '03',
    title: 'Corporate\nWellness.',
    copy: 'Invest in the energetic health of your team. We partner with Frisco-area companies to deliver on-site yoga, mid-day meditation resets, and sound healing workshops that improve focus and reduce burnout.',
    cta: 'Partner With Us',
    href: '#',
  },
]

export default function Offerings() {
  return (
    <section className="offerings" id="offerings" aria-labelledby="offerings-heading">
      <div className="container">

        <div className="offerings-header reveal">
          <span className="section-label" style={{ color: 'var(--coral)' }}>
            How You Practice
          </span>
          <h2 id="offerings-heading">
            How will you<br />say <em>YES?</em>
          </h2>
        </div>

        {OFFERINGS.map((o, i) => (
          <div key={o.index} className={`offer-row reveal d${i + 1}`}>

            <div className="offer-left">
              <span className="offer-index" aria-hidden="true">{o.index}</span>
              <h3 className="offer-title" style={{ whiteSpace: 'pre-line' }}>
                {o.title}
              </h3>
            </div>

            <div className="offer-right">
              <p className="offer-copy">{o.copy}</p>
              <a href={o.href} className="offer-link" aria-label={o.cta}>
                {o.cta}
                <ArrowRight />
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
