export default class HighScore {
    date: string;
  solved: number;
   total: number;

  constructor(total: number, solved: number) {
    this.date   = new Date().toISOString();
    this.total  = total;
    this.solved = solved;
  }

  static getAll() {
    return JSON.parse(localStorage['high-score'] || '[]');
  }

  save() {
    if (this.total === 0) return;
    const scoreData = HighScore.getAll();
    scoreData.push(this);
    scoreData.sort(
      (a: HighScore, b: HighScore) =>
        b.total  - a.total  ||
        a.solved - b.solved ||
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (scoreData.length > 5) {
      scoreData.splice(5);
    }

    localStorage.setItem('high-score', JSON.stringify(scoreData));
  }

  isHighScore() {
    if (this.total === 0) return false;
    const scoreData = HighScore.getAll();
    for (const score of scoreData) {
      if (this.date === score.date) continue; // Skip self-comparison
      if (this.total < score.total || (this.total === score.total && this.solved >= score.solved)) {
        return false;
      }
    }
    return true;
  }
}
