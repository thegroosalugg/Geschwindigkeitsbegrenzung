import { prepositions } from '@/data/prepositions';
import { sentences } from '@/data/sentences';
import rand from '@/util/rand';

export default function GamePage() {
  const randomIndex = rand(0, sentences.length);

  return (
    <section>
      <h1>{sentences[randomIndex].q}</h1>
      <ul>
        {prepositions.map((ans) => (
          <li key={ans}>
            {ans}
          </li>
        ))}
      </ul>
    </section>
  );
}
