import React from 'react'
import { PRICING, GAPS, TONE, COLORS, LIGHT_COLORS } from '../data/data'

/* ── Shared card style ── */
const card = {
  background: '#fff',
  borderRadius: 12,
  border: '1px solid #dadce0',
  padding: '18px 20px',
  boxShadow: '0 1px 2px rgba(60,64,67,.1),0 2px 6px rgba(60,64,67,.08)',
  transition: 'box-shadow .2s',
}

/* ─────────────────────────────────────── */
/*  PRICING                                */
/* ─────────────────────────────────────── */
export function Pricing() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(185px,1fr))', gap: 14 }}>
        {PRICING.map(pd => (
          <div key={pd.company} style={{
            ...card,
            border: pd.isMine ? `2px solid ${COLORS[pd.company]}` : '1px solid #dadce0',
            background: pd.isMine ? LIGHT_COLORS[pd.company] : '#fff',
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 7, color: '#3c4043' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: COLORS[pd.company] }} />
              {pd.company}
            </div>
            <div style={{ fontSize: 11, color: '#80868b', marginBottom: 10, fontStyle: 'italic' }}>{pd.model}</div>
            {pd.plans.map(pl => (
              <div key={pl.name} style={{ borderTop: '1px solid #e8eaed', paddingTop: 10, marginTop: 4, paddingBottom: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em', color: '#5f6368', marginBottom: 3 }}>{pl.name}</div>
                <div>
                  <span style={{ fontFamily: "'Google Sans Display',sans-serif", fontSize: 20, fontWeight: 700, color: '#202124' }}>{pl.price}</span>
                  <span style={{ fontSize: 11, color: '#80868b', fontFamily: "'Roboto Mono',monospace", marginLeft: 3 }}>{pl.period}</span>
                </div>
                <div style={{ fontSize: 11, color: '#5f6368', marginTop: 5, lineHeight: 1.5 }}>{pl.note}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  GAPS                                   */
/* ─────────────────────────────────────── */
const PRIORITY_COLORS = {
  high:   { bg: '#fce8e6', color: '#ea4335', icon: '#fce8e6' },
  medium: { bg: '#fef7e0', color: '#b06000', icon: '#fef7e0' },
  low:    { bg: '#e6f4ea', color: '#34a853', icon: '#e6f4ea' },
}

export function Gaps() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {GAPS.map((g, i) => {
          const pc = PRIORITY_COLORS[g.priority]
          return (
            <div key={i} style={{
              ...card,
              borderLeft: `3px solid ${pc.color}`,
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: pc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 15 }}>
                  {g.icon}
                </div>
                <div>
                  <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '.06em', background: pc.bg, color: pc.color, marginBottom: 4 }}>
                    {g.priority}
                  </span>
                  <div style={{ fontSize: 13, fontWeight: 500, color: '#202124', lineHeight: 1.4 }}>{g.title}</div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: '#5f6368', lineHeight: 1.6 }}>{g.body}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  TONE & AUDIENCE                        */
/* ─────────────────────────────────────── */
export function Tone() {
  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(185px,1fr))', gap: 14 }}>
        {TONE.map(t => (
          <div key={t.company} style={{
            ...card,
            border: t.isMine ? `2px solid ${COLORS[t.company]}` : '1px solid #dadce0',
            background: t.isMine ? LIGHT_COLORS[t.company] : '#fff',
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7, color: '#3c4043' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: COLORS[t.company] }} />
              {t.company}
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#202124', marginBottom: 6, lineHeight: 1.4, fontStyle: 'italic' }}>{t.vp}</div>
            <div style={{ fontSize: 11, color: '#5f6368', marginBottom: 12, lineHeight: 1.5 }}>{t.aud}</div>

            {[
              { label: ['Casual', 'Formal'],      val: t.formality },
              { label: ['Accessible', 'Technical'], val: t.tech },
            ].map(({ label, val }) => (
              <div key={label[0]} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#80868b', marginBottom: 4, fontFamily: "'Roboto Mono',monospace" }}>
                  <span>{label[0]}</span><span>{label[1]}</span>
                </div>
                <div style={{ height: 6, background: '#f1f3f4', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${val}%`, background: COLORS[t.company], borderRadius: 3 }} />
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 10 }}>
              {t.tags.map(tag => (
                <span key={tag} style={{ fontSize: 10, padding: '3px 9px', borderRadius: 99, background: '#f1f3f4', color: '#5f6368', border: '1px solid #e8eaed', fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
