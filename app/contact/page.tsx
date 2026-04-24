'use client'

import { useState } from 'react'
import {
  Mail,
  MessageSquare,
  User,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const subject = encodeURIComponent(
        formData.subject || 'Contact from Root News Website',
      )
      const body = encodeURIComponent(
        `Name: ${formData.name}\n\nMessage:\n${formData.message}`,
      )

      window.location.href = `mailto:support@rootnews.app?subject=${subject}&body=${body}`

      setSubmitStatus('success')
      setFormData({ name: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#0B0B15' }}
    >
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute -top-[200px] right-0 w-[900px] h-[900px]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(184,134,11,0.06) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px]"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(91,110,245,0.04) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <section className="pt-32 sm:pt-36 pb-28 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14" data-animate>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/25 mb-4">
                Contact
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] text-white tracking-[-0.02em] leading-[1.05] mb-5">
                Let&apos;s{' '}
                <em className="font-serif italic text-[#DAA520] not-italic">
                  connect
                </em>
              </h1>
              <p className="text-[14px] text-white/40 max-w-md mx-auto leading-relaxed">
                Have questions about Root News? Want to share feedback?
                We&apos;d love to hear from you.
              </p>
            </div>

            <div
              className="grid lg:grid-cols-5 gap-6 items-start"
              data-animate
              data-animate-delay="1"
            >
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h2 className="flex items-center gap-3 text-base font-medium text-white mb-6">
                    <Send className="w-4 h-4 text-[#DAA520]" />
                    Send us a message
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-[13px] text-emerald-300">
                        Your email client should open shortly!
                      </span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 rounded-lg border border-red-500/20 bg-red-500/[0.06] flex items-center gap-3">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-[13px] text-red-300">
                        Something went wrong. Please try again.
                      </span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-[0.15em] text-white/50 mb-2"
                      >
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#DAA520]/40 focus:bg-white/[0.05] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[11px] uppercase tracking-[0.15em] text-white/50 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#DAA520]/40 focus:bg-white/[0.05] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[11px] uppercase tracking-[0.15em] text-white/50 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#DAA520]/40 focus:bg-white/[0.05] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold text-sm px-6 py-3 w-full gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#0B0B15]/30 border-t-[#0B0B15]" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Mail className="w-4 h-4 text-[#DAA520]" />
                    <h3 className="text-[13px] font-medium text-white/90">
                      Direct email
                    </h3>
                  </div>
                  <a
                    href="mailto:support@rootnews.app"
                    className="text-[13px] text-[#DAA520]/80 hover:text-[#DAA520] transition-colors"
                  >
                    support@rootnews.app
                  </a>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <MessageSquare className="w-4 h-4 text-[#DAA520]" />
                    <h3 className="text-[13px] font-medium text-white/90">
                      Quick response
                    </h3>
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed">
                    We typically respond within 24 hours. For urgent matters,
                    please mention &quot;URGENT&quot; in your subject line.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <h3 className="text-[13px] font-medium text-white/90 mb-4">
                    What to expect
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      'Personal response from our team',
                      'Detailed answers to your questions',
                      'Follow-up if needed',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[13px] text-white/55"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-[#DAA520]/70 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}
