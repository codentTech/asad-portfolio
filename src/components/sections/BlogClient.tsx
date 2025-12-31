"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogClient({ blogs }: { blogs: any[] }) {
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
      className="relative py-16 sm:py-24 overflow-hidden bg-[#0a192f]"
    >
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
            className="text-center mb-12"
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
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

          {/* Blog Grid (Mobile/Tablet) */}
          {blogs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#8892b0]">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* Grid Layout for Mobile/Tablet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-8"
              >
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
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                          {blog.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col relative">
                          <div className="flex items-center text-xs text-[#8892b0] mb-3 font-mono">
                            <Calendar className="w-4 h-4 mr-2 inline" />
                            <span>{formatDate(blog.publishedAt)}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-2 inline" />
                            <span>{blog.readingTime} min read</span>
                          </div>
                          <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                            {blog.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {blog.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-mono text-[#64ffda] border border-[#233554] rounded hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all">
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Infinite Scroller for Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative overflow-hidden mb-8"
              >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 blogs-scroll">
              {/* First set */}
              <div className="flex gap-6 shrink-0">
                {blogs.map((blog, index) => (
                  <div
                    key={`${blog.id}-1`}
                    className="group w-80 sm:w-96 flex-shrink-0"
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                          {blog.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col relative">
                          <div className="flex items-center text-xs text-[#8892b0] mb-3 font-mono">
                            <Calendar className="w-4 h-4 mr-2 inline" />
                            <span>{formatDate(blog.publishedAt)}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-2 inline" />
                            <span>{blog.readingTime} min read</span>
                          </div>
                          <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                            {blog.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {blog.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-mono text-[#64ffda] border border-[#233554] rounded hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all">
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 shrink-0" aria-hidden="true">
                {blogs.map((blog, index) => (
                  <div
                    key={`${blog.id}-2`}
                    className="group w-80 sm:w-96 flex-shrink-0"
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                          {blog.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded">
                              Featured
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col relative">
                          <div className="flex items-center text-xs text-[#8892b0] mb-3 font-mono">
                            <Calendar className="w-4 h-4 mr-2 inline" />
                            <span>{formatDate(blog.publishedAt)}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-2 inline" />
                            <span>{blog.readingTime} min read</span>
                          </div>
                          <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                            {blog.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {blog.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs font-mono text-[#64ffda] border border-[#233554] rounded hover:border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all">
                            Read Article
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
            </>
          )}

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
            style={{ opacity }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
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

      <style jsx>{`
        .blogs-scroll {
          animation: scrollBlogs 60s linear infinite;
        }
        @keyframes scrollBlogs {
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
