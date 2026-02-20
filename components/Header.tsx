'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-3">
            <img src="/root-logo.png" alt="Root News" className="w-8 h-8" />
            <span className="text-lg font-bold text-white">Root News</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300">
              Features
            </a>
            <a href="#pro" className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300">
              Pro
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-4 py-2"
            >
              Download
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="block text-sm text-[#AAAAAA] hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pro"
              onClick={() => setOpen(false)}
              className="block text-sm text-[#AAAAAA] hover:text-white transition-colors"
            >
              Pro
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-4 py-2 inline-block"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
