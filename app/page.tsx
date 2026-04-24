import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const WAVEFORM = [
  40, 65, 35, 80, 50, 70, 45, 90, 55, 75, 38, 85, 60, 42, 78, 52, 68, 88, 46,
  72, 58, 82, 44, 76,
]

const CATEGORIES = [
  'World',
  'Technology',
  'Finance',
  'Health',
  'Sports',
  'Crypto',
  'Politics',
  'Science',
  'Culture',
  'Entertainment',
]

function SummaryVisual() {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-[#0E0E1A] p-4 shadow-lg shadow-black/30 translate-y-4 max-w-[240px] mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
        <div className="text-[10px] text-white/30">World News</div>
        <div className="ml-auto text-[9px] text-white/15">2 min</div>
      </div>
      <div className="h-[3px] w-3/4 rounded-full bg-white/10 mb-2.5" />
      <div className="space-y-1.5 mb-3">
        <div className="h-[2px] w-full rounded-full bg-white/[0.05]" />
        <div className="h-[2px] w-5/6 rounded-full bg-white/[0.04]" />
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] flex-1 rounded-full bg-[#DAA520]/[0.08]" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] w-4/5 rounded-full bg-[#DAA520]/[0.08]" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-[#DAA520]/40" />
          <div className="h-[2px] w-3/5 rounded-full bg-[#DAA520]/[0.08]" />
        </div>
      </div>
    </div>
  )
}

function AudioVisual() {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-[#0E0E1A] p-4 shadow-lg shadow-black/30 translate-y-4 max-w-[240px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5B6EF5]/20 to-[#9B59E8]/20 flex items-center justify-center flex-shrink-0 border border-white/[0.06]">
          <svg
            className="w-3 h-3 text-white/50 ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <div className="text-[11px] text-white/50">Morning Briefing</div>
          <div className="text-[9px] text-white/20">
            5 min &middot; Your categories
          </div>
        </div>
      </div>
      <div className="flex items-end gap-[2px] h-8">
        {WAVEFORM.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full"
            style={{
              height: `${h}%`,
              background:
                i < 10
                  ? 'rgba(91, 110, 245, 0.3)'
                  : 'rgba(255, 255, 255, 0.06)',
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[9px] text-white/15">1:42</span>
        <span className="text-[9px] text-white/15">5:08</span>
      </div>
    </div>
  )
}

function PresetsVisual() {
  const presets = [
    { name: 'Quick Catch-up', active: false },
    { name: 'Why This Matters', active: true },
    { name: 'Full Context', active: false },
    { name: 'Both Sides', active: false },
  ]
  return (
    <div className="space-y-2 w-full max-w-[240px]">
      {presets.map((p, i) => (
        <div
          key={i}
          className={`px-4 py-2.5 rounded-xl text-[12px] transition-colors ${
            p.active
              ? 'border border-[#B8860B]/20 text-[#DAA520]/70 bg-[#B8860B]/[0.06]'
              : 'border border-white/[0.06] text-white/25 bg-white/[0.02]'
          }`}
        >
          {p.name}
        </div>
      ))}
    </div>
  )
}

function GradientLine() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div
        className="h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#0B0B15' }}
    >
      {/* Background layers */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Color washes */}
        <div
          className="absolute -top-[200px] right-0 w-[900px] h-[900px]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(91,110,245,0.045) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px]"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(41,217,165,0.03) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[500px] h-[500px]"
          style={{
            background:
              'radial-gradient(circle, rgba(155,89,232,0.025) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />

        {/* Category ticker */}
        <div
          className="py-6 overflow-hidden relative"
          aria-hidden="true"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #0B0B15, transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #0B0B15, transparent)',
            }}
          />
          <div className="flex animate-ticker">
            {[0, 1].map((g) => (
              <div key={g} className="flex items-center shrink-0">
                {CATEGORIES.map((cat, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-white/[0.10] uppercase tracking-[0.15em] px-6 shrink-0"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Features />

        <GradientLine />

        {/* Bento feature showcase */}
        <section className="py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <p
              className="text-[11px] uppercase tracking-[0.2em] text-white/20 mb-8"
              data-animate
            >
              Features
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-animate
              data-animate-delay="1"
            >
              {/* Summaries card */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 pb-0 overflow-hidden relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/[0.10] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400/30 mb-3">
                  Summaries
                </p>
                <h3 className="text-base font-medium text-white mb-2">
                  Every story, distilled
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                  AI analyzes thousands of articles in real time and delivers
                  only what matters. Understand any story in 30 seconds.
                </p>
                <SummaryVisual />
              </div>

              {/* Audio card */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 pb-0 overflow-hidden relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/[0.10] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B6EF5]/20 to-transparent" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#5B6EF5]/30 mb-3">
                  Audio
                </p>
                <h3 className="text-base font-medium text-white mb-2">
                  Your morning briefing
                </h3>
                <p className="text-[13px] text-white/40 leading-relaxed mb-6">
                  A personalized daily audio briefing covering the categories
                  you care about. Listen on your commute, at the gym, or over
                  coffee.
                </p>
                <AudioVisual />
              </div>

              {/* Deep dives card - full width */}
              <div className="md:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 overflow-hidden relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-white/[0.10] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/20 to-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#B8860B]/30 mb-3">
                      Deep dives
                    </p>
                    <h3 className="text-base font-medium text-white mb-2">
                      Go deeper with one tap
                    </h3>
                    <p className="text-[13px] text-white/40 leading-relaxed">
                      Tap any preset - Quick Catch-up, Why This Matters, Full
                      Context, Both Sides - and get an instant, beautifully
                      structured deep dive.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <PresetsVisual />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GradientLine />

        <AppShowcase />

        {/* CTA */}
        <section className="py-28 px-4 sm:px-6 text-center relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full blur-[120px] pointer-events-none"
            style={{ background: 'rgba(184, 134, 11, 0.04)' }}
          />
          <div className="relative z-10 max-w-lg mx-auto" data-animate>
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.01em] mb-4">
              The only news app you need
            </h2>
            <p className="text-[13px] text-white/40 mb-8 max-w-sm mx-auto leading-relaxed">
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
