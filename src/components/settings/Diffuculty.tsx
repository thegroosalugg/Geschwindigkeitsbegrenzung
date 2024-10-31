import { motion } from 'framer-motion';
import { useState } from 'react';
import SelectButton, { Label } from './SelectButton';
import css from './Diffuculty.module.css';

export default function DiffucultySelect() {
  const [isActive, setIsActive] = useState<Label>('einfach');

  return (
    <motion.section
       className={css['select']}
         animate='animate'
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 variants={{ animate: { opacity: [0, 1], transition: { duration: 1 } } }}>
        Schwierigkeitsgrad
      </motion.h2>
      <SelectButton label='einfach' state={{ isActive, setIsActive }} />
      <SelectButton label='mittel'  state={{ isActive, setIsActive }} />
      <SelectButton label='schwer'  state={{ isActive, setIsActive }} />
    </motion.section>
  );
}
