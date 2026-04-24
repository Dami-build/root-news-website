import { Globe2, Sparkles, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    Icon: Globe2,
    title: 'Scan',
    description:
      'Thousands of articles from hundreds of global sources, continuously monitored.',
  },
  {
    num: '02',
    Icon: Sparkles,
    title: 'Filter',
    description:
      'AI scores stories by importance, strips the noise, and identifies what actually matters.',
  },
  {
    num: '03',
    Icon: CheckCircle2,
    title: 'Distill',
    description:
      'Clear, scannable, unbiased summaries - ready for you in seconds.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center" data-animate>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 mb-3">
            How Root works
          </p>
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-[-0.02em] max-w-xl mx-auto leading-tight">
            A newsroom working for{' '}
            <span className="font-serif italic text-[#DAA520] font-normal">
              you
            </span>{' '}
            24/7
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px">
            <div
              className="h-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(218,165,32,0.3) 20%, rgba(218,165,32,0.3) 80%, transparent)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, i) => {
              const Icon = step.Icon
              return (
                <div
                  key={i}
                  className="text-center relative"
                  data-animate
                  data-animate-delay={String(i + 1)}
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                    <div className="absolute inset-0 rounded-full bg-[#0B0B15] border border-[#B8860B]/20" />
                    <div
                      className="absolute inset-0 rounded-full blur-md"
                      style={{ background: 'rgba(184, 134, 11, 0.15)' }}
                    />
                    <div className="relative w-14 h-14 rounded-full bg-[#14141F] border border-white/[0.06] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#DAA520]" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-[10px] font-mono text-[#DAA520]/60 bg-[#0B0B15] px-1.5 py-0.5 rounded-full border border-white/[0.06]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-medium text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-white/40 leading-relaxed max-w-[220px] mx-auto">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
