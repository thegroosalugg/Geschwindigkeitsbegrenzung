import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import Timer from '@/model/Timer';
import css from './Score.module.css';

interface DispItemProps {
           item: number;
         score?: number;
  shouldAnimate: boolean;
    isAnimating: boolean;
}

const DisplayItem = ({ item, score, shouldAnimate, isAnimating }: DispItemProps) => {
  return (
    <motion.p
      initial={false}
      animate={{
             scale: shouldAnimate && !score ? [1, 1.2, 1] : 1,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0.1 },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate          ? [1, 0, 1] : 1,
              scaleY: shouldAnimate && score ? [1, 0, 1] : 1,
          transition: { ease: 'easeInOut', duration: 0.5, delay: score ? 1.1 : 0.9 },
        }}
      >
        {shouldAnimate && isAnimating ? (score ? item - score : item - 1) : item}
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
  const { isAnimating, isStopped } = timer;
  const onIsRight =  isCorrect && isStopped;
  const onIsWrong = !isCorrect && isStopped;

  return (
    <div className={css['score']}>
      <DisplayItem item={solved} shouldAnimate={onIsRight} isAnimating={isAnimating} />
      <DisplayItem item={total}  shouldAnimate={onIsRight} isAnimating={isAnimating} score={score} />
      <DisplayItem item={missed} shouldAnimate={onIsWrong} isAnimating={isAnimating} />
      <AnimatePresence>
        {onIsRight && isAnimating && (
          <motion.div className={css['pop-up']}>{score}</motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
