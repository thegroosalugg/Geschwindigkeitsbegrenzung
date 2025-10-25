import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import WordEntry from './WordEntry';
import css from './WordBook.module.css';

export default function WordBook() {
  return (
    <>
      <motion.h1 className={css['wordbook-header']} animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}>
        Verben
      </motion.h1>
      <motion.ul className={css['wordbook-list']} animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}>
        {translations.map((word) => (
          <WordEntry key={word.body} {...word} />
        ))}
      </motion.ul>
    </>
  );
}
