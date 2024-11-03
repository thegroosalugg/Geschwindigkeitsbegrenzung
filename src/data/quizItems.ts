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

// ***REFLEXIVE
// amüsieren sich über + Akk
// ängstigen sich vor + Dat
// bedanken sich für + Akk && bei + Dat
// beschäftigen sich mit + Dat
// beklagen sich bei + Dat && über + Akk
// bemühen sich um + Akk
// beschweren sich bei + Dat
// bewerben sich um + Akk
// einigen sich auf + Akk
// engagieren sich für + Akk
// entschließen sich zu + Dat
// entschuldigen sich bei + Dat
// erinnern sich an + Akk
// erkundigen sich nach && bei + Dat
// freuen sich auf && über + Akk
// fürchten sich vor + Dat
// interessieren sich für + Akk
// konzentrieren sich auf + Akk
// kümmern sich um + Akk
// sehnen sich nach + Dat
// streiten sich um + Akk && mit + Dat
// trennen sich von + Dat
// verlieben sich in + Akk
// verlassen sich auf + Akk
// vorbereiten sich auf + Akk
// wenden sich an + Akk
// ***REFLEXIVE AT OBJECT
// überreden sich zu + Dat
// überzeugen sich von + Dat
// warnen sich vor + Dat

// ***REGULAR
// beginnen mit + Dat
// berichten von + Dat
// bestehen aus + Dat
// bitten um + Akk
// denken an + Akk
// erkennen an + Dat
// fragen nach + Dat
// glauben an + Akk
// hoffen auf + Akk
// kämpfen für && um && gegen + Akk
// protestieren gegen + Akk
// rechnen mit + Dat
// riechen nach + Dat
// schmecken nach +	Dat
// sorgen für + Akk
// suchen nach + Dat
// traümen von + Dat
// warten auf + Akk
// zweifeln an + Dat

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

// prettier-ignore
const subjects = [
  { body: 'Ich',            end: 'e'  },
  { body: 'Du',             end: 'st' },
  { body: 'Er',             end: 't'  },
  { body: 'Sie',            end: 't'  },
  { body: 'Es',             end: 't'  },
  { body: 'Wir',            end: 'en' },
  { body: 'Ihr',            end: '-t' },
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

// prettier-ignore
const regVerbs = [
  { verb: 'beginnen',      prep: 'mit',   case: 'dat' },
  { verb: 'berichten',     prep: 'von',   case: 'dat' },
  { verb: 'bestehen',      prep: 'aus',   case: 'dat' },
  { verb: 'bitten',        prep: 'um',    case: 'akk' },
  { verb: 'denken',        prep: 'an',    case: 'akk' },
  { verb: 'erkennen',      prep: 'an',    case: 'dat' },
  { verb: 'fragen',        prep: 'nach',  case: 'dat' },
  { verb: 'glauben',       prep: 'an',    case: 'akk' },
  { verb: 'hoffen',        prep: 'auf',   case: 'akk' },
  // { verb: 'kämpfen',       prep: 'für',   case: 'akk' },
  // { verb: 'kämpfen',       prep: 'gegen', case: 'akk' },
  // { verb: 'kämpfen',       prep: 'um',    case: 'akk' },
  { verb: 'protestieren',  prep: 'gegen', case: 'akk' },
  { verb: 'rechnen',       prep: 'mit',   case: 'dat' },
  { verb: 'riechen',       prep: 'nach',  case: 'dat' },
  { verb: 'schmecken',     prep: 'nach',  case: 'dat' },
  { verb: 'sorgen',        prep: 'für',   case: 'akk' },
  { verb: 'suchen',        prep: 'nach',  case: 'dat' },
  { verb: 'träumen',       prep: 'von',   case: 'dat' },
  { verb: 'warten',        prep: 'auf',   case: 'akk' },
  { verb: 'zweifeln',      prep: 'an',    case: 'dat' },
];

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

const question = () => {
  const   subject = subjects[rand(subjects.length)];
  const    object =  objects[rand( objects.length)];
  const      verb = regVerbs[rand(regVerbs.length)];
  const    adverb =  adverbs[rand( adverbs.length)];
  const adjective = getAdjective(adjectives[rand(adjectives.length)], verb.case, object.gend);
  const possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);

  return `${subject.body} ${verb.verb} ${adverb} ${verb.prep} ${possesive} ${adjective} ${object.body}`;
};

console.log(question());

export { subjects, objects, regVerbs, adverbs, adjectives, possessives };
