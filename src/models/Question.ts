import { subjects, objects, verbs, reflexes, adverbs, adjectives, possessives } from '@/data/quizItems';
import rand from '@/util/rand';

type Subject = { body: string, end: string };

type Verb = {
     body: string;
     prep: string;
     case: string;
  reflex?: boolean;
     mod?: object;
    //  mod?: { e?: string, st?: string, t?: string, en?: string };
}

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

export default class Question {
  body: string;
   ans: string;

  constructor() {
    this.body = '';
    this.ans  = '';
  }

  static random() {
    const    subject = subjects[rand(subjects.length)];
    const     object =  objects[rand( objects.length)];
    const     adverb =  adverbs[rand( adverbs.length)];
    const       verb =      getVerb(      verbs[rand(    verbs.length)],  subject);
    const  adjective = getAdjective( adjectives[rand(adjectives.length)],  verb.case, object.gend);
    const  possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);

    const body = `${subject.body} ${verb.body} ${verb.reflex} ${adverb} ___ ${possesive} ${adjective} ${object.body}`;
    return { body, ans: verb.prep };
  };
}
