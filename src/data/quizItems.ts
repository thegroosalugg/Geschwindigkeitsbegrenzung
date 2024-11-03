// ***SEPARABLE
// abhängen von + Dat
// aufpassen auf + Akk
// hinweisen auf + Akk
// nachdenken über + Akk
// teilnehmen an + Dat
// umgehen mit + Dat

// ***SEPARABLE && REFLEXIVE
// aufregen sich über + Akk
// auskennen sich mit + Dat
// einarbeiten sich in + Akk
// vorbereiten sich auf + Akk

// ***STATIVE
// eifersüchtig sein auf + Akk
// einverstanden sein mit + Dat
// erstaunt sein über + Akk
// enttäuscht sein von + Dat
// neidisch sein auf + Akk
// stolz sein auf + Akk
// zuständig sein für + Akk

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
  'höh', // high
  'verloren', // lost
  'schön', // beautiful
  'wichtig', // important
  'umfassend', // comprehensive
];

// prettier-ignore
const objects = [
  { body: 'Projekt',      gend: 'n' },
  { body: 'Reise',        gend: 'w' },
  { body: 'Erfahrung',    gend: 'w' },
  { body: 'Hilfe',        gend: 'w' },
  { body: 'Vorschlag',    gend: 'm' },
  { body: 'Stil',         gend: 'm' },
  { body: 'Rat',          gend: 'm' },
  { body: 'Erfolg',       gend: 'm' },
  { body: 'Besuch',       gend: 'm' },
  { body: 'Traum',        gend: 'm' },
  { body: 'Zweifel',      gend: 'm' },
  { body: 'Platz',        gend: 'm' },
  { body: 'Entscheidung', gend: 'w' },
  { body: 'Schlüssel',    gend: 'm' },
  { body: 'Parfum',       gend: 'n' },
  { body: 'Rezept',       gend: 'n' },
  { body: 'Komfort',      gend: 'm' },
  { body: 'Haus',         gend: 'n' },
  { body: 'Anruf',        gend: 'm' },
  { body: 'Wissen',       gend: 'n' },
  { body: 'Bücher',       gend: 'p' },
  { body: 'Kinder',       gend: 'p' },
  { body: 'Projekte',     gend: 'p' },
  { body: 'Erinnerungen', gend: 'p' },
  { body: 'Kollegen',     gend: 'p' }
];

type Verb = {
     body: string;
     prep: string;
     case: string;
  reflex?: boolean;
    //  mod?: { e?: string, st?: string, t?: string, en?: string };
     mod?: object;
}

const reflex = true;
const    mod = { st: 'est', t: 'et', Ihr: 'et' };
// prettier-ignore
const verbs = [
  // REGULAR VERBS
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
  { body: 'zweif'/*eln*/,      prep: 'an',    case: 'dat', mod: { e: 'le', st: 'elst', t: 'elt', en: 'eln' } },
  // REFLEXIVE VERBS
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
  { body: 'verl'/*assen*/,     prep: 'auf',   case: 'akk', reflex, mod: { e: 'asse', st: 'ässt', t: 'ässt', en: 'assen', Ihr: 'asst' } },
  { body: 'wend'/*en*/,        prep: 'an',    case: 'akk', reflex, mod },
  { body: 'überred'/*en*/,     prep: 'zu',    case: 'dat', reflex, mod },
  { body: 'überzeug'/*en*/,    prep: 'von',   case: 'dat', reflex },
  { body: 'warn'/*en*/,        prep: 'vor',   case: 'dat', reflex },
];

const reflexes = {
  e:   'mich',
  st:  'dich',
  t:   'sich',
  en:  'sich',
  Wir: 'uns',
  Ihr: 'euch',
}

const rand = (max: number) => Math.floor(Math.random() * max);

const getAdjective = (adj: string, CASE: string, gend: string) =>
  adj + (CASE === 'dat' || gend === 'm' ? 'en' : gend === 'n' ? 'es' : 'e');

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
  const modKey = subject.body === 'Ihr' ? 'Ihr' : subject.end;
  const modEnd = verb.mod?.[modKey as keyof typeof verb.mod];
  const   body = verb.body + (modEnd ? modEnd : subject.end);
  const refKey = ['Wir', 'Ihr'].includes(subject.body) ? subject.body : subject.end;
  const reflex = verb.reflex ? reflexes[refKey as keyof typeof reflexes] : '';

  return { ...verb, body, reflex };
}

const question = () => {
  const    subject = subjects[rand(subjects.length)];
  const     object =  objects[rand( objects.length)];
  const     adverb =  adverbs[rand( adverbs.length)];
  const       verb =      getVerb(      verbs[rand(    verbs.length)],  subject);
  const  adjective = getAdjective( adjectives[rand(adjectives.length)],  verb.case, object.gend);
  const  possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);

  return `${subject.body} ${verb.body} ${verb.reflex} ${adverb} ${verb.prep} ${possesive} ${adjective} ${object.body}`;
};

for (let i = 0; i < 7; i++) {
  console.log(question());
}

export { subjects, objects, verbs, reflexes, adverbs, adjectives, possessives };
