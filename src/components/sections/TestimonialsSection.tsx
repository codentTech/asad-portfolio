"use client";

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden bg-[#020c1b]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/40 to-[#020c1b]" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#64ffda]/15 rounded-full"
            style={{
              left: `${(i * 8) % 100}%`,
              top: `${(i * 9) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + (i % 2),
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            style={{ opacity }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block font-mono text-[#64ffda] text-sm mb-4"
            >
              05. Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              Client Testimonials
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Infinite Scrolling Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020c1b] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020c1b] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 testimonials-scroll">
              {/* First set */}
              <div className="flex gap-6 shrink-0">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-1`}
                    className="group w-80 sm:w-96 flex-shrink-0"
                  >
                    <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full flex flex-col hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                      {/* Quote Icon */}
                      <div className="mb-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                          <Quote className="w-5 h-5 text-[#64ffda]" />
                        </div>
                      </div>

                      {/* Stars Rating */}
                      <div className="flex gap-1 mb-3 relative z-10">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#64ffda] text-[#64ffda]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-sm text-[#8892b0] mb-4 flex-grow leading-relaxed relative z-10">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-3 border-t border-[#233554] relative z-10">
                        <div className="relative flex-shrink-0">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#233554] group-hover:border-[#64ffda] transition-colors"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#ccd6f6] mb-0.5">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-[#8892b0] font-mono">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 shrink-0" aria-hidden="true">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-2`}
                    className="group w-80 sm:w-96 flex-shrink-0"
                  >
                    <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full flex flex-col hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                      {/* Quote Icon */}
                      <div className="mb-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                          <Quote className="w-5 h-5 text-[#64ffda]" />
                        </div>
                      </div>

                      {/* Stars Rating */}
                      <div className="flex gap-1 mb-3 relative z-10">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#64ffda] text-[#64ffda]"
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <p className="text-sm text-[#8892b0] mb-4 flex-grow leading-relaxed relative z-10">
                        &quot;{testimonial.content}&quot;
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-3 border-t border-[#233554] relative z-10">
                        <div className="relative flex-shrink-0">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#233554] group-hover:border-[#64ffda] transition-colors"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-[#ccd6f6] mb-0.5">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-[#8892b0] font-mono">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-scroll {
          animation: scrollTestimonials 50s linear infinite;
        }
        @keyframes scrollTestimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
