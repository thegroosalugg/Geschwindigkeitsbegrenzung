import { AnimatePresence, motion } from 'framer-motion';
import useGameController from '@/hook/useGameController';
import Questions from './Questions';
import Answers from './Answers';
import Score from './Score';

export default function Quiz() {
  const { user, question, timer, handleAnswer } = useGameController();

  return (
    <AnimatePresence mode='wait'>
      {!timer.isGameover ? (
        <>
          <Questions question={question} timer={timer} key='question' />
          <Score user={user} timer={timer} key='score' />
          <Answers question={question} user={user} timer={timer} handleAnswer={handleAnswer} key='answers' />
        </>
      ) : (
        <motion.p key='gameover' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>game over</motion.p>
      )}
    </AnimatePresence>
  );
}
