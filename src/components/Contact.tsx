import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const links = [
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-dhumal-28b75a282',
    href: 'https://www.linkedin.com/in/sai-dhumal-28b75a282/',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Said2392005',
    href: 'https://github.com/Said2392005',
  },
  {
    icon: FiInstagram,
    label: 'Instagram',
    value: 'instagram.com/sai_d236',
    href: 'https://www.instagram.com/sai_d236',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: 'wa.me/918484014577',
    href: 'https://wa.me/918484014577',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'saidhumal236@gmail.com',
    href: 'mailto:saidhumal236@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '96px 0', borderTop: '1px solid #1e1e22' }}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>Contact</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              Let&apos;s Work<br />Together
            </h2>
            <p style={{ fontSize: 15, color: '#888892', lineHeight: 1.7, fontWeight: 300, maxWidth: 340 }}>
              Open to internships, full-time roles, research collaborations, and freelance projects.
            </p>
          </div>

          {/* Right */}
          <div style={{ paddingTop: 8 }}>
            {links.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#111113',
                      border: '1px solid #1e1e22',
                      borderRadius: 8,
                      color: '#888892',
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{label}</p>
                    <p style={{ fontSize: 12, color: '#555560', fontWeight: 300 }}>{value}</p>
                  </div>
                </div>
                <FiArrowUpRight size={16} color="#333338" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
