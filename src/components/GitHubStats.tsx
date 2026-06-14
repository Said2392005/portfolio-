import Image from 'next/image'

const USERNAME = 'Said2392005'
const STATS = 'https://github-readme-stats.vercel.app/api'
const STREAK = 'https://github-readme-streak-stats.herokuapp.com'

const statCards = [
  {
    label: 'GitHub Stats',
    src: `${STATS}?username=${USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&icon_color=7c3aed&text_color=888892&bg_color=00000000`,
    width: 495,
    height: 195,
  },
  {
    label: 'Top Languages',
    src: `${STATS}/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=ffffff&text_color=888892&bg_color=00000000&langs_count=6`,
    width: 495,
    height: 195,
  },
]

export default function GitHubStats() {
  return (
    <section id="github" style={{ padding: '96px 0', borderTop: '1px solid #1e1e22' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Open Source</p>
          <h2 className="section-title">GitHub Activity</h2>
        </div>

        {/* Streak — full width */}
        <div className="card" style={{ padding: 4, marginBottom: 16, overflow: 'hidden' }}>
          <div style={{ background: '#0d0d0f', borderRadius: 10, overflow: 'hidden', padding: '8px 4px' }}>
            <Image
              src={`${STREAK}/?user=${USERNAME}&theme=transparent&hide_border=true&background=00000000&ring=7c3aed&fire=a78bfa&currStreakLabel=ffffff&sideLabels=888892&dates=555560&stroke=1e1e22`}
              alt="GitHub Streak"
              width={1000}
              height={200}
              className="github-img"
              unoptimized
            />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }} className="stats-grid">
          {statCards.map(c => (
            <div key={c.label} className="card" style={{ padding: 4, overflow: 'hidden' }}>
              <div style={{ background: '#0d0d0f', borderRadius: 10, overflow: 'hidden', padding: '8px 4px' }}>
                <Image
                  src={c.src}
                  alt={c.label}
                  width={c.width}
                  height={c.height}
                  className="github-img"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {/* Contribution calendar */}
        <div className="card" style={{ padding: 20, overflow: 'hidden' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#555560', marginBottom: 16 }}>
            Contribution Calendar
          </p>
          <div style={{ background: '#0d0d0f', borderRadius: 8, padding: 12, overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/7c3aed/${USERNAME}`}
              alt="GitHub contribution chart"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Profile link */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: 'inline-flex' }}
          >
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: 2 }}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>

      <style>{`
        .github-img { width: 100%; height: auto; display: block; }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
