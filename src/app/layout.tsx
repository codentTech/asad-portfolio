import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Toaster from '@/components/Toaster'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Asad Abbas - Full-Stack / Frontend Engineer',
    template: '%s | Asad Abbas',
  },
  description: 'Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, React, and modern web applications. Building scalable, performant, and beautiful web experiences.',
  keywords: ['Next.js', 'TypeScript', 'React', 'Frontend Engineer', 'Full-Stack Developer', 'Web Development'],
  authors: [{ name: 'Asad Abbas' }],
  creator: 'Asad Abbas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://asadabbas.com',
    siteName: 'Asad Abbas Portfolio',
    title: 'Asad Abbas - Full-Stack / Frontend Engineer',
    description: 'Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, React, and modern web applications.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Asad Abbas Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asad Abbas - Full-Stack / Frontend Engineer',
    description: 'Full-Stack / Frontend Engineer specializing in Next.js, TypeScript, React, and modern web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Asad Abbas',
              jobTitle: 'Full-Stack / Frontend Engineer',
              url: 'https://asadabbas.com',
              sameAs: [
                'https://github.com/asadabbas',
                'https://linkedin.com/in/asadabbas',
                'https://twitter.com/asadabbas',
              ],
              knowsAbout: ['Next.js', 'TypeScript', 'React', 'Web Development', 'Frontend Engineering'],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

