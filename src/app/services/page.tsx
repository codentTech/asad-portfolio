import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { getAllServices } from "@/lib/supabase/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI-powered application development, intelligent automation, backend & API engineering, full-stack development, AI integration for existing products, and technical consulting. Expert in LLMs, RAG systems, and workflow optimization.",
  openGraph: {
    title: "Services | Asad Abbas",
    description: "AI-powered application development, intelligent automation, backend engineering, and full-stack development services. Expert in LLMs, RAG systems, and workflow optimization.",
    url: "https://asadabbas.com/services",
  },
};

export default async function ServicesPage() {
  const services = await getAllServices();
  return <ServicesPageClient services={services} />;
}
