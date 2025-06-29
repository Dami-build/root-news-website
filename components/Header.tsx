'use client'

import { useState } from 'react'
import { Brain } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-dark-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <img 
                src="/root-logo.png" 
                alt="Root News Logo" 
                className="w-14 h-14 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Root News</span>
          </div>
        </div>
      </div>
    </header>
  )
} 