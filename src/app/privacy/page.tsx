import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description:
    "ETSEC Inc. privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20">
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-foreground/40 text-sm">
              Last updated: November 14, 2025
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-3xl px-4 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                We collect information you provide directly to us, such as your
                name, email address, phone number, company name, and any message
                content submitted through our contact forms. We also automatically
                collect certain technical information when you visit our website,
                including IP address, browser type, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                We use the information we collect to respond to your inquiries,
                provide our cybersecurity services, send relevant communications
                about our services (with your consent), improve our website and
                offerings, and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Data Security
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                As a cybersecurity company, we take data protection seriously. We
                implement industry-standard security measures to protect your
                personal information, including encryption, access controls, and
                regular security audits. However, no method of transmission over
                the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Information Sharing
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share information only when required by law, to
                protect our rights, or with service providers who assist in
                operating our website and services, subject to confidentiality
                agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Cookies
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                Our website uses minimal cookies for essential functionality such
                as theme preferences. We do not use tracking cookies for
                advertising purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Your Rights
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                You have the right to access, correct, or delete your personal
                information. You may also opt out of receiving communications
                from us at any time. To exercise these rights, please contact us
                at contact@etsecinc.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                For any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:contact@etsecinc.com"
                  className="text-accent hover:underline"
                >
                  contact@etsecinc.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
