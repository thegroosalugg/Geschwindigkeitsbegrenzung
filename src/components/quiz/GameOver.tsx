import User from '@/models/User';
import HighScore from '@/models/HighScore';
import css from './GameOver.module.css';
// import { useState } from 'react';

export default function GameOver({ user }: { user: User }) {
  const { total, solved } = user;
  new HighScore(total, solved).save();
  const highscores = HighScore.getAll();

  return (
    <section className={css['gameover']}>
      <ul>
        {highscores.map(({ total, solved, date }: HighScore) => (
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
