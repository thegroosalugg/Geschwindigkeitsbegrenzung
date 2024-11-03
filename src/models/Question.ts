import { subjects, objects, regVerbs, adverbs, adjectives, possessives } from '@/data/quizItems';
import rand from '@/util/rand';

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
    const       verb = regVerbs[rand(regVerbs.length)];
    const     adverb =  adverbs[rand( adverbs.length)];
    const  adjective = getAdjective( adjectives[rand(adjectives.length)],  verb.case, object.gend);
    const  possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);
    const     modEnd = verb.mod?.[subject.end as keyof typeof verb.mod]
    const modifyVerb = verb.body + (modEnd ? modEnd : subject.end);

    const body = `${subject.body} ${modifyVerb} ${adverb} ___ ${possesive} ${adjective} ${object.body}`;
    return { body, ans: verb.prep };
  };
}
