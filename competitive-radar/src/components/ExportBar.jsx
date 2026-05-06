import React, { useState } from 'react'
import { generateMarkdown } from '../data/data'

export default function ExportBar() {
  const [copied, setCopied] = useState(false)

  function exportMd() {
    const md = generateMarkdown()
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }))
    a.download = 'onetable-competitive-analysis.md'
    a.click()
  }

  function copyNotion() {
    navigator.clipboard.writeText(generateMarkdown()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const btnBase = {
    padding: '8px 18px', fontSize: 13,
    fontFamily: "'Google Sans', sans-serif", fontWeight: 500,
    borderRadius: 8, cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 6, transition: 'all .15s',
  }

  return (
    <div style={{ display: 'flex', gap: 10, padding: '20px 24px 0', flexWrap: 'wrap' }}>
      <button onClick={exportMd} style={{ ...btnBase, background: '#1a73e8', color: '#fff', border: 'none' }}
        onMouseEnter={e => e.currentTarget.style.background = '#1557b0'}
        onMouseLeave={e => e.currentTarget.style.background = '#1a73e8'}>
        ↓ Export Markdown
      </button>
      <button onClick={copyNotion} style={{ ...btnBase, background: '#fff', color: '#1a73e8', border: '1px solid #1a73e8' }}
        onMouseEnter={e => e.currentTarget.style.background = '#e8f0fe'}
        onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
        {copied ? '✓ Copied!' : '⊞ Copy for Notion'}
      </button>
    </div>
  )
}
