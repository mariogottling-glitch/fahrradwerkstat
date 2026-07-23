export const contact = {
  name: "Die Fahrradmeisterei",
  owner: "Francisco Reining",
  street: "Steinstraße 1",
  postalCode: "53332",
  city: "Bornheim",
  phoneDisplay: "+49 151 44 98 18 19",
  phoneHref: "tel:+4915144981819",
  email: "info@diefahrradmeisterei.de",
  whatsapp: "https://wa.me/message/3U4H4HZ2YVDIC1",
  instagram: "https://www.instagram.com/die_fahrradmeisterei/",
  booking: "https://calendly.com/diefahrradmeisterei-info/60min?hide_event_type_details=1",
};

export const openingHours = [
  { days: "Sonntag", hours: "Geschlossen" },
  { days: "Montag", hours: "Geschlossen" },
  { days: "Dienstag", hours: "Geschlossen" },
  { days: "Mittwoch", hours: "10–18 Uhr" },
  { days: "Donnerstag", hours: "10–18 Uhr" },
  { days: "Freitag", hours: "10–18 Uhr" },
  { days: "Samstag", hours: "10–13 Uhr" },
];

export const services = [
  {
    id: "fahrrad",
    name: "Fahrrad Inspektion",
    shortName: "Fahrrad",
    price: "95 €",
    intro:
      "Inspektionspaket zur vollwertigen Wartung und Zustandsermittlung an Fahrrädern ohne Motor.",
    highlights: [
      "Verschleiß-Prüfung von Antrieb und Bremsanlage",
      "Zustandsprüfung von Rahmen und Gabel",
      "Funktionsprüfung von Schaltung und Beleuchtung",
      "Prüfung von Lagern, Laufrädern und Anbauteilen",
    ],
    details: [
      "Verschleiß-Prüfung des Antriebs und der Bremsanlage",
      "Zustandsprüfung von Rahmen und Gabel",
      "Funktionsprüfung von Federung und Dämpfung",
      "Zustandsprüfung von Steuersatzlager und Tretlager",
      "Zustandsprüfung von Lenker/Cockpit und Vorbau",
      "Prüfung der Speichenspannung und des Seitenschlags der Laufräder",
      "Funktionsprüfung der Schaltung und eventuelle Justierung",
      "Zustandsprüfung der Pedale",
      "Funktionsprüfung der Beleuchtung und außenliegenden Verkabelung",
      "Befestigung von Anbauteilen und Prüfung auf Zulassung zur Teilnahme am Straßenverkehr",
    ],
  },
  {
    id: "ebike-standard",
    name: "E-Bike Inspektion „Standard“",
    shortName: "E-Bike Standard",
    price: "115 €",
    intro:
      "Beinhaltet alle Arbeiten der Fahrrad Inspektion und zusätzliche Prüfungen am elektrischen System.",
    highlights: [
      "Alle Arbeiten der Fahrrad Inspektion",
      "Softwareupdate und Auslesung für Bosch oder Shimano",
      "Prüfung von Akku-Kontakten und Verkabelung",
      "Funktionsprüfung des elektrischen Antriebs",
    ],
    details: [
      "Softwareupdate und Auslesung der Software für Bosch- oder Shimano-Motoren",
      "Überprüfung der Akku-Kontakte auf Schäden und Korrosion",
      "Überprüfung von außenliegender Verkabelung, Display und Bedieneinheit auf Schäden",
      "Funktionsprüfung des elektrischen Antriebs",
    ],
  },
  {
    id: "ebike-erweitert",
    name: "E-Bike Inspektion „erweitert“",
    shortName: "E-Bike Erweitert",
    price: "135 €",
    intro:
      "Beinhaltet alle Arbeiten der E-Bike Inspektion „Standard“ und zusätzliche Kontrollen an Anschlüssen und Verschraubungen.",
    highlights: [
      "Alle Arbeiten der E-Bike Inspektion „Standard“",
      "Kontrolle der Kabel-Steckkontakte",
      "Prüfung und Anpassung der Motorverschraubung",
      "Prüfung der Kettenblattverschraubung",
    ],
    details: [
      "Kontrolle der Kabel-Steckkontakte und Motoranschlüsse auf Schäden und Korrosion",
      "Überprüfung und Anpassung der Motorverschraubung",
      "Überprüfung und Anpassung der Kettenblattverschraubung",
    ],
  },
  {
    id: "lastenrad",
    name: "Lastenrad Inspektion",
    shortName: "Lastenrad",
    price: "115–160 €",
    intro:
      "Beinhaltet alle Arbeiten der Fahrrad Inspektion. Der Preis richtet sich wegen der Vielfalt an Lastenrädern nach dem Mehraufwand und wird im Einzelfall besprochen.",
    highlights: [
      "Alle Arbeiten der Fahrrad Inspektion",
      "Ausgelegt auf die Besonderheiten von Lastenrädern",
      "Preis nach tatsächlichem Mehraufwand",
      "Persönliche Abstimmung im Einzelfall",
    ],
    details: [],
  },
  {
    id: "kinderrad",
    name: "Kinderrad Inspektion",
    shortName: "Kinderrad",
    price: "ab 45 €",
    intro:
      "Beinhaltet alle notwendigen Wartungsarbeiten und Verschleißprüfungen. Der Preis richtet sich nach der Komplexität des Fahrrads.",
    highlights: [
      "Notwendige Wartungsarbeiten",
      "Verschleißprüfungen",
      "Preis nach Komplexität",
      "Für unterschiedliche Kinderradtypen",
    ],
    details: [],
  },
];

