'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminDashboard() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/admin/login')
        return
      }
      // Redirect to blog page by default
      router.push('/admin/blog')
    }
    checkAuth()
  }, [router, supabase])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f]">
      <div className="text-[#8892b0]">Loading...</div>
    </div>
  )
}

