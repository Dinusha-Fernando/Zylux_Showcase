'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { metricsData } from '@/data/process';

export const ProofBand: React.FC = () => {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#121118]/90 border border-white/70 dark:border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#f02a8f] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#f02a8f] font-semibold">
                  TRACK RECORD &amp; TELEMETRY
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0f0e13] dark:text-white tracking-tight mt-0.5">
                Built to Deliver Measurable Outcomes
              </h2>
            </div>
            <p className="text-xs font-mono text-[#524d5b] dark:text-[#c8c3cc] max-w-md">
              Defensible metrics from actual production environments. No inflated claims or vanity agency statistics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {metricsData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#181722]/90 border border-black/[0.06] dark:border-white/[0.08] hover:border-[#f02a8f]/40 hover:shadow-[0_12px_30px_rgba(240,42,143,0.12)] transition-all group cursor-default"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono text-[#0f0e13] dark:text-white tracking-tight group-hover:text-[#f02a8f] transition-colors">
                  {item.number}
                </div>
                <h3 className="text-xs font-bold font-mono uppercase text-[#ff6657] tracking-wider mt-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#524d5b] dark:text-[#8e8897] mt-1.5 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
