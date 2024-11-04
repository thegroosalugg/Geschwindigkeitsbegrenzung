// ***CONTEXTUAL
// es geht um + Akk
// es handelt sich um + Akk
// machen sich Sorgen um + Akk
// gratulieren jemandem zu + Dat
// helfen jemandem bei + Dat
// passen zu + Dat

type Subject = { body: string, end: string };

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

const possessives = [
  'mein', 'dein', 'ihr', 'sein', 'unser', 'Ihr'
];

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
  { body: 'Anruf',        gend: 'm' },
  { body: 'Besuch',       gend: 'm' },
  { body: 'Erfolg',       gend: 'm' },
  { body: 'Komfort',      gend: 'm' },
  { body: 'Stil',         gend: 'm' },
  { body: 'Platz',        gend: 'm' },
  { body: 'Rat',          gend: 'm' },
  { body: 'Schlüssel',    gend: 'm' },
  { body: 'Traum',        gend: 'm' },
  { body: 'Vorschlag',    gend: 'm' },
  { body: 'Zweifel',      gend: 'm' },
  { body: 'Parfum',       gend: 'n' },
  { body: 'Projekt',      gend: 'n' },
  { body: 'Wissen',       gend: 'n' },
  { body: 'Erfahrung',    gend: 'w' },
  { body: 'Hilfe',        gend: 'w' },
  { body: 'Reise',        gend: 'w' },
  { body: 'Entscheidung', gend: 'w' },
  { body: 'Rezept',       gend: 'n' },
  { body: 'Haus',         gend: 'n' },
  { body: 'Erinnerungen', gend: 'p' },
  { body: 'Bücher',       gend: 'p' },
  { body: 'Kinder',       gend: 'p' },
  { body: 'Projekte',     gend: 'p' },
  { body: 'Kollegen',     gend: 'p' },
];

type Verb = {
      body: string;
      prep: string;
      case: string;
      end?: string;
  stative?: object;
   reflex?: object;
      mod?: object;
}

