import { ArrowRight, CheckCircle, Wrench } from "@phosphor-icons/react";
import { BookingCTA } from "../components/BookingCTA.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { PickupSection } from "../components/PickupSection.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { faqs, services } from "../data/site.js";

export function ServicesPage({ navigate }) {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services & Preise"
        title="Der passende Service für Ihr Fahrrad."
        text="Von der Jahresinspektion bis zur Reparatur: Wir prüfen gründlich, erklären verständlich und stimmen zusätzliche Arbeiten mit Ihnen ab."
        image="/assets/photos/chain-work.jpg"
        imageAlt="Detailaufnahme einer Fahrradkette während der Wartung"
      />

      <nav className="service-jump" aria-label="Servicekategorien">
        <div className="container service-jump__inner">
          <a href="#inspektionen">Inspektionen</a>
          <a href="#reparaturen">Reparaturen</a>
          <a href="#ebike">E-Bike</a>
          <a href="#abholservice">Abholservice</a>
          <a href="#faq">Fragen</a>
        </div>
      </nav>

      <section className="section" id="inspektionen">
        <div className="container">
          <SectionHeading
            eyebrow="Inspektionspakete"
            title="Klare Leistungen. Sichtbare Preise."
            text="Jedes Paket zeigt die wichtigsten Prüfpunkte sofort. Die vollständigen Leistungslisten lassen sich direkt in der Karte öffnen."
          />
          <p className="service-disclaimer">
            Material- und Reparaturkosten sowie eventuelle Arbeiten über die
            Inspektionspakete hinaus werden mit Ihnen abgestimmt.
          </p>
          <div className="service-package-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                navigate={navigate}
                featured={service.id === "ebike-erweitert"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section repair-section" id="reparaturen">
        <div className="container repair-grid">
          <div>
            <p className="eyebrow">Reparaturen & Wartung</p>
            <h2>Von der Fehleranalyse bis zum Austausch von Verschleißteilen.</h2>
            <p>
              Unsere Werkstatt bietet Reparaturen, regelmäßige Wartungen und
              Umbauten für Fahrräder aller Art. Weil die Anforderungen
              unterschiedlich sind, beraten wir Sie zum passenden Vorgehen.
            </p>
            <ul className="repair-list">
              <li><CheckCircle size={20} /> Reparaturen für Fahrräder aller Art</li>
              <li><CheckCircle size={20} /> Erneuerung von Verschleißteilen</li>
              <li><CheckCircle size={20} /> Individuelle Abstimmung weiterer Arbeiten</li>
            </ul>
            <a
              className="button button--primary"
              href="/termine"
              onClick={(event) => {
                event.preventDefault();
                navigate("/termine");
              }}
            >
              Reparaturtermin buchen <ArrowRight size={18} />
            </a>
          </div>
          <div className="repair-image">
            <img
              src="/assets/photos/mechanic-hands.jpg"
              alt="Mechanikerhände bei der Einstellung einer Fahrradschaltung"
              loading="lazy"
              width="1280"
              height="1920"
            />
            <span><Wrench size={19} /> Präzise Werkstattarbeit</span>
          </div>
        </div>
      </section>

      <section className="section ebike-band" id="ebike">
        <div className="container ebike-band__inner">
          <div>
            <p className="eyebrow">E-Bike-Service</p>
            <h2>Mechanik und elektrischer Antrieb zusammen gedacht.</h2>
          </div>
          <p>
            Beide E-Bike-Pakete enthalten die vollständige Fahrrad-Inspektion.
            Softwareupdate und Softwareauslesung werden für Bosch- oder
            Shimano-Motoren angeboten. Das erweiterte Paket ergänzt Prüfungen
            an Motoranschlüssen und Verschraubungen.
          </p>
        </div>
      </section>

      <div className="container section">
        <PickupSection navigate={navigate} detailed />
      </div>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <SectionHeading
            eyebrow="Häufige Fragen"
            title="Gut zu wissen, bevor Sie buchen."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="container section section--bottom">
        <BookingCTA navigate={navigate} />
      </div>
    </main>
  );
}
