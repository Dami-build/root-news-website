import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Root News',
  description: 'Terms of Service for Root News app. Read our terms and conditions for using our AI-powered news service.',
}

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service for Root News</h1>
          
          <div className="space-y-8 text-gray-700">
            <div className="text-sm text-dark-400">
              <p><strong>Effective Date:</strong> June 11, 2025</p>
              <p><strong>Last Updated:</strong> June 11, 2025</p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By downloading, installing, or using the Root News mobile application ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="mb-3">Root News is a news aggregation and summarization service that:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Aggregates news from trusted international sources</li>
                <li>Provides AI-powered summaries of news articles</li>
                <li>Offers content across 10+ news categories</li>
                <li>Delivers personalized news experiences</li>
                <li>Provides ad-free, clutter-free news consumption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Types and Registration</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Anonymous Accounts</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>We create temporary anonymous accounts during onboarding for immediate service access</li>
                <li>Anonymous accounts provide full service functionality during subscription period</li>
                <li>Anonymous accounts can be upgraded to permanent accounts at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Permanent Accounts</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Created with email and password or Apple ID</li>
                <li>Provide persistent access to your preferences and settings</li>
                <li>Allow account recovery and cross-device synchronization</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Provide accurate information when creating permanent accounts</li>
                <li>Use the Service only for personal, non-commercial purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Subscription and Payment</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Subscription Types</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>Monthly Subscription</strong>: $4.99 per month</li>
                <li><strong>Annual Subscription</strong>: $49.99 per year</li>
                <li>All subscriptions are processed through Apple App Store</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Payment Processing</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>All payments are processed by Apple through the App Store</li>
                <li>Subscription automatically renews unless cancelled</li>
                <li>Apple's payment terms and conditions apply</li>
                <li>We do not store or process payment information directly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Cancellation and Refunds</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancel subscription anytime through Apple App Store settings</li>
                <li>Cancellation takes effect at the end of current billing period</li>
                <li>Refunds are subject to Apple's refund policy</li>
                <li>No partial refunds for unused portions of subscription periods</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct and Restrictions</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Acceptable Use</h3>
              <p className="mb-3">You agree to use the Service only for lawful purposes and in accordance with these Terms. You may:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Access and read news summaries for personal use</li>
                <li>Customize your news preferences and settings</li>
                <li>Share news content through provided sharing features</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Prohibited Activities</h3>
              <p className="mb-3">You may not:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Attempt to reverse engineer, decompile, or disassemble the app</li>
                <li>Use automated systems to access the Service</li>
                <li>Share your account credentials with others</li>
                <li>Use the Service for commercial purposes without authorization</li>
                <li>Attempt to circumvent security measures</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Our Content</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>The Root News app, AI summaries, and user interface are owned by Root Labs OÜ</li>
                <li>Original news content remains the property of respective publishers</li>
                <li>Our AI-generated summaries are derivative works owned by Root Labs OÜ</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Limited License</h3>
              <p className="mb-6">We grant you a limited, non-exclusive, non-transferable license to use the Service for personal purposes in accordance with these Terms.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Feedback</h3>
              <p>Any feedback, suggestions, or improvements you provide become our property and may be used without compensation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy and Data Protection</h2>
              <p className="mb-3">Your privacy is important to us. Our data collection and use practices are detailed in our Privacy Policy, which is incorporated into these Terms by reference.</p>
              <p>By using the Service, you consent to our collection and use of your information as described in the Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Content and Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 News Sources</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>We aggregate content from various third-party news sources</li>
                <li>We are not responsible for the accuracy of third-party content</li>
                <li>Original content remains subject to source publishers' terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Apple Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>App distribution through Apple App Store</li>
                <li>Payment processing through Apple's systems</li>
                <li>Apple's terms and conditions apply to these services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Service Availability and Modifications</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Service Availability</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>We strive to provide continuous service availability</li>
                <li>Service may be temporarily unavailable due to maintenance or technical issues</li>
                <li>We do not guarantee uninterrupted access</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Service Modifications</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>We may modify, update, or discontinue features at any time</li>
                <li>Material changes will be communicated through the app or email</li>
                <li>Continued use constitutes acceptance of modifications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Content Accuracy and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 AI-Generated Content</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>News summaries are generated using artificial intelligence</li>
                <li>AI summaries may contain inaccuracies or omissions</li>
                <li>Users should verify important information with original sources</li>
                <li>We are not liable for decisions made based on AI summaries</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Content Updates</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>News content is updated multiple times daily</li>
                <li>AI processing may cause brief delays in new content availability</li>
                <li>Some news sources may be temporarily unavailable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">11.1 Service Disclaimer</h3>
              <p className="mb-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-900">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">11.2 Liability Limits</h3>
              <p className="mb-6 bg-gray-100 p-4 rounded-lg text-sm text-gray-900">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">11.3 Excluded Damages</h3>
              <p className="bg-gray-100 p-4 rounded-lg text-sm text-gray-900">
                WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR DATA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
              <p>You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">13.1 Termination by You</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Cancel subscription anytime through Apple App Store</li>
                <li>Delete account through app settings or by contacting support</li>
                <li>Termination takes effect at end of current billing period</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">13.2 Termination by Us</h3>
              <p className="mb-3">We may terminate or suspend your account if you:</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Violate these Terms of Service</li>
                <li>Engage in fraudulent or illegal activity</li>
                <li>Abuse or misuse the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">13.3 Effect of Termination</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access to Service ends immediately upon termination</li>
                <li>Data may be deleted according to our Privacy Policy</li>
                <li>No refunds for remaining subscription period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="mb-3">We may modify these Terms at any time. We will notify users of material changes through:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>In-app notifications</li>
                <li>Email notifications (if email provided)</li>
                <li>Updated Terms posted on our website</li>
              </ul>
              <p>Continued use of the Service after changes constitutes acceptance of new Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Governing Law and Disputes</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.1 Governing Law</h3>
              <p className="mb-6">These Terms are governed by the laws of Estonia, without regard to conflict of law principles.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.2 Dispute Resolution</h3>
              <p className="mb-6">Any disputes shall be resolved through binding arbitration in Estonia, except where prohibited by law.</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.3 Class Action Waiver</h3>
              <p>You agree to resolve disputes individually and waive the right to participate in class actions or collective proceedings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Apple App Store Terms</h2>
              <p className="mb-3">Additional terms apply for users who download the app through Apple App Store:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Apple is not responsible for the Service or these Terms</li>
                <li>Apple has no obligation to provide support for the Service</li>
                <li>Apple is not liable for any claims related to the Service</li>
                <li>In case of conflict, Apple's terms take precedence regarding app distribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Severability</h2>
              <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="mb-3">For questions about these Terms of Service, contact us:</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-gray-900">
                  <li><strong>Email</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">19. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and Root Labs OÜ regarding the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">20. Service Provider</h2>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Service Provider:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-900">
                  <li><strong>Company</strong>: Root Labs OÜ (Estonia)</li>
                  <li><strong>Contact</strong>: damian@rootnews.app</li>
                  <li><strong>Website</strong>: https://rootnews.app</li>
                  <li><strong>Address</strong>: Harju County, Tallinn, Lasnamäe District, Sepapaja Street 6, 15551</li>
                </ul>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-sm text-gray-600 italic text-center">
                These Terms of Service are effective as of June 11, 2025 and were last updated on June 11, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 