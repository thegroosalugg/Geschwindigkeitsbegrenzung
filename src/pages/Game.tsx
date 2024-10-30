import { AnimatePresence } from 'framer-motion';
import useGameController from '@/hooks/useGameController';
import Questions from '@/components/quiz/Questions';
import Answers from '@/components/quiz/Answers';
import Score from '@/components/quiz/Score';
import GameOver from '@/components/quiz/GameOver';
import StartScreen from '@/components/quiz/StartScreen';

export default function GamePage() {
  const { user, question, timer, handleAnswer } = useGameController();

  return (
    <AnimatePresence mode='wait'>
      {!timer.isStarted ? (
        <StartScreen timer={timer} />
      ) : !timer.isGameover ? (
        <>
          <Questions key='question' timer={timer}             question={question} />
          <Score     key='score'    timer={timer} user={user}                     />
          <Answers   key='answers'  timer={timer} user={user} question={question} handleAnswer={handleAnswer} />
        </>
      ) : (
        <GameOver key='gameover' user={user} timer={timer} />
      )}
    </AnimatePresence>
  );
}
