import { Zap, BarChart3, Shield, Clock, Sparkles, Brain } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Skip the narrative',
      emoji: '⚡',
      description: 'Every story condensed to the key points. No fluff, no filler - just what you need to know.',
      color: 'from-primary-400 to-primary-600', // Gold gradient
    },
    {
      icon: BarChart3,
      title: '10+ News Categories',
      emoji: '📊',
      description: 'From finance to world politics, crypto to health - comprehensive coverage across all major topics.',
      color: 'from-violet-400 to-purple-600', // Purple gradient
    },
    {
      icon: Shield,
      title: 'Quality Over Clickbait',
      emoji: '🛡️',
      description: 'No sensationalized headlines or unverified claims - just factual reporting from established news organizations worldwide.',
      color: 'from-emerald-400 to-green-600', // Green gradient
    },
    {
      icon: Clock,
      title: 'Updated Every 3 Hours',
      emoji: '⏰',
      description: 'Fresh summaries throughout the day. Stay current without constant checking.',
      color: 'from-sky-400 to-blue-600', // Blue gradient
    },
    {
      icon: Sparkles,
      title: 'No Ads or Clutter',
      emoji: '✨',
      description: 'Clean, distraction-free reading experience. Just news, nothing else.',
      color: 'from-rose-400 to-red-600', // Red gradient
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      emoji: '🤖',
      description: 'Advanced AI reads hundreds of articles daily and extracts only the most important information.',
      color: 'from-indigo-400 to-indigo-600', // Indigo gradient
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 fade-in-up">
            Why <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent animate-gradient-x">Root News</span>?
          </h2>
          <p className="text-lg text-dark-300 max-w-3xl mx-auto fade-in-up-delay-1">
            Skip the noise and information overload. Get only the essential news points from trusted sources, delivered in seconds.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const delayClass = `fade-in-up-delay-${Math.min(index + 1, 3)}`
            return (
              <div
                key={index}
                className={`card hover:bg-dark-800/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${delayClass}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                  <IconComponent className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300 flex items-center gap-2">
                  {feature.title} <span className="text-xl">{feature.emoji}</span>
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed group-hover:text-dark-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 