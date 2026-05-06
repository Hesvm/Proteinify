'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        background: '#0d0d0d',
        height: '56px',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1106px',
        margin: '42px auto 0',
        position: 'sticky',
        top: '0',
        zIndex: 50,
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
          background: '#0d0d0d',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
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
