import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import Timer from '@/model/Timer';
import css from './Score.module.css';

interface ScoreProps {
  user: User;
  timer: Timer;
}

export default function Score({ user, timer }: ScoreProps) {
  const { solved, missed, score, total } = user;

  return (
    <div className={css['score']}>
      <motion.p>
        <motion.span>{solved}</motion.span>
      </motion.p>
      <motion.p>
        <motion.span>{total}</motion.span>
      </motion.p>
      <motion.p>
        <motion.span>{missed}</motion.span>
      </motion.p>
      <AnimatePresence>
        {score > 0 && timer.isAnimating && <motion.div className={css['pop-up']}>{score}</motion.div>}
      </AnimatePresence>
    </div>
  );
}
