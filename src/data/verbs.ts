export type Verb = {
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
// 1: Sight/Sound/Touch
// 2: Theoretical/Abstract
// 3: Events
// 4: Acts/Services
// 5: Spaces/Places
// 6: Characteristics
// 7: Materials
// 8: Taste/Smell

// prettier-ignore
export const verbs = [
  // ***REGULAR VERBS
  { body: 'beginn'/*en*/,      prep: 'mit',   case: 'dat', cat: [    2,3,4        ] },
  { body: 'bericht'/*en*/,     prep: 'von',   case: 'dat', cat: [0,  2            ], mod },
  { body: 'besteh'/*en*/,      prep: 'aus',   case: 'dat', cat: [              7  ] },
  { body: 'bitt'/*en*/,        prep: 'um',    case: 'akk', cat: [        4        ], mod },
  { body: 'denk'/*en*/,        prep: 'an',    case: 'akk', cat: [0,1,2,3,4,5,6,7,8] },
  { body: 'erkenn'/*en*/,      prep: 'an',    case: 'dat', cat: [0,1,      5,6    ] },
  { body: 'frag'/*en*/,        prep: 'nach',  case: 'dat', cat: [0,1,  3,4,5      ] },
  { body: 'glaub'/*en*/,       prep: 'an',    case: 'akk', cat: [    2,      6    ] },
  { body: 'hoff'/*en*/,        prep: 'auf',   case: 'akk', cat: [    2,3,4        ] },
  { body: 'kämpf'/*en*/,       prep: 'um',    case: 'akk', cat: [  1,    4        ] },
  { body: 'kämpf'/*en*/,       prep: 'gegen', case: 'akk', cat: [0,  2,3          ] },
  { body: 'protestier'/*en*/,  prep: 'gegen', case: 'akk', cat: [    2,3          ] },
  { body: 'demonstrier'/*en*/, prep: 'gegen', case: 'akk', cat: [    2,3          ] },
  { body: 'rechn'/*en*/,       prep: 'mit',   case: 'dat', cat: [0,    3,4        ], mod },
  { body: 'riech'/*en*/,       prep: 'nach',  case: 'dat', cat: [0                ] },
  { body: 'schmeck'/*en*/,     prep: 'nach',  case: 'dat', cat: [0                ] },
  { body: 'sorg'/*en*/,        prep: 'für',   case: 'akk', cat: [0                ] },
  { body: 'such'/*en*/,        prep: 'nach',  case: 'dat', cat: [0                ] },
  { body: 'träum'/*en*/,       prep: 'von',   case: 'dat', cat: [0                ] },
  { body: 'wart'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                ],  mod },
  { body: 'zweif'/*eln*/,      prep: 'an',    case: 'dat', cat: [0                ],  mod: zweifeln },
  // ***REFLEXIVE VERBS
  { body: 'amüsier'/*en*/,     prep: 'über',  case: 'akk', cat: [0                ], reflex },
  { body: 'ängstig'/*en*/,     prep: 'vor',   case: 'dat', cat: [0                ], reflex },
  // { body: 'bedank'/*en*/,      prep: 'für',   case: 'akk', cat: [0                ], reflex },
  // { body: 'bedank'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                ], reflex },
  { body: 'beschäftig'/*en*/,  prep: 'mit',   case: 'dat', cat: [0                ], reflex },
  // { body: 'beklag'/*en*/,      prep: 'bei',   case: 'dat', cat: [0                ], reflex },
  // { body: 'beklag'/*en*/,      prep: 'über',  case: 'akk', cat: [0                ], reflex },
  { body: 'bemüh'/*en*/,       prep: 'um',    case: 'akk', cat: [0                ], reflex },
  { body: 'beschwer'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                ], reflex },
  { body: 'bewerb'/*en*/,      prep: 'um',    case: 'akk', cat: [0                ], reflex },
  { body: 'einig'/*en*/,       prep: 'auf',   case: 'akk', cat: [0                ], reflex },
  { body: 'engagier'/*en*/,    prep: 'für',   case: 'akk', cat: [0                ], reflex },
  { body: 'entschließ'/*en*/,  prep: 'zu',    case: 'dat', cat: [0                ], reflex, mod: { st: 'ßt' } },
  { body: 'entschuldig'/*en*/, prep: 'bei',   case: 'dat', cat: [0                ], reflex },
  { body: 'erinner'/*n*/,      prep: 'an',    case: 'akk', cat: [0                ], reflex },
  // { body: 'erkundig'/*en*/,    prep: 'nach',  case: 'dat', cat: [0                ], reflex },
  // { body: 'erkundig'/*en*/,    prep: 'bei',   case: 'dat', cat: [0                ], reflex },
  // { body: 'freu'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                ], reflex },
  // { body: 'freu'/*en*/,        prep: 'über',  case: 'akk', cat: [0                ], reflex },
  { body: 'fürcht'/*en*/,      prep: 'vor',   case: 'dat', cat: [0                ], reflex, mod },
  { body: 'interessier'/*en*/, prep: 'für',   case: 'akk', cat: [0                ], reflex },
  { body: 'konzentrier'/*en*/, prep: 'auf',   case: 'akk', cat: [0                ], reflex },
  { body: 'kümmer'/*n*/,       prep: 'um',    case: 'akk', cat: [0                ], reflex },
  { body: 'sehn'/*en*/,        prep: 'nach',  case: 'dat', cat: [0                ], reflex },
  // { body: 'streit'/*en*/,      prep: 'um',    case: 'akk', cat: [0                ], reflex },
  // { body: 'streit'/*en*/,      prep: 'mit',   case: 'dat', cat: [0                ], reflex },
  { body: 'trenn'/*en*/,       prep: 'von',   case: 'dat', cat: [0                ], reflex },
  { body: 'verlieb'/*en*/,     prep: 'in',    case: 'akk', cat: [0                ], reflex },
  { body: 'verl'/*assen*/,     prep: 'auf',   case: 'akk', cat: [0                ], reflex, mod: verlassen },
  { body: 'wend'/*en*/,        prep: 'an',    case: 'akk', cat: [0                ], reflex, mod },
  { body: 'überred'/*en*/,     prep: 'zu',    case: 'dat', cat: [0                ], reflex, mod },
  { body: 'überzeug'/*en*/,    prep: 'von',   case: 'dat', cat: [0                ], reflex },
  { body: 'warn'/*en*/,        prep: 'vor',   case: 'dat', cat: [0                ], reflex },
  // ***SEPARABLE VERBS
  { body: 'häng'/*en*/,        prep: 'von',   case: 'dat', cat: [0                ], end: 'ab'   },
  { body: 'pass'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                ], end: 'auf'  },
  { body: 'weis'/*en*/,        prep: 'auf',   case: 'akk', cat: [0                ], end: 'hin'  },
  { body: 'denk'/*en*/,        prep: 'über',  case: 'akk', cat: [0                ], end: 'nach' },
  { body: 'n'/*ehmen*/,        prep: 'an',    case: 'dat', cat: [0                ], end: 'teil', mod: teilNehmen },
  { body: 'geh'/*en*/,         prep: 'mit',   case: 'dat', cat: [0                ], end: 'um'   },
  // ***SEPARABLE REFLEXIVE VERBS
  { body: 'reg'/*en*/,         prep: 'über',  case: 'akk', cat: [0                ], end: 'auf', reflex },
  { body: 'kenn'/*en*/,        prep: 'mit',   case: 'dat', cat: [0                ], end: 'aus', reflex },
  { body: 'arbeit'/*en*/,      prep: 'in',    case: 'akk', cat: [0                ], end: 'ein', reflex, mod },
  { body: 'bereit'/*en*/,      prep: 'auf',   case: 'akk', cat: [0                ], end: 'vor', reflex, mod },
  // ***STATIVE VERBS
  { body: 'eifersüchtig',      prep: 'auf',   case: 'akk', cat: [0                ], stative },
  { body: 'einverstanden',     prep: 'mit',   case: 'dat', cat: [0                ], stative },
  { body: 'erstaunt',          prep: 'über',  case: 'akk', cat: [0                ], stative },
  { body: 'enttäuscht',        prep: 'von',   case: 'dat', cat: [0                ], stative },
  { body: 'neidisch',          prep: 'auf',   case: 'akk', cat: [0                ], stative },
  { body: 'stolz',             prep: 'auf',   case: 'akk', cat: [0                ], stative },
  { body: 'zuständig',         prep: 'für',   case: 'akk', cat: [0                ], stative },
];
