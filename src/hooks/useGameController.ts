import { useCallback, useEffect, useRef, useState } from 'react';
import User from '@/models/User';
import Question from '@/models/Question';

const useGameController = () => {
  const          level = User.getDifficulty();
  const        maxTime = useRef(1000 * (20 - level * 5)); // 15 / 10 / 5 secs
  const      pauseTime = useRef(3000);
  const  requiredScore = useRef(0);
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
    // console.log('TIMER STARTED', 'PAUSE TIME', pauseTime.current, 'timerPaused', timerPaused); // *logData
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
               penalty: 1,
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
      setUser(new User(level));
      requiredScore.current = 0;
      startTimer();
    }, 700);
  }

  function handleAnswer(choice: string) {
    const isCorrect = choice === question.a;
    const { level } = user;
    let { lives, solved, streak, penalty, score, total, item } = user;

    if (isCorrect) {
      solved += 1;
      streak += 1;
      score   = User.getScore(level, streak, penalty, timeRemaining)
      total  += score;

      const threshold = 100;
      if (total > requiredScore.current + threshold) {
        item = true;
        requiredScore.current += threshold + solved + streak + level * 3;
        console.log('Item check passed REQUIRED SCORE', requiredScore.current + threshold); // *logData
      }

    } else {
      score   = 0;
      streak  = 0;
      lives  -= 1;
    }

    penalty = 1;

    if (timerPaused) {
      resumeTimer();
    }

    setUser({ level, choice, isCorrect, solved, streak, penalty, lives, score, total, item });
    stopTimer();
    // console.log('USER ACTION', 'level', level, 'maxTime', maxTime.current); // *logData
    // console.log('USER ACTION', { level, choice, isCorrect, solved, streak, penalty, lives, score, total, item }); // *logData
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
    },
    user,
    question,
    handleAnswer,
  };
};

export default useGameController;
