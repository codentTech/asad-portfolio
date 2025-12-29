"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-black" />
      <div className="relative max-w-3xl mx-auto text-center py-6 sm:py-8 px-4 sm:px-6">
        <div className="inline-block mb-3 sm:mb-4">
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
          Let&apos;s Build Something Amazing Together
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 text-indigo-100 max-w-xl mx-auto">
          Ready to bring your ideas to life? Let&apos;s discuss your next
          project.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Button
            asChild
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              Get Started
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="md"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
          >
            <Link href="/portfolio" className="w-full sm:w-auto">
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
