'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Project } from '@/types';

interface StageProps {
  project: Project;
}

export const CaseStudyMockupStage: React.FC<StageProps> = ({ project }) => {
  if (!project.image) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-12 sm:mb-16 group"
    >
      {/* Background Ambient Glow Behind Mockup */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#f02a8f]/12 via-[#ff4f78]/08 to-[#ff6657]/12 rounded-3xl blur-2xl pointer-events-none -z-10 group-hover:from-[#f02a8f]/20 group-hover:to-[#ff6657]/20 transition-all duration-700"
      />

      {/* Cyber Browser Device Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/15 bg-white/90 dark:bg-[#15141b]/95 p-2.5 sm:p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.12)] backdrop-blur-2xl overflow-hidden">
        {/* Top Browser Terminal Bar */}
        <div className="flex items-center justify-between px-2 sm:px-3 py-2 border-b border-black/[0.06] dark:border-white/[0.08] mb-2 sm:mb-2.5 text-[11px] font-mono">
          {/* Window Control Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            {/* Simulated Live URL Address Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#736e7a] dark:text-[#918c96] text-[10px] font-mono">
              <span className="text-emerald-500">https://</span>
              <span className="text-[#0f0e13] dark:text-white font-semibold">{project.slug}.zylux.app</span>
              <span className="text-[#736e7a] dark:text-[#918c96]">• live-production</span>
            </div>
          </div>

          {/* Right Status Capsule */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/30 text-[10px] font-mono text-[#f02a8f] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
              SYSTEM OPTIMAL
            </span>
          </div>
        </div>

        {/* High-Resolution Canvas Container */}
        <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-[#0d0d12]">
          <Image
            src={project.image}
            alt={`${project.title} Production Architecture Preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-cover object-top transform transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Vignette & Soft Gradient Tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

          {/* Top Right Floating Pill: Innovation Beacon */}
          <div className="absolute top-3 right-3 hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/92 dark:bg-[#1d1c22]/95 border border-white/80 dark:border-white/20 backdrop-blur-md text-[11px] font-mono text-[#0f0e13] dark:text-white font-bold shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#f02a8f]" />
            <span>CLOUD-NATIVE ARTIFACT</span>
          </div>

          {/* Bottom Left Floating Pill: Telemetry Status */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#15141a]/95 border border-white/80 dark:border-white/20 backdrop-blur-md text-[11px] font-mono text-[#0f0e13] dark:text-white shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-bold">Active Deployment</span>
            <span className="text-[#736e7a] dark:text-[#918c96] hidden sm:inline">• High Concurrency SLA</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
