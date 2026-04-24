'use client'

import { useEffect, useState } from 'react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B15]/85 backdrop-blur-xl border-b border-white/[0.05]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-center">
        <span className="hidden sm:block absolute left-4 sm:left-6 text-[10px] uppercase tracking-[0.25em] text-white/20">
          Est. 2025
        </span>

        <a
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Root News - Home"
        >
          <img
            src="/root-logo.png"
            alt=""
            className="w-7 h-7 transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-[19px] text-white tracking-[-0.01em] leading-none">
            Root News
          </span>
        </a>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-3 sm:right-6 btn-gold text-[11px] px-3.5 py-1.5"
        >
          Download
        </a>
      </div>
    </header>
  )
}
