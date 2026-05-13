import { Check } from 'lucide-react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const freeFeatures = [
  'AI-powered news summaries',
  '10+ news categories',
  'Trending & top stories',
  'Updated throughout the day',
  'Zero ads, ever',
]

const proFeatures = [
  {
    title: 'Signal, personalized',
    desc: 'A daily dashboard of stories from the topics you follow.',
  },
  {
    title: 'Deep analysis on any article',
    desc: 'Four lenses on every story: Quick Catch-up, Why This Matters, Full Context, Both Sides.',
  },
  {
    title: 'Daily brief - text & audio',
    desc: 'A morning brief in your chosen voice. Listen on the go, hands-free.',
  },
  {
    title: 'Priority access to new features',
    desc: 'Everything we ship next, first.',
  },
]

export default function AppShowcase() {
  return (
    <section id="pro" className="py-28 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'rgba(184, 134, 11, 0.05)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14" data-animate>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-3 font-mono">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.02em]">
            Free to start.{' '}
            <span className="font-serif italic text-[#DAA520] font-normal">
              Pro
            </span>{' '}
            when you&apos;re ready.
          </h2>
          <p className="text-[13px] text-white/40 mt-3 max-w-md mx-auto leading-relaxed">
            Core news features are free. Upgrade for personalization, deep
            analysis, and your daily brief.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch"
          data-animate
          data-animate-delay="1"
        >
          {/* Free */}
          <div className="md:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.012] p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] flex flex-col">
            <div className="mb-6">
              <span className="text-[10px] font-medium text-white/45 uppercase tracking-[0.25em] font-mono">
                Free
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-[2.75rem] text-white tracking-[-0.02em] leading-none">
                  $0
                </span>
                <span className="text-[11px] text-white/30 ml-1.5">
                  forever
                </span>
              </div>
              <p className="text-[11px] text-white/30 mt-1.5">
                No account required
              </p>
            </div>

            <div className="h-px w-full bg-white/[0.05] mb-6" />

            <ul className="space-y-3 flex-1">
              {freeFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-white/55"
                >
                  <Check
                    className="w-3.5 h-3.5 text-emerald-500/55 flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-[12px] px-5 py-2.5 w-full mt-8"
            >
              Download Free
            </a>
          </div>

          {/* Pro */}
          <div className="md:col-span-3 rounded-2xl border border-[#B8860B]/25 bg-gradient-to-b from-[#B8860B]/[0.06] via-[#B8860B]/[0.02] to-transparent p-7 sm:p-8 relative overflow-hidden shadow-[inset_0_1px_0_rgba(218,165,32,0.14),0_20px_50px_-20px_rgba(184,134,11,0.25)] flex flex-col">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(218,165,32,0.55), transparent)',
              }}
            />
            <div
              className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
              style={{ background: 'rgba(184, 134, 11, 0.16)' }}
            />

            <div className="relative flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[10px] font-medium text-[#DAA520] uppercase tracking-[0.25em] font-mono">
                    Root Pro
                  </span>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-serif text-[2.75rem] text-white tracking-[-0.02em] leading-none">
                      $4.99
                    </span>
                    <span className="text-[11px] text-white/35 ml-1.5">
                      / month
                    </span>
                  </div>
                  <p className="text-[11px] text-white/40 mt-1.5">
                    or $29.99/year - save 50%
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#DAA520] bg-[#B8860B]/[0.12] border border-[#B8860B]/30 px-2.5 py-1 rounded-full font-medium">
                  Most popular
                </span>
              </div>

              <div className="h-px w-full bg-[#B8860B]/[0.12] mb-6" />

              <ul className="space-y-4 flex-1">
                {proFeatures.map((f) => (
                  <li key={f.title} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#DAA520] flex-shrink-0 shadow-[0_0_8px_rgba(218,165,32,0.5)]" />
                    <div className="flex-1">
                      <div className="text-[13.5px] text-white/95 font-medium leading-snug">
                        {f.title}
                      </div>
                      <div className="text-[12px] text-white/45 leading-snug mt-0.5">
                        {f.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[12px] px-5 py-2.5 w-full mt-8"
              >
                Start with Pro
              </a>
              <p className="text-[10px] text-white/25 mt-3 text-center">
                Cancel anytime in App Store settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
