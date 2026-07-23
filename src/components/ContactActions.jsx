import {
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { contact } from "../data/site.js";

export function ContactActions() {
  return (
    <div className="contact-actions">
      <a href={contact.phoneHref}>
        <span><Phone size={24} /></span>
        <strong>Anrufen</strong>
        <small>{contact.phoneDisplay}</small>
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noreferrer">
        <span><WhatsappLogo size={25} /></span>
        <strong>WhatsApp</strong>
        <small>Nachricht schreiben</small>
      </a>
      <a href={`mailto:${contact.email}`}>
        <span><EnvelopeSimple size={24} /></span>
        <strong>E-Mail</strong>
        <small>{contact.email}</small>
      </a>
      <a href="https://www.google.com/maps/search/?api=1&query=Steinstra%C3%9Fe+1%2C+53332+Bornheim" target="_blank" rel="noreferrer">
        <span><MapPin size={24} /></span>
        <strong>Anfahrt</strong>
        <small>{contact.street}, {contact.postalCode} {contact.city}</small>
      </a>
    </div>
  );
}
