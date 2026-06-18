import type { CampsiteConfig } from "../types";

const IMG = "/campsites/alpencampingmark";

const alpencampingmark: CampsiteConfig = {
  name: "Alpencamping Mark",
  shortName: "Alpencamping",
  slug: "alpencampingmark",
  ort: "Weer",
  region: "Tirol",
  // KEIN theme-Feld (Original-Palette). heroVariant immer center.
  heroVariant: "center",
  brandKind: "Campingplatz Tirol",
  regionLong: "Silberregion Karwendel · Tirol · Österreich",

  claim: "Familiencamping im Herzen Tirols",
  claimEmphasis: "im Herzen Tirols",
  emailDetail: "euer Familienbetrieb seit 1973 mit dem Motto Klasse statt Masse",
  intro:
    "Seit 1973 führt Familie Mark diesen Platz in Weer nach dem Motto „Klasse statt Masse“ — dich erwarten 95 gepflegte Stellplätze auf 20.000 m² Wiese, eingebettet zwischen Inntal und Karwendel.",

  logo: { src: `${IMG}/logo-5f034c4fb4.png`, alt: "Alpencamping Mark Logo" },

  statement: {
    text: "Bei uns zählt Klasse statt Masse — seit über 50 Jahren.",
    emphasis: "Klasse statt Masse",
  },

  pillars: [
    {
      title: "Im Herzen Tirols",
      text: "Am Fuße des Karwendel, nur Minuten von Innsbruck — Berge, Inntal und Silberregion vor dem Zelt.",
      image: { src: `${IMG}/gallery-caf73b4ed8.webp`, alt: "Blick über das Inntal und die Berge rund um Weer" },
    },
    {
      title: "Ponyreiten & Reitplatz",
      text: "Tiroler Haflinger und Ponys direkt am Platz — Kinder reiten, Eltern schauen zu und genießen die Aussicht.",
      image: { src: `${IMG}/gallery-caf0bb9bdc.webp`, alt: "Tiroler Haflinger Ponys auf der Weide am Alpencamping Mark" },
    },
    {
      title: "Aktiv in den Bergen",
      text: "Wandern, Biken, Rafting, Canyoning oder Paragliding — die Aktiv-Alpinschule startet direkt am Platz.",
      image: { src: `${IMG}/gallery-1725df0f92.webp`, alt: "Tandem-Paragliding über dem Inntal in Tirol" },
    },
  ],

  usps: [
    "95 Plätze auf 20.000 m²",
    "Geheiztes Schwimmbad",
    "Café mit warmer Küche",
    "Ponyreiten & Reitplatz",
    "Hunde willkommen",
    "ADAC Tipp 2026 · 4 Sterne",
  ],

  trust: {
    heading: "Klasse statt Masse, seit 1973",
    headingEmphasis: "Klasse statt Masse",
    intro:
      "Drei Generationen, ein Anspruch: lieber 95 großzügige Plätze auf gepflegter Wiese als ein überfüllter Campingplatz. Dazu ADAC-Auszeichnung, geheiztes Schwimmbad und ein Aktivprogramm für die ganze Familie.",
  },

  awards: [
    { label: "ADAC Tipp 2026 · 4 Sterne", image: { src: `${IMG}/award-9bee1d18c8.png`, alt: "ADAC Tipp 2026 — 4 Sterne" } },
  ],

  saison: { von: "April", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/activity-eb4108451a.webp`, alt: "Berghütte mit Blick über das Inntal und das Karwendelgebirge" },
  },

  camping: {
    heading: "Dein Platz auf der Wiese",
    intro:
      "20.000 m² Wiese, 95 Stellplätze mit Strom und ein Café, das ab acht Uhr die ersten Semmeln aufbäckt — ein Campingtag in Tirol, wie er sein soll.",
    features: [
      {
        title: "20.000 m² Wiesengelände",
        text: "95 befestigte Stellplätze von 70 bis 120 m², jeder mit Stromanschluss, eingebettet in 20.000 m² gepflegte Wiese.",
        image: { src: `${IMG}/hero-d6190aa572.webp`, alt: "Luftaufnahme des Campingplatzes Alpencamping Mark in Weer" },
      },
      {
        title: "Café & Restaurant",
        text: "Frühstück, Kuchen und Eis ab acht Uhr, abends warme Küche bis halb neun — alles direkt am Platz.",
        image: { src: `${IMG}/gallery-c53f3b4f6a.webp`, alt: "Anstoßen mit kühlen Getränken im Café von Alpencamping Mark" },
      },
      {
        title: "Warme Küche am Abend",
        text: "Von 17.30 bis 20.30 Uhr warme Gerichte, danach noch Kleinigkeiten und gute Getränke an der Bar.",
        image: { src: `${IMG}/gallery-19a7867c6f.webp`, alt: "Frisch zubereitetes Gericht aus der Camping-Küche" },
      },
    ],
  },

  kinder: {
    heading: "Kinder kommen voll auf ihre Kosten",
    intro:
      "Vom betreuten Programm über Kletterturm und Profi-Trampolin bis zum Ponyreiten — hier dürfen Kinder den ganzen Tag draußen sein.",
    features: [
      {
        title: "Spiel & Betreuung",
        text: "Betreute Aktivitäten, Spielplatz, Fußballfeld, Volleyball, Kletterturm und ein kostenloses Profi-Trampolin.",
        image: { src: `${IMG}/kids-fead8e585f.webp`, alt: "Spielplatz mit Klettergerüst und Rutsche vor Karwendelgebirge" },
      },
      {
        title: "Ausflüge mit Kindern",
        text: "Schloss Ambras, das Silberbergwerk und die kostenlose SilberCard machen Ausflüge mit Kindern leicht.",
        image: { src: `${IMG}/gallery-97fb812126.webp`, alt: "Kinder vor Schloss Ambras bei Innsbruck" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Weer",
    modes: [
      { title: "Mit dem Auto", text: "Über die A12 Inntalautobahn, Ausfahrt Wattens/Weer, dann den Schildern Richtung Bundesstraße 12 folgen." },
      { title: "Mit der Bahn", text: "Der Bahnhof Fritzens-Wattens liegt wenige Minuten entfernt; Innsbruck Hbf ist rund 20 km westlich." },
      { title: "Mit dem Flugzeug", text: "Der Flughafen Innsbruck ist etwa 25 Fahrminuten entfernt, München rund zwei Stunden." },
    ],
  },

  galerie: {
    heading: "Eindrücke aus Weer",
    headingEmphasis: "Weer",
    intro: "Berge, Wiese und gutes Essen — ein paar Aufnahmen vom Platz und aus der Silberregion Karwendel.",
    tag: "April bis September",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-132e0eefb3.webp`, alt: "Wanderweg mit Blick auf das Karwendelgebirge" },
      { src: `${IMG}/gallery-7a0ff3ca56.webp`, alt: "Mountainbiken in der Silberregion Karwendel" },
      { src: `${IMG}/gallery-10d44e950f.webp`, alt: "Hausgemachter Apfelstrudel im Camping-Café" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz auf der Wiese",
    headingEmphasis: "auf der Wiese",
    intro: "Wähle Zeitraum und Personenzahl — Familie Mark meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — die Website zeigt Preise nur über einen interaktiven Rechner ohne feste Beträge (bitte bestätigen). Im Stellplatz inklusive: Strom, Warmwasser, WLAN, Ortstaxe, SilberCard, Aktivprogramm und geheiztes Schwimmbad. Hund € 6 pro Nacht.",
    highlight: { title: "Alles inklusive", text: "Strom, Warmwasser, WLAN, geheiztes Schwimmbad, SilberCard und Aktivprogramm sind im Preis enthalten." },
    categories: [
      { id: "nebensaison", label: "Stellplatz · Nebensaison", perNight: 38, perExtraGuest: 9 },
      { id: "hauptsaison", label: "Stellplatz · Hauptsaison", perNight: 44, perExtraGuest: 11 },
    ],
  },

  kontakt: {
    tel: "+43 699 199 991 09",
    telHref: "tel:+4369919999109",
    mail: "info@alpencampingmark.com",
    adresse: "Bundesstraße 12 · 6116 Weer · Tirol",
    coords: { lat: 47.3067001, lng: 11.6492374 },
  },

  languages: ["DE", "EN", "FR", "IT", "NL", "DA"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Café & Restaurant", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default alpencampingmark;
