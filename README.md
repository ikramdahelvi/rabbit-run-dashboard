# Rabbit Run Dashboard

Responsive enterprise dashboard UI built with React, Tailwind CSS, Material UI, and Recharts.

---

## Tech Stack

- React.js
- Tailwind CSS
- Material UI
- Recharts
- Lucide React
- Day.js
- Vite

---

## Features

- Responsive Header & Navbar
- Material UI Datepicker
- Rabbit Filter Dropdown
- Gradient Action Button
- Reusable Card Components
- Data Table
- Donut Chart
- Mobile / Tablet / Desktop Responsive Layout

---

## Performance Optimization

The dashboard is optimized for production performance using:

- React Lazy Loading
- React.memo
- Optimized Recharts Rendering
- Tailwind Utility Optimization
- Responsive Layout Performance
- Production Build Optimization (Vite)

### Lighthouse Score (Production Build)

| Metric | Score |
|---|---|
| Performance | 90 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 83 |


## Folder Structure

```bash
src
├── assets
│
├── components
│   ├── dashboard
│   │   ├── CalendarCard.jsx
│   │   ├── CardHeader.jsx
│   │   ├── DataTable.jsx
│   │   ├── DonutChart.jsx
│   │   └── FilterPanel.jsx
│   │
│   ├── layout
│   │   ├── FilterSection.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   │
│   └── ui
│       ├── Button.jsx
│       └── Card.jsx
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

```bash
npm install
npm run dev
```

---

## Required Packages

```bash
npm install @mui/material
npm install @mui/icons-material
npm install @mui/x-date-pickers
npm install @emotion/react
npm install @emotion/styled
npm install lucide-react
npm install recharts
npm install dayjs
```

---

## Accessibility

Basic accessibility improvements included:

- Semantic Navbar
- Accessible Buttons
- Keyboard Friendly Dropdowns
- Focus States
- Proper Image Alt Text
- Accessible Table Structure
- Responsive Layout

---

## Responsive Support

| Device | Layout |
|---|---|
| Mobile | Mobile Header |
| Tablet | Mobile Header |
| Desktop | Desktop Header |

---

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

---

## Author

Ikramullah Dehlvi  
Associate UI Development Lead