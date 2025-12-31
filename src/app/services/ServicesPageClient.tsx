"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Code,
  Zap,
  BarChart,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Target,
  Settings,
  Briefcase,
  Rocket,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Service } from "@/types";

const iconMap: Record<string, any> = {
  Code,
  Zap,
  BarChart,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Settings,
  Briefcase,
  Rocket,
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "Understanding your goals, target audience, and project requirements to create a detailed roadmap.",
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Building your solution with modern technologies, following best practices and your design specifications.",
  },
  {
    step: "03",
    title: "Testing & Optimization",
    description:
      "Rigorous testing, performance optimization, and ensuring cross-browser compatibility.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Deploying your project and providing ongoing maintenance and support as needed.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Efficient development process ensuring timely project delivery without compromising quality.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Code",
    description:
      "Clean, maintainable, and scalable code following industry best practices and standards.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "Working closely with you throughout the project to ensure your vision is realized.",
  },
  {
    icon: Target,
    title: "Result-Driven",
    description:
      "Focus on delivering solutions that drive real business value and user satisfaction.",
  },
];

export default function ServicesPageClient({
  services,
}: {
  services: Service[];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: "0px" });

  return (
    <div className="min-h-screen bg-[#0a192f] pt-20">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block font-mono text-[#64ffda] text-sm mb-4"
              >
                Services
              </motion.span>
              <motion.h1
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4"
              >
                Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-[#8892b0] max-w-6xl mx-auto leading-relaxed mb-3"
              >
                I provide AI-driven and automation-first software solutions
                designed to be scalable, secure, and business-focused. My
                services center on building intelligent systems that streamline
                workflows, enhance user experiences, and deliver real,
                measurable impact.
              </motion.p>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base text-[#8892b0] max-w-5xl mx-auto leading-relaxed mb-3"
              >
                I specialize in AI/ML integration and intelligent automation,
                including LLM-powered applications, RAG systems, smart APIs, and
                workflow automation that reduce manual effort and improve
                decision-making.
              </motion.p>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm sm:text-base text-[#8892b0] max-w-4xl mx-auto"
              >
                Whether you need a complete AI-enabled application, automation
                of existing processes, or technical consulting and architecture
                guidance, I work closely with you to deliver solutions that are
                reliable, efficient, and built for scale.
              </motion.p>
              <motion.div
                initial={{ width: "100px" }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="h-1 bg-[#64ffda] mx-auto mt-8"
              />
            </motion.div>

            {/* Services Grid */}
            <div ref={ref} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-8 text-center"
              >
                What I Offer
              </motion.h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => {
                  const Icon = iconMap[service.icon] || Code;
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                      }
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="group"
                    >
                      <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full hover:border-[#64ffda] transition-all duration-300">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-[#64ffda]/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-12 h-12 rounded-xl bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center transform group-hover:scale-110 group-hover:border-[#64ffda] transition-all duration-300">
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
                                className="text-sm text-[#8892b0] flex items-center font-mono"
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
              </div>
            </div>

            {/* Process Section */}
            <div ref={processRef} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                  My Process
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-3">
                  How I Work
                </h2>
                <p className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto">
                  A structured approach to ensure your project succeeds from
                  start to finish
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      processInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-[#112240] border border-[#233554] rounded-lg p-5 hover:border-[#64ffda] transition-all duration-300"
                  >
                    <div className="text-[#64ffda] font-mono text-xs sm:text-sm mb-2">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#ccd6f6] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8892b0] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <span className="inline-block font-mono text-[#64ffda] text-sm mb-4">
                  Why Work With Me
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-3">
                  What Sets My Services Apart
                </h2>
                <p className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto">
                  Combining technical expertise with a focus on delivering real
                  value
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#112240] border border-[#233554] rounded-lg p-5 text-center hover:border-[#64ffda] transition-all duration-300"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                        <benefit.icon className="w-5 h-5 text-[#64ffda]" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-[#ccd6f6] mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8892b0] leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-[#112240] border border-[#233554] rounded-lg p-8"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#ccd6f6]">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base text-[#8892b0] mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how I can help bring your vision to life.
                I&apos;m always excited to work on new and challenging projects.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#52e0c4] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
