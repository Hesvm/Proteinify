'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0) // 0 = top, 1 = fully shrunk

  useEffect(() => {
    // Full shrink over 250px of scroll — progressive, not a snap
    const onScroll = () => setScrollProgress(Math.min(window.scrollY / 250, 1))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Linear interpolation between default and shrunk values
  const lerp = (a: number, b: number) => a + (b - a) * scrollProgress

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: `${lerp(0, 16)}px`,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        // width interpolates from full-bleed → narrow — scroll drives the shrink
        width: '100%',
        maxWidth: `${lerp(1106, 520)}px`,
        height: '56px',
        padding: `10px ${lerp(18, 16)}px`,
        gap: `${lerp(30, 30)}px`,   // 30px always — 50% more than old 20px
        background: `rgba(13,13,13,${lerp(1, 0.92)})`,
        backdropFilter: scrollProgress > 0 ? `blur(${lerp(0, 12)}px)` : 'none',
        borderRadius: 0,
        boxShadow: scrollProgress > 0.05
          ? `0 8px 32px rgba(0,0,0,${lerp(0, 0.5)})`
          : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // no transition on geometry — scroll position drives it directly
        // tiny transition only for blur/shadow to avoid flicker
        transition: 'backdrop-filter 0.08s, box-shadow 0.08s',
      }}>
        {/* CTA button */}
        <a
          href={process.env.NEXT_PUBLIC_CTA_URL || '#'}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#e02f44',
            padding: '8px 13px',
            fontFamily: "'RaviFaNum', sans-serif",
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '-0.9px',
            color: 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          یه کیلو مرغ برام بخر
        </a>

        {/* Nav links — desktop */}
        <div className="hidden md:flex" style={{ gap: '31px', alignItems: 'center' }}>
          <Link href="/about" style={{
            fontFamily: "'RaviFaNum', sans-serif",
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '-0.64px',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
          }}>
            درباره
          </Link>
        </div>

        {/* Logo + Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: "'RaviFaNum', sans-serif",
            fontSize: '19.655px',
            fontWeight: 900,
            letterSpacing: '-0.786px',
            color: 'white',
            whiteSpace: 'nowrap',
          }}>
            پروتئینیفای
          </span>
          <Image src="/logo.svg" alt="Proteinify" width={30} height={30} />
        </Link>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden" style={{
          position: 'fixed',
          top: `${56 + lerp(0, 16)}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1106px',
          background: 'rgba(13,13,13,0.96)',
          backdropFilter: 'blur(12px)',
          borderRadius: 0,                   // sharp always
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 49,
          transition: 'all 0.15s ease-out',
        }}>
          <Link href="/about" onClick={() => setMenuOpen(false)} style={{
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'RaviFaNum', sans-serif",
            fontSize: '16px',
            fontWeight: 500,
            textDecoration: 'none',
          }}>درباره</Link>
        </div>
      )}
    </>
  )
}
