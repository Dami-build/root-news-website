import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Root News - AI-Powered News Summaries',
  description: 'Get in touch with the Root News team. Have questions about our AI-powered news summaries? We\'d love to hear from you.',
  keywords: 'contact, support, Root News, AI news, feedback, questions',
  openGraph: {
    title: 'Contact Root News',
    description: 'Get in touch with the Root News team for questions, feedback, or support.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Root News',
    description: 'Get in touch with the Root News team for questions, feedback, or support.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 