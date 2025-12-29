import type { Metadata } from "next";
import {
  Code,
  Zap,
  BarChart,
  ShoppingCart,
  TrendingUp,
  Check,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web Development, Next.js Applications, SaaS Dashboards, E-Commerce Solutions, and Performance & SEO Optimization services.",
  openGraph: {
    title: "Services | Asad Abbas",
    description: "Professional web development services for modern businesses.",
  },
};

const iconMap: Record<string, any> = {
  Code,
  Zap,
  BarChart,
  ShoppingCart,
  TrendingUp,
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section
        title="Services"
        subtitle="Comprehensive web development solutions tailored to your needs"
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <Card
                key={service.id}
                cursorFollow={true}
                className="p-6 sm:p-8 group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-gray-900 dark:to-gray-800 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
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
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-base sm:text-xl text-indigo-100 mb-4 sm:mb-6">
              Let&apos;s discuss how I can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-indigo-600 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto max-w-xs mx-auto"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
