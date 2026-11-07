import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { services, site, whatsappHref } from "@/lib/site";

export default function Footer() {
  return <footer className="footer">
    <div className="container-wide">
      <div className="footer-cta"><div><span className="eyebrow"><span className="status-dot"/> LET&apos;S BUILD SOMETHING MEANINGFUL</span><h2>Have a challenge in mind?<br/><span className="text-gradient">Let&apos;s solve it.</span></h2></div><a className="btn btn-light" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Start a conversation <Icon name="arrow-up-right" size={19}/></a></div>
      <div className="footer-grid">
        <div className="footer-intro"><Link href="/" className="footer-logo-link"><Image src="/ETSEC-logo.png" width={151} height={43} alt="ETSEC"/></Link><p>Thoughtful technology. Stronger security. We partner with organisations to create dependable digital experiences.</p><a className="footer-location" href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C%20Telangana%2C%20India" target="_blank" rel="noopener noreferrer"><Icon name="map" size={16}/> Hyderabad, India</a></div>
        <div><h3>Explore</h3><Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/services">Our services</Link><a href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio <Icon name="arrow-up-right" size={13}/></a><a href={site.academy} target="_blank" rel="noopener noreferrer">ETSEC Academy <Icon name="arrow-up-right" size={13}/></a></div>
        <div><h3>Expertise</h3>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div>
        <div><h3>Contact</h3><a href={`mailto:${site.email}`}>{site.email}</a><a href={`tel:+${site.phoneDigits}`}>{site.phoneDisplay}</a><a href={whatsappHref()} target="_blank" rel="noopener noreferrer">WhatsApp enquiry <Icon name="arrow-up-right" size={13}/></a><Link href="/contact">Contact page</Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ETSEC Inc. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/refund">Refund policy</Link><Link href="/shipping">Service delivery</Link></div><span className="footer-byline">SECURE <span>·</span> BUILD <span>·</span> INNOVATE</span></div>
    </div>
  </footer>;
}
