import { motion } from 'framer-motion';
import { userChoices } from '@/data/userChoices';
import Question from '@/model/Question';
import Timer from '@/model/Timer';
import User from '@/model/User';
import css from './Answers.module.css';

interface AnswerProps {
      question: Question;
          user: User;
         timer: Timer;
  handleAnswer: (choice: string) => void;
}

export default function Answers({ user, question, timer, handleAnswer }: AnswerProps) {
  const getButtonBackground = (choice: string, background: string) => {
    if (   !timer.isStopped   ) return background;
    if (choice ===  question.a) return '#6F8C2E'; // Green for the correct answer
    if (choice === user.choice) return '#CD5C08'; // Red for the wrong user choice
    return background; // Default for other buttons
  };

  return (
    <motion.div className={css['answers']} exit={{ opacity: 0, y: 100, transition: { duration: 1, delay: 0.1 } }}>
      {userChoices.map(({ choice, background }) => (
        <motion.button
          key={choice}
          initial={false}
          animate={{
            background: getButtonBackground(choice, background),
            filter: `brightness(${
              timer.isStopped && user.choice !== choice && choice !== question.a ? 0.8 : 1
            })`,
            transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
          }}
          disabled={timer.isStopped}
          onClick={() => handleAnswer(choice)}
          whileTap={{ scale: 1.1, transition: { type: 'spring', damping: 5, stiffness: 400 } }}
        >
          {choice}
        </motion.button>
      ))}
    </motion.div>
  );
}
