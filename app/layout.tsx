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
  title: 'Root News - Modern News Intelligence',
  description: 'Personalized signals, AI insights, and deep context across world news, business, AI, science, and more.',
  keywords: 'news intelligence, personalized news, AI news insights, news context, world news, business news, AI news, science news, Root News, daily briefing, news app',
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
    title: 'Root News - Modern News Intelligence',
    description: 'Personalized signals, AI insights, and deep context across world news, business, AI, science, and more.',
    url: 'https://www.rootnews.app',
    siteName: 'Root News',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Root News - Modern News Intelligence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root News - Modern News Intelligence',
    description: 'Personalized signals, AI insights, and deep context across world news, business, AI, science, and more.',
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
      <head>
        <meta name="theme-color" content="#0B0B15" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
