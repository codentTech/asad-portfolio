"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/30 to-[#020c1b]" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#64ffda]/10 rounded-full blur-sm"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
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
              04. Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Projects Grid (Mobile/Tablet) */}
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#8892b0]">
                No projects yet. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* Grid Layout for Mobile/Tablet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
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
                  >
                    <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
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
                      <div className="p-5 flex-1 flex flex-col relative">
                        <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.techStack
                            .slice(0, 4)
                            .map((tech: string, techIndex: number) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
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
                          className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Infinite Scroller for Desktop */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative overflow-hidden mb-8"
              >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#020c1b] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#020c1b] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-6 portfolio-scroll">
                  {/* First set */}
                  <div className="flex gap-6 shrink-0">
                    {projects.map((project, index) => (
                      <div
                        key={`${project.id}-1`}
                        className="group w-80 sm:w-96 flex-shrink-0"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
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
                          <div className="p-5 flex-1 flex flex-col relative">
                            <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.techStack
                                .slice(0, 4)
                                .map((tech: string, techIndex: number) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
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
                              className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all"
                            >
                              View Details
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-6 shrink-0" aria-hidden="true">
                    {projects.map((project, index) => (
                      <div
                        key={`${project.id}-2`}
                        className="group w-80 sm:w-96 flex-shrink-0"
                      >
                        <div className="relative bg-[#112240] border border-[#233554] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 h-full flex flex-col">
                          {/* Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
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
                          <div className="p-5 flex-1 flex flex-col relative">
                            <h3 className="text-lg font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-[#8892b0] mb-3 text-xs sm:text-sm line-clamp-3 flex-1">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {project.techStack
                                .slice(0, 4)
                                .map((tech: string, techIndex: number) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
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
                              className="inline-flex items-center text-sm font-mono text-[#64ffda] hover:text-[#52e0c4] transition-all"
                            >
                              View Details
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
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
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono text-sm rounded transition-all hover:bg-[#64ffda]/10 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">View All Projects</span>
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
        .portfolio-scroll {
          animation: scrollProjects 60s linear infinite;
        }
        @keyframes scrollProjects {
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
