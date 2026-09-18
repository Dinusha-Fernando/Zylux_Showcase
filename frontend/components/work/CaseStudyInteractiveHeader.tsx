'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, ShieldCheck, Cpu, Globe2 } from 'lucide-react';
import { Project } from '@/types';

interface HeaderProps {
  project: Project;
}

export const CaseStudyInteractiveHeader: React.FC<HeaderProps> = ({ project }) => {
  return (
    <div className="relative mb-10 md:mb-14">
      {/* Dynamic Ambient Neon Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[350px] bg-gradient-to-b from-[#f02a8f]/15 via-[#ff4f78]/08 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Top Nav Row: Back Link & Live Status Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        {/* Back Link with Spring Physics */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-[#1d1c22]/80 hover:bg-white dark:hover:bg-[#1d1c22] border border-black/10 dark:border-white/10 hover:border-[#f02a8f]/40 text-xs font-mono text-[#524d5b] dark:text-[#c8c3cc] hover:text-[#f02a8f] dark:hover:text-[#f02a8f] transition-all duration-300 shadow-2xs backdrop-blur-md min-h-[36px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-semibold tracking-wide uppercase text-[11px]">Back to Projects</span>
        </Link>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold shadow-2xs backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>PRODUCTION SHIPPED • {project.year}</span>
        </div>
      </div>

      {/* Editorial Meta Banner: Project Number & Category */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs font-mono text-[#736e7a] dark:text-[#918c96] mb-3 sm:mb-4"
      >
        <span className="px-2.5 py-0.5 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/20 text-[#f02a8f] font-bold">
          CASE STUDY {project.number}
        </span>
        <span className="text-black/20 dark:text-white/20">•</span>
        <span className="uppercase tracking-wider font-semibold text-[#0f0e13] dark:text-white">
          {project.category}
        </span>
        <span className="text-black/20 dark:text-white/20">•</span>
        <span className="truncate max-w-[200px] sm:max-w-none">{project.client}</span>
      </motion.div>

      {/* Main Editorial Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight leading-[1.1] max-w-4xl"
      >
        {project.title}
      </motion.h1>

      {/* Vivid Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
        className="mt-3.5 sm:mt-4 text-lg sm:text-xl md:text-2xl font-bold zylux-gradient-text max-w-3xl leading-snug"
      >
        {project.tagline}
      </motion.p>

      {/* Narrative Executive Summary */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.22 }}
        className="mt-4 sm:mt-5 text-sm sm:text-base text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed max-w-3xl font-normal"
      >
        {project.summary}
      </motion.p>

      {/* Quick Spec Matrix: 4 High-Tech Glass Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 pt-6 border-t border-black/[0.08] dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4"
      >
        {/* Card 1: Client Partner */}
        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          transition={{ duration: 0.2 }}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#1d1c22]/80 border border-black/[0.08] dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider mb-1">
            <Globe2 className="w-3 h-3 text-[#f02a8f]" />
            <span>Client Partner</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0f0e13] dark:text-white truncate">
            {project.client}
          </span>
        </motion.div>

        {/* Card 2: Core Architecture */}
        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          transition={{ duration: 0.2 }}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#1d1c22]/80 border border-black/[0.08] dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider mb-1">
            <Cpu className="w-3 h-3 text-[#ff6657]" />
            <span>Core Tech</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0f0e13] dark:text-white truncate font-mono">
            {project.technologies.slice(0, 2).join(' + ')}
          </span>
        </motion.div>

        {/* Card 3: Scope & Engagement */}
        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          transition={{ duration: 0.2 }}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#1d1c22]/80 border border-black/[0.08] dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider mb-1">
            <Sparkles className="w-3 h-3 text-[#f02a8f]" />
            <span>Engagement</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#0f0e13] dark:text-white truncate">
            Full-Cycle Architecture
          </span>
        </motion.div>

        {/* Card 4: Verified Status */}
        <motion.div 
          whileHover={{ y: -3, scale: 1.015 }}
          transition={{ duration: 0.2 }}
          className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#1d1c22]/80 border border-black/[0.08] dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#736e7a] dark:text-[#918c96] uppercase font-bold tracking-wider mb-1">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Status</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate flex items-center gap-1">
            Active in Production
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};
