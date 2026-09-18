'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Globe, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const ClientReviews: React.FC = () => {
  const reviews = [
    {
      name: 'John',
      role: 'Operations & Product Lead',
      company: 'Return Buddies LLC',
      location: 'New York, USA 🇺🇸',
      project: 'Logistics Admin Dashboard & React Native Mobile App',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'React Native'],
      rating: 5,
      quote:
        'Working from New York with Zylux was seamless. Their 24/7 availability, rapid bug fixes on our React Native app, and high-performance React/Node dashboard exceeded our expectations. Truly a top-tier development partner ready around the clock to help our business grow.',
      highlight: 'Rapid React Native Bug Fixes & 24/7 NYC Collaboration'
    },
    {
      name: 'Tharindu',
      role: 'Managing Director & Founder',
      company: 'Aussie Supplements & Sparkler Gems',
      location: 'Colombo, Sri Lanka 🇱🇰',
      project: 'E-Commerce Storefronts for Supplements & Luxury Jewellery',
      stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Django', 'PostgreSQL'],
      rating: 5,
      quote:
        'Zylux transformed our e-commerce platforms. For both our high-volume supplement distribution and our luxury gem showroom with Sparkler, their Next.js and Django architectures handle heavy ordering without a single hiccup. Our requirements were always their priority, enhanced by their expert suggestions.',
      highlight: 'Extreme Concurrency & Bespoke Luxury E-Commerce'
    },
    {
      name: 'W.P.J. Charya',
      role: 'Lead Systems Architect & Security Specialist',
      company: 'ChronoSentinel & Abdul Fandom',
      location: 'Global Enterprise 🌐',
      project: 'Domain Risk Analyzer & Flash-Sale E-Commerce Platform',
      stack: ['React', 'FastAPI', 'Python', 'API Automation', 'Next.js'],
      rating: 5,
      quote:
        'The level of technical rigor Zylux brought to our ChronoSentinel domain risk analyzer with FastAPI was exceptional. They also delivered the Abdul Fandom e-commerce platform ahead of schedule. When it comes to complex APIs and high-load web systems, Zylux is our first choice.',
      highlight: 'High-Precision Cybersecurity Automation & Next.js'
    }
  ];

  return (
    <section id="reviews" className="py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CLIENT REVIEWS"
          title="What Our Clients Say"
          description="Real feedback from founders and engineering directors across New York, Sri Lanka, and global markets who trust Zylux to build their core digital products."
        />

        {/* 3 Featured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/85 border border-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-2xl hover:border-[#f02a8f]/50 hover:shadow-[0_18px_38px_rgba(240,42,143,0.14)] transition-all flex flex-col justify-between group relative overflow-hidden cursor-default"
            >
              {/* Top Accent Pill */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-black/[0.06]">
                <div className="flex items-center gap-1 group-hover:scale-105 transition-transform origin-left">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ff8a3d] text-[#ff8a3d] transition-transform group-hover:rotate-6" />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#726c7e]">{rev.location}</span>
              </div>

              {/* Quote Body */}
              <div className="space-y-3 flex-1">
                <p className="text-xs sm:text-sm text-[#494452] leading-relaxed italic font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                {/* Highlight Badge */}
                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono bg-[#f02a8f]/10 text-[#f02a8f] border border-[#f02a8f]/20 font-semibold group-hover:border-[#f02a8f]/40 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-[#f02a8f]" />
                    {rev.highlight}
                  </span>
                </div>
              </div>

              {/* Client Info Footer */}
              <div className="pt-5 mt-4 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#524d5b]">{rev.role}</p>
                  <p className="text-[10px] font-mono text-[#726c7e]">{rev.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Worldwide Reach & 24/7 Live Support Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/90 border border-white/70 shadow-[0_12px_35px_rgba(0,0,0,0.05),0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-shadow"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#f02a8f]/10 border border-[#f02a8f]/30 flex items-center justify-center text-[#f02a8f] flex-shrink-0 shadow-xs">
              <Globe className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#25D366]/15 text-[#128C7E] border border-[#25D366]/30 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                  24/7 LIVE SUPPORT & ENGINEERING
                </span>
                <span className="text-xs font-mono text-[#726c7e]">Colombo, Sri Lanka</span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#0f0e13]">
                Open Worldwide for Works & Projects
              </h4>
              <p className="text-xs text-[#524d5b] max-w-xl mt-0.5 leading-relaxed">
                We operate 24/7 to help your business grow in the digital world. Operating across APAC, US (New York), UK, and global time zones.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-stretch sm:self-auto justify-end">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-xs font-bold font-mono bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(240,42,143,0.35)] flex items-center gap-1.5"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
