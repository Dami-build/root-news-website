export default function Footer() {
  return (
    <footer className="border-t border-[#333333]/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/root-logo.png" alt="Root News" className="w-10 h-10" />
              <span className="text-lg font-bold text-white">Root News</span>
            </div>
            <p className="text-[#AAAAAA] text-sm max-w-md mb-4">
              AI-powered news summaries from trusted sources. Skip the noise,
              stay informed.
            </p>
            <p className="text-[#555555] text-xs">
              &copy; 2026 Root Labs O&Uuml;. All rights reserved.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/rootnews.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@rootnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/rootnewsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#AAAAAA] hover:text-white transition-colors duration-300"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#333333]/50 text-center">
          <p className="text-xs text-[#555555]">Made in Estonia</p>
        </div>
      </div>
    </footer>
  )
}
