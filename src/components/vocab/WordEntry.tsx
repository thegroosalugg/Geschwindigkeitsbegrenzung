import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import css from './WordEntry.module.css';

type Word = {
   body: string;
   CASE: string;
  pret?: string;
  perf?: string;
    eng: string;
     ru: string;
};

const WordEntry: React.FC<Word> = (word) => {
  const { body, pret, perf, eng, ru, CASE } = word;
  const [display, setDisplay] = useState(body);
  const buttons = [body, pret, perf, eng, ru].filter((button) => button !== undefined);
  const icons = [
    'spell-check',
     pret && 'history',
     perf && 'check-circle',
    'chess-king',
    'chess-knight',
  ].filter(Boolean);

  return (
    <li className={css['word']}>
      <div>
        <motion.span key={display} animate={{ opacity: [0, 1], transition: { duration: 1 } }}>
          {display}
        </motion.span>
        <span>{CASE}</span>
      </div>
      <div>
        {buttons.map((button, index) => (
          <motion.button
            key={button}
            onClick={() => setDisplay(button)}
            animate={{ backgroundColor: display === button ? '#b073dc5d' : '#00000000' }}
          >
            <FontAwesomeIcon icon={icons[index] as IconProp} size='xs' />
          </motion.button>
        ))}
      </div>
    </li>
  );
};

export default WordEntry;
