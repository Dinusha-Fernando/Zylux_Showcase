'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, CheckCircle2 } from 'lucide-react';
import { ProjectMetric } from '@/types';

interface MetricsProps {
  metrics: ProjectMetric[];
}

export const CaseStudyImpactMetrics: React.FC<MetricsProps> = ({ metrics }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center justify-between gap-4 mb-4 sm:mb-5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f02a8f] font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>Measured Business Impact &amp; SLA Metrics</span>
        </div>
        <span className="text-[11px] font-mono text-[#736e7a] dark:text-[#918c96] hidden sm:inline">
          Live System Telemetry
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="group relative p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-[#1d1c22]/85 border border-black/[0.08] dark:border-white/[0.1] shadow-sm hover:shadow-md hover:border-[#f02a8f]/40 dark:hover:border-[#f02a8f]/50 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Specular Gradient Line on Hover */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f02a8f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-[#736e7a] dark:text-[#918c96] font-bold uppercase tracking-wider">
                Benchmark {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-6 h-6 rounded-full bg-[#f02a8f]/10 dark:bg-[#f02a8f]/20 flex items-center justify-center text-[#f02a8f]">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="my-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-[#0f0e13] dark:text-white tracking-tight group-hover:text-[#f02a8f] transition-colors duration-300">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#4a4552] dark:text-[#c8c3cc] mt-1 uppercase tracking-wide">
                {m.label}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-3 h-3 shrink-0" />
              <span>Production Verified Benchmark</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
