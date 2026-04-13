import { LayoutGrid, Zap, Layers } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: LayoutGrid,
    title: 'Pick your categories',
    description:
      'Choose from 10+ topics — World, Tech, Finance, Crypto, Health, Sports, and more. Your feed shows only what you care about.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'Read AI summaries',
    description:
      'Every story distilled to the key points. Headlines, bullet-point summaries, and context — ready in seconds.',
  },
  {
    num: '03',
    icon: Layers,
    title: 'Go deeper when you want',
    description:
      'Tap any story for a deep dive, or ask Root AI anything about the article. Like having a newsroom working just for you.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-animate>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How it <span className="gold-text">works</span>
          </h2>
          <p className="text-lg text-[#AAAAAA] max-w-xl mx-auto">
            Three steps to a smarter news routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#333] to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={i}
                className="text-center relative"
                data-animate
                data-animate-delay={String(i + 1)}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1E1E1E] border border-[#333] mb-6">
                  <Icon className="w-7 h-7 text-[#DAA520]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#B8860B] to-[#DAA520] text-[#0A0A0F] text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#AAAAAA] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
