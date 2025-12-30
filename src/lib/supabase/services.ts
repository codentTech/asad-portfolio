import { createApiClient } from './api'
import { Service } from '@/types'

export async function getAllServices(): Promise<Service[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching services:', error)
    return []
  }

  return (data || []).map((service) => ({
    id: service.id,
    title: service.title,
    slug: service.slug || undefined,
    description: service.description,
    icon: service.icon,
    features: service.features || [],
    content: service.content || undefined,
    image: service.image || undefined,
    featured: service.featured ?? false,
    createdAt: service.created_at,
  }))
}

export async function getServiceById(id: string): Promise<Service | null> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug || undefined,
    description: data.description,
    icon: data.icon,
    features: data.features || [],
    content: data.content || undefined,
    image: data.image || undefined,
    featured: data.featured ?? false,
    createdAt: data.created_at,
  }
}

export async function getFeaturedServices(): Promise<Service[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(6)

  if (error) {
    console.error('Error fetching featured services:', error)
    return []
  }

  return (data || []).map((service) => ({
    id: service.id,
    title: service.title,
    slug: service.slug || undefined,
    description: service.description,
    icon: service.icon,
    features: service.features || [],
    content: service.content || undefined,
    image: service.image || undefined,
    featured: service.featured ?? false,
    createdAt: service.created_at,
  }))
}

