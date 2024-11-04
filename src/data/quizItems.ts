// ***CONTEXTUAL
// es geht um + Akk
// es handelt sich um + Akk
// machen sich Sorgen um + Akk
// gratulieren jemandem zu + Dat
// helfen jemandem bei + Dat
// passen zu + Dat

type Subject = { body: string; end: string };

// prettier-ignore
const subjects = [
  { body: 'Ich',            end: 'e'  },
  { body: 'Du',             end: 'st' },
  { body: 'Er',             end: 't'  },
  { body: 'Sie',            end: 't'  },
  { body: 'Es',             end: 't'  },
  { body: 'Wir',            end: 'en' },
  { body: 'Ihr',            end: 't' },
  { body: 'Sie',            end: 'en' },
  { body: 'Der Lehrer',     end: 't'  },
  { body: 'Das Kind',       end: 't'  },
  { body: 'Die Katze',      end: 't'  },
  { body: 'Der Hund',       end: 't'  },
  { body: 'Die Frau',       end: 't'  },
  { body: 'Der Mann',       end: 't'  },
  { body: 'Der Arzt',       end: 't'  },
  { body: 'Die Freundin',   end: 't'  },
  { body: 'Die Teilnehmer', end: 'en' },
  { body: 'Die Schüler',    end: 'en' },
  { body: 'Die Eltern',     end: 'en' },
  { body: 'Die Lehrer',     end: 'en' },
  { body: 'Die Freunde',    end: 'en' },
  { body: 'Die Kinder',     end: 'en' },
  { body: 'Die Kollegen',   end: 'en' },
  { body: 'Die Nachbarn',   end: 'en' },
];

const possessives = ['mein', 'dein', 'ihr', 'sein', 'unser', 'Ihr'];

const adverbs = [
  'immer',
  'ständig',
  'meistens',
  'häufig',
  'täglich',
  'regelmäßig',
  'oft',
  'manchmal',
  'selten',
  'kaum',
  'nie',
];

const adjectives = [
  'neu', // new
  'spannend', // exciting
  'wertvoll', // valuable
  'schnell', // fast
  'klug', // smart
  'einzigartig', // unique
  'weis', // wise
  'groß', // great
  'baldig', // soon
  'mutig', // courageous
  'alt', // old
  'streng', // strict
  'zukünftig', // future
  'frisch', // fresh
  'süß', // sweet
  'hoh', // high
  'verloren', // lost
  'schön', // beautiful
  'wichtig', // important
  'umfassend', // comprehensive
];

