"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogClient({ blogs }: { blogs: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden bg-[#0a192f]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/30 to-[#0a192f]" />
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#64ffda]/20 rounded-full"
            style={{
              left: `${(i * 5.5) % 100}%`,
              top: `${(i * 6) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.15,
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
            className="text-center mb-16"
            style={{ opacity }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block font-mono text-[#64ffda] text-sm mb-4"
            >
              03. Latest Articles
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4"
            >
              Latest Articles
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{ y }}
              >
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                    {/* Animated glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                    />

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden z-10">
                      <motion.img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                      {blog.featured && (
                        <motion.div
                          className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded"
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          Featured
                        </motion.div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col z-10 relative">
                      <motion.div
                        className="flex items-center text-xs text-[#8892b0] mb-3 font-mono"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          animate={{
                            rotate: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Calendar className="w-4 h-4 mr-2 inline" />
                        </motion.div>
                        <span>{formatDate(blog.publishedAt)}</span>
                        <span className="mx-2">•</span>
                        <Clock className="w-4 h-4 mr-2 inline" />
                        <span>{blog.readingTime} min read</span>
                      </motion.div>
                      <motion.h3
                        className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {blog.title}
                      </motion.h3>
                      <p className="text-[#8892b0] mb-4 text-sm line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono text-[#64ffda] border border-[#233554] rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: 0.3 + index * 0.1 + tagIndex * 0.05,
                            }}
                            whileHover={{
                              scale: 1.15,
                              borderColor: "#64ffda",
                              backgroundColor: "#64ffda",
                              color: "#0a192f",
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <motion.div
                        className="inline-flex items-center text-sm font-mono text-[#64ffda] transition-transform"
                        animate={{
                          x: hoveredIndex === index ? 5 : 0,
                        }}
                      >
                        Read Article
                        <motion.span
                          animate={{
                            x: hoveredIndex === index ? [0, 5, 0] : 0,
                          }}
                          transition={{
                            duration: 1,
                            repeat: hoveredIndex === index ? Infinity : 0,
                          }}
                        >
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
            style={{ opacity }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono text-sm rounded transition-all hover:bg-[#64ffda]/10 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">View All Articles</span>
                <motion.span
                  className="relative z-10 ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
