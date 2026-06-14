import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Sai Dhumal | AI & ML Engineer | Full Stack Developer',
  description:
    'Portfolio of Sai Dhumal — AI & ML Engineer and Full Stack Developer specializing in Machine Learning, Deep Learning, React, Node.js, and FastAPI. B.Tech AI & ML student at Vishwakarma University, Pune.',
  keywords: [
    'Sai Dhumal',
    'AI Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Vishwakarma University',
    'React Developer',
    'Python Developer',
    'NLP Engineer',
    'AI ML Portfolio',
  ],
  authors: [{ name: 'Sai Dhumal', url: 'https://saidhumal.tech' }],
  creator: 'Sai Dhumal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saidhumal.tech',
    title: 'Sai Dhumal | AI & ML Engineer | Full Stack Developer',
    description:
      'Portfolio of Sai Dhumal — AI & ML Engineer and Full Stack Developer passionate about building intelligent systems and scalable web applications.',
    siteName: 'Sai Dhumal Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sai Dhumal Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Dhumal | AI & ML Engineer | Full Stack Developer',
    description:
      'Portfolio of Sai Dhumal — AI & ML Engineer and Full Stack Developer.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://saidhumal.tech'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#04040a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
