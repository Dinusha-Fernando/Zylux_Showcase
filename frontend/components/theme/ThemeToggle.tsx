'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ showLabel = false, className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full border border-white/10 bg-white/[0.05] ${className}`} />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
        isDark
          ? 'bg-[#1d1c22] text-[#c8c3cc] hover:text-[#ff8a3d] border border-white/10 hover:border-[#ff8a3d]/40 shadow-sm'
          : 'bg-[#ffffff] text-[#4a4652] hover:text-[#f02a8f] border border-black/10 hover:border-[#f02a8f]/40 shadow-sm'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#ff8a3d] transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#f02a8f] transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </div>

      {showLabel && (
        <span className="font-medium text-[11px]">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
};
