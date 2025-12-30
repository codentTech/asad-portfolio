import { getFeaturedServices } from "@/lib/supabase/services";
import ServicesClient from "./ServicesClient";

export default async function ServicesSection() {
  const featuredServices = await getFeaturedServices();

  if (featuredServices.length === 0) {
    return null;
  }

  return <ServicesClient services={featuredServices} />;
}
