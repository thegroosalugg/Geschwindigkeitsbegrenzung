import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import css from './SelectButton.module.css';
import User from '@/models/User';

const config = {
  1: {
     mode: 'einfach',
    image: 'uter',
    color: 'var(--info)',
  },
  2: {
     mode: 'mittel',
    image: 'nelson',
    color: 'var(--warning)',
  },
  3: {
     mode: 'schwer',
    image: 'ranier',
    color: 'var(--danger)',
  },
};

interface ButtonProps {
  level: number;
  state: { isActive: number; setIsActive: Dispatch<SetStateAction<number>> };
}

export default function SelectButton({ level, state }: ButtonProps) {
  const { mode, image, color } = config[level as keyof typeof config];
  const activeTab = state.isActive === level;
  const opac = activeTab ? 0.4 : 0.65;
  // darker gradient end per button. Active tab has darker BG
  const background = `linear-gradient(to right,
    hsla(  0,  0%, 100%, ${opac}),
    hsla(205, 74%,  87%, ${opac}),
    hsla(206, ${36 + level * 5}%, ${86 - level * 10}%, ${opac}))
    `;

  function clickhandler() {
    state.setIsActive(level);
    User.setDifficulty(level);
  }

  return (
    <motion.button
      className={css['button']}
        onClick={clickhandler}
        animate={{ background }}
       variants={{ animate: { opacity: [0, 1], scale: [1.1, 1], transition: { duration: 0.5, type: 'spring' } } }}
        >
      <motion.span animate={{ color, filter: `brightness(${activeTab ? 1.5 : 1})` }}>
        {mode}
      </motion.span>
      {activeTab && <motion.div layoutId='difficulty' className={css['diffuclty-tab']} />}
      <img src={`/${image}.webp`} alt={image}         className={css[mode]} loading='lazy' />
    </motion.button>
  );
}
