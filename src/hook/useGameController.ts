import { useEffect, useRef, useState } from 'react';
import User from '@/model/User';
import Question from '@/model/Question';

const useGameController = () => {
  const [user, setUser] = useState(new User());
  const  maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [     question,      setQuestion] = useState(new Question());
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
          }));
          clearInterval(interval.current);
          return prevTimer;
        }

        return prevTimer;
      });
    }, 100);
  }

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    let { solved, missed, score } = user;

    if (isCorrect) {
      solved += 1
      score  += timeRemaining
    } else {
      missed += 1
    }

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

  return {
    timer: { max: maxTime.current, remaining: timeRemaining, isStopped: timerStopped },
    user,
    question,
    handleAnswer,
  };
};


export default useGameController;
