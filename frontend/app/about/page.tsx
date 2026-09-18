'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Users, 
  Code2, 
  Cpu, 
  MessageSquare, 
  Star, 
  ArrowUpRight, 
  Mail,
  Globe2,
  Layers
} from 'lucide-react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';
import { AboutDepartments } from '@/components/about/AboutDepartments';
import { AboutLeadership } from '@/components/about/AboutLeadership';

const principles = [
  {
    icon: Target,
    number: '01',
    title: 'Problem-Centric Architecture',
    description: 'We never write code in a vacuum. Every database query, API contract, and UI component is mapped to a specific business problem and measurable user outcome.'
  },
  {
    icon: Code2,
    number: '02',
    title: 'Clean, Maintainable Codebases',
    description: 'We write modern TypeScript and Python that your team can actually understand, extend, and maintain long after launch. Zero cryptic spaghetti or unnecessary bloat.'
  },
  {
    icon: Zap,
    number: '03',
    title: 'High Velocity Without Shortcuts',
    description: 'By pairing proven architectural patterns with cutting-edge tooling (Next.js, Tailwind, Docker, FastAPI), we ship at startup speed without sacrificing enterprise security.'
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Defensible Reliability & Testing',
    description: 'Zero hand-waving. We implement automated testing, robust error tracing, and defensive validation at every layer so that production releases are completely predictable.'
  },
  {
    icon: Users,
    number: '05',
    title: 'Direct Builder Communication',
    description: 'You speak directly with the engineers and product designers writing your software. No layers of non-technical account managers playing telephone with your requirements.'
  },
  {
    icon: Cpu,
    number: '06',
    title: 'Product Thinking Over Agency Mindset',
    description: 'Traditional agencies treat projects as billable hours. We treat your software as a living digital product that must generate positive ROI, user retention, and business growth.'
  }
];

const globalDeployments = [
  {
    region: 'New York City, USA',
    flag: '🇺🇸',
    client: 'Return Buddies LLC',
    project: 'Logistics Admin Dashboard & Mobile Bug Fixes',
    tech: 'React, Node.js, Express, MongoDB, React Native',
    impact: '0 Mobile App Crash Rate, 3.5x Admin Throughput'
  },
  {
    region: 'Colombo, Sri Lanka',
    flag: '🇱🇰',
    client: 'Aussie Supplements Distribution',
    project: 'E-Commerce Distribution Web Platform',
    tech: 'Next.js, Tailwind CSS, TypeScript, Django, PostgreSQL',
    impact: '+42% Distributor Re-orders, Sub-second Transitions'
  },
  {
    region: 'Colombo, Sri Lanka & Global',
    flag: '🇱🇰',
    client: 'ChronoSentinel Labs & Abdul Fandom',
    project: 'Domain Risk Analyzer & Global Merchandising',
    tech: 'FastAPI, React, Python, Next.js, PostgreSQL',
    impact: '< 200ms Domain Latency, +45% Checkout Conversions'
  }
];

