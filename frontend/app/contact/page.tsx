'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Phone, 
  MessageSquare, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Layers, 
  Copy, 
  Check 
} from 'lucide-react';
import { FacebookIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

const serviceOptions = [
  { id: 'web', label: 'Web Development & Platforms', icon: Code2 },
  { id: 'software', label: 'Custom Software Development', icon: Cpu },
  { id: 'mobile', label: 'Mobile App Development', icon: Smartphone },
  { id: 'design', label: 'Graphic Design & Brand Identity', icon: Palette },
  { id: 'marketing', label: 'Social Media Management & SEO', icon: TrendingUp },
  { id: 'mvp', label: 'Full-Cycle Turnkey MVP', icon: Layers }
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Development & Platforms']);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (label: string) => {
    if (selectedServices.includes(label)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== label));
      }
    } else {
      setSelectedServices([...selectedServices, label]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dkalharafernando@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Generate dynamic WhatsApp URL with current form selections
  const generateWhatsAppUrl = () => {
    const text = `Hello Zylux Software Solutions!%0A%0A*Name:* ${formData.name || 'A prospective client'}%0A*Company:* ${formData.company || 'Not specified'}%0A*Services:* ${selectedServices.join(', ')}%0A*Details:* ${encodeURIComponent(formData.description || 'I would like to discuss my project requirements and get your technical suggestions.')}`;
    return `https://wa.me/94756388329?text=${text}`;
  };

  return (
    <div className="py-8 md:py-14 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(240,42,143,0.12),rgba(255,102,87,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0f0e13] mb-4 leading-tight">
            Tell Us What You Want to Build. <br />
            <span className="zylux-gradient-text">We Bring the Engineering.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#4a4552] leading-relaxed max-w-2xl mx-auto">
            Your requirements are our absolute priority. Scope your project below or connect directly with our engineering desk in Colombo, active 24/7 worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Project Scoping Studio */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-white/85 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-xl relative"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0f0e13]">
                  Technical Inquiry Received!
                </h3>
                <p className="text-[#524d5b] max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                  Thank you, <strong className="text-[#0f0e13]">{formData.name}</strong>. Our lead engineer is reviewing your requirements for <span className="text-[#f02a8f] font-mono font-bold">{selectedServices.join(', ')}</span>. We will respond within 24 hours.
                </p>

                <div className="p-4 rounded-2xl bg-white/90 border border-black/10 max-w-md mx-auto text-left space-y-1.5 text-xs font-mono shadow-xs">
                  <div className="text-[#736e7a] font-bold">INQUIRY SUMMARY:</div>
                  <div className="text-[#0f0e13]">Requested Services: <span className="text-[#f02a8f] font-semibold">{selectedServices.join(', ')}</span></div>
                  {formData.email && <div className="text-[#0f0e13]">Contact Email: <span className="text-[#0f0e13] font-semibold">{formData.email}</span></div>}
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Continue On WhatsApp Now</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-full text-xs font-mono text-[#524d5b] hover:text-[#0f0e13] border border-black/10 hover:border-black/20 transition-all"
                  >
                    ← Edit / Submit another scope
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Services Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0f0e13] font-bold mb-3 flex items-center justify-between">
                    <span>01. What capabilities do you need?</span>
                    <span className="text-[10px] text-[#736e7a] font-normal">Select all that apply</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((srv) => {
                      const Icon = srv.icon;
                      const isSelected = selectedServices.includes(srv.label);
                      return (
                        <motion.button
                          type="button"
                          key={srv.id}
                          onClick={() => toggleService(srv.label)}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className={`p-3 rounded-2xl text-left text-xs font-mono transition-colors flex items-center gap-2.5 min-h-[44px] ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white font-bold shadow-xs'
                              : 'bg-white/80 text-[#524d5b] border border-black/10 hover:text-[#0f0e13] hover:border-black/20 hover:bg-white shadow-2xs'
                          }`}
                        >
                          <Icon className="w-4 h-4 shrink-0" />
                          <span className="truncate">{srv.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Contact Details Form */}
                <div className="space-y-4 pt-4 border-t border-black/[0.08]">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#0f0e13] font-bold">
                    02. Your Contact Information &amp; Project Details
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] text-[#736e7a] font-mono block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Fernando"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-sm text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#736e7a] font-mono block mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-sm text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] text-[#736e7a] font-mono block mb-1">WhatsApp / Phone Number</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +1 555 019 2834 or WhatsApp"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-sm text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] text-[#736e7a] font-mono block mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Innovations"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-sm text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-[#736e7a] font-mono block mb-1">
                      Project Requirements &amp; Desired Outcomes *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe what you want to build, any specific features, technical preferences, or problems you need to solve..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/90 border border-black/15 text-base sm:text-sm text-[#0f0e13] placeholder:text-[#918c96] focus:outline-none focus:border-[#f02a8f] shadow-xs transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submission Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                    <Button
                      type="submit"
                      size="md"
                      variant="primary"
                      className="w-full sm:w-auto min-h-[44px] text-xs sm:text-sm px-6 py-2.5"
                    >
                      <span>Submit Project Scope</span>
                      <Send className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </motion.div>

                  <motion.a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 text-xs sm:text-sm font-semibold hover:bg-emerald-500/25 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Directly via WhatsApp</span>
                  </motion.a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Channels & Studio Telemetry */}
          <div className="lg:col-span-4 space-y-4">
            {/* Live Desk Beacon */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-white/85 border border-emerald-500/30 shadow-xs backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-700 font-bold tracking-wider">
                  24/7 LIVE COLOMBO DESK
                </span>
              </div>
              <h4 className="text-base font-bold text-[#0f0e13]">Always-On Engineering</h4>
              <p className="text-xs text-[#524d5b] mt-1 leading-relaxed">
                Headquartered in <strong className="text-[#0f0e13]">Colombo, Sri Lanka</strong>. We are active 24/7 worldwide to help businesses grow in the digital world.
              </p>
            </motion.div>

            {/* Direct WhatsApp Callout */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-white/85 border border-white/80 hover:border-emerald-500/40 transition-colors shadow-xs backdrop-blur-xl"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-700 mb-3">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0f0e13]">Instant WhatsApp Desk</h4>
              <p className="text-xs text-[#524d5b] mt-0.5 mb-3">
                Need instant answers or a quick technical voice/chat discussion?
              </p>
              <a
                href="https://wa.me/94756388329?text=Hello%20Zylux%2C%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 hover:bg-emerald-500/25 text-xs font-mono font-bold transition-all shadow-xs group"
                title="Launch Instant WhatsApp Chat"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Direct Email Card with Copy Button */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.29, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/30 transition-colors shadow-xs backdrop-blur-xl"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#f02a8f] to-[#ff6657] flex items-center justify-center text-white mb-3 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-[#0f0e13]">Direct Email Inquiries</h4>
              <p className="text-xs text-[#524d5b] mt-0.5 mb-3">
                Send RFP documents, project briefs, or technical requirements:
              </p>
              <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                <a
                  href="mailto:dkalharafernando@gmail.com"
                  className="text-xs font-mono text-[#f02a8f] font-semibold hover:underline truncate"
                >
                  dkalharafernando@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-[#918c96] hover:text-[#0f0e13] transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Official Social Media Profiles */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-white/85 border border-white/80 hover:border-[#f02a8f]/30 transition-colors shadow-xs backdrop-blur-xl space-y-3"
            >
              <h4 className="text-sm font-bold text-[#0f0e13]">Official Social Channels</h4>
              <div className="space-y-2.5 text-xs font-mono">
                <a
                  href="https://web.facebook.com/profile.php?id=61585045107718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/[0.08] text-[#524d5b] hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all group shadow-2xs"
                  title="Official Facebook Page"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#1877F2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <FacebookIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold text-[#0f0e13] group-hover:text-[#1877F2] transition-colors">Facebook</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#736e7a] group-hover:text-[#1877F2] group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href="https://www.linkedin.com/company/zylux-software-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-black/[0.08] text-[#524d5b] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all group shadow-2xs"
                  title="Official LinkedIn Company Profile"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 text-[#0A66C2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold text-[#0f0e13] group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#736e7a] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </motion.div>

            {/* "What Happens Next?" 3-Step Process */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.43, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-3xl bg-white/85 border border-white/80 shadow-xs backdrop-blur-xl"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#f02a8f] font-bold block mb-2">
                OUR GUARANTEE &amp; NEXT STEPS
              </span>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[#f02a8f]/15 text-[#f02a8f] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <h5 className="font-bold text-[#0f0e13]">0-2 Hours: Triage</h5>
                    <p className="text-[#524d5b] text-[11px]">Direct review by our engineering team.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-[#f02a8f]/15 text-[#f02a8f] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <h5 className="font-bold text-[#0f0e13]">4-12 Hours: Architectural Suggestions</h5>
                    <p className="text-[#524d5b] text-[11px]">We draft tech stack & delivery milestones.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <h5 className="font-bold text-[#0f0e13]">24 Hours: Discovery Call</h5>
                    <p className="text-[#524d5b] text-[11px]">Clear, fixed scope and roadmap ready to build.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
