'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { generateSlug } from '@/lib/utils'
import toast from 'react-hot-toast'
import dynamic from 'next/dynamic'

const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
})

export default function NewBlogPostPage() {
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image: '',
    author: 'Asad Abbas',
    publishedAt: new Date().toISOString().split('T')[0],
    tags: '',
    featured: false,
  })

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (formData.title && !formData.slug) {
      setFormData(prev => ({
        ...prev,
        slug: generateSlug(prev.title)
      }))
    }
  }, [formData.title])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/admin/login')
      return
    }
    setUser(user)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0)

      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: tagsArray,
          publishedAt: new Date(formData.publishedAt).toISOString(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Blog post created successfully!')
        router.push('/admin/blog')
      } else {
        toast.error(data.error || 'Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      toast.error('Failed to create post. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/admin/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </Link>

        <Card className="p-8" disableAnimation>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create New Blog Post
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter blog post title"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="url-friendly-slug"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                URL: /blog/{formData.slug || 'your-slug'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Short description (50-150 words)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Content *
              </label>
              <RichTextEditor
                value={formData.content}
                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                placeholder="Write your blog post content here..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://images.pexels.com/photos/..."
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Published Date
                </label>
                <input
                  type="date"
                  value={formData.publishedAt}
                  onChange={(e) => setFormData(prev => ({ ...prev, publishedAt: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="React, Next.js, TypeScript"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="featured" className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Featured (show on homepage)
              </label>
            </div>

            <div className="flex gap-3">
              <Button type="submit" disabled={saving}>
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Creating...' : 'Create Post'}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/blog">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

