import {
  EnvelopeSimple,
  InstagramLogo,
  MapPin,
  Phone,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { BrandLogo } from "./BrandLogo.jsx";
import { contact } from "../data/site.js";

export function Footer({ navigate }) {
  const onNav = (event, href) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo light />
          <p>Ihre Fahrrad-Meisterwerkstatt im Vorgebirge.</p>
        </div>
        <div>
          <p className="footer-label">Kontakt</p>
          <a href={contact.phoneHref}><Phone size={18} /> {contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}><EnvelopeSimple size={18} /> {contact.email}</a>
          <p><MapPin size={18} /> {contact.street}, {contact.postalCode} {contact.city}</p>
        </div>
        <div>
          <p className="footer-label">Öffnungszeiten</p>
          <p>Mi–Fr <span>10–18 Uhr</span></p>
          <p>Sa <span>10–13 Uhr</span></p>
          <p>So–Di <span>Geschlossen</span></p>
        </div>
        <div>
          <p className="footer-label">Folgen & schreiben</p>
          <div className="social-links">
            <a href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram öffnen">
              <InstagramLogo size={22} />
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp öffnen">
              <WhatsappLogo size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Die Fahrradmeisterei</p>
        <nav aria-label="Rechtliches">
          <a href="/datenschutzerklaerung" onClick={(event) => onNav(event, "/datenschutzerklaerung")}>Datenschutz</a>
          <a href="/impressum" onClick={(event) => onNav(event, "/impressum")}>Impressum</a>
        </nav>
      </div>
    </footer>
  );
}
