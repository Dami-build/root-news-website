export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="h-px mb-8"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
          }}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/root-logo.png"
              alt="Root News"
              className="w-4 h-4 opacity-40"
            />
            <span className="text-[11px] text-white/20">
              &copy; 2026 Root Labs O&Uuml;
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            <a
              href="/privacy"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              Contact
            </a>
            <span className="text-white/[0.06]">|</span>
            <a
              href="https://instagram.com/rootnews.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@rootnews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://x.com/rootnewsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/20 hover:text-white/50 transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
