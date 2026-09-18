'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CreativeHeroVisual } from './CreativeHeroVisual';
import { HeroActionButtons } from './HeroActionButtons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 md:pt-12 md:pb-16 overflow-hidden bg-dot-grid">
      {/* Ambient background atmosphere: Subtle Deep Plum & Neon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#2b222d]/45 via-[#f02a8f]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Core Narrative & Value Proposition */}
          <div className="lg:col-span-6 xl:col-span-6 text-left">
            {/* Live status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-mono text-[#f02a8f] mb-4 sm:mb-5 shadow-xs backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
              <span className="font-semibold tracking-wide">WE BUILD. WE SOLVE. WE DELIVER.</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight text-[#0f0e13] leading-[1.12]"
            >
              We build{' '}
              <span className="zylux-gradient-text">digital products</span>{' '}
              that move businesses forward.
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4a4552] max-w-xl leading-relaxed font-normal"
            >
              Zylux Software Solutions designs and engineers custom web platforms, bespoke software, mobile apps, graphic design, and digital marketing (SEO & social media) using the latest technologies and unique designs, centered on your requirements and elevated with our expert suggestions.
            </motion.p>

            {/* Engineering Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 flex flex-wrap gap-2 text-xs font-mono text-[#2c2834]"
            >
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-black/[0.08] shadow-xs backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-[#ff6657]" />
                Latest Technologies
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-black/[0.08] shadow-xs backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f02a8f]" />
                Unique Client-Centric Designs
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-black/[0.08] shadow-xs backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Dev + Graphic Design + SEO
              </span>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroActionButtons />
            </motion.div>

            {/* Trust & Proof Baseline Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-black/[0.08] grid grid-cols-3 gap-2.5 sm:gap-4 max-w-lg"
            >
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-[#0f0e13]">100%</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#736e7a] leading-tight mt-0.5">Client Priority</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-[#0f0e13]">Modern</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#736e7a] leading-tight mt-0.5">Latest Tech</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-[#0f0e13]">Full Growth</div>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#736e7a] leading-tight mt-0.5">Dev, Design & SEO</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Visual Artifact & Interactive Telemetry */}
          <div className="lg:col-span-6 xl:col-span-6">
            <CreativeHeroVisual />
          </div>
        </div>

        {/* Bottom Capabilities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 pt-6 border-t border-black/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono text-[#736e7a]"
        >
          <div className="flex items-center gap-2 text-[#0f0e13] font-semibold uppercase tracking-wider text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#f02a8f]" />
            Core Capabilities:
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[#524d5b]">
            <span className="hover:text-[#0f0e13] transition-colors">01. Web Development</span>
            <span className="text-black/20">/</span>
            <span className="hover:text-[#0f0e13] transition-colors">02. Custom Software</span>
            <span className="text-black/20">/</span>
            <span className="hover:text-[#0f0e13] transition-colors">03. Mobile Apps</span>
            <span className="text-black/20">/</span>
            <span className="hover:text-[#0f0e13] transition-colors">04. Graphic Design</span>
            <span className="text-black/20">/</span>
            <span className="hover:text-[#0f0e13] transition-colors">05. Social Media & SEO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
