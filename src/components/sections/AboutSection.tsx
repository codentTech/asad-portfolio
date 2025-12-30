"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const skills = [
  "Node.js",
  "Express.js",
  "Nest.js",
  "Python",
  "React.js",
  "Next.js",
  "TypeScript",
  "Angular",
  "OpenAI GPT",
  "Claude AI",
  "Gemini",
  "LangChain",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Hugging Face",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "Stripe",
  "PayPal",
  "FastAPI",
  "Flask",
  "Django",
  "RAG",
  "Vector DB",
  "Pinecone",
  "Weaviate",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden bg-[#0a192f]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b] via-[#0a192f] to-[#020c1b]" />
        <div className="absolute inset-0 bg-[#0a192f]/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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
              01. About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Content Layout - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start md:items-center mb-12">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center order-2 md:order-1"
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
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/slazzer-preview-7ebme.png"
                    alt="Asad Abbas"
                    className="w-full h-auto max-h-[550px] object-contain"
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

            {/* Right Side - Text Content */}
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 order-1 md:order-2 flex flex-col justify-center h-full"
            >
              <div className="space-y-4 text-[#8892b0] leading-relaxed">
                <p className="text-sm sm:text-base">
                  Bringing years of expertise and a diverse skill set to craft
                  intelligent, high-performance solutions. I specialize in
                  building scalable web applications, integrating cutting-edge
                  AI technologies, and delivering exceptional user experiences.
                </p>
                <p className="text-sm sm:text-base">
                  With a strong foundation in full-stack development and a
                  passion for artificial intelligence, I leverage modern
                  frameworks and tools to create innovative solutions that solve
                  real-world problems. My expertise spans from building robust
                  backend systems with Node.js and Python to developing
                  responsive frontend applications with React and Next.js.
                </p>
                <p className="text-sm sm:text-base">
                  I&apos;m particularly passionate about AI/ML integration,
                  working with Large Language Models (LLMs), building RAG
                  systems, and implementing intelligent automation solutions
                  that enhance productivity and user engagement.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-2"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-5 py-2 border-2 border-[#64ffda] text-[#64ffda] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#64ffda]/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Section - Full Width with Multiple Rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-[#8892b0] text-sm sm:text-base font-semibold text-center mb-6">
              Technologies & Skills:
            </p>

            {/* First Row - Scrolling Right */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 scroll-row-1">
                {/* First set */}
                <div className="flex gap-4 shrink-0">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-4 shrink-0" aria-hidden="true">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row - Scrolling Left */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 scroll-row-2">
                {/* First set */}
                <div className="flex gap-4 shrink-0">
                  {[...skills].reverse().map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-4 shrink-0" aria-hidden="true">
                  {[...skills].reverse().map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Third Row - Scrolling Right */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 scroll-row-3">
                {/* First set */}
                <div className="flex gap-4 shrink-0">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-4 shrink-0" aria-hidden="true">
                  {skills.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-4 py-2 bg-[#112240] border border-[#233554] rounded-lg text-[#8892b0] font-mono text-xs sm:text-sm whitespace-nowrap hover:border-[#64ffda] hover:text-[#64ffda] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .scroll-row-1 {
          animation: scrollRight 35s linear infinite;
        }
        .scroll-row-2 {
          animation: scrollLeft 40s linear infinite;
        }
        .scroll-row-3 {
          animation: scrollRight 38s linear infinite;
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
