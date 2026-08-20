# Prince Jasani — Portfolio Website

Personal developer portfolio showcasing my work, skills, and experience as a Full-Stack Developer.

**Live:** [princejasani.dev](https://princejasani.dev)

## Features

- Hero section with animated portrait composition
- About section with expertise categories
- Experience timeline
- Project case studies with technical details
- Skills / Tech stack grid
- Services offered
- Education & Certifications
- Contact form (Web3Forms integration)
- Dark / Light theme toggle
- Fully responsive design (320px → 2560px+)
- SEO meta tags & Open Graph
- Smooth scroll reveal animations
- Accessible (skip links, ARIA, focus management)

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Form Service:** Web3Forms
- **Fonts:** Inter, JetBrains Mono, Playfair Display (Google Fonts)
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/PrinceJasani15/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example env file and add your Web3Forms key:

```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com) |

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Build

```bash
npm run preview
```

## Deployment

This project is configured for one-click deployment on [Vercel](https://vercel.com):

1. Import the GitHub repository on Vercel
2. Framework preset is auto-detected as **Vite**
3. Add `VITE_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables
4. Deploy

No additional configuration or `vercel.json` is required.

## Project Structure

```
├── public/             # Static assets (favicon, images, resume, sitemap)
├── src/
│   ├── components/     # React components (About, Contact, Hero, etc.)
│   ├── data/           # Content data (content.js)
│   ├── hooks/          # Custom hooks (useTheme, useScrollReveal)
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & design system
├── index.html          # HTML template with SEO meta
├── vite.config.js      # Vite configuration
└── package.json
```

## Author

**Prince Jasani**
- GitHub: [@PrinceJasani15](https://github.com/PrinceJasani15)
- Email: princejasani15@gmail.com
- Location: Surat, India
