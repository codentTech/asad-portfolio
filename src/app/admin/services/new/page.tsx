'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import toast from 'react-hot-toast'

const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
})

const availableIcons = ['TrendingUp', 'Zap', 'BarChart', 'Code', 'ShoppingCart', 'CheckCircle2', 'Clock', 'Users', 'Target']

export default function NewServicePage() {
  const [saving, setSaving] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'TrendingUp',
    features: '',
    content: '',
    image: '',
    featured: false,
  })

  useEffect(() => {
    checkAuth()
  }, [])

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
      const featuresArray = formData.features
        .split(',')
        .map(feature => feature.trim())
        .filter(feature => feature.length > 0)

      const response = await fetch('/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          features: featuresArray,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Service created successfully!')
        router.push('/admin/services')
      } else {
        toast.error(data.error || 'Failed to create service')
      }
    } catch (error) {
      console.error('Error creating service:', error)
      toast.error('Failed to create service. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#0a192f] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/admin/services"
          className="inline-flex items-center gap-2 text-[#8892b0] hover:text-[#64ffda] mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Services
        </Link>

        <div className="bg-[#112240] border border-[#233554] rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#ccd6f6]">
            Create New Service
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                placeholder="Enter service title"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                placeholder="Short description of the service"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Icon *
              </label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
              >
                {availableIcons.map(icon => (
                  <option key={icon} value={icon} className="bg-[#0a192f]">{icon}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Features (comma-separated)
              </label>
              <input
                type="text"
                value={formData.features}
                onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                placeholder="Feature 1, Feature 2, Feature 3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Content
              </label>
              <RichTextEditor
                value={formData.content}
                onChange={(html) => setFormData(prev => ({ ...prev, content: html }))}
                placeholder="Enter detailed service content..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2 font-mono">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] focus:outline-none focus:border-[#64ffda] transition-colors"
                placeholder="https://images.pexels.com/photos/..."
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 rounded border-[#233554] bg-[#0a192f] text-[#64ffda] focus:ring-[#64ffda]"
              />
              <label htmlFor="featured" className="text-sm font-semibold text-[#ccd6f6] font-mono">
                Featured (show on homepage)
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Creating...' : 'Create Service'}
              </button>
              <Link
                href="/admin/services"
                className="inline-flex items-center px-6 py-3 border border-[#233554] text-[#8892b0] font-mono text-sm rounded transition-all hover:border-[#64ffda] hover:text-[#64ffda]"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

