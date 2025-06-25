import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Root News',
  description: 'Privacy Policy for Root News app. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-dark-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy for RootNews</h1>
          
          <div className="space-y-8 text-dark-200">
            <div className="text-sm text-dark-400">
              <p><strong>Effective Date:</strong> December 15, 2024</p>
              <p><strong>Last Updated:</strong> December 15, 2024</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Root Labs OÜ ("we," "our," or "us") operates the RootNews mobile application (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">2.1 Account Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Anonymous Accounts</strong>: We create temporary anonymous accounts during onboarding to provide immediate access to our service</li>
                <li><strong>Email and Password</strong>: If you choose to create a permanent account or upgrade from anonymous</li>
                <li><strong>Apple ID Information</strong>: If you sign in with Apple, we receive your Apple ID, email (if shared), and name (if shared)</li>
                <li><strong>Display Name</strong>: User-provided name for account personalization</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">2.2 Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>News Preferences</strong>: Categories you mark as favorites</li>
                <li><strong>Notification Settings</strong>: Your daily reminder preferences and timing</li>
                <li><strong>Subscription Information</strong>: Subscription type (Monthly/Annual) and status</li>
                <li><strong>App Usage</strong>: Basic app functionality usage for service improvement</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">2.3 Device Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Device Type</strong>: To optimize app performance</li>
                <li><strong>Push Notification Tokens</strong>: To deliver daily news reminders (only if enabled)</li>
                <li><strong>Platform Information</strong>: iOS version and device capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.1 Service Provision</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Create and manage your account (anonymous or permanent)</li>
                <li>Provide personalized news summaries using AI technology</li>
                <li>Deliver content based on your selected favorite categories</li>
                <li>Process subscription payments through Apple's payment system</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.2 Communication</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Send daily news reminder notifications (only if enabled by you)</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important service updates or changes</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.3 Service Improvement</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Analyze usage patterns to improve app functionality</li>
                <li>Optimize AI-powered news summarization</li>
                <li>Enhance user experience and app performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.1 Third-Party Services</h3>
              <p className="mb-3">We use the following third-party services that may process your data:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>OpenAI</strong>: For AI-powered news summarization (content processing only)</li>
                <li><strong>Firebase Authentication</strong>: For secure account management and authentication</li>
                <li><strong>Apple App Store</strong>: For subscription processing and payment handling</li>
                <li><strong>Heroku</strong>: For secure data hosting and app infrastructure</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.2 Legal Requirements</h3>
              <p className="mb-6">We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.</p>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.3 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Storage and Security</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">5.1 Data Location</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Primary Storage</strong>: Heroku cloud infrastructure (United States)</li>
                <li><strong>Local Storage</strong>: Minimal data stored locally on your device for app functionality</li>
                <li><strong>Authentication</strong>: Firebase secure authentication services</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">5.2 Security Measures</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Industry-standard encryption for data transmission</li>
                <li>Secure authentication protocols</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">5.3 Data Retention</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Anonymous Accounts</strong>: Data deleted when account is upgraded or app is uninstalled</li>
                <li><strong>Permanent Accounts</strong>: Data retained until account deletion is requested</li>
                <li><strong>Usage Data</strong>: Aggregated and anonymized data may be retained for service improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.1 Account Management</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Account Upgrade</strong>: Convert anonymous account to permanent account at any time</li>
                <li><strong>Account Deletion</strong>: Request complete account and data deletion</li>
                <li><strong>Data Access</strong>: Request a copy of your personal data</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.2 Communication Preferences</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Push Notifications</strong>: Enable or disable daily news reminders in app settings</li>
                <li><strong>Notification Timing</strong>: Customize when you receive daily reminders</li>
                <li><strong>Email Communications</strong>: Opt out of non-essential communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.3 Subscription Management</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Subscription Control</strong>: Manage subscription through Apple App Store settings</li>
                <li><strong>Cancellation</strong>: Cancel subscription at any time through Apple's system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
              <p>RootNews is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your country of residence, including the United States where our servers are located. We ensure appropriate safeguards are in place for such transfers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Analytics and Tracking</h2>
              <p>We do not use third-party analytics services like Google Analytics. Any usage data collected is processed internally and used solely for service improvement purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="mb-3">We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Posting the updated policy in the app</li>
                <li>Sending an email notification (if you have provided an email address)</li>
                <li>Displaying a prominent notice in the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="mb-3">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-dark-700 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Email</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Legal Basis for Processing (GDPR)</h2>
              <p className="mb-3">For users in the European Union, our legal basis for processing personal information includes:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Contract Performance</strong>: To provide the RootNews service you've subscribed to</li>
                <li><strong>Legitimate Interest</strong>: To improve our service and provide customer support</li>
                <li><strong>Consent</strong>: For optional features like push notifications</li>
                <li><strong>Legal Obligation</strong>: To comply with applicable laws and regulations</li>
              </ul>
              <p>You have the right to withdraw consent, request data portability, and lodge complaints with supervisory authorities under GDPR.</p>
            </section>

            <div className="border-t border-dark-600 pt-8 mt-12">
              <p className="text-sm text-dark-400 italic text-center">
                This Privacy Policy is effective as of December 15, 2024 and was last updated on December 15, 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 