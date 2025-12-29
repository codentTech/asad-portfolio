"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Code,
  Zap,
  Github,
  TrendingUp,
  Terminal,
  Database,
  Cpu,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Calculate responsive radius based on window width
  const getInnerRadius = () => {
    if (windowWidth < 375) return 50;
    if (windowWidth < 640) return 55;
    if (windowWidth < 768) return 70;
    if (windowWidth < 1024) return 85;
    return 120;
  };

  const getOuterRadius = () => {
    if (windowWidth < 375) return 65;
    if (windowWidth < 640) return 75;
    if (windowWidth < 768) return 95;
    if (windowWidth < 1024) return 115;
    return 160;
  };

  const getParticleRadius = () => {
    if (windowWidth < 375) return 85;
    if (windowWidth < 640) return 95;
    if (windowWidth < 768) return 115;
    if (windowWidth < 1024) return 135;
    return 180;
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center pt-20 sm:pt-16 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-16 transform-gpu">
            {/* Left Column - Content (Takes more space) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 md:space-y-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm">
                  <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-medium text-indigo-600 dark:text-indigo-300 tracking-wide">
                    Full-Stack / Frontend Engineer
                  </span>
            </div>
          </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-2"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-tight tracking-tight">
                  <span className="block text-gray-900 dark:text-white mb-0.5 sm:mb-1">
                    Building Modern
            </span>
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
                    Web Experiences
            </span>
                </h1>
              </motion.div>

              {/* Description */}
          <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
              >
                Specializing in{" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  Next.js
                </span>
                ,{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  TypeScript
                </span>
                , and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  React
                </span>
                .
                <br className="hidden sm:block" />
                <span className="block mt-0.5 sm:mt-1">
                  Creating scalable, performant, and beautiful web applications.
                </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-3 pt-2 sm:pt-3"
              >
                <Button
                  asChild
                  size="md"
                  className="group shadow-lg shadow-indigo-500/20 text-sm sm:text-base w-full md:w-auto"
                >
                  <Link href="/portfolio" className="w-full md:w-auto">
                    <span className="flex items-center justify-center">
                View My Work
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
              </Link>
            </Button>
                <Button
                  asChild
                  variant="outline"
                  size="md"
                  className="bg-white dark:bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:border-gray-400 dark:hover:border-gray-600 transition-all text-sm sm:text-base w-full md:w-auto"
                >
              <Link href="/contact" className="w-full md:w-auto">Get In Touch</Link>
            </Button>
          </motion.div>

              {/* Stats Row */}
          <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-3 sm:pt-4 md:pt-5 border-t border-gray-200 dark:border-gray-800"
              >
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-0.5">
                    6+
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Years Experience
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-0.5">
                    50+
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Projects
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-0.5">
                    30+
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    Clients
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 pt-2 sm:pt-3"
              >
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                  Tech Stack:
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {[
                    {
                      icon: Code,
                      label: "Next.js",
                      color: "text-indigo-600 dark:text-indigo-400",
                    },
                    {
                      icon: Zap,
                      label: "TS",
                      color: "text-purple-600 dark:text-purple-400",
                    },
                    {
                      icon: Github,
                      label: "React",
                      color: "text-indigo-500 dark:text-indigo-300",
                    },
                  ].map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors"
                    >
                      <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${color}`} />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Circular Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-5 relative mt-8 sm:mt-10 lg:mt-0 flex items-center justify-center mx-auto lg:mx-0"
            >
              <div className="relative w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] max-w-full">
                {/* Central Circle/Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-black dark:bg-gradient-to-br dark:from-indigo-500 dark:to-purple-500 flex items-center justify-center shadow-lg"
                  >
                    <Code className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 text-white" />
                  </motion.div>
                </div>

                {/* Orbiting Elements - Circle 1 */}
                {[
                  { icon: Terminal, size: "w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" },
                  { icon: Database, size: "w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" },
                  { icon: Cpu, size: "w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" },
                  { icon: Zap, size: "w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12" },
                ].map(({ icon: Icon, size }, index) => {
                  const radius = getInnerRadius();
                  const initialAngle = (index * 360) / 4;
                  return (
                    <motion.div
                      key={index}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        style={{
                          x: `${
                            radius * Math.cos((initialAngle * Math.PI) / 180)
                          }px`,
                          y: `${
                            radius * Math.sin((initialAngle * Math.PI) / 180)
                          }px`,
                        }}
                        className="absolute"
                      >
                        <div
                          className={`${size} rounded-full bg-black dark:bg-gray-800 border-2 border-gray-300 dark:border-indigo-800 shadow-lg flex items-center justify-center`}
                        >
                          <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white dark:text-indigo-400" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Orbiting Elements - Circle 2 (Outer) */}
                {[
                  { icon: Github, size: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" },
                  { icon: TrendingUp, size: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" },
                  { icon: Sparkles, size: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" },
                  { icon: Code, size: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" },
                  { icon: Zap, size: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" },
                ].map(({ icon: Icon, size }, index) => {
                  const radius = getOuterRadius();
                  const initialAngle = (index * 360) / 5;
                  return (
                    <motion.div
                      key={`outer-${index}`}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <motion.div
                        style={{
                          x: `${
                            radius * Math.cos((initialAngle * Math.PI) / 180)
                          }px`,
                          y: `${
                            radius * Math.sin((initialAngle * Math.PI) / 180)
                          }px`,
                        }}
                        className="absolute"
                      >
                        <div
                          className={`${size} rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 dark:from-purple-500/30 dark:to-indigo-500/30 border border-purple-300/50 dark:border-purple-700/50 shadow-md flex items-center justify-center backdrop-blur-sm`}
                        >
                          <Icon className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Floating Particles */}
                {[...Array(4)].map((_, i) => {
                  const particleRadius = getParticleRadius();
                  return (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute top-1/2 left-1/2 w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400/50 dark:bg-indigo-500/50"
                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}
                      animate={{
                        x: [
                          `calc(-50% + ${
                            particleRadius * Math.cos((i * 60 * Math.PI) / 180)
                          }px)`,
                        ],
                        y: [
                          `calc(-50% + ${
                            particleRadius * Math.sin((i * 60 * Math.PI) / 180)
                          }px)`,
                        ],
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  );
                })}
              </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transform-gpu hidden sm:flex"
        >
          <div className="flex flex-col items-center gap-1 sm:gap-1.5 text-gray-500 dark:text-gray-400 group cursor-pointer">
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">
              Scroll
            </span>
            <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
