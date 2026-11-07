
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = [
  "",
  "/about",
  "/services",
  "/services/cyber-security",
  "/services/web-development",
  "/services/ai-development",
  "/services/satellite-security",
  "/contact",
  "/faq",
  "/updates",
  "/privacy",
  "/terms",
  "/refund",
  "/shipping",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/contact" || path === "/services"
        ? 0.9
        : path.startsWith("/services/")
        ? 0.85
        : ["/privacy", "/terms", "/refund", "/shipping"].includes(path)
        ? 0.3
        : 0.65,
  }));
}
