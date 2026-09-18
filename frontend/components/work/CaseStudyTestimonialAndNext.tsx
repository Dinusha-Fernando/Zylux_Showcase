'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Sparkles, Star, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';

interface FooterProps {
  project: Project;
  nextProject: Project;
}

export const CaseStudyTestimonialAndNext: React.FC<FooterProps> = ({ project, nextProject }) => {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ====================================================================
          TECHNOLOGY STACK MATRIX
          ==================================================================== */}
      <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#1d1c22]/85 border border-black/[0.08] dark:border-white/[0.1] shadow-xs backdrop-blur-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#f02a8f]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#736e7a] dark:text-[#918c96] font-bold">
              Production Tech Stack &amp; Infrastructure
            </h3>
          </div>
          <span className="text-[10px] font-mono text-[#f02a8f] font-semibold">
            {project.technologies.length} Technologies
          </span>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-xl text-xs sm:text-[13px] font-mono font-semibold bg-white dark:bg-[#15141b] border border-black/[0.08] dark:border-white/[0.1] text-[#0f0e13] dark:text-white shadow-2xs hover:border-[#f02a8f]/40 hover:text-[#f02a8f] dark:hover:text-[#f02a8f] transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ====================================================================
          EXECUTIVE TESTIMONIAL (IF AVAILABLE)
          ==================================================================== */}
      {project.testimonial && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/95 via-white/85 to-[#f02a8f]/05 dark:from-[#1d1c22]/95 dark:via-[#1d1c22]/85 dark:to-[#f02a8f]/10 border border-black/[0.08] dark:border-white/[0.1] shadow-lg backdrop-blur-2xl overflow-hidden"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-72 h-72 bg-[#f02a8f]/10 rounded-full blur-3xl pointer-events-none -z-10"
          />

          <div className="flex items-center justify-between gap-4 mb-4">
            <Quote className="w-8 h-8 text-[#f02a8f]" />

            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="ml-1">Verified Client</span>
            </div>
          </div>

          <blockquote className="text-base sm:text-lg text-[#0f0e13] dark:text-white font-medium leading-relaxed italic">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="text-sm font-bold text-[#0f0e13] dark:text-white font-mono">
                {project.testimonial.author}
              </div>
              <div className="text-xs text-[#736e7a] dark:text-[#918c96] font-mono mt-0.5">
                {project.testimonial.role}
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#f02a8f] font-semibold">
              Delivered by Zylux Software Solutions
            </div>
          </div>
        </motion.div>
      )}

      {/* ====================================================================
          NEXT CASE STUDY CONTINUOUS NAVIGATOR & CTA BAR
          ==================================================================== */}
      <div className="pt-6 border-t border-black/[0.08] dark:border-white/[0.08] space-y-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Next Project Link Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex-1"
          >
            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-[#1d1c22]/80 hover:bg-white dark:hover:bg-[#1d1c22] border border-black/[0.08] dark:border-white/[0.1] hover:border-[#f02a8f]/50 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4 w-full"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#736e7a] dark:text-[#918c96] font-bold block mb-1">
                  Next Up in Portfolio →
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">
                  {nextProject.title}{' '}
                  <span className="text-xs font-mono font-normal text-[#736e7a] dark:text-[#918c96] ml-1">
                    ({nextProject.category})
                  </span>
                </h4>
              </div>

              <div className="w-9 h-9 rounded-full bg-black/[0.04] dark:bg-white/[0.06] group-hover:bg-[#f02a8f] group-hover:text-white flex items-center justify-center text-[#524d5b] dark:text-[#c8c3cc] transition-all duration-300 shrink-0">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Project Conversion Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border border-black/10 dark:border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          {/* Subtle Ambient Refraction */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-10 w-60 h-60 bg-[#f02a8f]/10 rounded-full blur-3xl pointer-events-none"
          />

          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#f02a8f] font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BESPOKE ENGINEERING &amp; DESIGN</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight">
              Have a similar product in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#4a4552] dark:text-[#c8c3cc] mt-1 max-w-md">
              We evaluate your exact requirements, architect the optimal tech stack, and deliver a detailed scope within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Start a Project Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657] text-white font-bold text-xs sm:text-sm shadow-[0_6px_20px_rgba(240,42,143,0.35)] hover:shadow-[0_10px_25px_rgba(240,42,143,0.5)] hover:brightness-105 transition-all"
              >
                <span>Start Technical Scoping</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Explore All Work Link */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-black/[0.04] dark:bg-white/10 hover:bg-black/[0.08] dark:hover:bg-white/15 border border-black/10 dark:border-white/20 text-[#0f0e13] dark:text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>Explore All Work</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
