// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from '@/models/User';
import HighScore from '@/models/HighScore';
import formatDate from '@/util/formatDate';
import css from './GameOver.module.css';

const background = [
  '#898121', '#776f1c', '#676018', '#5d5c1c', '#4C4B16',
];

export default function GameOver({ user }: { user: User }) {
  const { total, solved } = user;
  const newScore = new HighScore(total, solved);
  const isHighScore = newScore.isHighScore();
  newScore.save();
  const highscores = HighScore.getAll();

  return (
    <section className={css['gameover']}>
      {isHighScore && (
        <h2>
        <span>
          Neuer Highscore! <FontAwesomeIcon icon='star' /> {total}
        </span>
        <span>Beantwortete Fragen: {solved}</span>
      </h2>
      )}
      <ul>
        <h1>Ihre besten Ergebnisse</h1>
        {highscores.map(({ total, solved, date }: HighScore, index: number) => (
          <li key={date} style={{ background: background[index] }}>
            <p>
              <span>{formatDate(date)}</span>
              <span>
                {index === 0             && <FontAwesomeIcon icon='crown' />}
                {date  === newScore.date && <FontAwesomeIcon icon='face-grin-beam-sweat' />}
              </span>
            </p>
            <p>
              <span>Punktzahl</span>
              <span>{total}</span>
            </p>
            <p>
              <span>Fragen</span>
              <span>{solved}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
