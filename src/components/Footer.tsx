export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1e1e22', padding: '32px 0' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p style={{ fontSize: 13, color: '#555560', fontWeight: 300 }}>
          Designed &amp; Developed by{' '}
          <span style={{ color: '#888892', fontWeight: 400 }}>Sai Dhumal</span>
        </p>
        <p style={{ fontSize: 13, color: '#333338', fontWeight: 300 }}>
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
