import { motion } from 'framer-motion';
import { userChoices } from '@/data/userChoices';
import css from './Answers.module.css';
import Question from '@/model/Question';
import User from '@/model/User';
import Timer from '@/model/Timer';

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
    <div className={css['answers']}>
      {userChoices.map(({ choice, background }) => (
        <motion.button
          key={choice}
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
    </div>
  );
}
