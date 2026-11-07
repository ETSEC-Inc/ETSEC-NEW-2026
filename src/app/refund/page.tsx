import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/refund" },
  title: "Refund & Cancellation Policy",
  description:
    "ETSEC Inc. refund and cancellation policy for cybersecurity services and training programmes.",
};

const sections = [
  {
    title: "1. Policy Overview",
    content:
      "This Cancellation and Refund Policy outlines the terms regarding refunds and cancellations for services provided by ETSEC Inc. By purchasing any service or program from ETSEC Inc., you agree to the terms outlined below.",
  },
  {
    title: "2. General Refund Policy",
    content:
      "All fees paid towards services, training programmes, and consultations provided by ETSEC Inc. are non-refundable, except where specific conditions apply, as described below. This policy is in place due to the nature of cybersecurity services, which include upfront resource allocation, confidential information handling, and access to proprietary tools and methodologies.",
  },
  {
    title: "3. Cancellation of One-Time Services",
    content:
      "For one-time services such as penetration testing, vulnerability assessments, and security audits: cancellation requests made before the commencement of the engagement may qualify for a partial refund at the company's discretion, after deduction of any administrative or preparatory costs incurred. Once the engagement has started, no refunds will be issued.",
  },
  {
    title: "4. Cancellation of Ongoing Services",
    content:
      "For ongoing services such as managed SOC, continuous monitoring, and threat intelligence subscriptions: services are billed on a monthly or annual basis as agreed. Cancellation requests must be submitted in writing at least 30 days before the next billing cycle. No prorated refunds will be issued for the current billing period upon cancellation.",
  },
  {
    title: "5. How to Request",
    content:
      "To request a cancellation or inquire about a refund, please contact us at contact@etsecinc.com with your service details and reason for the request. Our team will respond within 2 business days.",
  },
];

export default function RefundPage() {
  return (
    <main className="pt-24 pb-20">
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-foreground/40 text-sm">
              Last updated: November 14, 2025
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto max-w-3xl px-4 space-y-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-foreground/50 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
    </main>
  );
}
