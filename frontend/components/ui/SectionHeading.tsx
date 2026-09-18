'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = 'left',
  className,
  children
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={twMerge(
        clsx(
          'mb-6 md:mb-8',
          align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl',
          className
        )
      )}
    >
      {badge && (
        <div
          className={clsx(
            'inline-flex items-center gap-2 px-2.5 py-0.5 mb-2.5 rounded-full text-[11px] font-mono tracking-wider uppercase',
            'bg-[#f02a8f]/10 text-[#ff6657] border border-[#f02a8f]/30 shadow-2xs backdrop-blur-sm'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f02a8f] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#0f0e13] leading-[1.2]">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-sm sm:text-base text-[#524d5b] leading-relaxed font-normal">
          {description}
        </p>
      )}

      {children}
    </motion.div>
  );
};
