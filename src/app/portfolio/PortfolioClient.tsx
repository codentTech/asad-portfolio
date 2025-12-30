"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2, Zap, Globe } from "lucide-react";

export default function PortfolioClient({ projects }: { projects: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-100px" });

  // Calculate stats
  const featuredCount = projects.filter((p) => p.featured).length;
  const allTech = projects.flatMap((p) => p.techStack || []);
  const uniqueTech = Array.from(new Set(allTech));

  return (
    <div className="min-h-screen bg-[#0a192f] pt-20">
      {/* Header Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block font-mono text-[#64ffda] text-sm mb-4"
              >
                Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-6"
              >
                My Portfolio
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-[#8892b0] max-w-3xl mx-auto leading-relaxed mb-4"
              >
                A curated collection of projects I&apos;ve built and contributed to. Each project
                represents a unique challenge solved with modern technologies and best practices.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-[#8892b0] max-w-2xl mx-auto"
              >
                From scalable SaaS platforms to innovative web applications, explore my work and see
                how I bring ideas to life through code.
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "100px" } : { width: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-1 bg-[#64ffda] mx-auto mt-8"
              />
            </motion.div>

            {/* Stats Section */}
            <motion.div
              ref={introRef}
              initial={{ opacity: 0, y: 30 }}
              animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
            >
              {[
                {
                  icon: Code2,
                  label: "Total Projects",
                  value: `${projects.length}`,
                  description: "Applications built",
                },
                {
                  icon: Zap,
                  label: "Featured",
                  value: `${featuredCount}`,
                  description: "Highlighted work",
                },
                {
                  icon: Globe,
                  label: "Technologies",
                  value: `${uniqueTech.length}+`,
                  description: "Different tools used",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-[#112240] border border-[#233554] rounded-lg p-6 text-center hover:border-[#64ffda] transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-[#64ffda]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-[#64ffda] mb-2">{stat.value}</div>
                  <div className="text-[#ccd6f6] font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-[#8892b0] font-mono">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Projects Grid */}
            {projects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#8892b0] text-lg">No projects yet. Check back soon!</p>
              </div>
            ) : (
              <div ref={ref} className="mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold text-[#ccd6f6] mb-8 text-center"
                >
                  Featured Projects
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent" />
                          {project.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 bg-[#64ffda] text-[#0a192f] text-xs font-mono font-semibold rounded">
                              Featured
                            </div>
                          )}
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#112240]/90 backdrop-blur-sm rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] text-[#ccd6f6] transition-colors"
                                aria-label="Live demo"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#112240]/90 backdrop-blur-sm rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] text-[#ccd6f6] transition-colors"
                                aria-label="GitHub repository"
                              >
                                <Github className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-[#8892b0] mb-4 text-sm line-clamp-3 flex-1">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 4).map((tech: string) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded">
                                +{project.techStack.length - 4}
                              </span>
                            )}
                          </div>
                          <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:translate-x-2 transition-transform"
                          >
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-[#112240] border border-[#233554] rounded-lg p-12"
            >
              <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-lg text-[#8892b0] mb-8 max-w-2xl mx-auto">
                I&apos;m always interested in new challenges and exciting projects. Let&apos;s
                discuss how we can work together to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono text-sm rounded transition-all hover:bg-[#64ffda]/10"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
