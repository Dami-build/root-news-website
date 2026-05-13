import { Star } from 'lucide-react'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full blur-[170px]"
          style={{ background: 'rgba(184, 134, 11, 0.06)' }}
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto text-center">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 pl-2 pr-3.5 py-1.5 rounded-full border border-[#DAA520]/20 bg-[#DAA520]/[0.04] text-[11px] hover:border-[#DAA520]/35 hover:bg-[#DAA520]/[0.06] transition-colors fade-in"
        >
          <span className="flex items-center gap-[1px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-2.5 h-2.5 fill-[#DAA520] text-[#DAA520]"
              />
            ))}
          </span>
          <span className="text-white/90 font-semibold tracking-tight">
            4.9
          </span>
          <span className="text-white/15">·</span>
          <span className="text-white/55">
            Join <span className="text-white/80 font-medium">4,500+</span>{' '}
            informed readers
          </span>
        </a>

        <h1 className="mt-8 text-[2.5rem] sm:text-5xl lg:text-[4rem] font-medium text-white leading-[1.02] tracking-[-0.035em] fade-in-d1">
          The{' '}
          <span className="font-serif italic font-normal text-[#DAA520] tracking-[-0.02em]">
            intelligence
          </span>{' '}
          layer
          <br className="hidden sm:block" />{' '}
          for modern news
        </h1>

        <p className="mt-6 text-[15px] sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed fade-in-d2">
          A continuous, real-time read on the global news cycle. Built for
          signal, context, and clarity.
        </p>

        <div className="mt-10 fade-in-d3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-6 py-3 gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-20 px-4 sm:px-6 max-w-xl mx-auto fade-in-d4">
        <div className="relative">
          <div
            className="absolute -inset-8 blur-2xl pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(184,134,11,0.10), transparent 60%)',
            }}
          />
          <div className="relative card-float rounded-2xl border border-white/[0.08] bg-[#14141F]/90 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="relative inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 live-dot text-emerald-400/60" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  World
                </span>
                <span className="text-white/15">/</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Markets
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30">
                09:42 UTC
              </span>
            </div>

            <h2 className="font-serif text-[22px] sm:text-2xl leading-[1.2] text-white tracking-[-0.01em] mb-5">
              Global markets rally as central banks align on rate strategy
            </h2>

            <ul className="space-y-2.5 mb-6 bullet-reveal">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#DAA520] flex-shrink-0 mt-1.5" />
                <span className="text-[13px] text-white/70 leading-relaxed">
                  Major indexes gain 2-3% across Europe and Asia on policy news
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#DAA520] flex-shrink-0 mt-1.5" />
                <span className="text-[13px] text-white/70 leading-relaxed">
                  Fed, ECB, and BoE hint at coordinated approach on inflation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-[#DAA520] flex-shrink-0 mt-1.5" />
                <span className="text-[13px] text-white/70 leading-relaxed">
                  Analysts remain split on longer-term implications
                </span>
              </li>
            </ul>

            <div className="flex items-center justify-end pt-4 border-t border-white/[0.06]">
              <button className="text-[11px] text-[#DAA520]/80 hover:text-[#DAA520] transition-colors flex items-center gap-1.5">
                Deep dive
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
