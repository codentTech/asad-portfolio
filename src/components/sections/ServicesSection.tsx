'use client'

import { Code, Zap, BarChart, ShoppingCart, TrendingUp } from 'lucide-react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { services } from '@/data/services'

const iconMap: Record<string, any> = {
  Code,
  Zap,
  BarChart,
  ShoppingCart,
  TrendingUp,
}

export default function ServicesSection() {
  return (
    <Section
      title="Services"
      subtitle="What I can help you build"
      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Code
          return (
            <Card key={service.id} cursorFollow={true} className="p-6 sm:p-8 group">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-gray-900 dark:to-gray-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
