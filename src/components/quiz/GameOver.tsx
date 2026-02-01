import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDebounceRef from '@/hooks/useDebounceRef';
import User from '@/models/User';
import Timer from '@/models/Timer';
import HighScore from '@/models/HighScore';
import GameOverEntry from './GameOverEntry';
import PlayButton from '../ui/PlayButton';
import css from './GameOver.module.css';

export default function GameOver({ user, timer }: { user: User, timer: Timer }) {
  const {     throttleRefFn    } = useDebounceRef();
  const { total, solved, level } = user;
  const      newScore = new HighScore(total, solved, level);
  const   isHighScore = newScore.isHighScore();
             newScore.save();
  const    highscores = HighScore.getAll();
  const hasHighScores = highscores.length > 0;
  const          ease = 'easeIn';
  const      duration = 0.5;

  return (
    <>
      <motion.h1
        className={css['results-header']}
          initial={{ opacity: 0 }}
          animate={{
             originY: 1,
             opacity: 1,
              scaleY: [0, 1],
                   x: [-30, 0],
               color: `var(--${!total || isHighScore ? 'white' : 'black'})`,
          background: `var(--${!total ? 'danger' : isHighScore ? 'violet' : 'gray'})`,
          transition: { duration }
        }}
      >
        {!total ? (
          'Sie haben null Punkte erreicht'
        ) : (
          <>
            <span>
              {isHighScore ? (
                <>
                  Neuer Highscore! <FontAwesomeIcon icon='star' /> {total}
                </>
              ) : (
                'Game Over!'
              )}
            </span>
            <span>
              {isHighScore
                ? `Beantwortete Fragen: ${solved}`
                : `Punkte: ${total}, Fragen: ${solved}`}
            </span>
          </>
        )}
      </motion.h1>
      <motion.h2
        className={css['scores-header']}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1], transition: { ease, duration, delay: 0.2 } }}
      >
        {hasHighScores ? 'Ihre besten Ergebnisse' : 'Hier ist nichts zu finden'}
      </motion.h2>
      <motion.ul
         className={css['scores-list']}
          variants={{ hidden: { opacity: 0 }, animate: { opacity: 1 } }}
           initial='hidden'
           animate='animate'
        transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
      >
        {hasHighScores ? (
          highscores.map((score: HighScore, index: number) => (
            <GameOverEntry key={score.date} {...{ score, newScore, index }} />
          ))
        ) : (
          <motion.img
                 src='/mailbox.webp'
                 alt='empty mailbox'
             loading='lazy'
            variants={{ animate: { opacity: [0, 1], transition: { ease, duration } } }}
          />
        )}
      </motion.ul>
      <PlayButton
           onClick={() => throttleRefFn(timer.replay, 1000)}
           initial={{ opacity: 0 }}
           animate={{
               opacity: [  0, 1],
                     y: [-20, 0],
            transition: { ease, duration, delay: 0.4 + highscores.length * 0.2 },
          }}
      >
        Replay
      </PlayButton>
    </>
  );
}
