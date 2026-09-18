'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowUpRight, 
  Mail, 
  Layers, 
  Code2, 
  Sparkles, 
  Send, 
  ChevronRight,
  Clock,
  Zap
} from 'lucide-react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const navCards = [
  {
    num: '01',
    name: 'Work & Projects',
    href: '/work',
    description: '5+ Real production platforms & client case studies',
    badge: 'LIVE WORK',
    icon: Layers,
    pillColor: 'bg-[#f02a8f]/10 text-[#f02a8f] border-[#f02a8f]/20'
  },
  {
    num: '02',
    name: 'Capabilities & Services',
    href: '/services',
    description: 'Web, Mobile, Software, Design & SEO Verticals',
    badge: '5 VERTICALS',
    icon: Code2,
    pillColor: 'bg-[#ff6657]/10 text-[#ff6657] border-[#ff6657]/20'
  },
  {
    num: '03',
    name: 'Company Philosophy',
    href: '/about',
    description: 'Client priority first + Colombo engineering HQ',
    badge: 'COLOMBO HQ',
    icon: Sparkles,
    pillColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20'
  },
  {
    num: '04',
    name: 'Technical Scoping',
    href: '/contact',
    description: '24/7 Live engineering desk & rapid proposals',
    badge: '24/7 DESK',
    icon: Send,
    pillColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
  }
];

