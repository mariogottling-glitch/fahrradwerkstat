# Die Fahrradmeisterei — Designsystem

Version 1.0 · Grundlage: „Precision Editorial Workshop“ · 22. Juli 2026

## 1. Markencharakter

Die Marke verbindet die Präzision einer Meisterwerkstatt, die Ruhe einer hochwertigen Fahrradmarke und die Nähe eines lokalen, inhabergeführten Betriebs. Sie wirkt sachkundig, persönlich, unkompliziert und sorgfältig. Die Website ist eine Serviceoberfläche, kein Shop.

## 2. Gestaltungsprinzipien

1. **Klar vor dekorativ:** Jede Fläche unterstützt Orientierung, Servicewahl oder Kontakt.
2. **Werkstattpräzision:** saubere Achsen, feine Linien, eindeutige Preise und technische Mikrodetails.
3. **Lokale Wärme:** gebrochenes Weiß, authentische Werkstattbilder und natürliche Farben.
4. **Ein Hauptziel:** „Termin buchen“ ist primär; Telefon, WhatsApp und Kontakt sind Alternativen.
5. **Progressive Offenlegung:** Entscheidungsrelevantes bleibt sichtbar, lange Listen liegen in zugänglichen Accordions.

## 3. Farbpalette

| Token | HEX | RGB | Rolle |
|---|---:|---:|---|
| `--color-bg` | `#F7F4EE` | 247 244 238 | Background Primary |
| `--color-bg-soft` | `#EEECE5` | 238 236 229 | Background Secondary |
| `--color-surface` | `#FFFEFB` | 255 254 251 | Surface |
| `--color-surface-elevated` | `#FFFFFF` | 255 255 255 | Surface Elevated |
| `--color-ink` | `#1E211F` | 30 33 31 | Text Primary |
| `--color-ink-soft` | `#5F645F` | 95 100 95 | Text Secondary |
| `--color-border` | `#D7D3CA` | 215 211 202 | Border |
| `--color-accent` | `#E85D2A` | 232 93 42 | Accent |
| `--color-accent-hover` | `#CB4617` | 203 70 23 | Accent Hover |
| `--color-technical` | `#7D887B` | 125 136 123 | Sekundärton |
| `--color-dark` | `#171A18` | 23 26 24 | Dark Surface |
| `--color-success` | `#2F7552` | 47 117 82 | Erfolg |
| `--color-warning` | `#A86616` | 168 102 22 | Warnung |
| `--color-error` | `#B7352D` | 183 53 45 | Fehler |

Fließtext nutzt `ink`/`ink-soft` auf hellen Flächen und Weiß auf `dark`. Orange mit weißem Text ist großen oder semibold gesetzten Interaktionen vorbehalten.

## 4. Typografie

Primärschrift: lokal eingebundene **Hanken Grotesk**, Fallback `Inter, Avenir Next, Segoe UI, sans-serif`. Keine externe Font-Anfrage.

| Stil | Desktop | Mobile | Zeilenhöhe | Gewicht | Tracking |
|---|---:|---:|---:|---:|---:|
| Display | clamp(56, 6.2vw, 92) | 44 | .95 | 750 | -.045em |
| H1 | clamp(48, 5vw, 76) | 40 | 1 | 750 | -.04em |
| H2 | clamp(36, 4vw, 58) | 34 | 1.04 | 720 | -.035em |
| H3 | 28 | 24 | 1.12 | 700 | -.025em |
| H4 | 20 | 19 | 1.2 | 700 | -.015em |
| Lead | 21 | 19 | 1.5 | 450 | -.01em |
| Body Large | 18 | 17 | 1.6 | 420 | 0 |
| Body | 16 | 16 | 1.6 | 420 | 0 |
| Body Small | 14 | 14 | 1.5 | 450 | .005em |
| Label | 12 | 12 | 1.3 | 700 | .12em |
| Button | 15 | 15 | 1 | 700 | 0 |
| Caption | 12 | 12 | 1.45 | 500 | .02em |
| Preis | 46 | 38 | 1 | 750 | -.04em |

