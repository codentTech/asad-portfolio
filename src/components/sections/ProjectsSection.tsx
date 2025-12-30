import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getFeaturedProjects } from "@/lib/supabase/projects";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsSection() {
  const featuredProjects = await getFeaturedProjects();

  if (featuredProjects.length === 0) {
    return null;
  }

  return <ProjectsClient projects={featuredProjects} />;
}
