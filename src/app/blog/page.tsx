import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { getAllBlogPosts } from '@/lib/supabase/blog'
import { formatDate } from '@/lib/utils'

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

  return (
    <div className="pt-20">
      <Section
        title="Blog"
        subtitle="Thoughts on web development, technology, and best practices"
      >
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} cursorFollow={true} className="overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  {post.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="mx-1.5 sm:mx-2">•</span>
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 text-indigo-600 dark:text-indigo-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 transition-all"
                  >
                    Read Article
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
