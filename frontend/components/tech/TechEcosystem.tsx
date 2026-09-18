'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { technologiesData } from '@/data/technologies';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export const TechEcosystem: React.FC = () => {
  return (
    <section id="tech" className="py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNOLOGY"
          title="Built With The Right Stack"
          description="We do not pick technologies based on fleeting hype. We select battle-tested, high-throughput tools that support business stability, high performance, and rapid maintainability."
        />

        {/* Technology Layer Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {technologiesData.map((layer, idx) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.015 }}
              className="p-4 rounded-2xl bg-white/80 dark:bg-[#14131a]/85 backdrop-blur-xl border border-white/70 dark:border-white/10 hover:border-[#f02a8f]/50 hover:bg-white dark:hover:bg-[#181722] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-black/[0.06] dark:border-white/[0.08] mb-3">
                  <h3 className="text-xs font-mono font-bold text-[#2c2834] dark:text-[#c8c3cc] tracking-wider group-hover:text-[#f02a8f] transition-colors">
                    {layer.title}
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] group-hover:animate-ping" />
                </div>

                <ul className="space-y-2.5">
                  {layer.items.map((item) => (
                    <li key={item.name} className="group/item">
                      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0f0e13] dark:text-white group-hover/item:text-[#f02a8f] transition-colors">
                        <span>{item.name}</span>
                        {item.highlight && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#f02a8f]/10 text-[#f02a8f] border border-[#f02a8f]/25 font-bold">
                            core
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#524d5b] dark:text-[#8e8897] mt-0.5 line-clamp-2 leading-tight font-normal">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Architecture Diagram Signature Feature */}
        <ArchitectureDiagram />
      </div>
    </section>
  );
};
