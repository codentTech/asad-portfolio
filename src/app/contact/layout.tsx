import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Asad Abbas for AI-powered application development, intelligent automation, backend engineering, and full-stack development projects. Free consultations available.',
  openGraph: {
    title: 'Contact | Asad Abbas',
    description:
      'Get in touch for AI-powered application development, intelligent automation, and full-stack development projects. Free consultations available.',
    url: 'https://asadabbas.com/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact | Asad Abbas',
    description: 'Get in touch for AI-powered application development and full-stack development projects.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

