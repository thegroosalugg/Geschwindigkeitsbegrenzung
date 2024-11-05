const     reflex = {   e: 'mich', st: 'dich',  t: 'sich', en: 'sich',  Ihr: 'euch', Wir: 'uns' };
const    stative = { Ich: 'bin',  Du: 'bist',  t: 'ist',  en: 'sind',  Ihr: 'seid' };
const        mod = {              st: 'est',   t: 'et',                Ihr: 'et'   };
const   zweifeln = {   e: 'le',   st: 'elst',  t: 'elt',  en: 'eln'                };
const  verlassen = {   e: 'asse', st: 'ässt',  t: 'ässt', en: 'assen', Ihr: 'asst' };
const teilNehmen = {   e: 'ehme', st: 'immst', t: 'immt', en: 'ehmen', Ihr: 'ehmt' };

// 0: Individuals
// 1: Sight/Sound/Touch
// 2: Taste/Smell
// 3: Theoretical/Abstract
// 4: Characteristics
// 5: Acts/Services
// 6: Activities/Hobbies
// 7: Spaces/Places
// 8: Events
// 9: Materials

// prettier-ignore
export const verbs = [
  // ***REGULAR VERBS
  { body: 'beginn'/*en*/,      prep: 'mit',   case: 'dat', cat: [            6,  8  ] },
  { body: 'bericht'/*en*/,     prep: 'von',   case: 'dat', cat: [0,    3,4,5,6,7,8  ], mod },
  { body: 'besteh'/*en*/,      prep: 'aus',   case: 'dat', cat: [      3,          9] },
  { body: 'bitt'/*en*/,        prep: 'um',    case: 'akk', cat: [0,    3,4,5,  7,8  ], mod },
  { body: 'denk'/*en*/,        prep: 'an',    case: 'akk', cat: [0,    3,4,5,6,7,8  ] },
  { body: 'erkenn'/*en*/,      prep: 'an',    case: 'dat', cat: [0,      4,  7      ] },
  { body: 'frag'/*en*/,        prep: 'nach',  case: 'dat', cat: [0,    3,4,5,6,7,8  ] },
  { body: 'glaub'/*en*/,       prep: 'an',    case: 'akk', cat: [0,    3,4,  6,  8  ] },
  { body: 'hoff'/*en*/,        prep: 'auf',   case: 'akk', cat: [0,    3,4,5,6,7,8  ] },
  { body: 'kämpf'/*en*/,       prep: 'um',    case: 'akk', cat: [          5,    8  ] },
  { body: 'kämpf'/*en*/,       prep: 'gegen', case: 'akk', cat: [0,    3,4          ] },
  { body: 'protestier'/*en*/,  prep: 'gegen', case: 'akk', cat: [0,    3,4          ] },
  { body: 'demonstrier'/*en*/, prep: 'gegen', case: 'akk', cat: [0,    3,4          ] },
  { body: 'rechn'/*en*/,       prep: 'mit',   case: 'dat', cat: [0,    3,4,5,    8  ], mod },
  { body: 'riech'/*en*/,       prep: 'nach',  case: 'dat', cat: [    2,            9] },
  { body: 'schmeck'/*en*/,     prep: 'nach',  case: 'dat', cat: [    2,            9] },
  { body: 'sorg'/*en*/,        prep: 'für',   case: 'akk', cat: [0,    3,4,5,    8  ] },
  { body: 'such'/*en*/,        prep: 'nach',  case: 'dat', cat: [0,1,2,3,4,5,6,7,8,9] },
  { body: 'träum'/*en*/,       prep: 'von',   case: 'dat', cat: [0,1,2,3,4,5,6,7,8,9] },
  { body: 'wart'/*en*/,        prep: 'auf',   case: 'akk', cat: [0,1,2,3,4,5,    8  ], mod },
  { body: 'zweif'/*eln*/,      prep: 'an',    case: 'dat', cat: [0,    3,4,5        ], mod: zweifeln },
  // ***REFLEXIVE VERBS
  { body: 'amüsier'/*en*/,     prep: 'über',  case: 'akk', cat: [0,1,2,3,4,5,6,7,8  ], reflex },
  { body: 'ängstig'/*en*/,     prep: 'vor',   case: 'dat', cat: [0,1,  3,4,5,  7,8  ], reflex },
  { body: 'bedank'/*en*/,      prep: 'für',   case: 'akk', cat: [  1,2,3,4,5,  7,8,9], reflex },
  { body: 'bedank'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'beschäftig'/*en*/,  prep: 'mit',   case: 'dat', cat: [0,1,  3,  5,6,  8  ], reflex },
  { body: 'beklag'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'beklag'/*en*/,      prep: 'über',  case: 'akk', cat: [  1,2,3,4,5,6,7,8  ], reflex },
  { body: 'bemüh'/*en*/,       prep: 'um',    case: 'akk', cat: [      3,4,5,    8  ], reflex },
  { body: 'beschwer'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'beschwer'/*en*/,    prep: 'über',  case: 'akk', cat: [  1,2,3,4,5,6,7,8  ], reflex },
  { body: 'bewerb'/*en*/,      prep: 'um',    case: 'akk', cat: [          5,       ], reflex },
  { body: 'einig'/*en*/,       prep: 'auf',   case: 'akk', cat: [      3,  5,  7,8  ], reflex },
  { body: 'engagier'/*en*/,    prep: 'für',   case: 'akk', cat: [0,1,  3,4,5,6,  8  ], reflex },
  { body: 'entschließ'/*en*/,  prep: 'zu',    case: 'dat', cat: [      3,  5,6,7,8  ], reflex, mod: { st: 'ßt' } },
  { body: 'entschuldig'/*en*/, prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'erinner'/*n*/,      prep: 'an',    case: 'akk', cat: [0,1,2,3,4,5,6,7,8  ], reflex },
  { body: 'erkundig'/*en*/,    prep: 'nach',  case: 'dat', cat: [  1,2,3,4,5,6,7,8,9], reflex },
  { body: 'erkundig'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                  ], reflex },
  { body: 'freu'/*en*/,        prep: 'auf',   case: 'akk', cat: [            6,  8  ], reflex },
  { body: 'freu'/*en*/,        prep: 'über',  case: 'akk', cat: [      3,  5        ], reflex },
  { body: 'fürcht'/*en*/,      prep: 'vor',   case: 'dat', cat: [0,1,  3,4,5,  7,8  ], reflex, mod },
  { body: 'interessier'/*en*/, prep: 'für',   case: 'akk', cat: [  1,2,3,  5,6,7,8  ], reflex },
  { body: 'konzentrier'/*en*/, prep: 'auf',   case: 'akk', cat: [      3,    6,  8  ], reflex },
  { body: 'kümmer'/*n*/,       prep: 'um',    case: 'akk', cat: [0,    3,  5,    8  ], reflex },
  { body: 'sehn'/*en*/,        prep: 'nach',  case: 'dat', cat: [0,1,2,3,4,5,6,7,8,9], reflex },
  { body: 'streit'/*en*/,      prep: 'um',    case: 'akk', cat: [      3,  5        ], reflex, mod },
  { body: 'streit'/*en*/,      prep: 'mit',   case: 'dat', cat: [0                  ], reflex, mod },
  { body: 'trenn'/*en*/,       prep: 'von',   case: 'dat', cat: [0,1,2,3,  5,6,7,8  ], reflex },
  { body: 'verlieb'/*en*/,     prep: 'in',    case: 'akk', cat: [0,1,        6,7    ], reflex },
  { body: 'verl'/*assen*/,     prep: 'auf',   case: 'akk', cat: [0,    3,4,5,    8  ], reflex, mod: verlassen },
  { body: 'wend'/*en*/,        prep: 'an',    case: 'akk', cat: [0,        5        ], reflex, mod },
  { body: 'überred'/*en*/,     prep: 'zu',    case: 'dat', cat: [      3,  5,6,  8  ], reflex, mod },
  { body: 'überzeug'/*en*/,    prep: 'von',   case: 'dat', cat: [0,    3,4,5,    8  ], reflex },
  { body: 'warn'/*en*/,        prep: 'vor',   case: 'dat', cat: [0,1,2,3,4,5,6,7,8,9], reflex },
  // ***SEPARABLE VERBS
  { body: 'häng'/*en*/,        prep: 'von',   case: 'dat', cat: [0,    3,4,5,  7,8,9], end: 'ab'   },
  { body: 'pass'/*en*/,        prep: 'auf',   case: 'akk', cat: [0,1,  3,  5,  7,8,9], end: 'auf'  },
  { body: 'weis'/*en*/,        prep: 'auf',   case: 'akk', cat: [0,1,2,3,4,5,6,7,8,9], end: 'hin'  },
  { body: 'denk'/*en*/,        prep: 'über',  case: 'akk', cat: [0,1,2,3,4,5,6,7,8  ], end: 'nach' },
  { body: 'n'/*ehmen*/,        prep: 'an',    case: 'dat', cat: [      3,  5,6,  8  ], end: 'teil', mod: teilNehmen },
  { body: 'geh'/*en*/,         prep: 'mit',   case: 'dat', cat: [0,1,  3,  5,6,  8  ], end: 'um'   },
  // ***SEPARABLE REFLEXIVE VERBS
  { body: 'reg'/*en*/,         prep: 'über',  case: 'akk', cat: [0,1,  3,  5,6,  8  ], end: 'auf', reflex },
  { body: 'kenn'/*en*/,        prep: 'mit',   case: 'dat', cat: [0,1,2,      6,7    ], end: 'aus', reflex },
  { body: 'arbeit'/*en*/,      prep: 'in',    case: 'akk', cat: [  1,2,3,    6,7    ], end: 'ein', reflex, mod },
  { body: 'bereit'/*en*/,      prep: 'auf',   case: 'akk', cat: [            6,  8  ], end: 'vor', reflex, mod },
  // ***STATIVE VERBS
  { body: 'eifersüchtig',      prep: 'auf',   case: 'akk', cat: [0,1,  3,4          ], stative },
  { body: 'einverstanden',     prep: 'mit',   case: 'dat', cat: [0,    3,           ], stative },
  { body: 'erstaunt',          prep: 'über',  case: 'akk', cat: [0,1,  3,4,    7,8  ], stative },
  { body: 'enttäuscht',        prep: 'von',   case: 'dat', cat: [0,1,2,3,4,    7,8  ], stative },
  { body: 'neidisch',          prep: 'auf',   case: 'akk', cat: [0,1,  3,4          ], stative },
  { body: 'stolz',             prep: 'auf',   case: 'akk', cat: [0,1,  3,4,  6,7    ], stative },
  { body: 'zuständig',         prep: 'für',   case: 'akk', cat: [0,    3,  5,6,7,8  ], stative },
];
