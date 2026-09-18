'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '@/data/projects';

export const SelectedWork: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const featuredProjects = projectsData.filter((p) => p.featured);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
      const cardWidth = clientWidth > 768 ? 370 : 295;
      const index = Math.min(
        Math.round(scrollLeft / cardWidth),
        featuredProjects.length - 1
      );
      setCurrentIndex(Math.max(0, index));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [featuredProjects.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth > 768 ? 370 : 295;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth > 768 ? 370 : 295;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section id="selected-work" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#f02a8f]/05 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <SectionHeading
            badge="FEATURED PORTFOLIO"
            title="Projects Built for Real Operations"
            description="Explore our production-shipped software platforms, e-commerce engines, and cybersecurity tools across New York, Sri Lanka, and worldwide."
            className="mb-0 max-w-2xl"
          />

          {/* Desktop Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
            {/* Slide Index Counter */}
            <div className="px-3 py-1.5 rounded-full bg-white/85 border border-black/10 text-xs font-mono text-[#433e4d] shadow-xs backdrop-blur-sm">
              <span className="text-[#f02a8f] font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>{' '}
              /{' '}
              <span>{String(featuredProjects.length).padStart(2, '0')}</span>
            </div>

            {/* Arrow Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'bg-white/90 border-black/10 text-[#0f0e13] hover:border-[#f02a8f]/60 hover:bg-white shadow-xs'
                    : 'bg-white/30 border-black/5 text-[#918c96]/40 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'bg-white/90 border-black/10 text-[#0f0e13] hover:border-[#f02a8f]/60 hover:bg-white shadow-xs'
                    : 'bg-white/30 border-black/5 text-[#918c96]/40 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Button
              href="/work"
              variant="outline"
              size="sm"
              className="text-xs font-mono whitespace-nowrap"
            >
              All Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Horizontally Scrollable Track */}
      <div className="relative w-full">
        {/* Subtle Edge Fade Hints */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/30 to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/30 to-transparent z-10 pointer-events-none hidden md:block" />

        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="w-[280px] sm:w-[320px] md:w-[345px] lg:w-[355px] xl:w-[365px] flex-shrink-0 snap-start transition-transform"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Bottom Progress Bar & Dots */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {/* Scroll instruction hint */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#736e7a]">
            <Layers className="w-3.5 h-3.5 text-[#f02a8f]" />
            <span>Swipe or click arrows to explore {featuredProjects.length} production case studies</span>
          </div>

          {/* Interactive Dots */}
          <div className="flex items-center gap-2">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Jump to project ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i
                    ? 'w-6 h-2 bg-gradient-to-r from-[#f02a8f] to-[#ff6657] shadow-[0_0_10px_rgba(240,42,143,0.5)]'
                    : 'w-2 h-2 bg-black/15 hover:bg-black/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full h-1 bg-black/[0.08] rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] transition-all duration-150 rounded-full"
            style={{ width: `${Math.max(15, scrollProgress)}%` }}
          />
        </div>
      </div>
    </section>
  );
};
