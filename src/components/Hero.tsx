'use client'

import Image from 'next/image'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const socials = [
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/sai-dhumal-28b75a282/', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/Said2392005', label: 'GitHub' },
  { icon: FiInstagram, href: 'https://www.instagram.com/sai_d236', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/918484014577', label: 'WhatsApp' },
  { icon: FiMail, href: 'mailto:saidhumal236@gmail.com', label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Profile photo */}
        <div
          style={{
            width: 110,
            height: 110,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #1e1e22',
            marginBottom: 32,
            flexShrink: 0,
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Sai Dhumal"
            width={110}
            height={110}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            priority
          />
        </div>

        {/* Status pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '5px 14px',
            border: '1px solid #1e1e22',
            borderRadius: 100,
            marginBottom: 36,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
          <span style={{ fontSize: 12, color: '#555560', fontWeight: 300 }}>Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(48px, 9vw, 96px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: '#ffffff',
            marginBottom: 20,
          }}
        >
          Sai Dhumal
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 20px)',
            fontWeight: 300,
            color: '#888892',
            letterSpacing: '0.02em',
            marginBottom: 24,
          }}
        >
          AI &amp; ML Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Full Stack Developer
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: 'clamp(14px, 1.4vw, 16px)',
            color: '#555560',
            maxWidth: 420,
            margin: '0 auto 48px',
            lineHeight: 1.75,
            fontWeight: 300,
          }}
        >
          Building intelligent software solutions using Artificial Intelligence,
          Machine Learning, and Full Stack Development.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
          <a href="/resume.pdf" download className="btn-primary">
            <FiDownload size={15} />
            Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
            <FiArrowRight size={15} />
          </a>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
