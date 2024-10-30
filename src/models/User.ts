export default class User {
     choice:  string;
  isCorrect: boolean;
      score:  number;
      total:  number;
     solved:  number;
     streak:  number;
      lives:  number;
       item: boolean;

 constructor(lives: number) {
   this.choice    = '';
   this.isCorrect = false;
   this.score     = 0;
   this.total     = 0;
   this.solved    = 0;
   this.streak    = 0;
   this.lives     = lives;
   this.item      = false;
 }
}
