import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServiceDetail from "@/components/ServiceDetail";
export const metadata: Metadata = pageMetadata("Cybersecurity Services", "VAPT, SOC and MDR, malware analysis, cyber audits, security engineering and threat intelligence with ETSEC.", "/services/cyber-security");
export default function Page() { return <ServiceDetail slug="cyber-security"/>; }
