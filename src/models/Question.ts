import { subjects, objects, verbs, adverbs, adjectives, possessives } from '@/data/quizItems';
import rand from '@/util/rand';

type Subject = { body: string; end: string };

type Verb = {
      body: string;
      prep: string;
      case: string;
      end?: string;
  stative?: object;
   reflex?: object;
      mod?: object;
};
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

export default class Question {
  body: string;
   ans: string;

  constructor() {
    this.body = '';
    this.ans  = '';
  }

  static random() {
    const   subject = subjects[rand(subjects.length)];
    const    object =  objects[rand( objects.length)];
    const    adverb =  adverbs[rand( adverbs.length)];
    const      verb = getVerb(verbs[rand(verbs.length)], subject);
    const adjective = getAdjective( adjectives[rand(adjectives.length)], verb.case, object.gend);
    const possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);
    const pluralDat =
      verb.case === 'dat' && object.gend === 'p' && !object.body.endsWith('n') ? 'n' : '';

    const body = [
      subject.body,
      verb.stative,
      verb.stative ? adverb : '',
      verb.body,
      verb.reflex,
      !verb.stative ? adverb : '',
      '___',
      possesive,
      adjective,
      object.body + pluralDat,
      verb.end ?? '',
    ].filter((part) => part).join(' ');

    return { body, ans: verb.prep };
  };
}
