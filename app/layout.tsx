import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Root News - Stay Informed with AI-Powered News Summaries',
  description: 'Get the most important news of the day with AI-powered summaries. Our app aggregates news from multiple sources and delivers concise, relevant updates.',
  keywords: 'AI news, news aggregation, news summaries, artificial intelligence, daily news, news app, Root News',
  authors: [{ name: 'Root News Team' }],
  creator: 'Root News',
  publisher: 'Root News',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Root News - Stay Informed with AI-Powered News Summaries',
    description: 'Get the most important news of the day with AI-powered summaries. Our app aggregates news from multiple sources and delivers concise, relevant updates.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Root News',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Root News App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root News - Stay Informed with AI-Powered News Summaries',
    description: 'Get the most important news of the day with AI-powered summaries.',
    images: ['/og-image.jpg'], // You'll need to add this image
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
    google: 'your-google-verification-code', // Replace with your actual verification code
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
      </body>
    </html>
  )
} 