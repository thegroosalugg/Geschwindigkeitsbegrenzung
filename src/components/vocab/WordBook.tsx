import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import css from './WordBook.module.css';

export default function WordBook() {
  return (
    <section className={css['wordbook']}>
      <motion.h1 animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}>
        Verben
      </motion.h1>
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
