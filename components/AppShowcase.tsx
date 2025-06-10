import { Smartphone, Download } from 'lucide-react'

export default function AppShowcase() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Download Root News
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Get early access to AI-powered news summaries. Be among the first to experience the future of news.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-3xl p-8 border border-primary-800/30">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-6">
                    <Smartphone className="w-24 h-24 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Your Pocket News Assistant
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-dark-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-400">Early</div>
                      <div>Access</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-400">iOS</div>
                      <div>Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get Early Access
                </h3>
                <p className="text-dark-300 text-lg leading-relaxed mb-6">
                  Join the waitlist for Root News and be among the first to experience AI-powered news summaries. 
                  Early access members get exclusive features and priority support.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <button className="w-full sm:w-auto btn-primary flex items-center justify-center space-x-3 text-lg px-8 py-4">
                  <Download className="w-5 h-5" />
                  <span>Join iOS Waitlist</span>
                </button>
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-6">
                <div className="flex items-center space-x-3 text-dark-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Early access to new features</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Premium AI-powered summaries</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Works offline for saved articles</span>
                </div>
                <div className="flex items-center space-x-3 text-dark-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Priority customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 