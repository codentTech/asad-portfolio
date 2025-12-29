import type { Metadata } from 'next'
import { Briefcase, Code, Award, TrendingUp } from 'lucide-react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences, skills, stats } from '@/data/about'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Asad Abbas, a Full-Stack / Frontend Engineer with 6+ years of experience building modern web applications.',
  openGraph: {
    title: 'About | Asad Abbas',
    description: 'Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, and React.',
  },
}

export default function AboutPage() {
  const skillCategories = {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                alt="Asad Abbas"
                className="w-full max-w-full md:max-w-[500px] h-auto rounded-xl md:rounded-2xl shadow-2xl mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Hi, I&apos;m <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">Asad Abbas</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                I&apos;m a Full-Stack / Frontend Engineer with a passion for building exceptional digital experiences.
                I specialize in Next.js, TypeScript, and React, creating scalable, performant web applications
                that make a real impact.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With over {stats.yearsExperience} years of experience, I&apos;ve helped numerous companies build
                modern web applications, from startups to enterprise-level solutions. I&apos;m passionate about
                clean code, best practices, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {stats.yearsExperience}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {stats.projectsCompleted}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {stats.clientsServed}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
          </Card>
          <Card className="p-4 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {stats.codeCommits.toLocaleString()}+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Code Commits</div>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience" subtitle="My professional journey">
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-6 sm:p-8">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.role}</h3>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-base sm:text-lg text-purple-600 dark:text-purple-400 mb-3 sm:mb-4">{exp.company}</p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills & Technologies" subtitle="Technologies I work with">
        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 capitalize">{category}</h3>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

