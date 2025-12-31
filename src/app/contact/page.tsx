"use client";

import { useState, useRef, FormEvent } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "0px" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asadthedev@gmail.com",
      link: "mailto:asadthedev@gmail.com",
      description: "Send me an email anytime",
    },
  ];

  const whyContact = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      description: "I typically respond within 24-48 hours to all inquiries.",
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description:
        "Available for projects and consultations across different time zones.",
    },
    {
      icon: CheckCircle2,
      title: "Free Consultation",
      description:
        "Initial project discussions and consultations are always free of charge.",
    },
  ];

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
                Contact
              </motion.span>
              <motion.h1
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4"
              >
                Get In Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-[#8892b0] max-w-3xl mx-auto leading-relaxed mb-3"
              >
                Let&apos;s discuss your next project or just say hello. I&apos;m
                always interested in new opportunities and exciting challenges.
              </motion.p>
              <motion.p
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm sm:text-base text-[#8892b0] max-w-2xl mx-auto"
              >
                Whether you have a project in mind, a question, or just want to
                connect, feel free to reach out.
              </motion.p>
              <motion.div
                initial={{ width: "100px" }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="h-1 bg-[#64ffda] mx-auto mt-8"
              />
            </motion.div>

            {/* Why Contact Section */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, y: 30 }}
              animate={
                infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-5 mb-12"
            >
              {whyContact.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    infoInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-[#112240] border border-[#233554] rounded-lg p-5 text-center hover:border-[#64ffda] transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#64ffda]" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#ccd6f6] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8892b0] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-[#112240] border border-[#233554] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#ccd6f6]">
                    Send a Message
                  </h3>
                  <p className="text-sm text-[#8892b0] mb-5">
                    Fill out the form below and I&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2 font-mono"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] placeholder-[#8892b0] focus:border-[#64ffda] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2 font-mono"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] placeholder-[#8892b0] focus:border-[#64ffda] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2 font-mono"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] placeholder-[#8892b0] focus:border-[#64ffda] focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#ccd6f6] mb-2 font-mono"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-[#233554] bg-[#0a192f] text-[#ccd6f6] placeholder-[#8892b0] focus:border-[#64ffda] focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] text-sm font-mono"
                      >
                        Message sent successfully! I&apos;ll get back to you
                        soon.
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-400 text-sm font-mono"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono text-xs sm:text-sm rounded transition-all hover:bg-[#52e0c4] hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-[#112240] border border-[#233554] rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#ccd6f6]">
                    Contact Information
                  </h3>
                  <p className="text-sm text-[#8892b0] mb-6 leading-relaxed">
                    Feel free to reach out if you have any questions, want to
                    collaborate, or just want to say hello. I&apos;m always open
                    to discussing new projects and opportunities.
                  </p>

                  <div className="space-y-5">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 20 }
                        }
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-lg bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-[#64ffda]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#ccd6f6] mb-1 font-mono">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-[#64ffda] hover:underline block"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-[#64ffda]">{info.value}</p>
                          )}
                          <p className="text-sm text-[#8892b0] mt-1">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#112240] border border-[#233554] rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Clock className="w-6 h-6 text-[#64ffda] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-base font-semibold text-[#ccd6f6] mb-1.5 font-mono">
                        Response Time
                      </h4>
                      <p className="text-sm text-[#8892b0] leading-relaxed">
                        I typically respond within 24-48 hours. For urgent
                        matters, please mention it in your message and I&apos;ll
                        prioritize your request.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#112240] border border-[#233554] rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-[#ccd6f6] mb-4 font-mono">
                    What I&apos;m Looking For
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Meaningful AI and automation-focused projects",
                      "End-to-end full-stack applications with real business value",
                      "Backend-driven systems with smart integrations and APIs",
                      "AI-powered features for new or existing products",
                      "Technical consulting, architecture guidance, and code reviews",
                      "Long-term, trust-based collaborations",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-[#8892b0]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#64ffda] mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
