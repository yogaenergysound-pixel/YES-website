import Image from 'next/image'

function LotusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c-2.2 0-4 1.8-4 4s1.5 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
      <path d="M12 11v11" />
      <path d="M8 22c0-4 1.5-7 4-8" />
      <path d="M16 22c0-4-1.5-7-4-8" />
      <path d="M4.5 17c2.5-2.5 5-3.5 7.5-3.5s5 1 7.5 3.5" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  )
}

function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 6.5a5.5 5.5 0 0 1 0 11" />
      <path d="M12 2a10 10 0 0 1 0 20" />
      <path d="M12 6.5a5.5 5.5 0 0 0 0 11" opacity="0.35" />
      <path d="M12 2a10 10 0 0 0 0 20" opacity="0.35" />
    </svg>
  )
}

const PILLARS = [
  {
    num: '01',
    title: 'Yoga.',
    copy: 'Move beyond the physical. Our classes — from calming Yin to rhythmic Vinyasa — release the tension your body has been quietly storing while training your mind to stay present under pressure. A moving meditation for the modern body.',
    icon: <LotusIcon />,
  },
  {
    num: '02',
    title: 'Energy.',
    copy: 'Release the weight that words cannot reach. Our Reiki and biofield sessions work with your body\'s natural electromagnetic field to reduce anxiety, lift mental fog, and restore the inner clarity you need to show up fully in your life.',
    icon: <SparkIcon />,
  },
  {
    num: '03',
    title: 'Sound.',
    copy: 'Your stressed mind runs on Beta — high-alert, never off. Our sound baths guide your brain into Alpha and Theta states: the frequencies of deep rest, cellular repair, and creative clarity. Just lie down, and let the bowls do the work.',
    icon: <WaveIcon />,
  },
]

export default function Method() {
  return (
    <section className="method" id="method" aria-labelledby="method-heading">
      <div className="container">

        <div className="method-header reveal">
          <span className="section-label">The YES Method</span>
          <h2 id="method-heading">
            Ancient wisdom.<br /><em>Modern healing.</em>
          </h2>
          <p className="method-intro reveal d1">
            We marry ancient healing arts with modern physiological understanding —
            creating a space in Frisco where peace and high performance coexist.
          </p>
        </div>

        {PILLARS.map((p, i) => (
          <div key={p.num} className={`pillar reveal d${i + 1}`}>
            <span className="pillar-num" aria-hidden="true">{p.num}</span>
            <div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-copy">{p.copy}</p>
            </div>
            <div className="pillar-icon" aria-hidden="true">{p.icon}</div>
          </div>
        ))}

        {/* ── Practitioner bio — Sage archetype: trust through expertise ── */}
        <div className="method-founder reveal d4" aria-label="About the founder">
          <div className="method-founder-avatar">
            <Image src="/megan_flynn.png" alt="Megan Flynn" width={120} height={120} style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="method-founder-text">
            <div className="method-founder-name-row">
              <span className="method-founder-name">Megan Flynn</span>
              <span className="method-founder-badge">
                Founder &amp; Lead Practitioner · 10+ Years
              </span>
            </div>
            <p className="method-founder-bio">
              Megan founded YES with one purpose: to build a studio in Frisco where
              ancient healing arts and modern science meet on equal ground. Trained
              across yoga instruction, Reiki mastery, and sound healing practice — and
              guided by over a decade of embodied study — she brings both rigorous
              knowledge and deep compassion to every session.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
