import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { getAllProjects } from '@/lib/supabase/projects'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore my portfolio of web applications, SaaS dashboards, e-commerce solutions, and more. Built with Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'Portfolio | Asad Abbas',
    description: 'Explore my portfolio of web applications and projects.',
  },
}

export default async function PortfolioPage() {
  const projects = await getAllProjects()
  return <PortfolioClient projects={projects} />
}
