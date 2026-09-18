'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from './ServiceCard';
import { CapabilityCanvasPreview } from './CapabilityCanvasPreview';
import { servicesData } from '@/data/services';
import { 
  Code2, 
  Cpu, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck 
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';

const serviceIcons: Record<string, React.ElementType> = {
  'web-platforms': Code2,
  'software-systems': Cpu,
  'mobile-products': Smartphone,
  'graphic-design': Palette,
  'digital-marketing-seo': TrendingUp
};

export const WhatWeBuild: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('web-platforms');

  const selectedService = servicesData.find((s) => s.id === activeId) || servicesData[0];
  const IconComponent = serviceIcons[selectedService.id] || Code2;

  const handleSelectService = (id: string) => {
    setActiveId(id);
  };

  return (
    <section id="what-we-build" className="py-8 md:py-14 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(240,42,143,0.07),rgba(255,102,87,0.03),transparent_70%)] pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeading
            badge="CAPABILITIES"
            title="What We Build"
            description="We do not offer generic IT templates. Every website, software application, mobile product, and growth campaign is engineered around your exact requirements, elevated with our expert suggestions."
            className="mb-0 max-w-2xl"
          />

          {/* Quick stats badge */}
          <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-[#14131a]/80 border border-black/10 dark:border-white/10 shadow-xs backdrop-blur-md self-start md:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-[11px] font-mono">
              <span className="text-[#0f0e13] dark:text-white font-bold">5 Core Verticals</span>
              <span className="text-[#736e7a] dark:text-[#8e8897] block text-[9px]">End-to-End Delivery</span>
            </div>
          </div>
        </div>

        {/* 1. Horizontal Capability Selector Dock */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 mb-6 no-scrollbar touch-pan-x">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.id] || Code2;
            const isActive = activeId === service.id;

            return (
              <motion.button
                key={service.id}
                onClick={() => handleSelectService(service.id)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className={`group px-3.5 py-2.5 rounded-xl font-mono text-xs flex items-center gap-2 transition-colors shrink-0 cursor-pointer min-h-[42px] ${
                  isActive
                    ? 'bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657] text-white font-bold shadow-[0_6px_20px_rgba(240,42,143,0.28)]'
                    : 'bg-white/80 dark:bg-[#15141b]/90 text-[#4a4552] dark:text-[#c8c3cc] border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/40 hover:text-[#0f0e13] dark:hover:text-white shadow-2xs backdrop-blur-md'
                }`}
              >
                <div className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                  isActive ? 'bg-white/20 text-white' : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#736e7a] group-hover:text-[#f02a8f]'
                }`}>
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-[10px] opacity-75">#{service.number}</span>
                <span className="text-xs tracking-tight whitespace-nowrap">{service.title.split('&')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* 2. Interactive Capability Studio (Main Stage Showcase) */}
        <div className="rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#121118]/95 border-2 border-[#f02a8f]/30 dark:border-[#f02a8f]/35 p-5 sm:p-6 lg:p-7 shadow-[0_15px_45px_rgba(240,42,143,0.06)] backdrop-blur-2xl mb-8 sm:mb-10 relative overflow-hidden">
          {/* Top Gradient Edge Accent */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Executive Value & Problem Solving */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                {/* Number & Tag Capsule */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f02a8f]/10 dark:bg-[#f02a8f]/15 border border-[#f02a8f]/25 text-[11px] font-mono text-[#f02a8f] font-bold mb-2">
                  <IconComponent className="w-3 h-3 text-[#f02a8f]" />
                  <span>VERTICAL {selectedService.number} • {selectedService.tag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f0e13] dark:text-white tracking-tight leading-snug">
                  {selectedService.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed font-normal">
                  {selectedService.description}
                </p>
              </div>

              {/* Core Deliverables Matrix */}
              <div className="space-y-1.5 pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff6657] font-bold block">
                  Core Engineering Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#0f0e13] dark:text-white">
                  {selectedService.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="flex items-start gap-1.5 p-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06]">
                      <CheckCircle2 className="w-3 h-3 text-[#f02a8f] shrink-0 mt-0.5" />
                      <span className="text-[10px] sm:text-[11px] leading-snug font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <div className="pt-1">
                <span className="text-[9px] font-mono text-[#736e7a] dark:text-[#8e8897] uppercase tracking-wider block mb-1.5 font-semibold">
                  Technologies Selected For Performance:
                </span>
                <div className="flex flex-wrap gap-1">
                  {selectedService.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white dark:bg-[#1c1a24] text-[#0f0e13] dark:text-white border border-black/10 dark:border-white/10 shadow-2xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Call to Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <Link
                  href={`/contact?service=${selectedService.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white text-xs font-mono font-bold tracking-wide hover:shadow-[0_6px_20px_rgba(240,42,143,0.3)] transition-all hover:scale-[1.01]"
                >
                  <span>Build With This Vertical</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <Link
                  href={`/services#${selectedService.id}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] border border-black/10 dark:border-white/10 text-xs font-mono text-[#0f0e13] dark:text-white font-semibold transition-all"
                >
                  <span>Explore Specs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#f02a8f]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Live Visual Cockpit Canvas */}
            <div className="lg:col-span-6">
              <CapabilityCanvasPreview serviceId={selectedService.id} />
            </div>
          </div>
        </div>

        {/* 3. Five Visual Bento Cards (Secondary Quick Explorer Grid - 5 Across on Desktop) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-mono text-[#736e7a] dark:text-[#8e8897] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f]" />
              <span>BROWSE ALL 5 VERTICALS AT A GLANCE</span>
            </div>
            <span className="text-[10px] font-mono text-[#736e7a] dark:text-[#8e8897] hidden sm:inline-block">
              Click any card to inspect in studio
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={activeId === service.id}
                onSelect={() => handleSelectService(service.id)}
              />
            ))}
          </div>
        </div>

        {/* 4. "Your Requirements First" Reassuring Action Strip */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/95 via-white/90 to-[#f02a8f]/05 dark:from-[#15141b]/95 dark:via-[#15141b]/90 dark:to-[#f02a8f]/10 border border-black/10 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs backdrop-blur-xl">
          <div className="max-w-xl">
            <div className="flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f02a8f]" />
              <span className="text-[11px] font-mono font-bold text-[#f02a8f] uppercase tracking-wider">
                OUR ENGINEERING PLEDGE
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold text-[#0f0e13] dark:text-white tracking-tight">
              Have unique requirements outside these 5 boxes?
            </h4>
            <p className="text-xs text-[#524d5b] dark:text-[#c8c3cc] mt-0.5 leading-relaxed">
              We listen deeply to your custom workflow, database needs, and business objectives, crafting a bespoke tech stack around your exact goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20have%20specific%20requirements%20for%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-xs hover:scale-[1.01]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Discuss On WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] hover:bg-[#f02a8f]/10 border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/30 text-xs font-mono font-semibold text-[#0f0e13] dark:text-white hover:text-[#f02a8f] transition-all"
            >
              <span>Submit Scope</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
