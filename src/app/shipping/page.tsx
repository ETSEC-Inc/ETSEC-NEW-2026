import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/shipping" },
  title: "Service Delivery Policy",
  description:
    "ETSEC Inc. service delivery and shipping policy for cybersecurity services.",
};

const sections = [
  {
    title: "1. Our Commitment",
    content:
      "ETSEC Inc. is a cybersecurity services company. We do not sell or ship physical goods. All our services — including security assessments, monitoring, training, and consulting — are delivered digitally or on-site as agreed upon in the engagement contract.",
  },
  {
    title: "2. Delivery of Services",
    content:
      "Upon confirmation of an engagement, our team begins scheduled services according to the agreed-upon timeline and scope. Digital deliverables such as reports, documentation, and dashboards are delivered electronically via secure channels. On-site services are conducted at the client's designated location as per the engagement schedule.",
  },
  {
    title: "3. Reports & Documentation",
    content:
      "All assessment reports, vulnerability findings, and security documentation are delivered in encrypted format through secure file-sharing channels. Clients receive access credentials separately for maximum security. Draft reports are shared for review before final delivery.",
  },
  {
    title: "4. Timelines",
    content:
      "Service delivery timelines are established during the engagement planning phase and documented in the Statement of Work (SOW). Typical timelines: VAPT assessments (1–3 weeks), security audits (2–4 weeks), SOC setup (2–6 weeks). Any delays due to client-side dependencies will be communicated promptly.",
  },
  {
    title: "5. Confirmation",
    content:
      "Upon successful delivery of services, clients will receive a completion confirmation and final deliverables package. For ongoing services, regular status reports and dashboards are provided as per the agreed schedule. For any delivery-related queries, reach out to contact@etsecinc.com.",
  },
];

export default function ShippingPage() {
  return (
    <main className="pt-24 pb-20">
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Service Delivery Policy
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
