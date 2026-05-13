import { Check } from 'lucide-react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const freeFeatures = [
  'AI-powered news summaries',
  '10 news categories',
  'Updated throughout the day',
  'Trending & top stories',
  'Zero ads, ever',
]

const proFeatures = [
  'Everything in Free',
  'Personalized morning brief',
  'Daily audio briefings',
  'Four deep dive lenses',
  'Priority features',
]

export default function AppShowcase() {
  return (
    <section id="pro" className="py-28 px-4 sm:px-6 relative">
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
            Core news features are free forever. Upgrade for deep dives and
            audio briefings.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-animate
          data-animate-delay="1"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-6">
              <span className="text-[11px] font-medium text-white/40 uppercase tracking-[0.2em]">
                Free
              </span>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-serif text-4xl text-white tracking-[-0.02em]">
                  $0
                </span>
                <span className="text-[11px] text-white/30 ml-1">forever</span>
              </div>
              <p className="text-[11px] text-white/30 mt-1">
                No account required
              </p>
            </div>
            <div className="h-px w-full bg-white/[0.05] mb-6" />
            <ul className="space-y-3">
              {freeFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-white/60"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-500/60 flex-shrink-0 mt-0.5" />
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

          <div className="rounded-2xl border border-[#B8860B]/20 bg-gradient-to-b from-[#B8860B]/[0.05] via-[#B8860B]/[0.02] to-transparent p-7 sm:p-8 relative overflow-hidden shadow-[inset_0_1px_0_rgba(218,165,32,0.08)]">
            <div
              className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-[90px] pointer-events-none"
              style={{ background: 'rgba(184, 134, 11, 0.12)' }}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[11px] font-medium text-[#DAA520] uppercase tracking-[0.2em]">
                    Root Pro
                  </span>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-serif text-4xl text-white tracking-[-0.02em]">
                      $4.99
                    </span>
                    <span className="text-[11px] text-white/30 ml-1">
                      /month
                    </span>
                  </div>
                  <p className="text-[11px] text-white/30 mt-1">
                    or $29.99/year (save 50%)
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#DAA520] bg-[#B8860B]/[0.12] border border-[#B8860B]/20 px-2 py-1 rounded-full">
                  Most popular
                </span>
              </div>
              <div className="h-px w-full bg-[#B8860B]/[0.1] mb-6" />
              <ul className="space-y-3">
                {proFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13px] text-white/70"
                  >
                    <Check className="w-3.5 h-3.5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                    {f}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
