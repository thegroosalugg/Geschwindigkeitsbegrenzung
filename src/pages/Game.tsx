import { AnimatePresence } from 'framer-motion';
import useGameController from '@/hooks/useGameController';
import StartScreen from '@/components/quiz/StartScreen';
import Questions from '@/components/quiz/Questions';
import Score from '@/components/quiz/Score';
import Answers from '@/components/quiz/Answers';
import GameOver from '@/components/quiz/GameOver';

export default function GamePage() {
  const { user, question, timer } = useGameController();

  return (
    <AnimatePresence mode='wait'>
      {!timer.isStarted ? (
        <StartScreen key='start'    timer={timer} />
      ) : !timer.isGameover ? (
        <>
          <Questions key='question' timer={timer}             question={question} />
          <Score     key='score'    timer={timer} user={user}                     />
          <Answers   key='answers'  timer={timer} user={user} question={question} />
        </>
      ) : (
        <GameOver    key='gameover' timer={timer} user={user} />
      )}
    </AnimatePresence>
  );
}
