import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import css from './SelectButton.module.css';

const config = {
  einfach: {
    img: 'uter',
      c: '#659999',
      b: '#a8c6dc',
  },
   mittel: {
    img: 'nelson',
      c: '#f4791f',
      b: '#82afd1',
  },
   schwer: {
    img: 'ranier',
      c: '#aa4533',
      b: '#5999c9',
  },
};

export type Label = 'einfach' | 'mittel' | 'schwer';

interface ButtonProps {
  label: Label;
  state: { isActive: Label; setIsActive: Dispatch<SetStateAction<Label>> };
}

export default function SelectButton({ label, state }: ButtonProps) {
  const activeTab = state.isActive === label;
  const image = config[label].img;
  const opac = activeTab ? 60 : 88;
  const background =
    `linear-gradient(to right, #ffffff${opac}, #c4e1f6${opac}, ${config[label].b + opac})`;

  function clickhandler() {
    state.setIsActive(label);
  }

  return (
    <motion.button
      className={css['button']}
        onClick={clickhandler}
        animate={{ background }}
    >
      <motion.span
        animate={{
          filter: `brightness(${activeTab ? 1.5 : 1})`,
           color: config[label].c,
        }}
      >
        {label}
      </motion.span>
      {activeTab && <motion.div layoutId='difficulty' className={css['diffuclty-tab']} />}
      <img src={`/${image}.png`} alt={`${image}`}     className={css[label]} />
    </motion.button>
  );
}
