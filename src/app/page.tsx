import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";
import { services, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Cybersecurity, AI & Digital Engineering", "ETSEC delivers cybersecurity, custom software engineering, SaaS applications and applied AI solutions for ambitious businesses.", "/");

const differentiators = [
  { icon: "shield" as const, title: "Security from the start", text: "Security thinking belongs in the architecture, not as a last-minute addition." },
  { icon: "layers" as const, title: "One connected team", text: "Product engineering, cybersecurity and AI expertise working together." },
  { icon: "target" as const, title: "Built around your goals", text: "Practical recommendations and project scopes shaped by real business needs." },
];

const steps = [
  { n: "01", title: "Discover", text: "We listen, learn your goals and understand the challenges." },
  { n: "02", title: "Strategise", text: "We shape a clear plan, scope and technical direction." },
  { n: "03", title: "Execute", text: "We design, build, assess and iterate with purpose." },
  { n: "04", title: "Evolve", text: "We support improvements as your needs grow." },
];

const projects = [
  { number: "01", title: "Agriwork", type: "Digital platform", category: "Web experience", image: "/templates/agriwork.webp", className: "project-preview-agri" },
  { number: "02", title: "Adam Seeds", type: "Corporate website", category: "Digital presence", image: "/companies/adam-seeds-logo.webp", className: "project-preview-adam" },
  { number: "03", title: "East Agri", type: "Business website", category: "Digital presence", image: "/companies/east-seeds-logo.webp", className: "project-preview-east" },
];

export default function Home() {
  return <main>
    <section className="home-hero" id="top"><div className="hero-grid-overlay" aria-hidden="true"/><div className="hero-halo hero-halo-one" aria-hidden="true"/><div className="hero-halo hero-halo-two" aria-hidden="true"/>
      <div className="container-wide hero-layout"><div className="hero-copy"><div className="eyebrow hero-eyebrow"><span className="eyebrow-spark"><Icon name="spark" size={13}/></span> WHERE TECHNOLOGY MEETS TRUST <span className="eyebrow-rule"/></div>
        <h1>We secure what matters.<br/><span className="text-gradient">We build what&apos;s next.</span></h1>
        <p className="hero-intro">Cybersecurity, intelligent systems, and custom digital experiences — engineered to help ambitious businesses move forward with confidence.</p>
        <div className="hero-actions"><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">Start a conversation <Icon name="arrow-up-right" size={19}/></a><Link href="/services" className="btn btn-outline btn-large">Explore our services <Icon name="arrow" size={19}/></Link></div>
        <div className="hero-proof"><span className="proof-line"/><span><Icon name="check-circle" size={17}/> Security-led thinking</span><span><Icon name="check-circle" size={17}/> Built for real business</span></div>
      </div><HeroVisual/></div>
      <div className="hero-bottom-line" aria-hidden="true"><span/></div>
    </section>

    
<section className="trust-strip">
  <div className="container-wide">
    <div className="trust-topline">
      <span>WORKING ACROSS INDUSTRIES</span>
      <span className="trust-line" />
      <span>SELECTED CLIENTS & COLLABORATORS</span>
    </div>

    <div className="client-logos">
      {/* Existing Logos */}
      <div className="client-logo adam-logo">
  <Image
    src="/companies/adam-seeds-logo.webp"
    alt="ADAM Seeds"
    width={200}
    height={110}
    unoptimized
  />
</div>

      <div className="client-logo">
        <Image src="/companies/east-seeds-logo.webp" alt="East Agri Seeds" width={148} height={70} />
      </div>

      <div className="client-logo">
        <Image src="/companies/Agriwork-svg.svg" alt="Agriwork" width={148} height={70} />
      </div>

      <div className="client-logo">
        <Image src="/companies/winsanto-crop-science-logo.webp" alt="Winsanto Crop Science" width={148} height={70} />
      </div>

      {/* New Collaboration Logos */}
      <div className="client-logo">
        <Image src="/partners/Aerohive-Logo.webp" alt="Aerohive Pvt Ltd" width={148} height={70} />
      </div>

      <div className="client-logo">
        <Image src="/partners/arishna-IoT-Solutions.webp" alt="Arishma IoT Solutions" width={148} height={70} />
      </div>

      <div className="client-logo student-nation-logo">
  <Image
    src="/partners/Student Nation Logo.jpeg"
    alt="Student Nation"
    width={148}
    height={70}
  />
</div>

<div className="client-logo">
  <Image
    src="/partners/classplus-logo.webp"
    alt="Classplus"
    width={190}
    height={85}
    unoptimized
  />
</div>

    </div>
  </div>
</section>


    <section className="section section-services" id="services"><div className="container-wide"><ScrollReveal><div className="section-heading split-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> OUR CAPABILITIES</span><h2>One partner.<br/><span className="text-gradient">More possibilities.</span></h2></div><div className="section-side"><p>From strengthening your security posture to delivering transformative digital products, we bring the right disciplines together.</p><Link href="/services" className="text-link">Explore all services <Icon name="arrow-up-right" size={18}/></Link></div></div></ScrollReveal>
      <div className="service-grid">{services.map((s,i)=><ScrollReveal key={s.slug} delay={(i%2)*90}><Link href={`/services/${s.slug}`} className={`service-card service-card-${i+1}`}><div className="service-card-top"><span className="service-icon"><Icon name={s.icon} size={27}/></span><span className="service-number">{s.number} / 04</span></div><div className="service-card-body"><span className="service-overline">{s.short}</span><h3>{s.title}</h3><p>{s.description}</p></div><div className="service-card-bottom"><span className="tag-list">{s.tags.slice(0,2).map(tag=><span key={tag}>{tag}</span>)}</span><span className="service-arrow"><Icon name="arrow-up-right" size={20}/></span></div></Link></ScrollReveal>)}</div>
    </div></section>

    <section className="section section-difference"><div className="container-wide difference-layout"><ScrollReveal><div className="difference-copy"><span className="eyebrow"><span className="eyebrow-line"/> THE ETSEC APPROACH</span><h2>Technology is only as good as the <span className="text-gradient">thinking behind it.</span></h2><p>Great solutions connect the dots between design, engineering, security and what your business actually needs. That&apos;s how we work.</p><Link href="/about" className="btn btn-outline">Get to know us <Icon name="arrow-up-right" size={18}/></Link></div></ScrollReveal><div className="difference-items">{differentiators.map((item,i)=><ScrollReveal key={item.title} delay={i*80}><div className="difference-item"><div className="difference-icon"><Icon name={item.icon} size={23}/></div><div><h3>{item.title}</h3><p>{item.text}</p></div><span className="difference-idx">0{i+1}</span></div></ScrollReveal>)}</div></div></section>

    <section className="section section-work"><div className="container-wide"><ScrollReveal><div className="section-heading split-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</span><h2>Built with purpose.<br/><span className="text-gradient">Made to matter.</span></h2></div><div className="section-side"><p>A glimpse into the websites and digital experiences behind our engineering work.</p><a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="text-link">Visit full portfolio <Icon name="arrow-up-right" size={18}/></a></div></div></ScrollReveal>
      <div className="project-grid">{projects.map((project,i)=><ScrollReveal key={project.title} delay={i*90}><a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="project-card"><div className={`project-preview ${project.className}`}><span className="project-preview-grid"/><div className="project-image-wrap"><Image src={project.image} alt={`${project.title} project`} width={500} height={330} className={`project-image ${i === 0 ? "project-screenshot" : "project-logo"}`}/></div><span className="project-open"><Icon name="arrow-up-right" size={21}/></span></div><div className="project-caption"><div><span>{project.category} · {project.number}</span><h3>{project.title}</h3><p>{project.type}</p></div><Icon name="arrow-up-right" size={22}/></div></a></ScrollReveal>)}</div>
      <ScrollReveal><div className="work-bottom"><span>See more of what we create, design and deliver.</span><a className="btn btn-outline" href={site.portfolio} target="_blank" rel="noopener noreferrer">Explore our portfolio <Icon name="arrow-up-right" size={18}/></a></div></ScrollReveal>
    </div></section>

    <section className="section section-process"><div className="container-wide"><ScrollReveal><div className="section-heading centered"><span className="eyebrow"><span className="eyebrow-line"/> HOW WE WORK</span><h2>A clear process. <span className="text-gradient">Better outcomes.</span></h2><p>From a first conversation to the finished solution, we keep it collaborative, structured and transparent.</p></div></ScrollReveal><div className="process-grid">{steps.map((step,i)=><ScrollReveal key={step.n} delay={i*70}><div className="process-step"><span className="process-number">{step.n}</span><span className="process-line"/><h3>{step.title}</h3><p>{step.text}</p></div></ScrollReveal>)}</div></div></section>

    <section className="section section-academy"><div className="container-wide"><ScrollReveal><div className="academy-banner"><div className="academy-deco" aria-hidden="true"><span/><span/><span/></div><div className="academy-left"><span className="academy-badge"><Icon name="graduation" size={17}/> THE LEARNING DIVISION OF ETSEC</span><h2>Curiosity grows here.<br/><span>Meet ETSEC Academy.</span></h2><p>Industry-focused learning in cybersecurity, web development and AI — designed to help learners build relevant, practical skills.</p><a href={site.academy} target="_blank" rel="noopener noreferrer" className="btn btn-light">Explore ETSEC Academy <Icon name="arrow-up-right" size={18}/></a></div><div className="academy-art" aria-hidden="true"><span className="academy-circle academy-circle-one"/><span className="academy-circle academy-circle-two"/><div className="academy-glass"><Icon name="graduation" size={66}/><span>LEARN <b>·</b> BUILD <b>·</b> INNOVATE</span></div></div></div></ScrollReveal></div></section>

    <section className="section section-faq"><div className="container-wide faq-layout"><ScrollReveal><div className="faq-intro"><span className="eyebrow"><span className="eyebrow-line"/> YOUR QUESTIONS, ANSWERED</span><h2>Good questions.<br/><span className="text-gradient">Clear answers.</span></h2><p>Here&apos;s what people often ask us before getting started.</p><Link href="/faq" className="text-link">See all FAQs <Icon name="arrow-up-right" size={18}/></Link></div></ScrollReveal><ScrollReveal><FAQAccordion limit={5}/></ScrollReveal></div></section>
  </main>;
}
