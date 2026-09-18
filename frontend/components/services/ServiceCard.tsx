'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Smartphone, 
  Palette, 
  TrendingUp 
} from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceCardProps {
  service: ServiceItem;
  isSelected: boolean;
  onSelect: () => void;
}

const serviceIcons: Record<string, React.ElementType> = {
  'web-platforms': Code2,
  'software-systems': Cpu,
  'mobile-products': Smartphone,
  'graphic-design': Palette,
  'digital-marketing-seo': TrendingUp
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, isSelected, onSelect }) => {
  const IconComponent = serviceIcons[service.id] || Code2;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      onClick={onSelect}
      className={`group relative rounded-2xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden backdrop-blur-xl ${
        isSelected
          ? 'bg-white/95 dark:bg-[#181720]/95 border-2 border-[#f02a8f] shadow-[0_10px_30px_rgba(240,42,143,0.18)] ring-2 ring-[#f02a8f]/20'
          : 'bg-white/85 dark:bg-[#14131a]/85 border border-black/[0.08] dark:border-white/[0.08] hover:border-[#f02a8f]/40 hover:bg-white dark:hover:bg-[#171620] shadow-xs hover:shadow-[0_8px_25px_rgba(240,42,143,0.08)]'
      }`}
      data-cursor="SELECT STUDIO →"
    >
      {/* Top Accent Gradient Line */}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-[2.5px] transition-opacity duration-300 ${
          isSelected 
            ? 'opacity-100 bg-gradient-to-r from-[#f02a8f] via-[#ff4777] to-[#ff6657]'
            : 'opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#f02a8f]/60 to-[#ff6657]/60'
        }`}
      />

      <div>
        {/* Top Meta: Compact Numeral and Icon */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-base sm:text-lg font-black tracking-tight text-[#0f0e13] dark:text-white group-hover:text-[#f02a8f] transition-colors">
            {service.number}
          </span>

          <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs ${
            isSelected
              ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white shadow-xs'
              : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#0f0e13] dark:text-white border border-black/5 dark:border-white/10'
          }`}>
            <IconComponent className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Title and Tag */}
        <h3 className="text-xs sm:text-sm font-bold text-[#0f0e13] dark:text-white tracking-tight mb-0.5 group-hover:text-[#f02a8f] transition-colors line-clamp-1">
          {service.title}
        </h3>

        <p className="text-[10px] font-mono text-[#ff6657] font-semibold mb-2 line-clamp-1">
          {service.tag}
        </p>

        <p className="text-[11px] text-[#524d5b] dark:text-[#c8c3cc] leading-snug line-clamp-2 mb-3 font-normal">
          {service.summary}
        </p>
      </div>

      <div>
        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {service.techStack.slice(0, 2).map((tech, i) => (
            <span
              key={i}
              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/[0.03] dark:bg-white/[0.05] text-[#524d5b] dark:text-[#a59fae] border border-black/[0.05] dark:border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer Action */}
        <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
          <span className={`text-[10px] font-mono font-bold transition-colors ${
            isSelected ? 'text-[#f02a8f]' : 'text-[#736e7a] dark:text-[#8e8897] group-hover:text-[#0f0e13] dark:group-hover:text-white'
          }`}>
            {isSelected ? '● In Studio' : 'Inspect →'}
          </span>

          <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
            isSelected
              ? 'bg-[#f02a8f] text-white'
              : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#736e7a] group-hover:bg-[#f02a8f] group-hover:text-white'
          }`}>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
