'use client'
import { useState } from 'react'
import Image from 'next/image'

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

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false)

  return (
    <section className="hero" aria-labelledby="hero-heading">

      {/* ── Background images — desktop landscape / mobile portrait ── */}
      <div className="hero-img-wrapper" aria-hidden="true">
        <Image
          src="/yes-hero-image.png"
          alt=""
          fill
          className="hero-bg-img hero-bg-desktop"
          priority
        />
        <Image
          src="/yes-hero-mobile.png"
          alt=""
          fill
          className="hero-bg-img hero-bg-mobile"
          priority
        />
        {/* Mobile video — plays once, fades out to PNG */}
        <video
          className={`hero-bg-video${videoEnded ? ' hero-video-ended' : ''}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideoEnded(true)}
          aria-hidden="true"
        >
          <source src="/yes-hero-mobile.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── "Yoga · Energy · Sound" centred below the logo in the image ── */}
      <div className="hero-center" aria-hidden="true">
        <div className="hero-sub-mark">
          <div className="hero-sub-mark-line" />
          <span className="hero-sub-mark-text">Yoga &nbsp;·&nbsp; Energy &nbsp;·&nbsp; Sound</span>
          <div className="hero-sub-mark-line" />
        </div>
      </div>

      {/* ── Bottom content bar ── */}
      <div className="hero-bottom">
        <div className="hero-text">
          <p className="hero-tagline" id="hero-heading">
            Recalibrate your<br />nervous system.
          </p>
          <span className="hero-location">Frisco, TX</span>
        </div>

        <div className="hero-right">
          <a href="#method" className="btn btn-rose" role="button">
            Explore the Method
            <ArrowRight />
          </a>
        </div>
      </div>


    </section>
  )
}
