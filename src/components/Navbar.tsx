'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: all 0.3s ease;
        }
        .nav-root.scrolled {
          border-bottom: 1px solid #1e1e22;
          background: rgba(10,10,11,0.92);
          backdrop-filter: blur(12px);
        }
        .nav-link { padding: 6px 14px; font-size: 13px; color: #888892; text-decoration: none; border-radius: 6px; transition: color 0.15s ease; }
        .nav-link:hover { color: #fff; }
        .nav-cta {
          margin-left: 8px; padding: 7px 18px; font-size: 13px; font-weight: 500;
          color: #fff; background: #7c3aed; border-radius: 7px; text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .nav-cta:hover { opacity: 0.85; }
        .nav-toggle { background: none; border: none; color: #888; cursor: pointer; padding: 4px; display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
        .nav-mobile-link { display: block; padding: 10px 0; font-size: 14px; color: #888892; text-decoration: none; border-bottom: 1px solid #1e1e22; }
        .nav-mobile-link:hover { color: #fff; }
      `}</style>

      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <a href="#home" style={{ fontSize: 17, fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            Sai Dhumal
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <a href="#contact" className="nav-cta">Hire Me</a>
          </div>

          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {open && (
          <div style={{ borderTop: '1px solid #1e1e22', background: '#0a0a0b', padding: '8px 32px 20px' }}>
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
