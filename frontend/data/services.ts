import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-platforms',
    number: '01',
    title: 'Web Development & Platforms',
    tag: 'Websites, Dashboards & eCommerce',
    summary: 'Custom websites, web platforms, and eCommerce systems built with latest technologies and unique designs tailored precisely to your requirements.',
    description: 'At Zylux Software Solutions, we build high-performance web applications using modern React, Next.js, and cutting-edge tech stacks. We bring unique, bespoke designs to life that align directly with what clients envision, reinforced by our architectural suggestions for speed, SEO, and longevity.',
    capabilities: [
      'Custom Corporate & Brand Web Platforms',
      'High-Throughput eCommerce & Online Stores',
      'Data-Dense Operational Dashboards & Portals',
      'Responsive, Modern & Interactive Web Interfaces',
      'Unique Custom Designs Aligned with Client Wishes'
    ],
    deliverables: [
      'Production-Ready Next.js / React Web Application',
      'Responsive Mobile, Tablet & Desktop Optimized Layouts',
      'Custom Unique Design System & Component Library',
      'SEO & OpenGraph Meta-Tag Architecture',
      'Automated CI/CD Pipeline & High-Performance Hosting'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel']
  },
  {
    id: 'software-systems',
    number: '02',
    title: 'Custom Software Development',
    tag: 'Bespoke Software, APIs & Automation',
    summary: 'Dedicated business applications, secure REST/GraphQL APIs, workflow automation, and distributed software systems engineered to solve core operational needs.',
    description: 'We build custom software systems engineered around your exact business processes. By combining your specific operational requirements with our strategic architectural guidance, we deliver software backends, microservices, and management tools that are secure, maintainable, and built on the latest technologies.',
    capabilities: [
      'Bespoke Business Management Software',
      'Secure High-Concurrency REST & GraphQL APIs',
      'Automated Data Workflows & Process Automation',
      'Database Architecture & Multi-Tenant Systems',
      'Third-Party API & Payment Gateway Integrations'
    ],
    deliverables: [
      'Containerized Backend Architecture (Python / Node.js)',
      'Documented OpenAPI / Swagger API Specifications',
      'Optimized Relational & Document Database Schemas',
      'Role-Based Access Control (RBAC) & Secure Auth',
      'Automated Background Worker & Queue Infrastructure'
    ],
    techStack: ['Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: 'mobile-products',
    number: '03',
    title: 'Mobile App Development',
    tag: 'iOS & Android Native & Cross-Platform',
    summary: 'Cross-platform mobile apps engineered with Flutter and React Native, delivering 60fps fluidity, offline capabilities, and native device performance.',
    description: 'We turn mobile concepts into practical, reliable iOS and Android apps. From client-driven feature sets to native biometric integrations and smooth gesture animations, our mobile builds ensure your users receive an intuitive, fluid experience.',
    capabilities: [
      'Cross-Platform iOS & Android Mobile Apps',
      'Offline-First Local Storage & Sync Engines',
      'Real-Time In-App Messaging & Push Notifications',
      'Device Sensor, Camera & Biometric Integrations',
      'App Store & Google Play Store Submission Management'
    ],
    deliverables: [
      'Compiled Native iOS & Android Production Binaries',
      'Figma Interaction Prototype & Mobile Design System',
      'Secure Authentication Flows (OAuth, Biometric, JWT)',
      'Crash Analytics & Event Telemetry Integration',
      'App Store Optimization (ASO) Guidance'
    ],
    techStack: ['Flutter', 'React Native', 'TypeScript', 'Dart', 'Firebase', 'SQLite']
  },
  {
    id: 'graphic-design',
    number: '04',
    title: 'Graphic Design & Brand Identity',
    tag: 'Unique Visuals, Logos & Creative Assets',
    summary: 'Unique graphic design, brand identities, custom logos, marketing collateral, and UI/UX designs crafted to match client vision and brand personality.',
    description: 'A great product needs distinctive visual impact. Our graphic design team crafts unique brand visual identities, marketing collateral, social media banners, and UI/UX designs. We listen carefully to what you want to communicate and provide creative suggestions that elevate your brand.',
    capabilities: [
      'Unique Logo Design & Brand Identity Systems',
      'Marketing Graphics, Posters & Social Media Creatives',
      'Custom UI/UX Wireframing & Figma Prototypes',
      'Brand Style Guides & Visual Pattern Libraries',
      'Custom Vector Illustrations & Digital Assets'
    ],
    deliverables: [
      'Vector Logo Suite & High-Resolution Brand Assets',
      'Social Media Graphic Templates & Creative Kits',
      'Complete Brand Style Guide (Color, Typography, Voice)',
      'Interactive Figma UI/UX Design System',
      'Print & Digital Ready Creative Deliverables'
    ],
    techStack: ['Figma', 'Adobe Creative Suite', 'Illustrator', 'Photoshop', 'Tailwind CSS']
  },
  {
    id: 'digital-marketing-seo',
    number: '05',
    title: 'Social Media Management & SEO',
    tag: 'Digital Marketing, Search & Audience Growth',
    summary: 'Data-driven digital marketing, active social media management, and search engine optimization (SEO) to build brand presence and drive real conversion.',
    description: 'Building great software is only half the battle; getting it in front of the right audience is what scales it. Zylux provides end-to-end digital marketing solutions, including ongoing social media management, organic SEO optimization, and audience engagement strategies tailored to your market.',
    capabilities: [
      'Social Media Management (Facebook, LinkedIn, Instagram)',
      'Comprehensive Search Engine Optimization (SEO)',
      'Content Planning, Graphic Creation & Scheduling',
      'Target Audience Research & Growth Strategies',
      'Analytics, Conversion Tracking & Performance Audits'
    ],
    deliverables: [
      'Monthly Social Media Content Calendar & Creatives',
      'Full On-Page & Technical SEO Audit and Optimization',
      'Target Keyword Strategy & Content Recommendations',
      'Monthly Growth, Reach & Conversion Analytics Reports',
      'Brand Social Profile Setup & Optimization'
    ],
    techStack: ['Google Search Console', 'Google Analytics 4', 'Meta Business Suite', 'SEO Auditing Tools']
  }
];
