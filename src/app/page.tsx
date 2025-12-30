import HeroSection from "@/components/sections/HeroSection";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load below-the-fold sections for better performance
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const ServicesSection = dynamic(
  () => import("@/components/sections/ServicesSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const BlogSection = dynamic(() => import("@/components/sections/BlogSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const CTASection = dynamic(() => import("@/components/sections/CTASection"), {
  loading: () => <div className="min-h-[200px]" />,
});

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, React, and modern web applications.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <BlogSection />
      </Suspense>
    </>
  );
}
