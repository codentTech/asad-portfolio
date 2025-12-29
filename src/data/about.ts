import { Experience, Skill } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'Tech Startup',
    role: 'Senior Full-Stack Engineer',
    period: '2022 - Present',
    description: [
      'Led development of multiple Next.js applications serving 100K+ users',
      'Architected scalable microservices using TypeScript and Node.js',
      'Mentored junior developers and established coding standards',
      'Improved application performance by 60% through optimization',
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'Digital Agency',
    role: 'Frontend Engineer',
    period: '2020 - 2022',
    description: [
      'Built responsive web applications for enterprise clients',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Optimized websites for performance and SEO',
      'Maintained and updated legacy React applications',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2018 - 2020',
    description: [
      'Developed custom websites for small businesses',
      'Implemented e-commerce solutions with payment integration',
      'Provided ongoing maintenance and support',
    ],
    technologies: ['React', 'JavaScript', 'WordPress', 'PHP'],
  },
]

export const skills: Skill[] = [
  { name: 'Next.js', level: 95, category: 'frontend' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Git', level: 90, category: 'tools' },
]

export const stats = {
  yearsExperience: 6,
  projectsCompleted: 50,
  clientsServed: 30,
  codeCommits: 5000,
}

