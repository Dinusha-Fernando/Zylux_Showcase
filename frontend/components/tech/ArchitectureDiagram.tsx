'use client';

import React, { useState } from 'react';
import { Globe, Smartphone, LayoutDashboard, Server, Database, Layers, ShieldCheck, Cloud, Zap, Cpu, Sparkles } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      title: 'ENTRY LAYER: CLIENT & MOBILE INTERFACES',
      nodes: [
        { label: 'Next.js & React Web Apps', sub: 'Next.js 16 / TypeScript / Tailwind CSS', icon: Globe },
        { label: 'React Native Mobile Apps', sub: 'iOS & Android Native 60fps Fluidity', icon: Smartphone },
        { label: 'Real-Time Admin Portals', sub: 'High-Density React Analytics Dashboards', icon: LayoutDashboard }
      ],
      description: 'Unified client interfaces built for e-commerce, real-time analytics, and mobile users.'
    },
    {
      id: 1,
      title: 'APPLICATION SERVICES & API ENGINES',
      nodes: [
        { label: 'Django & Python Backends', sub: 'E-Commerce & Wholesale Inventory Logic', icon: Server },
        { label: 'Node.js & Express.js APIs', sub: 'Real-Time Event Services & Admin Backends', icon: Server },
        { label: 'FastAPI & API Automation', sub: 'Cybersecurity Threat Scanners & Webhooks', icon: Zap }
      ],
      description: 'Stateless microservices, asynchronous task queues, and automated REST API pipelines.'
    },
    {
      id: 2,
      title: 'DATA PERSISTENCE & CACHING LAYER',
      nodes: [
        { label: 'PostgreSQL Relational DB', sub: 'ACID Orders, Customers & Catalog Data', icon: Database },
        { label: 'MongoDB Document Store', sub: 'High-Throughput Logistics Manifests & Records', icon: Database },
        { label: 'Redis In-Memory Cache', sub: 'Sub-Millisecond Carts, Sessions & Pub/Sub', icon: Layers }
      ],
      description: 'Dual-engine persistence balancing relational ACID transactions and flexible NoSQL document scale.'
    },
    {
      id: 3,
      title: 'CYBERSECURITY, CLOUD & DEVOPS',
      nodes: [
        { label: 'Automated Domain Risk Engine', sub: 'Real-Time Threat Detection & Scoring', icon: ShieldCheck },
        { label: 'Docker Containerization', sub: 'Isolated Microservices & Local/Cloud Parity', icon: Cloud },
        { label: 'Automated CI/CD Pipelines', sub: 'Zero-Downtime Multi-Region Releases', icon: Cpu }
      ],
      description: 'Automated security auditing, isolated container environments, and 24/7 high availability.'
    }
  ];

  return (
    <div className="my-8 sm:my-10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/85 border border-white/70 shadow-[0_15px_40px_rgba(0,0,0,0.05),0_0_1px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-black/[0.08] mb-6">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#ff6657] font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#f02a8f]" />
            <span>Interactive System Blueprint</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0f0e13] tracking-tight">
            Zylux Interactive Architecture Stack
          </h3>
          <p className="text-xs text-[#524d5b] font-mono mt-1 max-w-2xl leading-relaxed">
            Production-proven across Next.js, React Native, Django, Node.js, Express, FastAPI, PostgreSQL & MongoDB
          </p>
        </div>

        {/* Layer Selector buttons */}
        <div className="flex flex-wrap gap-1 p-1.5 bg-white/90 rounded-2xl border border-black/[0.08] text-xs font-mono shadow-sm">
          {layers.map((layer, idx) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(idx)}
              className={`px-3 py-1.5 rounded-xl transition-all font-semibold ${
                activeLayer === idx
                  ? 'bg-gradient-to-r from-[#f02a8f] via-[#ff4f78] to-[#ff6657] text-white shadow-[0_0_15px_rgba(240,42,143,0.35)]'
                  : 'text-[#524d5b] hover:text-[#0f0e13] hover:bg-black/[0.04]'
              }`}
            >
              Layer 0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Visualized Architecture Layers */}
      <div className="space-y-3.5">
        {layers.map((layer, idx) => {
          const isSelected = activeLayer === idx;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(idx)}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-white via-[#fcf1f5] to-white border-2 border-[#f02a8f] shadow-[0_10px_30px_rgba(240,42,143,0.12)]'
                  : 'bg-white/70 border-black/[0.06] hover:border-black/15 hover:bg-white/90 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#0f0e13] flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-[#f02a8f]/10 text-[#f02a8f] font-extrabold text-[10px] sm:text-[11px]">
                    0{idx + 1}
                  </span>
                  <span className="break-words">{layer.title}</span>
                </span>
                <span className="text-[11px] text-[#726c7e] font-mono hidden md:inline">
                  {layer.description}
                </span>
              </div>

              {/* Node Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {layer.nodes.map((node, i) => {
                  const NodeIcon = node.icon;
                  return (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'bg-white border-[#f02a8f]/40 shadow-sm'
                          : 'bg-white/80 border-black/[0.06]'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#f02a8f] to-[#ff6657] text-white shadow-xs'
                            : 'bg-black/[0.05] text-[#524d5b]'
                        }`}
                      >
                        <NodeIcon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold font-mono truncate text-[#0f0e13]">
                          {node.label}
                        </div>
                        <div className="text-[10px] text-[#726c7e] truncate mt-0.5">
                          {node.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
