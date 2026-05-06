import React from 'react'
import { PRODUCTS, FEATURES, CATS, COLORS } from '../data/data'

export default function FeatureMatrix() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{
        background: '#fff', borderRadius: 12, border: '1px solid #dadce0',
        overflow: 'hidden', boxShadow: '0 1px 2px rgba(60,64,67,.1)',
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                <th style={thStyle()}>Feature</th>
                {PRODUCTS.map(p => (
                  <th key={p.label} style={thStyle(p.isMine)}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: COLORS[p.label], display: 'inline-block' }} />
                      {p.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CATS.map(cat => (
                <React.Fragment key={cat}>
                  <tr>
                    <td colSpan={PRODUCTS.length + 1} style={{
                      fontSize: 11, fontWeight: 600, color: '#5f6368',
                      textTransform: 'uppercase', letterSpacing: '.08em',
                      background: '#f1f3f4', padding: '7px 14px',
                      borderBottom: '1px solid #dadce0',
                    }}>
                      {cat}
                    </td>
                  </tr>
                  {FEATURES.filter(f => f.cat === cat).map(feat => (
                    <tr key={feat.name} style={{ transition: 'background .1s' }}
                      onMouseEnter={e => { Array.from(e.currentTarget.cells).forEach(c => c.style.background = c.dataset.mine === '1' ? '#dce8fd' : '#f8f9fa') }}
                      onMouseLeave={e => { Array.from(e.currentTarget.cells).forEach(c => c.style.background = c.dataset.mine === '1' ? '#f0f5ff' : '') }}
                    >
                      <td style={{ padding: '9px 14px', borderBottom: '1px solid #e8eaed', fontSize: 12, color: '#3c4043', background: '#f8f9fa', borderRight: '1px solid #e8eaed', minWidth: 190 }}>
                        {feat.name}
                      </td>
                      {PRODUCTS.map(p => {
                        const s = feat.scores[p.label] ?? 0
                        return (
                          <td key={p.label} data-mine={p.isMine ? '1' : '0'}
                            style={{ padding: '9px 14px', borderBottom: '1px solid #e8eaed', background: p.isMine ? '#f0f5ff' : '#fff' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ display: 'flex', gap: 3 }}>
                                {[1,2,3,4,5].map(i => (
                                  <div key={i} style={{
                                    width: 9, height: 9, borderRadius: '50%',
                                    background: i <= s ? COLORS[p.label] : '#e8eaed',
                                  }} />
                                ))}
                              </div>
                              <span style={{ fontSize: 11, fontFamily: "'Roboto Mono',monospace", color: '#80868b' }}>
                                {s}/5
                              </span>
                            </div>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function thStyle(isMine = false) {
  return {
    padding: '10px 14px',
    fontSize: 11, fontWeight: 500, color: isMine ? '#1a73e8' : '#5f6368',
    textTransform: 'uppercase', letterSpacing: '.06em',
    background: isMine ? '#e8f0fe' : '#f8f9fa',
    borderBottom: '1px solid #dadce0',
    textAlign: 'left', whiteSpace: 'nowrap',
  }
}
