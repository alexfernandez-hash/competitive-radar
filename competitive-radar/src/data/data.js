export const COLORS = {
  OneTable: '#1a73e8',
  EatWith:  '#fa7b17',
  DayOfUs:  '#a142f4',
  Strangrs: '#34a853',
  Timeleft: '#00897b',
}

export const LIGHT_COLORS = {
  OneTable: '#e8f0fe',
  EatWith:  '#fce8d5',
  DayOfUs:  '#f3e8fd',
  Strangrs: '#e6f4ea',
  Timeleft: '#e0f2f1',
}

export const PRODUCTS = [
  { label: 'OneTable', isMine: true  },
  { label: 'EatWith',  isMine: false },
  { label: 'DayOfUs',  isMine: false },
  { label: 'Strangrs', isMine: false },
  { label: 'Timeleft', isMine: false },
]

export const FEATURES = [
  { cat: 'Community & Mission', name: 'Identity / culture-specific focus',       scores: { OneTable:5, EatWith:1, DayOfUs:1, Strangrs:1, Timeleft:1 } },
  { cat: 'Community & Mission', name: 'Nonprofit / grant-funded model',          scores: { OneTable:5, EatWith:0, DayOfUs:0, Strangrs:0, Timeleft:0 } },
  { cat: 'Community & Mission', name: 'Host financial subsidy per guest',        scores: { OneTable:5, EatWith:0, DayOfUs:0, Strangrs:0, Timeleft:0 } },
  { cat: 'Community & Mission', name: 'Ritual & tradition onboarding resources', scores: { OneTable:5, EatWith:2, DayOfUs:0, Strangrs:0, Timeleft:0 } },
  { cat: 'Community & Mission', name: 'B2B white-label SaaS platform',           scores: { OneTable:4, EatWith:1, DayOfUs:0, Strangrs:0, Timeleft:0 } },
  { cat: 'Matching & Events',   name: 'Personality-based algorithm matching',    scores: { OneTable:2, EatWith:1, DayOfUs:4, Strangrs:5, Timeleft:4 } },
  { cat: 'Matching & Events',   name: 'Weekly recurring structured events',      scores: { OneTable:3, EatWith:2, DayOfUs:4, Strangrs:5, Timeleft:5 } },
  { cat: 'Matching & Events',   name: 'Host-driven dinner model',                scores: { OneTable:5, EatWith:5, DayOfUs:0, Strangrs:0, Timeleft:0 } },
  { cat: 'Matching & Events',   name: 'Icebreaker / conversation tools',         scores: { OneTable:3, EatWith:0, DayOfUs:4, Strangrs:5, Timeleft:3 } },
  { cat: 'Matching & Events',   name: 'Post-event friend connection',            scores: { OneTable:3, EatWith:2, DayOfUs:4, Strangrs:3, Timeleft:3 } },
  { cat: 'Matching & Events',   name: 'Multiple event formats',                  scores: { OneTable:1, EatWith:3, DayOfUs:2, Strangrs:2, Timeleft:5 } },
  { cat: 'Platform & Reach',    name: 'Mobile app (iOS & Android)',              scores: { OneTable:3, EatWith:3, DayOfUs:4, Strangrs:4, Timeleft:5 } },
  { cat: 'Platform & Reach',    name: 'Global city coverage (50+ cities)',       scores: { OneTable:3, EatWith:4, DayOfUs:3, Strangrs:2, Timeleft:5 } },
  { cat: 'Platform & Reach',    name: 'Multi-age segment product lines',         scores: { OneTable:4, EatWith:1, DayOfUs:1, Strangrs:1, Timeleft:2 } },
  { cat: 'Platform & Reach',    name: 'Impact reporting / metrics dashboard',    scores: { OneTable:5, EatWith:1, DayOfUs:1, Strangrs:1, Timeleft:2 } },
  { cat: 'Monetization',        name: 'Subscription pricing model',              scores: { OneTable:0, EatWith:0, DayOfUs:4, Strangrs:4, Timeleft:4 } },
  { cat: 'Monetization',        name: 'Pay-per-event option',                    scores: { OneTable:1, EatWith:5, DayOfUs:4, Strangrs:4, Timeleft:2 } },
  { cat: 'Monetization',        name: 'Donation / philanthropy revenue model',   scores: { OneTable:5, EatWith:0, DayOfUs:0, Strangrs:0, Timeleft:0 } },
]

