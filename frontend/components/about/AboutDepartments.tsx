'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  TrendingUp, 
  CheckCircle2, 
  Cpu, 
  Smartphone, 
  Search, 
  Palette, 
  Share2, 
  Zap, 
  ArrowUpRight,
  Globe2,
  Megaphone
} from 'lucide-react';
import Link from 'next/link';

export const AboutDepartments: React.FC = () => {

  return (
    <section className="my-14 sm:my-20 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight leading-tight">
          Two Specialized Departments. <br />
          <span className="zylux-gradient-text">One Unified Digital Powerhouse.</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed max-w-2xl mx-auto">
          We eliminated the traditional divide between builders and marketers. At Zylux, our software engineers build platforms designed to convert, and our marketing specialists drive traffic to systems that never fail.
        </p>
      </div>

      {/* The Two Main Department Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* ====================================================================
            DEPARTMENT 01: SOFTWARE, WEB & MOBILE DEVELOPMENT
            ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5 }}
          className="group relative p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border-2 border-[#f02a8f]/30 dark:border-[#f02a8f]/40 shadow-[0_15px_40px_rgba(240,42,143,0.08)] hover:shadow-[0_20px_50px_rgba(240,42,143,0.16)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-shadow"
        >
          {/* Ambient Top Glow Bar */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657]"
          />

          <div>
            {/* Header Badge & Department Number */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#f02a8f]/10 border border-[#f02a8f]/25 text-[#f02a8f]">
                DEPARTMENT 01 • DEV ENGINE
              </span>
              <motion.div 
                whileHover={{ scale: 1.12, rotate: 6 }}
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#f02a8f] to-[#ff4777] flex items-center justify-center shadow-md cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                <Code2 className="w-5 h-5 text-white" style={{ color: '#ffffff' }} />
              </motion.div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight mb-2 group-hover:text-[#f02a8f] transition-colors">
              Engineering &amp; Product Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed mb-6">
              Full-lifecycle design, engineering, and deployment of mission-critical web platforms, custom enterprise software, and mobile applications built for high concurrency and zero downtime.
            </p>

            {/* Core Capabilities List */}
            <div className="space-y-4 mb-6">
              {/* Pillar 1 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#f02a8f]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-4 h-4 text-[#f02a8f]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Bespoke Software Systems &amp; APIs
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Enterprise backend systems, high-concurrency microservices, automated domain inspectors, and secure database schemas using Python, FastAPI, Django, and PostgreSQL.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#f02a8f]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Globe2 className="w-4 h-4 text-[#f02a8f]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Modern Web Platforms &amp; Portals
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Headless e-commerce storefronts, high-speed corporate portals, and SaaS dashboards built with Next.js, React, TypeScript, and modern responsive design systems.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#f02a8f]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-[#f02a8f]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Mobile Application Development
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Cross-platform iOS and Android mobile solutions engineered with React Native, featuring real-time offline caching, seamless push alerts, and 0-crash stability.
                </p>
              </div>
            </div>
          </div>

          {/* Department Tech Stack & Footer */}
          <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
            <span className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider block mb-2">
              Core Technical Stack
            </span>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {['Next.js', 'React', 'React Native', 'TypeScript', 'Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-white dark:bg-[#1d1c22] border border-black/[0.08] dark:border-white/[0.1] text-[#0f0e13] dark:text-white shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                99.99% Availability &bull; Clean Architecture
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[#f02a8f] hover:underline"
              >
                <span>Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ====================================================================
            DEPARTMENT 02: DIGITAL MARKETING, SEO & BRAND SYSTEMS
            ==================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group relative p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border-2 border-[#ff6657]/30 dark:border-[#ff6657]/40 shadow-[0_15px_40px_rgba(255,102,87,0.08)] hover:shadow-[0_20px_50px_rgba(255,102,87,0.16)] backdrop-blur-2xl flex flex-col justify-between overflow-hidden transition-shadow"
        >
          {/* Ambient Top Coral Glow Bar */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#ff6657] via-[#ff7e47] to-[#ff8a3d]"
          />

          <div>
            {/* Header Badge & Department Number */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#ff6657]/10 border border-[#ff6657]/25 text-[#ff6657]">
                DEPARTMENT 02 • GROWTH ENGINE
              </span>
              <motion.div 
                whileHover={{ scale: 1.12, rotate: 6 }}
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff6657] to-[#ff8a3d] flex items-center justify-center shadow-md cursor-pointer"
                style={{ color: '#ffffff' }}
              >
                <TrendingUp className="w-5 h-5 text-white" style={{ color: '#ffffff' }} />
              </motion.div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight mb-2 group-hover:text-[#ff6657] transition-colors">
              Digital Growth, SEO &amp; Branding
            </h3>
            <p className="text-xs sm:text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed mb-6">
              Strategic search engine dominance, high-conversion advertising campaigns, social audience amplification, and distinctive graphic branding designed to fuel business growth.
            </p>

            {/* Core Capabilities List */}
            <div className="space-y-4 mb-6">
              {/* Pillar 1 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#ff6657]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Search className="w-4 h-4 text-[#ff6657]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Data-Driven Technical SEO &amp; Audits
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Comprehensive keyword clustering, on-page optimization, Core Web Vitals tuning, structured schema implementation, and international organic ranking dominance.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#ff6657]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Megaphone className="w-4 h-4 text-[#ff6657]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Digital Marketing &amp; Performance Advertising
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Targeted customer acquisition campaigns across Meta Ads and Google Search, conversion rate optimization (CRO), custom sales funnels, and data analytics.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/[0.06] hover:border-[#ff6657]/40 hover:translate-x-1 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <Palette className="w-4 h-4 text-[#ff6657]" />
                  <h4 className="text-sm font-bold text-[#0f0e13] dark:text-white">
                    Graphic Design &amp; Brand Systems
                  </h4>
                </div>
                <p className="text-xs text-[#524d5b] dark:text-[#918c96] leading-relaxed pl-6">
                  Bespoke visual identity kits, logo systems, marketing collateral, social media packaging, and user interface prototypes engineered to make your brand unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Department Tech Stack & Footer */}
          <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
            <span className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider block mb-2">
              Growth &amp; Creative Tooling
            </span>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {['Technical SEO', 'Google Analytics 4', 'Search Console', 'Meta Ads Manager', 'Figma', 'Adobe Creative Cloud', 'Conversion CRO', 'Schema.org'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-white dark:bg-[#1d1c22] border border-black/[0.08] dark:border-white/[0.1] text-[#0f0e13] dark:text-white shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Measurable ROI &bull; Organic Dominance
              </span>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[#ff6657] hover:underline"
              >
                <span>Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cross-Department Synergy Banner */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#f02a8f]/08 via-white/80 to-[#ff6657]/08 dark:from-[#f02a8f]/10 dark:via-[#1d1c22]/80 dark:to-[#ff6657]/10 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#524d5b] dark:text-[#c8c3cc] backdrop-blur-md">
        <div className="flex items-center gap-2.5 text-[#0f0e13] dark:text-white font-semibold">
          <Zap className="w-4 h-4 text-[#f02a8f] shrink-0" />
          <span>The Zylux Dual-Engine Advantage:</span>
          <span className="font-normal text-[#524d5b] dark:text-[#918c96] hidden md:inline">
            Engineering built to convert, paired with marketing backed by rock-solid code.
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
            Synchronized Cross-Team Delivery
          </span>
        </div>
      </div>
    </section>
  );
};
