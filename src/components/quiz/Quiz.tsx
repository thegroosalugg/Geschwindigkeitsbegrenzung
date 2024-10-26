import { motion, AnimatePresence } from 'framer-motion';
import useGameController from '@/hook/useGameController';
import Answers from '../answers/Answers';
import css from './Quiz.module.css';

export default function Quiz() {
  const { user, question, timer, handleAnswer } = useGameController();
  const { solved, missed, score } = user;
  const quesArray = question.q.split('___');

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div
          className={css['question']}
          key={question.id}
          initial={{ scaleY: 0 }}
          animate={{
            scaleY: timer.isStopped && user.choice ? [1, 0, 1] : 1,
            transition: { scaleY: { delay: 0.2 } },
          }}
          exit={{ scaleY: 0 }}
          style={{ originY: 0.2 }}
        >
          <h1>
            {quesArray[0]}
            <AnimatePresence mode='wait'>
              <motion.span
                key={timer.isStopped + ''}
                style={{ minWidth: 75 }}
                initial={{ opacity: 0 }}
                   exit={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  color: timer.isStopped ? '#cd8f2a' : '#42275a',
                  transition: { delay: 0.3 },
                }}
              >
                {timer.isStopped ? question.a : '_____'}
              </motion.span>
            </AnimatePresence>
            {quesArray[1]}
          </h1>
          <progress value={timer.remaining} max={timer.max} />
        </motion.div>
      </AnimatePresence>
      <div className={css['stats']}>
        <p>{solved}</p>
        <p>{score}</p>
        <p>{missed}</p>
      </div>
      <Answers question={question} user={user} timer={timer} handleAnswer={handleAnswer} />
    </>
  );
}
