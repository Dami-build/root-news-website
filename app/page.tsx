import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import AppShowcase from '@/components/AppShowcase'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ background: '#06060C' }}>
      {/* Fixed background gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #06060C 0%, #0E0E1E 40%, #0A0A0F 100%)',
        }}
      />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <AppShowcase />

        {/* Download CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#5B6EF5] opacity-[0.04] rounded-full blur-[150px]" />
          </div>

          <div
            className="max-w-3xl mx-auto text-center relative z-10"
            data-animate
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to skip the noise?
            </h2>
            <p className="text-lg text-[#AAAAAA] mb-10 max-w-xl mx-auto">
              Join thousands of readers who get their news in minutes, not hours.
            </p>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-base px-8 py-4 gap-2 inline-flex"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>

            <p className="mt-6 text-sm text-[#555555]">
              Free to download. No account required to start reading.
            </p>
          </div>
        </section>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}
