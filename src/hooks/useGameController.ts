import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/models/User';
import Question from '@/models/Question';

const useGameController = () => {
  const          level = User.getDifficulty();
  const        maxTime = useRef(1000 * (14 - 3 * level)); // 11 / 8 / 5 secs
  const      pauseTime = useRef(3000);
  const       interval = useRef<number | undefined>(undefined);
  const [         user,          setUser] = useState(new User(level));
  const [     question,      setQuestion] = useState(new Question());
  const [    isInitial,     setIsInitial] = useState(false);
  const [  gameStarted,   setGameStarted] = useState(false);
  const [   isGameover,    setIsGameover] = useState(false);
  const [  timerPaused,   setTimerPaused] = useState(false);
  const [ timerStopped,  setTimerStopped] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const       gameover = user.lives <= 0;

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
    setUser((user) => ({ ...user, item: false, penalty: 2 }))
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
          setUser((user) => User.update(user, '', false, prevTimer));
          stopTimer();
        }

        return prevTimer;
      });
    }, 100);
  }, [timerPaused]);

  const playAgain = () => {
    setTimeout(() => {
      setIsGameover(false);
      setUser(new User(level));
      startTimer();
    }, 700);
  }

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.ans;
    setUser((user) => User.update(user, choice, isCorrect, timeRemaining));

    if (timerPaused) resumeTimer();
    stopTimer();
  }

  useEffect(() => {
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
         answer: handleAnswer,
    },
    user,
    question,
  };
};

export default useGameController;
