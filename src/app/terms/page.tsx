import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of ETSEC Inc. services and website.",
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-20">
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms &amp; Conditions
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
                1. Acceptance of Terms
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                By accessing and using the ETSEC Inc. website and services, you
                agree to be bound by these Terms and Conditions. If you do not
                agree with any part of these terms, please discontinue use of our
                services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Services
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                ETSEC Inc. provides cybersecurity services including but not
                limited to security assessments, penetration testing, SOC
                monitoring, threat intelligence, and training programmes. The scope,
                terms, and pricing of specific engagements are governed by
                individual Statements of Work (SOW) or service agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Confidentiality
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                All information shared during engagements is treated as
                confidential. Both parties agree to maintain the confidentiality
                of proprietary information, including but not limited to security
                findings, methodologies, and business data. Specific
                confidentiality terms are detailed in engagement-level NDAs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Intellectual Property
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                All content, tools, methodologies, and materials created by ETSEC
                Inc. remain the intellectual property of ETSEC Inc. unless
                explicitly transferred through written agreement. Clients receive
                a license to use deliverables for their internal purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                ETSEC Inc. shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services. Our
                total liability for any claim shall not exceed the amount paid for
                the specific service in question. Security assessments and
                recommendations are based on point-in-time analysis and do not
                guarantee complete protection against all threats.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                These terms shall be governed by and construed in accordance with
                the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact
              </h2>
              <p className="text-foreground/50 leading-relaxed">
                For questions about these Terms and Conditions, contact us at{" "}
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
