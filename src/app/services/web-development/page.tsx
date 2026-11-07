import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = pageMetadata("Web & SaaS Development", "Custom websites, e-commerce, responsive web applications and SaaS product development with secure engineering at ETSEC.", "/services/web-development");
export default function Page() { return <ServiceDetail slug="web-development"/>; }
