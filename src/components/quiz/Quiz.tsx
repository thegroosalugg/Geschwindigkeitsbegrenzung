import { useEffect, useRef, useState } from 'react';
import { userChoices } from '@/data/userChoices';
import { quizItems } from '@/data/quizItems';
import { motion } from 'framer-motion';
import randomIndex from '@/util/rand';
import css from './Quiz.module.css';

let quizPool = [...quizItems];

const randomQuestion = () => {
  if (quizPool.length === 0) {
    quizPool = [...quizItems];
  }
  return quizPool.splice(randomIndex(quizPool.length), 1)[0];
}

export default function Quiz() {
  const [user, setUser] = useState({
        choice: '',
     isCorrect: false,
         score: 0,
        solved: 0,
        missed: 0,
  });
  const maxTime = useRef(5000);
  const interval = useRef<number | undefined>(undefined);
  const [     question,      setQuestion] = useState({ id: '', q: '', a: '', eng: '', ru: ''});
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [ timerStopped,  setTimerStopped] = useState(false);

  console.log(quizItems.length, quizPool.length); // *logData

  const startTimer = () => {
    setTimerStopped(false);
    setQuestion(randomQuestion());
    setTimeRemaining(maxTime.current);

    interval.current = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          maxTime.current = 5000;
          setQuestion(randomQuestion());
          setUser((prevState) => ({ ...prevState, missed: prevState.missed + 1 }));
          return maxTime.current;
        }

        return prevTimer;
      });
    }, 100);
  }

  function clickHandler(choice: string) {
    const isCorrect = choice === question.a;
    const    solved =  isCorrect ? user.solved + 1             : user.solved;
    const    missed = !isCorrect ? user.missed + 1             : user.missed;
    const     score =  isCorrect ? user.score  + timeRemaining : user.score;

    setTimerStopped(true);
    clearInterval(interval.current);
    setUser({ choice, isCorrect, solved, missed, score });
    console.log({ choice, isCorrect, solved, missed, score }); // *logData
  }

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (timerStopped) {
      const timer = setTimeout(() => {
        startTimer();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [timerStopped]);

  return (
    <>
      <div className={css['question']}>
        <h1>{question.q}</h1>
        <progress value={timeRemaining} max={maxTime.current} />
      </div>
      <div className={css['answers']}>
        {userChoices.map(({ choice, background }) => (
          <motion.button
            key={choice}
            style={{ background }}
            disabled={timerStopped}
            onClick={() => clickHandler(choice)}
            whileTap={{ scale: 1.1, transition: { type: 'spring', damping: 5, stiffness: 400 } }}
          >
            {choice}
          </motion.button>
        ))}
      </div>
    </>
  );
}
