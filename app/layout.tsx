import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Root News — The News, Simplified',
  description: 'AI-powered news summaries from trusted sources. 10+ categories updated every 3 hours. Ask AI about any article. Daily audio briefings. Free on iOS.',
  keywords: 'AI news, news aggregation, news summaries, artificial intelligence, daily news, news app, Root News, daily briefing, audio news',
  authors: [{ name: 'Root Labs OÜ' }],
  creator: 'Root News',
  publisher: 'Root Labs OÜ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.rootnews.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Root News — The News, Simplified',
    description: 'AI-powered news summaries from trusted sources. 10+ categories updated every 3 hours. Ask AI about any article. Daily audio briefings. Free on iOS.',
    url: 'https://www.rootnews.app',
    siteName: 'Root News',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Root News — The News, Simplified',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root News — The News, Simplified',
    description: 'AI-powered news summaries from trusted sources. 10+ categories updated every 3 hours. Free on iOS.',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
