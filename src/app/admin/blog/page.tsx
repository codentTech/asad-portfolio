'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import ConfirmModal from '@/components/ui/ConfirmModal'
import { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'
import toast from 'react-hot-toast'

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; post: BlogPost | null }>({
    isOpen: false,
    post: null,
  })
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkAuth()
    fetchPosts()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/admin/login')
      return
    }
    setUser(user)
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      const data = await response.json()
      if (response.ok) {
        setPosts(data.posts || [])
      } else {
        toast.error(data.error || 'Failed to fetch blog posts')
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast.error('Failed to fetch blog posts')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (post: BlogPost) => {
    setDeleteModal({ isOpen: true, post })
  }

  const handleDeleteConfirm = async () => {
    if (!deleteModal.post) return

    try {
      const response = await fetch(`/api/blog/${deleteModal.post.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Blog post deleted successfully')
        fetchPosts()
      } else {
        const data = await response.json()
        toast.error(data.error || 'Failed to delete post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      toast.error('Failed to delete post')
    } finally {
      setDeleteModal({ isOpen: false, post: null })
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Blog Management" description="Manage your blog posts">
        <div className="flex items-center justify-center py-20">
          <div className="text-[#8892b0]">Loading...</div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <>
      <AdminLayout
        title="Blog Management"
        description="Manage your blog posts"
        actionButton={
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/blog/new"
              className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4] flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Post
            </Link>
          </motion.div>
        }
      >
        {/* Posts List */}
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] border border-[#233554] rounded-lg p-12 text-center"
          >
            <p className="text-[#8892b0] mb-6">No blog posts yet. Create your first post!</p>
            <Link
              href="/admin/blog/new"
              className="inline-flex items-center px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Post
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#112240] border border-[#233554] rounded-lg p-6 hover:border-[#64ffda] transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#ccd6f6]">{post.title}</h3>
                      {post.featured && (
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-[#64ffda] text-[#0a192f] font-mono">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[#8892b0] mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-[#8892b0] font-mono">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="text-[#233554]">•</span>
                      <span>{post.readingTime} min read</span>
                      <span className="text-[#233554]">•</span>
                      <span>{post.tags.length} tags</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <motion.a
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-[#8892b0] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={`/admin/blog/${post.id}/edit`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-[#8892b0] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      onClick={() => handleDeleteClick(post)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-red-400 rounded hover:border-red-400 hover:bg-red-400/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AdminLayout>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, post: null })}
        onConfirm={handleDeleteConfirm}
        title="Delete Blog Post"
        message={`Are you sure you want to delete "${deleteModal.post?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </>
  )
}
