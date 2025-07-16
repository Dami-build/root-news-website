import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Root News',
  description: 'Privacy Policy for Root News app. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy for Root News</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="text-sm text-gray-500">
              <p><strong>Effective Date:</strong> December 15, 2024</p>
              <p><strong>Last Updated:</strong> December 15, 2024</p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4 text-sm">
                Root Labs OÜ ("we," "our," or "us") operates the Root News mobile application (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Account Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
                <li><strong>Anonymous Accounts</strong>: We create temporary anonymous accounts during onboarding to provide immediate access to our service</li>
                <li><strong>Email and Password</strong>: If you choose to create a permanent account or upgrade from anonymous</li>
                <li><strong>Apple ID Information</strong>: If you sign in with Apple, we receive your Apple ID, email (if shared), and name (if shared)</li>
                <li><strong>Display Name</strong>: User-provided name for account personalization</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
                <li><strong>News Preferences</strong>: Categories you mark as favorites</li>
                <li><strong>Notification Settings</strong>: Your daily reminder preferences and timing</li>
                <li><strong>Subscription Information</strong>: Subscription type (Monthly/Annual) and status</li>
                <li><strong>App Usage</strong>: Basic app functionality usage for service improvement</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Device Information</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Device Type</strong>: To optimize app performance</li>
                <li><strong>Push Notification Tokens</strong>: To deliver daily news reminders (only if enabled)</li>
                <li><strong>Platform Information</strong>: iOS version and device capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3 text-sm">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Provide Service</strong>: Deliver personalized news content and maintain your account</li>
                <li><strong>Process Payments</strong>: Handle subscription billing through Apple App Store</li>
                <li><strong>Send Notifications</strong>: Deliver daily news summaries and app updates (with your consent)</li>
                <li><strong>Improve Service</strong>: Analyze usage patterns to enhance user experience</li>
                <li><strong>Customer Support</strong>: Respond to your inquiries and resolve issues</li>
                <li><strong>Legal Compliance</strong>: Meet legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-3 text-sm">We do not sell, trade, or rent your personal information. We may share information only in these limited circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><strong>Apple App Store</strong>: Subscription and payment processing</li>
                <li><strong>Service Providers</strong>: Trusted third parties who assist in service delivery (under strict confidentiality agreements)</li>
                <li><strong>Legal Requirements</strong>: When required by law, court order, or to protect our rights</li>
                <li><strong>Business Transfers</strong>: In connection with a merger, acquisition, or sale of assets (with user notification)</li>
                <li><strong>Consent</strong>: When you explicitly agree to sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Storage and Security</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">5.1 Data Storage</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
                <li><strong>Location</strong>: Data stored on secure servers in the United States</li>
                <li><strong>Duration</strong>: Account data retained while account is active</li>
                <li><strong>Deletion</strong>: Data deleted within 30 days of account deletion request</li>
                <li><strong>Anonymous Accounts</strong>: Automatically deleted after 30 days of inactivity</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">5.2 Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Industry-standard encryption for data transmission and storage</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal data on need-to-know basis</li>
                <li>Secure authentication systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.1 Account Management</h3>
              <ul className="list-disc list-inside space-y-2 mb-6 text-sm">
                <li><strong>Access</strong>: View your account information in app settings</li>
                <li><strong>Update</strong>: Modify your preferences and account details</li>
                <li><strong>Delete</strong>: Request account deletion through app or email</li>
                <li><strong>Export</strong>: Request a copy of your data</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">6.2 Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Control push notification settings in app</li>
                <li>Unsubscribe from email communications</li>
                <li>Adjust daily summary timing and frequency</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-sm">Root News is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we discover such information, we will delete it immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
              <p className="text-sm">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Analytics and Tracking</h2>
              <p className="text-sm">We use minimal analytics to understand app usage and improve our service. We do not use third-party advertising or tracking technologies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="mb-3 text-sm">We may update this Privacy Policy periodically. We will notify you of material changes through:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>In-app notifications</li>
                <li>Email notifications (if provided)</li>
                <li>Updated policy posted on our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="mb-3 text-sm">If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-gray-900">
                  <li><strong>Email</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-3 text-sm">For users in the European Union, our legal basis for processing personal information includes:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
                <li><strong>Contract Performance</strong>: To provide the Root News service you've subscribed to</li>
                <li><strong>Legitimate Interest</strong>: To improve our service and provide customer support</li>
                <li><strong>Consent</strong>: For optional features like push notifications</li>
                <li><strong>Legal Obligation</strong>: To comply with applicable laws and regulations</li>
              </ul>
              <p className="text-sm">You have the right to withdraw consent, request data portability, and lodge complaints with supervisory authorities under GDPR.</p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-600 italic text-center">
                This Privacy Policy is effective as of December 15, 2024 and was last updated on December 15, 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 