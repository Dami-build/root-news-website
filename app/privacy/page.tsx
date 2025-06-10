import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Root News',
  description: 'Privacy Policy for Root News app. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-dark-300 text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8 text-dark-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  Root News is committed to protecting your privacy. We collect minimal information necessary to provide our news aggregation service:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usage data to improve our AI summarization algorithms</li>
                  <li>Device information for app optimization</li>
                  <li>Reading preferences to personalize your news feed</li>
                  <li>Crash reports to maintain app stability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  We use the collected information to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide personalized news summaries</li>
                  <li>Improve our AI algorithms and app performance</li>
                  <li>Send important app updates and notifications</li>
                  <li>Ensure app security and prevent abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing</h2>
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share aggregated, anonymized data for research purposes or with news sources to improve content quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your data, including encryption in transit and at rest, secure servers, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of data collection</li>
                  <li>Export your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="mb-4">
                  Our app uses minimal tracking technologies to improve user experience. You can disable these in your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Children's Privacy</h2>
                <p className="mb-4">
                  Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-dark-900 p-4 rounded-lg">
                  <p>Email: privacy@rootnews.com</p>
                  <p>Address: [Your Company Address]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 