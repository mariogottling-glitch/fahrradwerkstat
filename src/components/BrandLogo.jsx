export function BrandLogo({ light = false, compact = false }) {
  return (
    <span className={`brand-logo ${light ? "brand-logo--light" : ""}`}>
      <img
        src="/assets/brand/logo-white.png"
        alt=""
        width={compact ? 56 : 72}
        height={compact ? 56 : 72}
      />
      <span className="sr-only">Die Fahrradmeisterei</span>
    </span>
  );
}
