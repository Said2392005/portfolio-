import { FiExternalLink } from 'react-icons/fi'

const items = [
  {
    tag: 'Research Paper',
    title: 'Credit Risk Prediction Research',
    detail: 'Stacked ensemble approach combining LightGBM, XGBoost, and CatBoost for financial risk modeling.',
    year: '2024',
    link: '#',
  },
  {
    tag: 'TIJER Publication',
    title: 'Multilingual Keyword Extraction',
    detail: 'Published in The International Journal of Innovative Research — hybrid NLP approach for keyword extraction across multiple languages.',
    year: '2024',
    link: '#',
  },
  {
    tag: 'Conference — ICMETET',
    title: 'Cross-Lingual Information Extraction',
    detail: 'Presented at the International Conference on Machine Learning, Emerging Technologies & Engineering.',
    year: '2024',
    link: '#',
  },
]

export default function Research() {
  return (
    <section id="research" style={{ padding: '96px 0', borderTop: '1px solid #1e1e22' }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Academic</p>
          <h2 className="section-title">Research &amp; Publications</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, i) => (
            <div
              key={item.title}
              style={{
                padding: '32px 0',
                borderTop: i === 0 ? '1px solid #1e1e22' : 'none',
                borderBottom: '1px solid #1e1e22',
                display: 'grid',
                gridTemplateColumns: '140px 1fr auto',
                gap: 32,
                alignItems: 'start',
              }}
              className="research-row"
            >
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#7c3aed', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {item.tag}
                </p>
                <p style={{ fontSize: 12, color: '#555560' }}>{item.year}</p>
              </div>

              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, color: '#888892', lineHeight: 1.65, fontWeight: 300, maxWidth: 520 }}>
                  {item.detail}
                </p>
              </div>

              <a href={item.link} target="_blank" rel="noopener noreferrer" className="research-link">
                <FiExternalLink size={14} />
                View
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .research-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  )
}
