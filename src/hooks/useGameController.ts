import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/models/User';
import Question from '@/models/Question';

const useGameController = () => {
  const       maxTime = useRef(5000);
  const     pauseTime = useRef(3000);
  const requiredScore = useRef(0);
  const      interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User(3));
  const [     question,      setQuestion] = useState(new Question());
  const [    isInitial,     setIsInitial] = useState(false);
  const [  gameStarted,   setGameStarted] = useState(false);
  const [   isGameover,    setIsGameover] = useState(false);
  const [  timerPaused,   setTimerPaused] = useState(false);
  const [ timerStopped,  setTimerStopped] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const gameover = user.lives === 0;

  Question.log(); // *logData

  function startGame() {
    setTimeout(() => {
      setGameStarted(true);
      setIsInitial(true);
      setTimerStopped(true);
    }, 700);
  }

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
               streak:  0,
          }));
          stopTimer();
        }

        return prevTimer;
      });
    }, 100);
  }, [timerPaused]);

  const playAgain = () => {
    setTimeout(() => {
      setIsGameover(false);
      setUser(new User(1));
      requiredScore.current = 0;
      startTimer();
    }, 700);
  }

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    let { solved, lives, score, total, streak, item } = user;

    if (isCorrect) {
      solved += 1;
      streak += 1;
      score   = Math.round(timeRemaining / 100 / (timerPaused ? 2 : 1) * (Math.min((streak * 0.1 + 0.9), 2)));
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
      streak  = 0;
      lives  -= 1;
    }

    if (timerPaused) {
      resumeTimer();
    }
    setUser({ choice, isCorrect, solved, streak, lives, score, total, item });
    stopTimer();
    console.log('USER ACTION', 'item', item); // *logData
  }

  useEffect(() => {
    console.log('PAUSE TIME', pauseTime.current); // *logData
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
      isStarted: gameStarted,
       isPaused: timerPaused,
      isStopped: timerStopped,
      remaining: timeRemaining,
            max: maxTime.current,
          start: startGame,
          pause: pauseTimer,
         replay: playAgain,
    },
    user,
    question,
    handleAnswer,
  };
};

export default useGameController;
