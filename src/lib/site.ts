/** Centralised brand links: update this file to change contact destinations. */
export const site = {
  name: "ETSEC",
  url: "https://etsecinc.com",
  portfolio: "https://portfolio.etsecinc.in",
  academy: "https://academy.etsecinc.com",
  email: "contact@etsecinc.com",
  phoneDisplay: "+91 86885 78412",
  phoneDigits: "918688578412",
  location: "Hyderabad, Telangana, India",
  whatsappGreeting: "Hey there! i have an enquiry",
} as const;

export const whatsappHref = (message: string = site.whatsappGreeting) =>
  `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(message)}`;

export type ServiceIcon = "shield" | "code" | "brain" | "satellite";

export const services = [
  {
    slug: "cyber-security", number: "01", icon: "shield" as ServiceIcon,
    title: "Cybersecurity", short: "Protect your digital foundation.",
    description: "Assess vulnerabilities, strengthen defences and respond to threats with practical, risk-led security services.",
    tags: ["VAPT", "SOC & MDR", "Threat intelligence"],
  },
  {
    slug: "web-development", number: "02", icon: "code" as ServiceIcon,
    title: "Web & SaaS Development", short: "Build the products that move business forward.",
    description: "Purpose-built websites, e-commerce experiences and scalable applications with security built into the process.",
    tags: ["Web applications", "E-commerce", "Custom SaaS"],
  },
  {
    slug: "ai-development", number: "03", icon: "brain" as ServiceIcon,
    title: "AI & Intelligent Systems", short: "Make complex data useful.",
    description: "Applied AI, computer vision and intelligent automation designed around tangible operational needs.",
    tags: ["Computer vision", "ML solutions", "Automation"],
  },
  {
    slug: "satellite-security", number: "04", icon: "satellite" as ServiceIcon,
    title: "Specialised Security R&D", short: "Explore emerging security challenges.",
    description: "Research-led security thinking for advanced domains, including satellite and aerospace systems.",
    tags: ["Security research", "Threat modelling", "Risk analysis"],
  },
];

