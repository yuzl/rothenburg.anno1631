import {
  Crown,
  Sword,
  MapPin,
  Star,
  Award,
  Heart,
  Sparkles,
  Timer,
  Languages,
  UserCheck,
  Users,
  Accessibility,
  HandHeart,
} from 'lucide-react';

export const content = {
  about: {
    headline: 'Geschichte zum Leben erweckt',
    description:
      'Einzelne Szenen aus dem Jahr 1631 erwachen zum Leben. Laiendarstellende des Vereins Historisches Festspiel "Der Meistertrunk" schlüpfen in historische Rollen und machen die Stadtgeschichte Rothenburgs so hautnah erlebbar mitten im Museum. Ein Erzähler begleitet euch, gibt Einblicke und verbindet die Szenen mit dem historischen Kontext. **Interaktion ist ausdrücklich erwünscht!**',
    image: '/photos/meistertrunk_lebendiges-museum_0002.jpg',
    alt: 'Historische Darstellung im Museum - Geschichte wird lebendig',
    features: [
      'Interaktive Szenen: Besucher werden aktiv in das Geschehen eingebunden',
      'Authentische Darstellung: Laiendarstellende in historischen Rollen',
      'Historischer Kontext: Rothenburg ob der Tauber im Jahr 1631',
      'Museum als Bühne: Mitten im vereinseigenen Museum',
    ],
  },
  experience: {
    headline: 'Die Szenen von 1631',
    description:
      'Erlebt hautnah die Ereignisse des Jahres 1631, als General Tillys Truppen vor den Toren Rothenburgs standen.',
    scenes: [
      {
        title: 'Die drohende Belagerung',
        description:
          'Der Stadtrat ringt um die richtige Entscheidung gegen die herannahenden Truppen General Tillys.',
        icon: Crown,
        image: '/photos/meistertrunk_lebendiges-museum_0021.jpg',
        alt: 'Stadtrat berät über die drohende Belagerung',
      },
      {
        title: 'Das Lagerleben der Söldner',
        description:
          'Landsknechte und Kroaten lagern vor der Stadt und erzählen von vergangenen Schlachten.',
        icon: Sword,
        image: '/photos/meistertrunk_lebendiges-museum_0019.jpg',
        alt: 'Söldner in ihrem Lager vor der Stadt',
      },
      {
        title: 'Das älteste Gefängnis der Stadt',
        description:
          'Besucher betreten eine dunkle Zelle und erleben die Willkür der Justiz im 17. Jahrhundert.',
        icon: MapPin,
        image: '/photos/meistertrunk_lebendiges-museum_0013.jpg',
        alt: 'Das dunkle Gefängnis der Stadt',
      },
    ],
  },
  tickets: {
    headline: 'Sichert Euch Eure Tickets',
    description: 'Werdet Teil eines unvergesslichen Besuchs im Jahr 1631. Plätze sind begrenzt!',
    info: [
      { label: 'Dauer', value: 'ca. 60 Minuten', icon: Timer },
      { label: 'Sprache', value: 'Deutsch', icon: Languages },
      { label: 'Alter', value: 'Ab 14 Jahren', icon: UserCheck },
      { label: 'Gruppengröße', value: 'Max. 15 Personen', icon: Users },
      { label: 'Räume', value: 'Nicht barrierefrei', icon: Accessibility },
      { label: 'Interaktiv', value: 'Gäste werden eingebunden', icon: HandHeart },
    ],
    highlights: [
      {
        text: 'Historische Kostüme',
        icon: Star,
      },
      {
        text: 'Interaktive Theaterszenen',
        icon: Award,
      },
      {
        text: 'Professionelle Erzählerführung',
        icon: Heart,
      },
      {
        text: 'Einzigartige Atmosphäre',
        icon: Sparkles,
      },
    ],
    regularPrice: '',
    discountedPrice: '€15,00',
    priceLabel: 'pro Person',
    discountLabel: 'Preis für 2026',
    availability: 'Begrenzte Plätze verfügbar',
    upcomingShowsLabel: 'Nächste Vorstellungen',
    upcomingShows: [
      {
        date: 'Samstag, 28. Februar 2026',
        timeSlots: ['13:00 Uhr', '14:30 Uhr', '16:00 Uhr', '17:30 Uhr'],
      },
      {
        date: 'Samstag, 14. März 2026',
        timeSlots: ['15:00 Uhr', '16:30 Uhr', '18:00 Uhr', '19:30 Uhr'],
      },
      {
        date: 'Samstag, 02. Mai 2026',
        timeSlots: ['16:00 Uhr', '17:30 Uhr', '19:00 Uhr', '20:30 Uhr'],
      },
    ],
    primaryButton: 'Jetzt online buchen',
    trustInfo: 'Sichere Online-Bezahlung • Bestätigung innerhalb 1-3 Werktage',
    contact: {
      title: 'Habt ihr Fragen?',
      description:
        'Unser Team hilft euch gerne bei der Buchung und beantwortet Fragen zum Erlebnis.',
      email: 'anno1631@meistertrunk.de',
      emailObfuscated: {
        // Using mixed method for best spam protection (local part base64, domain HTML entities)
        mixed:
          'YW5ubzE2MzE=@&#109;&#101;&#105;&#115;&#116;&#101;&#114;&#116;&#114;&#117;&#110;&#107;&#46;&#100;&#101;',
        // Alternative: HTML entities method
        entities:
          '&#97;&#110;&#110;&#111;&#49;&#54;&#51;&#49;&#64;&#109;&#101;&#105;&#115;&#116;&#101;&#114;&#116;&#114;&#117;&#110;&#107;&#46;&#100;&#101;',
        // Alternative: ROT13 encoding
        rot13: 'nabb1631@zrfgregehx.de',
        // Alternative: reversed with offset for JavaScript decoding
        reversed: 'ed.knurrtesiem@1631onna',
        // Alternative: encoded method
        encoded: 'YW5ubzE2MzFAbWVpc3RlcnRydW5rLmRl',
      },
    },
  },
  team: {
    headline: 'Das Team hinter dem Projekt',
    description:
      'Das Projekt wird vollständig von Mitgliedern des Vereins Historisches Festspiel "Der Meistertrunk" e.V. getragen. Über 800 Vereinsmitglieder beleben seit über 140 Jahren die Stadtgeschichte Rothenburgs.',
    details: [
      'Mitwirkende: Ehrenamtlich Laiendarstellende aus verschiedenen Gruppierungen des Vereins',
      'Erzähler: Erfahrene Mitglieder führen durch die Szenen',
      'Organisation: Vereinsmitglieder mit Unterstützung von Historikern und Museumsexperten',
    ],
    background:
      'Der Verein ist fest in der Stadtgesellschaft Rothenburgs verankert und feiert seit Jahrzehnten die Geschichte der Stadt. Kernstück ist das Laienschauspiel "Der Meistertrunk", das jedes Jahr mehrmals aufgeführt wird und hunderte Besucher anzieht.',
    image: '/photos/team-meistertrunk.jpg',
    alt: 'Das Team des Vereins Historisches Festspiel "Der Meistertrunk" e.V.',
    placeholderText: 'Verein Meistertrunk',
  },
  partners: {
    headline: 'Partner & Förderer',
    description: 'Unser Projekt wird unterstützt von wichtigen Partnern und Förderern',
    partners: [
      {
        name: 'Meistertrunk Verein',
        description: 'Träger des historischen Festspiels',
        logo: 'MT',
        link: 'https://www.meistertrunk.de',
        image: '/logos/partner-meistertrunk-logo.svg',
        alt: 'Logo des Vereins Historisches Festspiel "Der Meistertrunk" e.V.',
      },
      {
        name: 'Heimatministerium Bayern',
        description: 'Förderung Heimat.Engagiert',
        logo: 'KB',
        link: 'https://www.stmfh.bayern.de/internet/stmf/aktuelles/pressemitteilungen/25967/',
        image: '/logos/partner-heimat-bayern.jpg',
        alt: 'Heimatministerium Bayern',
      },
    ],
  },
  footer: {
    projectInfo: 'Ein Projekt des Vereins Historisches Festspiel "Der Meistertrunk" e.V.',
  },
};
