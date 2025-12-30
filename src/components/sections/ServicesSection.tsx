"use client";

import { useState, useRef } from "react";
import { TrendingUp, Zap, BarChart } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/services";

const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  BarChart,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden bg-[#0a192f]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/50 to-transparent" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#64ffda]/20 rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
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
              04. Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              My Approach
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || TrendingUp;
          return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 50, scale: 0.9 }
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
                  whileHover={{ y: -10 }}
                  style={{ y }}
                >
                  <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-8 h-full hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative mb-4">
                      <motion.div
                        className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                        }}
                      />
                      <motion.div
                        className="relative w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          animate={{
                            rotate: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <Icon className="w-6 h-6 text-[#64ffda]" />
                        </motion.div>
                      </motion.div>
                </div>

                    <motion.h3
                      className="text-xl font-bold mb-3 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                {service.title}
                    </motion.h3>
                    <p className="text-sm text-[#8892b0] mb-4 leading-relaxed">
                {service.description}
              </p>
                    <ul className="space-y-2">
                {service.features.map((feature, i) => (
                        <motion.li
                    key={i}
                          className="text-sm text-[#8892b0] flex items-center font-mono"
                          initial={{ opacity: 0, x: -10 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -10 }
                          }
                          transition={{
                            duration: 0.3,
                            delay: 0.3 + index * 0.1 + i * 0.05,
                          }}
                          whileHover={{ x: 5, color: "#64ffda" }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mr-3"
                            animate={{
                              scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                            }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          />
                    {feature}
                        </motion.li>
                ))}
              </ul>
                  </div>
                </motion.div>
              );
        })}
          </div>
        </div>
      </div>
    </section>
  );
}
