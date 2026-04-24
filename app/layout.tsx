import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Root News - The News, Simplified',
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
    title: 'Root News - The News, Simplified',
    description: 'AI-powered news summaries from trusted sources. 10+ categories updated every 3 hours. Ask AI about any article. Daily audio briefings. Free on iOS.',
    url: 'https://www.rootnews.app',
    siteName: 'Root News',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Root News - The News, Simplified',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root News - The News, Simplified',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${instrumentSerif.variable}`}
    >
      <head />
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
