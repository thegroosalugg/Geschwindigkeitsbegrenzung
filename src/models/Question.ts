import { subjects, objects, verbs, adverbs, adjectives, possessives, getAdjective, getPossesive, getVerb } from '@/data/quizItems';
import rand from '@/util/rand';

export default class Question {
  body: string;
   ans: string;

  constructor() {
    this.body = '';
    this.ans  = '';
  }

  static random() {
    const    subject = subjects[rand(subjects.length)];
    const     adverb =  adverbs[rand( adverbs.length)];
    const       verb = getVerb(verbs[rand(verbs.length)], subject);
    const  randomCat = verb.cat[rand(verb.cat.length)]
    const objectPool = objects[randomCat];
    const     object = objectPool[rand(objectPool.length)];
    const  adjective = getAdjective( adjectives[rand(adjectives.length)], verb.case, object.gend);
    const  possesive = getPossesive(possessives[rand(possessives.length)], verb.case, object.gend);
    const  pluralDat =
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
