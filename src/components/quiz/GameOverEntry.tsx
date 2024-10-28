import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import HighScore from '@/models/HighScore';
import formatDate from '@/util/formatDate';
import css from './GameOverEntry.module.css';

interface ScoreProps {
     score: HighScore;
  newScore: HighScore;
     index: number;
}

const DetailRow = ({ leftTxt, rightTxt }: { leftTxt: string; rightTxt: number | IconProp[] }) => {
  const marginRight = Array.isArray(rightTxt) && rightTxt.includes('face-grin-beam-sweat') ? '0.1rem' : 0;

  return (
    <p>
      <span>{leftTxt}</span>
      <span>
        {typeof rightTxt === 'number'
          ? rightTxt
          : rightTxt.map((icon) => (
              <FontAwesomeIcon key={icon as string} icon={icon} style={{ marginRight }} />
            ))}
      </span>
    </p>
  );
};

const background = ['#898121', '#776f1c', '#676018', '#5d5c1c', '#4C4B16'];

export default function GameOverEntry({score, newScore, index}: ScoreProps) {
  const { date, total, solved } = score;
  const icons = [index === 0 && 'crown', date === newScore.date && 'face-grin-beam-sweat'].filter(
    Boolean
  ) as IconProp[];

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
      <DetailRow leftTxt={formatDate(date)} rightTxt={icons} />
      <DetailRow leftTxt='Punktzahl'        rightTxt={total} />
      <DetailRow leftTxt='Fragen'           rightTxt={solved} />
    </motion.li>
  );
}
