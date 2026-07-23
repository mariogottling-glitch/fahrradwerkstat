export function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-lead">{text}</p> : null}
    </header>
  );
}
