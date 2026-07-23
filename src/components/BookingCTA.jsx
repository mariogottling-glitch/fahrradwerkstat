import { ArrowRight, Phone } from "@phosphor-icons/react";
import { contact } from "../data/site.js";

export function BookingCTA({ navigate, compact = false }) {
  return (
    <section id="abschluss" className={`booking-cta ${compact ? "booking-cta--compact" : ""}`}>
      <img
        className="booking-cta__precision"
        src="/assets/graphics/precision-arrow-transparent.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div>
        <p className="eyebrow">Bereit für die Werkstatt?</p>
        <h2>Warten oder reparieren lassen?</h2>
        <p>Buchen Sie den passenden Abgabetermin oder rufen Sie uns direkt an.</p>
      </div>
      <div className="booking-cta-actions">
        <a
          className="button button--primary"
          href="/termine"
          onClick={(event) => {
            event.preventDefault();
            navigate("/termine");
          }}
        >
          Termin buchen <ArrowRight size={18} />
        </a>
        <a className="text-link" href={contact.phoneHref}>
          <Phone size={18} /> Anrufen
        </a>
      </div>
      <img
        className="booking-cta__cassette"
        src="/assets/graphics/cassette-cutout.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
    </section>
  );
}
