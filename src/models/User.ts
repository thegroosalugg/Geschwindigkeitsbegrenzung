export default class User {
     choice:  string;
  isCorrect: boolean;
      score:  number;
      total:  number;
     solved:  number;
      lives:  number;

 constructor(lives: number) {
   this.choice    = '';
   this.isCorrect = false;
   this.score     = 0;
   this.total     = 0;
   this.solved    = 0;
   this.lives     = lives;
 }
}