// prettier-ignore
const objects = [
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
  [ // 1: Tangible Objects
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
    { body: 'Kunstwerk',      gend: 'n' }
  ],
  [ // 2: Theoreticals/Abstract Concepts
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
];

type Verb = {
      body: string;
      prep: string;
      case: string;
      end?: string;
  stative?: object;
   reflex?: object;
      mod?: object;
       cat: number[];
}

const     reflex = {   e: 'mich', st: 'dich',  t: 'sich', en: 'sich',  Ihr: 'euch', Wir: 'uns' };
const    stative = { Ich: 'bin',  Du: 'bist',  t: 'ist',  en: 'sind',  Ihr: 'seid' };
const        mod = {              st: 'est',   t: 'et',                Ihr: 'et'   };
const   zweifeln = {   e: 'le',   st: 'elst',  t: 'elt',  en: 'eln'                };
const  verlassen = {   e: 'asse', st: 'ässt',  t: 'ässt', en: 'assen', Ihr: 'asst' };
const teilNehmen = {   e: 'ehme', st: 'immst', t: 'immt', en: 'ehmen', Ihr: 'ehmt' };

// 0: Individuals
// 1: Tangible Objects
// 2: Theoreticals/Abstract Concepts
// 3: Events
// 4: Acts/Services
// 5: Spaces/Places
// 6: Characteristics

// prettier-ignore
const verbs = [
  // ***REGULAR VERBS
  { body: 'beginn'/*en*/,      prep: 'mit',   case: 'dat', cat: [     2, 3, 4       ] },
  { body: 'bericht'/*en*/,     prep: 'von',   case: 'dat', cat: [0,   2             ], mod },
  { body: 'besteh'/*en*/,      prep: 'aus',   case: 'dat', cat: [   1               ] },
  { body: 'bitt'/*en*/,        prep: 'um',    case: 'akk', cat: [            4      ], mod },
  { body: 'denk'/*en*/,        prep: 'an',    case: 'akk', cat: [0, 1, 2, 3, 4, 5, 6] },
  { body: 'erkenn'/*en*/,      prep: 'an',    case: 'dat', cat: [0, 1,          5, 6] },
  { body: 'frag'/*en*/,        prep: 'nach',  case: 'dat', cat: [0, 1,    3, 4, 5   ] },
  { body: 'glaub'/*en*/,       prep: 'an',    case: 'akk', cat: [      2,          6] },
  { body: 'hoff'/*en*/,        prep: 'auf',   case: 'akk', cat: [      2, 3, 4      ] },
  { body: 'kämpfen',           prep: 'um',    case: 'akk', cat: [   1,       4      ] },
  { body: 'kämpfen',           prep: 'gegen', case: 'akk', cat: [0,    2, 3         ] },
  { body: 'protestier'/*en*/,  prep: 'gegen', case: 'akk', cat: [      2, 3         ] },
  { body: 'demonstrier'/*en*/, prep: 'gegen', case: 'akk', cat: [      2, 3         ] },
  { body: 'rechn'/*en*/,       prep: 'mit',   case: 'dat', cat: [0,       3, 4      ], mod },
  { body: 'riech'/*en*/,       prep: 'nach',  case: 'dat', cat: [0                  ] },
  { body: 'schmeck'/*en*/,     prep: 'nach',  case: 'dat', cat: [0                  ] },
  { body: 'sorg'/*en*/,        prep: 'für',   case: 'akk', cat: [0                  ] },
  { body: 'such'/*en*/,        prep: 'nach',  case: 'dat', cat: [0                  ] },
  { body: 'träum'/*en*/,       prep: 'von',   case: 'dat', cat: [0                  ] },
  { body: 'wart'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                  ],  mod },
  { body: 'zweif'/*eln*/,      prep: 'an',    case: 'dat', cat: [0                  ],  mod: zweifeln },
  // ***REFLEXIVE VERBS
  { body: 'amüsier'/*en*/,     prep: 'über',  case: 'akk', cat: [0                  ], reflex },
  { body: 'ängstig'/*en*/,     prep: 'vor',   case: 'dat', cat: [0                  ], reflex },
  // { body: 'bedank'/*en*/,      prep: 'für',   case: 'akk', cat: [0                  ], reflex },
  // { body: 'bedank'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'beschäftig'/*en*/,  prep: 'mit',   case: 'dat', cat: [0                  ], reflex },
  // { body: 'beklag'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  // { body: 'beklag'/*en*/,      prep: 'über',  case: 'akk', cat: [0                  ], reflex },
  { body: 'bemüh'/*en*/,       prep: 'um',    case: 'akk', cat: [0                  ], reflex },
  { body: 'beschwer'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'bewerb'/*en*/,      prep: 'um',    case: 'akk', cat: [0                  ], reflex },
  { body: 'einig'/*en*/,       prep: 'auf',   case: 'akk', cat: [0                  ], reflex },
  { body: 'engagier'/*en*/,    prep: 'für',   case: 'akk', cat: [0                  ], reflex },
  { body: 'entschließ'/*en*/,  prep: 'zu',    case: 'dat', cat: [0                  ], reflex, mod: { st: 'ßt' } },
  { body: 'entschuldig'/*en*/, prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'erinner'/*n*/,      prep: 'an',    case: 'akk', cat: [0                  ], reflex },
  // { body: 'erkundig'/*en*/,    prep: 'nach',  case: 'dat', cat: [0                  ], reflex },
  // { body: 'erkundig'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  // { body: 'freu'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                  ], reflex },
  // { body: 'freu'/*en*/,        prep: 'über',  case: 'akk', cat: [0                  ], reflex },
  { body: 'fürcht'/*en*/,      prep: 'vor',   case: 'dat', cat: [0                  ], reflex, mod },
  { body: 'interessier'/*en*/, prep: 'für',   case: 'akk', cat: [0                  ], reflex },
  { body: 'konzentrier'/*en*/, prep: 'auf',   case: 'akk', cat: [0                  ], reflex },
  { body: 'kümmer'/*n*/,       prep: 'um',    case: 'akk', cat: [0                  ], reflex },
  { body: 'sehn'/*en*/,        prep: 'nach',  case: 'dat', cat: [0                  ], reflex },
  // { body: 'streit'/*en*/,      prep: 'um',    case: 'akk', cat: [0                  ], reflex },
  // { body: 'streit'/*en*/,      prep: 'mit',   case: 'dat', cat: [0                  ], reflex },
  { body: 'trenn'/*en*/,       prep: 'von',   case: 'dat', cat: [0                  ], reflex },
  { body: 'verlieb'/*en*/,     prep: 'in',    case: 'akk', cat: [0                  ], reflex },
  { body: 'verl'/*assen*/,     prep: 'auf',   case: 'akk', cat: [0                  ], reflex, mod: verlassen },
  { body: 'wend'/*en*/,        prep: 'an',    case: 'akk', cat: [0                  ], reflex, mod },
  { body: 'überred'/*en*/,     prep: 'zu',    case: 'dat', cat: [0                  ], reflex, mod },
  { body: 'überzeug'/*en*/,    prep: 'von',   case: 'dat', cat: [0                  ], reflex },
  { body: 'warn'/*en*/,        prep: 'vor',   case: 'dat', cat: [0                  ], reflex },
  // ***SEPARABLE VERBS
  { body: 'häng'/*en*/,        prep: 'von',   case: 'dat', cat: [0                  ], end: 'ab'   },
  { body: 'pass'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                  ], end: 'auf'  },
  { body: 'weis'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                  ], end: 'hin'  },
  { body: 'denk'/*en*/,        prep: 'über',  case: 'akk', cat: [0                  ], end: 'nach' },
  { body: 'n'/*ehmen*/,        prep: 'an',    case: 'dat', cat: [0                  ], end: 'teil', mod: teilNehmen },
  { body: 'geh'/*en*/,         prep: 'mit',   case: 'dat', cat: [0                  ], end: 'um'   },
  // ***SEPARABLE REFLEXIVE VERBS
  { body: 'reg'/*en*/,         prep: 'über',  case: 'akk', cat: [0                  ], end: 'auf', reflex },
  { body: 'kenn'/*en*/,        prep: 'mit',   case: 'dat', cat: [0                  ], end: 'aus', reflex },
  { body: 'arbeit'/*en*/,      prep: 'in',    case: 'akk', cat: [0                  ], end: 'ein', reflex, mod },
  { body: 'bereit'/*en*/,      prep: 'auf',   case: 'akk', cat: [0                  ], end: 'vor', reflex, mod },
  // ***STATIVE VERBS
  { body: 'eifersüchtig',      prep: 'auf',   case: 'akk', cat: [0                  ], stative },
  { body: 'einverstanden',     prep: 'mit',   case: 'dat', cat: [0                  ], stative },
  { body: 'erstaunt',          prep: 'über',  case: 'akk', cat: [0                  ], stative },
  { body: 'enttäuscht',        prep: 'von',   case: 'dat', cat: [0                  ], stative },
  { body: 'neidisch',          prep: 'auf',   case: 'akk', cat: [0                  ], stative },
  { body: 'stolz',             prep: 'auf',   case: 'akk', cat: [0                  ], stative },
  { body: 'zuständig',         prep: 'für',   case: 'akk', cat: [0                  ], stative },
];

