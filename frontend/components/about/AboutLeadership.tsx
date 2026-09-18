'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Mail, 
  CheckCircle2
} from 'lucide-react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

export const AboutLeadership: React.FC = () => {
  return (
    <section className="my-14 sm:my-20 relative">
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#f02a8f]/10 via-[#ff4f78]/08 to-[#ff6657]/10 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f0e13] dark:text-white tracking-tight leading-tight">
          Led by Engineers. <br />
          <span className="zylux-gradient-text">Driven by Measurable Business Results.</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#4a4552] dark:text-[#c8c3cc] leading-relaxed max-w-2xl mx-auto">
          At Zylux Software Solutions, the person setting the company vision is a Software Engineer who understands every line of code and business outcome.
        </p>
      </div>

      {/* Executive Leadership Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white/90 dark:bg-[#15141b]/95 border-2 border-black/10 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-2xl overflow-hidden"
      >
        {/* Top Specular Gradient Line */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#f02a8f] to-transparent"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Persona & Badge */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Executive Portrait Card with Creative Tech Framing */}
            <div className="relative mb-6 group">
              {/* Radial backlight glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1.5 bg-gradient-to-tr from-[#f02a8f]/40 via-[#ff4777]/30 to-[#ff6657]/40 rounded-[28px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none"
              />

              {/* Card Container */}
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-[26px] overflow-hidden border-2 border-white/80 dark:border-white/20 shadow-2xl bg-[#0f0e13]">
                {/* Real Founder Photo */}
                <Image
                  src="/assets/dinusha-kalhara.jpg"
                  alt="W.M. Dinusha Kalhara Fernando — Founder & CEO, Software Engineer"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                  sizes="(max-width: 640px) 224px, 256px"
                />

                {/* Subtle vignette gradient at the bottom for text contrast */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"
                />

                {/* Top Status Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-[9px] font-mono font-bold shadow-lg text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SOFTWARE ENGINEER</span>
                </div>

                {/* Bottom Overlay Glass Badge */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-center">
                  <div 
                    className="text-[11px] font-mono font-extrabold tracking-wide"
                    style={{ color: '#ffffff' }}
                  >
                    W.M. DINUSHA KALHARA FERNANDO
                  </div>
                  <div className="text-[9px] font-mono text-[#ff4f78] uppercase tracking-wider font-semibold">
                    Zylux Software Solutions
                  </div>
                </div>

                {/* Interactive border accent */}
                <div className="absolute inset-0 rounded-[24px] border border-[#f02a8f]/20 group-hover:border-[#f02a8f]/60 transition-colors pointer-events-none" />
              </div>
            </div>

            {/* Founder Full Name & Verified Credential */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f02a8f]/10 border border-[#f02a8f]/20 text-[10px] font-mono text-[#f02a8f] font-bold uppercase mb-1">
                <ShieldCheck className="w-3 h-3 text-[#f02a8f]" />
                <span>Executive Leadership</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0f0e13] dark:text-white tracking-tight">
                W.M. Dinusha Kalhara Fernando
              </h3>

              <p className="text-sm font-bold font-mono text-[#f02a8f]">
                Founder &amp; CEO — Software Engineer
              </p>

              <p className="text-xs font-mono text-[#736e7a] dark:text-[#918c96] pt-1">
                Colombo, Sri Lanka • Direct Global Client Collaboration
              </p>
            </div>

            {/* Direct Connect Action Row */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="mailto:dkalharafernando@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] hover:bg-[#f02a8f]/10 border border-black/[0.08] dark:border-white/[0.1] hover:border-[#f02a8f]/30 text-xs font-mono font-semibold text-[#0f0e13] dark:text-white hover:text-[#f02a8f] transition-all shadow-2xs"
                title="Direct Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#f02a8f]" />
                <span>Email</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://wa.me/94756388329?text=Hello%20Dinusha%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Zylux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 transition-all shadow-2xs"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://www.linkedin.com/company/zylux-software-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25 text-xs font-mono font-semibold text-[#0A66C2] transition-all shadow-2xs"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://web.facebook.com/profile.php?id=61585045107718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 text-xs font-mono font-semibold text-[#1877F2] transition-all shadow-2xs"
                title="Facebook Page"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Founder's Manifesto & Architectural Commitments */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#f02a8f] font-bold block mb-2">
                FOUNDER&apos;S STATEMENT • WHY ZYLUX WAS CREATED
              </span>
              <blockquote className="text-sm sm:text-base text-[#0f0e13] dark:text-white font-medium leading-relaxed italic">
                &ldquo;I founded Zylux Software Solutions to eliminate the frustration clients experience with traditional tech agencies: bloated overhead, broken code, and non-technical account managers who cannot understand complex software requirements.
                <br /><br />
                As an active Software Engineer, I ensure that every database schema we structure, every web portal we build, and every SEO campaign we launch is engineered to deliver measurable business impact. You speak directly to the engineers building your systems.&rdquo;
              </blockquote>
            </div>

            {/* 4 Core Engineering Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-mono">
              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                className="p-3.5 rounded-xl bg-white dark:bg-[#1d1c22] border border-black/[0.06] dark:border-white/[0.08] shadow-2xs hover:border-[#f02a8f]/30 transition-colors cursor-default"
              >
                <div className="flex items-center gap-2 mb-1 text-[#0f0e13] dark:text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f]" />
                  <span>Direct Builder Access</span>
                </div>
                <p className="text-[11px] text-[#524d5b] dark:text-[#918c96] leading-normal">
                  Zero layers of bureaucracy. You communicate directly with software engineers who write your code.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                className="p-3.5 rounded-xl bg-white dark:bg-[#1d1c22] border border-black/[0.06] dark:border-white/[0.08] shadow-2xs hover:border-[#f02a8f]/30 transition-colors cursor-default"
              >
                <div className="flex items-center gap-2 mb-1 text-[#0f0e13] dark:text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f02a8f]" />
                  <span>Defensible Clean Code</span>
                </div>
                <p className="text-[11px] text-[#524d5b] dark:text-[#918c96] leading-normal">
                  Type-safe TypeScript, robust Python backends, and maintainable architectures that scale cleanly.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                className="p-3.5 rounded-xl bg-white dark:bg-[#1d1c22] border border-black/[0.06] dark:border-white/[0.08] shadow-2xs hover:border-emerald-500/30 transition-colors cursor-default"
              >
                <div className="flex items-center gap-2 mb-1 text-[#0f0e13] dark:text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Measurable Growth</span>
                </div>
                <p className="text-[11px] text-[#524d5b] dark:text-[#918c96] leading-normal">
                  SEO support and performance advertising built on fast, indexable code that drives actual revenue.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.015 }}
                className="p-3.5 rounded-xl bg-white dark:bg-[#1d1c22] border border-black/[0.06] dark:border-white/[0.08] shadow-2xs hover:border-emerald-500/30 transition-colors cursor-default"
              >
                <div className="flex items-center gap-2 mb-1 text-[#0f0e13] dark:text-white font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24/7 Global Delivery</span>
                </div>
                <p className="text-[11px] text-[#524d5b] dark:text-[#918c96] leading-normal">
                  Operating 24/7 from Colombo, delivering seamlessly across US, Sri Lankan, and worldwide time zones.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
