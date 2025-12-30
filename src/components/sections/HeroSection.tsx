"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      // Update cursor variant based on hover targets
      const target = e.target as HTMLElement;
      if (target?.closest("a, button")) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate background parallax based on mouse position
  const backgroundX = useTransform(scrollY, [0, 500], [0, 0], {
    clamp: false,
  });
  const backgroundY = useTransform(scrollY, [0, 500], [0, 0], {
    clamp: false,
  });

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-[#64ffda] pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorVariant === "hover" ? 1.5 : 1,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#64ffda] pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 700 }}
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f] pt-16 lg:pt-20 pb-8">
        {/* Background Image with Enhanced Parallax */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
              transform: `translate(${mousePosition.x / 50}px, ${
                mousePosition.y / 50
              }px) scale(1.15)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/90 to-[#0a192f]/95" />
          <div className="absolute inset-0 bg-[#020c1b]/60" />
        </div>

        {/* Animated Background Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(80)].map((_, i) => {
            const initialX = Math.random() * windowSize.width;
            const initialY = Math.random() * windowSize.height;
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#64ffda]/30 rounded-full"
                initial={{
                  x: initialX,
                  y: initialY,
                  opacity: 0.2,
                }}
                animate={{
                  y: [initialY, Math.random() * windowSize.height, initialY],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-20"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                background: `radial-gradient(circle, #64ffda, transparent)`,
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -50, 50, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content - Text on Image */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12 lg:py-16"
        >
          <div className="max-w-5xl mx-auto">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <motion.span
                className="text-[#64ffda] font-mono text-sm sm:text-base inline-block"
                whileHover={{ scale: 1.1 }}
              >
                Hi, my name is
              </motion.span>
            </motion.div>

            {/* Name with enhanced animations */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-[#ccd6f6] leading-tight px-2"
            >
              <motion.span
                className="block"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Asad Abbas.
              </motion.span>
            </motion.h1>

            {/* Big Headline with gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 text-[#8892b0] leading-tight px-2"
            >
              <motion.span
                className="block"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full Stack Development Meets AI Innovation
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-[#8892b0] max-w-2xl mx-auto mb-4 sm:mb-6 leading-relaxed px-4"
            >
              Proven Track Record – Delivered 50+ projects including AI-driven
              platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 mb-6 sm:mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <motion.a
                  href="/portfolio"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#64ffda] text-[#64ffda] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#64ffda]/10 hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] relative overflow-hidden group w-full sm:w-auto justify-center"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(100,255,218,0.4)",
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">View My Work</span>
                  <motion.span
                    className="relative z-10 ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#233554] text-[#ccd6f6] font-mono text-xs sm:text-sm rounded transition-all hover:border-[#64ffda] hover:text-[#64ffda] relative overflow-hidden group w-full sm:w-auto justify-center"
                  whileHover={{
                    borderColor: "#64ffda",
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-[#64ffda] opacity-0 group-hover:opacity-5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Get In Touch</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats with enhanced animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-[#233554] max-w-2xl mx-auto px-4"
            >
              {[
                { number: "50+", label: "Happy Client" },
                { number: "20+", label: "Support Team" },
                { number: "100", label: "Sales Count" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <motion.div
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-1"
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm text-[#8892b0] font-mono leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#64ffda] cursor-pointer group"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }
            }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.span
              className="text-xs font-mono mb-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll Down
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
