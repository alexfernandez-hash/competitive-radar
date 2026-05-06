import React from 'react'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'matrix',   label: 'Feature matrix' },
  { id: 'pricing',  label: 'Pricing' },
  { id: 'gaps',     label: 'Gaps & opportunities' },
  { id: 'tone',     label: 'Tone & audience' },
]

const s = {
  nav: {
    background: '#fff',
    borderBottom: '1px solid #dadce0',
    padding: '0 24px',
    display: 'flex',
    position: 'sticky',
    top: 64,
    zIndex: 99,
  },
  tab: {
    padding: '14px 20px',
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "'Google Sans', sans-serif",
    color: '#5f6368',
    background: 'none',
    border: 'none',
    borderBottom: '3px solid transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all .15s',
  },
  activeTab: {
    color: '#1a73e8',
    borderBottom: '3px solid #1a73e8',
  },
}

export default function NavTabs({ active, onChange }) {
  return (
    <div style={s.nav}>
      {TABS.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          style={{ ...s.tab, ...(active === t.id ? s.activeTab : {}) }}
          onMouseEnter={e => { if (active !== t.id) { e.target.style.color = '#1a73e8'; e.target.style.background = '#e8f0fe' } }}
          onMouseLeave={e => { if (active !== t.id) { e.target.style.color = '#5f6368'; e.target.style.background = 'none' } }}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
