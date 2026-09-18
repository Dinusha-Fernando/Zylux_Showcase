'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const ClientCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="p-8 sm:p-12 rounded-3xl bg-white/85 border border-white/70 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-2xl text-center relative overflow-hidden"
        >
          {/* Subtle animated ambient light refractions in corner */}
          <motion.div
            animate={{
              opacity: [0.4, 0.75, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-[#f02a8f]/15 to-transparent blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              opacity: [0.4, 0.75, 0.4],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-t from-[#ff6657]/15 to-transparent blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/30 text-[11px] font-mono text-[#ff6657] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
              <span>INITIAL CONSULTATION • 24/7 LIVE COLOMBO DESK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f0e13] tracking-tight leading-[1.15] max-w-2xl mx-auto">
              Have a product in mind? <br />
              <span className="zylux-gradient-text">
                Let&apos;s build it together.
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-[#524d5b] max-w-md mx-auto leading-relaxed">
              Tell us what you&apos;re building. We evaluate your requirements, suggest the right architecture, and send a clear roadmap within 24 hours.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Button
                  href="/contact"
                  size="md"
                  variant="primary"
                  data-cursor="LET'S BUILD →"
                  className="text-sm px-7 py-3 shadow-lg flex items-center gap-1.5"
                >
                  <span>Start Technical Scoping</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] font-bold text-xs sm:text-sm hover:bg-[#25D366]/25 transition-all shadow-xs"
                  title="Direct WhatsApp Chat"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
