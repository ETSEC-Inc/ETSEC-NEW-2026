import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = pageMetadata("Specialised Security Research", "Threat modelling, risk analysis and research-led security for complex systems including satellite infrastructure.", "/services/satellite-security");
export default function Page() { return <ServiceDetail slug="satellite-security"/>; }
