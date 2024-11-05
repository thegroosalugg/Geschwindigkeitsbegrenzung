// ***CONTEXTUAL
// es geht um + Akk
// es handelt sich um + Akk
// machen sich Sorgen um + Akk
// gratulieren jemandem zu + Dat
// helfen jemandem bei + Dat
// passen zu + Dat

import { adjectives } from "./adjectives";
import { adverbs } from "./adverbs";
import { objects } from "./objects";
import { subjects, Subject } from "./subjects";
import { verbs, Verb } from "./verbs";

const rand = (max: number) => Math.floor(Math.random() * max);

const getAdjective = (adj: string, CASE: string, gend: string) =>
  adj + (CASE === 'dat' || ['m', 'p'].includes(gend) ? 'en' : gend === 'n' ? 'es' : 'e');

const possessives = ['mein', 'dein', 'ihr', 'sein', 'unser', 'Ihr'];
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
  const     adverb =  adverbs[rand( adverbs.length)];
  const       verb = getVerb(verbs[rand(verbs.length)], subject);
  const  randomCat = verb.cat[rand(verb.cat.length)]
  const objectPool = objects[randomCat];
  const     object = objectPool[rand(objectPool.length)];
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

export { subjects, objects, verbs, adverbs, adjectives, possessives, getAdjective, getPossesive, getVerb };
