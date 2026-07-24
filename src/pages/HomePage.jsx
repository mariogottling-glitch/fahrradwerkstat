import { useEffect, useState } from "react";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Wrench,
} from "@phosphor-icons/react";
import { BookingCTA } from "../components/BookingCTA.jsx";
import { PickupSection } from "../components/PickupSection.jsx";
import { ProcessSteps } from "../components/ProcessSteps.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ServiceIcon } from "../components/ServiceIcon.jsx";
import { quickServices } from "../data/site.js";

const heroSlides = [
  {
    id: "drivetrain",
    src: "/assets/graphics/hero-drivetrain-cutout.png",
    alt: "Mechanikerhände bei der präzisen Einstellung von Schaltung und Antrieb",
    detail: "Schaltwerk · Detail A",
    title: "Präzise eingestellt",
  },
  {
    id: "disc-brake",
    src: "/assets/graphics/hero-disc-brake-cutout.png",
    alt: "Mechanikerhände beim Einstellen einer Fahrrad-Scheibenbremse",
    detail: "Scheibenbremse · Detail B",
    title: "Sauber justiert",
  },
  {
    id: "wheel-truing",
    src: "/assets/graphics/hero-wheel-truing-cutout.png",
    alt: "Mechanikerhände beim Zentrieren eines Fahrradlaufrads",
    detail: "Laufrad · Detail C",
    title: "Exakt zentriert",
  },
];

