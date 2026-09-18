'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Server, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

export const CreativeHeroVisual: React.FC = () => {
  const [activeMetricTab, setActiveMetricTab] = useState<'throughput' | 'security' | 'scale'>('throughput');
  const [liveReqs, setLiveReqs] = useState(14820);
  const [liveLatency, setLiveLatency] = useState(38);

  // Micro telemetry simulation for liveliness
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveReqs((prev) => prev + Math.floor(Math.random() * 7) + 1);
      setLiveLatency(36 + Math.floor(Math.random() * 5));
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Dynamic Ambient Neon Glows behind the visual container */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#f02a8f]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#ff6657]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Glass Visual Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-2xl sm:rounded-3xl border border-white/80 bg-white/80 p-2 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_0_35px_rgba(240,42,143,0.12)] backdrop-blur-2xl group overflow-hidden"
      >
        {/* Subtle Top Decorative Terminal Bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-black/[0.06] mb-2 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[#736e7a] hidden sm:inline-block pl-2 border-l border-black/10">
              zylux.core.engine • live-render
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/30 text-[10px] font-mono text-[#f02a8f] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
              SYSTEM OPTIMAL
            </span>
          </div>
        </div>

        {/* The Creative Visual Artwork */}
        <div className="relative aspect-[4/3] xs:aspect-[5/4] sm:aspect-[16/10] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-black/10 bg-[#0d0d10]">
          <Image
            src="/assets/hero-visual.jpg"
            alt="Zylux Software Solutions Next-Gen Digital Product Architecture"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-center transform transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Vignette & Soft Gradient Blends */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Pill: Top Right Innovation Beacon */}
          <div className="absolute top-3 right-3 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-white/90 backdrop-blur-md text-[11px] font-mono text-[#0f0e13] font-semibold shadow-md">
            <Sparkles className="w-3 h-3 text-[#f02a8f]" />
            <span>CLOUD-NATIVE ARTIFACT</span>
          </div>

          {/* Interactive Floating Badge: Top Left Telemetry */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 p-2 sm:p-3 rounded-xl bg-white/92 border border-white/90 backdrop-blur-md shadow-xl max-w-[170px] sm:max-w-[210px]"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-wide text-[#0f0e13] uppercase font-bold">
                Telemetry Active
              </span>
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono text-[#524d5b] space-y-0.5">
              <div className="flex justify-between gap-1.5">
                <span>Latency:</span>
                <span className="text-emerald-600 font-bold">{liveLatency}ms</span>
              </div>
              <div className="flex justify-between gap-1.5">
                <span>Edge Sync:</span>
                <span className="text-[#f02a8f] font-bold">Multi-Region</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Glass Showcase Card: Bottom Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3.5 rounded-xl bg-white/95 border border-white/90 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-[#f02a8f]/10 border border-[#f02a8f]/20 flex items-center justify-center text-[#f02a8f] shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0f0e13] tracking-tight">Engineering Infrastructure</h4>
                  <p className="text-[10px] font-mono text-[#736e7a] hidden xs:block">Distributed & Resilient</p>
                </div>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center gap-1 bg-black/[0.04] p-0.5 rounded-lg text-[9px] sm:text-[10px] font-mono self-stretch sm:self-auto justify-between sm:justify-start">
                <button
                  onClick={() => setActiveMetricTab('throughput')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    activeMetricTab === 'throughput'
                      ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                      : 'text-[#524d5b] hover:text-[#0f0e13]'
                  }`}
                >
                  01 Speed
                </button>
                <button
                  onClick={() => setActiveMetricTab('security')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    activeMetricTab === 'security'
                      ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                      : 'text-[#524d5b] hover:text-[#0f0e13]'
                  }`}
                >
                  02 Security
                </button>
                <button
                  onClick={() => setActiveMetricTab('scale')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    activeMetricTab === 'scale'
                      ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                      : 'text-[#524d5b] hover:text-[#0f0e13]'
                  }`}
                >
                  03 Scale
                </button>
              </div>
            </div>

            {/* Dynamic Metric Display based on Tab */}
            <AnimatePresence mode="wait">
              {activeMetricTab === 'throughput' && (
                <motion.div
                  key="throughput"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-mono"
                >
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[9px] sm:text-[10px] text-[#736e7a] block truncate">Throughput</span>
                    <span className="text-[#0f0e13] font-bold truncate block">{liveReqs.toLocaleString()} req/s</span>
                  </div>
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[9px] sm:text-[10px] text-[#736e7a] block truncate">Load Time</span>
                    <span className="text-emerald-600 font-bold truncate block">&lt; 140ms LCP</span>
                  </div>
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[9px] sm:text-[10px] text-[#736e7a] block truncate">Bundle</span>
                    <span className="text-[#ff6657] font-bold truncate block">Turbopack</span>
                  </div>
                </motion.div>
              )}

              {activeMetricTab === 'security' && (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-3 gap-2 text-[11px] font-mono"
                >
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Compliance</span>
                    <span className="text-[#0f0e13] font-bold">Defensible Auth</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Encryption</span>
                    <span className="text-emerald-600 font-bold">TLS 1.3</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Code Audit</span>
                    <span className="text-[#ff6657] font-bold">CI/CD Gate</span>
                  </div>
                </motion.div>
              )}

              {activeMetricTab === 'scale' && (
                <motion.div
                  key="scale"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-3 gap-2 text-[11px] font-mono"
                >
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Architecture</span>
                    <span className="text-[#0f0e13] font-bold">Microservices</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Auto-Scale</span>
                    <span className="text-emerald-600 font-bold">Zero-Downtime</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/[0.03] border border-black/[0.05]">
                    <span className="text-[10px] text-[#736e7a] block">Database</span>
                    <span className="text-[#ff6657] font-bold">Connection Pool</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
