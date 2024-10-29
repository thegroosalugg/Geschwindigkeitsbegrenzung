import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import User from '@/models/User';
import HighScore from '@/models/HighScore';
import GameOverEntry from './GameOverEntry';
import css from './GameOver.module.css';

export default function GameOver({ user }: { user: User }) {
  const { total, solved } = user;
  const newScore = new HighScore(total, solved);
  const isHighScore = newScore.isHighScore();
  newScore.save();
  const highscores = HighScore.getAll();

  return (
    <section className={css['gameover']}>
      <motion.h2
        style={{
             originY: 1,
               color: !total || isHighScore ? '#E6E6E6' : '#000',
          background: `linear-gradient(to right, ${
            !total ? '#CB6040, #ab5236' : isHighScore ? '#7E60BF, #E4B1F0' : '#EDDFE0, #B7B7B7'
          })`,
        }}
        initial={{ opacity: 0, scaleY: 0.1, x: -30 }}
        animate={{ opacity: 1, scaleY: 1, x: 0, transition: { delay: 1.8, duration: 0.7 } }}
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
        initial='hidden'
        animate='visible'
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        <motion.h1
             style={{ originX: 0 }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
        >
          Ihre besten Ergebnisse
        </motion.h1>
        {highscores.map((score: HighScore, index: number) => (
          <GameOverEntry key={score.date} score={score} newScore={newScore} index={index} />
        ))}
      </motion.ul>
    </section>
  );
}
