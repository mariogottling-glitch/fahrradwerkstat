import { ArrowRight, Check, Plus } from "@phosphor-icons/react";
import { ServiceIcon } from "./ServiceIcon.jsx";

const iconNames = {
  fahrrad: "bike",
  "ebike-standard": "battery",
  "ebike-erweitert": "battery",
  lastenrad: "cargo",
  kinderrad: "child",
};

export function ServiceCard({ service, navigate, featured = false }) {
  return (
    <article className={`service-package ${featured ? "service-package--featured" : ""}`} id={service.id}>
      <div className="service-package__top">
        <span className="service-package__icon">
          <ServiceIcon name={iconNames[service.id]} size={30} />
        </span>
        {featured ? <span className="service-tag">Umfassend</span> : null}
      </div>
      <div>
        <h3>{service.name}</h3>
        <p>{service.intro}</p>
      </div>
      <p className="price" aria-label={`Preis ${service.price}`}>
        {service.price}
      </p>
      <ul className="feature-list">
        {service.highlights.map((feature) => (
          <li key={feature}><Check size={17} weight="bold" /> {feature}</li>
        ))}
      </ul>
      {service.details.length ? (
        <details className="service-details">
          <summary><span>Alle Leistungen ansehen</span><Plus size={18} aria-hidden="true" /></summary>
          <ul>
            {service.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </details>
      ) : null}
      <a
        className="button button--secondary service-package__cta"
        href="/termine"
        onClick={(event) => {
          event.preventDefault();
          navigate("/termine");
        }}
      >
        Termin buchen <ArrowRight size={18} />
      </a>
    </article>
  );
}
