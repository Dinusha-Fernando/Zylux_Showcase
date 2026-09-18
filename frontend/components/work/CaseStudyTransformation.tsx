'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap, Cpu, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '@/types';

interface TransformationProps {
  project: Project;
}

export const CaseStudyTransformation: React.FC<TransformationProps> = ({ project }) => {
  return (
    <div className="space-y-8 sm:space-y-10 mb-12 sm:mb-16">
      {/* ====================================================================
          SECTION 1: THE OPERATIONAL BOTTLENECK VS THE ENGINEERING SOLUTION
          ==================================================================== */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#736e7a] dark:text-[#918c96] font-bold mb-4">
          <Layers className="w-3.5 h-3.5 text-[#f02a8f]" />
          <span>Execution Narrative &amp; Strategic Solutions</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Challenge Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55 }}
            className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#1d1c22]/85 border border-black/[0.08] dark:border-white/[0.1] shadow-xs backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top Amber/Coral accent bar */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6657] to-transparent"
            />

            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-[#ff6657] uppercase font-bold tracking-wider">
                02. The Challenge
              </span>
              <div className="w-7 h-7 rounded-full bg-[#ff6657]/10 flex items-center justify-center text-[#ff6657]">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#0f0e13] dark:text-white mb-3 tracking-tight">
              The Operational Bottleneck
            </h3>

            <p className="text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55 }}
            className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/95 dark:bg-[#1f1d26]/95 border-2 border-[#f02a8f]/40 dark:border-[#f02a8f]/50 shadow-[0_10px_35px_rgba(240,42,143,0.1)] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top Magenta accent bar */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f02a8f] to-transparent"
            />

            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono text-[#f02a8f] uppercase font-bold tracking-wider">
                03. The Engineering Solution
              </span>
              <div className="w-7 h-7 rounded-full bg-[#f02a8f]/10 flex items-center justify-center text-[#f02a8f]">
                <Zap className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#0f0e13] dark:text-white mb-3 tracking-tight">
              Architectural Transformation
            </h3>

            <p className="text-sm text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ====================================================================
          SECTION 2: ARCHITECTURE HIGHLIGHTS & PRODUCTION DELIVERABLES
          ==================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Architecture Highlights */}
        {project.architectureHighlights && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#1d1c22]/85 border border-black/[0.08] dark:border-white/[0.1] shadow-xs backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-[#f02a8f]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#f02a8f] font-bold">
                System Architecture Highlights
              </h3>
            </div>

            <ul className="space-y-3">
              {project.architectureHighlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2c2834] dark:text-[#c8c3cc] leading-normal">
                  <span className="w-2 h-2 rounded-full bg-[#f02a8f] mt-1.5 shrink-0 shadow-[0_0_6px_#f02a8f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Shipped Scope of Deliverables */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#1d1c22]/85 border border-black/[0.08] dark:border-white/[0.1] shadow-xs backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#0f0e13] dark:text-white font-bold">
              Shipped Production Deliverables
            </h3>
          </div>

          <ul className="space-y-3">
            {project.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2c2834] dark:text-[#c8c3cc] leading-normal">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
