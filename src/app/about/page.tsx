import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Asad Abbas, a Full-Stack Developer with 7+ years of experience building AI-powered applications, intelligent automation systems, and scalable web solutions. Expert in LLMs, RAG systems, backend engineering, and modern web technologies.",
  openGraph: {
    title: "About | Asad Abbas",
    description:
      "Full-Stack Developer with 7+ years of experience specializing in AI/ML integration, backend engineering, and modern web applications. Expert in LLMs, RAG systems, and automation.",
    url: "https://asadabbas.com/about",
  },
  twitter: {
    card: "summary",
    title: "About | Asad Abbas",
    description: "Full-Stack Developer with 7+ years of experience in AI/ML integration, backend engineering, and modern web applications.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
