# Week 5 – InsightBoard Mini Web Application

## Overview
InsightBoard is a responsive, interactive dashboard built with semantic HTML, CSS, vanilla JavaScript and a static JSON data source.

## Features
- JSON-driven dashboard metrics.
- Dynamic monthly revenue bar chart.
- Revenue-by-category visual panel.
- Search, category filtering and status filtering.
- Sortable data table with accessible table headers.
- Responsive desktop/tablet/mobile layout.
- Mobile navigation with ARIA expanded state.
- Skip link and visible keyboard focus.
- Live status announcements using `role="status"` / `aria-live`.
- `prefers-reduced-motion` support.
- Defensive fetch error handling.
- No external framework or runtime dependency.
- Deferred JavaScript and minified production assets.
- Preloaded stylesheet and local data/assets.

## Run
Because `fetch()` is used for the JSON file, serve the `src` folder through a local web server rather than opening `index.html` directly from `file://`.

Example:
`python -m http.server 8000 --directory src`

Then open:
`http://localhost:8000`

## Testing
- Responsive viewport testing at desktop, tablet and mobile widths.
- Keyboard navigation through menu, filters and table sort controls.
- Screen-reader-oriented semantic landmarks and labels.
- JavaScript console/error check.
- JSON fetch and error fallback.
- Reduced-motion media preference.
- Lighthouse/PageSpeed review recommended on a deployed URL.