const     reflex = { e: 'mich', st: 'dich', t: 'sich', en: 'sich', Wir: 'uns', Ihr: 'euch' };
const    stative = { Ich: 'bin', Du: 'bist', Ihr: 'seid', t: 'ist', en: 'sind'   };
const        mod =            { st: 'est',   t: 'et',                Ihr: 'et'   };
const   zweifeln = { e: 'le',   st: 'elst',  t: 'elt',  en: 'eln'                };
const  verlassen = { e: 'asse', st: 'ässt',  t: 'ässt', en: 'assen', Ihr: 'asst' };
const teilNehmen = { e: 'ehme', st: 'immst', t: 'immt', en: 'ehmen', Ihr: 'ehmt' };
// prettier-ignore
const verbs = [
  // ***REGULAR VERBS
  { body: 'beginn'/*en*/,      prep: 'mit',   case: 'dat' },
  { body: 'bericht'/*en*/,     prep: 'von',   case: 'dat', mod },
  { body: 'besteh'/*en*/,      prep: 'aus',   case: 'dat' },
  { body: 'bitt'/*en*/,        prep: 'um',    case: 'akk', mod },
  { body: 'denk'/*en*/,        prep: 'an',    case: 'akk' },
  { body: 'erkenn'/*en*/,      prep: 'an',    case: 'dat' },
  { body: 'frag'/*en*/,        prep: 'nach',  case: 'dat' },
  { body: 'glaub'/*en*/,       prep: 'an',    case: 'akk' },
  { body: 'hoff'/*en*/,        prep: 'auf',   case: 'akk' },
  // { body: 'kämpfen',           prep: 'für',   case: 'akk' },
  // { body: 'kämpfen',           prep: 'gegen', case: 'akk' },
  // { body: 'kämpfen',           prep: 'um',    case: 'akk' },
  { body: 'protestier'/*en*/,  prep: 'gegen', case: 'akk' },
  { body: 'rechn'/*en*/,       prep: 'mit',   case: 'dat', mod },
  { body: 'riech'/*en*/,       prep: 'nach',  case: 'dat' },
  { body: 'schmeck'/*en*/,     prep: 'nach',  case: 'dat' },
  { body: 'sorg'/*en*/,        prep: 'für',   case: 'akk' },
  { body: 'such'/*en*/,        prep: 'nach',  case: 'dat' },
  { body: 'träum'/*en*/,       prep: 'von',   case: 'dat' },
  { body: 'wart'/*en*/,        prep: 'auf',   case: 'akk', mod },
  { body: 'zweif'/*eln*/,      prep: 'an',    case: 'dat', mod: zweifeln },
  // ***REFLEXIVE VERBS
  { body: 'amüsier'/*en*/,     prep: 'über',  case: 'akk', reflex },
  { body: 'ängstig'/*en*/,     prep: 'vor',   case: 'dat', reflex },
  // { body: 'bedank'/*en*/,      prep: 'für',   case: 'akk', reflex },
  // { body: 'bedank'/*en*/,      prep: 'bei',   case: 'dat', reflex },
  { body: 'beschäftig'/*en*/,  prep: 'mit',   case: 'dat', reflex },
  // { body: 'beklag'/*en*/,      prep: 'bei',   case: 'dat', reflex },
  // { body: 'beklag'/*en*/,      prep: 'über',  case: 'akk', reflex },
  { body: 'bemüh'/*en*/,       prep: 'um',    case: 'akk', reflex },
  { body: 'beschwer'/*en*/,    prep: 'bei',   case: 'dat', reflex },
  { body: 'bewerb'/*en*/,      prep: 'um',    case: 'akk', reflex },
  { body: 'einig'/*en*/,       prep: 'auf',   case: 'akk', reflex },
  { body: 'engagier'/*en*/,    prep: 'für',   case: 'akk', reflex },
  { body: 'entschließ'/*en*/,  prep: 'zu',    case: 'dat', reflex, mod: { st: 'ßt' } },
  { body: 'entschuldig'/*en*/, prep: 'bei',   case: 'dat', reflex },
  { body: 'erinner'/*n*/,      prep: 'an',    case: 'akk', reflex },
  // { body: 'erkundig'/*en*/,    prep: 'nach',  case: 'dat', reflex },
  // { body: 'erkundig'/*en*/,    prep: 'bei',   case: 'dat', reflex },
  // { body: 'freu'/*en*/,        prep: 'auf',   case: 'akk', reflex },
  // { body: 'freu'/*en*/,        prep: 'über',  case: 'akk', reflex },
  { body: 'fürcht'/*en*/,      prep: 'vor',   case: 'dat', reflex, mod },
  { body: 'interessier'/*en*/, prep: 'für',   case: 'akk', reflex },
  { body: 'konzentrier'/*en*/, prep: 'auf',   case: 'akk', reflex },
  { body: 'kümmer'/*n*/,       prep: 'um',    case: 'akk', reflex },
  { body: 'sehn'/*en*/,        prep: 'nach',  case: 'dat', reflex },
  // { body: 'streit'/*en*/,      prep: 'um',    case: 'akk', reflex },
  // { body: 'streit'/*en*/,      prep: 'mit',   case: 'dat', reflex },
  { body: 'trenn'/*en*/,       prep: 'von',   case: 'dat', reflex },
  { body: 'verlieb'/*en*/,     prep: 'in',    case: 'akk', reflex },
  { body: 'verl'/*assen*/,     prep: 'auf',   case: 'akk', reflex, mod: verlassen },
  { body: 'wend'/*en*/,        prep: 'an',    case: 'akk', reflex, mod },
  { body: 'überred'/*en*/,     prep: 'zu',    case: 'dat', reflex, mod },
  { body: 'überzeug'/*en*/,    prep: 'von',   case: 'dat', reflex },
  { body: 'warn'/*en*/,        prep: 'vor',   case: 'dat', reflex },
  // ***SEPARABLE VERBS
  { body: 'häng'/*en*/,        prep: 'von',   case: 'dat', end: 'ab' },
  { body: 'pass'/*en*/,        prep: 'auf',   case: 'akk', end: 'auf' },
  { body: 'weis'/*en*/,        prep: 'auf',   case: 'akk', end: 'hin' },
  { body: 'denk'/*en*/,        prep: 'über',  case: 'akk', end: 'nach' },
  { body: 'n'/*ehmen*/,        prep: 'an',    case: 'dat', end: 'teil', mod: teilNehmen },
  { body: 'geh'/*en*/,         prep: 'mit',   case: 'dat', end: 'um' },
  // ***SEPARABLE REFLEXIVE VERBS
  { body: 'reg'/*en*/,         prep: 'über',  case: 'akk', end: 'auf', reflex },
  { body: 'kenn'/*en*/,        prep: 'mit',   case: 'dat', end: 'aus', reflex },
  { body: 'arbeit'/*en*/,      prep: 'in',    case: 'akk', end: 'ein', reflex, mod },
  { body: 'bereit'/*en*/,      prep: 'auf',   case: 'akk', end: 'vor', reflex, mod},
  // ***STATIVE VERBS
  { body: 'eifersüchtig',      prep: 'auf',   case: 'akk', stative },
  { body: 'einverstanden',     prep: 'mit',   case: 'dat', stative },
  { body: 'erstaunt',          prep: 'über',  case: 'akk', stative },
  { body: 'enttäuscht',        prep: 'von',   case: 'dat', stative },
  { body: 'neidisch',          prep: 'auf',   case: 'akk', stative },
  { body: 'stolz',             prep: 'auf',   case: 'akk', stative },
  { body: 'zuständig',         prep: 'für',   case: 'akk', stative }
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
  const     object =  objects[rand( objects.length)];
  const     adverb =  adverbs[rand( adverbs.length)];
  const       verb =      getVerb(      verbs[rand(    verbs.length)],  subject);
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
