import { motion } from 'framer-motion';
import { useState } from 'react';
import SelectButton from './SelectButton';
import User from '@/models/User';
import css from './Diffuculty.module.css';

export default function DiffucultySelect() {
  const level = User.getDifficulty();
  const [isActive, setIsActive] = useState(level);

  return (
    <section className={css['difficulty']}>
      <motion.h2 animate={{ opacity: [0, 1], transition: { duration: 1.5, ease: 'easeIn' } }}>
        Schwierigkeitsgrad
      </motion.h2>
      <motion.section animate='animate' transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}>
        <SelectButton level={1} state={{ isActive, setIsActive }} />
        <SelectButton level={2} state={{ isActive, setIsActive }} />
        <SelectButton level={3} state={{ isActive, setIsActive }} />
      </motion.section>
    </section>
  );
}
