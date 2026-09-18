import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/[0.06] bg-white/80 backdrop-blur-xl pt-10 pb-8 text-[#524d5b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-8 border-b border-black/[0.06]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="relative w-6 h-6 rounded-md overflow-hidden border border-black/10 bg-white flex items-center justify-center transition-all duration-300 group-hover:border-[#f02a8f]/60 group-hover:shadow-[0_0_12px_rgba(240,42,143,0.35)]">
                <Image
                  src="/assets/logo-icon.png"
                  alt="Zylux Software Solutions"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-[#0f0e13] group-hover:text-[#f02a8f] transition-colors">ZYLUX</span>
            </Link>
            <p className="text-xs text-[#524d5b] max-w-sm leading-relaxed">
              Zylux Software Solutions delivers custom web and software development with the latest technologies and unique designs. Our priority is your requirements, enhanced with our expert technical and creative suggestions.
            </p>
            <div className="pt-1 space-y-1.5">
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                24/7 Open Globally • Colombo, Sri Lanka
              </span>
              <p className="text-[11px] text-[#736e7a] font-mono">
                Live around the clock to help your business grow in the digital world.
              </p>
            </div>
          </div>

          {/* Capabilities Col */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-[#0f0e13] font-bold mb-3">
              What We Build
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/services#web-platforms" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Web Development & Platforms
                </Link>
              </li>
              <li>
                <Link href="/services#software-systems" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Custom Software Systems
                </Link>
              </li>
              <li>
                <Link href="/services#mobile-products" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Graphic Design & Branding
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing-seo" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Social Media & SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-[#0f0e13] font-bold mb-3">
              Navigation
            </h4>
            <ul className="space-y-1 text-xs">
              <li>
                <Link href="/work" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Our Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Company Philosophy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center py-1 hover:text-[#f02a8f] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Social Col */}
          <div>
            <h4 className="text-[11px] font-mono tracking-wider uppercase text-[#0f0e13] font-bold mb-3">
              Connect
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1 min-h-[36px] hover:text-[#25D366] text-[#524d5b] transition-colors font-mono font-medium group"
                  title="Direct WhatsApp Chat"
                >
                  <span className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-[#25D366] group-hover:scale-105 transition-transform shrink-0">
                    <WhatsAppIcon className="w-3 h-3" />
                  </span>
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://web.facebook.com/profile.php?id=61585045107718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1 min-h-[36px] hover:text-[#1877F2] text-[#524d5b] transition-colors font-mono font-medium group"
                  title="Official Facebook Profile"
                >
                  <span className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-[#1877F2] group-hover:scale-105 transition-transform shrink-0">
                    <FacebookIcon className="w-3 h-3" />
                  </span>
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zylux-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1 min-h-[36px] hover:text-[#0A66C2] text-[#524d5b] transition-colors font-mono font-medium group"
                  title="Official LinkedIn Profile"
                >
                  <span className="w-5 h-5 rounded-md bg-sky-500/10 flex items-center justify-center border border-sky-500/20 text-[#0A66C2] group-hover:scale-105 transition-transform shrink-0">
                    <LinkedinIcon className="w-3 h-3" />
                  </span>
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="inline-flex items-center gap-2 py-1 min-h-[36px] hover:text-[#f02a8f] text-[#524d5b] transition-colors font-mono font-medium group"
                  title="Direct Email Inquiries"
                >
                  <span className="w-5 h-5 rounded-md bg-[#f02a8f]/10 flex items-center justify-center border border-[#f02a8f]/20 text-[#f02a8f] group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-3 h-3" />
                  </span>
                  <span>Direct Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#736e7a]">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Zylux Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[#736e7a] text-center sm:text-right">
            <span>Product Thinking • Clean Engineering • Visual Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
