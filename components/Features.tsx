const steps = [
  {
    num: '01',
    title: 'Pick your categories',
    description:
      'Choose from 10+ topics - World, Tech, Finance, Crypto, Health, Sports, and more.',
  },
  {
    num: '02',
    title: 'Read AI summaries',
    description:
      'Every story distilled to the key points. Headlines, summaries, and context - ready in seconds.',
  },
  {
    num: '03',
    title: 'Go deeper when you want',
    description:
      'Tap any story for a deep dive. See full context, get both sides, or catch up in seconds.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16" data-animate>
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/20 mb-4">
            How it works
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.01em]">
            Three steps to a smarter news routine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step, i) => (
            <div key={i} data-animate data-animate-delay={String(i + 1)}>
              <span className="text-[11px] text-[#B8860B]/30 font-mono">
                {step.num}
              </span>
              <h3 className="text-sm font-medium text-white mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-[13px] text-white/40 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
