import { prepositions } from '@/data/prepositions';
import { sentences } from '@/data/sentences';
import rand from '@/util/rand';
import css from './Quiz.module.css';

export default function Quiz() {
  const randomIndex = rand(0, sentences.length);

  return (
    <section className={css['quiz']}>
      <div className={css['question']}>
        <h1>{sentences[randomIndex].q}</h1>
      </div>
      <ul className={css['answers']}>
        {prepositions.map(({ ans, background }) => (
          <li key={ans} style={{ background }}>
            {ans}
          </li>
        ))}
      </ul>
    </section>
  );
}
