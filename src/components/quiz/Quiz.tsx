import { useEffect, useRef, useState } from 'react';
import { userChoices } from '@/data/userChoices';
import { quizItems } from '@/data/quizItems';
import rand from '@/util/rand';
import css from './Quiz.module.css';

let quizPool = [...quizItems];
const checkPoolforZero = () => {
  if (quizPool.length === 0) {
    quizPool = [...quizItems];
  }
};
const randomIndex = () => rand(0, quizPool.length);
const randomQuestion = () => quizPool.splice(randomIndex(), 1)[0];
const initialQuestion = randomQuestion();

export default function Quiz() {
  const maxTime = useRef(5000);
  const [question, setQuestion] = useState(initialQuestion);
  const [timeRemaining, setTimeRemaining] = useState(maxTime.current);

  console.log(quizItems.length, quizPool.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTimer) => {
        prevTimer -= 100;

        if (prevTimer <= 0) {
          maxTime.current = 5000;
          setQuestion(randomQuestion());
          checkPoolforZero();
          return maxTime.current;
        }

        return prevTimer;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className={css['question']}>
        <h1>{question.q}</h1>
        <progress value={timeRemaining} max={maxTime.current} />
      </div>
      <ul className={css['answers']}>
        {userChoices.map(({ ans, background }) => (
          <li key={ans} style={{ background }}>
            {ans}
          </li>
        ))}
      </ul>
    </>
  );
}
