import { Crown, Sword, MapPin } from 'lucide-react';

export const content = {
  hero: {
    headline: 'Rothenburg Anno 1631',
    subheadline: 'Unser Museum wird zur Bühne',
    description:
      'Erlebt, wie Quacksalber ihre Mixturen anpreisen, Söldner vom harten Lagerleben erzählen, Frauen um ihre Männer flehen – und manche selbst zu Heldinnen werden. Der Kerkermeister öffnet die düsteren Gefängnistore, der Rat ringt um Entscheidungen und mittendrin: Ihr.',
    cta: 'Jetzt Tickets buchen',
  },
  about: {
    headline: 'Geschichte zum Leben erweckt',
    description:
      'Einzelne Szenen aus dem Jahr 1631 erwachen zum Leben. Laiendarsteller des Vereins Historisches Festspiel "Der Meistertrunk" schlüpfen in historische Rollen und machen die Stadtgeschichte Rothenburgs so hautnah erlebbar mitten im Museum. Ein Erzähler begleitet durch den Abend, gibt Einblicke und verbindet die Szenen mit dem historischen Kontext. **Interaktion ist ausdrücklich erwünscht!**',
    image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0002.jpg',
    alt: 'Historische Darstellung im Museum - Geschichte wird lebendig',
    features: [
      'Interaktive Szenen: Besucher werden aktiv in das Geschehen eingebunden',
      'Authentische Darstellung: Laiendarsteller in historischen Rollen',
      'Historischer Kontext: Erzähler verbindet Szenen mit der Geschichte',
      'Museum als Bühne: Mitten im vereinseigenen Museum',
    ],
  },
  experience: {
    headline: 'Die Szenen von 1631',
    description:
      'Erleben Sie hautnah die Ereignisse des Jahres 1631, als General Tillys Truppen vor den Toren Rothenburgs standen.',
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
        image: '/rothenburg.anno1631/photos/meistertrunk_lebendiges-museum_0025.jpg',
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
    description: 'Erlebt Geschichte hautnah und werdet Teil eines unvergesslichen Abends im Jahr 1631. Plätze sind begrenzt!',
    info: [
      { label: 'Dauer', value: 'ca. 2 Stunden', icon: '⏰' },
      { label: 'Sprache', value: 'Deutsch', icon: '🗣️' },
      { label: 'Alter', value: 'Ab 12 Jahren', icon: '👥' },
      { label: 'Gruppengröße', value: 'Max. 25 Personen', icon: '🎭' },
    ],
    highlights: [
      'Authentische historische Kostüme',
      'Interaktive Theaterszenen',
      'Professionelle Erzählerführung',
      'Einzigartige Museumsatmosphäre',
      'Historisch korrekte Darstellung',
    ],
    price: '€9,90',
    priceLabel: 'pro Person',
    availability: 'Begrenzte Plätze verfügbar',
    upcomingShows: [
      'Samstag, 23. März 2024 - 19:30 Uhr',
      'Sonntag, 24. März 2024 - 16:00 Uhr',
      'Samstag, 30. März 2024 - 19:30 Uhr',
    ],
    primaryButton: 'Tickets online buchen',
    secondaryButton: 'Gruppenanfrage stellen',
    trustInfo: 'Bezahlung vor Ort • Bestätigung innerhalb 1-3 Werktage • Kostenlose Stornierung bis 24h vorher',
    contact: {
      title: '📞 Haben Sie Fragen?',
      description: 'Unser Team hilft Ihnen gerne bei der Buchung und beantwortet alle Fragen zum Erlebnis.',
      email: 'info@rothenburg-museum.de',
      phone: '+49 9861 867-0',
    },
  },
  team: {
    headline: 'Das Team hinter dem Projekt',
    description:
      'Das Projekt wird vollständig von Mitgliedern des Vereins "Historisches Festspiel der Meistertrunk" e.V. getragen. Über 700 Vereinsmitglieder beleben seit über 140 Jahren die Stadtgeschichte Rothenburgs.',
    details: [
      'Darsteller: Ehrenamtliche Laiendarsteller aus verschiedenen Gruppierungen des Vereins',
      'Erzähler: Erfahrene Mitglieder führen als roter Faden durch die Szenen',
      'Organisation: Vereinsmitglieder mit Unterstützung von Historikern und Museumsexperten',
      'Regie: In Zusammenarbeit mit dem Regisseur des Bühnenstücks',
    ],
    background:
      'Der Verein ist fest in der Stadtgesellschaft Rothenburgs verankert und feiert seit Jahrzehnten die Geschichte der Stadt. Kernstück ist das Laienschauspiel "Der Meistertrunk", das jedes Jahr mehrmals aufgeführt wird und hunderte Besucher anzieht.',
    image: '/rothenburg.anno1631/photos/team-meistertrunk.jpg',
    alt: 'Das Team des Vereins Historisches Festspiel "Der Meistertrunk" e.V.',
    placeholderText: 'Verein Meistertrunk',
  },
  footer: {
    projectInfo: 'Ein Projekt des Vereins "Historisches Festspiel der Meistertrunk" e.V.',
  },
};
