"use client";

import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { experiences, skills, stats } from "@/data/about";

const skillCategories = {
  frontend: skills.filter((s) => s.category === "frontend"),
  backend: skills.filter((s) => s.category === "backend"),
  tools: skills.filter((s) => s.category === "tools"),
};

export default function AboutPageClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <div className="min-h-screen bg-[#0a192f] pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Glowing effect behind image */}
                  <motion.div
                    className="absolute inset-0 bg-[#64ffda]/20 rounded-full blur-3xl scale-150 opacity-50"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1.4, 1.6, 1.4],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main Person Image - Cutout Style (No Background) */}
                  <motion.div
                    className="relative z-10 min-h-[500px] flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img
                      src="/profile-image.png"
                      alt="Asad Abbas"
                      className="w-full h-full max-h-[600px] object-contain"
                      style={{
                        filter:
                          "drop-shadow(0 20px 40px rgba(100, 255, 218, 0.3)) drop-shadow(0 0 20px rgba(100, 255, 218, 0.2))",
                      }}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Decorative geometric elements - Subtle */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-16 h-16 border border-[#64ffda]/20 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 border border-[#64ffda]/15 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <div>
                  <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                    About Me
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#ccd6f6]">
                    Hi, I&apos;m{" "}
                    <span className="text-[#64ffda]">Asad Abbas</span>
                  </h1>
                </div>
                <p className="text-sm sm:text-base text-[#8892b0] leading-relaxed mb-3">
                  With over 7 years of experience, I&apos;ve helped numerous
                  companies build modern web applications, from startups to
                  enterprise-level solutions. I&apos;m passionate about clean
                  code, best practices, and continuous learning.
                </p>
                <p className="text-sm sm:text-base text-[#8892b0] leading-relaxed mb-3">
                  I am particularly passionate about AI/ML integration and
                  intelligent automation. My expertise includes working with
                  Large Language Models (LLMs), automating workflows, and
                  implementing smart systems that enhance productivity,
                  decision-making, and user engagement.
                </p>
                <p className="text-sm sm:text-base text-[#8892b0] leading-relaxed mb-3">
                  By combining AI-driven innovation, solid backend engineering,
                  and full-stack development, I deliver solutions that are
                  scalable, maintainable, and future-ready.
                </p>
                <p className="text-sm sm:text-base text-[#8892b0] leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and technical articles. I
                  believe in building not just functional, but delightful user
                  experiences that solve real-world problems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="py-16 bg-[#020c1b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Support Team",
                  value: `${stats.supportTeam}+`,
                },
                {
                  label: "Projects Completed",
                  value: `${stats.projectsCompleted}+`,
                },
                { label: "Clients Served", value: `${stats.clientsServed}+` },
                {
                  label: "Code Commits",
                  value: `${stats.codeCommits.toLocaleString()}+`,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-6 bg-[#112240] border border-[#233554] rounded-lg"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#64ffda] mb-1.5">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#8892b0] font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      {/* <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                Experience
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3">
                My Professional Journey
              </h2>
              <p className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto mt-3">
                A journey through my professional career, the companies
                I&apos;ve worked with, and the projects I&apos;ve contributed
                to.
              </p>
              <div className="h-1 bg-[#64ffda] w-24 mx-auto mt-6" />
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-[#112240] border border-[#233554] rounded-lg p-6 hover:border-[#64ffda] transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-[#64ffda]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-xl font-bold text-[#ccd6f6]">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-[#8892b0] font-mono">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-base text-[#64ffda] mb-3 font-mono">
                        {exp.company}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-[#8892b0] flex items-start text-xs sm:text-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mr-3 mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-[#112240] border border-[#233554] text-[#8892b0] text-xs sm:text-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Skills */}
      {/* <section className="py-20 sm:py-32 bg-[#020c1b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                Skills & Technologies
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3">
                Technologies I Work With
              </h2>
              <p className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto mt-3">
                A comprehensive overview of the technologies, frameworks, and
                tools I use to build modern web applications.
              </p>
              <div className="h-1 bg-[#64ffda] w-24 mx-auto mt-6" />
            </motion.div>

            <div className="space-y-12">
              {Object.entries(skillCategories).map(
                ([category, categorySkills], catIdx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                  >
                    <h3 className="text-xl font-bold mb-4 capitalize text-[#ccd6f6] font-mono">
                      {category}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {categorySkills.map((skill, skillIdx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm sm:text-base font-medium text-[#ccd6f6]">
                              {skill.name}
                            </span>
                            <span className="text-sm text-[#8892b0] font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-[#112240] rounded-full h-2 border border-[#233554]">
                            <div
                              className="bg-[#64ffda] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* Philosophy Section */}
      <section className="py-20 sm:py-32 bg-[#0a192f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                My Approach
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3">
                How I Work
              </h2>
              <div className="h-1 bg-[#64ffda] w-24 mx-auto" />
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "User-Centered Design",
                  description:
                    "I prioritize the end-user experience in every decision I make. Every feature, every line of code, is crafted with the user in mind to create intuitive and delightful experiences.",
                },
                {
                  title: "Clean & Maintainable Code",
                  description:
                    "I write code that&apos;s not just functional, but clean, well-documented, and maintainable. This ensures long-term success and makes collaboration easier.",
                },
                {
                  title: "Performance First",
                  description:
                    "Performance isn&apos;t an afterthought—it&apos;s built into every project from the ground up. I optimize for speed, efficiency, and scalability.",
                },
                {
                  title: "Continuous Learning",
                  description:
                    "Technology evolves rapidly, and so do I. I stay current with the latest trends, tools, and best practices to deliver cutting-edge solutions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#112240] border border-[#233554] rounded-lg p-5 hover:border-[#64ffda] transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#ccd6f6] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8892b0] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-[#020c1b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#112240] border border-[#233554] rounded-lg p-12"
            >
              <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-[#8892b0] mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out if you&apos;d like to collaborate!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                >
                  Get In Touch
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono text-sm rounded transition-all hover:bg-[#64ffda]/10"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
