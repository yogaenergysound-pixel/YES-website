function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
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

export default function FinalCTA() {
  return (
    <section className="final-cta" id="begin" aria-labelledby="cta-heading">

      {/* ── Subtle warm glow at top-centre ── */}
      <div className="cta-glow" aria-hidden="true" />

      <div className="cta-inner reveal">

        <span className="section-label cta-eyebrow">Your invitation</span>

        <h2 className="cta-headline" id="cta-heading">
          Are you ready<br />to say <em>yes?</em>
        </h2>

        {/* ── Editorial body row: copy left, buttons right ── */}
        <div className="cta-body-row">
          <p className="cta-sub">
            Our studio is located in the heart of Frisco, Texas — a welcoming
            sanctuary for beginners and seasoned practitioners alike.
            No experience necessary. Only an open mind.
          </p>

          <div className="cta-buttons">
            <a href="#offerings" className="btn btn-rose" role="button">
              Book Your First Class
              <ArrowRight />
            </a>
            <a href="#method" className="btn btn-ghost-dark" role="button">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
