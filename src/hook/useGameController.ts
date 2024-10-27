import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/model/User';
import Question from '@/model/Question';

const useGameController = () => {
  const  maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User());
  const [     question,      setQuestion] = useState(new Question());
  const [  isAnimating,   setIsAnimating] = useState(false);
  const [   isGameover,    setIsGameover] = useState(false);
  const [ timerStopped,  setTimerStopped] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  Question.log(); // *logData

  const startTimer = useCallback(() => {
    console.log('TIMER STARTED'); // *logData
    if (isGameover) return;
    setTimerStopped(false);
    setQuestion(Question.random());
    setTimeRemaining(maxTime.current);

    interval.current = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          setTimerStopped(true);
          setIsAnimating(true);
          setUser((prevState) => ({
            ...prevState,
                  missed: prevState.missed + 1,
               isCorrect: false,
                  choice: '',
                   score:  0,
          }));
          clearInterval(interval.current);
        }

        return prevTimer;
      });
    }, 100);
  }, [isGameover]);

  function handleAnswer(choice: string) {
    setTimerStopped(true);
    setIsAnimating(true);
    const isCorrect = choice === question.a;
    let { solved, missed, score, total } = user;

    if (isCorrect) {
      solved += 1;
      score   = timeRemaining / 100;
      total  += score;
    } else {
      score   = 0;
      missed += 1;
    }

    setUser({ choice, isCorrect, solved, missed, score, total });
    clearInterval(interval.current);
    console.log('USER ACTION', { choice, isCorrect, solved, missed, score, total }); // *logData
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  }, [startTimer]);

  useEffect(() => {
    if (timerStopped) {
      console.log('TIMER STOPPED'); // *logData
      const intervalTimer = setTimeout(() => {
        setIsGameover(user.missed > 0);
        startTimer();
      }, 2500);

      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 1200);

      return () => {
        clearTimeout(intervalTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [timerStopped, user.missed, startTimer]);

  return {
    timer: {
              max: maxTime.current,
        remaining: timeRemaining,
        isStopped: timerStopped,
      isAnimating,
       isGameover,
    },
    user,
    question,
    handleAnswer,
  };
};

export default useGameController;
