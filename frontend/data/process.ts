import { ProcessStep, MetricItem, AudienceCategory } from '@/types';

export const processStepsData: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Deep dive into business reality',
    description: 'We unpack your core problem, interview stakeholders, audit existing systems, and define non-negotiable success metrics before writing a single line of code.',
    deliverables: [
      'Problem definition document',
      'Technical feasibility analysis',
      'Target architecture roadmap'
    ]
  },
  {
    number: '02',
    title: 'DESIGN',
    tagline: 'Shape UX and technical blueprints',
    description: 'We craft high-fidelity wireframes, interactive user flows, database schemas, and API contracts so every stakeholder visualizes the final product upfront.',
    deliverables: [
      'Interactive Figma prototypes',
      'System entity-relationship schema',
      'API specification & security model'
    ]
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'High-velocity clean engineering',
    description: 'We write clean, modular, and type-safe code in two-week iterative sprints, maintaining continuous integration, code reviews, and visible progress demos.',
    deliverables: [
      'Production-tested codebase',
      'Automated test suites',
      'Staging demo environments'
    ]
  },
  {
    number: '04',
    title: 'DEPLOY',
    tagline: 'Launch, optimize and support',
    description: 'We orchestrate zero-downtime production deployment, configure live telemetry monitoring, optimize real-world performance, and provide dedicated support.',
    deliverables: [
      'Zero-downtime cloud release',
      'Production telemetry & alerts',
      'Developer handoff & SLA support'
    ]
  }
];

export const metricsData: MetricItem[] = [
  {
    number: '05+',
    title: 'DIGITAL PRODUCTS',
    description: 'End-to-end commercial software platforms engineered and deployed.'
  },
  {
    number: '04+',
    title: 'INDUSTRIES',
    description: 'Proven experience spanning E-Commerce, Risk Intelligence, Luxury, and SaaS.'
  },
  {
    number: '10+',
    title: 'TECHNOLOGIES',
    description: 'Core mastery of modern frontend, backend, database, and DevOps stacks.'
  },
  {
    number: '01',
    title: 'FULL-CYCLE TEAM',
    description: 'Dedicated pair of product thinkers, designers, and systems engineers.'
  }
];

export const audiencesData: AudienceCategory[] = [
  {
    id: 'startups',
    title: 'STARTUPS',
    tag: 'From 0 to 1 with velocity',
    description: 'Founders who need to translate an unproven concept into an investment-ready, production-grade MVP without cutting corners on architectural integrity.',
    fitFor: ['Seed to Series A startups', 'Founders launching new products', 'Rapid prototyping to market']
  },
  {
    id: 'smbs',
    title: 'SMALL & MEDIUM BUSINESSES',
    tag: 'Automating operational drag',
    description: 'Established businesses looking to replace inefficient spreadsheets, outdated tools, and manual processes with proprietary modern software.',
    fitFor: ['Growing commerce brands', 'Companies with fragmented data', 'Businesses needing bespoke workflows']
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE TEAMS',
    tag: 'High-throughput system extensions',
    description: 'Corporate engineering leaders who need an agile, high-caliber external product team to build dedicated portals, microservices, or client-facing apps.',
    fitFor: ['Legacy modernization', 'Dedicated API microservices', 'High-security internal tooling']
  },
  {
    id: 'product-owners',
    title: 'DIGITAL PRODUCT OWNERS',
    tag: 'Strategic technical execution',
    description: 'Product leaders seeking a collaborative engineering partner who understands business ROI, user conversion, and long-term maintainability.',
    fitFor: ['Venture-backed product leaders', 'Fractional CTO engagements', 'Continuous feature iteration']
  }
];
