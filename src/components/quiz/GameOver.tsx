import User from '@/model/User';
import css from './GameOver.module.css';
// import { useState } from 'react';

interface Score {
    date: string;
  solved: number;
   total: number;
}

export default function GameOver({ user }: { user: User }) {
  const { total, solved } = user;
  const scoreData = JSON.parse(localStorage['high-score'] || '[]');
  scoreData.push({ total, solved, date: new Date().toISOString() });
  scoreData.sort((a: Score, b: Score) =>
    b.total  - a.total  ||
    a.solved - b.solved ||
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (scoreData.length > 5) {
    scoreData.splice(5);
  }

  localStorage.setItem('high-score', JSON.stringify(scoreData))

  return (
    <section className={css['gameover']}>
      <ul>
        {scoreData.map(({ total, solved, date }: Score) => (
          <li key={date}>
            <p>{total}</p>
            <p>{solved}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
