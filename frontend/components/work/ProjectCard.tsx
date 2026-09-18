'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  isCompact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-2xl bg-white/85 backdrop-blur-xl border border-white/80 hover:border-[#f02a8f]/60 transition-colors flex flex-col overflow-hidden hover:shadow-[0_15px_35px_rgba(240,42,143,0.18)] shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full"
      data-cursor="VIEW CASE STUDY ↗"
    >
      {/* Top Device Window Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-black/[0.06] bg-white/90 text-[9px] font-mono z-10">
        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[#736e7a] truncate max-w-[200px]">
            zylux • {project.slug}
          </span>
        </div>
      </div>

      {/* Card Visual Header / Mockup Preview */}
      <div className="relative aspect-[16/10] w-full bg-[#0d0d12] overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} Preview Mockup`}
            className="w-full h-full object-cover object-center transform group-hover:scale-[1.06] transition-transform duration-600 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black/[0.04] text-[11px] font-mono text-[#726c7e]">
            PROJECT PREVIEW
          </div>
        )}

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Overlaid Category & Year Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-[10px] font-mono font-bold text-[#0f0e13] shadow-xs">
            <span className="text-[#f02a8f] font-extrabold mr-1">{project.number}</span> • {project.category}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 text-[10px] font-mono text-[#524d5b] shadow-xs">
            {project.year}
          </span>
        </div>

        {/* Highlight Metric Pill on Bottom Right */}
        {project.metrics && project.metrics[0] && (
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 px-2 py-1 rounded-lg bg-white/92 backdrop-blur-md border border-[#f02a8f]/30 text-[11px] font-mono shadow-md max-w-[calc(100%-1.25rem)]">
            <TrendingUp className="w-3 h-3 text-[#f02a8f] shrink-0" />
            <span className="font-bold text-[#0f0e13] shrink-0">{project.metrics[0].value}</span>
            <span className="text-[9px] text-[#524d5b] truncate max-w-[120px]">{project.metrics[0].label}</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between gap-3 bg-white/50">
        <div>
          {/* Client & Title */}
          <div className="mb-1.5">
            <span className="text-[10px] font-mono text-[#f02a8f] uppercase tracking-wider font-semibold block truncate mb-0.5">
              {project.client}
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors leading-snug">
              {project.title}
            </h3>
          </div>

          {/* Concise Summary */}
          <p className="text-xs text-[#524d5b] leading-relaxed line-clamp-2 mb-2.5 font-normal">
            {project.summary}
          </p>

          {/* Key Deliverable Highlights */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {project.deliverables.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-white/80 border border-black/[0.06] text-[9px] font-mono text-[#2c2834]"
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                  <span className="truncate max-w-[130px]">{item}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & Action Button */}
        <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between gap-2">
          {/* Technologies */}
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/80 text-[#524d5b] border border-black/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1 py-0.5 rounded text-[9px] font-mono text-[#736e7a]">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Link to Case Study */}
          <Link
            href={`/work/${project.slug}`}
            className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657] text-white shadow-[0_2px_10px_rgba(240,42,143,0.3)] hover:shadow-[0_4px_16px_rgba(240,42,143,0.45)] hover:brightness-105 active:scale-[0.98] transition-all shrink-0"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3 h-3 text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
