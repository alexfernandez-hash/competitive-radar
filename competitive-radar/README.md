# Competitive Radar — OneTable

Google Material Design competitive analysis dashboard built with React + Vite.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
```

## Project structure

```
src/
├── data/
│   └── data.js          # All hardcoded competitive data + score helpers
├── components/
│   ├── TopBar.jsx        # Sticky top navigation bar
│   ├── NavTabs.jsx       # Google-style horizontal tab navigation
│   ├── ScoreCard.jsx     # Circular score ring card
│   ├── Overview.jsx      # Dashboard tab: score cards + charts + category bars
│   ├── FeatureMatrix.jsx # Feature matrix tab with dot scores
│   ├── Sections.jsx      # Pricing, Gaps, and Tone & Audience tabs
│   └── ExportBar.jsx     # Markdown export + Notion copy buttons
├── App.jsx               # Root component with tab routing
├── main.jsx              # React entry point
└── index.css             # Global styles + CSS variables
```

## Updating data

All competitive data lives in `src/data/data.js`. To update:

- **Add a product**: add to `PRODUCTS` array and `COLORS` / `LIGHT_COLORS` maps
- **Add a feature**: add to `FEATURES` array with scores for each product
- **Update scores**: edit the `scores` object in any feature row (0–5 scale)
- **Update pricing/gaps/tone**: edit the corresponding arrays

Scores are automatically computed into 0–100 overall and per-category percentages.
