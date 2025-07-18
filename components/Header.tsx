'use client'

import { useState } from 'react'
import { Brain } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          {/* Header content can be added here if needed */}
        </div>
      </div>
    </header>
  )
} 