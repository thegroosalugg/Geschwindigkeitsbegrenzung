import { motion } from 'framer-motion';
import { useState } from 'react';
import SelectButton, { Level } from './SelectButton';
import User from '@/models/User';
import css from './Diffuculty.module.css';

export default function DiffucultySelect() {
  const difficulty = User.getDifficulty();
  const [isActive, setIsActive] = useState<Level>(difficulty.level);

  return (
    <motion.section
       className={css['select']}
         animate='animate'
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 variants={{ animate: { opacity: [0, 1], transition: { duration: 1 } } }}>
        Schwierigkeitsgrad
      </motion.h2>
      <SelectButton level='einfach' state={{ isActive, setIsActive }} />
      <SelectButton level='mittel'  state={{ isActive, setIsActive }} />
      <SelectButton level='schwer'  state={{ isActive, setIsActive }} />
    </motion.section>
  );
}
