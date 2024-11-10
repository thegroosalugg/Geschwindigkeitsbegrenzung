import css from './WordBook.module.css';
import { translations } from '@/data/translations';

export default function WordBook() {
  return (
    <section className={css['wordbook']}>
      <h1>Verben</h1>
      <ul>
        {translations.map(({ body, pret, perf, eng, ru, CASE }) => (
          <li key={body}>
            <span>{body}</span>
            <span>{CASE}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
