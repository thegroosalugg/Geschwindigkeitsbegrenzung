export default class User {
     choice:  string;
  isCorrect: boolean;
       item: boolean;
    penalty:  number;
      score:  number;
      total:  number;
   reqScore:  number;
     solved:  number;
     streak:  number;
      level:  number;
      lives:  number;

  constructor(level: number) {
    this.choice    = '';
    this.isCorrect = false;
    this.item      = false;
    this.penalty   = 1;
    this.score     = 0;
    this.total     = 0;
    this.reqScore  = 100;
    this.solved    = 0;
    this.streak    = 0;
    this.level     = level;
    this.lives     = Math.min(Math.floor(10 / level), 7); // einfash: 7, mittel: 5, schwer: 3
  }

  static setDifficulty(level: number) {
    localStorage.setItem('difficulty', JSON.stringify({ level }));
  }

  static getDifficulty() {
    return JSON.parse(localStorage['difficulty'] || '{ "level": 1 }').level;
  }

  static getScore(level: number, streak: number, penalty: number, timeRemaining: number) {
    const    divider = 500 / (level + (level - 1) * (level - 2)); // 1: 500, 2: 250, 3: 100
    const  baseScore = timeRemaining / divider; // 1: 30, 2: 40, 3: 50 max
    const multiplier = Math.min(streak * 0.1 + 0.9, 2) // 1.0 - 2.0
    return Math.round(baseScore * multiplier / penalty);
  }

  static update(user: User, choice: string, isCorrect: boolean, timeRemaining: number) {
    const { level } = user;
    let { lives, solved, streak, penalty, score, reqScore, total, item } = user;

    if (isCorrect) {
      solved += 1;
      streak += 1;
      score   = User.getScore(level, streak, penalty, timeRemaining)
      total  += score;

      if (total > reqScore) {
        item = true;
        reqScore += 100 + solved + streak + level * 3;
      }

    } else {
      score   = 0;
      streak  = 0;
      lives  -= 1;
    }

    penalty = 1;

     const updatedUser = { choice, isCorrect, item, penalty, score, total, reqScore, solved, streak, level, lives };
    return updatedUser;
  }
}
