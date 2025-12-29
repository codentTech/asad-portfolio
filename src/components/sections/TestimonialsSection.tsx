"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section
      title="Client Testimonials"
      subtitle="What clients say about working with me"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-6 sm:p-8 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300"
                cursorFollow={false}
                hover={true}
                disableAnimation={true}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-4">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="relative flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 mb-0.5">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
