import { Check } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

const freeFeatures = [
  'AI-powered news summaries',
  '10+ news categories',
  'Updated every 3 hours',
  'Trending & top stories',
  'Zero ads, ever',
]

const proFeatures = [
  'Everything in Free',
  'Ask Root AI deep dives',
  'Daily audio briefings',
  'Personalized morning brief',
  'Priority new features',
]

export default function AppShowcase() {
  return (
    <section id="pro" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#B8860B] opacity-[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Free to start. <span className="gold-text">Pro</span> when you&apos;re ready.
          </h2>
          <p className="text-lg text-[#AAAAAA] max-w-xl mx-auto">
            Core news features are free forever. Upgrade to Pro for AI deep dives and audio briefings.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-animate
          data-animate-delay="1"
        >
          {/* Free tier */}
          <div className="glass-card hover:translate-y-0">
            <div className="mb-6">
              <span className="text-sm font-medium text-[#AAAAAA] uppercase tracking-wider">Free</span>
              <div className="mt-2 text-3xl font-bold text-white">$0</div>
              <p className="text-sm text-[#666] mt-1">Forever</p>
            </div>
            <ul className="space-y-3">
              {freeFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#E0E0E0]">
                  <Check className="w-4 h-4 text-[#29D9A5] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm px-6 py-3 w-full mt-8"
            >
              Download Free
            </a>
          </div>

          {/* Pro tier */}
          <div className="glass-card border-[#B8860B]/30 hover:border-[#B8860B]/50 hover:translate-y-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8860B] opacity-[0.06] rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
            <div className="relative">
              <div className="mb-6">
                <span className="text-sm font-medium gold-text uppercase tracking-wider">Root Pro</span>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">$4.99</span>
                  <span className="text-sm text-[#666]">/mo</span>
                </div>
                <p className="text-sm text-[#666] mt-1">or $29.99/year</p>
              </div>
              <ul className="space-y-3">
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#E0E0E0]">
                    <Check className="w-4 h-4 text-[#DAA520] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-6 py-3 w-full mt-8"
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
