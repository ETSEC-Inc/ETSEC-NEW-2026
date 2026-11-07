import Icon from "@/components/Icon";
import { whatsappHref } from "@/lib/site";

/** Always-available contact shortcut. WhatsApp opens with the enquiry drafted. */
export default function FloatingContact() {
  return <a className="floating-contact" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="Enquire with ETSEC on WhatsApp (opens in a new tab)">
    <span className="floating-contact-icon"><Icon name="whatsapp" size={23}/></span><span className="floating-contact-label"><strong>Have a question?</strong><small>Chat with ETSEC</small></span>
  </a>;
}
