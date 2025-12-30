"use client";

import { useState, useRef, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Calculate how many testimonials to show per slide based on screen size
  const getSlidesPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView);
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * slidesPerView;
    return testimonials.slice(start, start + slidesPerView);
  };

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden bg-[#020c1b]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/40 to-[#020c1b]" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-[#64ffda]/15 rounded-full"
            style={{
              left: `${(i * 8) % 100}%`,
              top: `${(i * 9) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + (i % 2),
              repeat: Infinity,
              delay: i * 0.25,
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
              05. Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-3"
            >
              Client Testimonials
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-1 bg-[#64ffda] mx-auto"
            />
          </motion.div>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            <motion.button
              onClick={goToPrevious}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-3 rounded-full bg-[#112240] border border-[#233554] text-[#64ffda] hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-3 rounded-full bg-[#112240] border border-[#233554] text-[#64ffda] hover:border-[#64ffda] hover:bg-[#64ffda]/10 transition-all shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Slider */}
            <div className="overflow-hidden px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {getCurrentTestimonials().map((testimonial, index) => {
                    const globalIndex = currentIndex * slidesPerView + index;
                    return (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100,
                        }}
                        className="group"
                        onHoverStart={() => setHoveredIndex(globalIndex)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        whileHover={{ y: -10, scale: 1.02 }}
                        style={{ y }}
                      >
                        <div className="relative bg-[#112240] border border-[#233554] rounded-lg p-6 h-full flex flex-col hover:border-[#64ffda] transition-all duration-300 overflow-hidden">
                          {/* Animated glow */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{
                              scale: hoveredIndex === globalIndex ? 1.1 : 1,
                            }}
                          />

                {/* Quote Icon */}
                  <motion.div
                    className="mb-3 relative z-10"
                            animate={{
                              rotate:
                                hoveredIndex === globalIndex
                                  ? [0, -10, 10, 0]
                                  : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                    <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-[#64ffda]" />
                    </div>
                  </motion.div>

                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-3 relative z-10">
                  {[0, 1, 2, 3, 4].map((i) => (
                              <motion.div
                      key={i}
                                animate={{
                                  scale:
                                    hoveredIndex === globalIndex
                                      ? [1, 1.2, 1]
                                      : 1,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: i * 0.05,
                                }}
                              >
                                <Star className="w-4 h-4 fill-[#64ffda] text-[#64ffda]" />
                              </motion.div>
                  ))}
                </div>

                  {/* Testimonial Content */}
                  <motion.p
                    className="text-sm text-[#8892b0] mb-4 flex-grow leading-relaxed relative z-10"
                    whileHover={{ color: "#ccd6f6" }}
                  >
                    &quot;{testimonial.content}&quot;
                  </motion.p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#233554] relative z-10">
                            <motion.div
                              className="relative flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#233554] group-hover:border-[#64ffda] transition-colors"
                        loading="lazy"
                        decoding="async"
                      />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h4
                        className="text-sm font-semibold text-[#ccd6f6] mb-0.5"
                        whileHover={{ x: 5, color: "#64ffda" }}
                      >
                        {testimonial.name}
                      </motion.h4>
                      <p className="text-xs text-[#8892b0] font-mono">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                        </div>
                      </motion.div>
                    );
                  })}
            </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#64ffda] w-8"
                    : "bg-[#233554] hover:bg-[#64ffda]/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 bg-[#64ffda] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
