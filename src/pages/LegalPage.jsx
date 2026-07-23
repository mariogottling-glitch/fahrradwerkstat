import { imprintSections, privacySections } from "../data/site.js";

export function LegalPage({ type }) {
  const isPrivacy = type === "privacy";
  const sections = isPrivacy ? privacySections : imprintSections;
  const title = isPrivacy ? "Datenschutzerklärung" : "Impressum";

  return (
    <main id="main">
      <section className="legal-hero">
        <div className="container container--text">
          <p className="eyebrow">Rechtliches</p>
          <h1>{title}</h1>
          <p>Informationen der Fahrradmeisterei in Bornheim-Rösberg.</p>
        </div>
      </section>
      <article className="legal-content container container--text">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        {!isPrivacy ? (
          <p className="legal-source">
            Quelle des übernommenen Disclaimertexts:{" "}
            <a href="https://www.juraforum.de" target="_blank" rel="noreferrer">Juraforum</a>.
          </p>
        ) : null}
      </article>
    </main>
  );
}
