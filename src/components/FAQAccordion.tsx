"use client";
import { useState } from "react";
import Icon from "@/components/Icon";
import { faqItems } from "@/lib/site";
export default function FAQAccordion({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<number | null>(0);
  return <div className="faq-list">{faqItems.slice(0,limit).map((item,i) => <div className={`faq-item ${selected === i ? "faq-open" : ""}`} key={item.question}><h3><button type="button" aria-expanded={selected === i} aria-controls={`faq-answer-${i}`} onClick={() => setSelected(selected === i ? null : i)}><span>{item.question}</span><span className="faq-icon"><Icon name={selected === i ? "minus" : "plus"} size={18}/></span></button></h3><div id={`faq-answer-${i}`} className="faq-answer" hidden={selected !== i}><p>{item.answer}</p></div></div>)}</div>;
}
