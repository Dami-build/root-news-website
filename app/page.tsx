import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const WAVEFORM_HEIGHTS = [
  40, 65, 35, 80, 50, 70, 45, 90, 55, 75, 38, 85, 60, 42, 78, 52, 68, 88, 46,
  72, 58, 82, 44, 76,
]

const showcase = [
  {
    label: 'Summaries',
    title: 'Every story, distilled',
    description:
      'AI analyzes thousands of articles in real time and delivers only what matters. Understand any story in 30 seconds.',
    visual: 'summary',
  },
  {
    label: 'Audio',
    title: 'Your morning briefing',
    description:
      'A personalized daily audio briefing covering the categories you care about. Listen on your commute, at the gym, or over coffee.',
    visual: 'audio',
  },
  {
    label: 'Deep dives',
    title: 'Go deeper with one tap',
    description:
      'Tap any preset - Quick Catch-up, Why This Matters, Full Context, Both Sides - and get an instant, beautifully structured deep dive.',
    visual: 'presets',
  },
]

function SummaryVisual() {
  return (
    <div className="w-full max-w-[220px] mx-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
        <div className="h-[3px] w-14 rounded-full bg-white/[0.08]" />
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-[2px] w-full rounded-full bg-white/[0.06]" />
        <div className="h-[2px] w-4/5 rounded-full bg-white/[0.04]" />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-[3px] h-[3px] rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] flex-1 rounded-full bg-white/[0.04]" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[3px] h-[3px] rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] w-4/5 rounded-full bg-white/[0.04]" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[3px] h-[3px] rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] w-3/5 rounded-full bg-white/[0.04]" />
        </div>
      </div>
    </div>
  )
}

function AudioVisual() {
  return (
    <div className="w-full max-w-[220px] mx-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
          <svg
            className="w-2.5 h-2.5 text-white/40 ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] text-white/50">Daily Briefing</div>
          <div className="text-[9px] text-white/20">5 min</div>
        </div>
      </div>
      <div className="flex items-end gap-[2px] h-7">
        {WAVEFORM_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-white/[0.08]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function PresetsVisual() {
  const presets = [
    'Quick Catch-up',
    'Why This Matters',
    'Full Context',
    'Both Sides',
  ]
  return (
    <div className="w-full max-w-[220px] mx-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="grid grid-cols-2 gap-2">
        {presets.map((p, i) => (
          <div
            key={i}
            className={`px-2.5 py-2 rounded-lg text-[10px] text-center ${
              i === 1
                ? 'border border-[#B8860B]/15 text-[#DAA520]/60 bg-[#B8860B]/[0.04]'
                : 'border border-white/[0.05] text-white/25'
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
    <main className="min-h-screen relative overflow-hidden" style={{ background: '#050508' }}>
      <div className="relative z-10">
        <Header />
        <Hero />

        <Features />

        <section className="py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto space-y-28">
            {showcase.map((item, i) => {
              const Visual = visuals[item.visual]
              const reversed = i % 2 === 1
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                  data-animate
                >
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/20 mb-4">
                      {item.label}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 tracking-[-0.01em]">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-white/35 leading-relaxed max-w-sm">
                      {item.description}
                    </p>
                  </div>
                  <div
                    className={`flex justify-center ${
                      reversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <Visual />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <AppShowcase />

        <section className="py-28 px-4 sm:px-6 text-center">
          <div className="max-w-lg mx-auto" data-animate>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.01em] mb-4">
              The only news app you need
            </h2>
            <p className="text-[13px] text-white/35 mb-8 max-w-sm mx-auto leading-relaxed">
              Join thousands of readers who get their news in minutes, not
              hours.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-6 py-2.5 gap-2 inline-flex"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}
