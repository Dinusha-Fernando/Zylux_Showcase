'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, 
  Cpu, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Server, 
  Database, 
  ArrowUpRight, 
  Layers, 
  Sparkles, 
  Lock,
  Search,
  Sliders,
  Check
} from 'lucide-react';

interface CapabilityCanvasPreviewProps {
  serviceId: string;
}

export const CapabilityCanvasPreview: React.FC<CapabilityCanvasPreviewProps> = ({ serviceId }) => {
  const [webViewMode, setWebViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [selectedColor, setSelectedColor] = useState<string>('#f02a8f');
  const [activeEndpoint, setActiveEndpoint] = useState<number>(0);

  return (
    <div className="relative rounded-2xl sm:rounded-3xl bg-[#0e0d13] border border-white/15 p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_25px_rgba(240,42,143,0.1)] overflow-hidden text-white min-h-[300px] sm:min-h-[340px] flex flex-col justify-between">
      {/* Ambient glowing backdrop */}
      <div 
        aria-hidden="true"
        className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-to-br from-[#f02a8f]/20 via-[#ff6657]/15 to-transparent rounded-full blur-2xl pointer-events-none"
      />
      <div 
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-56 h-56 bg-gradient-to-tr from-[#7928ca]/20 via-[#f02a8f]/10 to-transparent rounded-full blur-2xl pointer-events-none"
      />

      {/* Top Window Chrome Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 mb-3 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[#8e8897] text-[10px] hidden sm:inline-block pl-1.5 border-l border-white/10">
            zylux.studio • {serviceId}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[9px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE TELEMETRY
          </span>
        </div>
      </div>

      {/* Dynamic Visual Stage depending on serviceId */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* =========================================================================
              01 • WEB DEVELOPMENT & PLATFORMS
              ========================================================================= */}
          {serviceId === 'web-platforms' && (
            <motion.div
              key="web-platforms"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* Browser Preview Container */}
              <div className="rounded-xl bg-[#16151d] border border-white/10 p-2.5 sm:p-3 shadow-inner">
                {/* Browser Address Bar & Responsive Mode Toggles */}
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-white/[0.08] text-[10px] font-mono">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/40 text-[#c8c3cc] text-[9px] border border-white/5 flex-1 max-w-[200px]">
                    <Lock className="w-2.5 h-2.5 text-emerald-400" />
                    <span className="text-emerald-400">https://</span>
                    <span className="truncate text-white font-medium">client-platform.zylux.app</span>
                  </div>

                  <div className="flex items-center gap-0.5 bg-black/30 p-0.5 rounded-lg border border-white/5">
                    <button
                      onClick={() => setWebViewMode('desktop')}
                      className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                        webViewMode === 'desktop' ? 'bg-[#f02a8f] text-white font-bold' : 'text-[#8e8897] hover:text-white'
                      }`}
                    >
                      Desktop
                    </button>
                    <button
                      onClick={() => setWebViewMode('tablet')}
                      className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                        webViewMode === 'tablet' ? 'bg-[#f02a8f] text-white font-bold' : 'text-[#8e8897] hover:text-white'
                      }`}
                    >
                      Tablet
                    </button>
                    <button
                      onClick={() => setWebViewMode('mobile')}
                      className={`px-1.5 py-0.5 rounded text-[9px] transition-colors ${
                        webViewMode === 'mobile' ? 'bg-[#f02a8f] text-white font-bold' : 'text-[#8e8897] hover:text-white'
                      }`}
                    >
                      Mobile
                    </button>
                  </div>
                </div>

                {/* Simulated Web Application Canvas */}
                <div className="p-2.5 rounded-lg bg-gradient-to-b from-[#1c1a24] to-[#121118] border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-[#f02a8f] to-[#ff6657] flex items-center justify-center font-black text-[10px]">
                        Z
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Next.js 16 Production App</div>
                        <div className="text-[9px] text-[#8e8897]">Server-Side Rendered (SSR)</div>
                      </div>
                    </div>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[9px] font-mono font-bold">
                      240 FPS
                    </span>
                  </div>

                  {/* Visual Skeleton Blocks */}
                  <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                    <div className="h-11 rounded-lg bg-white/5 border border-white/5 p-1.5 flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-[#8e8897]">CONVERSION</div>
                      <div className="text-xs font-bold text-[#ff6657]">+48.6%</div>
                    </div>
                    <div className="h-11 rounded-lg bg-white/5 border border-white/5 p-1.5 flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-[#8e8897]">LATENCY</div>
                      <div className="text-xs font-bold text-emerald-400">12ms</div>
                    </div>
                    <div className="h-11 rounded-lg bg-white/5 border border-white/5 p-1.5 flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-[#8e8897]">UPTIME</div>
                      <div className="text-xs font-bold text-white">99.99%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lighthouse Speed Metrics Ribbon */}
              <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-sm">99</div>
                  <div className="text-[8px] text-[#8e8897] uppercase">Speed</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-sm">100</div>
                  <div className="text-[8px] text-[#8e8897] uppercase">Access</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-sm">100</div>
                  <div className="text-[8px] text-[#8e8897] uppercase">Practice</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-extrabold text-sm">100</div>
                  <div className="text-[8px] text-[#8e8897] uppercase">SEO</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              02 • CUSTOM SOFTWARE DEVELOPMENT
              ========================================================================= */}
          {serviceId === 'software-systems' && (
            <motion.div
              key="software-systems"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* API Concurrency Terminal Cockpit */}
              <div className="rounded-xl bg-[#14131a] border border-white/10 p-2.5 sm:p-3 shadow-inner space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8897]">
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <Server className="w-3 h-3 text-[#ff6657]" />
                    FastAPI / Django Microservices
                  </span>
                  <span className="text-emerald-400 font-bold">10k Req/s</span>
                </div>

                {/* Simulated API Endpoint Switches */}
                <div className="space-y-1">
                  {[
                    { method: 'POST', endpoint: '/api/v2/workflow/automate', status: '200 OK', time: '14ms' },
                    { method: 'GET', endpoint: '/api/v2/analytics/stream', status: '200 OK', time: '9ms' },
                    { method: 'PUT', endpoint: '/api/v2/database/sync', status: '200 OK', time: '21ms' }
                  ].map((ep, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveEndpoint(idx)}
                      className={`p-1.5 rounded-lg border flex items-center justify-between text-[11px] font-mono cursor-pointer transition-all ${
                        activeEndpoint === idx
                          ? 'bg-[#f02a8f]/15 border-[#f02a8f]/60 text-white shadow-xs'
                          : 'bg-white/[0.02] border-white/5 text-[#8e8897] hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0 pr-2">
                        <span className={`px-1 py-0.2 rounded text-[8px] font-extrabold shrink-0 ${
                          ep.method === 'POST' ? 'bg-[#f02a8f] text-white' : ep.method === 'GET' ? 'bg-emerald-500 text-black' : 'bg-[#ff6657] text-white'
                        }`}>
                          {ep.method}
                        </span>
                        <span className="text-[10px] text-white font-mono truncate">{ep.endpoint}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] shrink-0">
                        <span className="text-emerald-400 font-bold">{ep.status}</span>
                        <span className="text-[#8e8897]">{ep.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Database Telemetry Bar */}
                <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-[#f02a8f]" />
                    <span className="text-[#c8c3cc]">PostgreSQL Connection Pool</span>
                  </div>
                  <span className="text-emerald-400 font-bold">99.4% Cache Hit</span>
                </div>
              </div>

              {/* SLA Band */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-white font-bold text-xs">Zero Crash</div>
                  <div className="text-[8px] text-[#8e8897]">Concurrency</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#f02a8f] font-bold text-xs">RBAC &amp; JWT</div>
                  <div className="text-[8px] text-[#8e8897]">Enterprise Auth</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#ff6657] font-bold text-xs">Dockerized</div>
                  <div className="text-[8px] text-[#8e8897]">Cloud CI/CD</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              03 • MOBILE APP DEVELOPMENT
              ========================================================================= */}
          {serviceId === 'mobile-products' && (
            <motion.div
              key="mobile-products"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="rounded-xl bg-[#14131a] border border-white/10 p-3 shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-[#f02a8f]" />
                    <span className="text-[11px] font-mono text-white font-semibold">
                      iOS &amp; Android Native Engines
                    </span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
                    60 FPS ProMotion
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-gradient-to-br from-[#1c1a26] to-[#111018] border border-white/10 space-y-2">
                  <div className="p-1.5 rounded-lg bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-ping" />
                      <div>
                        <div className="text-[10px] font-bold text-white">Zylux Mobile Engine</div>
                        <div className="text-[8px] text-[#8e8897]">Offline data synced seamlessly</div>
                      </div>
                    </div>
                    <span className="text-[8px] text-[#ff6657] font-bold">Active</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold text-white">Biometrics</div>
                        <div className="text-[8px] text-[#8e8897]">FaceID &amp; TouchID</div>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#ff6657] shrink-0" />
                      <div>
                        <div className="text-[10px] font-bold text-white">Zero Latency</div>
                        <div className="text-[8px] text-[#8e8897]">SQLite Local</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-white font-bold text-xs">App Store</div>
                  <div className="text-[8px] text-[#8e8897]">Submission Prep</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-xs">Google Play</div>
                  <div className="text-[8px] text-[#8e8897]">Production Ready</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#f02a8f] font-bold text-xs">React Native</div>
                  <div className="text-[8px] text-[#8e8897]">Shared Engine</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              04 • GRAPHIC DESIGN & BRAND IDENTITY
              ========================================================================= */}
          {serviceId === 'graphic-design' && (
            <motion.div
              key="graphic-design"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="rounded-xl bg-[#14131a] border border-white/10 p-3 shadow-inner space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-white font-semibold text-[11px]">
                    <Palette className="w-3.5 h-3.5 text-[#f02a8f]" />
                    Vector Branding &amp; Bespoke UI System
                  </span>
                  <span className="text-[9px] text-[#ff6657] font-bold">Figma Master</span>
                </div>

                <div>
                  <div className="text-[9px] font-mono text-[#8e8897] mb-1.5 flex items-center justify-between">
                    <span>PALETTE TOKENS:</span>
                    <span className="text-white font-bold">{selectedColor}</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[
                      { hex: '#f02a8f', name: 'Zylux Pink' },
                      { hex: '#ff6657', name: 'Vibrant Coral' },
                      { hex: '#ff8a3d', name: 'Amber Gold' },
                      { hex: '#10b981', name: 'Emerald' },
                      { hex: '#0f0e13', name: 'Obsidian' }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setSelectedColor(col.hex)}
                        className={`h-9 rounded-lg p-1 border flex flex-col justify-between transition-all ${
                          selectedColor === col.hex
                            ? 'border-white scale-105 shadow-md ring-1 ring-white/20'
                            : 'border-white/10 hover:border-white/40'
                        }`}
                        style={{ backgroundColor: col.hex }}
                      >
                        <span className="text-[8px] font-mono font-bold text-white drop-shadow-md">
                          {selectedColor === col.hex ? '✓' : ''}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div 
                  className="p-2.5 rounded-lg border transition-colors flex items-center justify-between"
                  style={{ backgroundColor: `${selectedColor}15`, borderColor: `${selectedColor}40` }}
                >
                  <div>
                    <div className="text-xs font-bold tracking-tight text-white">Unique Visual Identity</div>
                    <div className="text-[9px] font-mono text-[#c8c3cc]">Logos • Social Kits • Figma UI/UX</div>
                  </div>
                  <div className="px-2 py-0.5 rounded-md bg-black/40 border border-white/10 text-[9px] font-mono text-white font-bold">
                    SVG • Print Ready
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#f02a8f] font-bold text-xs">100% Unique</div>
                  <div className="text-[8px] text-[#8e8897]">No Templates</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-white font-bold text-xs">Full Vectors</div>
                  <div className="text-[8px] text-[#8e8897]">SVG, AI, PDF</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#ff6657] font-bold text-xs">Brand Guide</div>
                  <div className="text-[8px] text-[#8e8897]">Specs &amp; Rules</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* =========================================================================
              05 • SOCIAL MEDIA MANAGEMENT & SEO
              ========================================================================= */}
          {serviceId === 'digital-marketing-seo' && (
            <motion.div
              key="digital-marketing-seo"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="rounded-xl bg-[#14131a] border border-white/10 p-3 shadow-inner space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.08] text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-white font-semibold text-[11px]">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Organic Google SERP &amp; Conversion Growth
                  </span>
                  <span className="text-[9px] text-emerald-400 font-bold">Top 1 Index</span>
                </div>

                <div className="p-2 rounded-lg bg-black/40 border border-white/10 space-y-0.5">
                  <div className="flex items-center gap-1 text-[9px] font-mono text-[#8e8897]">
                    <span className="text-emerald-400">google.com</span>
                    <span>› your-business › solutions</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#f02a8f]">
                    Your Brand — Best-in-Class Digital Solutions
                  </div>
                  <p className="text-[9px] text-[#c8c3cc] leading-snug">
                    Custom built software platform ranked #1 on Google for high-intent search keywords. Rapid page speed verified.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
                    <span className="text-[8px] text-emerald-400 uppercase font-semibold">IMPRESSIONS</span>
                    <span className="text-base font-black text-white">+384%</span>
                    <span className="text-[8px] text-[#8e8897]">30-day index surge</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#f02a8f]/10 border border-[#f02a8f]/20 flex flex-col justify-between">
                    <span className="text-[8px] text-[#f02a8f] uppercase font-semibold">ENGAGEMENT</span>
                    <span className="text-base font-black text-white">14.8k</span>
                    <span className="text-[8px] text-[#8e8897]">Social audience</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-mono">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-emerald-400 font-bold text-xs">#1 Ranked</div>
                  <div className="text-[8px] text-[#8e8897]">Keywords</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-white font-bold text-xs">Core Vitals</div>
                  <div className="text-[8px] text-[#8e8897]">All Green</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="text-[#f02a8f] font-bold text-xs">ROAS Lift</div>
                  <div className="text-[8px] text-[#8e8897]">Conversion Ads</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Live System Indicator Bar */}
      <div className="relative z-10 pt-2.5 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8e8897]">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>Production-Grade Architecture</span>
        </div>
        <span className="text-[#ff6657] font-semibold">24/7 Global HQ</span>
      </div>
    </div>
  );
};
