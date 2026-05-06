'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        // positioning: always fixed + centered
        position: 'fixed',
        top: scrolled ? '16px' : '0',
        left: '50%',
        transform: 'translateX(-50%)',   // no scale — width does the shrink
        zIndex: 50,
        // width: full-bleed default → content-hug when scrolled
        width: scrolled ? 'fit-content' : '100%',
        maxWidth: scrolled ? 'none' : '1106px',
        // height: constant — never changes
        height: '56px',
        padding: scrolled ? '10px 16px' : '10px 18px',
        gap: scrolled ? '20px' : '0',   // space items when fit-content collapses justify-content
        // appearance: blur + shadow when floating; sharp edges always
        background: scrolled ? 'rgba(13,13,13,0.92)' : '#0d0d0d',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderRadius: 0,                 // always sharp
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
        // layout
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // faster — 150ms feels snappy vs 300ms
        transition: 'all 0.15s ease-out',
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
          top: scrolled ? '72px' : '56px',  // nav is always 56px tall + 16px top offset when scrolled
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
