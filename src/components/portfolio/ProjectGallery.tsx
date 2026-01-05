"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
  featuredImage?: string;
  images: string[];
  title: string;
}

export default function ProjectGallery({
  featuredImage,
  images,
  title,
}: ProjectGalleryProps) {
  // Combine featured image with gallery images (featured first)
  // Filter out any empty or invalid image URLs
  const validImages = images
    ? images.filter((img) => img && img.trim() !== "")
    : [];
  const allImages = featuredImage
    ? [featuredImage, ...validImages]
    : validImages;

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active thumbnail
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeThumbnail = scrollContainerRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIndex]);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Don't show gallery if there are no images at all
  if (allImages.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          {allImages.length > 1 ? "Gallery" : "Project Image"}
        </h2>
        {allImages.length > 1 && (
          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
            {activeIndex + 1} / {allImages.length}
          </span>
        )}
      </div>

      {/* Main Image Display */}
      <div className="relative mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg group">
        <div className="relative aspect-video w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={allImages[activeIndex]}
                alt={`${title} - Image ${activeIndex + 1}`}
                className="w-full h-full object-fit"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all duration-200 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-black/60 transition-all duration-200 hover:scale-110 z-10 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Gradient Overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Thumbnail Strip */}
      {allImages.length > 1 && (
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          >
            {allImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`relative flex-shrink-0 snap-center rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-indigo-500 dark:border-indigo-400 ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 scale-105"
                    : "border-transparent hover:border-gray-300 dark:hover:border-gray-600 opacity-60 hover:opacity-100"
                }`}
                whileHover={{ scale: activeIndex === index ? 1.05 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 overflow-hidden">
                  <img
                    src={image}
                    alt={`${title} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {activeIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-indigo-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {/* Active indicator dot */}
                  {activeIndex === index && (
                    <motion.div
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  {/* Featured badge for first image */}
                  {index === 0 && featuredImage && (
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-500 text-white text-xs font-semibold rounded">
                      Main
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Scroll gradient indicators */}
          <div className="absolute left-0 top-0 bottom-2 w-12 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />
        </div>
      )}
    </div>
  );
}
