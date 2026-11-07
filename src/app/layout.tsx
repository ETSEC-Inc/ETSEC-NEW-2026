import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07121b" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ETSEC | Cybersecurity, AI & Digital Engineering", template: "%s | ETSEC" },
  description: "ETSEC delivers cybersecurity consulting, custom websites, SaaS applications, AI/ML solutions and specialised security research. Explore our capabilities and start a conversation.",
  applicationName: "ETSEC",
  keywords: ["ETSEC", "cybersecurity", "VAPT", "SOC", "MDR", "custom web development", "SaaS development", "artificial intelligence", "machine learning", "IT services Hyderabad"],
  authors: [{ name: "ETSEC Inc.", url: site.url }],
  creator: "ETSEC Inc.", publisher: "ETSEC Inc.",
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/etsec-logo-icon.png", type: "image/png" }], apple: "/etsec-logo-192x192.png" },
  openGraph: { type: "website", siteName: "ETSEC", locale: "en_IN", url: site.url, title: "ETSEC | Cybersecurity, AI & Digital Engineering", description: "Build smarter. Stay secure. Technology and cybersecurity solutions for ambitious organisations.", images: [{ url: "/og-etsec.png", width: 1200, height: 630, alt: "ETSEC — Cybersecurity, AI and Digital Engineering" }] },
  twitter: { card: "summary_large_image", images: ["/og-etsec.png"], title: "ETSEC | Cybersecurity, AI & Digital Engineering", description: "Cybersecurity, digital engineering and applied AI." },
  robots: { index: true, follow: true },
};

const themeInit = `(function(){try{var saved=localStorage.getItem('etsec-theme');var theme=saved==='light'||saved==='dark'?saved:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',theme);document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>

      <body>
        <Navbar />
        {children}
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}