Textzeilen: maximal 65 Zeichen; Introtexte maximal 54 Zeichen. Keine zentrierten langen Absätze.

## 5. Größen- und Abstandssystem

Basiseinheit 4 px. Tokens: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`. Abschnittsabstand Desktop 120–160, Tablet 88–112, Mobile 64–80 px. Karteninnenabstand Desktop 28–36, Mobile 20–24 px.

## 6. Layout- und Grid-System

- Desktop: 12 Spalten, 24 px Gutter, asymmetrische Aufteilungen 5/7 oder 4/8.
- Tablet: 8 Spalten, 20 px Gutter.
- Mobile: eine Spalte, 16 px Seitenabstand bis 374 px, danach 20 px.
- Inhaltsblöcke teilen gemeinsame Containerkanten.
- Keine horizontale Service-Tabelle auf Mobile.

## 7. Containerbreiten

`--container-wide: 1440px`, `--container: 1240px`, `--container-text: 760px`. Außenabstand `clamp(20px, 4vw, 64px)`.

## 8. Breakpoints

360, 480, 768, 1024, 1280 und 1536 px. Verbindliche Prüfbreiten: 320, 375, 390, 430, 768, 1024, 1280, 1440 und 1920 px.

## 9. Buttons und Links

Primär: Orange/Weiß, 48–54 px hoch, Radius 10 px, Padding 16/22 px. Sekundär: transparent, 1 px Border, identische Höhe. Textlinks benötigen Unterstreichung oder Pfeil-Icon. Touch-Ziel mindestens 44 × 44 px. Keine „Kaufen“-Sprache.

## 10. Cards

Trennung primär durch Raum und 1 px Linie. Radius 16 px, Oberfläche `surface`, optional `0 18px 50px rgb(23 26 24 / .06)`. Keine Karten in Karten. Hover maximal `translateY(-3px)`.

## 11. Formulare

Sichtbare Labels über Feldern. Feldhöhe 52 px, Textarea mindestens 144 px, Radius 10 px. Fokus: 3 px Akzentring plus Akzentborder. Pflichtfelder und Fehler werden textlich erklärt.

## 12. Navigation

Desktopheader 78 px: Logo links, Navigation, Termin-CTA rechts. Sticky-Zustand mit halbtransparenter heller Fläche und Border. Mobile: Logo, direkter Termin-Button, Menütoggle; Drawer enthält Navigation, Telefon und WhatsApp. Skip-Link ist erstes fokussierbares Element.

## 13. Bildsprache

Priorität: echte Werkstatt, Gebäudedetails, Werkzeug, Komponenten, Hände bei präziser Arbeit und Abholkontext. Farbkorrektur warm-neutral. Hero ca. 4:5 oder 5:4, Reportage 3:2. Keine generischen Rennrad-Lifestylebilder oder künstlichen Personen.

## 14. Icon-Stil

Phosphor Icons, Outline, `regular` oder `bold`, runde Linienenden, 20–28 px. Icons unterstützen Text. Markenlogo und Originalassets werden nicht nachgezeichnet.

## 15. Animationen und Übergänge

Schnell 140 ms, normal 220 ms, Reveal 500 ms; Easing `cubic-bezier(.2,.8,.2,1)`. Erlaubt: Opacity/Translate, Buttonfeedback, Accordion und Header. Verboten: Scroll-Blocking, große Parallaxen, Daueranimation, Cursor-Gimmicks. `prefers-reduced-motion` entfernt nicht notwendige Bewegung.

## 16. Service- und Preisdarstellung

Paketkarten enthalten Name, Einordnung, Preis, Eignung, 5–6 Hauptleistungen, Details im Accordion und Termin-CTA. Preise sind sofort sichtbar. Fahrzeugtypen werden über Labels und Icons differenziert, nicht durch kräftige Farben.

## 17. Mobile-UX-Regeln

Sticky Bottom-Bar mit Termin, Telefon und WhatsApp. Preise stehen vor Detailtext. Accordions nutzen volle Breite. Hero zeigt Aussage, zwei CTAs und ein kontrolliertes Bild. Safe-Area-Insets berücksichtigen.

## 18. Barrierefreiheit

Semantisches HTML, genau eine H1 je Route, logische Hierarchie, Skip-Link, Tastaturbedienung, `:focus-visible`, native `details/summary`, sinnvolle Alt-Texte, ARIA nur dynamisch, WCAG-AA-Kontrast und Touchziele ≥44 px.

## 19. Zustände

Hover vertieft Farben/Borders. Focus zeigt 3 px Ring mit 2 px Abstand. Active verschiebt 1 px. Disabled nutzt 45 % Opacity. Open dreht die Accordionmarkierung. Error/Success verwenden Icon, Text und semantische Farbe.

## 20. Technische Design-Tokens

CSS Custom Properties pflegen Farben, Typografie, Abstände, Radien (6, 10, 16, 24, 999), Schatten, Container, Z-Index (Header 50, Drawer 80, Toast 100), Durations und Easing. Lokale Einzelwerte müssen begründet sein.

## 21. Dark- und Light-Flächen

Mindestens 80 % der Website bleibt hell. Dunkle Flächen markieren Abholservice, Footer oder Abschluss-CTA. Dort: Weiß/70-%-Text, Borders Weiß/18 %, Akzent Orange.

## 22. Responsive Typografie

Display/H1/H2 nutzen `clamp()`. Unter 360 px fällt Display auf 40 px. Fließtext bleibt mindestens 16 px. Preise bleiben einzeilig. Feste Höhen dürfen Text nie abschneiden.

## 23. Do’s and Don’ts

**Do:** echte Fakten, sichtbare Preise, großzügige Hierarchie, warmes Materialgefühl, direkte Kontaktwege, konsistente CTA-Sprache und lokale Bilder.

**Don’t:** Shop-Elemente, erfundene Vertrauenssignale, unnötige Farbvielfalt, tiefe Schatten, überladene Cards, ungefragte Karten- oder Trackingdienste, externe Fonts, aggressive Animationen oder horizontales Mobile-Scrolling.

## 24. Character Layer — Präzision in Bewegung

Die Weiterentwicklung behält die ruhige Editorial-Basis, ergänzt aber ein kleines, wiederholbares Grafikvokabular aus der Fahrradmechanik:

- Ein fotorealistischer Zahnkranz darf angeschnitten vom Rand in eine Sektion hineinragen, aber nie mittig als reine Dekoration stehen.
- Runde Qualitätssiegel und kurze Werkstattannotationen markieren Übergänge, nicht jeden Inhaltsblock.
- Service-Nummern nutzen Signalorange als Orientierung und unterstützen die Prozesslogik.
- Dunkle technische Flächen wechseln sich mit warmen Papierflächen ab, ohne zusätzliche Karten zu erzeugen.
- Kleine Spezifikationslabels dürfen auf Fotografien liegen, wenn sie die sichtbare Arbeit einordnen.
- Die visuelle Eigenständigkeit entsteht durch Komposition und echte Bildassets, nicht durch schwere Animationen.
- Auf Mobile werden große Mechanik-Assets als dezente Randanschnitte reduziert oder ausgeblendet; Inhaltsreihenfolge und Touch-Ziele bleiben unverändert.

Regel der Zurückhaltung: Pro Sektion höchstens ein dominantes dekoratives Asset. Grafiken dürfen weder Text noch Bedienelemente überdecken.

## 25. Hero-Bühne und Bewegung

Der Hero nutzt eine ruhige, produktartige Bühne statt einer klassischen Fotokarte:

- Das freigestellte Werkstattmotiv ist der einzige dominante Fokus und darf die Bühne leicht überragen.
- Ein echter Zahnkranz liegt als sehr schwache Tiefenebene hinter dem Motiv und rotiert extrem langsam.
- Das Hauptmotiv bewegt sich nur wenige Pixel vertikal; die Animation muss wie natürliche Kameratiefe wirken, nicht wie ein schwebendes Objekt.
- Technische Index- und Detailtexte bleiben klein und funktional.
- Auf Mobile werden beide Animationen entfernt. `prefers-reduced-motion` deaktiviert sie global.
- Keine automatischen Slider, Videos, Scroll-Locks oder Pointer-Effekte im Hero.
