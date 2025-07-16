'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageSquare, User, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Root News Website')
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nMessage:\n${formData.message}`
      )
      
      // Open default email client
      window.location.href = `mailto:damian@rootnews.app?subject=${subject}&body=${body}`
      
      setSubmitStatus('success')
      setFormData({ name: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-l from-primary-400/5 to-primary-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-primary-600/8 to-primary-700/8 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105">
            <Image
              src="/root-logo.png"
              alt="Root News"
              width={32}
              height={32}
              className="brightness-0"
            />
          </Link>
          <Link 
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:scale-105 transform"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-primary-600" />
              <span className="text-primary-600 text-sm font-medium">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Let's <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about Root News? Want to share feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="fade-in-up-delay-1">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                  <Send className="w-6 h-6 text-primary-600 mr-3" />
                  Send us a message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-green-700">Your email client should open shortly!</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-red-700">Something went wrong. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors duration-300">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-600 transition-colors duration-300" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors duration-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-primary-600 transition-colors duration-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-400 resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="fade-in-up-delay-2 space-y-8">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Quick Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  We typically respond within 24 hours. For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-600">What to Expect</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    Personal response from our team
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    Detailed answers to your questions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    Follow-up if needed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 