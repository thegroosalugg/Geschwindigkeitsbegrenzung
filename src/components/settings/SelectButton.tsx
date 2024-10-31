import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import css from './SelectButton.module.css';
import User from '@/models/User';

const config = {
  einfach: {
    img: 'uter',
      c: '#659999',
      b: '#a8c6dc',
    lvl: 1,
  },
   mittel: {
    img: 'nelson',
      c: '#f4791f',
      b: '#82afd1',
    lvl: 2,
  },
   schwer: {
    img: 'ranier',
      c: '#aa4533',
      b: '#5999c9',
    lvl: 3,
  },
};

export type Level = 'einfach' | 'mittel' | 'schwer';

interface ButtonProps {
  level: Level;
  state: { isActive: Level; setIsActive: Dispatch<SetStateAction<Level>> };
}

export default function SelectButton({ level, state }: ButtonProps) {
  const activeTab = state.isActive === level;
  const image = config[level].img;
  const opac = activeTab ? 50 : 88;
  const background =
    `linear-gradient(to right, #ffffff${opac}, #c4e1f6${opac}, ${config[level].b + opac})`;

  function clickhandler() {
    state.setIsActive(level);
    User.setDifficulty(level, config[level].lvl);
  }

  return (
    <motion.button
      className={css['button']}
        onClick={clickhandler}
        animate={{ background }}
       variants={{ animate: { opacity: [0, 1], scale: [1.1, 1], transition: { duration: 0.5 } } }}
        >
      <motion.span
        animate={{
          filter: `brightness(${activeTab ? 1.5 : 1})`,
           color: config[level].c,
        }}
      >
        {level}
      </motion.span>
      {activeTab && <motion.div layoutId='difficulty' className={css['diffuclty-tab']} />}
      <img src={`/${image}.png`} alt={`${image}`}     className={css[level]} />
    </motion.button>
  );
}
