import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'abdul-fandom',
    number: '01',
    title: 'Abdul Fandom',
    client: 'Abdul Fandom Merchandising & Retail',
    category: 'Web Platforms',
    tagline: 'High-Throughput E-Commerce Platform for Global Merchandising',
    summary: 'A bespoke high-scale e-commerce website built using Next.js, Tailwind CSS, TypeScript, Django, and PostgreSQL, designed to handle heavy flash-sale traffic surges with instant search and rock-solid reliability.',
    challenge: 'The client needed an e-commerce platform capable of handling intense flash-sale traffic drops without checkout slowdowns, cart timeouts, or database locks under concurrent buyer spikes.',
    solution: 'Engineered a modern decoupled web architecture pairing an ultra-fast Next.js and Tailwind CSS frontend with a robust Django REST backend running on PostgreSQL, featuring real-time inventory tracking and optimized checkout flows.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Django', 'PostgreSQL'],
    metrics: [
      { value: '+45%', label: 'Checkout Conversion' },
      { value: '3.5x', label: 'Flash Sale Concurrency' },
      { value: '99.99%', label: 'Platform Availability' }
    ],
    deliverables: [
      'Next.js Headless E-Commerce Storefront',
      'Django & PostgreSQL High-Performance Backend',
      'Instant Product Search & Dynamic Catalog',
      'Tailwind CSS Bespoke Design System',
      'Automated Order & Inventory Synchronization'
    ],
    year: '2025',
    featured: true,
    image: '/projects/abdul-fandom.jpg',
    architectureHighlights: [
      'Edge SSR & Static Route Pre-rendering with Next.js',
      'Relational PostgreSQL schema with indexed search queries',
      'Decoupled Django REST API for checkout security'
    ],
    testimonial: {
      quote: 'Zylux built our complete e-commerce website with Next.js and Django ahead of schedule. Their attention to our specific requirements and proactive suggestions on checkout flow gave us our smoothest launch ever.',
      author: 'W.P.J. Charya',
      role: 'Lead Project Director, Abdul Fandom'
    }
  },
  {
    slug: 'chronosentinel',
    number: '02',
    title: 'ChronoSentinel',
    client: 'ChronoSentinel Cybersecurity Labs',
    category: 'Software Systems',
    tagline: 'Domain Risk Analyzer & Automated Threat Intelligence System',
    summary: 'A high-speed domain risk analyzer and API automation cybersecurity system built with React, FastAPI, Python, and PostgreSQL to inspect network threats, detect vulnerabilities, and automate mitigation.',
    challenge: 'Security analysts were overburdened by manual domain verification and fragmented threat APIs, creating unacceptable delays in detecting active phishing and DNS vulnerabilities.',
    solution: 'Constructed an automated cybersecurity platform combining high-concurrency FastAPI microservices with a responsive React dashboard, delivering real-time domain risk scoring and automated webhook dispatches.',
    technologies: ['React', 'FastAPI', 'API Automation', 'Cybersecurity', 'Python', 'PostgreSQL'],
    metrics: [
      { value: '< 200ms', label: 'Domain Analysis Latency' },
      { value: '100k+', label: 'Automated Daily Scans' },
      { value: '99.99%', label: 'API Uptime SLA' }
    ],
    deliverables: [
      'FastAPI Automated Domain Inspection Engine',
      'React Security Analyst Dashboard & Threat Matrix',
      'Real-Time Webhook Alerting & Incident Triage',
      'PostgreSQL Audit Logs & Risk Telemetry DB'
    ],
    year: '2025',
    featured: true,
    image: '/projects/chronosentinel.jpg',
    architectureHighlights: [
      'Asynchronous non-blocking FastAPI worker pipelines',
      'Real-time DNS & WHOIS telemetry aggregation',
      'Partitioned PostgreSQL risk history storage'
    ],
    testimonial: {
      quote: 'The domain risk analyzer and API automation system Zylux engineered with FastAPI and React operates with incredible precision. They took our security specifications and enhanced them with clean, modern automation.',
      author: 'W.P.J. Charya',
      role: 'Cybersecurity Systems Specialist'
    }
  },
  {
    slug: 'aussie-supplements',
    number: '03',
    title: 'Aussie Supplements',
    client: 'Aussie Supplements Distribution (Sri Lanka)',
    category: 'Web Platforms',
    tagline: 'High-Performance E-Commerce Web Platform for Supplement Distributors',
    summary: 'A fast, conversion-optimized e-commerce website engineered for a major Sri Lankan supplement distributor using Next.js, Tailwind CSS, TypeScript, Django, and PostgreSQL for seamless wholesale & retail ordering.',
    challenge: 'The distributor needed a modern web storefront that could handle extensive nutritional catalogs, high-volume bulk orders, dynamic tiered pricing, and fast mobile navigation without latency.',
    solution: 'Built a sleek, mobile-first e-commerce platform using Next.js, TypeScript, and Tailwind CSS on the frontend with a scalable Django and PostgreSQL backend, delivering sub-second page transitions and streamlined cart ordering.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Django', 'PostgreSQL'],
    metrics: [
      { value: '+42%', label: 'Distributor Re-orders' },
      { value: '1.2s', label: 'Average Page Load Time' },
      { value: '100%', label: 'Inventory Sync Accuracy' }
    ],
    deliverables: [
      'Next.js Headless Distributor Storefront',
      'Django Inventory & Tiered Wholesale Backend',
      'Fast Checkout & Payment Gateway Integration',
      'Automated Bulk Ordering & Invoicing System'
    ],
    year: '2024',
    featured: true,
    image: '/projects/aussie-supplements.png',
    architectureHighlights: [
      'Turbopack-optimized bundle for rapid mobile loading',
      'PostgreSQL optimized query caching for product filters',
      'Role-based pricing tiers for retail vs distributor buyers'
    ],
    testimonial: {
      quote: 'Zylux transformed our supplement distribution storefront. The Next.js and Django stack handles heavy bulk ordering effortlessly, and their team is always available 24/7 whenever we need new features.',
      author: 'Tharindu',
      role: 'Managing Director, Aussie Supplements (Sri Lanka)'
    }
  },
  {
    slug: 'sparkler',
    number: '04',
    title: 'Sparkler',
    client: 'Sparkler Gems & Jewellery',
    category: 'Web Platforms',
    tagline: 'Luxury E-Commerce Website for Fine Gems & Jewellery Merchant',
    summary: 'A bespoke luxury e-commerce web platform for gem and jewellery merchants, engineered with React, TypeScript, Tailwind CSS, Django, and PostgreSQL for showcasing rare gemstones with custom quote and checkout capabilities.',
    challenge: 'Communicating the authenticity, clarity, and certified luxury of rare gemstones online required exquisite visual fidelity, bespoke product filtering by gem cut/carat, and high-security transactional assurance.',
    solution: 'Designed an elegant, high-end React e-commerce experience styled with Tailwind CSS and backed by Django and PostgreSQL, featuring high-resolution gem showcases, bespoke certification displays, and custom VIP enquiry flows.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL'],
    metrics: [
      { value: '+75%', label: 'Client Engagement' },
      { value: '3.8x', label: 'High-Value Inquiries' },
      { value: '60fps', label: 'Fluid Gem Catalog Navigation' }
    ],
    deliverables: [
      'React & Tailwind Luxury E-Commerce Storefront',
      'Custom Gemstone Filter & Certification Viewer',
      'Django & PostgreSQL Secure Product Database',
      'Bespoke Private Consultation & Purchase Flow'
    ],
    year: '2024',
    featured: true,
    image: '/projects/sparkler.jpg',
    architectureHighlights: [
      'Smooth micro-interactions tailored for high-end luxury goods',
      'Structured metadata schema for certified gemstones',
      'Secure Django backend with audit logs for high-ticket quotes'
    ],
    testimonial: {
      quote: 'Building an e-commerce platform for high-value gems and jewellery required extreme precision and unique aesthetics. Zylux listened to every single requirement and suggested brilliant design solutions that elevated our brand.',
      author: 'Tharindu',
      role: 'Founder & Director, Sparkler Gems'
    }
  },
  {
    slug: 'return-buddies',
    number: '05',
    title: 'Return Buddies',
    client: 'Return Buddies LLC (New York, USA)',
    category: 'Software Systems',
    tagline: 'USA (NYC) Logistics Admin Dashboard & Mobile Application Optimization',
    summary: 'A New York-based logistics and returns management platform featuring an enterprise admin dashboard engineered with React, Node.js, Express.js, and MongoDB, alongside comprehensive React Native mobile app bug fixing and performance tuning.',
    challenge: 'The New York logistics team encountered real-time data sync delays on their admin portal and frequent UI freeze bugs on their customer-facing React Native mobile app during high-volume package return operations.',
    solution: 'Engineered a high-density React admin dashboard backed by a robust Node.js/Express.js and MongoDB pipeline for real-time returns tracking, and performed deep root-cause debugging on the React Native mobile app to resolve race conditions, memory leaks, and navigation crashes.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'React Native'],
    metrics: [
      { value: '0', label: 'Mobile App Crash Rate' },
      { value: '3.5x', label: 'Admin Dashboard Throughput' },
      { value: '100%', label: 'NYC Returns Tracked Live' }
    ],
    deliverables: [
      'React High-Density Logistics Admin Dashboard',
      'Node.js & Express.js Microservices Backend',
      'MongoDB Aggregation Pipeline for Real-Time Returns',
      'React Native Mobile App Bug Fixes & Stability Suite',
      'Live Dispatch & Package Status Telemetry'
    ],
    year: '2025',
    featured: true,
    image: '/projects/return-buddies.jpg',
    architectureHighlights: [
      'Real-time logistics status updates via WebSocket integration',
      'High-throughput MongoDB document schemas for package manifests',
      'Optimized React Native gesture handling and memory cleanup'
    ],
    testimonial: {
      quote: 'Working from New York with Zylux was seamless. Their 24/7 availability, rapid bug fixes on our React Native app, and high-performance React/Node dashboard exceeded our expectations. Truly a top-tier development partner.',
      author: 'John',
      role: 'Operations & Product Lead, Return Buddies (New York, USA)'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}
