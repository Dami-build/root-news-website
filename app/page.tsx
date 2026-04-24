import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const WAVEFORM = [
  22, 45, 30, 60, 38, 72, 50, 85, 65, 78, 55, 90, 68, 48, 82, 58, 70, 88, 52,
  76, 62, 80, 48, 72, 56, 68, 42, 64, 36, 58,
]

function SummaryCardMini() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0E0E1A] p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
          Technology
        </span>
      </div>
      <div className="font-serif text-[15px] text-white/90 leading-tight mb-3">
        Apple unveils new AI partnership ahead of WWDC
      </div>
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-[#DAA520] mt-1.5 flex-shrink-0" />
          <span className="text-[11px] text-white/50 leading-relaxed">
            Three-year deal with major AI provider for on-device features
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-[#DAA520] mt-1.5 flex-shrink-0" />
          <span className="text-[11px] text-white/50 leading-relaxed">
            Stock up 3.2% in pre-market trading
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-[#DAA520] mt-1.5 flex-shrink-0" />
          <span className="text-[11px] text-white/50 leading-relaxed">
            Announcement expected at June developer conference
          </span>
        </div>
      </div>
    </div>
  )
}

function TapToUnderstand() {
  return (
    <div className="relative py-4">
      <div className="font-serif text-[15px] text-white/75 leading-relaxed">
        The Fed raised rates by 25{' '}
        <span className="relative inline-block">
          <span className="text-[#DAA520] border-b border-dotted border-[#DAA520]/60">
            basis points
          </span>
        </span>{' '}
        to tame inflation.
      </div>

      <div className="mt-4 ml-auto max-w-[220px] rounded-lg border border-[#B8860B]/20 bg-[#14141F] p-3 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] relative">
        <div
          className="absolute -top-1.5 right-8 w-3 h-3 border-t border-l border-[#B8860B]/20 bg-[#14141F]"
          style={{ transform: 'rotate(45deg)' }}
        />
        <div className="text-[9px] uppercase tracking-[0.2em] text-[#DAA520]/60 mb-1">
          Basis points
        </div>
        <div className="text-[11px] text-white/70 leading-relaxed">
          One hundredth of a percent (0.01%). A 25 bps hike = 0.25%.
        </div>
      </div>
    </div>
  )
}

function DailyBriefVisual() {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center shadow-[0_4px_16px_-4px_rgba(184,134,11,0.5)]">
          <svg
            className="w-4 h-4 text-[#0B0B15] ml-0.5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-medium text-white">
            Your Morning Brief
          </div>
          <div className="text-[10px] text-white/30">
            April 24 &middot; 4 min 32 sec
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex items-end gap-[2px] h-10">
          {WAVEFORM.map((h, i) => {
            const progress = i < 12
            return (
              <div
                key={i}
                className="flex-1 rounded-full transition-all"
                style={{
                  height: `${h}%`,
                  background: progress
                    ? 'linear-gradient(to top, rgba(218,165,32,0.9), rgba(218,165,32,0.4))'
                    : 'rgba(255, 255, 255, 0.08)',
                }}
              />
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-white/30 font-mono">1:48</span>
          <span className="text-[10px] text-white/20 font-mono">4:32</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 flex-wrap">
        {['World', 'Tech', 'Finance', 'Crypto'].map((t) => (
          <span
            key={t}
            className="text-[10px] text-white/40 px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]"
          >
            {t}
          </span>
        ))}
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
    <div className="grid grid-cols-2 gap-2">
      {presets.map((p) => (
        <div
          key={p.name}
          className={`px-3 py-2.5 rounded-xl text-[11px] font-medium text-center transition-colors ${
            p.active
              ? 'border border-[#B8860B]/30 text-[#DAA520] bg-[#B8860B]/[0.08] shadow-[inset_0_1px_0_rgba(218,165,32,0.1)]'
              : 'border border-white/[0.06] text-white/35 bg-white/[0.02]'
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
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
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
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute -top-[200px] right-0 w-[900px] h-[900px]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(91,110,245,0.04) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute bottom-[20%] left-0 w-[700px] h-[700px]"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, rgba(41,217,165,0.025) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />

        <Features />

        <GradientLine />

        {/* Features bento */}
        <section className="py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14 max-w-2xl" data-animate>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-3">
                What you get
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.02em] leading-tight">
                Built for people who&apos;d rather be{' '}
                <span className="font-serif italic text-[#DAA520] font-normal">
                  informed
                </span>{' '}
                than{' '}
                <span className="font-serif italic text-white/40 font-normal">
                  entertained
                </span>
                .
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              data-animate
              data-animate-delay="1"
            >
              {/* Summaries - wide */}
              <div className="md:col-span-2 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] p-7 relative overflow-hidden group hover:border-white/[0.12] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
                <div className="flex flex-col h-full">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-400/50 mb-3 font-medium">
                      Instant understanding
                    </p>
                    <h3 className="font-serif text-2xl text-white leading-tight mb-3 tracking-[-0.01em]">
                      Know what happened in seconds, not minutes
                    </h3>
                    <p className="text-[13px] text-white/45 leading-relaxed max-w-md mb-8">
                      Every story comes with bullet-point summaries. No
                      clickbait. No filler. No opinion pieces disguised as
                      news.
                    </p>
                  </div>
                  <div className="mt-auto max-w-sm">
                    <SummaryCardMini />
                  </div>
                </div>
              </div>

              {/* Tap to understand */}
              <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] p-7 relative overflow-hidden group hover:border-white/[0.12] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B6EF5]/30 to-transparent" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#5B6EF5]/50 mb-3 font-medium">
                  Tap to understand
                </p>
                <h3 className="font-serif text-xl text-white leading-tight mb-3 tracking-[-0.01em]">
                  Every term explained, instantly
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                  Tap any underlined term and Root tells you exactly what it
                  means, in plain English.
                </p>
                <TapToUnderstand />
              </div>

              {/* Deep dives */}
              <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.025] to-white/[0.005] p-7 relative overflow-hidden group hover:border-white/[0.12] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#DAA520]/60 mb-3 font-medium">
                  Deep dives
                </p>
                <h3 className="font-serif text-xl text-white leading-tight mb-3 tracking-[-0.01em]">
                  Four presets. One tap. Full context.
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                  Quick Catch-up, Why This Matters, Full Context, Both Sides
                  - choose your depth.
                </p>
                <PresetsVisual />
              </div>

              {/* Daily brief - wide */}
              <div className="md:col-span-2 rounded-2xl border border-[#B8860B]/12 bg-gradient-to-br from-[#B8860B]/[0.04] via-white/[0.015] to-white/[0.005] p-7 relative overflow-hidden group hover:border-[#B8860B]/25 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/50 to-transparent" />
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: 'rgba(184, 134, 11, 0.1)' }}
                />
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#DAA520]/70 mb-3 font-medium">
                      Daily brief &middot; Pro
                    </p>
                    <h3 className="font-serif text-2xl text-white leading-tight mb-3 tracking-[-0.01em]">
                      Your morning briefing, narrated
                    </h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">
                      A personalized audio brief of the day&apos;s top stories,
                      in your chosen voice. Under 5 minutes. Play from your
                      lock screen.
                    </p>
                  </div>
                  <div>
                    <DailyBriefVisual />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto section */}
        <section className="py-28 px-4 sm:px-6 relative">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[160px]"
              style={{ background: 'rgba(184, 134, 11, 0.05)' }}
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-center" data-animate>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/25 mb-8">
              The Root philosophy
            </p>
            <blockquote className="font-serif text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] text-white leading-[1.12] tracking-[-0.02em]">
              News should be{' '}
              <em className="text-[#DAA520] not-italic font-serif italic">
                efficient
              </em>
              . That&apos;s why we built Root.
            </blockquote>
            <p className="mt-8 text-[14px] text-white/40 max-w-lg mx-auto leading-relaxed">
              No clickbait. No filler. No opinion pieces disguised as news. No
              algorithms guessing what you&apos;ll click - just the stories that
              matter, surfaced in seconds.
            </p>
          </div>
        </section>

        <GradientLine />

        <AppShowcase />

        {/* Final CTA */}
        <section className="py-32 px-4 sm:px-6 text-center relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full blur-[140px] pointer-events-none"
            style={{ background: 'rgba(184, 134, 11, 0.08)' }}
          />
          <div className="relative z-10 max-w-2xl mx-auto" data-animate>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-white tracking-[-0.02em] leading-[1.1] mb-6">
              Understand the news in under{' '}
              <em className="text-[#DAA520] not-italic font-serif italic">
                5 minutes a day
              </em>
              .
            </h2>
            <p className="text-[14px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
              Free to download. No account required. Pro available when
              you&apos;re ready.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-7 py-3 gap-2 inline-flex"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}
