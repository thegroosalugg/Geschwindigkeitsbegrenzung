import { AnimatePresence } from 'framer-motion';
import useGameController from '@/hooks/useGameController';
import Questions from './Questions';
import Answers from './Answers';
import Score from './Score';
import GameOver from './GameOver';

export default function Quiz() {
  const { user, question, timer, handleAnswer, playAgain } = useGameController();

  return (
    <AnimatePresence mode='wait'>
      {!timer.isGameover ? (
        <>
          <Questions key='question' timer={timer}             question={question} />
          <Score     key='score'    timer={timer} user={user}                     />
          <Answers   key='answers'  timer={timer} user={user} question={question} handleAnswer={handleAnswer} />
        </>
      ) : (
        <GameOver key='gameover' user={user} playAgain={playAgain} />
      )}
    </AnimatePresence>
  );
}
