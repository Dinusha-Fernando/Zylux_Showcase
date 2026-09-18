'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  arrowDirection?: 'up-right' | 'right';
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = true,
  arrowDirection = 'up-right',
  children,
  className,
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'group relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#f02a8f]/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer whitespace-nowrap';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-7 py-3 gap-2.5'
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] via-70% to-[#ff6657] text-white font-bold shadow-[0_4px_20px_rgba(240,42,143,0.3)] hover:shadow-[0_6px_25px_rgba(255,102,87,0.45)] hover:brightness-105 active:scale-[0.98]',
    secondary:
      'bg-white/85 text-[#0f0e13] font-semibold border border-black/10 backdrop-blur-md hover:border-[#f02a8f]/50 hover:bg-white hover:shadow-[0_4px_20px_rgba(240,42,143,0.15)] active:scale-[0.98]',
    outline:
      'bg-white/40 text-[#0f0e13] font-semibold border border-black/15 backdrop-blur-sm hover:border-[#ff6657] hover:bg-white/90 hover:shadow-[0_4px_15px_rgba(255,102,87,0.15)] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#524d5b] hover:text-[#f02a8f] hover:bg-black/[0.04]'
  };

  const combinedClasses = twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className));

  const ArrowIcon = arrowDirection === 'up-right' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">{children}</span>
      {showArrow && (
        <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current shrink-0" />
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} target={target || '_blank'} rel={rel || 'noopener noreferrer'} className={combinedClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
