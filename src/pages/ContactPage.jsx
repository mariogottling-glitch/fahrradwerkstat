import { useState } from "react";
import { ArrowRight, Clock, MapPin } from "@phosphor-icons/react";
import { ContactActions } from "../components/ContactActions.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { contact, openingHours } from "../data/site.js";

export function ContactPage() {
  const [status, setStatus] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Werkstattanfrage von ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    setStatus("Ihr E-Mail-Programm wird mit der vorbereiteten Nachricht geöffnet.");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="main">
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen wir über Ihr Fahrrad."
        text="Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie eine E-Mail. Wir freuen uns auch auf Ihren Besuch in der Werkstatt."
        image="/assets/photos/bicycle-service.jpg"
        imageAlt="Nahaufnahme einer Reparatur an einem Fahrrad"
      />
      <section className="section">
        <div className="container">
          <ContactActions />
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <p className="eyebrow">Nachricht vorbereiten</p>
            <h2>Worum geht es?</h2>
            <p>
              Nach dem Absenden öffnet sich Ihr E-Mail-Programm. Es werden keine
              Formulardaten auf dieser Website gespeichert.
            </p>
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label>
                E-Mail
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label>
              Ihre Nachricht
              <textarea
                name="message"
                required
                placeholder="Fahrradtyp, Anliegen und falls hilfreich ein Terminwunsch"
              />
            </label>
            <button className="button button--primary" type="submit">
              E-Mail vorbereiten <ArrowRight size={18} />
            </button>
            {status ? <p className="form-status" role="status">{status}</p> : null}
          </form>
          <aside className="visit-card">
            <div>
              <p className="eyebrow">Werkstatt in Rösberg</p>
              <h2>Vorbeikommen</h2>
              <p><MapPin size={20} /> {contact.street}<br />{contact.postalCode} {contact.city}</p>
            </div>
            <div className="hours">
              <p className="hours__title"><Clock size={20} /> Öffnungszeiten</p>
              {openingHours.map((item) => (
                <p key={item.days}><span>{item.days}</span><strong>{item.hours}</strong></p>
              ))}
            </div>
            <a
              className="button button--secondary"
              href="https://www.google.com/maps/search/?api=1&query=Steinstra%C3%9Fe+1%2C+53332+Bornheim"
              target="_blank"
              rel="noreferrer"
            >
              Route öffnen <ArrowRight size={18} />
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
