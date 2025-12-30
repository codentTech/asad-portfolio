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
      className="relative py-20 sm:py-32 overflow-hidden bg-[#0a192f]"
    >
      {/* Background Image with Text Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
            transform: `translateY(${y}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/85 to-[#0a192f]/95" />
        <div className="absolute inset-0 bg-[#020c1b]/70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
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
              01. About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4"
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

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-lg overflow-hidden border-2 border-[#64ffda]/20 bg-[#112240]">
                <div className="relative" style={{ paddingBottom: "100%" }}>
                  <img
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                    alt="Asad Abbas"
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              style={{ opacity }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-[#8892b0] leading-relaxed">
                <p className="text-lg">
                  Hello! I&apos;m Asad Abbas, a Full-Stack / Frontend Engineer
                  based in{" "}
                  <span className="text-[#64ffda]">[Your Location]</span>.
                </p>
                <p className="text-lg">
                  I specialize in building exceptional digital experiences.
                  Currently, I&apos;m focused on building accessible,
                  human-centered products using modern web technologies.
                </p>
                <p className="text-lg">
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, or anything in between. My
                  goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-[#8892b0] mb-4 text-lg">
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-[#8892b0] font-mono text-sm">
                  {[
                    "Next.js",
                    "TypeScript",
                    "React",
                    "Node.js",
                    "Tailwind CSS",
                    "PostgreSQL",
                  ].map((tech, index) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center before:content-['▹'] before:text-[#64ffda] before:mr-2"
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
                className="pt-4"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-mono text-sm rounded transition-all hover:bg-[#64ffda]/10"
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
