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
        <StartScreen key='start'    {...{ timer }} />
      ) : !timer.isGameover ? (
        <>
          <Questions key='question' {...{ timer, question }} />
          <Score     key='score'    {...{ timer, user }} />
          <Answers   key='answers'  {...{ timer, user, question }} />
        </>
      ) : (
        <GameOver key='gameover'    {...{ timer, user }} />
      )}
    </AnimatePresence>
  );
}
