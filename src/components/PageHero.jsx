export function PageHero({ eyebrow, title, text, image, imageAlt }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__lead">{text}</p>
        </div>
        {image ? (
          <div className="page-hero__image">
            <img src={image} alt={imageAlt} width="960" height="720" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
