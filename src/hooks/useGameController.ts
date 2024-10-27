import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/models/User';
import Question from '@/models/Question';

const useGameController = () => {
  const  maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User(3));
  const [     question,      setQuestion] = useState(new Question());
  const [   isGameover,    setIsGameover] = useState(false);
  const [ timerStopped,  setTimerStopped] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const gameover = user.lives === 0;

  // Question.log(); // *logData

  const stopTimer = () => {
    setTimerStopped(true);
    clearInterval(interval.current);
  }

  const startTimer = useCallback(() => {
    // console.log('TIMER STARTED'); // *logData
    setTimerStopped(false);
    setQuestion(Question.random());
    setTimeRemaining(maxTime.current);

    interval.current = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          setUser((user) => ({
              ...user,
                lives: user.lives - 1,
            isCorrect: false,
               choice: '',
                score:  0,
          }));
          stopTimer();
        }

        return prevTimer;
      });
    }, 100);
  }, []);

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    let { solved, lives, score, total } = user;

    if (isCorrect) {
      solved += 1;
      score   = timeRemaining / 100;
      total  += score;
    } else {
      score   = 0;
      lives  -= 1;
    }

    setUser({ choice, isCorrect, solved, lives, score, total });
    stopTimer();
    // console.log('USER ACTION', { choice, isCorrect, solved, lives, score, total }); // *logData
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  }, [startTimer]);

  useEffect(() => {
    if (timerStopped) {
      // console.log('TIMER STOPPED'); // *logData
      const intervalTimer = setTimeout(() => {
        setIsGameover(gameover);
        if (!gameover) startTimer();
      }, 3000);

      return () => clearTimeout(intervalTimer);

    }
  }, [timerStopped, gameover, startTimer]);

  return {
    timer: {
      isGameover,
      isStopped: timerStopped,
      remaining: timeRemaining,
            max: maxTime.current,
    },
    user,
    question,
    handleAnswer,
  };
};

export default useGameController;
