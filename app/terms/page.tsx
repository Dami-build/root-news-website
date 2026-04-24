import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/AnimatedDivider'

export const metadata: Metadata = {
  title: 'Terms of Service - Root News',
  description: 'Terms of Service for Root News app. Read our terms and conditions for using our AI-powered news service.',
}

export default function Terms() {
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
                Terms of Service
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
              <Section num="01" title="Agreement to Terms">
                <p>
                  By downloading, installing, or using the Root News mobile
                  application (&quot;Service&quot;), you agree to be bound by
                  these Terms of Service (&quot;Terms&quot;). If you do not
                  agree to these Terms, do not use the Service.
                </p>
              </Section>

              <Section num="02" title="Description of Service">
                <p className="mb-4">
                  Root News is an AI-powered news aggregation and summarization
                  service available in two tiers:
                </p>

                <SubHeading>Free Tier</SubHeading>
                <List>
                  <li>
                    Full access to AI-powered news summaries across 10+
                    categories
                  </li>
                  <li>Deep-dive articles on trending topics</li>
                  <li>Trending news feed</li>
                  <li>Customizable news feed based on your interests</li>
                  <li>Ad-free experience</li>
                </List>

                <SubHeading>Root Pro (Premium Tier)</SubHeading>
                <p className="mb-4">Everything in the free tier, plus:</p>
                <List>
                  <li>
                    <Strong>Deep Dives</Strong>: AI-powered deep dive presets on
                    any article
                  </li>
                  <li>
                    <Strong>Daily Briefing</Strong>: Personalized daily news
                    briefing in text and audio format
                  </li>
                  <li>Priority access to new features</li>
                </List>
              </Section>

              <Section num="03" title="Account Types and Registration">
                <SubHeading>3.1 Anonymous Accounts</SubHeading>
                <List>
                  <li>
                    We create temporary anonymous accounts during onboarding
                    for immediate service access
                  </li>
                  <li>
                    Anonymous accounts provide full service functionality
                    during subscription period
                  </li>
                  <li>
                    Anonymous accounts can be upgraded to permanent accounts at
                    any time
                  </li>
                </List>

                <SubHeading>3.2 Permanent Accounts</SubHeading>
                <List>
                  <li>Created with email and password or Apple ID</li>
                  <li>
                    Provide persistent access to your preferences and settings
                  </li>
                  <li>
                    Allow account recovery and cross-device synchronization
                  </li>
                </List>

                <SubHeading>3.3 Account Responsibilities</SubHeading>
                <List>
                  <li>Maintain confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>
                    Provide accurate information when creating permanent
                    accounts
                  </li>
                  <li>
                    Use the Service only for personal, non-commercial purposes
                  </li>
                </List>
              </Section>

              <Section num="04" title="Subscription and Payment">
                <SubHeading>4.1 Subscription Types</SubHeading>
                <List>
                  <li>
                    <Strong>Free Tier</Strong>: Available to all users with no
                    subscription required for core news features
                  </li>
                  <li>
                    <Strong>Monthly Subscription (Root Pro)</Strong>: $4.99 per
                    month
                  </li>
                  <li>
                    <Strong>Annual Subscription (Root Pro)</Strong>: $29.99 per
                    year
                  </li>
                  <li>
                    All paid subscriptions are processed through Apple App
                    Store
                  </li>
                </List>

                <SubHeading>4.2 Payment Processing</SubHeading>
                <List>
                  <li>
                    All payments are processed by Apple through the App Store
                  </li>
                  <li>Subscription automatically renews unless cancelled</li>
                  <li>Apple&apos;s payment terms and conditions apply</li>
                  <li>We do not store or process payment information directly</li>
                </List>

                <SubHeading>4.3 Cancellation and Refunds</SubHeading>
                <List>
                  <li>
                    Cancel subscription anytime through Apple App Store
                    settings
                  </li>
                  <li>
                    Cancellation takes effect at the end of current billing
                    period
                  </li>
                  <li>Refunds are subject to Apple&apos;s refund policy</li>
                  <li>
                    No partial refunds for unused portions of subscription
                    periods
                  </li>
                </List>
              </Section>

              <Section num="05" title="Premium Features and Usage Limits">
                <SubHeading>5.1 Deep Dive Presets</SubHeading>
                <List>
                  <li>
                    Deep dive presets (Quick Catch-up, Why This Matters, Full
                    Context, Both Sides) are AI-powered features available
                    exclusively to Root Pro subscribers
                  </li>
                  <li>Usage limits may apply to ensure service quality</li>
                  <li>
                    Responses are generated by AI and may not always be fully
                    accurate
                  </li>
                </List>

                <SubHeading>5.2 Daily Briefing</SubHeading>
                <List>
                  <li>
                    Daily Briefing is a personalized text summary generated
                    once per day based on your selected news categories,
                    available exclusively to Root Pro subscribers
                  </li>
                  <li>
                    An audio version of the Daily Briefing is generated once
                    per day using AI text-to-speech
                  </li>
                </List>

                <SubHeading>5.3 Usage Limit Adjustments</SubHeading>
                <p>
                  We reserve the right to adjust usage limits at any time to
                  maintain service quality and ensure a fair experience for all
                  users.
                </p>
              </Section>

              <Section num="06" title="User Conduct and Restrictions">
                <SubHeading>6.1 Acceptable Use</SubHeading>
                <p className="mb-4">
                  You agree to use the Service only for lawful purposes and in
                  accordance with these Terms. You may:
                </p>
                <List>
                  <li>Access and read news summaries for personal use</li>
                  <li>Customize your news preferences and settings</li>
                  <li>Share news content through provided sharing features</li>
                </List>

                <SubHeading>6.2 Prohibited Activities</SubHeading>
                <p className="mb-4">You may not:</p>
                <List>
                  <li>
                    Attempt to reverse engineer, decompile, or disassemble the
                    app
                  </li>
                  <li>Use automated systems to access the Service</li>
                  <li>Share your account credentials with others</li>
                  <li>
                    Use the Service for commercial purposes without
                    authorization
                  </li>
                  <li>Attempt to circumvent security measures</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>
                    Attempt to circumvent subscription requirements or usage
                    limits
                  </li>
                  <li>
                    Use deep dive features to generate content for commercial
                    purposes
                  </li>
                  <li>
                    Perform automated or bulk querying of deep dive features
                  </li>
                </List>
              </Section>

              <Section num="07" title="Intellectual Property">
                <SubHeading>7.1 Our Content</SubHeading>
                <List>
                  <li>
                    The Root News app, AI summaries, and user interface are
                    owned by Root Labs OÜ
                  </li>
                  <li>
                    Original news content remains the property of respective
                    publishers
                  </li>
                  <li>
                    Our AI-generated summaries are derivative works owned by
                    Root Labs OÜ
                  </li>
                </List>

                <SubHeading>7.2 Limited License</SubHeading>
                <p>
                  We grant you a limited, non-exclusive, non-transferable
                  license to use the Service for personal purposes in
                  accordance with these Terms.
                </p>

                <SubHeading>7.3 Feedback</SubHeading>
                <p>
                  Any feedback, suggestions, or improvements you provide become
                  our property and may be used without compensation.
                </p>
              </Section>

              <Section num="08" title="Privacy and Data Protection">
                <p className="mb-4">
                  Your privacy is important to us. Our data collection and use
                  practices are detailed in our Privacy Policy, which is
                  incorporated into these Terms by reference.
                </p>
                <p>
                  By using the Service, you consent to our collection and use
                  of your information as described in the Privacy Policy.
                </p>
              </Section>

              <Section num="09" title="Third-Party Content and Services">
                <SubHeading>9.1 News Sources</SubHeading>
                <List>
                  <li>
                    We aggregate content from various third-party news sources
                  </li>
                  <li>
                    We are not responsible for the accuracy of third-party
                    content
                  </li>
                  <li>
                    Original content remains subject to source publishers&apos;
                    terms
                  </li>
                </List>

                <SubHeading>9.2 Apple Services</SubHeading>
                <List>
                  <li>App distribution through Apple App Store</li>
                  <li>Payment processing through Apple&apos;s systems</li>
                  <li>
                    Apple&apos;s terms and conditions apply to these services
                  </li>
                </List>
              </Section>

              <Section num="10" title="Service Availability and Modifications">
                <SubHeading>10.1 Service Availability</SubHeading>
                <List>
                  <li>We strive to provide continuous service availability</li>
                  <li>
                    Service may be temporarily unavailable due to maintenance
                    or technical issues
                  </li>
                  <li>We do not guarantee uninterrupted access</li>
                </List>

                <SubHeading>10.2 Service Modifications</SubHeading>
                <List>
                  <li>We may modify, update, or discontinue features at any time</li>
                  <li>
                    Material changes will be communicated through the app or
                    email
                  </li>
                  <li>Continued use constitutes acceptance of modifications</li>
                </List>
              </Section>

              <Section num="11" title="Content Accuracy and Disclaimers">
                <SubHeading>11.1 AI-Generated Content</SubHeading>
                <List>
                  <li>
                    News summaries are generated using artificial intelligence
                  </li>
                  <li>AI summaries may contain inaccuracies or omissions</li>
                  <li>
                    Users should verify important information with original
                    sources
                  </li>
                  <li>We are not liable for decisions made based on AI summaries</li>
                </List>

                <SubHeading>11.2 Deep Dive Responses</SubHeading>
                <List>
                  <li>
                    Deep dive responses are AI-generated and may not be fully
                    accurate or complete
                  </li>
                  <li>
                    Responses should not be relied upon as professional, legal,
                    medical, or financial advice
                  </li>
                  <li>
                    Users should independently verify any information obtained
                    through deep dive features
                  </li>
                </List>

                <SubHeading>11.3 Daily Briefing and Audio</SubHeading>
                <List>
                  <li>
                    Daily Briefing summaries are AI-generated from the
                    day&apos;s top stories and may contain inaccuracies
                  </li>
                  <li>
                    Audio briefings are produced using AI-generated speech and
                    may occasionally mispronounce names, places, or specialized
                    terms
                  </li>
                </List>

                <SubHeading>11.4 Neutrality and Bias</SubHeading>
                <List>
                  <li>
                    Root News strives for neutral, unbiased reporting in all
                    AI-generated content
                  </li>
                  <li>
                    AI systems may inadvertently reflect biases present in
                    training data or source material
                  </li>
                  <li>
                    We continuously work to identify and reduce bias in our AI
                    outputs
                  </li>
                </List>

                <SubHeading>11.5 Content Updates</SubHeading>
                <List>
                  <li>News content is updated multiple times daily</li>
                  <li>
                    AI processing may cause brief delays in new content
                    availability
                  </li>
                  <li>Some news sources may be temporarily unavailable</li>
                </List>
              </Section>

              <Section num="12" title="Limitation of Liability">
                <SubHeading>12.1 Service Disclaimer</SubHeading>
                <p className="legal-disclaimer text-[12.5px] uppercase tracking-wide text-white/75 font-medium leading-relaxed">
                  THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES
                  OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
                  INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  AND NON-INFRINGEMENT.
                </p>

                <SubHeading>12.2 Liability Limits</SubHeading>
                <p className="legal-disclaimer text-[12.5px] uppercase tracking-wide text-white/75 font-medium leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY SHALL
                  NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12
                  MONTHS PRECEDING THE CLAIM.
                </p>

                <SubHeading>12.3 Excluded Damages</SubHeading>
                <p className="legal-disclaimer text-[12.5px] uppercase tracking-wide text-white/75 font-medium leading-relaxed">
                  WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS OR
                  DATA.
                </p>
              </Section>

              <Section num="13" title="Indemnification">
                <p>
                  You agree to indemnify and hold us harmless from any claims,
                  damages, or expenses arising from your use of the Service or
                  violation of these Terms.
                </p>
              </Section>

              <Section num="14" title="Termination">
                <SubHeading>14.1 Termination by You</SubHeading>
                <List>
                  <li>Cancel subscription anytime through Apple App Store</li>
                  <li>
                    Delete account through app settings or by contacting support
                  </li>
                  <li>Termination takes effect at end of current billing period</li>
                </List>

                <SubHeading>14.2 Termination by Us</SubHeading>
                <p className="mb-4">We may terminate or suspend your account if you:</p>
                <List>
                  <li>Violate these Terms of Service</li>
                  <li>Engage in fraudulent or illegal activity</li>
                  <li>Abuse or misuse the Service</li>
                </List>

                <SubHeading>14.3 Effect of Termination</SubHeading>
                <List>
                  <li>Access to Service ends immediately upon termination</li>
                  <li>Data may be deleted according to our Privacy Policy</li>
                  <li>No refunds for remaining subscription period</li>
                </List>
              </Section>

              <Section num="15" title="Changes to Terms">
                <p className="mb-4">
                  We may modify these Terms at any time. We will notify users
                  of material changes through:
                </p>
                <List>
                  <li>In-app notifications</li>
                  <li>Email notifications (if email provided)</li>
                  <li>Updated Terms posted on our website</li>
                </List>
                <p className="mt-4">
                  Continued use of the Service after changes constitutes
                  acceptance of new Terms.
                </p>
              </Section>

              <Section num="16" title="Governing Law and Disputes">
                <SubHeading>16.1 Governing Law</SubHeading>
                <p>
                  These Terms are governed by the laws of Estonia, without
                  regard to conflict of law principles.
                </p>

                <SubHeading>16.2 Dispute Resolution</SubHeading>
                <p>
                  Any disputes shall be resolved through binding arbitration in
                  Estonia, except where prohibited by law.
                </p>

                <SubHeading>16.3 Class Action Waiver</SubHeading>
                <p>
                  You agree to resolve disputes individually and waive the
                  right to participate in class actions or collective
                  proceedings.
                </p>
              </Section>

              <Section num="17" title="Apple App Store Terms">
                <p className="mb-4">
                  Additional terms apply for users who download the app through
                  Apple App Store:
                </p>
                <List>
                  <li>Apple is not responsible for the Service or these Terms</li>
                  <li>Apple has no obligation to provide support for the Service</li>
                  <li>Apple is not liable for any claims related to the Service</li>
                  <li>
                    In case of conflict, Apple&apos;s terms take precedence
                    regarding app distribution
                  </li>
                </List>
              </Section>

              <Section num="18" title="Severability">
                <p>
                  If any provision of these Terms is found unenforceable, the
                  remaining provisions will remain in full force and effect.
                </p>
              </Section>

              <Section num="19" title="Contact Information">
                <p className="mb-5">
                  For questions about these Terms of Service, contact us:
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

              <Section num="20" title="Entire Agreement">
                <p>
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and Root Labs OÜ regarding the
                  Service.
                </p>
              </Section>

              <Section num="21" title="Service Provider">
                <InfoBox>
                  <li>
                    <Strong>Company</Strong>: Root Labs OÜ (Estonia)
                  </li>
                  <li>
                    <Strong>Contact</Strong>: support@rootnews.app
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
            </div>

            <div className="mt-20 pt-10 border-t border-white/[0.06] text-center">
              <p className="font-serif italic text-[15px] text-white/35">
                These Terms of Service are effective as of April 13, 2026 and
                were last updated on April 13, 2026.
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
      <div className="pl-0 sm:pl-12 space-y-4">{children}</div>
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
