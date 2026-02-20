import { Zap, LayoutGrid, RefreshCw, Ban, TrendingUp, Moon } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Summaries',
    description:
      'Every story condensed to the key points. Headlines, bullet points, and deep dives — powered by AI, sourced from trusted outlets worldwide.',
  },
  {
    icon: LayoutGrid,
    title: '10+ News Categories',
    description:
      'World politics, finance, crypto, tech, sports, culture, health, and more. Follow what matters to you.',
  },
  {
    icon: RefreshCw,
    title: 'Updated Every 3 Hours',
    description:
      "Fresh content throughout the day. Never read yesterday's news.",
  },
  {
    icon: Ban,
    title: 'Zero Ads, Zero Clutter',
    description:
      'Clean, distraction-free reading. Just the news, nothing else.',
  },
  {
    icon: TrendingUp,
    title: 'Trending & Top Stories',
    description:
      "See what's important right now. AI-ranked by significance, not clickbait.",
  },
  {
    icon: Moon,
    title: 'Dark Mode & Beautiful UI',
    description:
      "Designed to feel premium. Light and dark mode, smooth animations, and a reading experience you'll love.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="gold-text">Root News</span>?
          </h2>
          <p className="text-lg text-[#AAAAAA] max-w-2xl mx-auto">
            Skip the noise and information overload. Get the essential news from
            trusted sources, delivered in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="glass-card group"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8860B]/20 to-[#DAA520]/10 border border-[#B8860B]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#DAA520]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#AAAAAA] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
