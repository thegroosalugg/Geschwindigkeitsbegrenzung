import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import Timer from '@/model/Timer';
import css from './Score.module.css';

interface DispItemProps {
          entry: 'solved' | 'total' | 'lives';
           user: User;
  shouldAnimate: boolean;
    isAnimating: boolean;
}

const DisplayItem = ({ entry, user, shouldAnimate, isAnimating }: DispItemProps) => {
  const isTotal = entry === 'total';
  const content = user[entry] + (isTotal ? -user.score : entry === 'solved' ? -1 : 1);

  return (
    <motion.p
      initial={false}
      animate={{
             scale: shouldAnimate && !isTotal ? [1, 1.2, 1] : 1,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0.07 },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate            ? [1, 0, 1] : 1,
              scaleY: shouldAnimate && isTotal ? [1, 0, 1] : 1,
          transition: { ease: 'easeInOut', duration: 0.5, delay: isTotal ? 1.1 : 0.9 },
        }}
      >
        {shouldAnimate && isAnimating ? content : user[entry]}
      </motion.span>
    </motion.p>
  );
};

interface ScoreProps {
   user: User;
  timer: Timer;
}

export default function Score({ user, timer }: ScoreProps) {
  const { isCorrect, score } = user;
  const { isAnimating, isStopped } = timer;
  const onIsRight =  isCorrect && isStopped;
  const onIsWrong = !isCorrect && isStopped;
  const direction = useRef(1);
  const background =
  score < 10 ? "#aa4834" :
  score < 20 ? "#adadad" :
  score < 30 ? "#6ba816" :
  score < 40 ? "#167ca8" :
  "#9B7EBD";

  return (
    <motion.div className={css['score']} exit={{ opacity: 0, y: 100, transition: { duration: 1, delay: 0.4 } }}>
      <DisplayItem entry='solved' user={user} shouldAnimate={onIsRight} isAnimating={isAnimating} />
      <DisplayItem entry='total'  user={user} shouldAnimate={onIsRight} isAnimating={isAnimating} />
      <DisplayItem entry='lives'  user={user} shouldAnimate={onIsWrong} isAnimating={isAnimating} />
      <AnimatePresence onExitComplete={() => direction.current = direction.current === 1 ? -1 : 1}>
        {onIsRight && isAnimating && (
          <motion.div
            className={css['pop-up']}
              style={{ background }}
            initial={{ opacity: 0 , translateY: 0, rotate: 0 }}
               exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
            animate={{
                 opacity:   1,
              translateY: -40,
              rotate:  10 * direction.current,
              transition: { type: 'spring', damping: 55, stiffness: 300, delay: 0.2 }
            }}
          >
            {score}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
