import { Brain } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-primary-400/5 to-primary-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 fade-in-up">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/root-logo.png" 
                  alt="Root News Logo" 
                  className="w-14 h-14 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300">Root News</span>
            </div>
            <p className="text-dark-300 mb-4 max-w-md">
              Download Root News and transform how you consume news. Quick summaries, trusted sources, zero fluff.
            </p>
            <p className="text-dark-400 text-sm">
              © 2025 Root News. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="fade-in-up-delay-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-dark-300 hover:text-primary-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-dark-300 hover:text-primary-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="fade-in-up-delay-2">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-dark-300 hover:text-primary-300 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-800 flex flex-col sm:flex-row justify-between items-center fade-in-up-delay-3">
          <p className="text-dark-400 text-sm">
            Made with ❤️ for staying informed
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="https://instagram.com/rootnews.app" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-300 transition-all duration-300 hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@rootnews" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-primary-300 transition-all duration-300 hover:scale-110">
              <span className="sr-only">TikTok</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 