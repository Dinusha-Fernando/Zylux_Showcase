'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

export const PhilosophySnippet: React.FC = () => {
  const differentiators = [
    {
      title: 'Clients’ Vision First + Expert Suggestions',
      description: 'Your requirements are our top priority. We listen deeply to what you wish to create and enhance it with our latest architectural, design, and strategic suggestions.'
    },
    {
      title: 'Latest Technologies & Unique Aesthetics',
      description: 'We do not build generic templates. Every website, software application, and mobile product is engineered with cutting-edge tech and unique, custom designs.'
    },
    {
      title: 'Complete Growth: Branding, Social & SEO',
      description: 'Beyond code, we empower your business with creative graphic design, active social media management, and data-driven search engine optimization (SEO).'
    }
  ];

  return (
    <section id="about" className="py-10 md:py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Editorial Philosophy */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f0e13] tracking-tight leading-[1.15]">
              Client-focused vision. <br />
              <span className="zylux-gradient-text">Expert engineering.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#524d5b] leading-relaxed font-normal">
              At Zylux Software Solutions, our highest priority is our clients&apos; specific requirements. We engineer web and software solutions using the latest technologies and unique bespoke designs, supported by marketing, graphic design, and SEO to power your business growth.
            </p>

            <div className="mt-5 pt-4 border-t border-black/[0.08]">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#f02a8f] hover:text-[#ff6657] transition-colors"
              >
                <span>Read Full Company Manifesto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Differentiators */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#726c7e] font-semibold block mb-2">
              What Makes Zylux Different
            </span>

            {differentiators.map((diff, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/85 border border-white/70 shadow-[0_8px_25px_rgba(0,0,0,0.04)] backdrop-blur-xl hover:border-[#f02a8f]/40 hover:shadow-[0_12px_30px_rgba(240,42,143,0.12)] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-[#f02a8f]/10 border border-[#f02a8f]/30 flex items-center justify-center text-[#f02a8f] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f0e13] tracking-tight">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524d5b] mt-1.5 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