const quickShortcuts = [
  { label: 'Return Buddies NYC', href: '/work/return-buddies', tag: 'Flagship' },
  { label: 'Sparkler Gems', href: '/work/sparkler', tag: 'E-Commerce' },
  { label: 'ChronoSentinel', href: '/work/chronosentinel', tag: 'FastAPI' },
  { label: 'Aussie Supplements', href: '/work/aussie-supplements', tag: 'Sri Lanka' }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, pathname }) => {
  const [colomboTime, setColomboTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Colombo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setColomboTime(timeStr);
      } catch {
        setColomboTime('LIVE');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-[#0c0b11]/95 lg:hidden overflow-hidden flex flex-col justify-between backdrop-blur-2xl text-white"
        >
          {/* Ambient Floating Neon Glow Orbs */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(240,42,143,0.25),transparent_70%)] pointer-events-none blur-2xl" 
          />
          <div 
            aria-hidden="true" 
            className="absolute bottom-10 -left-20 w-80 h-80 bg-[radial-gradient(circle,rgba(255,102,87,0.2),transparent_70%)] pointer-events-none blur-2xl" 
          />
          <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none blur-3xl" 
          />

          {/* Top Bar inside Creative Drawer */}
          <div className="relative z-10 px-5 pt-4 pb-3 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-black/20 backdrop-blur-md">
            <Link href="/" onClick={onClose} className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center group-hover:border-[#f02a8f]/60 transition-colors shadow-xs">
                <Image
                  src="/assets/logo-icon.png"
                  alt="Zylux"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-base font-black tracking-tight text-white block leading-tight">
                  ZYLUX
                </span>
                <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STUDIO ACTIVE
                </span>
              </div>
            </Link>

            {/* Time & Close Button */}
            <div className="flex items-center gap-2.5">
              {colomboTime && (
                <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono text-[#b3adbc]">
                  <Clock className="w-3 h-3 text-[#f02a8f]" />
                  <span>{colomboTime}</span>
                </div>
              )}

              <motion.button
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ rotate: 180, scale: 0.9 }}
                onClick={onClose}
                aria-label="Close Navigation Menu"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#f02a8f]/50 hover:bg-[#f02a8f]/10 transition-colors bg-white/[0.06] backdrop-blur-md active:scale-95"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Scrollable Center Body */}
          <div className="relative z-10 flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-none">
            {/* Live Telemetry Banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-transparent border border-white/10 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="text-[10px] font-mono text-[#dcd6e4] truncate font-semibold">
                  COLOMBO HQ • ACTIVE WORLDWIDE
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0 font-bold">
                24/7 ONLINE
              </span>
            </motion.div>

            {/* Navigation Cards with Staggered Entrance */}
            <div className="space-y-2.5">
              {navCards.map((card, idx) => {
                const isActive = pathname === card.href || (card.href !== '/' && pathname?.startsWith(card.href));
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={card.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.07, duration: 0.35, ease: 'easeOut' }}
                  >
                    <Link
                      href={card.href}
                      onClick={onClose}
                      className={`group relative p-3.5 rounded-2xl transition-all duration-300 flex items-center justify-between gap-3 border overflow-hidden ${
                        isActive
                          ? 'bg-white/[0.12] border-[#f02a8f]/60 shadow-[0_4px_25px_rgba(240,42,143,0.25)]'
                          : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      {/* Left glowing edge bar if active */}
                      {isActive && (
                        <span 
                          aria-hidden="true" 
                          className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#f02a8f] to-[#ff6657]"
                        />
                      )}

                      <div className="flex items-center gap-3 min-w-0">
                        {/* Icon Container */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-110 ${
                          isActive
                            ? 'bg-gradient-to-br from-[#f02a8f] to-[#ff6657] border-white/30 text-white shadow-md'
                            : 'bg-white/[0.08] border-white/10 text-[#d4cddc] group-hover:text-white'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>

                        {/* Text block */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono text-[#8a8494] font-bold">
                              {card.num}
                            </span>
                            <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded border font-semibold ${card.pillColor}`}>
                              {card.badge}
                            </span>
                          </div>
                          <h3 className={`text-sm sm:text-base font-bold tracking-tight truncate leading-tight ${
                            isActive ? 'text-white font-extrabold' : 'text-[#ece7f2] group-hover:text-white'
                          }`}>
                            {card.name}
                          </h3>
                          <p className="text-[10px] text-[#9a94a4] truncate mt-0.5">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      {/* Right indicator arrow */}
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                        isActive
                          ? 'bg-[#f02a8f]/20 border-[#f02a8f]/40 text-[#f02a8f]'
                          : 'bg-white/[0.04] border-white/10 text-white/40 group-hover:text-white group-hover:translate-x-0.5'
                      }`}>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Case Study Shortcuts Dock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="pt-2"
            >
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[10px] font-mono text-[#8a8494] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#ff6657]" />
                  QUICK PROJECT SHORTCUTS
                </span>
                <Link
                  href="/work"
                  onClick={onClose}
                  className="text-[10px] font-mono text-[#f02a8f] hover:underline"
                >
                  View all 5 →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {quickShortcuts.map((sc, i) => (
                  <Link
                    key={i}
                    href={sc.href}
                    onClick={onClose}
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#f02a8f]/40 hover:bg-white/[0.08] transition-all flex items-center justify-between gap-1.5 group"
                  >
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-[#ece7f2] group-hover:text-white block truncate leading-tight">
                        {sc.label}
                      </span>
                      <span className="text-[9px] font-mono text-[#8a8494] block">
                        {sc.tag}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-[#8a8494] group-hover:text-[#f02a8f] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Creative Bottom Action & Direct WhatsApp Dock */}
          <div className="relative z-10 px-5 pt-3 pb-5 border-t border-white/[0.08] bg-black/40 backdrop-blur-xl shrink-0 space-y-2.5">
            {/* Primary Scoping Button */}
            <Link
              href="/contact"
              onClick={onClose}
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657] text-white font-bold text-xs font-mono tracking-wide text-center flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(240,42,143,0.4)] min-h-[44px]"
            >
              <span>START TECHNICAL SCOPING</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Direct WhatsApp Quick Chat Bar */}
            <a
              href="https://wa.me/94756388329?text=Hello%20Zylux%20Software%20Solutions%2C%20I%20am%20browsing%20your%20mobile%20site%20and%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:bg-emerald-500/25 active:scale-[0.99] transition-all min-h-[44px]"
              title="Chat directly on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Desk (+94 75 638 8329)</span>
            </a>

            {/* Social Channel Icons */}
            <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-[#8a8494]">
              <span className="text-[10px]">CONNECT 24/7:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/94756388329?text=Hello%20Zylux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-[#25D366] flex items-center justify-center hover:scale-105 hover:border-emerald-500/50 transition-all"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61585045107718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-[#1877F2] flex items-center justify-center hover:scale-105 hover:border-blue-500/50 transition-all"
                  title="Facebook"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zylux-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-[#0A66C2] flex items-center justify-center hover:scale-105 hover:border-sky-500/50 transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 text-[#f02a8f] flex items-center justify-center hover:scale-105 hover:border-[#f02a8f]/50 transition-all"
                  title="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
