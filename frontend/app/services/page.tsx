'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/data/services';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers, 
  Code2, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  MessageSquare, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Cpu, 
  Check 
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  'web-platforms': Code2,
  'software-systems': Cpu,
  'mobile-products': Smartphone,
  'graphic-design': Palette,
  'digital-marketing-seo': TrendingUp
};

const serviceRelatedProjects: Record<string, { title: string; slug: string; tech: string }[]> = {
  'web-platforms': [
    { title: 'Abdul Fandom', slug: 'abdul-fandom', tech: 'Next.js + Django' },
    { title: 'Aussie Supplements', slug: 'aussie-supplements', tech: 'Next.js + Tailwind' },
    { title: 'Sparkler Gems', slug: 'sparkler', tech: 'React + TypeScript' }
  ],
  'software-systems': [
    { title: 'ChronoSentinel', slug: 'chronosentinel', tech: 'FastAPI + Python' },
    { title: 'Return Buddies NYC', slug: 'return-buddies', tech: 'React + Node + Mongo' }
  ],
  'mobile-products': [
    { title: 'Return Buddies Mobile', slug: 'return-buddies', tech: 'React Native Optimization' }
  ],
  'graphic-design': [
    { title: 'Sparkler Brand Design', slug: 'sparkler', tech: 'Luxury UI/UX & Identity' },
    { title: 'Zylux 3D Identity', slug: 'abdul-fandom', tech: 'Bespoke Branding' }
  ],
  'digital-marketing-seo': [
    { title: 'Aussie Supplements SEO', slug: 'aussie-supplements', tech: 'E-Commerce Organic Growth' },
    { title: 'Abdul Fandom Social', slug: 'abdul-fandom', tech: 'Audience Acquisition' }
  ]
};

