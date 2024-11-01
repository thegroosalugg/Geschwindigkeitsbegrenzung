import { quizItems } from '@/data/quizItems';
import randomIndex from '@/util/rand';

let quizPool = [...quizItems];
export default class Question {
    id: string;
  body: string;
   ans: string;
   eng: string;
    ru: string;

  constructor() {
    this.id   = '';
    this.body = '';
    this.ans  = '';
    this.eng  = '';
    this.ru   = '';
  }

  static random() {
    if (quizPool.length === 0) {
      quizPool = [...quizItems];
    }
    return quizPool.splice(randomIndex(quizPool.length), 1)[0];
  }

  static log() {
   console.log('QUIZ ITEMS', quizItems.length, 'QUIZ POOL', quizPool.length); // *logData
  }
}
