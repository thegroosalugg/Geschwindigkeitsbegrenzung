export default class User {
     choice: string;
  isCorrect: boolean;
      score: number;
     solved: number;
     missed: number;

 constructor() {
   this.choice    = '';
   this.isCorrect = false;
   this.score     = 0;
   this.solved    = 0;
   this.missed    = 0;
 }
}
