'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/work/ProjectCard';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  Star, 
  MessageSquare, 
  Globe2, 
  Cpu, 
  Layers, 
  Clock, 
  Filter
} from 'lucide-react';

const categories = [
  { id: 'All', label: 'All Systems', count: 5 },
  { id: 'Web Platforms', label: 'Web Platforms', count: 3 },
  { id: 'Software Systems', label: 'Software Systems', count: 2 },
  { id: 'E-Commerce', label: 'E-Commerce Platforms', count: 3 }
];

const popularTechs = [
  'Next.js',
  'React',
  'React Native',
  'Django',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Tailwind CSS'
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Find flagship project for spotlight (Return Buddies or ChronoSentinel)
  const flagshipProject = useMemo(() => {
    return projectsData.find(p => p.slug === 'return-buddies') || projectsData[0];
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === 'E-Commerce') {
        matchesCategory = 
          project.slug === 'abdul-fandom' || 
          project.slug === 'aussie-supplements' || 
          project.slug === 'sparkler';
      } else if (selectedCategory !== 'All') {
        matchesCategory = project.category === selectedCategory;
      }

      // Tech match
      const matchesTech = selectedTech 
        ? project.technologies.some(t => t.toLowerCase() === selectedTech.toLowerCase())
        : true;

      // Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.technologies.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  return (
    <div className="py-8 md:py-14 relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(240,42,143,0.12),rgba(255,102,87,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f0e13] mb-4 leading-tight">
            Engineered for <span className="zylux-gradient-text">Speed, Scale</span> & Measurable Impact
          </h1>
          <p className="text-sm sm:text-base text-[#4a4552] leading-relaxed max-w-2xl mx-auto">
            We don&apos;t showcase theoretical concepts or abandonware. Every project below is a real, high-performance platform engineered with latest technologies, tailored strictly to client requirements.
          </p>

          {/* Live Studio Telemetry Bar with Staggered Entrance */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-black/[0.08]">
            {[
              { val: '5', label: 'Production Systems', color: 'text-[#0f0e13]' },
              { val: '100%', label: 'On-Time Delivery', color: 'text-[#f02a8f]' },
              { val: 'USA & GLOBAL', label: 'Global Reach', color: 'text-[#ff6657]' },
              { val: '24/7', label: 'Live Engineering', color: 'text-emerald-600', beacon: true },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="p-3 rounded-xl bg-white/80 border border-black/[0.08] text-center shadow-xs backdrop-blur-sm hover:border-[#f02a8f]/30 transition-all cursor-default"
              >
                {stat.beacon ? (
                  <div className="inline-flex items-center gap-1.5 justify-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`text-xl sm:text-2xl font-black ${stat.color}`}>{stat.val}</span>
                  </div>
                ) : (
                  <span className={`text-xl sm:text-2xl font-black ${stat.color} block`}>{stat.val}</span>
                )}
                <span className="text-[10px] sm:text-[11px] font-mono text-[#736e7a] uppercase tracking-wider block mt-0.5">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Flagship Spotlight */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 relative rounded-3xl bg-white/85 border border-white/80 p-6 sm:p-8 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl hover:shadow-[0_25px_60px_rgba(240,42,143,0.1)] transition-shadow"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(240,42,143,0.12),transparent_70%)] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
              {/* Left Column: Spotlight Details */}
              <div className="lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#f02a8f]/10 text-[#f02a8f] border border-[#f02a8f]/25">
                    FLAGSHIP CASE STUDY
                  </span>
                  <span className="text-xs font-mono text-[#736e7a]">
                    {flagshipProject.client}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f0e13] tracking-tight leading-snug">
                  {flagshipProject.title}: {flagshipProject.tagline}
                </h2>

                <p className="text-xs sm:text-sm text-[#4a4552] leading-relaxed">
                  {flagshipProject.summary}
                </p>

                {/* Metrics Highlight */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 py-2">
                  {flagshipProject.metrics.map((m, idx) => (
                    <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white/90 border border-black/[0.06] shadow-xs">
                      <span className="text-sm sm:text-lg font-bold text-[#0f0e13] block truncate">
                        {m.value}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-[#736e7a] block truncate">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {flagshipProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/80 border border-black/[0.08] text-[#2c2834]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Testimonial Quote Snippet */}
                {flagshipProject.testimonial && (
                  <div className="p-3 rounded-xl bg-white/70 border-l-2 border-[#f02a8f] text-xs text-[#524d5b] italic shadow-xs">
                    &ldquo;{flagshipProject.testimonial.quote}&rdquo;
                    <span className="block not-italic text-[10px] font-mono text-[#f02a8f] font-semibold mt-1">
                      — {flagshipProject.testimonial.author} ({flagshipProject.testimonial.role})
                    </span>
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${flagshipProject.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white shadow-[0_4px_20px_rgba(240,42,143,0.3)] hover:opacity-95 transition-all"
                  >
                    <span>Explore Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20saw%20your%20Return%20Buddies%20project%20and%20want%20to%20discuss%20a%20similar%20system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/20 font-semibold transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup Showcase */}
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-2xl overflow-hidden border border-black/10 bg-[#0d0d12] shadow-xl group">
                  <div className="flex items-center justify-between px-3 py-1.5 bg-white/90 border-b border-black/[0.06] text-[9px] font-mono text-[#736e7a]">
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="truncate max-w-[150px] sm:max-w-none">return-buddies-admin.zylux.cloud</span>
                    </div>
                    <span className="text-emerald-600 font-semibold truncate ml-2">NYC PRODUCTION</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={flagshipProject.image || '/projects/return-buddies.jpg'}
                      alt={`${flagshipProject.title} Preview`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center justify-between gap-1.5 text-[10px] sm:text-xs font-mono">
                      <span className="px-2 py-0.5 sm:py-1 rounded bg-white/90 backdrop-blur-md border border-white/80 text-[#0f0e13] font-semibold truncate max-w-[180px] sm:max-w-none">
                        React + Node + Express + MongoDB
                      </span>
                      <span className="px-2 py-0.5 sm:py-1 rounded bg-white/90 backdrop-blur-md border border-white/80 text-emerald-700 font-semibold truncate max-w-[140px] sm:max-w-none">
                        React Native App
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Interactive Filter & Search Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-black/[0.08]">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSelectedTech(null); // Reset tech filter
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                        : 'bg-white/80 text-[#524d5b] border border-black/10 hover:text-[#0f0e13] hover:border-black/20'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/20 text-white' : 'bg-black/5 text-[#736e7a]'
                    }`}>
                      {cat.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-auto min-w-0 md:min-w-[280px]">
              <Search className="w-3.5 h-3.5 text-[#918c96] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech, client, keyword..."
                className="w-full pl-9 pr-3 py-2 sm:py-1.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-xs text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#918c96] hover:text-[#0f0e13] p-1"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Quick Technology Chips Filter */}
          <div className="flex items-center flex-wrap gap-1.5 pt-1">
            <span className="text-[10px] font-mono text-[#736e7a] flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-[#f02a8f]" />
              FILTER BY TECH:
            </span>
            {popularTechs.map((tech) => {
              const isSelected = selectedTech?.toLowerCase() === tech.toLowerCase();
              return (
                <motion.button
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(isSelected ? null : tech)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    isSelected
                      ? 'bg-[#f02a8f] text-white font-bold border border-[#f02a8f]'
                      : 'bg-white/80 text-[#524d5b] border border-black/10 hover:text-[#0f0e13]'
                  }`}
                >
                  {tech}
                </motion.button>
              );
            })}
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="text-[10px] font-mono text-[#f02a8f] hover:underline ml-2 font-bold"
              >
                Reset Tech
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(selectedCategory !== 'All' || selectedTech || searchQuery) && (
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-[#736e7a]">
            <span>
              Showing {filteredProjects.length} of {projectsData.length} production platforms
              {selectedTech && <> with <span className="text-[#0f0e13] font-semibold">{selectedTech}</span></>}
              {searchQuery && <> matching &quot;<span className="text-[#0f0e13] font-semibold">{searchQuery}</span>&quot;</>}
            </span>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTech(null);
                setSearchQuery('');
              }}
              className="text-[#f02a8f] hover:underline font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-white/80 border border-black/10 space-y-3 shadow-xs">
            <Layers className="w-8 h-8 text-[#918c96] mx-auto opacity-50" />
            <h3 className="text-base font-bold text-[#0f0e13]">No projects found</h3>
            <p className="text-xs text-[#524d5b] max-w-sm mx-auto">
              No projects matched your exact filter combination. Try clearing some filters or searching for another keyword.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTech(null);
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1 text-xs font-mono text-[#f02a8f] hover:underline pt-2 font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Verified Client Testimonials Section */}
        <div className="mt-16 pt-10 border-t border-black/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block mb-1">
              PROVEN RESULTS • CLIENT VOICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f0e13] tracking-tight">
              Direct Feedback from Shipped Deployments
            </h2>
            <p className="text-xs sm:text-sm text-[#524d5b] mt-1">
              Read how our focus on client requirements paired with our architectural suggestions drives tangible success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Review 1: Tharindu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] leading-relaxed italic">
                  &ldquo;Zylux built our complete e-commerce distribution platform using Next.js and Django. Their 24/7 availability and attention to our custom wholesale pricing tiers made the launch flawless.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">Tharindu</h4>
                  <p className="text-[10px] font-mono text-[#736e7a]">Aussie Supplements &amp; Sparkler Gems (Sri Lanka)</p>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-semibold">
                  VERIFIED CLIENT
                </span>
              </div>
            </motion.div>

            {/* Review 2: John */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] leading-relaxed italic">
                  &ldquo;Working from New York with Zylux was seamless. Their rapid bug fixes on our React Native app and high-throughput React/Node dashboard exceeded our expectations. Outstanding engineering partner.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">John</h4>
                  <p className="text-[10px] font-mono text-[#736e7a]">Return Buddies LLC (New York, USA)</p>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-semibold">
                  VERIFIED CLIENT
                </span>
              </div>
            </motion.div>

            {/* Review 3: W.P.J. Charya */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="p-5 rounded-2xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/50 hover:shadow-[0_15px_35px_rgba(240,42,143,0.12)] transition-all flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl group cursor-default"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#ff8a3d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#383340] leading-relaxed italic">
                  &ldquo;The domain risk analyzer and API automation system Zylux engineered with FastAPI and React operates with incredible speed. They took our specifications and enhanced them with robust automation.&rdquo;
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">W.P.J. Charya</h4>
                  <p className="text-[10px] font-mono text-[#736e7a]">ChronoSentinel & Abdul Fandom</p>
                </div>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-semibold">
                  VERIFIED CLIENT
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/85 border border-white/80 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(circle,rgba(255,102,87,0.12),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold">
                YOUR PRODUCT NEXT • 24/7 WORLDWIDE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f0e13]">
              Ready to engineer your custom software?
            </h3>
            <p className="text-xs sm:text-sm text-[#4a4552] mt-1 max-w-lg">
              Let&apos;s review your technical specifications, apply our architectural suggestions, and build a world-class digital product.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Button href="/contact" size="md" variant="primary">
                <span>Start Technical Scoping</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux%20Software%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20new%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs font-semibold hover:bg-emerald-500/25 transition-all"
                title="Chat with Zylux on WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
