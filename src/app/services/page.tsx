import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { getAllServices } from "@/lib/supabase/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web Development, Next.js Applications, SaaS Dashboards, E-Commerce Solutions, and Performance & SEO Optimization services.",
  openGraph: {
    title: "Services | Asad Abbas",
    description: "Professional web development services for modern businesses.",
  },
};

export default async function ServicesPage() {
  const services = await getAllServices();
  return <ServicesPageClient services={services} />;
}
