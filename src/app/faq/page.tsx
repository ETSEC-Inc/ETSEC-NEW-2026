import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import Icon from "@/components/Icon";
import { whatsappHref } from "@/lib/site";
export const metadata: Metadata = pageMetadata("Frequently Asked Questions", "Answers to common questions about ETSEC cybersecurity, digital product development, AI and project enquiries.", "/faq");
export default function FAQPage() { return <main><section className="page-hero"><div className="page-hero-glow"/><div className="container-wide"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">FAQ</span></nav><span className="eyebrow"><span className="eyebrow-line"/> KNOW BEFORE YOU BEGIN</span><h1>Questions? <span className="text-gradient">We&apos;ve got answers.</span></h1><p className="page-lead">The essentials about working with ETSEC, in one place.</p></div></section><section className="section"><div className="container-narrow"><FAQAccordion/><div className="faq-page-end"><h2>Still have a question?</h2><p>Ask us directly — we&apos;ll be happy to help.</p><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ask on WhatsApp <Icon name="arrow-up-right" size={18}/></a></div></div></section></main>; }
