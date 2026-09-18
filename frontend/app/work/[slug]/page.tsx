import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { projectsData, getProjectBySlug } from '@/data/projects';
import { CaseStudyInteractiveHeader } from '@/components/work/CaseStudyInteractiveHeader';
import { CaseStudyMockupStage } from '@/components/work/CaseStudyMockupStage';
import { CaseStudyImpactMetrics } from '@/components/work/CaseStudyImpactMetrics';
import { CaseStudyTransformation } from '@/components/work/CaseStudyTransformation';
import { CaseStudyTestimonialAndNext } from '@/components/work/CaseStudyTestimonialAndNext';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Case Study Not Found | Zylux Software Solutions',
    };
  }

  return {
    title: `${project.title} — Case Study | Zylux Software Solutions`,
    description: `${project.tagline}. ${project.summary}`,
    openGraph: {
      title: `${project.title} — Case Study | Zylux Software Solutions`,
      description: project.summary,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for continuous navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="py-6 sm:py-10 md:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 01. Editorial Hero & Quick Spec Matrix */}
        <CaseStudyInteractiveHeader project={project} />

        {/* 02. Cyber Browser Device Stage Mockup */}
        <CaseStudyMockupStage project={project} />

        {/* 03. Production ROI & SLA Metrics Command Center */}
        <CaseStudyImpactMetrics metrics={project.metrics} />

        {/* 04. Execution Transformation (Challenge vs Solution) & Architecture Scope */}
        <CaseStudyTransformation project={project} />

        {/* 05. Tech Matrix, Verified Testimonial & Next Case Study Transition */}
        <CaseStudyTestimonialAndNext project={project} nextProject={nextProject} />
      </div>
    </article>
  );
}
