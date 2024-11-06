import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import css from './SelectButton.module.css';
import User from '@/models/User';

const config = {
  1: {
     mode: 'einfach',
    image: 'uter',
    color: '#659999',
      hex: '#a8c6dc',
  },
  2: {
     mode: 'mittel',
    image: 'nelson',
    color: '#f4791f',
      hex: '#82afd1',
  },
  3: {
     mode: 'schwer',
    image: 'ranier',
    color: '#aa4533',
      hex: '#5999c9',
  },
};

interface ButtonProps {
  level: number;
  state: { isActive: number; setIsActive: Dispatch<SetStateAction<number>> };
}

export default function SelectButton({ level, state }: ButtonProps) {
  const { mode, image, color, hex } = config[level as keyof typeof config];
  const activeTab = state.isActive === level;
  const opac = activeTab ? 50 : 88;
  const background =
    `linear-gradient(to right, #ffffff${opac}, #c4e1f6${opac}, ${hex + opac})`;

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
      <img src={`/${image}.png`} alt={image}          className={css[mode]} />
    </motion.button>
  );
}
