import { Check } from 'lucide-react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const freeFeatures = [
  'AI-powered news summaries',
  '10+ news categories',
  'Updated throughout the day',
  'Trending & top stories',
  'Zero ads, ever',
]

const proFeatures = [
  'Everything in Free',
  'Daily audio briefings',
  'Personalized morning brief',
  'Deep dive presets: Quick Catch-up, Why This Matters, Full Context, Both Sides',
]

export default function AppShowcase() {
  return (
    <section id="pro" className="py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/20 mb-4">
            Pricing
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.01em]">
            Free to start.{' '}
            <span className="text-[#C9960C]">Pro</span> when you&apos;re
            ready.
          </h2>
          <p className="text-[13px] text-white/35 mt-3 max-w-md mx-auto">
            Core news features are free forever. Upgrade for deep dives and
            audio briefings.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-animate
          data-animate-delay="1"
        >
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-6">
              <span className="text-[11px] font-medium text-white/30 uppercase tracking-[0.15em]">
                Free
              </span>
              <div className="mt-2 text-2xl font-bold text-white">$0</div>
              <p className="text-[11px] text-white/20 mt-1">Forever</p>
            </div>
            <ul className="space-y-3">
              {freeFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-white/50"
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

          <div className="rounded-2xl border border-[#B8860B]/12 bg-[#B8860B]/[0.02] p-6 sm:p-8 relative overflow-hidden">
            <div className="mb-6">
              <span className="text-[11px] font-medium text-[#C9960C] uppercase tracking-[0.15em]">
                Root Pro
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">$4.99</span>
                <span className="text-[11px] text-white/20">/mo</span>
              </div>
              <p className="text-[11px] text-white/20 mt-1">or $29.99/year</p>
            </div>
            <ul className="space-y-3">
              {proFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-white/50"
                >
                  <Check className="w-3.5 h-3.5 text-[#C9960C]/70 flex-shrink-0 mt-0.5" />
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
    </section>
  )
}
