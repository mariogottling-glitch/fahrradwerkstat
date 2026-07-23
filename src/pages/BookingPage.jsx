import { ArrowSquareOut, Info } from "@phosphor-icons/react";
import { ContactActions } from "../components/ContactActions.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { contact } from "../data/site.js";

export function BookingPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Termin buchen"
        title="Ihr Werkstatttermin — ohne Umwege."
        text="Wählen Sie einen passenden Abgabetermin und beschreiben Sie kurz Ihr Anliegen sowie den Fahrradtyp."
        image="/assets/photos/workshop-sign.jpg"
        imageAlt="Eingang der Fahrradmeisterei in Rösberg"
      />
      <section className="section booking-section">
        <div className="container booking-grid">
          <aside className="booking-info">
            <p className="eyebrow">Vor der Buchung</p>
            <h2>Der Termin ist das Abgabedatum.</h2>
            <p>
              Die Bearbeitungszeit kann je nach Aufwand und Auslastung der
              Werkstatt variieren.
            </p>
            <div className="notice">
              <Info size={22} />
              <p>
                Voraussichtliche Dauer und Kosten besprechen wir bei der Abgabe
                des Fahrrads.
              </p>
            </div>
            <p>
              Sollte die eingebettete Buchung nicht laden, können Sie Calendly
              direkt in einem neuen Fenster öffnen.
            </p>
            <a className="text-link" href={contact.booking} target="_blank" rel="noreferrer">
              Buchung extern öffnen <ArrowSquareOut size={18} />
            </a>
          </aside>
          <div className="booking-embed">
            <iframe
              title="Termin bei der Fahrradmeisterei buchen"
              src={contact.booking}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
      <section className="section booking-alternatives">
        <div className="container">
          <p className="eyebrow">Alternativ erreichbar</p>
          <h2>Lieber direkt abstimmen?</h2>
          <ContactActions />
        </div>
      </section>
    </main>
  );
}
