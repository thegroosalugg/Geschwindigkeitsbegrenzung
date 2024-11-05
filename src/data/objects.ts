export type Object = { body: string; gend: string };

// prettier-ignore
export const objects = [
  [ // 0: Individuals
    { body: 'Vater',          gend: 'm' },
    { body: 'Väter',          gend: 'p' },
    { body: 'Mutter',         gend: 'w' },
    { body: 'Mütter',         gend: 'p' },
    { body: 'Lehrer',         gend: 'm' },
    { body: 'Lehrer',         gend: 'p' },
    { body: 'Lehrerin',       gend: 'w' },
    { body: 'Lehrerinnen',    gend: 'p' },
    { body: 'Arzt',           gend: 'm' },
    { body: 'Ärzte',          gend: 'p' },
    { body: 'Ärztin',         gend: 'w' },
    { body: 'Ärztinnen',      gend: 'p' },
    { body: 'Freund',         gend: 'm' },
    { body: 'Freunde',        gend: 'p' },
    { body: 'Freundin',       gend: 'w' },
    { body: 'Freundinnen',    gend: 'p' },
    { body: 'Chef',           gend: 'm' },
    { body: 'Chefs',          gend: 'p' },
    { body: 'Chefin',         gend: 'w' },
    { body: 'Chefinen',       gend: 'p' },
    { body: 'Kollege',        gend: 'm' },
    { body: 'Kollegen',       gend: 'p' },
    { body: 'Kollegin',       gend: 'w' },
    { body: 'Kolleginnen',    gend: 'p' },
    { body: 'Nachbar',        gend: 'm' },
    { body: 'Nachbarn',       gend: 'p' },
    { body: 'Nachbarin',      gend: 'w' },
    { body: 'Nachbarinnen',   gend: 'p' },
    { body: 'Bruder',         gend: 'm' },
    { body: 'Brüder',         gend: 'p' },
    { body: 'Schwester',      gend: 'w' },
    { body: 'Schwestern',     gend: 'p' },
    { body: 'Mitarbeiter',    gend: 'm' },
    { body: 'Mitarbeiter',    gend: 'p' },
    { body: 'Mitarbeiterin',  gend: 'w' },
    { body: 'Polizist',       gend: 'm' },
    { body: 'Polizisten',     gend: 'p' },
    { body: 'Polizistin',     gend: 'w' },
    { body: 'Polizistinnen',  gend: 'p' },
    { body: 'Leiter',         gend: 'm' },
    { body: 'Leiter',         gend: 'p' },
    { body: 'Leiterin',       gend: 'w' },
    { body: 'Leiterinnen',    gend: 'p' },
    { body: 'Richter',        gend: 'm' },
    { body: 'Richter',        gend: 'p' },
    { body: 'Richterin',      gend: 'w' },
    { body: 'Richterinnen',   gend: 'p' },
    { body: 'Kunde',          gend: 'm' },
    { body: 'Kunden',         gend: 'p' },
    { body: 'Kundin',         gend: 'w' },
    { body: 'Kundinnen',      gend: 'p' }
  ],
  [ // 1: Sight/Sound/Touch
    { body: 'Buch',           gend: 'n' },
    { body: 'Bücher',         gend: 'p' },
    { body: 'Stuhl',          gend: 'm' },
    { body: 'Stühle',         gend: 'p' },
    { body: 'Auto',           gend: 'n' },
    { body: 'Tasche',         gend: 'w' },
    { body: 'Haus',           gend: 'n' },
    { body: 'Häuser',         gend: 'p' },
    { body: 'Rezept',         gend: 'n' },
    { body: 'Kamera',         gend: 'w' },
    { body: 'Schiff',         gend: 'n' },
    { body: 'Baum',           gend: 'm' },
    { body: 'Blume',          gend: 'w' },
    { body: 'Pflanze',        gend: 'w' },
    { body: 'Tier',           gend: 'n' },
    { body: 'Elefant',        gend: 'm' },
    { body: 'Fuchs',          gend: 'm' },
    { body: 'Zug',            gend: 'm' },
    { body: 'Treppe',         gend: 'w' },
    { body: 'Licht',          gend: 'n' },
    { body: 'Geist',          gend: 'm' },
    { body: 'Stern',          gend: 'm' },
    { body: 'Kreatur',        gend: 'w' },
    { body: 'Instrument',     gend: 'n' },
    { body: 'Schatz',         gend: 'm' },
    { body: 'Zeichnung',      gend: 'w' },
    { body: 'Kunstwerk',      gend: 'n' },
  ],
  [ // 2: Theoretical/Abstract
    { body: 'Erfahrung',      gend: 'w' },
    { body: 'Erfahrungen',    gend: 'p' },
    { body: 'Erfolg',         gend: 'm' },
    { body: 'Erkenntnis',     gend: 'w' },
    { body: 'Erkenntnisse',   gend: 'p' },
    { body: 'Entscheidung',   gend: 'w' },
    { body: 'Glaube',         gend: 'm' },
    { body: 'Glauben',        gend: 'p' },
    { body: 'Hoffnung',       gend: 'w' },
    { body: 'Hoffnungen',     gend: 'p' },
    { body: 'Idee',           gend: 'w' },
    { body: 'Ideen',          gend: 'p' },
    { body: 'Plan',           gend: 'm' },
    { body: 'Pläne',          gend: 'p' },
    { body: 'Projekt',        gend: 'n' },
    { body: 'Projekte',       gend: 'p' },
    { body: 'Traum',          gend: 'm' },
    { body: 'Träume',         gend: 'p' },
    { body: 'Vorschlag',      gend: 'm' },
    { body: 'Wissen',         gend: 'n' },
    { body: 'Wunsch',         gend: 'm' },
    { body: 'Wünsche',        gend: 'p' },
    { body: 'Ziel',           gend: 'n' },
    { body: 'Ziele',          gend: 'p' },
    { body: 'Zweifel',        gend: 'm' },
  ],
  [ // 3: Events
    { body: 'Abenteuer',      gend: 'n' },
    { body: 'Anruf',          gend: 'm' },
    { body: 'Besuch',         gend: 'm' },
    { body: 'Reise',          gend: 'w' },
    { body: 'Feier',          gend: 'w' },
    { body: 'Konferenz',      gend: 'w' },
    { body: 'Treffen',        gend: 'n' },
    { body: 'Party',          gend: 'w' },
    { body: 'Seminar',        gend: 'n' },
    { body: 'Training',       gend: 'n' },
    { body: 'Veranstaltung',  gend: 'w' },
    { body: 'Versammlung',    gend: 'w' },
    { body: 'Besprechung',    gend: 'w' }
  ],
  [ // 4: Acts/Services
    { body: 'Hilfe',          gend: 'w' },
    { body: 'Unterstützung',  gend: 'w' },
    { body: 'Beratung',       gend: 'w' },
    { body: 'Pflege',         gend: 'w' },
    { body: 'Schutz',         gend: 'm' },
    { body: 'Anleitung',      gend: 'w' },
    { body: 'Verteidigung',   gend: 'w' },
    { body: 'Erlaubnis',      gend: 'w' },
    { body: 'Verantwortung',  gend: 'w' },
    { body: 'Ehrenamt',       gend: 'n' },
    { body: 'Rat',            gend: 'm' },
    { body: 'Dienst',         gend: 'm' },
    { body: 'Versprechen',    gend: 'n' },
    { body: 'Spende',         gend: 'w' },
    { body: 'Einsatz',        gend: 'm' }
  ],
  [ // 5: Spaces/Places
    { body: 'Platz',          gend: 'm' },
    { body: 'Plätze',         gend: 'p' },
    { body: 'Raum',           gend: 'm' },
    { body: 'Räume',          gend: 'p' },
    { body: 'Gebäude',        gend: 'n' },
    { body: 'Gebäude',        gend: 'p' },
    { body: 'Ort',            gend: 'm' },
    { body: 'Orte',           gend: 'p' },
    { body: 'Zimmer',         gend: 'n' },
    { body: 'Zimmer',         gend: 'p' },
    { body: 'Stadt',          gend: 'w' },
    { body: 'Städte',         gend: 'p' },
    { body: 'Wohnung',        gend: 'w' },
    { body: 'Wohnungen',      gend: 'p' },
    { body: 'Wald',           gend: 'm' },
    { body: 'Wälder',         gend: 'p' },
    { body: 'Berg',           gend: 'm' },
    { body: 'Berge',          gend: 'p' },
    { body: 'Fluss',          gend: 'm' },
    { body: 'Flüsse',         gend: 'p' },
    { body: 'See',            gend: 'm' },
    { body: 'Seen',           gend: 'p' },
    { body: 'Tal',            gend: 'n' },
    { body: 'Täler',          gend: 'p' },
    { body: 'Insel',          gend: 'w' },
    { body: 'Inseln',         gend: 'p' },
  ],
  [ // 6: Characteristics
    { body: 'Stil',           gend: 'm' },
    { body: 'Komfort',        gend: 'm' },
    { body: 'Schönheit',      gend: 'w' },
    { body: 'Klugheit',       gend: 'w' },
    { body: 'Größe',          gend: 'w' },
    { body: 'Eigenschaft',    gend: 'w' },
    { body: 'Eigenschaften',  gend: 'p' },
    { body: 'Freundlichkeit', gend: 'w' },
    { body: 'Sicherheit',     gend: 'w' },
    { body: 'Stärke',         gend: 'w' },
    { body: 'Stärken',        gend: 'p' },
    { body: 'Schnelligkeit',  gend: 'w' },
  ],
  [ // 7: Materials
    { body: 'Holz',           gend: 'n' },
    { body: 'Stein',          gend: 'm' },
    { body: 'Metall',         gend: 'n' },
    { body: 'Baumwolle',      gend: 'w' },
    { body: 'Glas',           gend: 'n' },
    { body: 'Plastik',        gend: 'n' },
    { body: 'Leder',          gend: 'n' },
    { body: 'Ton',            gend: 'm' },
    { body: 'Keramik',        gend: 'w' },
    { body: 'Wolle',          gend: 'w' },
    { body: 'Kohle',          gend: 'w' },
    { body: 'Gummi',          gend: 'm' },
    { body: 'Eisen',          gend: 'n' },
    { body: 'Papier',         gend: 'n' },
    { body: 'Kupfer',         gend: 'n' },
  ],
  [ // 8:Taste/Smell
    { body: 'Apfel',         gend: 'm' },
    { body: 'Orangen',       gend: 'p' },
    { body: 'Tomate',        gend: 'w' },
    { body: 'Knoblauch',     gend: 'm' },
    { body: 'Käse',          gend: 'm' },
    { body: 'Schokolade',    gend: 'w' },
    { body: 'Lavendel',      gend: 'm' },
    { body: 'Rose',          gend: 'w' },
    { body: 'Minze',         gend: 'w' },
    { body: 'Honig',         gend: 'm' },
    { body: 'Erdbeere',      gend: 'w' },
    { body: 'Pfeffer',       gend: 'm' },
    { body: 'Zimt',          gend: 'm' },
    { body: 'Brot',          gend: 'n' },
    { body: 'Zitrone',       gend: 'w' },
    { body: 'Eier',          gend: 'p' },
    { body: 'Milch',         gend: 'w' },
    { body: 'Fisch',         gend: 'm' },
    { body: 'Abfall',        gend: 'm' },
    { body: 'Schweiß',       gend: 'm' },
  ],
];
