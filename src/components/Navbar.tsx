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
        // positioning: fixed + centered (floating effect)
        position: 'fixed',
        top: scrolled ? '16px' : '0',
        left: '50%',
        transform: scrolled ? 'translateX(-50%) scale(0.98)' : 'translateX(-50%)',
        zIndex: 50,
        // sizing: shrinks when scrolled
        width: '100%',
        maxWidth: scrolled ? '960px' : '1106px',
        height: scrolled ? '48px' : '56px',
        padding: '10px 18px',
        // appearance: floats with blur + shadow + rounded corners when scrolled
        background: scrolled ? 'rgba(13,13,13,0.92)' : '#0d0d0d',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderRadius: scrolled ? '14px' : '0',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
        // layout
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        // smooth transitions
        transition: 'all 0.3s ease-out',
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
          top: scrolled ? '80px' : '56px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: scrolled ? '960px' : '1106px',
          background: 'rgba(13,13,13,0.96)',
          backdropFilter: 'blur(12px)',
          borderRadius: scrolled ? '0 0 14px 14px' : '0',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 49,
          transition: 'all 0.3s ease-out',
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
