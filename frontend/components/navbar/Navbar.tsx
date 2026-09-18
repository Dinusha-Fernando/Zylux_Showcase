'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/85 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_4px_25px_rgba(0,0,0,0.04)]'
            : 'py-3.5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group cursor-pointer"
              data-cursor="ZYLUX HOME"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-black/10 bg-white shadow-xs flex items-center justify-center transition-all duration-300 group-hover:border-[#f02a8f]/60 group-hover:shadow-[0_0_16px_rgba(240,42,143,0.3)]">
                <Image
                  src="/assets/logo-icon.png"
                  alt="Zylux Software Solutions"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">
                ZYLUX
              </span>
              <span className="hidden sm:inline-block text-xs font-mono text-[#726c7e] border-l border-black/15 pl-2.5 ml-1">
                Software Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/85 border border-black/10 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#f02a8f] bg-black/[0.05] font-bold shadow-xs'
                        : 'text-[#524d5b] hover:text-[#0f0e13] hover:bg-black/[0.03]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                data-cursor="LET'S BUILD →"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white hover:shadow-[0_0_25px_rgba(240,42,143,0.35)] hover:brightness-105 transition-all duration-300 active:scale-95 shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white/90 border border-black/10 flex items-center justify-center text-[#0f0e13] hover:text-[#f02a8f] hover:border-[#f02a8f]/40 transition-colors shadow-xs active:scale-95"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
};
