import { Sparkles, Headphones, MessageSquare, Newspaper, Hash, Globe, RefreshCw } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const WAVEFORM_HEIGHTS = [40, 65, 35, 80, 50, 70, 45, 90, 55, 75, 38, 85, 60, 42, 78, 52, 68, 88, 46, 72, 58, 82, 44, 76]

const showcase = [
  {
    title: 'Every story, ',
    highlight: 'distilled',
    description:
      'AI analyzes thousands of articles in real time and delivers only what matters. Understand any story in 30 seconds.',
    icon: Sparkles,
    visual: 'summary',
  },
  {
    title: 'Your morning ',
    highlight: 'briefing',
    description:
      'A personalized daily audio briefing covering the categories you care about. Listen on your commute, at the gym, or over coffee.',
    icon: Headphones,
    visual: 'audio',
  },
  {
    title: 'Go deeper with ',
    highlight: 'one tap',
    description:
      'Tap any preset - Quick Catch-up, Why This Matters, Full Context, Both Sides - and get an instant, beautifully structured deep dive.',
    icon: MessageSquare,
    visual: 'presets',
  },
]

const stats = [
  { value: '#172', label: 'in US News Apps' },
  { value: '100+', label: 'Trusted sources' },
  { value: '8x', label: 'Updated daily' },
]

function SummaryVisual() {
  return (
    <div className="glass-card hover:translate-y-0 p-6 max-w-xs w-full mx-auto space-y-3">
      <div className="h-2.5 w-3/4 rounded-full bg-gradient-to-r from-[#B8860B] to-[#DAA520]" />
      <div className="h-2 w-full rounded-full bg-[#2A2A2A]" />
      <div className="h-2 w-5/6 rounded-full bg-[#2A2A2A]" />
      <div className="h-2 w-3/5 rounded-full bg-[#2A2A2A]" />
      <div className="pt-3 space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0" />
          <div className="h-2 w-full rounded-full bg-[#222]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0" />
          <div className="h-2 w-5/6 rounded-full bg-[#222]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0" />
          <div className="h-2 w-4/6 rounded-full bg-[#222]" />
        </div>
      </div>
    </div>
  )
}

function AudioVisual() {
  return (
    <div className="glass-card hover:translate-y-0 p-6 max-w-xs w-full mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-[#0A0A0F] ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-sm font-medium text-white">Daily Briefing</div>
          <div className="text-xs text-[#666]">5 min &middot; Your categories</div>
        </div>
      </div>
      <div className="flex items-end gap-[3px] h-10">
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-[#B8860B]/40"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function PresetsVisual() {
  const presets = ['Quick Catch-up', 'Why This Matters', 'Full Context', 'Both Sides']
  return (
    <div className="glass-card hover:translate-y-0 p-6 max-w-xs w-full mx-auto">
      <div className="grid grid-cols-2 gap-3">
        {presets.map((p, i) => (
          <div
            key={i}
            className={`px-3 py-2.5 rounded-lg text-xs font-medium text-center transition-colors ${
              i === 1
                ? 'border border-[#B8860B]/40 bg-[#B8860B]/10 text-[#DAA520]'
                : 'border border-[#333] text-[#AAAAAA]'
            }`}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}

const visuals: Record<string, () => JSX.Element> = {
  summary: SummaryVisual,
  audio: AudioVisual,
  presets: PresetsVisual,
}

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: '#06060C' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #06060C 0%, #0E0E1E 40%, #0A0A0F 100%)',
        }}
      />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />

        {/* Feature showcase */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">
            {showcase.map((item, i) => {
              const Visual = visuals[item.visual]
              const reversed = i % 2 === 1
              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
                  data-animate
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 rounded-xl bg-[#1E1E1E] border border-[#333] flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-[#DAA520]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {item.title}
                      <span className="gold-text">{item.highlight}</span>
                    </h3>
                    <p className="text-[#AAAAAA] leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                  <div className={`flex justify-center ${reversed ? 'lg:order-1' : ''}`}>
                    <Visual />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <AppShowcase />

        {/* Social proof stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            data-animate
          >
            {stats.map((s, i) => (
              <div key={i} data-animate-delay={String(i + 1)}>
                <div className="text-3xl sm:text-4xl font-bold gold-text mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-[#AAAAAA]">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#5B6EF5] opacity-[0.04] rounded-full blur-[150px]" />
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10" data-animate>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The only news app you need
            </h2>
            <p className="text-lg text-[#AAAAAA] mb-10 max-w-xl mx-auto">
              Join thousands of readers who get their news in minutes, not hours.
            </p>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4 gap-2 inline-flex"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download Free on the App Store
            </a>

            <p className="mt-6 text-sm text-[#555555]">
              No account required. Free forever. Pro available.
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}
