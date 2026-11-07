import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = pageMetadata("AI & Machine Learning Solutions", "Applied AI, computer vision, predictive modelling and intelligent automation developed by ETSEC.", "/services/ai-development");
export default function Page() { return <ServiceDetail slug="ai-development"/>; }
