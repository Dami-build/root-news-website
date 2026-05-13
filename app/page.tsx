import { Sparkles, Headphones, Lock } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

function SummaryCardMini() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0E0E1A] p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-emerald-400/70" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Technology
          </span>
        </div>
        <span className="text-[9px] font-mono text-white/25">2 min</span>
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

function SignalMockup() {
  const categories = [
    { name: 'Global', active: true },
    { name: 'US', active: true },
    { name: 'Tech', active: true },
    { name: 'AI', active: true },
    { name: 'Business', active: false },
    { name: 'Science', active: false },
  ]
  const briefings = [
    { name: 'AI', dot: 'bg-cyan-500/60' },
    { name: 'US Politics', dot: 'bg-red-500/60' },
    { name: 'World', dot: 'bg-orange-500/60' },
  ]

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0E0E1A] to-[#0B0B15] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)] max-w-[420px] mx-auto">
      <div className="flex items-start justify-between px-5 pt-5 pb-3">
        <div>
          <p className="text-[12px] uppercase tracking-[0.3em] text-[#DAA520] font-mono font-semibold mb-0.5">
            Signal
          </p>
          <p className="text-[11px] text-white/35">
            Your personalized dashboard
          </p>
        </div>
        <span className="text-[10px] font-mono text-[#DAA520]/85 px-2.5 py-1 rounded-full border border-[#DAA520]/30 bg-[#DAA520]/[0.05]">
          May 13
        </span>
      </div>

      <div className="px-5 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {categories.map((c) => (
            <span
              key={c.name}
              className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${
                c.active
                  ? 'border border-[#DAA520]/30 text-[#DAA520]/85 bg-[#DAA520]/[0.04]'
                  : 'border border-white/[0.08] text-white/40'
              }`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px mx-5 bg-white/[0.04]" />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#DAA520]" />
            <span className="text-[12px] font-medium text-white">
              Today&apos;s Focus
            </span>
          </div>
          <span className="text-[10px] text-white/25">Tap to read</span>
        </div>

        <div className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/25 to-transparent" />
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] uppercase tracking-[0.2em] text-orange-400/70 font-medium">
              World Politics
            </span>
            <span className="text-[10px] font-mono text-white/30">1 / 15</span>
          </div>
          <h4 className="font-serif text-[14px] text-white leading-tight mb-2">
            Saudi Arabia conducts strikes amid escalating regional tensions
          </h4>
          <p className="text-[10.5px] text-white/45 leading-relaxed mb-3 pl-2 border-l border-orange-400/30">
            A calculated retaliation marks the first direct military action
            under heightened diplomatic pressure...
          </p>
          <div className="text-[10px] text-[#DAA520]/85 font-medium">
            Tap for full analysis →
          </div>
        </div>
      </div>

      <div className="h-px mx-5 bg-white/[0.04]" />

      <div className="px-5 py-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Headphones className="w-3 h-3 text-white/45" />
            <span className="text-[12px] font-medium text-white">
              Audio Brief
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-medium">
            Pro
          </span>
        </div>

        <div className="rounded-xl border border-[#B8860B]/15 bg-[#B8860B]/[0.025] p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_-2px_rgba(184,134,11,0.4)]">
            <svg
              className="w-3 h-3 text-[#0B0B15] ml-0.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] text-white/85 font-medium leading-tight">
              Today&apos;s audio brief
            </div>
            <div className="text-[9px] text-white/30">Listen on the go</div>
          </div>
          <div className="flex items-end gap-[1.5px] h-3">
            {[40, 70, 50, 85, 55, 75].map((h, i) => (
              <div
                key={i}
                className="w-[2px] rounded-full bg-[#DAA520]/50"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-px mx-5 bg-white/[0.04]" />

      <div className="px-5 py-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[12px] font-medium text-white">
            Category Briefings
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-medium">
            Pro
          </span>
        </div>
        <div className="space-y-2">
          {briefings.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.015] px-3 py-2"
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-sm ${b.dot}`} />
                <span className="text-[11px] text-white/65 font-medium">
                  {b.name}
                </span>
              </div>
              <Lock className="w-2.5 h-2.5 text-[#DAA520]/50" />
            </div>
          ))}
        </div>
      </div>
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
            'linear-gradient(90deg, transparent, rgba(218,165,32,0.18), transparent)',
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
              'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1100px] h-[800px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(184,134,11,0.025) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />

        <Features />

        <GradientLine />

        {/* Signal - flagship product feature */}
        <section className="py-28 px-4 sm:px-6 relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div className="lg:order-2" data-animate>
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DAA520] font-mono font-semibold">
                    Signal
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-medium px-2 py-0.5 rounded-full border border-[#DAA520]/25 bg-[#DAA520]/[0.04]">
                    New
                  </span>
                </div>
                <h2 className="text-[1.75rem] sm:text-[2.25rem] font-medium text-white tracking-[-0.02em] leading-[1.1] mb-5">
                  Your daily{' '}
                  <span className="font-serif italic text-[#DAA520] font-normal">
                    signal
                  </span>
                  , personalized.
                </h2>
                <p className="text-[14.5px] text-white/50 leading-relaxed max-w-md mb-8">
                  A daily intelligence dashboard, built for you. Signal
                  surfaces the day&apos;s most important stories from the
                  categories you care about, and turns each one into structured
                  analysis at a single tap.
                </p>
                <ul className="space-y-3.5 max-w-md">
                  <li className="flex items-start gap-3 text-[13.5px] text-white/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0 shadow-[0_0_8px_rgba(218,165,32,0.5)]" />
                    <div>
                      <span className="text-white/90 font-medium">
                        Today&apos;s Focus
                      </span>
                      <span className="text-white/45">
                        {' '}
                        - the day&apos;s biggest stories, ranked by significance
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[13.5px] text-white/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0 shadow-[0_0_8px_rgba(218,165,32,0.5)]" />
                    <div>
                      <span className="text-white/90 font-medium">
                        Category Briefings
                      </span>
                      <span className="text-white/45">
                        {' '}
                        - quick scans across the topics you follow
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 text-[13.5px] text-white/60">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0 shadow-[0_0_8px_rgba(218,165,32,0.5)]" />
                    <div>
                      <span className="text-white/90 font-medium">
                        Audio Brief
                      </span>
                      <span className="text-white/45">
                        {' '}
                        - listen on the go, hands-free
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="lg:order-1 relative"
                data-animate
                data-animate-delay="1"
              >
                <div
                  className="absolute -inset-12 blur-3xl pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(184,134,11,0.14), transparent 65%)',
                  }}
                />
                <div className="relative">
                  <SignalMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        <GradientLine />

        {/* Capabilities bento */}
        <section className="py-28 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14 max-w-2xl" data-animate>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-3 font-mono">
                Capabilities
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.02em] leading-tight">
                Built for those who treat the news as{' '}
                <span className="font-serif italic text-[#DAA520] font-normal">
                  information
                </span>
                , not entertainment.
              </h2>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              data-animate
              data-animate-delay="1"
            >
              {/* Synthesis - wide */}
              <div className="md:col-span-2 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 relative overflow-hidden group hover:border-white/[0.14] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-[#DAA520]/40" />
                <div className="flex flex-col h-full">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-3 font-mono">
                      Synthesis
                    </p>
                    <h3 className="font-serif text-2xl text-white leading-tight mb-3 tracking-[-0.01em]">
                      Every story, distilled to its signal
                    </h3>
                    <p className="text-[13px] text-white/45 leading-relaxed max-w-md mb-8">
                      Each story reduced to its essential points and structured
                      for fast comprehension. No clickbait. No filler. No
                      padding.
                    </p>
                  </div>
                  <div className="mt-auto max-w-sm">
                    <SummaryCardMini />
                  </div>
                </div>
              </div>

              {/* Context */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 relative overflow-hidden group hover:border-white/[0.14] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-[#DAA520]/40" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-3 font-mono">
                  Context
                </p>
                <h3 className="font-serif text-xl text-white leading-tight mb-3 tracking-[-0.01em]">
                  Every term, in context
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                  Tap any concept for an inline explanation. A built-in
                  glossary that draws from what you&apos;re reading.
                </p>
                <TapToUnderstand />
              </div>

              {/* Perspectives */}
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 relative overflow-hidden group hover:border-white/[0.14] transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/20 to-transparent" />
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-[#DAA520]/40" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-3 font-mono">
                  Perspectives
                </p>
                <h3 className="font-serif text-xl text-white leading-tight mb-3 tracking-[-0.01em]">
                  Four lenses on any story
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed mb-6">
                  Quick Catch-up, Why This Matters, Full Context, Both Sides.
                  Each story, through four lenses.
                </p>
                <PresetsVisual />
              </div>

              {/* Reading experience - wide */}
              <div className="md:col-span-2 rounded-2xl border border-[#B8860B]/15 bg-[#B8860B]/[0.02] p-7 relative overflow-hidden group hover:border-[#B8860B]/28 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DAA520]/40 to-transparent" />
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
                  style={{ background: 'rgba(184, 134, 11, 0.09)' }}
                />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#DAA520]/70 mb-3 font-mono">
                    Reading experience
                  </p>
                  <h3 className="font-serif text-2xl text-white leading-tight mb-3 tracking-[-0.01em]">
                    Designed to be read
                  </h3>
                  <p className="text-[13px] text-white/55 leading-relaxed mb-7 max-w-xl">
                    Editorial typography. Inline context. Structured deep
                    dives. Every detail tuned for clarity and pace.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-mono mb-2">
                        Typography
                      </div>
                      <div className="font-serif text-[14px] text-white/85 leading-snug">
                        Tuned for fast comprehension
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-mono mb-2">
                        Context
                      </div>
                      <div className="font-serif text-[14px] text-white/85 leading-snug">
                        Tap any term to learn more
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#DAA520]/70 font-mono mb-2">
                        Deep dives
                      </div>
                      <div className="font-serif text-[14px] text-white/85 leading-snug">
                        Structured analysis on demand
                      </div>
                    </div>
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
              style={{ background: 'rgba(184, 134, 11, 0.06)' }}
            />
          </div>
          <div
            className="relative z-10 max-w-3xl mx-auto text-center"
            data-animate
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/25 mb-8 font-mono">
              The Root thesis
            </p>
            <blockquote className="font-serif text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] text-white leading-[1.12] tracking-[-0.02em]">
              News, engineered as{' '}
              <em className="text-[#DAA520] not-italic font-serif italic">
                intelligence
              </em>
              .
            </blockquote>
            <div className="mt-8 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-[#DAA520]/40 to-transparent" />
            <p className="mt-8 text-[14px] text-white/40 max-w-lg mx-auto leading-relaxed">
              No clickbait. No filler. No engagement-driven recommendations. A
              continuous, structured read on what&apos;s actually happening in
              the world.
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
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#DAA520]/70 mb-5 font-mono font-semibold">
              Signal &middot; over &middot; noise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-white tracking-[-0.02em] leading-[1.1] mb-6">
              Start{' '}
              <em className="text-[#DAA520] not-italic font-serif italic">
                understanding
              </em>{' '}
              what matters.
            </h2>
            <p className="text-[14px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
              Personalized signals, AI insights, and deep context - free on
              iOS. No account required. Pro available when you&apos;re ready.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-7 py-3 gap-2 inline-flex"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
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
