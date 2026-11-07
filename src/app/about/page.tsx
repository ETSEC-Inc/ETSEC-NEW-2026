import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import ScrollReveal from "@/components/ScrollReveal";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata("About Us", "Meet ETSEC — our approach, values and the people behind our technology and cybersecurity work.", "/about");
const values = [
  { icon: "target" as const, title: "Purpose", text: "Start with the problem, understand the context and create a solution that matters." },
  { icon: "shield" as const, title: "Integrity", text: "Be transparent, act responsibly and handle every engagement with care." },
  { icon: "spark" as const, title: "Curiosity", text: "Keep asking questions, learning and exploring better technical approaches." },
  { icon: "layers" as const, title: "Collaboration", text: "Build alongside our clients with clear communication and shared direction." },
];
const leaders = [
  { name: "Prashant Joshi", role: "Managing Director", image: "/prashant_sir.jpg" },
  { name: "Atharva Prashant Joshi", role: "Chief Executive Officer", image: "/atharva_sir.jpg" },
];
export default function About() { return <main><section className="page-hero"><div className="page-hero-glow"/><div className="container-wide"><nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">About</span></nav><span className="eyebrow"><span className="eyebrow-line"/> WHO WE ARE</span><h1>Built on trust.<br/><span className="text-gradient">Driven by possibility.</span></h1><p className="page-lead">ETSEC connects security expertise, thoughtful software engineering and emerging technology to help businesses navigate what&apos;s next.</p></div></section>
  <section className="section"><div className="container-wide story-layout"><ScrollReveal><div className="story-art"><div className="story-art-grid"/><div className="story-art-ring"><Icon name="shield" size={88}/></div><div className="story-art-tag">THINK SECURE. BUILD SMART.</div></div></ScrollReveal><ScrollReveal><div className="story-copy"><span className="eyebrow"><span className="eyebrow-line"/> OUR STORY</span><h2>More than a service provider. <span className="text-gradient">A technology partner.</span></h2><p>We believe the strongest digital solutions are built with security, usability and long-term value considered together. That belief shapes our work across cybersecurity, application engineering, AI and research.</p><p>Whether you need to protect an existing system, create an entirely new platform or investigate an emerging technical challenge, we focus on understanding your goals before choosing the tools.</p><a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="text-link">Discover our work <Icon name="arrow-up-right" size={18}/></a></div></ScrollReveal></div></section>
  <section className="section section-process"><div className="container-wide"><ScrollReveal><div className="section-heading centered"><span className="eyebrow"><span className="eyebrow-line"/> WHAT GUIDES US</span><h2>Principles we <span className="text-gradient">work by.</span></h2></div></ScrollReveal><div className="values-grid">{values.map((v,i)=><ScrollReveal key={v.title} delay={i*65}><div className="value-card"><div className="value-icon"><Icon name={v.icon} size={24}/></div><h3>{v.title}</h3><p>{v.text}</p></div></ScrollReveal>)}</div></div></section>
  <section className="section"><div className="container-wide"><ScrollReveal><div className="section-heading centered"><span className="eyebrow"><span className="eyebrow-line"/> PEOPLE BEHIND ETSEC</span><h2>Meet our leadership.</h2><p>The people guiding our direction and commitment to purposeful technology.</p></div></ScrollReveal><div className="team-grid">{leaders.map((person,i)=><ScrollReveal key={person.name} delay={i*90}><div className="team-card"><div className="team-photo"><Image src={person.image} alt={person.name} width={300} height={350}/></div><div className="team-info"><h3>{person.name}</h3><p>{person.role}</p></div></div></ScrollReveal>)}</div></div></section>
  <section className="section section-process"><div className="container-wide"><ScrollReveal><div className="inline-cta"><div><span className="eyebrow"><span className="eyebrow-line"/> WORK WITH US</span><h2>Let&apos;s create something worth building.</h2><p>From the first discussion to delivery, we&apos;re here to collaborate.</p></div><a className="btn btn-primary btn-large" href={whatsappHref()} target="_blank" rel="noopener noreferrer">Get in touch <Icon name="arrow-up-right" size={19}/></a></div></ScrollReveal></div></section></main>; }
