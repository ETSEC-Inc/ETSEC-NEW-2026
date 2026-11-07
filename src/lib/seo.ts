import type { Metadata } from "next";
import { site } from "@/lib/site";

/** Reusable, per-route SEO metadata — avoids a home canonical on every page. */
export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const url = new URL(pathname, site.url).toString();
  const socialTitle = `${title} | ETSEC`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: "ETSEC", title: socialTitle, description, images: [{ url: "/og-etsec.png", width: 1200, height: 630, alt: "ETSEC — Cybersecurity, AI and Digital Engineering" }] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: ["/og-etsec.png"] },
  };
}
