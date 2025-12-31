"use client";

import { useRef } from "react";
import {
  TrendingUp,
  Zap,
  BarChart,
  Code,
  ShoppingCart,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Settings,
  Briefcase,
  Rocket,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Service } from "@/types";

const iconMap: Record<string, any> = {
  TrendingUp,
  Zap,
  BarChart,
  Code,
  ShoppingCart,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Settings,
  Briefcase,
  Rocket,
};

export default function ServicesClient({ services }: { services: Service[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden bg-[#0a192f]"
    >
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
              02. Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              What I Offer
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Services Grid (Mobile/Tablet) */}
          {services.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#8892b0]">No services available yet.</p>
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
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mb-8"
              >
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
                      whileHover={{ y: -10 }}
                    >
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-5 transition-all duration-300">
                            <Icon className="w-6 h-6 text-[#64ffda]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#8892b0] mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        {service.features && service.features.length > 0 && (
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li
                                key={i}
                                className="text-sm text-[#8892b0] flex items-center font-mono hover:text-[#64ffda] transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
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
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

                <div className="flex gap-5 services-scroll">
                  {/* First set */}
                  <div className="flex gap-5 shrink-0">
                    {services.map((service, index) => {
                      const Icon = iconMap[service.icon] || TrendingUp;
                      return (
                        <div
                          key={`${service.id}-1`}
                          className="group w-80 sm:w-96 flex-shrink-0"
                        >
                          <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                            <div className="relative mb-4">
                              <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-5 transition-all duration-300">
                                <Icon className="w-6 h-6 text-[#64ffda]" />
                              </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-[#8892b0] mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            {service.features &&
                              service.features.length > 0 && (
                                <ul className="space-y-2">
                                  {service.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-[#8892b0] flex items-center font-mono hover:text-[#64ffda] transition-colors"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mr-3" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-5 shrink-0" aria-hidden="true">
                    {services.map((service, index) => {
                      const Icon = iconMap[service.icon] || TrendingUp;
                      return (
                        <div
                          key={`${service.id}-2`}
                          className="group w-80 sm:w-96 flex-shrink-0"
                        >
                          <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                            <div className="relative mb-4">
                              <div className="absolute inset-0 bg-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="relative w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-5 transition-all duration-300">
                                <Icon className="w-6 h-6 text-[#64ffda]" />
                              </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-[#8892b0] mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            {service.features &&
                              service.features.length > 0 && (
                                <ul className="space-y-2">
                                  {service.features.map((feature, i) => (
                                    <li
                                      key={i}
                                      className="text-sm text-[#8892b0] flex items-center font-mono hover:text-[#64ffda] transition-colors"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mr-3" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .services-scroll {
          animation: scrollServices 55s linear infinite;
        }
        @keyframes scrollServices {
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
