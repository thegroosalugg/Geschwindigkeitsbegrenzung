import { Level } from "@/components/settings/SelectButton";

export default class User {
     choice:  string;
  isCorrect: boolean;
       item: boolean;
      score:  number;
      total:  number;
     solved:  number;
     streak:  number;
      level:  number;
      lives:  number;

 constructor(level: number) {
   this.choice    = '';
   this.isCorrect = false;
   this.item      = false;
   this.score     = 0;
   this.total     = 0;
   this.solved    = 0;
   this.streak    = 0;
   this.level     = level;
   this.lives     = 20 - (5 * level); // einfash: 15, mittel: 10, schwer: 5
 }

 static setDifficulty(level: Level, value: number) {
  localStorage.setItem('difficulty', JSON.stringify({ level, value }));
 }

 static getDifficulty() {
  return JSON.parse(localStorage['difficulty'] || '{ "level": "einfach", "value": 1 }');
 }
}