export const quickServices = [
  { id: "fahrrad", label: "Fahrrad-Inspektion", icon: "bike" },
  { id: "ebike-standard", label: "E-Bike-Inspektion", icon: "battery" },
  { id: "lastenrad", label: "Lastenrad-Inspektion", icon: "cargo" },
  { id: "kinderrad", label: "Kinderrad-Inspektion", icon: "child" },
  { id: "reparaturen", label: "Reparaturen", icon: "wrench" },
  { id: "abholservice", label: "Hol- & Bringservice", icon: "van" },
];

export const processSteps = [
  {
    title: "Termin auswählen",
    text: "Wartungs- oder Reparaturtermin online buchen und das Anliegen beschreiben.",
  },
  {
    title: "Fahrrad abgeben",
    text: "Das Fahrrad zum vereinbarten Abgabedatum bringen oder eine Abholung abstimmen.",
  },
  {
    title: "Prüfung & Abstimmung",
    text: "Voraussichtliche Dauer, Kosten und Arbeiten werden bei der Abgabe besprochen.",
  },
  {
    title: "Werkstattservice",
    text: "Inspektion oder Reparatur wird durchgeführt; danach kann das Fahrrad abgeholt werden.",
  },
];

export const pickupFacts = [
  "Abholtermine werden aktuell außerhalb der Werkstatt-Öffnungszeiten angeboten.",
  "Bis 10 Kilometer Entfernung kostet eine Anfahrt pauschal 15 €.",
  "Jeder weitere Kilometer kostet 2 €.",
  "Grundlage ist die kürzeste mit dem Auto befahrbare Route bei Google Maps ab Steinstraße 1.",
  "Pro Anfahrt können bis zu vier normal große Fahrräder mitgenommen werden.",
  "Für Lastenräder oder mehr als vier Fahrräder wird eine individuelle Lösung gesucht.",
  "Bei Abholung erfolgt eine kurze Zustandsprüfung von etwa 3–5 Minuten pro Fahrrad.",
];

export const faqs = [
  {
    question: "Was bedeutet der gebuchte Termin?",
    answer:
      "Der vereinbarte Termin ist das Abgabedatum des Fahrrads. Die Bearbeitungszeit kann je nach Aufwand und Auslastung variieren.",
  },
  {
    question: "Wann werden Dauer und Kosten besprochen?",
    answer:
      "Die voraussichtliche Dauer sowie die voraussichtlichen Kosten werden bei der Abgabe des Fahrrads besprochen.",
  },
  {
    question: "Sind Material und weitere Reparaturen im Inspektionspreis enthalten?",
    answer:
      "Material- und Reparaturkosten sowie Arbeiten über das jeweilige Inspektionspaket hinaus werden vorab abgestimmt.",
  },
  {
    question: "Für welche E-Bike-Systeme ist das Softwareupdate vorgesehen?",
    answer:
      "Softwareupdate und Softwareauslesung im Standardpaket werden für Bosch- oder Shimano-Motoren angeboten.",
  },
  {
    question: "Wann ist eine Abholung möglich?",
    answer:
      "Abholtermine werden aktuell außerhalb der Werkstatt-Öffnungszeiten angeboten und individuell vereinbart.",
  },
];

