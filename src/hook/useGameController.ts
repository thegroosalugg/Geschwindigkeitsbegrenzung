import { useEffect, useRef, useState } from 'react';
import User from '@/model/User';
import Question from '@/model/Question';

const useGameController = () => {
  const  maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User());
  const [     question,      setQuestion] = useState(new Question());
  const [  isAnimating,   setIsAnimating] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [ timerStopped,  setTimerStopped] = useState(false);

  Question.log(); // *logData

  const startTimer = () => {
    setTimerStopped(false);
    setQuestion(Question.random());
    setTimeRemaining(maxTime.current);

    interval.current = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          setTimerStopped(true);
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
  }

  function handleAnswer(choice: string) {
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

    setTimerStopped(true);
    clearInterval(interval.current);
    setUser({ choice, isCorrect, solved, missed, score, total });
    console.log('USER ACTION', { choice, isCorrect, solved, missed, score, total }); // *logData
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (timerStopped) {
      console.log('TIMER STOPPED', user); // *logData
      const intervalTimer = setTimeout(() => {
        startTimer();
      }, 3000);

      setIsAnimating(true);
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 1200);

      return () => {
        clearTimeout(intervalTimer);
        clearTimeout(animationTimer);
      }
    }
  }, [timerStopped]);

  return {
    timer: { max: maxTime.current, remaining: timeRemaining, isStopped: timerStopped, isAnimating },
    user,
    question,
    handleAnswer,
  };
};


export default useGameController;
