"use client";
import { useState, type FormEvent } from "react";
import Icon from "@/components/Icon";
import { site, whatsappHref } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [site.whatsappGreeting, "", `Name: ${name.trim()}`, `Email: ${email.trim()}`, `Service: ${service || "General enquiry"}`, ...(details.trim() ? [`Project details: ${details.trim()}`] : [])].join("\n");
    window.location.assign(whatsappHref(message));
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-form-title"><span className="icon-box"><Icon name="whatsapp" size={21}/></span><div><h2>Tell us about your project.</h2><p>We&apos;ll prepare your enquiry for WhatsApp.</p></div></div>
    <div className="form-row"><label htmlFor="contact-name">Your name <span>*</span><input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Full name" value={name} onChange={e => setName(e.target.value)}/></label><label htmlFor="contact-email">Work email <span>*</span><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)}/></label></div>
    <label htmlFor="contact-service">What can we help with?<select id="contact-service" name="service" value={service} onChange={e=>setService(e.target.value)}><option value="">Select a service (optional)</option><option>Cybersecurity & VAPT</option><option>Web & SaaS Development</option><option>AI & Machine Learning</option><option>Specialised Security Research</option><option>Other / Not sure yet</option></select></label>
    <label htmlFor="contact-message">Tell us a little more<textarea id="contact-message" name="message" rows={5} maxLength={1500} placeholder="What are you looking to build, secure or improve?" value={details} onChange={e=>setDetails(e.target.value)}/></label>
    <button type="submit" className="btn btn-primary form-submit"><Icon name="whatsapp" size={20}/> Continue to WhatsApp <Icon name="arrow-up-right" size={18}/></button>
    <p className="form-disclaimer"><Icon name="lock" size={14}/> This opens WhatsApp with your details prefilled. Review and tap Send there to deliver your enquiry. No details are stored on this website.</p>
  </form>;
}
