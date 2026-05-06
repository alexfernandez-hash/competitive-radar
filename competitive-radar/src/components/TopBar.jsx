import React from 'react'

const styles = {
  topbar: {
    background: '#fff',
    borderBottom: '1px solid #dadce0',
    padding: '0 24px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 1px 2px rgba(60,64,67,.1)',
  },
  left: { display: 'flex', alignItems: 'center', gap: 16 },
  logo: {
    width: 32, height: 32, borderRadius: '50%',
    background: '#1a73e8',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Google Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff',
  },
  title: { fontFamily: "'Google Sans Display', sans-serif", fontSize: 18, fontWeight: 500, color: '#202124', letterSpacing: '-.01em' },
  sub: { fontSize: 12, color: '#80868b', marginTop: 1 },
  meta: { fontSize: 12, color: '#80868b', fontFamily: "'Roboto Mono', monospace" },
}

export default function TopBar() {
  return (
    <div style={styles.topbar}>
      <div style={styles.left}>
        <div style={styles.logo}>OT</div>
        <div>
          <div style={styles.title}>Competitive Radar</div>
          <div style={styles.sub}>onetable.org · social dining market · May 2026</div>
        </div>
      </div>
      <div style={styles.meta}>5 products · 18 features · 4 categories</div>
    </div>
  )
}
