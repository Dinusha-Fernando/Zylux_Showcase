export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  client: string;
  category: 'Web Platforms' | 'Software Systems' | 'Mobile Products' | 'Digital Experiences';
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: ProjectMetric[];
  deliverables: string[];
  year: string;
  featured: boolean;
  image?: string;
  architectureHighlights?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  techStack: string[];
}

export interface TechCategory {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface MetricItem {
  number: string;
  title: string;
  description: string;
}

export interface AudienceCategory {
  id: string;
  title: string;
  tag: string;
  description: string;
  fitFor: string[];
}
