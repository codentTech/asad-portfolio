import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Toaster from "@/components/Toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Asad Abbas - Full-Stack Developer & AI/ML Engineer",
    template: "%s | Asad Abbas",
  },
  description:
    "Full-Stack Developer with 7+ years of experience specializing in AI/ML integration, backend engineering, and modern web applications. Expert in LLMs, RAG systems, automation, Next.js, Node.js, and Python. Building scalable, intelligent solutions for businesses.",
  keywords: [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "LLM Integration",
    "RAG Systems",
    "Backend Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Automation",
    "Web Development",
    "AI Integration",
    "NestJS",
    ".NET",
    "Microservices",
  ],
  authors: [{ name: "Asad Abbas" }],
  creator: "Asad Abbas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asadabbas.com",
    siteName: "Asad Abbas - Full-Stack Developer & AI/ML Engineer",
    title: "Asad Abbas - Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer with 7+ years of experience specializing in AI/ML integration, backend engineering, and modern web applications. Expert in LLMs, RAG systems, and automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asad Abbas - Full-Stack Developer & AI/ML Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark"
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link
          rel="preconnect"
          href="https://images.pexels.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* Preload critical resources */}
        <link
          rel="preload"
          as="image"
          href="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Asad Abbas",
              jobTitle: "Full-Stack Developer & AI/ML Engineer",
              url: "https://asadabbas.com",
              sameAs: [
                "https://github.com/abbasasad309",
                "https://www.linkedin.com/in/asad-abbas-the-consultant/",
              ],
              knowsAbout: [
                "AI/ML Integration",
                "LLM Applications",
                "RAG Systems",
                "Backend Engineering",
                "Full-Stack Development",
                "Next.js",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "Automation",
                "Web Development",
                "NestJS",
                ".NET",
                "Microservices",
              ],
              description:
                "Full-Stack Developer with 7+ years of experience specializing in AI/ML integration, backend engineering, and modern web applications.",
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-[#0a192f] text-[#ccd6f6]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
