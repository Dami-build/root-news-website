const APP_STORE_URL =
  'https://apps.apple.com/us/app/root-smart-news-summaries/id6748605459'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[180px]"
          style={{ background: 'rgba(184, 134, 11, 0.035)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/20 mb-8 fade-in">
          Root News
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-[-0.02em] mb-6 fade-in-d1">
          The fastest way to read and understand the news
        </h1>

        <p className="text-sm sm:text-[15px] text-white/40 mb-10 max-w-md mx-auto leading-relaxed fade-in-d2">
          AI reads the news in real time, finds what actually matters, and gives
          you the key points in seconds.
        </p>

        <div className="fade-in-d3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-sm px-6 py-2.5 gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </a>
        </div>

        <p className="mt-8 text-[11px] text-white/15 fade-in-d4">
          Free forever &middot; No account required &middot; Pro available
        </p>
      </div>
    </section>
  )
}