export const serviceDetails = {
  "cyber-security": {
    eyebrow: "CYBERSECURITY SOLUTIONS", title: "Security that works beyond the checklist.",
    intro: "Identify real-world exposure, prioritise what matters and build stronger defences around your people, applications and infrastructure.",
    capabilities: [
      { title: "Vulnerability Assessment & Penetration Testing", body: "Targeted assessments for web applications, APIs, networks and supporting infrastructure, with actionable remediation guidance." },
      { title: "Security Operations & Monitoring", body: "Security monitoring and incident-response support workflows designed around your risk profile and operational needs." },
      { title: "Threat Intelligence", body: "Relevant threat research, contextual risk analysis and prioritised security recommendations." },
      { title: "Malware & Incident Analysis", body: "Technical investigation to help understand suspicious behaviour, incident scope and defensive next steps." },
      { title: "Cyber Audits & Compliance", body: "Structured security reviews and documentation support to understand control gaps and improve readiness." },
      { title: "Security Engineering", body: "Application hardening, secure architecture reviews and practical engineering collaboration." },
    ],
    stages: ["Understand your environment", "Assess and validate exposure", "Prioritise findings", "Support remediation"],
    accent: "Security outcomes, not just reports.",
  },
  "web-development": {
    eyebrow: "DIGITAL PRODUCT ENGINEERING", title: "Beautiful digital products. Built for the real world.",
    intro: "From marketing websites to sophisticated business platforms, we combine thoughtful user experience, clean architecture and secure engineering.",
    capabilities: [
      { title: "Corporate & Business Websites", body: "Fast, responsive brand websites that clearly communicate your offering and convert visits into conversations." },
      { title: "E-commerce Development", body: "Custom shopping experiences, product catalogues, user journeys and integrations shaped to your business model." },
      { title: "SaaS & Internal Platforms", body: "Dashboards, portals and workflow applications with scalable data models and role-based user experiences." },
      { title: "Web & Mobile-Ready APIs", body: "Shared backend services that can serve web experiences and mobile applications as products expand." },
      { title: "UI/UX & Product Design", body: "Accessible, responsive interfaces with consistent design systems and clear information hierarchy." },
      { title: "Security & Deployment", body: "Practical authentication, performance optimisation, testing and cloud deployment considerations." },
    ],
    stages: ["Discover your requirements", "Design the experience", "Build and test", "Deploy and evolve"],
    accent: "From concept to production-ready experience.",
  },
  "ai-development": {
    eyebrow: "ARTIFICIAL INTELLIGENCE", title: "Intelligence engineered around your goals.",
    intro: "Bring useful machine learning into real products and workflows. We focus on fit-for-purpose solutions rather than AI for its own sake.",
    capabilities: [
      { title: "Custom ML & Deep Learning", body: "Model development and evaluation for classification, prediction and domain-specific decision support." },
      { title: "Computer Vision", body: "Image and video analytics, detection and recognition systems for real-world workflows." },
      { title: "Predictive Analytics", body: "Turn structured data into forward-looking insights with responsible evaluation and monitoring." },
      { title: "Intelligent Automation", body: "Integrate AI-assisted processing into existing applications and business operations." },
      { title: "AI-Enabled Applications", body: "Build usable product experiences that connect data, models, APIs and operational interfaces." },
      { title: "Deployment & Model Operations", body: "Consider serving, monitoring, versioning and operational reliability from the beginning." },
    ],
    stages: ["Define the use case", "Evaluate data and feasibility", "Build and validate", "Integrate and monitor"],
    accent: "Applied AI. Measurable use cases.",
  },
  "satellite-security": {
    eyebrow: "SPECIALISED SECURITY RESEARCH", title: "Security thinking for complex environments.",
    intro: "Research-oriented threat modelling and security analysis for emerging and specialised infrastructure, including space-linked systems.",
    capabilities: [
      { title: "Threat Modelling", body: "Systematic exploration of potential attack surfaces, trust boundaries and threat scenarios." },
      { title: "Attack Surface Mapping", body: "Structured assessment of components, dependencies and possible exposure pathways." },
      { title: "Risk-Based Security Analysis", body: "Prioritisation based on plausible threat impact, likelihood and system criticality." },
      { title: "Security Architecture Review", body: "Technical analysis of design assumptions, interfaces and defensive controls." },
      { title: "Research & Prototyping", body: "Exploratory research, proof-of-concept development and documented technical findings." },
      { title: "Security Strategy", body: "Translate research insights into practical design considerations and improvement opportunities." },
    ],
    stages: ["Scope the system", "Map critical assets", "Analyse threats", "Document mitigations"],
    accent: "Research-driven protection for emerging technology.",
  },
} as const;

export const faqItems = [
  { question: "What can ETSEC help my business with?", answer: "We work across cybersecurity, custom websites and SaaS platforms, AI/ML solutions, and specialised security research. Tell us what you're building or looking to secure, and we'll help define an appropriate scope." },
  { question: "Do you work with startups and established organisations?", answer: "Yes. The delivery approach and project scope can be adapted to the size of your organisation, complexity of the work and business requirements." },
  { question: "Can you develop an e-commerce website or SaaS platform?", answer: "Yes. Our web development services include corporate websites, custom e-commerce experiences, dashboards, portals and SaaS applications." },
  { question: "How do I request a quote?", answer: "Choose Contact Us or Start a Project. WhatsApp will open with a prefilled enquiry for our team. You can also use the contact page to include your service, name and requirements." },
  { question: "Where can I view your previous work?", answer: "Use the Portfolio link in the navigation to visit portfolio.etsecinc.in, where we showcase selected projects and work." },
  { question: "Does ETSEC offer industry training?", answer: "Yes. ETSEC Academy is our dedicated learning platform for practical technology training. Visit academy.etsecinc.com to explore it." },
];
