// import { motion } from 'framer-motion';
import css from './Quiz.module.css';
import useGameController from '@/hook/useGameController';
import Answers from '../answers/Answers';

export default function Quiz() {
  const { user, question, timeRemaining, timerStopped, maxTime, handleAnswer } =
    useGameController();

  return (
    <>
      <div className={css['question']}>
        <h1>{question.q}</h1>
        <progress value={timeRemaining} max={maxTime.current} />
      </div>
      <Answers
            question={question}
                user={user}
        timerStopped={timerStopped}
        handleAnswer={handleAnswer}
      />
    </>
  );
}
