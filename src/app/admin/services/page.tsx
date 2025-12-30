'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import AdminLayout from '@/components/admin/AdminLayout'
import { motion } from 'framer-motion'
import ConfirmModal from '@/components/ui/ConfirmModal'
import { Service } from '@/types'
import toast from 'react-hot-toast'

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [deleteModal, setDeleteModal] = useState<{ isOpen: boolean; service: Service | null }>({
    isOpen: false,
    service: null,
  })
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    checkAuth()
    fetchServices()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/admin/login')
      return
    }
    setUser(user)
  }

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/services')
      const data = await response.json()
      if (response.ok) {
        setServices(data.services || [])
      } else {
        toast.error(data.error || 'Failed to fetch services')
      }
    } catch (error) {
      console.error('Error fetching services:', error)
      toast.error('Failed to fetch services')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteClick = (service: Service) => {
    setDeleteModal({ isOpen: true, service })
  }

  const handleDeleteConfirm = async () => {
    if (!deleteModal.service) return

    try {
      const response = await fetch(`/api/services/${deleteModal.service.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Service deleted successfully')
        fetchServices()
      } else {
        const data = await response.json()
        toast.error(data.error || 'Failed to delete service')
      }
    } catch (error) {
      console.error('Error deleting service:', error)
      toast.error('Failed to delete service')
    } finally {
      setDeleteModal({ isOpen: false, service: null })
    }
  }

  if (loading) {
    return (
      <AdminLayout title="Services Management" description="Manage your services">
        <div className="flex items-center justify-center py-20">
          <div className="text-[#8892b0]">Loading...</div>
        </div>
      </AdminLayout>
    )
  }

  return (
    <>
      <AdminLayout
        title="Services Management"
        description="Manage your services"
        actionButton={
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/services/new"
              className="inline-flex items-center px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4]"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Service
            </Link>
          </motion.div>
        }
      >
        {/* Services List */}
        {services.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] border border-[#233554] rounded-lg p-12 text-center"
          >
            <p className="text-[#8892b0] mb-6">No services yet. Create your first service!</p>
            <Link
              href="/admin/services/new"
              className="inline-flex items-center px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Service
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#112240] border border-[#233554] rounded-lg p-6 hover:border-[#64ffda] transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#ccd6f6]">{service.title}</h3>
                      {service.featured && (
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-[#64ffda] text-[#0a192f] font-mono">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[#8892b0] mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center gap-4 text-sm text-[#8892b0] font-mono">
                      <span>Icon: {service.icon}</span>
                      <span className="text-[#233554]">•</span>
                      <span>{service.features?.length || 0} features</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {service.slug && (
                      <motion.a
                        href={`/services/${service.slug}`}
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 border border-[#233554] text-[#8892b0] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.a>
                    )}
                    <motion.a
                      href={`/admin/services/${service.id}/edit`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-[#8892b0] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      onClick={() => handleDeleteClick(service)}
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
        onClose={() => setDeleteModal({ isOpen: false, service: null })}
        onConfirm={handleDeleteConfirm}
        title="Delete Service"
        message={`Are you sure you want to delete "${deleteModal.service?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </>
  )
}

