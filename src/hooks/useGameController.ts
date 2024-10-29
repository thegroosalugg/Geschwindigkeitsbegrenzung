import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/models/User';
import Question from '@/models/Question';

const useGameController = () => {
  const   maxTime = useRef(5000);
  const pauseTime = useRef(3000);
  const requiredScore = useRef(0);
  const interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User(3));
  const [     question,      setQuestion] = useState(new Question());
  const [    isInitial,     setIsInitial] = useState(true);
  const [   isGameover,    setIsGameover] = useState(false);
  const [  timerPaused,   setTimerPaused] = useState(false);
  const [ timerStopped,  setTimerStopped] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const gameover = user.lives === 0;

  // Question.log(); // *logData

  const pauseTimer = () => {
    setTimerPaused(true);
    clearInterval(interval.current);
    setUser((user) => ({ ...user, item: false }))
    pauseTime.current = 6000;
  }

  const resumeTimer = () => {
    setTimerPaused(false)
    pauseTime.current = 3000;
  }

  const stopTimer = () => {
    setTimerStopped(true);
    clearInterval(interval.current);
  }

  const startTimer = useCallback(() => {
    console.log('TIMER STARTED, timerPaused', timerPaused); // *logData
    setIsInitial(false)
    setTimerStopped(false);

    if (timerPaused) {
      resumeTimer();
    } else {
      setQuestion(Question.random());
      setTimeRemaining(maxTime.current);
    }

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
  }, [timerPaused]);

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    let { solved, lives, score, total, item } = user;

    if (isCorrect) {
      solved += 1;
      score   = Math.floor(timeRemaining / 100 / (timerPaused ? 2 : 1));
      total  += score;

      const threshold = 50;
      console.log('REQUIRED SCORE', requiredScore.current); // *logData
      if (total > requiredScore.current + threshold) {
        console.log('Item check passed', total > requiredScore.current + threshold); // *logData
        item = true;
        requiredScore.current += threshold;
      }
    } else {
      score   = 0;
      lives  -= 1;
    }

    if (timerPaused) {
      resumeTimer();
    }
    setUser({ choice, isCorrect, solved, lives, score, total, item });
    stopTimer();
    console.log('USER ACTION', 'item', item); // *logData
  }

  const playAgain = () => {
    setTimeout(() => {
      setIsGameover(false);
      setUser(new User(1));
      requiredScore.current = 0;
      startTimer();
    }, 700);
  }

  useEffect(() => {
    console.log('PAUSE TIME', pauseTime.current)
    if (timerStopped || timerPaused) {
      const intervalTimer = setTimeout(() => {
        setIsGameover(gameover);
        if (!gameover) startTimer();
      }, pauseTime.current);

      return () => clearTimeout(intervalTimer);

    }
  }, [timerStopped, timerPaused, gameover, startTimer]);

  return {
    timer: {
       isInitial,
      isGameover,
       isPaused: timerPaused,
      isStopped: timerStopped,
      remaining: timeRemaining,
            max: maxTime.current,
          pause: pauseTimer,
    },
    user,
    question,
    playAgain,
    handleAnswer,
  };
};

export default useGameController;
