"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden bg-[#0a192f]">
      {/* Animated Background with gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#020c1b] to-[#0a192f]"
        style={{ y }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${(i * 5) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${150 + i * 100}px`,
              height: `${150 + i * 100}px`,
              background: `radial-gradient(circle, #64ffda, transparent)`,
              left: `${30 + i * 40}%`,
              top: `${40 + i * 20}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
          style={{ opacity, scale }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-8 h-8 text-[#64ffda]" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#ccd6f6] leading-tight"
          >
            <motion.span
              className="block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
          Let&apos;s Build Something Amazing Together
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base text-[#8892b0] mb-6 max-w-xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="relative"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(100,255,218,0.3)",
                    "0 0 40px rgba(100,255,218,0.5)",
                    "0 0 20px rgba(100,255,218,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#52e0c4] relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#64ffda]/10 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View Portfolio</span>
            </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
