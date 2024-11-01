import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isMobile } from 'react-device-detect';
import useDebounceRef from '@/hooks/useDebounceRef';
import User from '@/models/User';
import Timer from '@/models/Timer';
import HighScore from '@/models/HighScore';
import GameOverEntry from './GameOverEntry';
import css from './GameOver.module.css';

export default function GameOver({ user, timer }: { user: User, timer: Timer }) {
  const {     throttleRefFn    } = useDebounceRef();
  const { total, solved, level } = user;
  const      newScore = new HighScore(total, solved, level);
  const   isHighScore = newScore.isHighScore();
             newScore.save();
  const    highscores = HighScore.getAll();
  const hasHighScores = highscores.length > 0;

  return (
    <motion.section className={css['gameover']} exit={{ opacity: 0, y: 100, transition: { duration: 0.5 }}}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{
             originY: 1,
             opacity: 1,
              scaleY: [0, 1],
                   x: [-30, 0],
               color: !total || isHighScore ? '#E6E6E6' : '#000',
          background: `linear-gradient(to right, ${
            !total ? '#CB6040, #ab5236' : isHighScore ? '#7E60BF, #E4B1F0' : '#EDDFE0, #B7B7B7'
          })`,
          transition: { duration: 0.6 }
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
              {isHighScore ? (
                `Beantwortete Fragen: ${solved}`
              ) : (
                `Punkte: ${total}, Fragen: ${solved}`
              )}
            </span>
          </>
        )}
      </motion.h2>
      <motion.ul
          variants={{ hidden: { opacity: 0 }, animate: { opacity: 1} }}
           initial='hidden'
           animate='animate'
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        <motion.h1
            variants={{ animate: { opacity: [0, 1] } }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
        >
          {hasHighScores ? 'Ihre besten Ergebnisse' : 'Hier ist nichts zu finden'}
        </motion.h1>
        {hasHighScores ? (
          highscores.map((score: HighScore, index: number) => (
            <GameOverEntry key={score.date} score={score} newScore={newScore} index={index} />
          ))
        ) : (
          <motion.img
                 src='/mailbox.png'
                 alt='empty mailbox'
            variants={{ animate: { opacity: [0, 1], transition: { duration: 0.6, ease: 'easeIn' } } }}
          />
        )}
        <motion.button
           onClick={() => throttleRefFn(timer.replay, 1000)}
          whileTap={{ scale: 1.2 }}
        whileHover={isMobile ? {} : { scale: 1.2 }}
          variants={{ animate: { opacity: [0, 1], y: [-20, 0], transition: { duration: 0.6, type: 'easeIn' } } }}
        >
          Wiederholungsversuch
        </motion.button>
      </motion.ul>
    </motion.section>
  );
}
