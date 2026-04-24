'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B15]/80 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14">
          <a href="/" className="flex items-center">
            <img src="/root-logo.png" alt="Root News" className="w-9 h-9" />
          </a>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors"
            >
              Features
            </a>
            <a
              href="#pro"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors"
            >
              Pro
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[12px] px-4 py-1.5"
            >
              Download
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/50 p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0B0B15]/95 backdrop-blur-xl border-b border-white/[0.04]">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="block text-[13px] text-white/30 hover:text-white/70 transition-colors"
            >
              Features
            </a>
            <a
              href="#pro"
              onClick={() => setOpen(false)}
              className="block text-[13px] text-white/30 hover:text-white/70 transition-colors"
            >
              Pro
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[12px] px-4 py-1.5 inline-block"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
