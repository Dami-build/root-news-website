import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

export const metadata: Metadata = {
  title: 'Privacy Policy - Root News',
  description: 'Privacy Policy for Root News app. Learn how we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{ background: '#0B0B15' }}
    >
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div
          className="absolute -top-[200px] right-0 w-[900px] h-[900px]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(184,134,11,0.05) 0%, transparent 55%)',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <article className="pt-32 sm:pt-36 pb-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-14 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/25 mb-4">
                Legal
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl text-white tracking-[-0.02em] leading-[1.05] mb-6">
                Privacy Policy
              </h1>
              <div className="inline-flex items-center gap-6 text-[11px] text-white/35">
                <span>
                  Effective{' '}
                  <span className="text-white/60">April 13, 2026</span>
                </span>
                <span className="text-white/15">&middot;</span>
                <span>
                  Updated{' '}
                  <span className="text-white/60">April 13, 2026</span>
                </span>
              </div>
            </div>

            <div className="space-y-14 text-[14px] text-white/65 leading-[1.75]">
              <Section num="01" title="Introduction">
                <p>
                  Root Labs OÜ (&quot;we,&quot; &quot;our,&quot; or
                  &quot;us&quot;) operates the Root News mobile application (the
                  &quot;Service&quot;). This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our Service.
                </p>
              </Section>

              <Section num="02" title="Information We Collect">
                <SubHeading>2.1 Account Information</SubHeading>
                <List>
                  <li>
                    <Strong>Anonymous Accounts</Strong>: We create temporary
                    anonymous accounts during onboarding to provide immediate
                    access to our service
                  </li>
                  <li>
                    <Strong>Email and Password</Strong>: If you choose to create
                    a permanent account or upgrade from anonymous
                  </li>
                  <li>
                    <Strong>Apple ID Information</Strong>: If you sign in with
                    Apple, we receive your Apple ID, email (if shared), and
                    name (if shared)
                  </li>
                  <li>
                    <Strong>Display Name</Strong>: User-provided name for
                    account personalization
                  </li>
                </List>

                <SubHeading>2.2 Usage Information</SubHeading>
                <List>
                  <li>
                    <Strong>News Preferences</Strong>: Categories you mark as
                    favorites
                  </li>
                  <li>
                    <Strong>Notification Settings</Strong>: Your daily reminder
                    preferences and timing
                  </li>
                  <li>
                    <Strong>Subscription Information</Strong>: Subscription
                    type (Monthly/Annual) and status
                  </li>
                  <li>
                    <Strong>App Usage</Strong>: Basic app functionality usage
                    for service improvement
                  </li>
                  <li>
                    <Strong>Daily Briefing Interactions</Strong>: Categories
                    selected and audio briefing plays
                  </li>
                  <li>
                    <Strong>Deep Dive Usage</Strong>: Feature usage count and
                    patterns
                  </li>
                  <li>
                    <Strong>In-App Review Responses</Strong>: Responses to
                    in-app review prompts
                  </li>
                </List>

                <SubHeading>2.3 Device Information</SubHeading>
                <List>
                  <li>
                    <Strong>Device Type</Strong>: To optimize app performance
                  </li>
                  <li>
                    <Strong>Push Notification Tokens</Strong>: To deliver daily
                    news reminders (only if enabled)
                  </li>
                  <li>
                    <Strong>Platform Information</Strong>: iOS version and
                    device capabilities
                  </li>
                </List>

                <SubHeading>2.4 AI Interaction Data</SubHeading>
                <List>
                  <li>
                    <Strong>Deep Dive Interactions</Strong>: Your use of deep
                    dive features such as Quick Catch-up, Why This Matters,
                    Full Context, and Both Sides. These interactions are
                    processed by our AI providers and are not stored long-term
                    by Root News.
                  </li>
                  <li>
                    <Strong>Daily Briefing Preferences</Strong>: Your selected
                    news categories and preferred voice for audio briefings,
                    stored locally on your device
                  </li>
                  <li>
                    <Strong>Audio Briefing Requests</Strong>: Requests to
                    generate audio versions of your Daily Briefing
                  </li>
                </List>
              </Section>

              <Section num="03" title="How We Use Your Information">
                <p className="mb-4">We use your information to:</p>
                <List>
                  <li>
                    <Strong>Provide Service</Strong>: Deliver personalized news
                    content and maintain your account
                  </li>
                  <li>
                    <Strong>Process Payments</Strong>: Handle subscription
                    billing through Apple App Store
                  </li>
                  <li>
                    <Strong>Send Notifications</Strong>: Deliver daily news
                    summaries and app updates (with your consent)
                  </li>
                  <li>
                    <Strong>Improve Service</Strong>: Analyze usage patterns to
                    enhance user experience
                  </li>
                  <li>
                    <Strong>Customer Support</Strong>: Respond to your
                    inquiries and resolve issues
                  </li>
                  <li>
                    <Strong>Legal Compliance</Strong>: Meet legal obligations
                    and protect our rights
                  </li>
                </List>
              </Section>

              <Section num="04" title="Information Sharing and Disclosure">
                <p className="mb-4">
                  We do not sell, trade, or rent your personal information. We
                  may share information only in these limited circumstances:
                </p>
                <List>
                  <li>
                    <Strong>Apple App Store</Strong>: Subscription and payment
                    processing
                  </li>
                  <li>
                    <Strong>Legal Requirements</Strong>: When required by law,
                    court order, or to protect our rights
                  </li>
                  <li>
                    <Strong>Business Transfers</Strong>: In connection with a
                    merger, acquisition, or sale of assets (with user
                    notification)
                  </li>
                  <li>
                    <Strong>Consent</Strong>: When you explicitly agree to
                    sharing
                  </li>
                </List>

                <p className="mt-6 mb-4 text-white/80 font-medium">
                  We use the following third-party service providers:
                </p>
                <List>
                  <li>
                    <Strong>AI Processing Providers</Strong>: Third-party AI
                    services process news summaries, deep dive responses, and
                    text-to-speech audio for Daily Briefings. Article context
                    may be sent to these providers for processing. Their
                    respective data usage policies apply.
                  </li>
                  <li>
                    <Strong>Mixpanel</Strong>: Analytics platform used to
                    understand app usage, retention, and feature engagement.
                    Collects anonymized usage events.
                  </li>
                  <li>
                    <Strong>AppsFlyer</Strong>: Mobile attribution and
                    marketing analytics. Collects device-level attribution
                    data subject to Apple&apos;s App Tracking Transparency
                    framework.
                  </li>
                  <li>
                    <Strong>Superwall</Strong>: Paywall and subscription
                    management. Handles paywall presentation and conversion
                    tracking.
                  </li>
                  <li>
                    <Strong>Supabase</Strong>: Cloud database hosting for user
                    accounts and content storage.
                  </li>
                </List>
              </Section>

              <Section num="05" title="Data Storage and Security">
                <SubHeading>5.1 Data Storage</SubHeading>
                <List>
                  <li>
                    <Strong>Location</Strong>: Data stored on secure servers in
                    the United States
                  </li>
                  <li>
                    <Strong>Duration</Strong>: Account data retained while
                    account is active
                  </li>
                  <li>
                    <Strong>Deletion</Strong>: Data deleted within 30 days of
                    account deletion request
                  </li>
                  <li>
                    <Strong>Anonymous Accounts</Strong>: Automatically deleted
                    after 30 days of inactivity
                  </li>
                </List>

                <SubHeading>5.2 Security Measures</SubHeading>
                <List>
                  <li>
                    Industry-standard encryption for data transmission and
                    storage
                  </li>
                  <li>Regular security audits and updates</li>
                  <li>
                    Limited access to personal data on need-to-know basis
                  </li>
                  <li>Secure authentication systems</li>
                </List>
              </Section>

              <Section num="06" title="Your Rights and Choices">
                <SubHeading>6.1 Account Management</SubHeading>
                <List>
                  <li>
                    <Strong>Access</Strong>: View your account information in
                    app settings
                  </li>
                  <li>
                    <Strong>Update</Strong>: Modify your preferences and
                    account details
                  </li>
                  <li>
                    <Strong>Delete</Strong>: Request account deletion through
                    app or email
                  </li>
                  <li>
                    <Strong>Export</Strong>: Request a copy of your data
                  </li>
                </List>

                <SubHeading>6.2 Communication Preferences</SubHeading>
                <List>
                  <li>Control push notification settings in app</li>
                  <li>Unsubscribe from email communications</li>
                  <li>Adjust daily summary timing and frequency</li>
                </List>
              </Section>

              <Section num="07" title="Children's Privacy">
                <p>
                  Root News is not intended for children under 13. We do not
                  knowingly collect personal information from children under
                  13. If we discover such information, we will delete it
                  immediately.
                </p>
              </Section>

              <Section num="08" title="International Data Transfers">
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure appropriate
                  safeguards are in place for international transfers.
                </p>
              </Section>

              <Section num="09" title="Analytics and Tracking">
                <p className="mb-4">
                  We use analytics tools to understand how our app is used and
                  to improve the Service. We do not serve third-party
                  advertisements.
                </p>
                <List>
                  <li>
                    <Strong>Mixpanel</Strong>: We use Mixpanel for product
                    analytics, including feature engagement, retention, and
                    usage patterns. Data collected by Mixpanel is anonymized.
                  </li>
                  <li>
                    <Strong>AppsFlyer</Strong>: We use AppsFlyer for mobile
                    attribution and marketing analytics. AppsFlyer respects
                    Apple&apos;s App Tracking Transparency (ATT) framework, and
                    attribution data is only collected with your consent where
                    required.
                  </li>
                  <li>
                    <Strong>Superwall</Strong>: We use Superwall for paywall
                    analytics and subscription conversion tracking.
                  </li>
                </List>
              </Section>

              <Section num="10" title="AI Data Processing">
                <p className="mb-4">
                  Root News uses artificial intelligence to generate content
                  and provide features throughout the app:
                </p>
                <List>
                  <li>
                    <Strong>News Summaries and Deep Dives</Strong>: Article
                    summaries and in-depth analyses are generated using AI
                    based on content from trusted news sources.
                  </li>
                  <li>
                    <Strong>Deep Dive Features</Strong>: Preset deep dives
                    (Quick Catch-up, Why This Matters, Full Context, Both
                    Sides) are processed by our AI providers. Root News does
                    not permanently store your deep dive interactions.
                  </li>
                  <li>
                    <Strong>Daily Briefings</Strong>: Personalized text
                    briefings are generated using AI from the day&apos;s top
                    stories in your selected categories.
                  </li>
                  <li>
                    <Strong>Audio Briefings</Strong>: Audio versions of Daily
                    Briefings are generated server-side using AI text-to-speech
                    technology and streamed to your device.
                  </li>
                  <li>
                    <Strong>Accuracy</Strong>: AI-generated outputs may contain
                    inaccuracies. Users should verify important information
                    with original sources.
                  </li>
                </List>
              </Section>

              <Section num="11" title="Changes to This Privacy Policy">
                <p className="mb-4">
                  We may update this Privacy Policy periodically. We will
                  notify you of material changes through:
                </p>
                <List>
                  <li>In-app notifications</li>
                  <li>Email notifications (if provided)</li>
                  <li>Updated policy posted on our website</li>
                </List>
              </Section>

              <Section num="12" title="Contact Us">
                <p className="mb-5">
                  If you have questions about this Privacy Policy, please
                  contact us:
                </p>
                <InfoBox>
                  <li>
                    <Strong>Email</Strong>: support@rootnews.app
                  </li>
                  <li>
                    <Strong>Website</Strong>: https://rootnews.app
                  </li>
                  <li>
                    <Strong>Address</Strong>: Harju County, Tallinn, Lasnamäe
                    District, Sepapaja Street 6, 15551
                  </li>
                </InfoBox>
              </Section>

              <Section num="13" title="Legal Basis for Processing (GDPR)">
                <p className="mb-4">
                  For users in the European Union, our legal basis for
                  processing personal information includes:
                </p>
                <List>
                  <li>
                    <Strong>Contract Performance</Strong>: To provide the Root
                    News service you&apos;ve subscribed to
                  </li>
                  <li>
                    <Strong>Legitimate Interest</Strong>: To improve our
                    service and provide customer support
                  </li>
                  <li>
                    <Strong>Consent</Strong>: For optional features like push
                    notifications
                  </li>
                  <li>
                    <Strong>Legal Obligation</Strong>: To comply with
                    applicable laws and regulations
                  </li>
                </List>
                <p className="mt-4">
                  You have the right to withdraw consent, request data
                  portability, and lodge complaints with supervisory
                  authorities under GDPR.
                </p>
              </Section>
            </div>

            <div className="mt-20 pt-10 border-t border-white/[0.06] text-center">
              <p className="font-serif italic text-[15px] text-white/35">
                This Privacy Policy is effective as of April 13, 2026 and was
                last updated on April 13, 2026.
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>

      <ScrollAnimator />
    </main>
  )
}

function Section({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="relative" data-animate>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-[11px] font-mono text-[#DAA520]/60 tracking-[0.1em]">
          {num}
        </span>
        <h2 className="font-serif text-2xl sm:text-[1.75rem] text-white tracking-[-0.01em] leading-tight">
          {title}
        </h2>
      </div>
      <div className="pl-0 sm:pl-12">{children}</div>
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[13px] font-semibold text-white/85 uppercase tracking-[0.12em] mt-6 mb-3 first:mt-0">
      {children}
    </h3>
  )
}

function List({ children }: { children: React.ReactNode }) {
  return <ul className="bullet-list space-y-2.5 text-[13.5px]">{children}</ul>
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-white/90 font-medium">{children}</strong>
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <ul className="bullet-list space-y-2 text-[13.5px]">{children}</ul>
    </div>
  )
}