const rand = (max: number) => Math.floor(Math.random() * max);

const getAdjective = (adj: string, CASE: string, gend: string) =>
  adj + (CASE === 'dat' || ['m', 'p'].includes(gend) ? 'en' : gend === 'n' ? 'es' : 'e');

const getPossesive = (possesive: string, CASE: string, gend: string) => {
  let ending = '';
  if (CASE === 'dat') {
    if (gend === 'm' || gend === 'n') ending = 'em';
    if (gend === 'w'                ) ending = 'er';
    if (gend === 'p'                ) ending = 'en';
  } else {
    if (gend === 'w' || gend === 'p') ending = 'e';
    if (gend === 'm'                ) ending = 'en';
  }

  return possesive + ending;
}

const getVerb = (verb: Verb, subject: Subject) => {
  const   modKey = subject.body === 'Ihr' ? 'Ihr' : subject.end;
  const   modEnd = verb.mod?.[modKey as keyof typeof verb.mod];
  const     body = verb.stative ? verb.body : verb.body + (modEnd ? modEnd : subject.end);
  const   refKey = ['Wir', 'Ihr'].includes(subject.body) ? subject.body : subject.end;
  const   reflex = verb.reflex?.[refKey as keyof typeof verb.reflex];
  const stateKey = ['Ich', 'Du', 'Ihr'].includes(subject.body) ? subject.body : subject.end;
  const  stative = verb.stative?.[stateKey as keyof typeof verb.stative];

  return { ...verb, body, reflex, stative };
}

const question = () => {
  const    subject = subjects[rand(subjects.length)];
  const     adverb =  adverbs[rand( adverbs.length)];
  const       verb = getVerb(verbs[rand(verbs.length)], subject);
  const  randomCat = verb.cat[rand(verb.cat.length)]
  const objectPool = objects[randomCat];
  const     object = objectPool[rand(objectPool.length)];
  const  adjective = getAdjective( adjectives[rand(adjectives.length)],  verb.case, object.gend);
  const  possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);
  const pluralDat =
    verb.case === 'dat' && object.gend === 'p' && !object.body.endsWith('n') ? 'n' : '';

  const body = [
    subject.body,
    verb.stative,
    verb.stative ? adverb : '',
    verb.body,
    verb.reflex,
    !verb.stative ? adverb : '',
    verb.prep,
    possesive,
    adjective,
    object.body + pluralDat,
    verb.end ?? ''
  ].filter(part => part).join(' ');

  return body;
};

for (let i = 0; i < 7; i++) {
  console.log(question());
}

export { subjects, objects, verbs, adverbs, adjectives, possessives };
