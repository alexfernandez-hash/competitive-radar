import React from 'react'
import { COLORS, LIGHT_COLORS } from '../data/data'

export default function ScoreCard({ product, score, rank, total }) {
  const col = COLORS[product]
  const light = LIGHT_COLORS[product]
  const r = 30
  const circ = 2 * Math.PI * r
  const dash = (score / 100) * circ

  return (
    <div style={{
      background: product === 'OneTable' ? light : '#fff',
      border: `${product === 'OneTable' ? 2 : 1}px solid ${product === 'OneTable' ? col : '#dadce0'}`,
      borderRadius: 12,
      padding: 20,
      textAlign: 'center',
      boxShadow: '0 1px 2px rgba(60,64,67,.1),0 2px 6px rgba(60,64,67,.08)',
      transition: 'box-shadow .2s',
    }}>
      <div style={{
        display: 'inline-block',
        fontSize: 10,
        fontWeight: 500,
        padding: '2px 8px',
        borderRadius: 99,
        marginBottom: 10,
        fontFamily: "'Roboto Mono', monospace",
        letterSpacing: '.04em',
        background: product === 'OneTable' ? col : '#f1f3f4',
        color: product === 'OneTable' ? '#fff' : '#5f6368',
      }}>
        {product === 'OneTable' ? 'YOUR PRODUCT' : 'COMPETITOR'}
      </div>

      <div style={{
        fontFamily: "'Google Sans Display', sans-serif",
        fontSize: 14,
        fontWeight: 500,
        color: '#202124',
        marginBottom: 14,
      }}>
        {product}
      </div>

      <div style={{ width: 80, height: 80, margin: '0 auto 12px', position: 'relative' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="40" cy="40" r={r} fill="none" stroke={light} strokeWidth="7" />
          <circle
            cx="40" cy="40" r={r} fill="none" stroke={col} strokeWidth="7"
            strokeDasharray={`${dash.toFixed(1)} ${circ.toFixed(1)}`}
            strokeLinecap="round"
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Google Sans Display', sans-serif", fontSize: 20, fontWeight: 700, color: col,
        }}>
          {score}
        </div>
      </div>

      <div style={{ fontSize: 11, fontFamily: "'Roboto Mono', monospace", color: '#80868b' }}>
        #{rank} of {total} &nbsp;·&nbsp; {score}/100
      </div>
    </div>
  )
}
