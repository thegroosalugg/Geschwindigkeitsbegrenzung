import { subjects, adverbs, getAdjective, getPossesive, getVerb, getObject, rand } from '@/data/quizItems';

export default class Question {
  body: string;
   ans: string;

  constructor() {
    this.body = '';
    this.ans  = '';
  }

  static random() {
    const   subject = subjects[rand(subjects.length)];
    const    adverb =  adverbs[rand( adverbs.length)];
    const      verb = getVerb(subject);
    const    object = getObject(verb.cat);
    const adjective = getAdjective(verb.case, object.gend);
    const possesive = getPossesive(verb.case, object.gend);
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
