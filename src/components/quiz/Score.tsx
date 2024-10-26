import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import Timer from '@/model/Timer';
import css from './Score.module.css';

interface DispItemProps {
           item: number;
  shouldAnimate: boolean;
       isTotal?: boolean;
}

const DisplayItem = ({ item, shouldAnimate, isTotal }: DispItemProps) => {
  return (
    <motion.p
      initial={false}
      animate={{
             scale: shouldAnimate && !isTotal ? [1, 1.2, 1] : 1,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0.1 },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate ? [0, 1] : 1,
          transition: { ease: 'easeInOut', duration: 1.5, },
        }}
      >
        {item}
      </motion.span>
    </motion.p>
  );
};

interface ScoreProps {
   user: User;
  timer: Timer;
}

export default function Score({ user, timer }: ScoreProps) {
  const { isCorrect, solved, missed, score, total } = user;
  const onIsRight =  isCorrect && timer.isStopped;
  const onIsWrong = !isCorrect && timer.isStopped;

  return (
    <div className={css['score']}>
      <DisplayItem item={solved} shouldAnimate={onIsRight} />
      <DisplayItem item={total}  shouldAnimate={onIsRight} isTotal />
      <DisplayItem item={missed} shouldAnimate={onIsWrong} />
      <AnimatePresence>
        {onIsRight && timer.isAnimating && (
          <motion.div className={css['pop-up']}>{score}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
