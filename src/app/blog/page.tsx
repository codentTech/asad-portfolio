import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/supabase/blog'
import BlogPageClient from './BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles about web development, Next.js, TypeScript, React, and modern web technologies.',
  openGraph: {
    title: 'Blog | Asad Abbas',
    description: 'Thoughts on web development and technology.',
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  return <BlogPageClient posts={blogPosts} />
}
