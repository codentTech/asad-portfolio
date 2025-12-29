import { createApiClient } from './api'
import { BlogPost } from '@/types'
import { calculateReadingTime } from '../utils'

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }

  return (data || []).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image || 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: post.author || 'Asad Abbas',
    publishedAt: post.published_at || post.created_at,
    readingTime: post.reading_time || calculateReadingTime(post.content),
    tags: post.tags || [],
    featured: post.featured || false,
  }))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
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
    excerpt: data.excerpt,
    content: data.content,
    image: data.image || 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: data.author || 'Asad Abbas',
    publishedAt: data.published_at || data.created_at,
    readingTime: data.reading_time || calculateReadingTime(data.content),
    tags: data.tags || [],
    featured: data.featured || false,
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const supabase = createApiClient()
  
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('featured', true)
    .order('published_at', { ascending: false })
    .limit(3)

  if (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }

  return (data || []).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    image: post.image || 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: post.author || 'Asad Abbas',
    publishedAt: post.published_at || post.created_at,
    readingTime: post.reading_time || calculateReadingTime(post.content),
    tags: post.tags || [],
    featured: post.featured || false,
  }))
}

