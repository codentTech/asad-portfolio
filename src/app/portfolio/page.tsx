import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { getAllProjects } from '@/lib/supabase/projects'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore my portfolio of AI-powered applications, intelligent automation systems, SaaS platforms, e-commerce solutions, and full-stack projects. Built with Next.js, Node.js, Python, and modern technologies.',
  openGraph: {
    title: 'Portfolio | Asad Abbas',
    description: 'Explore my portfolio of AI-powered applications, intelligent automation systems, and full-stack projects.',
    url: 'https://asadabbas.com/portfolio',
  },
}

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function PortfolioPage() {
  const projects = await getAllProjects()
  return <PortfolioClient projects={projects} />
}
