"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Code2 } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogPageClient({ posts }: { posts: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });

  // Get featured posts
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 6);

  // Get all unique tags
  const allTags = posts.flatMap((post) => post.tags || []);
  const uniqueTags = Array.from(new Set(allTags)).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#0a192f] pt-20">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block font-mono text-[#64ffda] text-sm mb-4"
              >
                Blog
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4"
              >
                Blog
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-[#8892b0] max-w-3xl mx-auto leading-relaxed mb-3"
              >
                Thoughts on web development, technology, and best practices. Sharing knowledge,
                experiences, and insights from my journey as a developer.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto"
              >
                From technical tutorials to industry insights, explore articles that help you build
                better web applications.
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100px" } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-1 bg-[#64ffda] mx-auto mt-8"
              />
            </motion.div>

            {/* Blog Stats */}
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16"
            >
              {[
                {
                  icon: BookOpen,
                  label: "Total Articles",
                  value: `${posts.length}`,
                  description: "Published posts",
                },
                {
                  icon: TrendingUp,
                  label: "Topics Covered",
                  value: `${uniqueTags.length}+`,
                  description: "Different subjects",
                },
                {
                  icon: Code2,
                  label: "Tech Focus",
                  value: "Modern",
                  description: "Latest technologies",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-[#112240] border border-[#233554] rounded-lg p-5 text-center hover:border-[#64ffda] transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#64ffda]" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#64ffda] mb-1.5">{stat.value}</div>
                  <div className="text-[#ccd6f6] font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-[#8892b0] font-mono">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#8892b0] text-lg">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div ref={ref} className="mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-8 text-center"
                >
                  Latest Articles
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                            {post.featured && (
                              <div className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded">
                                Featured
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-center text-xs text-[#8892b0] mb-2 font-mono">
                              <Calendar className="w-3.5 h-3.5 mr-2" />
                              <span>{formatDate(post.publishedAt)}</span>
                              <span className="mx-2">•</span>
                              <Clock className="w-3.5 h-3.5 mr-2" />
                              <span>{post.readingTime} min read</span>
                            </div>
                            <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {post.tags.slice(0, 3).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 text-xs font-mono text-[#64ffda] border border-[#233554] rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="inline-flex items-center text-sm font-mono text-[#64ffda] group-hover:translate-x-2 transition-transform">
                              Read Article
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Tags */}
            {uniqueTags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 bg-[#112240] border border-[#233554] rounded-lg p-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#ccd6f6] mb-4 text-center">
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {uniqueTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-mono text-[#64ffda] border border-[#233554] rounded-lg hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-[#112240] border border-[#233554] rounded-lg p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-3">
                Want to Stay Updated?
              </h2>
              <p className="text-sm sm:text-base text-[#8892b0] mb-6 max-w-2xl mx-auto">
                I regularly publish new articles about web development, best practices, and
                emerging technologies. Check back often for the latest insights and tutorials.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#52e0c4] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