export const imprintSections = [
  {
    heading: "Angaben gemäß § 5 TMG",
    paragraphs: [
      "Francisco Reining\nDie Fahrradmeisterei\nSteinstraße 1\n53332 Bornheim",
      "Telefon: 015144981819\nE-Mail: info@diefahrradmeisterei.de",
      "Umsatzsteuer-Identifikationsnummer nach § 27a Umsatzsteuergesetz:\nDE457976634",
      "Berufshaftpflichtversicherung:\nProvinzial Versicherung Hürth – Raddatz, Beyer & Fey oHG\nHermülheimer Str. 24, 50354 Hürth\nGeltungsbereich: Deutschland",
    ],
  },
  {
    heading: "Disclaimer – rechtliche Hinweise",
    paragraphs: [
      "§ 1 Warnhinweis zu Inhalten\nDie kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der bereitgestellten kostenlosen und frei zugänglichen journalistischen Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande, insoweit fehlt es am Rechtsbindungswillen des Anbieters.",
      "§ 2 Externe Links\nDiese Website enthält Verknüpfungen zu Websites Dritter („externe Links“). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.",
      "§ 3 Urheber- und Leistungsschutzrechte\nDie auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung beziehungsweise Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch sind erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.",
      "§ 4 Besondere Nutzungsbedingungen\nSoweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.",
    ],
  },
];

export const privacySections = [
  {
    heading: "Allgemeine Angaben",
    paragraphs: [
      "Angaben zur verantwortlichen Stelle",
      "Unternehmen: Die Fahrradmeisterei",
      "Adresse: Steinstraße 1, 53332 Bornheim",
    ],
  },
  {
    heading: "Allgemeine Datenverarbeitungs-Informationen",
    paragraphs: [
      "Personenbezogene Daten werden nur erhoben, wenn Sie uns diese von sich aus mitteilen. Darüber hinaus werden keine personenbezogenen Daten erhoben. Eine über die Reichweite der gesetzlichen Erlaubnistatbestände hinausgehende Verarbeitung Ihrer personenbezogenen Daten erfolgt nur auf Grundlage Ihrer ausdrücklichen Einwilligung.",
      "Verarbeitungszweck: in der Regel Vertragsanbahnung beziehungsweise -durchführung.",
      "Kategorien von Empfängern: Öffentliche Stellen bei Vorliegen vorrangiger Rechtsvorschriften. Externe Dienstleister oder sonstige Auftragnehmer. Weitere externe Stellen, soweit die betroffene Person eingewilligt hat oder eine Übermittlung aus überwiegendem Interesse zulässig ist.",
      "Drittlandtransfers: Im Rahmen der Vertragsdurchführung können auch Auftragsverarbeiter außerhalb der Europäischen Union zum Einsatz kommen.",
      "Dauer der Datenspeicherung: Die Dauer richtet sich nach den gesetzlichen Aufbewahrungspflichten und beträgt in der Regel zehn Jahre.",
    ],
  },
  {
    heading: "Nutzungsdaten",
    paragraphs: [
      "Wenn Sie unsere Webseiten aufrufen, übermitteln Sie aus technischer Notwendigkeit über Ihren Internetbrowser Daten an unseren Webserver. Aufgezeichnet werden Datum und Uhrzeit der Anforderung, Name der angeforderten Daten, Herkunftsseite, Zugriffsstatus, Browser und Betriebssystem, die vollständige IP-Adresse sowie die übertragene Datenmenge.",
      "Aus Gründen der technischen Sicherheit, insbesondere zur Abwehr von Angriffsversuchen auf den Webserver, werden diese Daten kurzzeitig gespeichert. Nach spätestens 30 Tagen werden die Daten durch Verkürzung der IP-Adresse auf Domain-Ebene anonymisiert. In anonymisierter Form können sie statistisch verarbeitet werden; ein Abgleich mit anderen Datenbeständen oder eine Weitergabe an Dritte findet nicht statt.",
    ],
  },
  {
    heading: "Erforderliche Cookies",
    paragraphs: [
      "Diese Webseite verwendet eigene Cookies, um für die Anzeige erforderliche Einstellungen zu speichern. In diesen eigenen Cookies werden keine personenbezogenen Daten gespeichert. Sie können die Verwendung von Cookies generell verhindern, indem Sie in Ihrem Browser die Speicherung untersagen.",
    ],
  },
  {
    heading: "Einsatz verschiedener Tools",
    paragraphs: [
      "Die bisherige Website benennt Google Analytics als einwilligungsabhängigen Webanalysedienst. Das vorliegende Redesign bindet keine Analyse- oder Marketing-Tracker ein.",
    ],
  },
  {
    heading: "Weitere Informationen und Kontakte",
    paragraphs: [
      "Sie können jederzeit Ansprüche auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung und Datenübertragbarkeit geltend machen. Die Kontaktmöglichkeiten finden Sie im Impressum. Sie haben ferner das Recht, sich bei Beschwerden an die Datenschutz-Aufsichtsbehörde zu wenden.",
      "Die bestehende Datenschutzerklärung wurde vom Datenschutz-Generator der IITR Datenschutz GmbH erstellt.",
    ],
  },
];
