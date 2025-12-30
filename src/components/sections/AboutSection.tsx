"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

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

          {/* Content Grid - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start md:items-center">
            {/* Left Side - Image (Cutout Style) */}
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
                  className="relative z-10 min-h-[500px] flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/slazzer-preview-7ebme.png"
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

            {/* Right Side - Text Content */}
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 order-1 md:order-2 flex flex-col justify-center h-full"
            >
              <div className="space-y-3 text-[#8892b0] leading-relaxed">
                <p className="text-sm sm:text-base">
                  Bringing years of expertise and a diverse skill set to craft
                  intelligent, high-performance solutions.
                </p>
              </div>

              <div>
                <p className="text-[#8892b0] mb-3 text-sm sm:text-base font-semibold">
                  Technologies:
                </p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[#8892b0] font-mono text-xs sm:text-sm">
                  {[
                    "Node.js",
                    "Express.js",
                    "Nest.js",
                    "Python",
                    "React.js",
                    "Next.js",
                    "TypeScript",
                    "Angular",
                    "OpenAI",
                    "LangChain",
                    "TensorFlow",
                    "PyTorch",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Stripe",
                    "PayPal",
                  ].map((tech, index) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center before:content-['▹'] before:text-[#64ffda] before:mr-3 before:text-sm"
                    >
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
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
        </div>
      </div>
    </section>
  );
}
