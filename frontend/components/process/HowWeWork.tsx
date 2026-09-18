'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { processStepsData } from '@/data/process';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section id="how-we-work" className="py-10 md:py-16 relative bg-dot-grid overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="METHODOLOGY"
          title="From Idea → Production Product"
          description="A disciplined 4-stage engineering lifecycle designed to eliminate technical risk and launch production-grade digital software on schedule."
        />

        {/* 4-Step Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {processStepsData.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="relative p-5 rounded-2xl bg-white/85 dark:bg-[#14131a]/85 border border-white/70 dark:border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.04)] backdrop-blur-xl hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Connector arrow on desktop */}
              {idx < processStepsData.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white dark:bg-[#1c1a24] border border-black/10 dark:border-white/10 shadow-xs text-[#726c7e] group-hover:text-[#f02a8f] transition-all group-hover:scale-110">
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              )}

              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <span className="font-mono text-2xl font-black text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">
                    {step.number}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-black/15 dark:bg-white/15 group-hover:bg-[#f02a8f] group-hover:shadow-[0_0_8px_#f02a8f] transition-all" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] dark:text-white tracking-tight mb-1 group-hover:text-[#f02a8f] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] font-mono text-[#ff6657] font-semibold mb-2.5">
                  {step.tagline}
                </p>

                <p className="text-xs text-[#524d5b] dark:text-[#c8c3cc] leading-relaxed mb-4 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                <span className="text-[10px] font-mono text-[#726c7e] dark:text-[#8e8897] uppercase tracking-wider block mb-1.5 font-semibold">
                  Stage Output
                </span>
                <ul className="space-y-1.5 text-xs text-[#2b2734] dark:text-[#e0dce4]">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f] shrink-0" />
                      <span className="line-clamp-1 text-[11px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
