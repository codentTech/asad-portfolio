import HeroSection from "@/components/sections/HeroSection";
import type { Metadata } from "next";
import nextDynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load below-the-fold sections for better performance
const AboutSection = nextDynamic(
  () => import("@/components/sections/AboutSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const ServicesSection = nextDynamic(
  () => import("@/components/sections/ServicesSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const ProjectsSection = nextDynamic(
  () => import("@/components/sections/ProjectsSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const TestimonialsSection = nextDynamic(
  () => import("@/components/sections/TestimonialsSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const BlogSection = nextDynamic(() => import("@/components/sections/BlogSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const ProjectFocusSection = nextDynamic(
  () => import("@/components/sections/ProjectFocusSection"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const CTASection = nextDynamic(() => import("@/components/sections/CTASection"), {
  loading: () => <div className="min-h-[200px]" />,
});

export const metadata: Metadata = {
  title: "Home",
  description:
    "Full-Stack Developer with 7+ years of experience building AI-powered applications, intelligent automation systems, and scalable web solutions. Expert in LLMs, RAG systems, backend engineering, Next.js, Node.js, and Python.",
  openGraph: {
    title: "Asad Abbas - Full-Stack Developer & AI/ML Engineer",
    description: "Full-Stack Developer specializing in AI/ML integration, backend engineering, and modern web applications. Expert in LLMs, RAG systems, and automation.",
    url: "https://asadabbas.com",
    type: "website",
  },
};

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ProjectFocusSection />
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
