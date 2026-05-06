import React, { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  RadialLinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend,
} from 'chart.js'
import { Bar, Radar } from 'react-chartjs-2'
import { PRODUCTS, COLORS, LIGHT_COLORS, CATS, catScore, overallScore } from '../data/data'
import ScoreCard from './ScoreCard'

ChartJS.register(
  CategoryScale, LinearScale, BarElement,
  RadialLinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend
)

const card = {
  background: '#fff',
  borderRadius: 12,
  border: '1px solid #dadce0',
  padding: '20px 24px',
  boxShadow: '0 1px 2px rgba(60,64,67,.1),0 2px 6px rgba(60,64,67,.08)',
}

const cardTitle = {
  fontSize: 13,
  fontWeight: 500,
  color: '#5f6368',
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  marginBottom: 20,
}

export default function Overview() {
  const scores = PRODUCTS.map(p => overallScore(p.label))
  const ranked = [...PRODUCTS]
    .map(p => ({ ...p, s: overallScore(p.label) }))
    .sort((a, b) => b.s - a.s)
  const rankMap = {}
  ranked.forEach((p, i) => (rankMap[p.label] = i + 1))

  const barData = {
    labels: PRODUCTS.map(p => p.label),
    datasets: [{
      label: 'Overall score',
      data: scores,
      backgroundColor: PRODUCTS.map(p => LIGHT_COLORS[p.label]),
      borderColor: PRODUCTS.map(p => COLORS[p.label]),
      borderWidth: 2,
      borderRadius: 6,
      borderSkipped: false,
    }],
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: c => `Score: ${c.raw}/100` },
        backgroundColor: '#fff',
        titleColor: '#202124',
        bodyColor: '#5f6368',
        borderColor: '#dadce0',
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#5f6368', font: { family: 'Roboto Mono', size: 11 } } },
      y: {
        grid: { color: '#f1f3f4' },
        ticks: { color: '#80868b', font: { family: 'Roboto Mono', size: 10 } },
        min: 0, max: 100,
        title: { display: true, text: 'Score / 100', color: '#80868b', font: { family: 'Roboto Mono', size: 10 } },
      },
    },
  }

  const radarData = {
    labels: CATS,
    datasets: PRODUCTS.map(p => ({
      label: p.label,
      data: CATS.map(cat => catScore(p.label, cat)),
      borderColor: COLORS[p.label],
      backgroundColor: LIGHT_COLORS[p.label] + '80',
      borderWidth: p.isMine ? 2.5 : 1.5,
      pointBackgroundColor: COLORS[p.label],
      pointRadius: p.isMine ? 4 : 2.5,
    })),
  }

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#fff', titleColor: '#202124',
        bodyColor: '#5f6368', borderColor: '#dadce0', borderWidth: 1, padding: 10,
      },
    },
    scales: {
      r: {
        grid: { color: '#e8eaed' },
        angleLines: { color: '#e8eaed' },
        pointLabels: { color: '#5f6368', font: { family: 'Roboto Mono', size: 9 } },
        ticks: { display: false, stepSize: 25 },
        min: 0, max: 100,
      },
    },
  }

  return (
    <div style={{ padding: 24 }}>
      {/* Product chips */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {PRODUCTS.map(p => (
          <div key={p.label} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            padding: '6px 14px', borderRadius: 99,
            border: `1.5px solid ${p.isMine ? COLORS[p.label] : '#dadce0'}`,
            background: p.isMine ? LIGHT_COLORS[p.label] : '#fff',
            fontSize: 12, fontWeight: 500,
            color: p.isMine ? COLORS[p.label] : '#3c4043',
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLORS[p.label] }} />
            {p.label}{p.isMine ? ' · Your product' : ''}
          </div>
        ))}
      </div>

      {/* Score cards */}
      <div style={{ fontSize: 16, fontFamily: "'Google Sans Display',sans-serif", fontWeight: 500, color: '#202124', marginBottom: 16 }}>
        Final scores
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12, marginBottom: 20 }}>
        {PRODUCTS.map(p => (
          <ScoreCard
            key={p.label}
            product={p.label}
            score={overallScore(p.label)}
            rank={rankMap[p.label]}
            total={PRODUCTS.length}
          />
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        <div style={card}>
          <div style={cardTitle}>Overall score comparison</div>
          <div style={{ height: 260 }}>
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div style={card}>
          <div style={cardTitle}>Capability radar</div>
          <div style={{ height: 260 }}>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
      </div>

      {/* Category breakdown */}
      <div style={card}>
        <div style={cardTitle}>Score by category</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {CATS.map(cat => (
            <div key={cat}>
              <div style={{
                fontSize: 12, fontWeight: 500, color: '#5f6368',
                textTransform: 'uppercase', letterSpacing: '.06em',
                marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #e8eaed',
              }}>
                {cat}
              </div>
              {PRODUCTS.map(p => {
                const s = catScore(p.label, cat)
                return (
                  <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <div style={{
                      fontSize: 12, width: 76, flexShrink: 0, fontWeight: p.isMine ? 600 : 400,
                      color: p.isMine ? COLORS[p.label] : '#5f6368',
                    }}>
                      {p.label}
                    </div>
                    <div style={{ flex: 1, height: 8, background: '#f1f3f4', borderRadius: 4, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s}%`, background: COLORS[p.label], borderRadius: 4 }} />
                    </div>
                    <div style={{ fontSize: 12, fontFamily: "'Roboto Mono',monospace", color: '#80868b', width: 28, textAlign: 'right' }}>
                      {s}
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