const engagementModels = [
  {
    title: 'Full-Cycle Product Build',
    tag: 'From 0 to 1 Delivery',
    timeframe: '4 – 12 Weeks',
    badge: 'TURNKEY LAUNCH',
    description: 'Turn an initial idea or requirement specification into a production-ready web, mobile, or software platform with fixed milestones and guaranteed deliverables.',
    features: [
      'Interactive Figma prototypes & unique design systems',
      'High-performance frontend & backend engineering',
      'Automated CI/CD pipelines & production cloud setup',
      'Comprehensive QA, security audits, and post-launch warranty'
    ]
  },
  {
    title: 'Dedicated Engineering Pod',
    tag: 'Agile Team Extension',
    timeframe: 'Monthly Sprint Cycles',
    badge: 'FLEXIBLE SCALE',
    description: 'Embed senior full-stack product engineers, frontend specialists, and architects directly into your ongoing development cycles to accelerate velocity.',
    features: [
      'Dedicated senior full-stack engineers & architects',
      'Direct integration with your Slack, GitHub & sprint boards',
      'Bi-weekly release cadences with interactive staging demos',
      'Seamless scaling as product requirements evolve'
    ]
  },
  {
    title: 'Architecture & System Revamp',
    tag: 'Performance Modernization',
    timeframe: '2 – 6 Weeks',
    badge: 'OPTIMIZATION & RESCUE',
    description: 'Refactor fragile legacy platforms, decouple monolithic bottlenecks, eliminate memory leaks, resolve performance slowdowns, and fix complex mobile/web bugs.',
    features: [
      'Deep root-cause code, database & latency profiling',
      'Migration to modern Next.js / FastAPI / React Native',
      'Sub-second database indexing & caching architecture',
      'Zero-downtime database migration and stabilization'
    ]
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>('web-platforms');
  const [viewMode, setViewMode] = useState<'interactive' | 'all'>('interactive');

  const selectedService = servicesData.find((s) => s.id === activeTab) || servicesData[0];
  const IconComponent = serviceIcons[selectedService.id] || Code2;
  const relatedProjects = serviceRelatedProjects[selectedService.id] || [];

  return (
    <div className="py-8 md:py-14 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(240,42,143,0.12),rgba(255,102,87,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f0e13] mb-4 leading-tight">
            End-to-End Digital Solutions <br />
            <span className="zylux-gradient-text">Crafted for Explosive Business Growth</span>
          </h1>
          <p className="text-sm sm:text-base text-[#4a4552] leading-relaxed max-w-2xl mx-auto">
            At Zylux Software Solutions, your requirements are our highest priority. We pair your exact vision with our expert architectural and creative suggestions to deliver high-performance software, mobile apps, bespoke designs, and data-driven marketing.
          </p>

          {/* Quick Pillars Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-black/[0.08]">
            {[
              { num: '01 • REQUIREMENT', text: 'Client Priority First', color: 'text-[#f02a8f]' },
              { num: '02 • ARCHITECTURE', text: 'Latest Modern Tech', color: 'text-[#ff6657]' },
              { num: '03 • DESIGN & SEO', text: 'Unique Visuals & Growth', color: 'text-[#f02a8f]' },
              { num: '04 • SUPPORT', text: '24/7 Live Operations', color: 'text-emerald-700' }
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-3 rounded-xl bg-white/80 border border-black/[0.08] text-center shadow-xs backdrop-blur-sm hover:border-[#f02a8f]/30 transition-all cursor-default"
              >
                <span className={`text-xs font-mono font-bold block ${p.color}`}>{p.num}</span>
                <span className="text-[11px] text-[#0f0e13] font-semibold mt-0.5 block">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-black/[0.08]">
          <div className="text-xs font-mono text-[#736e7a] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#f02a8f]" />
            <span>EXPLORE OUR 5 CORE VERTICALS</span>
          </div>

          <div className="inline-flex rounded-xl p-1 bg-white/80 border border-black/10 text-xs font-mono shadow-xs">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'interactive'
                  ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                  : 'text-[#524d5b] hover:text-[#0f0e13]'
              }`}
            >
              Interactive Canvas
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`px-3 py-1 rounded-lg transition-all ${
                viewMode === 'all'
                  ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                  : 'text-[#524d5b] hover:text-[#0f0e13]'
              }`}
            >
              View All 5
            </button>
          </div>
        </div>

        {/* View Mode: Interactive Tabbed Explorer */}
        {viewMode === 'interactive' && (
          <div className="space-y-6">
            {/* Horizontal Tabs with Icon Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5">
              {servicesData.map((service, index) => {
                const Icon = serviceIcons[service.id] || Code2;
                const isActive = activeTab === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`p-3 rounded-2xl text-left transition-all relative overflow-hidden flex flex-col justify-between min-h-[44px] ${
                      index === 4 ? 'col-span-2 sm:col-span-1' : ''
                    } ${
                      isActive
                        ? 'bg-white/95 border-2 border-[#f02a8f] shadow-[0_8px_25px_rgba(240,42,143,0.18)]'
                        : 'bg-white/80 border border-black/[0.08] hover:border-black/20 hover:bg-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white shadow-xs' : 'bg-black/[0.04] text-[#524d5b]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#736e7a]">
                        #{service.number}
                      </span>
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold leading-tight ${
                        isActive ? 'text-[#0f0e13]' : 'text-[#524d5b]'
                      }`}>
                        {service.title}
                      </h4>
                      <span className="text-[10px] font-mono text-[#f02a8f] block truncate mt-1 font-semibold">
                        {service.tag}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Service Showcase Canvas */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white/85 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                {/* Left Side: Overview & Capabilities */}
                <div className="lg:w-3/5 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-[#f02a8f] to-[#ff6657] flex items-center justify-center text-white shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#f02a8f] font-semibold block">
                        VERTICAL {selectedService.number} • {selectedService.tag}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f0e13] tracking-tight">
                        {selectedService.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4a4552] leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#f02a8f] font-semibold mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#f02a8f]" />
                      <span>Specific Engineering Capabilities</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedService.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded-xl bg-white/80 border border-black/[0.06] shadow-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] mt-0.5 shrink-0" />
                          <span className="text-xs text-[#2c2834] leading-tight font-medium">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Matrix */}
                  <div className="pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#0f0e13] font-semibold mb-3 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Standard Production Deliverables</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#524d5b]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Tech Ecosystem & Production Proof */}
                <div className="lg:w-2/5 w-full space-y-4">
                  {/* Tech Ecosystem Card */}
                  <div className="p-5 rounded-2xl bg-white/80 border border-black/[0.08] shadow-xs">
                    <span className="text-[11px] font-mono text-[#736e7a] uppercase tracking-wider block mb-2.5 font-bold">
                      TECH ECOSYSTEM & TOOLS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedService.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-black/[0.08] text-[#0f0e13] font-semibold shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Proven In Production */}
                  {relatedProjects.length > 0 && (
                    <div className="p-5 rounded-2xl bg-white/80 border border-black/[0.08] shadow-xs">
                      <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider block mb-2.5 font-bold">
                        PROVEN IN PRODUCTION • SHIPPED WORK
                      </span>
                      <div className="space-y-2">
                        {relatedProjects.map((proj, idx) => (
                          <Link
                            key={idx}
                            href={`/work/${proj.slug}`}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 hover:bg-white border border-black/[0.06] hover:border-[#f02a8f]/40 transition-all group shadow-2xs"
                          >
                            <div>
                              <h4 className="text-xs font-bold text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">
                                {proj.title}
                              </h4>
                              <p className="text-[10px] font-mono text-[#736e7a]">{proj.tech}</p>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#736e7a] group-hover:text-[#f02a8f] transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Action Button */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#f02a8f]/05 via-white/80 to-[#ff6657]/05 border border-[#f02a8f]/30 space-y-3 shadow-xs">
                    <h4 className="text-xs font-bold text-[#0f0e13] uppercase tracking-wider font-mono">
                      Need {selectedService.title}?
                    </h4>
                    <p className="text-xs text-[#524d5b]">
                      Consult directly with our engineering and design leads on your exact product scope.
                    </p>
                    <div className="flex flex-col gap-2 pt-1">
                      <Button href="/contact" size="sm" variant="primary" className="w-full justify-center text-xs">
                        <span>Scope This Service</span>
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                      <a
                        href={`https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-semibold hover:bg-emerald-500/25 transition-all text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode: All 5 Verticals List */}
        {viewMode === 'all' && (
          <div className="space-y-6">
            {servicesData.map((service) => {
              const Icon = serviceIcons[service.id] || Code2;
              const related = serviceRelatedProjects[service.id] || [];
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="p-6 sm:p-8 rounded-3xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/40 transition-all scroll-mt-24 shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-black/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#f02a8f] to-[#ff6657] flex items-center justify-center text-white shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#f02a8f] uppercase tracking-wider block font-semibold">
                          VERTICAL {service.number} • {service.tag}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-[#0f0e13] tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button href="/contact" size="sm" variant="outline" className="text-xs">
                        Scope Service
                      </Button>
                      <a
                        href={`https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20want%20to%20discuss%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/25 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4a4552] leading-relaxed my-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#f02a8f] font-bold mb-2.5">
                        Specific Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {service.capabilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#2c2834]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#0f0e13] font-bold mb-2.5">
                        Production Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#524d5b]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[#736e7a] mr-1">TECH STACK:</span>
                      {service.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-black/[0.08] text-[#2c2834]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {related.length > 0 && (
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-[#736e7a]">Proven in:</span>
                        {related.map((r, idx) => (
                          <Link
                            key={idx}
                            href={`/work/${r.slug}`}
                            className="text-[#f02a8f] hover:underline inline-flex items-center gap-0.5 font-bold"
                          >
                            <span>{r.title}</span>
                            <ArrowUpRight className="w-2.5 h-2.5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* The "Client Priority + Zylux Suggestions" Synergy Diagram */}
        <div className="mt-16 pt-10 border-t border-black/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block mb-1">
              THE FORMULA FOR PRODUCT SUCCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0e13] tracking-tight">
              How Your Vision Meets Our Expertise
            </h2>
            <p className="text-xs sm:text-sm text-[#524d5b] mt-1">
              We never impose rigid templates. We start from your business objectives and elevate them with cutting-edge engineering and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1: Your Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0, duration: 0.45 }}
              className="p-6 rounded-2xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl relative overflow-hidden group cursor-default"
            >
              <span className="text-xs font-mono text-[#f02a8f] font-bold block mb-2 group-hover:translate-x-0.5 transition-transform">
                STAGE 01 • YOUR REQUIREMENTS
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] mb-2 group-hover:text-[#f02a8f] transition-colors">
                Client Priority &amp; Vision
              </h3>
              <p className="text-xs text-[#524d5b] leading-relaxed mb-4">
                You bring your domain expertise, business roadmap, feature priorities, and desired user journey. Your requirements remain the project&apos;s true north.
              </p>
              <ul className="space-y-1.5 text-xs text-[#2c2834]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] shrink-0" />
                  <span>You define what success looks like</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] shrink-0" />
                  <span>100% focused on your business model</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 2: Expert Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="p-6 rounded-2xl bg-white/85 border-2 border-[#f02a8f]/30 hover:border-[#f02a8f]/60 hover:shadow-[0_18px_40px_rgba(240,42,143,0.16)] transition-all shadow-[0_8px_30px_rgba(240,42,143,0.08)] backdrop-blur-xl relative overflow-hidden group cursor-default"
            >
              <span className="text-xs font-mono text-[#ff6657] font-bold block mb-2 group-hover:translate-x-0.5 transition-transform">
                STAGE 02 • EXPERT SUGGESTIONS
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] mb-2 group-hover:text-[#ff6657] transition-colors">
                Technical &amp; Creative Lift
              </h3>
              <p className="text-xs text-[#524d5b] leading-relaxed mb-4">
                Our engineers and designers recommend the latest battle-tested technologies, unique UI styling, optimized database schemas, and growth SEO strategies.
              </p>
              <ul className="space-y-1.5 text-xs text-[#2c2834]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6657] shrink-0" />
                  <span>Latest modern tech stack selection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6657] shrink-0" />
                  <span>Unique high-converting design systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] shrink-0" />
                  <span>Zero-debt maintainable code</span>
                </li>
              </ul>
            </motion.div>

            {/* Step 3: Shipped Platform */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="p-6 rounded-2xl bg-white/85 border border-white/80 hover:border-emerald-500/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] transition-all shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl relative overflow-hidden group cursor-default"
            >
              <span className="text-xs font-mono text-emerald-700 font-bold block mb-2 group-hover:translate-x-0.5 transition-transform">
                STAGE 03 • THE RESULT
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] mb-2 group-hover:text-emerald-700 transition-colors">
                Market-Dominating Software
              </h3>
              <p className="text-xs text-[#524d5b] leading-relaxed mb-4">
                The product launches on schedule, handles high traffic without breaking, drives measurable conversions, and can be easily maintained or extended for years to come.
              </p>
              <ul className="space-y-1.5 text-xs text-[#2c2834]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Launch SLA adherence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>24/7 post-launch warranty &amp; support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Engagement Models Section */}
        <div className="mt-16 pt-10 border-t border-black/[0.08]">
          <SectionHeading
            badge="ENGAGEMENT MODELS"
            title="How We Partner With You"
            description="Whether you need a full turnkey product build, dedicated engineering firepower, or architectural modernization."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {engagementModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="p-6 rounded-2xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] text-[#ff6657] border border-black/10 font-bold">
                      {model.badge}
                    </span>
                    <span className="text-xs font-mono text-[#736e7a]">{model.timeframe}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] mb-2 group-hover:text-[#f02a8f] transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-xs text-[#524d5b] leading-relaxed mb-4 font-normal">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06] space-y-2">
                  {model.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#2c2834]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#f02a8f] mt-0.5 shrink-0" />
                      <span className="text-[11px] leading-tight">{f}</span>
                    </div>
                  ))}

                  <div className="pt-3">
                    <Button href="/contact" size="sm" variant="secondary" className="w-full justify-center text-xs">
                      Choose {model.title.split(' ')[0]}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Callout & WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/85 border border-white/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block mb-1">
              TECHNICAL SCOPING • COLOMBO HQ &amp; WORLDWIDE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f0e13]">
              Have a custom project requirement in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#524d5b] mt-1 max-w-lg">
              Talk directly with our lead architects. We evaluate your requirements and send a clear technical proposal within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button href="/contact" size="md" variant="primary">
                <span>Scope Your Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20scope%20a%20new%20project%20with%20your%20team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-semibold hover:bg-emerald-500/25 transition-all"
                title="Chat with Zylux on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
