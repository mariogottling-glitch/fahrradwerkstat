import { CalendarBlank, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { contact } from "../data/site.js";

export function StickyMobileCTA({ navigate }) {
  return (
    <nav className="sticky-mobile-cta" aria-label="Schnellkontakt">
      <a href={contact.phoneHref} aria-label="Anrufen"><Phone size={21} /></a>
      <a
        className="sticky-mobile-cta__booking"
        href="/termine"
        onClick={(event) => {
          event.preventDefault();
          navigate("/termine");
        }}
      >
        <CalendarBlank size={20} /> Termin
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp schreiben">
        <WhatsappLogo size={22} />
      </a>
    </nav>
  );
}
