import { createApiClient } from './api'
import { Project } from '@/types'

export async function getAllProjects(): Promise<Project[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return (data || []).map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    longDescription: project.long_description,
    image: project.image,
    images: project.images || [],
    video: project.video || undefined,
    techStack: project.tech_stack || [],
    liveUrl: project.live_url || undefined,
    githubUrl: project.github_url || undefined,
    problem: project.problem,
    solution: project.solution,
    result: project.result,
    featured: project.featured || false,
    createdAt: project.created_at || project.created_at,
  }))
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }

  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    description: data.description,
    longDescription: data.long_description,
    image: data.image,
    images: data.images || [],
    video: data.video || undefined,
    techStack: data.tech_stack || [],
    liveUrl: data.live_url || undefined,
    githubUrl: data.github_url || undefined,
    problem: data.problem,
    solution: data.solution,
    result: data.result,
    featured: data.featured || false,
    createdAt: data.created_at || data.created_at,
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(6)

  if (error) {
    console.error('Error fetching featured projects:', error)
    return []
  }

  return (data || []).map((project) => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    description: project.description,
    longDescription: project.long_description,
    image: project.image,
    images: project.images || [],
    video: project.video || undefined,
    techStack: project.tech_stack || [],
    liveUrl: project.live_url || undefined,
    githubUrl: project.github_url || undefined,
    problem: project.problem,
    solution: project.solution,
    result: project.result,
    featured: project.featured || false,
    createdAt: project.created_at || project.created_at,
  }))
}
