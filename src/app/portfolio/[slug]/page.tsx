import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/lib/supabase/projects'
import ProjectGallery from '@/components/portfolio/ProjectGallery'

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://asadabbas.com'
  const project = await getProjectBySlug(params.slug)
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `${baseUrl}/portfolio/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${baseUrl}/portfolio/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://asadabbas.com'
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.description,
    image: project.image,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    url: project.liveUrl || `${baseUrl}/portfolio/${project.slug}`,
    author: {
      '@type': 'Person',
      name: 'Asad Abbas',
      url: baseUrl,
    },
    keywords: project.techStack?.join(', ') || '',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/OnlineOnly',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <article className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>
        </header>

        {/* Gallery (includes featured image + gallery images) */}
        {project.image && (
          <ProjectGallery 
            featuredImage={project.image} 
            images={project.gallery || []} 
            title={project.title} 
          />
        )}

        {/* Video */}
        {project.video && (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <video
              src={project.video}
              controls
              className="w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Result</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}
