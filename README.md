# design-agency

A responsive design agency landing page built with Next.js, Tailwind CSS, and TypeScript.

## Live Deployment

- Vercel: `https://design-agency-bhavyalekkala.vercel.app`

## Overview

This project is a modern marketing website for a design agency. It includes responsive sections for hero, services, portfolio, and contact, plus smooth scroll-based animation and clean visual styling.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- PostCSS
- Lucide React icons

## Features

- Responsive layout for desktop and mobile
- Animated scroll transitions
- Reusable component-based sections
- Static site optimized for deployment
- JSON-driven content settings for easy updates

## Setup Instructions

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ or any compatible package manager

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Project Structure

- `app/` — Next.js app router, layout, and pages
- `app/components/` — Hero, Services, Portfolio, Contact, and animation components
- `app/components/settings.json` — content settings used across the site
- `public/` — static assets and images
- `styles/` — global styling and Tailwind configuration

## Assumptions

- The project is intended as a static landing page without backend/API integration.
- It is designed for deployment on Vercel or any static hosting solution compatible with Next.js.
- The content is sample content for a creative agency and may be replaced as needed.

## Submission Details

- GitHub repository link: `https://github.com/bhavyalekkala/DESIGN-AGENCY`
- Live deployment link: `https://design-agency-bhavyalekkala.vercel.app`

## Notes

If your actual deployed Vercel URL differs, replace the live deployment link with the final URL after deployment.