export default function AboutPage() {
  return (
    <div className="py-8 md:py-14 relative overflow-hidden">
      {/* Background ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(240,42,143,0.14),rgba(255,102,87,0.07),transparent_70%)] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero 2-Column Split: Narrative (Left) + Vertical Telemetry Rack (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 pt-2">
          {/* Left Column: Vision Statement & Mission Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Subtle Live Beacon Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#15141b]/90 border border-black/[0.08] dark:border-white/[0.1] shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-[#524d5b] dark:text-[#b8b3be]">
                DIGITAL ENGINEERING &amp; GLOBAL GROWTH • COLOMBO HQ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#0f0e13] dark:text-white leading-[1.12]">
              We Listen. We Engineer. <br />
              <span className="zylux-gradient-text drop-shadow-[0_4px_30px_rgba(240,42,143,0.25)]">
                We Elevate Your Business.
              </span>
            </h1>

            {/* Description Narrative */}
            <p className="text-sm sm:text-base text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed max-w-xl font-normal">
              Zylux Software Solutions is a modern digital engineering firm headquartered in <span className="font-semibold text-[#0f0e13] dark:text-white">Colombo, Sri Lanka</span>, operating <span className="font-semibold text-[#0f0e13] dark:text-white">24/7 worldwide</span>. We turn client vision into world-class software, bespoke designs, and high-impact digital marketing.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/contact" size="md" variant="primary">
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>

              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-all shadow-xs"
                title="Direct WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Vertical Telemetry Command Capsules with Continuous Zoom Animation */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-3.5">
            {/* Box 1: Shipped Systems */}
            <motion.div
              animate={{
                scale: [1, 1.035, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0,
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-3.5 sm:p-4.5 rounded-2xl bg-white/90 dark:bg-[#131218]/90 border border-black/[0.08] dark:border-white/[0.1] hover:border-[#f02a8f]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(240,42,143,0.14)] backdrop-blur-xl overflow-hidden origin-center"
            >
              <span 
                aria-hidden="true" 
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#f02a8f] to-[#ff4777] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center justify-between gap-2 sm:gap-3 pl-1 sm:pl-1.5">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f02a8f]/10 border border-[#f02a8f]/20 flex items-center justify-center text-[#f02a8f] shrink-0 group-hover:scale-110 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-2xl font-black font-mono tracking-tight text-[#0f0e13] dark:text-white leading-tight">
                      5+
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[#0f0e13] dark:text-white truncate">
                      Shipped Systems
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#736e7a] dark:text-[#918c96] inline-block">
                    DEPLOYED
                  </span>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] mt-0.5 truncate max-w-[130px] sm:max-w-none">
                    Bespoke Software &amp; SaaS
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Global Availability */}
            <motion.div
              animate={{
                scale: [1, 1.035, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.6,
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-3.5 sm:p-4.5 rounded-2xl bg-white/90 dark:bg-[#131218]/90 border border-black/[0.08] dark:border-white/[0.1] hover:border-emerald-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(16,185,129,0.14)] backdrop-blur-xl overflow-hidden origin-center"
            >
              <span 
                aria-hidden="true" 
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-emerald-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center justify-between gap-2 sm:gap-3 pl-1 sm:pl-1.5">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:scale-110 transition-transform">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-2xl font-black font-mono tracking-tight text-emerald-600 dark:text-emerald-400 leading-tight">
                      24/7
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[#0f0e13] dark:text-white truncate">
                      Global Availability
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 min-w-0">
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE 24/7
                  </span>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] mt-0.5 truncate max-w-[130px] sm:max-w-none">
                    Seamless Timezones
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 3: Client Satisfaction */}
            <motion.div
              animate={{
                scale: [1, 1.035, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.2,
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-3.5 sm:p-4.5 rounded-2xl bg-white/90 dark:bg-[#131218]/90 border border-black/[0.08] dark:border-white/[0.1] hover:border-[#f02a8f]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(240,42,143,0.14)] backdrop-blur-xl overflow-hidden origin-center"
            >
              <span 
                aria-hidden="true" 
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#f02a8f] to-[#ff6657] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center justify-between gap-2 sm:gap-3 pl-1 sm:pl-1.5">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#f02a8f]/10 border border-[#f02a8f]/20 flex items-center justify-center text-[#f02a8f] shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-2xl font-black font-mono tracking-tight text-[#f02a8f] leading-tight">
                      100%
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[#0f0e13] dark:text-white truncate">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 inline-block">
                    VERIFIED SLA
                  </span>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] mt-0.5 truncate max-w-[130px] sm:max-w-none">
                    Proven Delivery
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 4: Worldwide Projects */}
            <motion.div
              animate={{
                scale: [1, 1.035, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.8,
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-3.5 sm:p-4.5 rounded-2xl bg-white/90 dark:bg-[#131218]/90 border border-black/[0.08] dark:border-white/[0.1] hover:border-[#ff6657]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(255,102,87,0.14)] backdrop-blur-xl overflow-hidden origin-center"
            >
              <span 
                aria-hidden="true" 
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#ff6657] to-[#ff8a3d] opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex items-center justify-between gap-2 sm:gap-3 pl-1 sm:pl-1.5">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#ff6657]/10 border border-[#ff6657]/20 flex items-center justify-center text-[#ff6657] shrink-0 group-hover:scale-110 transition-transform">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-lg sm:text-2xl font-black font-mono tracking-tight text-[#ff6657] leading-tight">
                      NYC • GLOBAL
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[#0f0e13] dark:text-white truncate">
                      Worldwide Projects
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0 min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#ff6657]/10 text-[#ff6657] inline-block">
                    MULTI-REGION
                  </span>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] mt-0.5 truncate max-w-[130px] sm:max-w-none">
                    US, LK &amp; Global
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Brand Identity Showcase */}
        <div className="my-10 p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(240,42,143,0.12),transparent_70%)] pointer-events-none" 
          />

          <div className="flex flex-col lg:flex-row items-center gap-8 justify-between relative z-10">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#f02a8f]/10 text-[#f02a8f] border border-[#f02a8f]/25">
                  OUR ESSENCE &amp; PURPOSE
                </span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  COLOMBO HQ • SERVING WORLDWIDE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0f0e13] dark:text-white tracking-tight leading-snug">
                Client vision is our foundation. Relentless engineering makes it unforgettable.
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed">
                <p>
                  Most technology agencies fall into one of two traps: they either push rigid, generic templates that dilute your brand, or they build overly complex, brittle systems that collapse under real user traffic.
                </p>
                <p>
                  At <strong className="text-[#0f0e13] dark:text-white font-bold">Zylux Software Solutions</strong>, we believe in a balanced, client-first synergy. Your wishes, business logic, and operational needs are our primary mandate. We reinforce that vision with battle-tested architectural recommendations, modern performance stacks (Next.js, React, React Native, Django, FastAPI, PostgreSQL, MongoDB), unique visual branding, and proactive marketing strategies.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/contact" size="md" variant="primary">
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Button>

                <a
                  href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-all"
                  title="Direct WhatsApp Chat"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Illuminated 3D Logo Centerpiece */}
            <div className="relative flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 shadow-xl bg-white/95 dark:bg-[#100f14] group p-3">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Zylux Software Solutions Official 3D Logo"
                  fill
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-3xl border border-[#f02a8f]/30 pointer-events-none group-hover:border-[#ff6657]/50 transition-colors" />
            </div>
          </div>
        </div>

        {/* ====================================================================
            TWO SPECIALIZED DEPARTMENTS: SOFTWARE/WEB/APP DEV & DIGITAL MARKETING/SEO
            ==================================================================== */}
        <AboutDepartments />

        {/* ====================================================================
            LEADERSHIP SPOTLIGHT: W.M. DINUSHA KALHARA FERNANDO - SOFTWARE ENGINEER
            ==================================================================== */}
        <AboutLeadership />

        {/* Global Reach Grid: "From Colombo to the World" */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block mb-1">
              WORLDWIDE FOOTPRINT • REAL SHIPPED PLATFORMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0e13] dark:text-white tracking-tight">
              Headquartered in Colombo, Delivering Globally
            </h2>
            <p className="text-xs sm:text-sm text-[#524d5b] dark:text-[#c8c3cc] mt-1">
              We operate 24/7 across multiple time zones, delivering enterprise-grade code to partners in North America, South Asia, and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {globalDeployments.map((hub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.99 }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="p-6 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{hub.flag}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] text-[#ff6657] border border-black/10 dark:border-white/10 font-bold">
                      LIVE DEPLOYMENT
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0f0e13] dark:text-white mb-1 group-hover:text-[#f02a8f] transition-colors">
                    {hub.region}
                  </h3>
                  <span className="text-xs font-mono text-[#f02a8f] font-semibold block mb-2">
                    {hub.client}
                  </span>
                  <p className="text-xs text-[#524d5b] dark:text-[#c8c3cc] mb-3">
                    {hub.project}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
                  <div className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96]">
                    STACK: <span className="text-[#2c2834] dark:text-[#e0dce4] font-semibold">{hub.tech}</span>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    IMPACT: {hub.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 24/7 Availability Strip */}
          <div className="mt-4 p-4 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#0f0e13] dark:text-white font-semibold">
                Colombo Headquarters Engineering Desk: <span className="text-emerald-700 dark:text-emerald-400 font-bold">24 Hours / 7 Days Live</span>
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#25D366] hover:bg-emerald-500/20 font-semibold transition-all"
                title="Direct WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span className="text-emerald-700 dark:text-emerald-400">WhatsApp</span>
              </a>
              <a
                href="mailto:dkalharafernando@gmail.com"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#f02a8f]/10 border border-[#f02a8f]/20 text-[#f02a8f] hover:bg-[#f02a8f]/20 font-semibold transition-all"
                title="Direct Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61585045107718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#1877F2] hover:bg-blue-500/20 font-semibold transition-all"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/company/zylux-software-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-[#0A66C2] hover:bg-sky-500/20 font-semibold transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Engineering Principles Grid */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#f02a8f] font-semibold block mb-1">
              ENGINEERING DISCIPLINE • HOW WE WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0e13] dark:text-white tracking-tight">
              The Six Standards We Live By
            </h2>
            <p className="text-xs sm:text-sm text-[#524d5b] dark:text-[#c8c3cc] mt-1 max-w-xl">
              Every system built at Zylux adheres to these fundamental tenets of modern software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  className="p-5 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/50 hover:shadow-[0_12px_30px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#f02a8f] to-[#ff6657] flex items-center justify-center text-white shadow-xs group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono text-[#736e7a] dark:text-[#918c96]">
                        {p.number}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#0f0e13] dark:text-white mb-2 group-hover:text-[#f02a8f] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#524d5b] dark:text-[#c8c3cc] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-black/[0.08] dark:border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block mb-1">
              CLIENT TESTIMONIALS • REPUTATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0e13] dark:text-white tracking-tight">
              What Our Partners Say About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tharindu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/40 hover:shadow-[0_12px_30px_rgba(240,42,143,0.1)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] dark:text-[#e0dce4] leading-relaxed italic">
                  &ldquo;Building our e-commerce platforms with Zylux was the best technical decision we made. They respected our exact requirements and their architectural suggestions made our store lightning fast.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                <h4 className="text-xs font-bold text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">Tharindu</h4>
                <p className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96]">Director, Aussie Supplements &amp; Sparkler Gems (Sri Lanka)</p>
              </div>
            </motion.div>

            {/* John */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/40 hover:shadow-[0_12px_30px_rgba(240,42,143,0.1)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] dark:text-[#e0dce4] leading-relaxed italic">
                  &ldquo;From New York, communicating with Zylux in Colombo was as smooth as having an engineer in the next room. Their 24/7 responsiveness and React Native bug fixing prowess saved our product launch.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                <h4 className="text-xs font-bold text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">John</h4>
                <p className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96]">Operations Lead, Return Buddies (New York, USA)</p>
              </div>
            </motion.div>

            {/* W.P.J. Charya */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/40 hover:shadow-[0_12px_30px_rgba(240,42,143,0.1)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] dark:text-[#e0dce4] leading-relaxed italic">
                  &ldquo;Zylux took our complex cybersecurity specifications and engineered a domain threat analyzer in FastAPI and React that scans thousands of endpoints every minute. Reliable, clean, and expertly architected.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                <h4 className="text-xs font-bold text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">W.P.J. Charya</h4>
                <p className="text-[10px] font-mono text-[#736e7a] dark:text-[#918c96]">Cybersecurity Specialist &amp; Project Director</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-20 p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl relative overflow-hidden"
        >
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_top_right,rgba(240,42,143,0.12),transparent_70%)] pointer-events-none" 
          />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/20 text-[11px] font-mono text-[#f02a8f] mb-3 font-bold">
              <span>COLLABORATE WITH ZYLUX</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight">
              Want a technical partner that actually listens?
            </h3>
            <p className="text-xs sm:text-sm text-[#524d5b] dark:text-[#c8c3cc] mt-2 leading-relaxed">
              Let&apos;s schedule a focused 30-minute discovery call to evaluate your requirements and review architectural possibilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button href="/contact" size="md" variant="primary">
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20connect%20with%20your%20engineering%20team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-all"
                title="Chat on WhatsApp"
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
