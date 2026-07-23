import { ArrowRight, MapPin, Van } from "@phosphor-icons/react";
import { pickupFacts } from "../data/site.js";

export function PickupSection({ navigate, detailed = false }) {
  return (
    <section className={`pickup-section ${detailed ? "pickup-section--detailed" : ""}`} id="abholservice">
      <div className="pickup-image">
        <img
          src="/assets/photos/pickup-van.jpg"
          alt="Backsteingebäude der Fahrradmeisterei mit grünem Werkstatttor und Werkstattschild"
          loading="lazy"
          width="962"
          height="1280"
        />
        <span className="image-label"><MapPin size={16} /> Bornheim-Rösberg</span>
      </div>
      <div className="pickup-content">
        <p className="eyebrow">Bequem & unkompliziert</p>
        <h2>Hol- & Bringservice im Vorgebirge</h2>
        <p>
          Wenn Sie keine Zeit oder Möglichkeit haben, persönlich vorbeizukommen,
          holen wir Ihr Fahrrad nach Absprache ab.
        </p>
        <div className="pickup-price">
          <Van size={26} aria-hidden="true" />
          <span><strong>15 €</strong> bis 10 km</span>
          <span className="pickup-price__separator">·</span>
          <span>danach <strong>2 €</strong> je km</span>
        </div>
        {detailed ? (
          <ul className="pickup-facts">
            {pickupFacts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        ) : (
          <p className="pickup-note">
            Bis zu vier normal große Fahrräder pro Anfahrt. Für Lastenräder oder
            größere Mengen finden wir eine individuelle Lösung.
          </p>
        )}
        <a
          className="button button--primary"
          href="/kontakt"
          onClick={(event) => {
            event.preventDefault();
            navigate("/kontakt");
          }}
        >
          Abholung anfragen <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
