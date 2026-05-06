import React, { useState } from 'react'
import TopBar from './components/TopBar'
import NavTabs from './components/NavTabs'
import Overview from './components/Overview'
import FeatureMatrix from './components/FeatureMatrix'
import { Pricing, Gaps, Tone } from './components/Sections'
import ExportBar from './components/ExportBar'

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const panels = {
    overview: <Overview />,
    matrix:   <FeatureMatrix />,
    pricing:  <Pricing />,
    gaps:     <Gaps />,
    tone:     <Tone />,
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <TopBar />
      <NavTabs active={activeTab} onChange={setActiveTab} />

      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {panels[activeTab]}
        <ExportBar />
        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}
