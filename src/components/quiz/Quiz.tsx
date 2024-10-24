import { motion } from 'framer-motion';
import { userChoices } from '@/data/userChoices';
import css from './Quiz.module.css';
import useGameController from '@/hook/useGameController';

export default function Quiz() {
  const { user, question, timeRemaining, timerStopped, maxTime, handleAnswer } =
    useGameController();

  return (
    <>
      <div className={css['question']}>
        <h1>{question.q}</h1>
        <progress value={timeRemaining} max={maxTime.current} />
      </div>
      <div className={css['answers']}>
        {userChoices.map(({ choice, background }) => (
          <motion.button
            key={choice}
            animate={{
              background: timerStopped
                ? choice === question.a
                  ? '#859F3D'
                  : user.choice === choice
                  ? '#C5705D'
                  : background
                : background,
              filter: `brightness(${
                timerStopped && user.choice !== choice && choice !== question.a ? 0.8 : 1
              })`,
            }}
            disabled={timerStopped}
            onClick={() => handleAnswer(choice)}
            whileTap={{ scale: 1.1, transition: { type: 'spring', damping: 5, stiffness: 400 } }}
          >
            {choice}
          </motion.button>
        ))}
      </div>
    </>
  );
}
