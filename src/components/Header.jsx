import { useEffect, useState } from "react";
import { List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { BrandLogo } from "./BrandLogo.jsx";
import { contact } from "../data/site.js";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/services", label: "Services" },
  { href: "/termine", label: "Termin buchen" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header({ path, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const onNav = (event, href) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand-link" href="/" onClick={(event) => onNav(event, "/")}>
            <BrandLogo compact />
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={path === link.href ? "is-active" : ""}
                aria-current={path === link.href ? "page" : undefined}
                onClick={(event) => onNav(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            className="button button--primary header-booking"
            href="/termine"
            onClick={(event) => onNav(event, "/termine")}
          >
            Termin buchen
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <List size={25} />}
          </button>
        </div>
      </header>
      <div
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile Navigation">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={path === link.href ? "is-active" : ""}
              onClick={(event) => onNav(event, link.href)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="drawer-contact">
          <a href={contact.phoneHref}>
            <Phone size={20} aria-hidden="true" /> {contact.phoneDisplay}
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            <WhatsappLogo size={20} aria-hidden="true" /> WhatsApp schreiben
          </a>
        </div>
      </div>
    </>
  );
}
