import { userChoices } from '@/data/userChoices';
import { quizItems } from '@/data/quizItems';
import rand from '@/util/rand';
import css from './Quiz.module.css';

let quizPool = [...quizItems];

export default function Quiz() {
  const randomIndex = rand(0, quizPool.length);
  const [randomQuestion] = quizPool.splice(randomIndex, 1);

  if (quizPool.length === 0) {
    quizPool = [...quizItems];
  }
  
  console.log(randomQuestion);
  console.log(quizItems.length, quizPool.length);

  return (
    <>
      <div className={css['question']}>
        <h1>{randomQuestion.q}</h1>
        <progress value={5} max={10} />
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
