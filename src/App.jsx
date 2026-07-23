import { useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { StickyMobileCTA } from "./components/StickyMobileCTA.jsx";
import { contact } from "./data/site.js";
import { BookingPage } from "./pages/BookingPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LegalPage } from "./pages/LegalPage.jsx";
import { ServicesPage } from "./pages/ServicesPage.jsx";

const seo = {
  "/": {
    title: "Die Fahrradmeisterei | Fahrradwerkstatt in Bornheim-Rösberg",
    description:
      "Fahrrad-Meisterwerkstatt in Bornheim-Rösberg für Inspektionen, E-Bike-Service, Reparaturen und Hol- & Bringservice.",
  },
  "/services": {
    title: "Services & Preise | Die Fahrradmeisterei",
    description:
      "Fahrrad- und E-Bike-Inspektionen, Lastenrad- und Kinderrad-Service sowie Reparaturen mit klaren Preisen.",
  },
  "/termine": {
    title: "Termin buchen | Die Fahrradmeisterei",
    description:
      "Wartungs- oder Reparaturtermin bei der Fahrradmeisterei in Bornheim-Rösberg online buchen.",
  },
  "/kontakt": {
    title: "Kontakt | Die Fahrradmeisterei Bornheim",
    description:
      "Die Fahrradmeisterei erreichen: Telefon, WhatsApp, E-Mail, Adresse und Öffnungszeiten.",
  },
  "/impressum": {
    title: "Impressum | Die Fahrradmeisterei",
    description: "Impressum der Fahrradmeisterei in Bornheim-Rösberg.",
  },
  "/datenschutzerklaerung": {
    title: "Datenschutz | Die Fahrradmeisterei",
    description: "Datenschutzerklärung der Fahrradmeisterei.",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/index.html") return "/";
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

function usePathname() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (target) => {
    const [pathname, hash = ""] = target.split("#");
    const normalized = normalizePath(pathname || path);
    window.history.pushState({}, "", `${normalized}${hash ? `#${hash}` : ""}`);
    setPath(normalized);
    requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
  };

  return [path, navigate];
}

function Seo({ path }) {
  const data = seo[path] || seo["/"];
  const canonical = `https://diefahrradmeisterei.de${path === "/" ? "/" : `${path}/`}`;

  useEffect(() => {
    document.title = data.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", data.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", data.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", data.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonical);
  }, [canonical, data]);

  return null;
}

export function App() {
  const [path, navigate] = usePathname();
  const page = useMemo(() => {
    if (path === "/services") return <ServicesPage navigate={navigate} />;
    if (path === "/termine" || path === "/termin") return <BookingPage />;
    if (path === "/kontakt") return <ContactPage />;
    if (path === "/impressum") return <LegalPage type="imprint" />;
    if (path === "/datenschutzerklaerung" || path === "/datenschutz") return <LegalPage type="privacy" />;
    return <HomePage navigate={navigate} />;
  }, [path]);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [path]);

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: contact.name,
    url: "https://diefahrradmeisterei.de/",
    telephone: contact.phoneDisplay,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      postalCode: contact.postalCode,
      addressLocality: contact.city,
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:00" },
    ],
  };

  return (
    <>
      <Seo path={path} />
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      <Header path={path} navigate={navigate} />
      {page}
      <Footer navigate={navigate} />
      <StickyMobileCTA navigate={navigate} />
    </>
  );
}
