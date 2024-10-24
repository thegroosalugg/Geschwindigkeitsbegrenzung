import { motion } from 'framer-motion';
import { userChoices } from '@/data/userChoices';
import css from './Quiz.module.css';
import useGameController from '@/hook/useGameController';

export default function Quiz() {
  const { user, question, timeRemaining, timerStopped, maxTime, handleAnswer } =
    useGameController();

  const getButtonBackground = (choice: string, background: string) => {
    if (!timerStopped) return background;
    if (choice ===  question.a) return '#6F8C2E'; // Green for the correct answer
    if (choice === user.choice) return '#CD5C08'; // Red for the wrong user choice
    return background; // Default for other buttons
  };

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
              background: getButtonBackground(choice, background),
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