export function HomePage({ navigate }) {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || heroPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(timer);
  }, [heroPaused]);

  const activeSlide = heroSlides[activeHeroSlide];

  return (
    <main id="main">
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="hero-catalog-rail" aria-label="Reparaturszenen auswählen">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={index === activeHeroSlide ? "is-active" : ""}
                aria-label={`Szene ${index + 1}: ${slide.title}`}
                aria-pressed={index === activeHeroSlide}
                onClick={() => setActiveHeroSlide(index)}
              >
                0{index + 1}
              </button>
            ))}
          </div>
          <div className="home-hero__copy">
            <p className="eyebrow">Fahrrad-Meisterwerkstatt · Bornheim-Rösberg</p>
            <h1>Meisterservice für jedes Fahrrad<span>.</span></h1>
            <p className="hero-lead">
              Ihre inhabergeführte Fahrrad-Meisterwerkstatt im Vorgebirge:
              für Inspektionen, E-Bike-Service und Reparaturen aller Art.
            </p>
            <div className="hero-actions">
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
              <a
                className="button button--secondary"
                href="/services"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/services");
                }}
              >
                Services ansehen
              </a>
            </div>
            <p className="hero-location">
              <MapPin size={18} /> Steinstraße 1, 53332 Bornheim
            </p>
          </div>
          <div className="home-hero__visual">
            <div
              id="werkstatt-buehne"
              className="hero-stage"
              onMouseEnter={() => setHeroPaused(true)}
              onMouseLeave={() => setHeroPaused(false)}
              onFocusCapture={() => setHeroPaused(true)}
              onBlurCapture={() => setHeroPaused(false)}
            >
              <span className="hero-stage__word" aria-hidden="true">PRÄZISION</span>
              <img
                className="hero-stage__cassette"
                src="/assets/graphics/cassette-cutout.png"
                alt=""
                aria-hidden="true"
              />
              <div className="hero-stage__slides">
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide.id}
                    className={`hero-stage__subject hero-stage__subject--${slide.id}${index === activeHeroSlide ? " is-active" : ""}`}
                    src={slide.src}
                    alt={index === activeHeroSlide ? slide.alt : ""}
                    aria-hidden={index !== activeHeroSlide}
                    width="1536"
                    height="1024"
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                ))}
              </div>
              <div className="hero-stage__index" aria-hidden="true">
                <span>0{activeHeroSlide + 1}</span>
                <small>Werkstatt · Rösberg</small>
              </div>
              <div className="hero-stage__controls" aria-label="Reparaturszenen auswählen">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={index === activeHeroSlide ? "is-active" : ""}
                    aria-label={`Szene ${index + 1}: ${slide.title}`}
                    aria-pressed={index === activeHeroSlide}
                    onClick={() => setActiveHeroSlide(index)}
                  />
                ))}
              </div>
              <div className="hero-image-card">
                <ShieldCheck size={21} />
                <span><strong>Meisterwerkstatt</strong> im Vorgebirge</span>
              </div>
              <div className="hero-spec" aria-hidden="true">
                <span>{activeSlide.detail}</span>
                <strong>{activeSlide.title}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-services section section--tight">
        <div className="container">
          <div className="quick-services__heading">
            <p className="eyebrow">Direkt zum passenden Service</p>
            <p>Was dürfen wir uns ansehen?</p>
          </div>
          <div className="quick-service-grid">
            {quickServices.map((service, index) => (
              <a
                key={service.id}
                href={service.id === "reparaturen" || service.id === "abholservice"
                  ? `/services#${service.id}`
                  : `/services#${service.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/services#${service.id}`);
                }}
              >
                <ServiceIcon name={service.icon} size={29} />
                <span className="quick-service__label">
                  <small>0{index + 1}</small>
                  {service.label}
                </span>
                <ArrowRight size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section competence-section">
        <div className="container competence-grid">
          <div className="competence-image">
            <img
              src="/assets/photos/workshop-sign.jpg"
              alt="Werkstatteingang der Fahrradmeisterei mit Fahrradsymbol an der Tür"
              loading="lazy"
              width="1542"
              height="2048"
            />
          </div>
          <div className="competence-copy">
            <p className="eyebrow">Kleine Werkstatt. Klare Arbeit.</p>
            <h2>Technisch gründlich, persönlich abgestimmt.</h2>
            <p>
              Wir sind eine kleine, inhabergeführte Fahrrad-Meisterwerkstatt.
              Unser Angebot umfasst Jahresinspektionen für klassische Fahrräder,
              E-Bikes und sportive Fahrräder sowie Reparaturen für Fahrräder aller Art.
            </p>
            <p>
              Material- und Reparaturkosten oder Arbeiten über ein
              Inspektionspaket hinaus stimmen wir mit Ihnen ab.
            </p>
            <div className="competence-points">
              <span><Wrench size={22} /> Inspektion & Reparatur</span>
              <span><ShieldCheck size={22} /> Klare Abstimmung</span>
            </div>
            <a
              className="text-link"
              href="/services"
              onClick={(event) => {
                event.preventDefault();
                navigate("/services");
              }}
            >
              Leistungen und Preise <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="ablauf" className="section process-section">
        <img
          className="process-cassette"
          src="/assets/graphics/cassette-cutout.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="container">
          <SectionHeading
            eyebrow="So einfach geht’s"
            title="Vom Termin bis zum fahrbereiten Rad."
            text="Der gebuchte Termin ist Ihr Abgabedatum. Alles Weitere besprechen wir transparent bei der Übergabe."
            align="center"
          />
          <ProcessSteps />
        </div>
        <img
          className="process-quality-seal"
          src="/assets/graphics/quality-seal-transparent.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </section>

      <div className="container section">
        <PickupSection navigate={navigate} />
      </div>

      <section className="section workshop-strip">
        <div className="container">
          <div className="workshop-strip__images">
            <img
              src="/assets/photos/chain-work.jpg"
              alt="Detailaufnahme einer Fahrradkette bei der Wartung"
              loading="lazy"
              width="1280"
              height="1920"
            />
            <img
              src="/assets/photos/bicycle-service.jpg"
              alt="Nahaufnahme einer Reparatur an einem Fahrradrahmen"
              loading="lazy"
              width="1536"
              height="1024"
            />
          </div>
          <p className="eyebrow">Jedes Rad ist anders</p>
          <h2>Wir geben jedem Fahrrad den Service, den es braucht.</h2>
        </div>
      </section>

      <div className="container section section--bottom">
        <BookingCTA navigate={navigate} />
      </div>
    </main>
  );
}
