export default function About() {
  return (
    <section id="about" style={{ padding: '96px 0', borderTop: '1px solid #1e1e22' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 64,
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Label */}
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>About</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Who I Am
            </h2>
          </div>

          {/* Text */}
          <div>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.75,
                color: '#aaaaaa',
                fontWeight: 300,
                maxWidth: 580,
              }}
            >
              I am a B.Tech student in{' '}
              <span style={{ color: '#fff', fontWeight: 400 }}>Artificial Intelligence &amp; Machine Learning</span>{' '}
              at Vishwakarma University, Pune. I enjoy building AI-powered applications,
              full-stack products, and research-driven solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
