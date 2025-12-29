import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { getAllProjects } from '@/lib/supabase/projects'

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

  return (
    <div className="pt-20">
      <Section title="My Portfolio" subtitle="A collection of projects I've built and contributed to">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <Card key={project.id} cursorFollow={true} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github className="w-4 h-4 text-gray-900 dark:text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}
