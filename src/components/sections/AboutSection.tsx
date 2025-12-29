'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'

export default function AboutSection() {
  return (
    <Section
      title="About Me"
      subtitle="Passionate about building exceptional digital experiences"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-gray-900/20 dark:to-gray-800/20 rounded-3xl blur-2xl" />
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Asad Abbas"
                className="w-full max-w-full md:max-w-[500px] h-auto rounded-2xl md:rounded-3xl shadow-2xl mx-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Full-Stack / Frontend Engineer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
              Building the Future of Web
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              I specialize in building modern, scalable web applications using Next.js, TypeScript, and React.
              With a focus on performance, SEO, and user experience, I create digital products that make an impact.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Over 6 years of experience delivering high-quality solutions for startups and enterprises.
              Passionate about clean code, best practices, and continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button asChild size="md" className="w-full sm:w-auto">
                <Link href="/about" className="w-full sm:w-auto">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="md" className="w-full sm:w-auto">
                <Link href="/portfolio" className="w-full sm:w-auto">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
