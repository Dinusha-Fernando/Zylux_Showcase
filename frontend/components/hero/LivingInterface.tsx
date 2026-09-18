'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, Cpu, Globe, Smartphone, ShieldCheck } from 'lucide-react';

export const LivingInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'orders' | 'throughput'>('analytics');
  const [metricCounter, setMetricCounter] = useState(14820);
  const [latency, setLatency] = useState(42);

  // Subtle real-time simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetricCounter((prev) => prev + Math.floor(Math.random() * 5) + 1);
      setLatency(38 + Math.floor(Math.random() * 8));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-6 sm:mt-8">
      {/* Ambient background glow: Deep plum and magenta aura */}
      <div className="absolute -inset-2 bg-gradient-to-b from-[#f02a8f]/12 via-[#2b222d]/40 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

      {/* Top Root Node: ZYLUX System Indicator */}
      <div className="flex flex-col items-center mb-1.5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1d1c22] border border-[#f02a8f]/35 text-[11px] font-mono text-[#ff6657] shadow-[0_0_12px_rgba(240,42,143,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
          <span className="font-bold tracking-wider">ZYLUX PRODUCT CORE</span>
        </div>
        <div className="w-px h-3 bg-gradient-to-b from-[#f02a8f]/60 to-white/15 my-0.5" />
      </div>

      {/* Central Glassmorphic Dashboard Window */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-xl bg-[#1d1c22]/90 border border-white/[0.10] p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-[#918c96] ml-2 hidden sm:inline-block">
              zylux.engine.v2 • live telemetry
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className="inline-flex items-center gap-1 text-[#ff6657] bg-[#ff6657]/10 px-2 py-0.5 rounded-full border border-[#ff6657]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-pulse" />
              HEALTHY ({latency}ms)
            </span>
            <span className="text-[#918c96] hidden md:inline-block">99.99% UPTIME</span>
          </div>
        </div>

        {/* Interactive Switcher */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#101014] rounded-lg mb-3 border border-white/[0.06] text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`py-1 px-2 rounded-md transition-all font-medium ${
              activeTab === 'analytics'
                ? 'bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white shadow-[0_0_12px_rgba(240,42,143,0.35)] font-bold'
                : 'text-[#c8c3cc] hover:text-white'
            }`}
          >
            01 Analytics
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-1 px-2 rounded-md transition-all font-medium ${
              activeTab === 'orders'
                ? 'bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white shadow-[0_0_12px_rgba(240,42,143,0.35)] font-bold'
                : 'text-[#c8c3cc] hover:text-white'
            }`}
          >
            02 Orders
          </button>
          <button
            onClick={() => setActiveTab('throughput')}
            className={`py-1 px-2 rounded-md transition-all font-medium ${
              activeTab === 'throughput'
                ? 'bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white shadow-[0_0_12px_rgba(240,42,143,0.35)] font-bold'
                : 'text-[#c8c3cc] hover:text-white'
            }`}
          >
            03 Throughput
          </button>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-3">
          <div className="p-2 sm:p-2.5 rounded-lg bg-[#101014]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#918c96]">TOTAL REQUESTS</span>
            <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
              {metricCounter.toLocaleString()}
            </span>
            <span className="text-[10px] text-[#ff6657] mt-1 font-mono flex items-center gap-0.5">
              <ArrowUpRight className="w-2.5 h-2.5 text-[#f02a8f]" /> +14.2% today
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#101014]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#918c96]">ACTIVE SESSIONS</span>
            <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
              2,841
            </span>
            <span className="text-[10px] text-emerald-400 mt-1 font-mono flex items-center gap-0.5">
              <ShieldCheck className="w-2.5 h-2.5" /> Verified
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#101014]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#918c96]">AVG RESPONSE</span>
            <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
              {latency}ms
            </span>
            <span className="text-[10px] text-[#ff6657] mt-1 font-mono flex items-center gap-0.5">
              Edge 94%
            </span>
          </div>

          <div className="p-2 sm:p-2.5 rounded-lg bg-[#101014]/80 border border-white/[0.06] flex flex-col">
            <span className="text-[10px] font-mono text-[#918c96]">SUCCESS RATE</span>
            <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
              99.98%
            </span>
            <span className="text-[10px] text-[#918c96] mt-1 font-mono">
              0 dropouts
            </span>
          </div>
        </div>

        {/* Visualized Waveform / Graph bar */}
        <div className="p-2.5 rounded-lg bg-[#101014]/60 border border-white/[0.06]">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#c8c3cc] mb-2">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-[#f02a8f]" /> Realtime Event Pipeline
            </span>
            <span className="text-[#ff6657] font-semibold">3.2 kops/sec</span>
          </div>

          {/* Animated bars */}
          <div className="flex items-end gap-1 h-9 pt-1">
            {[45, 62, 58, 75, 90, 68, 82, 95, 70, 85, 92, 78, 65, 88, 96, 84, 91, 74, 86, 94, 80, 89, 97, 85, 92].map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-[#f02a8f]/25 via-[#f02a8f] to-[#ff6657]"
                style={{ height: `${height}%` }}
                animate={{
                  height: [
                    `${height}%`,
                    `${Math.min(100, Math.max(20, height + (i % 2 === 0 ? 12 : -12)))}%`,
                    `${height}%`
                  ]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Downward Stream Connectors */}
      <div className="flex justify-center my-1.5">
        <div className="w-px h-3 bg-gradient-to-b from-[#f02a8f]/50 to-white/15" />
      </div>

      {/* Three Target Nodes: API, WEB, MOBILE */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
        {/* API Node */}
        <div className="p-2 rounded-lg bg-[#1d1c22] border border-white/10 hover:border-[#f02a8f]/40 transition-colors flex flex-col items-center group">
          <div className="w-6 h-6 rounded-md bg-[#101014] border border-white/10 flex items-center justify-center text-[#c8c3cc] group-hover:text-[#ff6657] mb-1 group-hover:scale-105 transition-all">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono font-bold text-white">API</span>
          <span className="text-[10px] text-[#918c96] hidden sm:inline">REST / GraphQL</span>
        </div>

        {/* WEB Node */}
        <div className="p-2 rounded-lg bg-[#1d1c22] border border-white/10 hover:border-[#f02a8f]/40 transition-colors flex flex-col items-center group">
          <div className="w-6 h-6 rounded-md bg-[#101014] border border-white/10 flex items-center justify-center text-[#c8c3cc] group-hover:text-[#ff6657] mb-1 group-hover:scale-105 transition-all">
            <Globe className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono font-bold text-white">WEB</span>
          <span className="text-[10px] text-[#918c96] hidden sm:inline">Next.js / TS</span>
        </div>

        {/* MOBILE Node */}
        <div className="p-2 rounded-lg bg-[#1d1c22] border border-white/10 hover:border-[#f02a8f]/40 transition-colors flex flex-col items-center group">
          <div className="w-6 h-6 rounded-md bg-[#101014] border border-white/10 flex items-center justify-center text-[#c8c3cc] group-hover:text-[#ff6657] mb-1 group-hover:scale-105 transition-all">
            <Smartphone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono font-bold text-white">MOBILE</span>
          <span className="text-[10px] text-[#918c96] hidden sm:inline">Flutter / React Native</span>
        </div>
      </div>
    </div>
  );
};
