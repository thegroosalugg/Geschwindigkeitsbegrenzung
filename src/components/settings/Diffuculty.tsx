import { motion } from 'framer-motion';
import { useState } from 'react';
import SelectButton from './SelectButton';
import User from '@/models/User';
import css from './Diffuculty.module.css';

export default function DiffucultySelect() {
  const level = User.getDifficulty();
  const [isActive, setIsActive] = useState(level);

  return (
    <motion.section
       className={css['select']}
         animate='animate'
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2 variants={{ animate: { opacity: [0, 1], transition: { duration: 1 } } }}>
        Schwierigkeitsgrad
      </motion.h2>
      <SelectButton level={1} state={{ isActive, setIsActive }} />
      <SelectButton level={2} state={{ isActive, setIsActive }} />
      <SelectButton level={3} state={{ isActive, setIsActive }} />
    </motion.section>
  );
}
