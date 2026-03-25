const ITEMS = [
  'Frisco, TX',
  'Yoga',
  'Energy',
  'Sound',
  'Nervous System Reset',
  'Say YES',
  'Align',
  'Resonate',
  'Science-Backed Healing',
  'Ancient Wisdom',
  'Modern Life',
  'Transform',
  'Deep Rest',
  'North Texas',
  'Breathe',
  'Vibrate',
]

function MarqueeInner() {
  return (
    <div className="marquee-inner" aria-hidden>
      {ITEMS.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <span className="marquee-item">{item}</span>
          <span className="marquee-sep">◆</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-outer">
        <div className="marquee-track">
          {/* Duplicate for seamless loop */}
          <MarqueeInner />
          <MarqueeInner />
        </div>
      </div>
    </div>
  )
}
