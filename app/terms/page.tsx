import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Root News',
  description: 'Terms of Service for Root News app. Read our terms and conditions for using our AI-powered news service.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-dark-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service for RootNews</h1>
          
          <div className="space-y-8 text-dark-200">
            <div className="text-sm text-dark-400">
              <p><strong>Effective Date:</strong> June 11, 2025</p>
              <p><strong>Last Updated:</strong> June 11, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By downloading, installing, or using the RootNews mobile application ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="mb-3">RootNews is a news aggregation and summarization service that:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Aggregates news from trusted international sources</li>
                <li>Provides AI-powered summaries of news articles</li>
                <li>Offers content across 10+ news categories</li>
                <li>Delivers personalized news experiences</li>
                <li>Provides ad-free, clutter-free news consumption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Account Types and Registration</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.1 Anonymous Accounts</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>We create temporary anonymous accounts during onboarding for immediate service access</li>
                <li>Anonymous accounts provide full service functionality during subscription period</li>
                <li>Anonymous accounts can be upgraded to permanent accounts at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.2 Permanent Accounts</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Created by providing email and password or signing in with Apple</li>
                <li>Required for long-term account management and data retention</li>
                <li>Allows account recovery and cross-device synchronization</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">3.3 Account Requirements</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Users must be at least 13 years old</li>
                <li>One account per user</li>
                <li>Accurate information must be provided for permanent accounts</li>
                <li>Users are responsible for maintaining account security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Subscription and Payment Terms</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.1 Subscription Plans</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Monthly Plan</strong>: $4.99 per month</li>
                <li><strong>Annual Plan</strong>: $39.99 per year (save 33%)</li>
                <li>All prices are in USD and may vary by region</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.2 Payment Processing</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>All payments are processed through Apple App Store</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
                <li>Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.3 Free Trial</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>New users may be eligible for a 3-day free trial</li>
                <li>Trial automatically converts to paid subscription unless cancelled</li>
                <li>Cancel anytime during trial period to avoid charges</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">4.4 Cancellation and Refunds</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancel subscription anytime through Apple App Store settings</li>
                <li>Cancellation takes effect at the end of current billing period</li>
                <li>No refunds for partial subscription periods</li>
                <li>Refund requests must be made through Apple App Store</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Acceptable Use</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">5.1 Permitted Use</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Personal, non-commercial use of the Service</li>
                <li>Accessing news summaries and content for informational purposes</li>
                <li>Customizing preferences and notification settings</li>
                <li>Sharing individual news summaries through standard sharing features</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">5.2 Prohibited Use</h3>
              <p className="mb-3">You may not:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer, decompile, or hack the Service</li>
                <li>Use automated systems to access the Service</li>
                <li>Redistribute, resell, or commercially exploit the content</li>
                <li>Create derivative works from our AI-generated summaries</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Content and Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.1 Our Content</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>AI-generated summaries are our proprietary content</li>
                <li>App design, features, and functionality are our intellectual property</li>
                <li>RootNews name, logo, and branding are our trademarks</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.2 Third-Party Content</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Original news articles remain property of their respective publishers</li>
                <li>We aggregate and summarize content under fair use principles</li>
                <li>Links to original sources are provided for full articles</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">6.3 User Content</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Users retain rights to any content they create (preferences, settings)</li>
                <li>We may use aggregated, anonymized usage data for service improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. AI-Powered Summaries</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">7.1 Summary Generation</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Summaries are generated using artificial intelligence technology</li>
                <li>Summaries aim to capture key points but may not include all details</li>
                <li>Original source articles should be consulted for complete information</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">7.2 Accuracy Disclaimer</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>While we strive for accuracy, AI-generated summaries may contain errors</li>
                <li>Summaries are for informational purposes only</li>
                <li>Users should verify important information from original sources</li>
                <li>We are not responsible for decisions made based solely on summaries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data Protection</h2>
              <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Push Notifications</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">9.1 Daily Reminders</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Optional daily news reminder notifications</li>
                <li>Customizable timing and frequency</li>
                <li>Can be disabled at any time in app settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">9.2 Service Notifications</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Important service updates and announcements</li>
                <li>Subscription and payment notifications</li>
                <li>Security and account-related alerts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Service Availability</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">10.1 Service Uptime</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>We strive to maintain high service availability</li>
                <li>Scheduled maintenance may temporarily interrupt service</li>
                <li>No guarantee of uninterrupted service</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">10.2 Content Updates</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>News content is updated multiple times daily</li>
                <li>AI processing may cause brief delays in new content availability</li>
                <li>Some news sources may be temporarily unavailable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">11.1 Service Disclaimer</h3>
              <p className="mb-6 bg-dark-700 p-4 rounded-lg text-sm">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">11.2 Liability Limits</h3>
              <p className="mb-6 bg-dark-700 p-4 rounded-lg text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">11.3 Excluded Damages</h3>
              <p className="bg-dark-700 p-4 rounded-lg text-sm">
                WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Indemnification</h2>
              <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Termination</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">13.1 Termination by You</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Cancel subscription anytime through Apple App Store</li>
                <li>Delete account through app settings or by contacting support</li>
                <li>Termination takes effect at end of current billing period</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">13.2 Termination by Us</h3>
              <p className="mb-3">We may terminate or suspend your account if you:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Violate these Terms of Service</li>
                <li>Engage in fraudulent or illegal activity</li>
                <li>Abuse or misuse the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">13.3 Effect of Termination</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to Service ends immediately upon termination</li>
                <li>Data may be deleted according to our Privacy Policy</li>
                <li>No refunds for remaining subscription period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to Terms</h2>
              <p className="mb-3">We may modify these Terms at any time. We will notify users of material changes through:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>In-app notifications</li>
                <li>Email notifications (if email provided)</li>
                <li>Updated Terms posted on our website</li>
              </ul>
              <p>Continued use of the Service after changes constitutes acceptance of new Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">15. Governing Law and Disputes</h2>
              
              <h3 className="text-xl font-semibold text-primary-300 mb-3">15.1 Governing Law</h3>
              <p className="mb-6">These Terms are governed by the laws of Estonia, without regard to conflict of law principles.</p>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">15.2 Dispute Resolution</h3>
              <p className="mb-6">Any disputes shall be resolved through binding arbitration in Estonia, except where prohibited by law.</p>

              <h3 className="text-xl font-semibold text-primary-300 mb-3">15.3 Class Action Waiver</h3>
              <p>You agree to resolve disputes individually and waive the right to participate in class actions or collective proceedings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">16. Apple App Store Terms</h2>
              <p className="mb-3">Additional terms apply for users who download the app through Apple App Store:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Apple is not responsible for the Service or these Terms</li>
                <li>Apple has no obligation to provide support for the Service</li>
                <li>Apple is not liable for any claims related to the Service</li>
                <li>In case of conflict, Apple's terms take precedence regarding app distribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">17. Severability</h2>
              <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">18. Contact Information</h2>
              <p className="mb-3">For questions about these Terms of Service, contact us:</p>
              <div className="bg-dark-700 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Email</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">19. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Root Labs OÜ regarding the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">20. Service Provider</h2>
              <div className="bg-dark-700 p-4 rounded-lg">
                <p className="font-semibold text-white mb-2">Service Provider:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Company</strong>: Root Labs OÜ (Estonia)</li>
                  <li><strong>Contact</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <div className="border-t border-dark-600 pt-8 mt-12">
              <p className="text-sm text-dark-400 italic text-center">
                These Terms of Service are effective as of June 11, 2025 and were last updated on June 11, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 