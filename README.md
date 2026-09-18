# 🌐 Zylux Showcase — Portfolio & Agency Website

> **Zylux** is a Sri Lankan digital solutions company delivering world-class web apps, mobile experiences, and brand identities to clients globally.

---

## ✨ Overview

This repository contains the full source code for the **Zylux official showcase website** — a high-performance, visually stunning portfolio built with Next.js 14 (App Router). The site showcases Zylux's services, case studies, team, and philosophy with a premium design aesthetic featuring glassmorphism, micro-animations, and a fully responsive mobile-first layout.

---

## 🚀 Live Features

- **Hero Section** — Animated living interface with real-time telemetry display
- **What We Build** — Interactive service capability cards with hover effects
- **Selected Work** — Full case study pages with mockup stages, metrics, and transformation breakdowns
- **About Page** — Leadership profiles, dual-engine model, philosophy, and global principles
- **Services Page** — Tabbed service browser with capability canvas preview
- **Contact Page** — Fully functional contact form with WhatsApp integration
- **Creative Mobile Menu** — Glassmorphic drawer with live Colombo clock, nav cards, and quick-access project shortcuts
- **Dark/Light Mode** — System-aware theme toggle
- **Smooth Animations** — Framer Motion powered page transitions and scroll-triggered reveals

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Google Fonts (Outfit, Inter) |
| Deployment | Vercel (recommended) |

---

## 📁 Project Structure

```
Zylux Simple/
└── frontend/
    ├── app/                     # Next.js App Router pages
    │   ├── page.tsx             # Home page
    │   ├── about/page.tsx       # About page
    │   ├── services/page.tsx    # Services page
    │   ├── work/page.tsx        # Portfolio / Work page
    │   ├── work/[slug]/page.tsx # Individual case study pages
    │   └── contact/page.tsx     # Contact page
    ├── components/              # Reusable React components
    │   ├── hero/                # Hero section components
    │   ├── navbar/              # Navigation & mobile menu
    │   ├── services/            # Service cards & canvas
    │   ├── work/                # Project cards & case study sections
    │   ├── about/               # About page sections
    │   ├── cta/                 # Call-to-action components
    │   ├── footer/              # Footer component
    │   ├── metrics/             # Proof/stats band
    │   ├── reviews/             # Client reviews carousel
    │   ├── tech/                # Tech ecosystem & architecture diagram
    │   ├── theme/               # Theme provider & toggle
    │   └── ui/                  # Shared UI primitives
    ├── data/                    # Static data files
    │   ├── projects.ts          # All case study project data
    │   ├── services.ts          # Services & capabilities data
    │   ├── technologies.ts      # Tech stack display data
    │   └── process.ts           # How we work / process steps
    ├── public/
    │   ├── assets/              # Logos, hero images, team photos
    │   └── projects/            # Project thumbnail images
    └── types/                   # Shared TypeScript interfaces
```

---

## 🖥️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Dinusha-Fernando/Zylux_Showcase.git
cd Zylux_Showcase/frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📸 Case Studies Featured

| Project | Industry | Description |
|---------|----------|-------------|
| **Abdul Fandom** | Sports & Entertainment | Fan engagement platform for cricket superstar Abdul Matheen |
| **Aussie Supplements** | Health & Wellness E-commerce | Premium supplement store with smart filtering & loyalty system |
| **Sparkler** | Jewellery E-commerce | Luxury gem & jewellery online shopping experience |
| **ChronoSentinel** | SaaS / Monitoring | Real-time uptime monitoring & alerting platform |
| **Return Buddies** | Logistics / Travel | Peer-to-peer international courier & package delivery app |

---

## 🎨 Design Highlights

- **Glassmorphism** — Frosted glass cards and overlays throughout
- **Micro-animations** — Staggered reveals, hover lifts, and scroll-triggered entrances
- **Mobile-first** — Fully responsive from 320px to 4K displays
- **44px touch targets** — All interactive elements meet accessibility standards
- **Creative Mobile Menu** — Full-screen animated drawer with live studio clock and project shortcuts

---

## 📞 Contact & Links

- 🌐 **Website**: zylux.lk (coming soon)
- 📧 **Email**: hello@zylux.lk
- 💬 **WhatsApp**: Available via website contact button

---

## 📄 License

© 2024 Zylux. All rights reserved. This codebase is proprietary and is not open for redistribution or reuse without explicit written permission from Zylux.

---

Built with love in Sri Lanka 🇱🇰 — Delivering world-class digital experiences.
