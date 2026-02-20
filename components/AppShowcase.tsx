import { MessageSquare, Newspaper, Headphones } from 'lucide-react'

const proFeatures = [
  {
    icon: MessageSquare,
    title: 'Ask Root',
    description:
      'Ask AI anything about any article. Get instant, contextual answers powered by the full story.',
  },
  {
    icon: Newspaper,
    title: 'Daily Briefing',
    description:
      'A personalized morning briefing covering your selected categories. Text and audio — listen on the go, even from your lock screen.',
  },
  {
    icon: Headphones,
    title: 'Audio Briefings',
    description:
      'Your news, read to you. Choose your preferred voice. Play in the background like a podcast.',
  },
]

export default function AppShowcase() {
  return (
    <section id="pro" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#B8860B] opacity-[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16" data-animate>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B8860B]/30 bg-[#B8860B]/10 text-sm font-medium mb-6">
            <span className="gold-text">Root Pro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Go deeper with <span className="gold-text">Root Pro</span>
          </h2>
          <p className="text-lg text-[#AAAAAA] max-w-2xl mx-auto">
            Unlock AI-powered Q&A, personalized daily briefings, and audio news
            — all designed to keep you informed effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proFeatures.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="glass-card group border-[#B8860B]/20 hover:border-[#B8860B]/40"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-[#0A0A0F]" />
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
