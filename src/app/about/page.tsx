import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Asad Abbas, a Full-Stack / Frontend Engineer with 6+ years of experience building modern web applications.",
  openGraph: {
    title: "About | Asad Abbas",
    description:
      "Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, and React.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
