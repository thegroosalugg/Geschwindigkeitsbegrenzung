// import { motion } from 'framer-motion';
import css from './Quiz.module.css';
import useGameController from '@/hook/useGameController';
import Answers from '../answers/Answers';

export default function Quiz() {
  const { user, question, timer, handleAnswer } =
    useGameController();

  return (
    <>
      <div className={css['question']}>
        <h1>{question.q}</h1>
        <progress value={timer.remaining} max={timer.max} />
      </div>
      <Answers
            question={question}
                user={user}
               timer={timer}
        handleAnswer={handleAnswer}
      />
    </>
  );
}
