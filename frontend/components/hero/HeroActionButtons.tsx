'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Layers, Zap } from 'lucide-react';

export const HeroActionButtons: React.FC = () => {
  return (
    <div className="mt-6 sm:mt-7 space-y-3.5">
      {/* Interactive Action Button Cluster */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 max-w-md sm:max-w-none">
        {/* ====================================================================
            PRIMARY BUTTON: "Start a Project"
            Rich High-Contrast Zylux Gradient + Saturated Magenta Glow (No White Washout)
            ==================================================================== */}
        <motion.div
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.975 }}
          transition={{ type: 'spring', stiffness: 420, damping: 18 }}
          className="relative group w-full sm:w-auto"
        >
          {/* Saturated Colored Ambient Glow (Deep Magenta/Coral, NOT white) */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] opacity-60 blur-md group-hover:opacity-90 group-hover:blur-xl transition-all duration-400 pointer-events-none"
          />

          {/* Core Interactive Link Anchor */}
          <Link
            href="/contact"
            data-cursor="LET'S BUILD →"
            className="relative flex items-center justify-between sm:justify-start gap-3 sm:gap-3.5 pl-5 pr-3 py-3 sm:py-2.5 rounded-full bg-gradient-to-r from-[#f02a8f] via-[#ff3b70] to-[#ff6657] text-white font-bold shadow-[0_8px_24px_rgba(240,42,143,0.4),0_2px_8px_rgba(255,102,87,0.25)] group-hover:shadow-[0_12px_32px_rgba(240,42,143,0.6),0_4px_12px_rgba(255,102,87,0.35)] group-hover:brightness-105 transition-all duration-300 overflow-hidden cursor-pointer select-none border border-white/25 w-full sm:w-auto"
          >
            {/* Top Crisp Specular Rim */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            />

            {/* Subtle Metallic Sheen Sweep on hover only */}
            <span
              aria-hidden="true"
              className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:left-[150%] transition-all duration-700 ease-out pointer-events-none"
            />

            {/* Left Content: Active Beacon & Label */}
            <div className="flex items-center gap-2.5 relative z-10">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white shadow-[0_0_6px_#ffffff]" />
              </span>

              <span className="text-[14.5px] sm:text-[15px] font-extrabold tracking-tight text-white leading-tight whitespace-nowrap drop-shadow-xs">
                Start a Project
              </span>
            </div>

            {/* Right Action Capsule: Frosted Glass Disc (stays translucent, never turns solid white) */}
            <div className="relative z-10 w-7.5 h-7.5 rounded-full bg-white/20 group-hover:bg-white/30 border border-white/35 group-hover:border-white/55 backdrop-blur-xs flex items-center justify-center text-white transition-all duration-300 shrink-0 sm:ml-1 shadow-xs group-hover:scale-105">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </motion.div>

        {/* ====================================================================
            SECONDARY BUTTON: "Explore Our Work"
            High-Contrast Sleek Pill + Magenta Accent Border + Crisp Typography (12 Works removed)
            ==================================================================== */}
        <motion.div
          whileHover={{ scale: 1.025, y: -2 }}
          whileTap={{ scale: 0.975 }}
          transition={{ type: 'spring', stiffness: 420, damping: 18 }}
          className="relative group w-full sm:w-auto"
        >
          {/* Subtle Colored Aura on Hover (NOT white) */}
          <div
            aria-hidden="true"
            className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#f02a8f]/30 to-[#ff6657]/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 pointer-events-none"
          />

          {/* Interactive Link Anchor */}
          <Link
            href="#selected-work"
            data-cursor="EXPLORE WORK ↓"
            className="relative flex items-center justify-between sm:justify-start gap-3 pl-4 pr-3.5 py-3 sm:py-2.5 rounded-full bg-white/95 dark:bg-[#18171e] hover:bg-white dark:hover:bg-[#201e28] text-[#0f0e13] dark:text-white border border-black/12 dark:border-white/15 group-hover:border-[#f02a8f]/60 group-hover:text-[#f02a8f] dark:group-hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_25px_rgba(240,42,143,0.18)] transition-all duration-300 overflow-hidden cursor-pointer select-none w-full sm:w-auto"
          >
            {/* Left Micro-Badge: Tactile Icon Disc */}
            <div className="w-7 h-7 rounded-full bg-black/[0.04] dark:bg-white/[0.08] group-hover:bg-[#f02a8f]/10 dark:group-hover:bg-[#f02a8f]/20 border border-black/[0.06] dark:border-white/[0.1] group-hover:border-[#f02a8f]/30 flex items-center justify-center text-[#524d5b] dark:text-[#c8c3cc] group-hover:text-[#f02a8f] transition-all duration-300 shrink-0">
              <Layers className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Button Label - Crisp, High Contrast */}
            <span className="text-[14px] sm:text-[14.5px] font-bold tracking-tight whitespace-nowrap transition-colors duration-300">
              Explore Our Work
            </span>

            {/* Right Gravity Down Arrow Capsule */}
            <div className="w-6.5 h-6.5 rounded-full bg-black/[0.03] dark:bg-white/[0.06] group-hover:bg-[#f02a8f]/10 dark:group-hover:bg-[#f02a8f]/20 border border-transparent group-hover:border-[#f02a8f]/20 flex items-center justify-center text-[#736e7a] dark:text-[#918c96] group-hover:text-[#f02a8f] transition-all duration-300 shrink-0 sm:ml-0.5">
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Subtle Micro-Trust Reassurance Strip */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-[#736e7a] dark:text-[#918c96] pl-1">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Quick 24h Project Estimate</span>
        </div>
        <span className="text-black/20 dark:text-white/20 hidden sm:inline">&bull;</span>
        <div className="flex items-center gap-1.5">
          <Zap className="w-3 h-3 text-[#f02a8f]" />
          <span>Full-Stack &amp; Modern UI/UX</span>
        </div>
      </div>
    </div>
  );
};
