import { motion } from 'framer-motion';
import { userChoices } from '@/data/userChoices';
import Question from '@/models/Question';
import Timer from '@/models/Timer';
import User from '@/models/User';
import css from './Answers.module.css';

interface AnswerProps {
      question: Question;
          user: User;
         timer: Timer;
}

export default function Answers({ user, question, timer }: AnswerProps) {
  const getButtonBackground = (choice: string, background: string) => {
    if (   !timer.isStopped     ) return background;
    if (choice ===  question.ans) return '#6F8C2E'; // Green for the correct answer
    if (choice ===   user.choice) return '#CD5C08'; // Red for the wrong user choice
    return background; // Default for other buttons
  };

  return (
    <motion.div
      className={css['answers']}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y:   0, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, y: 100, transition: { duration: 1, delay: 0.1 } }}>
      {userChoices.map(({ choice, background }) => (
        <motion.button
          key={choice}
          initial={false}
          animate={{
            background: getButtonBackground(choice, background),
            filter: `brightness(${
              timer.isStopped && user.choice !== choice && choice !== question.ans ? 0.8 : 1
            })`,
            transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
          }}
          disabled={timer.isStopped}
          onClick={() => timer.answer(choice)}
          whileTap={{ scale: 1.1, transition: { type: 'spring', damping: 5, stiffness: 400 } }}
        >
          {choice}
        </motion.button>
      ))}
    </motion.div>
  );
}
