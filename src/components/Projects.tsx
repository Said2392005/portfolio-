import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Credit Risk Prediction System',
    description:
      'AI-powered risk prediction platform using LightGBM, XGBoost, CatBoost, and Streamlit.',
    tags: ['Python', 'LightGBM', 'XGBoost', 'CatBoost', 'Streamlit'],
    color: '#0f0a1e',
    accent: '#7c3aed',
    emoji: '💳',
    github: 'https://github.com/Said2392005',
    demo: null,
  },
  {
    title: 'Karmic HRMS',
    description:
      'Intelligent HR platform with Resume Analysis, Workforce Intelligence, and Behavioral Analytics.',
    tags: ['React.js', 'FastAPI', 'Python', 'Supabase', 'Tailwind CSS'],
    color: '#0a0f1e',
    accent: '#2563eb',
    emoji: '👥',
    github: 'https://github.com/Said2392005',
    demo: null,
  },
  {
    title: 'Sunhouse Solar',
    description:
      'Solar Service Management System for customer management, scheduling, service tracking, and reporting.',
    tags: ['React.js', 'Node.js', 'MySQL', 'Power BI', 'JavaScript'],
    color: '#0a1a0f',
    accent: '#16a34a',
    emoji: '☀️',
    github: 'https://github.com/Said2392005',
    demo: 'https://www.sunhousesolar.in',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 0', borderTop: '1px solid #1e1e22' }}>
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 56,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Featured Projects</p>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <a
            href="https://github.com/Said2392005"
            target="_blank"
            rel="noopener noreferrer"
            className="gh-view-all"
          >
            <FiGithub size={14} />
            View all on GitHub
          </a>
        </div>

        {/* Cards */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="projects-grid"
        >
          {projects.map(p => (
            <div
              key={p.title}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* Visual */}
              <div
                style={{
                  height: 180,
                  background: p.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 30% 50%, ${p.accent}20 0%, transparent 70%)`,
                  }}
                />
                <span style={{ fontSize: 52, position: 'relative', zIndex: 1 }}>{p.emoji}</span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 8,
                    letterSpacing: '-0.01em',
                    color: '#fff',
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: '#888892',
                    lineHeight: 1.65,
                    marginBottom: 18,
                    flex: 1,
                    fontWeight: 300,
                  }}
                >
                  {p.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        color: '#555560',
                        padding: '3px 8px',
                        border: '1px solid #1e1e22',
                        borderRadius: 4,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons — GitHub always shown; Live Demo only for Sunhouse Solar */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-sm"
                    style={{ flex: p.demo ? 1 : undefined, width: p.demo ? undefined : '100%' }}
                  >
                    <FiGithub size={13} />
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent-sm"
                    >
                      <FiExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
