import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { isMobile } from 'react-device-detect';
import HighScore from '@/models/HighScore';
import formatDate from '@/util/formatDate';
import css from './GameOverEntry.module.css';

const images = { 1: 'uter', 2: 'nelson', 3: 'ranier'};

interface ScoreProps {
     score: HighScore;
  newScore: HighScore;
     index: number;
}

const DetailRow = ({ title, info, image }: { title: string; info: number | IconProp[], image?: string }) => {
  const marginRight = Array.isArray(info) && info.includes('face-grin-beam-sweat') ? '0.1rem' : 0;

  return (
    <p className={css['detail-row']}>
      <span>
        {image &&  <img src={`/${image}.png`} alt={image} className={css[image]} />}
        {title}
      </span>
      <span>
        {typeof info === 'number'
          ? info
          : info.map((icon) => (
              <FontAwesomeIcon key={icon as string} icon={icon} style={{ marginRight }} />
            ))}
      </span>
    </p>
  );
};

export default function GameOverEntry({score, newScore, index}: ScoreProps) {
  const { date, total, solved, level } = score;
  const icons = [index === 0 && 'crown', date === newScore.date && 'face-grin-beam-sweat'].filter(
    Boolean
  ) as IconProp[];
  const   direction = index % 2 === 0 ? -1 : 1;
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  const x = !(isMobile && isLandscape) ? [ 25 * direction, 0] : 0;
  const y =   isMobile && isLandscape  ? [-20,             0] : 0;
  const background = `hsl(55, 61%, ${33 - index * 4}%)`; // olive: gets darker per index
  const      image = images[level as keyof typeof images];

  return (
    <motion.li
       className={css['item']}
        variants={{ animate: { background, opacity: [0, 1], x, y } }}
      transition={{ duration: 0.6, ease: 'easeIn' }}
    >
      <DetailRow title={formatDate(date)} info={icons} image={image} />
      <DetailRow title='Punktzahl'        info={total} />
      <DetailRow title='Fragen'           info={solved} />
    </motion.li>
  );
}
