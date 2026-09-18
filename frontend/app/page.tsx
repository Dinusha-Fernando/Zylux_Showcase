import { Hero } from "@/components/hero/Hero";
import { WhatWeBuild } from "@/components/services/WhatWeBuild";
import { SelectedWork } from "@/components/work/SelectedWork";
import { HowWeWork } from "@/components/process/HowWeWork";
import { TechEcosystem } from "@/components/tech/TechEcosystem";
import { ProofBand } from "@/components/metrics/ProofBand";
import { PhilosophySnippet } from "@/components/about/PhilosophySnippet";
import { ClientReviews } from "@/components/reviews/ClientReviews";
import { WhoWeWorkWith } from "@/components/cta/WhoWeWorkWith";
import { ClientCTA } from "@/components/cta/ClientCTA";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero & Living Software Composition */}
      <Hero />

      {/* 02. What We Build (4 Expandable Horizontal Cards) */}
      <WhatWeBuild />

      {/* 03. Selected Work & Concrete Case Study Metrics */}
      <SelectedWork />

      {/* 04. How We Work (Discover -> Design -> Build -> Deploy) */}
      <HowWeWork />

      {/* 05. Built With The Right Stack & Architecture Diagram */}
      <TechEcosystem />

      {/* 06. Built to Deliver (Defensible Metric Badges) */}
      <ProofBand />

      {/* 07. Core Philosophy & Differentiator Snippet */}
      <PhilosophySnippet />

      {/* 08. Client Testimonials & Reviews (Tharindu, John, W.P.J. Charya) */}
      <ClientReviews />

      {/* 09. Who We Work With (Startups, SMBs, Enterprise, Product Owners) */}
      <WhoWeWorkWith />

      {/* 10. High-Impact Closing Client CTA */}
      <ClientCTA />
    </>
  );
}
