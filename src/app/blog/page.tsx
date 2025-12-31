import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/supabase/blog'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about AI/ML integration, LLM applications, RAG systems, backend engineering, full-stack development, Next.js, TypeScript, React, and modern web technologies. Insights from building scalable, intelligent applications.',
  openGraph: {
    title: 'Blog | Asad Abbas',
    description: 'Articles about AI/ML integration, backend engineering, full-stack development, and modern web technologies.',
    url: 'https://asadabbas.com/blog',
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  return <BlogPageClient posts={blogPosts} />
}
