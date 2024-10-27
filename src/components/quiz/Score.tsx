import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import Timer from '@/model/Timer';
import css from './Score.module.css';

interface DispItemProps {
          entry: { solved?: number, total?: number, score?: number, lives?: number };
  shouldAnimate: boolean;
    isAnimating: boolean;
}

const DisplayItem = ({ entry, shouldAnimate, isAnimating }: DispItemProps) => {
  const { total, score, solved, lives } = entry;
  const baseValue = solved ?? total ?? lives;
  const content = baseValue! + (total ? -score! : solved ? -1 : 1);

  return (
    <motion.p
      initial={false}
      animate={{
             scale: shouldAnimate && !total ? [1, 1.2, 1] : 1,
        transition: { ease: 'easeInOut', duration: 0.5, delay: 0.07 },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate          ? [1, 0, 1] : 1,
              scaleY: shouldAnimate && total ? [1, 0, 1] : 1,
          transition: { ease: 'easeInOut', duration: 0.5, delay: total ? 1.1 : 0.9 },
        }}
      >
        {shouldAnimate && isAnimating ? content : baseValue}
      </motion.span>
    </motion.p>
  );
};

interface ScoreProps {
   user: User;
  timer: Timer;
}

export default function Score({ user, timer }: ScoreProps) {
  const { isCorrect, solved, lives, score, total } = user;
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
      <DisplayItem entry={{    solved    }} shouldAnimate={onIsRight} isAnimating={isAnimating} />
      <DisplayItem entry={{ total, score }} shouldAnimate={onIsRight} isAnimating={isAnimating} />
      <DisplayItem entry={{    lives     }} shouldAnimate={onIsWrong} isAnimating={isAnimating} />
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
