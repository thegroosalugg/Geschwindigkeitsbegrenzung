import { useEffect, useRef, useState } from 'react';
import { quizItems } from '@/data/quizItems';
import randomIndex from '@/util/rand';

let quizPool = [...quizItems];

const randomQuestion = () => {
  if (quizPool.length === 0) {
    quizPool = [...quizItems];
  }
  return quizPool.splice(randomIndex(quizPool.length), 1)[0];
}

const useGameController = () => {
   const [user, setUser] = useState({
        choice: '',
     isCorrect: false,
         score: 0,
        solved: 0,
        missed: 0,
  });
  const  maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [     question,      setQuestion] = useState({ id: '', q: '', a: '', eng: '', ru: ''});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [ timerStopped,  setTimerStopped] = useState(false);

  console.log('QUIZ ITEMS', quizItems.length, 'QUIZ POOL', quizPool.length); // *logData

  const startTimer = () => {
    setTimerStopped(false);
    setQuestion(randomQuestion());
    setTimeRemaining(maxTime.current);

    interval.current = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          setTimerStopped(true);
          maxTime.current = 5000;
          setQuestion(randomQuestion());
          setUser((prevState) => ({
            ...prevState,
               missed: prevState.missed + 1,
            isCorrect: false,
               choice: '',
          }));
          clearInterval(interval.current);
          return maxTime.current;
        }

        return prevTimer;
      });
    }, 100);
  }

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    const    solved =  isCorrect ? user.solved + 1             : user.solved;
    const    missed = !isCorrect ? user.missed + 1             : user.missed;
    const     score =  isCorrect ? user.score  + timeRemaining : user.score;

    setTimerStopped(true);
    clearInterval(interval.current);
    setUser({ choice, isCorrect, solved, missed, score });
    console.log('USER ACTION', { choice, isCorrect, solved, missed, score }); // *logData
  }

  useEffect(() => {
    startTimer();

    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (timerStopped) {
      console.log('TIMER STOPPED', user); // *logData
      const timer = setTimeout(() => {
        startTimer();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [timerStopped]);

  return { maxTime, timeRemaining, timerStopped, user, question, handleAnswer }
}

export default useGameController;