export const PRICING = [
  {
    company: 'OneTable', isMine: true, model: 'Nonprofit · donation-funded',
    plans: [
      { name: 'Guest',         price: 'Free',        period: '',        note: 'Attending is free. Pay your own food at venue.' },
      { name: 'Host – Base',   price: '~$10',        period: '/guest',  note: 'Nourishment subsidy per guest, up to ~$150/dinner.' },
      { name: 'Nourishment+',  price: 'Up to $300',  period: '/event',  note: 'Enhanced subsidy for special dinners. Apply 2 weeks ahead.' },
    ],
  },
  {
    company: 'EatWith', isMine: false, model: 'Marketplace · commission',
    plans: [
      { name: 'Guest', price: 'Varies',  period: '/event',   note: 'Host price + 20–30% EatWith fee. ~$30–$150+ per person.' },
      { name: 'Host',  price: 'Free',    period: 'to list',  note: 'Keep 100% of your set price. Platform earns from guest fee.' },
    ],
  },
  {
    company: 'DayOfUs', isMine: false, model: 'Ticket + subscription',
    plans: [
      { name: 'Single seat',   price: '$12.99', period: '/event', note: 'Pay per dinner. Food paid separately at restaurant.' },
      { name: 'Subscription',  price: '$15.99', period: '/mo',    note: 'Unlimited bookings. Best value at 2+ dinners/month.' },
    ],
  },
  {
    company: 'Strangrs', isMine: false, model: 'Ticket + membership',
    plans: [
      { name: 'Single dinner', price: '€10.99', period: '/event', note: 'Or 3-pack for €19.99. Includes matching & venue fee.' },
      { name: 'Gold Member',   price: '€15.99', period: '/mo',    note: 'Unlimited + exclusive perks at partner restaurants.' },
    ],
  },
  {
    company: 'Timeleft', isMine: false, model: 'Subscription',
    plans: [
      { name: 'Monthly',   price: '~$15–25', period: '/mo',  note: 'Varies by city. Covers booking only — food paid at venue.' },
      { name: 'Quarterly', price: '~$40–65', period: '/3mo', note: 'Single tickets still available in select markets.' },
    ],
  },
]

export const GAPS = [
  { priority: 'high',   icon: '🔑', title: 'Host subsidy model is a unique structural moat',        body: 'No competitor pays its hosts. Zero commercial replication. Expanding to adjacent communities (interfaith, diaspora, secular) is wide open.' },
  { priority: 'high',   icon: '✨', title: 'Ritual + social dining intersection unclaimed',          body: 'Commercial players focus purely on meeting strangers. OneTable wraps the experience in intentionality — zero competitive pressure in this space.' },
  { priority: 'high',   icon: '🏢', title: 'B2B SaaS white-label platform underleveraged',          body: 'OneTable offers tech to other orgs — a unique capability. Synagogues, JCCs, Hillels, and secular orgs are untapped scale + revenue levers.' },
  { priority: 'medium', icon: '🎯', title: 'Matching transparency gap vs. competitors',             body: 'DayOfUs and Strangrs surface matching criteria openly. Adding a lightweight compatibility layer could close this without changing the host model.' },
  { priority: 'medium', icon: '📱', title: 'Mobile app experience lags Timeleft and DayOfUs',      body: 'Polished native apps drive retention loops. OneTable\'s mobile feels like a wrapped web experience. App redesign is a high-ROI investment.' },
  { priority: 'medium', icon: '🤝', title: 'Post-dinner friendship infrastructure weak everywhere', body: 'All 5 products drop off after the event. Continuity tools (re-invite flows, group boards) would directly improve OneTable\'s mission KPIs.' },
  { priority: 'low',    icon: '👥', title: '50ish / midlife segment entirely uncontested',          body: 'GetTogether has zero competitors in the 50+ space. Loyal, high-LTV cohort with real needs and no competitive pressure whatsoever.' },
]

