import { ArrowRight, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-xl floating"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-purple-600/20 rounded-full blur-xl floating-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-full blur-xl floating"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Root Logo */}
          <div className="mb-8 fade-in-up">
            <img 
              src="/root-logo.png" 
              alt="Root News Logo" 
              className="w-20 h-20 mx-auto filter brightness-0"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight fade-in-up-delay-1 animate-float-subtle">
            Skip the <span className="gradient-text">Noise</span>.{' '}
            <br />
            Get the <span className="gradient-text">News</span> That Matters.
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-2">
            Root News cuts through information overload with AI-powered summaries from trusted sources. Get up to speed in minutes, not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up-delay-3">
            <button className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-black hover:via-gray-800 hover:to-black text-white font-bold text-base px-7 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/60 flex items-center space-x-2 group border border-gray-800/30 hover:border-gray-700/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Smartphone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Download</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 fade-in-up-delay-3">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full border-2 border-gray-50 floating"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full border-2 border-gray-50 floating-delayed"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full border-2 border-gray-50 floating"></div>
              </div>
              <span className="text-sm">Get early access</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-primary-400 text-lg animate-bounce">📱</span>
              <span className="text-sm ml-2">Available on iOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 