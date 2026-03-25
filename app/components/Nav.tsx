'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' nav-open' : ''}`} id="main-nav" aria-label="Main navigation">
      <a href="/" className="nav-logo" aria-label="YES — Yoga Energy Sound home">
        <span className="nav-yes-letters">YES</span>
      </a>

      <ul className="nav-links" role="list">
        <li><a href="/#method">Method</a></li>
        <li><a href="/#offerings">Offerings</a></li>
        <li><a href="/#stories">Stories</a></li>
        <li><a href="/blog">Journal</a></li>
        <li><a href="/#begin" className="nav-cta-btn">Begin</a></li>
      </ul>

      <button
        className="nav-hamburger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav-mobile-menu"
        onClick={() => setOpen(o => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="nav-mobile-menu" id="nav-mobile-menu" role="dialog" aria-label="Mobile navigation">
          <ul role="list">
            <li><a href="/#method" onClick={() => setOpen(false)}>Method</a></li>
            <li><a href="/#offerings" onClick={() => setOpen(false)}>Offerings</a></li>
            <li><a href="/#stories" onClick={() => setOpen(false)}>Stories</a></li>
            <li><a href="/blog" onClick={() => setOpen(false)}>Journal</a></li>
            <li>
              <a href="/#begin" className="nav-mobile-cta" onClick={() => setOpen(false)}>Begin</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
