'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const raf     = useRef<number | null>(null)
  const mouse   = useRef({ x: -200, y: -200 })
  const ringPos = useRef({ x: -200, y: -200 })

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // ── Mouse tracking: dot follows instantly ──
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top  = `${e.clientY}px`
    }
    document.addEventListener('mousemove', onMove)

    // ── Smooth ring follow via RAF ──
    function loop() {
      const r = ringRef.current
      if (r) {
        ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1
        ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1
        r.style.left = `${ringPos.current.x}px`
        r.style.top  = `${ringPos.current.y}px`
      }
      raf.current = requestAnimationFrame(loop)
    }
    loop()

    // ── Hover state: cursor grows on interactive elements ──
    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"], label').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovered'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovered'))
      })
    }
    addHover()
    const mo = new MutationObserver(addHover)
    mo.observe(document.body, { childList: true, subtree: true })

    // ── Nav frosted-glass on scroll ──
    const nav = document.getElementById('main-nav')
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
