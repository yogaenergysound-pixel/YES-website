const TESTIMONIALS = [
  {
    quote:
      'As an attorney in North Dallas, my mind never truly stops. The 60-minute sound bath is the only place I can fully unplug. I leave feeling focused, energized, and genuinely ready for the week ahead.',
    name: 'M. Thompson',
    role: 'Attorney · Dallas, TX',
  },
  {
    quote:
      'I was completely skeptical about energy work — I\u2019m a data person. After three sessions with Megan, my chronic tension had subsided in ways nothing else had touched. She bridges science and spirit, and it works.',
    name: 'J. Rivera',
    role: 'Director of Operations · Frisco, TX',
  },
  {
    quote:
      'I came in burned out, holding everything together for everyone else. After one month of YES, I finally feel like myself again. Megan\u2019s approach is unlike anything I\u2019ve experienced — grounded, precise, and deeply human.',
    name: 'A. Chen',
    role: 'Business Owner · Frisco, TX',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="stories" aria-labelledby="stories-heading">
      <div className="container">

        <div className="testi-header reveal">
          <span className="section-label" style={{ color: 'var(--coral)' }}>
            Voices of Transformation
          </span>
          <h2 id="stories-heading">
            What happens when<br />you say <em>yes.</em>
          </h2>
          {/* Practitioner authority line */}
          <p className="testi-authority reveal d1">
            Guided by <strong>Megan Flynn</strong> — certified yoga instructor,
            Reiki master, and sound healing practitioner with over 10 years of practice
            in the North Texas community.
          </p>
        </div>

        <ul className="testi-list" role="list">
          {TESTIMONIALS.map((t, i) => (
            <li key={t.name} className={`testi-item reveal d${i + 1}`}>
              <blockquote className="testi-quote">{t.quote}</blockquote>
              <div className="testi-meta">
                <strong className="testi-name">{t.name}</strong>
                <span className="testi-role">{t.role}</span>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
