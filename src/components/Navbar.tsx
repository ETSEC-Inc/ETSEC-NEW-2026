"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import ThemeToggle from "@/components/ThemeToggle";
import { services, site, whatsappHref } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="site-header-inner container-wide">
      <Link href="/" className="brand" aria-label="ETSEC — Home" onClick={() => setOpen(false)}>
        <Image src="/ETSEC-logo.png" width={150} height={42} alt="ETSEC" priority className="brand-logo" />
        <span className="brand-divider"/><span className="brand-subtitle">TECHNOLOGY & SECURITY</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/" className={`nav-item ${pathname === "/" ? "active" : ""}`}>Home</Link>
        <div className="nav-dropdown">
          <Link href="/services" className={`nav-item ${pathname.startsWith("/services") ? "active" : ""}`}>Services <Icon name="chevron" size={14}/></Link>
          <div className="dropdown-panel"><span className="dropdown-heading">OUR EXPERTISE</span>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`} className="dropdown-link"><span className="dropdown-icon"><Icon name={s.icon} size={18}/></span><span><strong>{s.title}</strong><small>{s.short}</small></span><Icon name="arrow-up-right" size={16}/></Link>)}</div>
        </div>
        <Link href="/about" className={`nav-item ${pathname === "/about" ? "active" : ""}`}>About</Link>
        <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="nav-item">Portfolio <Icon name="arrow-up-right" size={13}/></a>
        <a href={site.academy} target="_blank" rel="noopener noreferrer" className="nav-item">Academy <Icon name="arrow-up-right" size={13}/></a>
        <Link href="/contact" className={`nav-item ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
      </nav>
      <div className="nav-actions"><ThemeToggle/><a href={whatsappHref()} className="btn btn-primary btn-nav" target="_blank" rel="noopener noreferrer">Let&apos;s talk <Icon name="arrow-up-right" size={17}/></a><button type="button" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-site-nav"><Icon name={open ? "close" : "menu"} size={23}/></button></div>
    </div>
    <nav id="mobile-site-nav" aria-label="Mobile navigation" className={`mobile-nav ${open ? "mobile-open" : ""}`} inert={!open}>
      <div className="mobile-links"><Link href="/">Home</Link><Link href="/services">All services</Link><div className="mobile-sub-links">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.title}</Link>)}</div><Link href="/about">About ETSEC</Link><a href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio <Icon name="arrow-up-right" size={15}/></a><a href={site.academy} target="_blank" rel="noopener noreferrer">ETSEC Academy <Icon name="arrow-up-right" size={15}/></a><Link href="/contact">Contact us</Link><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-cta"><Icon name="whatsapp" size={18}/> WhatsApp enquiry</a></div>
    </nav>
  </header>;
}
