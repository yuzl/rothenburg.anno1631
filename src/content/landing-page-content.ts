import { Crown, Sword, MapPin } from 'lucide-react';

export const content = {
  about: {
    headline: 'Geschichte zum Leben erweckt',
    description:
      'Einzelne Szenen aus dem Jahr 1631 erwachen zum Leben. Laiendarsteller des Vereins Historisches Festspiel "Der Meistertrunk" schlüpfen in historische Rollen und machen die Stadtgeschichte Rothenburgs so hautnah erlebbar mitten im Museum. Ein Erzähler begleitet euch, gibt Einblicke und verbindet die Szenen mit dem historischen Kontext. **Interaktion ist ausdrücklich erwünscht!**',
    image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0002.jpg',
    alt: 'Historische Darstellung im Museum - Geschichte wird lebendig',
    features: [
      'Interaktive Szenen: Besucher werden aktiv in das Geschehen eingebunden',
      'Authentische Darstellung: Laiendarsteller in historischen Rollen',
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
        image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0021.jpg',
        alt: 'Stadtrat berät über die drohende Belagerung',
      },
      {
        title: 'Das Lagerleben der Söldner',
        description:
          'Landsknechte und Kroaten lagern vor der Stadt und erzählen von vergangenen Schlachten.',
        icon: Sword,
        image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0019.jpg',
        alt: 'Söldner in ihrem Lager vor der Stadt',
      },
      {
        title: 'Das älteste Gefängnis der Stadt',
        description:
          'Besucher betreten eine dunkle Zelle und erleben die Willkür der Justiz im 17. Jahrhundert.',
        icon: MapPin,
        image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0013.jpg',
        alt: 'Das dunkle Gefängnis der Stadt',
      },
    ],
  },
  tickets: {
    headline: 'Sichert Euch Eure Tickets',
    description: 'Werdet Teil eines unvergesslichen Besuchs im Jahr 1631. Plätze sind begrenzt!',
    info: [
      { label: 'Dauer', value: 'ca. 60 Minuten', icon: '⏰' },
      { label: 'Sprache', value: 'Deutsch', icon: '🗣️' },
      { label: 'Alter', value: 'Ab 14 Jahren', icon: '👥' },
      { label: 'Gruppengröße', value: 'Max. 12 Personen', icon: '🎭' },
    ],
    highlights: [
      'Authentische historische Kostüme',
      'Interaktive Theaterszenen',
      'Professionelle Erzählerführung',
      'Einzigartige Museumsatmosphäre',
      'Historisch korrekte Darstellung',
    ],
    regularPrice: '€14,90',
    discountedPrice: '€9,90',
    priceLabel: 'pro Person',
    discountLabel: 'Aktionspreis 2025',
    availability: 'Begrenzte Plätze verfügbar',
    upcomingShowsLabel: 'Nächste Vorstellungen',
    upcomingShows: [
      {
        date: 'Sonntag, 02. November 2025',
        timeSlots: ['13:30 Uhr', '15:30 Uhr', '17:30 Uhr'],
      },
      {
        date: 'Samstag, 22. November 2025',
        timeSlots: ['16:00 Uhr', '17:30 Uhr', '19:00 Uhr'],
      },
    ],
    primaryButton: 'Online buchen (bald verfügbar)', // Tickets online buchen
    secondaryButton: 'Gruppenanfrage stellen (bald verfügbar)', // Gruppenanfrage stellen
    trustInfo: 'Sichere Online-Bezahlung • Bestätigung innerhalb 1-3 Werktage',
    contact: {
      title: 'Habt ihr Fragen?',
      description:
        'Unser Team hilft euch gerne bei der Buchung und beantwortet Fragen zum Erlebnis.',
      email: 'shop@meistertrunk.de',
    },
  },
  team: {
    headline: 'Das Team hinter dem Projekt',
    description:
      'Das Projekt wird vollständig von Mitgliedern des Vereins "Historisches Festspiel der Meistertrunk" e.V. getragen. Über 800 Vereinsmitglieder beleben seit über 140 Jahren die Stadtgeschichte Rothenburgs.',
    details: [
      'Darsteller: Ehrenamtliche Laiendarsteller aus verschiedenen Gruppierungen des Vereins',
      'Erzähler: Erfahrene Mitglieder führen als roter Faden durch die Szenen',
      'Organisation: Vereinsmitglieder mit Unterstützung von Historikern und Museumsexperten',
    ],
    background:
      'Der Verein ist fest in der Stadtgesellschaft Rothenburgs verankert und feiert seit Jahrzehnten die Geschichte der Stadt. Kernstück ist das Laienschauspiel "Der Meistertrunk", das jedes Jahr mehrmals aufgeführt wird und hunderte Besucher anzieht.',
    image: '/rothenburg.anno1631/photos/team-meistertrunk.jpg',
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
        image: '/rothenburg.anno1631/logos/partner-meistertrunk-logo.svg',
        alt: 'Logo des Vereins Historisches Festspiel "Der Meistertrunk" e.V.',
      },
      {
        name: 'Heimatministerium Bayern',
        description: 'Förderung Heimat.Engagiert',
        logo: 'KB',
        link: 'https://www.stmfh.bayern.de/internet/stmf/aktuelles/pressemitteilungen/25967/',
        image: '/rothenburg.anno1631/logos/partner-heimat-bayern.jpg',
        alt: 'Heimatministerium Bayern',
      },
      {
        name: 'Lebendiges Museum',
        description: 'Authentische Darstellung der Geschichte',
        logo: 'LM',
        link: 'https://www.meistertrunk.de/de/museum/',
        image: '/rothenburg.anno1631/photos/partner-lebendiges-museum-logo.png',
        alt: 'Logo des Lebendigen Museums',
      },
    ],
  },
  footer: {
    projectInfo: 'Ein Projekt des Vereins "Historisches Festspiel der Meistertrunk" e.V.',
  },
};
