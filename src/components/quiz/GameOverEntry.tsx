import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HighScore from '@/models/HighScore';
import formatDate from '@/util/formatDate';
import css from './GameOverEntry.module.css';

interface ScoreProps {
     score: HighScore;
  newScore: HighScore;
     index: number;
}

const background = ['#898121', '#776f1c', '#676018', '#5d5c1c', '#4C4B16'];

export default function GameOverEntry({score, newScore, index}: ScoreProps) {
  const { date, total, solved } = score;

  return (
    <motion.li
     className={css['item']}
         style={{ background: background[index] }}
      variants={{
         hidden: { opacity: 0, x: 25 * (index % 2 === 0 ? 1 : -1) },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
    >
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
    </motion.li>
  );
}
