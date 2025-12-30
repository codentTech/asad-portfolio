'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, FolderKanban, BookOpen, Settings } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
  description: string
  actionButton?: React.ReactNode
}

export default function AdminLayout({
  children,
  title,
  description,
  actionButton,
}: AdminLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    toast.success('Logged out successfully')
    router.push('/admin/login')
  }

  const tabs = [
    {
      name: 'Blog',
      href: '/admin/blog',
      icon: BookOpen,
      isActive: pathname?.startsWith('/admin/blog'),
    },
    {
      name: 'Portfolio',
      href: '/admin/portfolio',
      icon: FolderKanban,
      isActive: pathname?.startsWith('/admin/portfolio'),
    },
    {
      name: 'Services',
      href: '/admin/services',
      icon: Settings,
      isActive: pathname?.startsWith('/admin/services'),
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a192f] pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-[#ccd6f6]">{title}</h1>
              <p className="text-[#8892b0]">{description}</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-[#233554] text-[#8892b0] font-mono text-sm rounded transition-all hover:border-[#64ffda] hover:text-[#64ffda] flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </motion.button>
              {actionButton}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex gap-2 border-b border-[#233554]">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <Link key={tab.href} href={tab.href}>
                  <motion.div
                    className={`relative px-6 py-3 font-mono text-sm transition-colors ${
                      tab.isActive
                        ? 'text-[#64ffda]'
                        : 'text-[#8892b0] hover:text-[#ccd6f6]'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{tab.name}</span>
                    </div>
                    {tab.isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#64ffda]"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  )
}