export const TONE = [
  { company: 'OneTable', isMine: true,  vp: '"One dinner is just the beginning"',  aud: 'Jewish adults 21–39 (and 50ish). US/Canada. Partially or unaffiliated.',    formality: 40, tech: 15, tags: ['mission-driven','warm','inclusive','spiritual','community-first'] },
  { company: 'EatWith',  isMine: false, vp: '"Authentic local food experiences"',  aud: 'Gourmet travelers + food lovers. 130+ countries, hosts & chefs.',            formality: 45, tech: 25, tags: ['foodie','cultural','aspirational','travel-focused'] },
  { company: 'DayOfUs',  isMine: false, vp: '"Meet amazing strangers, every week"',aud: 'Millennials & Gen Z, North America + Asia. Anti-dating-app.',                formality: 20, tech: 35, tags: ['casual','youthful','tech-forward','anti-dating'] },
  { company: 'Strangrs', isMine: false, vp: '"Dine with 5 unique strangers"',      aud: 'Urban French speakers 26–45, expanding to English markets.',                 formality: 35, tech: 30, tags: ['real-life','European','romantic-adjacent','IRL-first'] },
  { company: 'Timeleft', isMine: false, vp: '"Turn strangers into friends"',       aud: 'Urban professionals 25–40, 52 countries. Post-covid lonely.',               formality: 30, tech: 20, tags: ['warm','optimistic','global','multi-format'] },
]

// ── Computed helpers ──
export const CATS = [...new Set(FEATURES.map(f => f.cat))]

export function catScore(prod, cat) {
  const fs = FEATURES.filter(f => f.cat === cat)
  return Math.round(fs.reduce((s, f) => s + (f.scores[prod] ?? 0), 0) / (fs.length * 5) * 100)
}

export function overallScore(prod) {
  return Math.round(
    FEATURES.reduce((s, f) => s + (f.scores[prod] ?? 0), 0) / (FEATURES.length * 5) * 100
  )
}

export function generateMarkdown() {
  let md = `# Competitive Analysis — Social Dining Apps\n_OneTable vs EatWith vs DayOfUs vs Strangrs vs Timeleft · May 2026_\n\n`
  md += `## Overall Scores\n\n| Product | Score | Rank |\n|---|---|---|\n`
  ;[...PRODUCTS]
    .map(p => ({ ...p, s: overallScore(p.label) }))
    .sort((a, b) => b.s - a.s)
    .forEach((p, i) => (md += `| ${p.label}${p.isMine ? ' *(yours)*' : ''} | ${p.s}/100 | #${i + 1} |\n`))
  md += `\n## Feature Matrix\n\n| Feature | ${PRODUCTS.map(p => p.label).join(' | ')} |\n|---|${PRODUCTS.map(() => '---').join('|')}|\n`
  FEATURES.forEach(f => (md += `| ${f.name} | ${PRODUCTS.map(p => `${f.scores[p.label] ?? 0}/5`).join(' | ')} |\n`))
  md += `\n## Gaps & Opportunities\n\n`
  GAPS.forEach(g => (md += `### [${g.priority.toUpperCase()}] ${g.title}\n${g.body}\n\n`))
  md += `## Pricing\n\n`
  PRICING.forEach(pd => {
    md += `### ${pd.company} — ${pd.model}\n`
    pd.plans.forEach(pl => (md += `- **${pl.name}**: ${pl.price} ${pl.period} — ${pl.note}\n`))
    md += '\n'
  })
  return md
}
