'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { audiencesData } from '@/data/process';
import { ArrowUpRight } from 'lucide-react';

export const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-10 md:py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="COLLABORATION"
          title="Who We Work With"
          description="Rather than boxing ourselves into narrow industry verticals, we partner with teams who value rapid execution, technical precision, and direct accountability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiencesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: idx * 0.08, duration: 0.45, ease: 'easeOut' }}
              className="p-5 rounded-2xl bg-white/85 border border-white/70 shadow-[0_8px_25px_rgba(0,0,0,0.04)] backdrop-blur-xl hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff6657] block mb-1.5 font-semibold group-hover:translate-x-0.5 transition-transform">
                  {item.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] tracking-tight mb-2 group-hover:text-[#f02a8f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#524d5b] leading-relaxed mb-4 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06]">
                <span className="text-[10px] font-mono text-[#726c7e] uppercase tracking-wider block mb-1.5 font-semibold">
                  Typical Engagement
                </span>
                <ul className="space-y-1.5 text-xs text-[#2b2734]">
                  {item.fitFor.map((fit, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] group-hover:scale-125 transition-transform" />
                      <span className="line-clamp-1 text-[11px]">{fit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transitional Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/90 border border-[#f02a8f]/30 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#f02a8f]/50 transition-colors"
        >
          <span className="text-sm sm:text-base font-semibold text-[#0f0e13]">
            Have an idea that needs to become a production software product?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#f02a8f] hover:text-[#ff6657] shrink-0 transition-colors group"
          >
            <span>Let&apos;s build it</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
