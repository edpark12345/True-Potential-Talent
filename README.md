# True Potential Talent

Marketing website for **True Potential Training** — leadership coaching and practical
workplace training for women and teams, founded by Lynne Robson.

## Overview

The site is a single self-contained static page. All HTML, CSS, and JavaScript live in
[`index.html`](index.html) — there is no build step and there are no external
dependencies beyond Google Fonts and a few hosted images.

## Tech

- Hand-written semantic HTML5
- CSS custom properties (design tokens) with a forest/gold/cream palette
- Vanilla JavaScript (sticky header, mobile nav, dropdown menus, FAQ accordion,
  scroll fade-in animations)
- Accessibility built in: skip link, ARIA attributes, visible keyboard focus rings,
  AA-contrast colours

## Running locally

No tooling required — open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Status

The homepage is complete. The header navigation links to additional pages
(`about.html`, `8-week-course.html`, `contact.html`, individual training pages, etc.)
that are not yet built.
