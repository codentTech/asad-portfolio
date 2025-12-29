export interface Project {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  images?: string[]
  video?: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  problem: string
  solution: string
  result: string
  featured: boolean
  createdAt: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  publishedAt: string
  readingTime: number
  tags: string[]
  featured: boolean
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

