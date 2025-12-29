import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Asad Abbas. Let\'s discuss your next project or collaboration opportunity.',
  openGraph: {
    title: 'Contact | Asad Abbas',
    description: 'Get in touch to discuss your next project.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

