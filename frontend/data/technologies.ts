import { TechCategory } from '@/types';

export const technologiesData: TechCategory[] = [
  {
    title: 'FRONTEND',
    description: 'Blazingly fast, responsive, and unique client interfaces.',
    items: [
      { name: 'Next.js', description: 'React framework for server-rendered & static e-commerce storefronts', highlight: true },
      { name: 'React', description: 'Component-based state architecture & interactive admin dashboards', highlight: true },
      { name: 'TypeScript', description: 'Type-safe contracts for rock-solid reliability across platforms', highlight: true },
      { name: 'Tailwind CSS', description: 'Bespoke utility-first styling with zero CSS runtime overhead' }
    ]
  },
  {
    title: 'BACKEND',
    description: 'Resilient application servers, microservices, and API automation.',
    items: [
      { name: 'Django & Python', description: 'Battle-tested backends for high-scale e-commerce & wholesale operations', highlight: true },
      { name: 'Node.js & Express', description: 'High-speed event-driven backend microservices & admin APIs', highlight: true },
      { name: 'FastAPI', description: 'Asynchronous Python microservices for high-throughput API automation' },
      { name: 'REST & WebSockets', description: 'Real-time bidirectional event streaming and public endpoints' }
    ]
  },
  {
    title: 'DATA',
    description: 'ACID relational databases, flexible document stores, and memory caches.',
    items: [
      { name: 'PostgreSQL', description: 'Enterprise relational database with indexed search & JSONB flexibility', highlight: true },
      { name: 'MongoDB', description: 'High-throughput document storage for real-time logistics & return manifests', highlight: true },
      { name: 'Redis', description: 'In-memory caching layer, session storage, and fast pub/sub queues' }
    ]
  },
  {
    title: 'MOBILE',
    description: 'High-performance cross-platform mobile apps with native device fidelity.',
    items: [
      { name: 'React Native', description: 'Universal cross-platform iOS and Android apps with zero-crash stability', highlight: true },
      { name: 'Flutter', description: 'Pixel-perfect high-performance native compiled mobile applications' }
    ]
  },
  {
    title: 'SECURITY & CLOUD',
    description: 'Automated cybersecurity inspection, containerization, and 24/7 reliability.',
    items: [
      { name: 'API Automation', description: 'Domain risk analysis, threat inspection & webhook dispatch engines', highlight: true },
      { name: 'Docker', description: 'Immutable container packaging for local and multi-region cloud' },
      { name: 'Automated CI/CD', description: 'Zero-downtime deployments with health checks and monitoring' }
    ]
  }
];
