import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDelay from '@/hooks/useDelay';
import User from '@/models/User';
import Timer from '@/models/Timer';
import css from './Score.module.css';

interface DispItemProps {
      isSolved?: boolean;
       isTotal?: boolean;
       isLives?: boolean;
  shouldAnimate: boolean;
          delay: number;
          timer: Timer;
           user: User;
}

const DisplayItem = ({ isSolved, isTotal, isLives, shouldAnimate, delay, timer, user }: DispItemProps) => {
  const { isAnimating } = useDelay(delay, timer.isStopped);
  const { total, score, solved, lives, item } = user;
  const hasItem = isTotal && item;
  const baseValue = isSolved ? solved : isTotal ? total : lives;

  let content;
  if (isSolved) content = baseValue - 1;
  if (isTotal)  content = baseValue - score;
  if (isLives)  content = baseValue + (timer.isInitial ? 0 : 1);

  const background = isLives
    ? { background: lives <= 0 ? '#000000' : lives <= 1 ? '#aa4834' : lives <= 2 ? '#d39b3a' : '#1666a8' }
    : isTotal
    ? { background: item ? '#3A6D8C' : '#e6e6e6' }
    : {};

  const color = isTotal ? { color: item ? '#e6e6e6' : '#42275a' } : {};

  const clipPath = isTotal
    ? {
        clipPath: item
          ? 'polygon(71% 0%, 84% 16%, 100% 36%, 86% 58%, 73% 75%, 28% 75%, 0% 75%, 13% 38%, 0% 0%, 29% 0%)'
          : 'polygon(75% 0%, 100% 0%, 100% 75%, 75% 75%, 45% 75%, 15% 100%, 25% 75%, 0% 75%, 0% 0%, 25% 0%)',
      }
    : {};

  function clickHandler() {
    if (hasItem && !timer.isStopped) {
      timer.pause();
      console.log('item used'); // *logData
    }
  }

  return (
    <motion.p
      initial={false}
      onClick={clickHandler}
      animate={{
        ...background,
         ...clipPath,
          ...color,
             scale:
              (shouldAnimate && !isTotal) || hasItem
                ? [1, 1.2, 1]
                : timer.isPaused && isTotal
                ? [1, 2, 1]
                : 1,
            cursor: hasItem ? 'pointer' : '',
        transition: {
           ease: 'easeInOut',
          scale: {
               delay: isSolved ? 1.8 : 0.2,
            duration: hasItem  ?   2 : 0.5,
              repeat: hasItem && Infinity,
          },
          background: { duration: 0.8, delay: isLives ? 1.5 : 0 },
            clipPath: { duration: 0.5, ease: 'easeInOut' }
        },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate             ? [1, 0, 1] : 1,
              scaleY: shouldAnimate &&  isTotal ? [1, 0, 1] : 1,
              scaleX: shouldAnimate && !isTotal ? [1, 0, 1] : 1,
          translateY: isTotal ? -6 : isSolved ? -5 : -2,
          translateX: isTotal ? -2 : 0,
          transition: {
                 ease: 'easeInOut',
             duration: 0.5,
                delay: isTotal ? 1.3 : isSolved ? 2.2 : 1
          },
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
  const { isStopped } = timer;
  const { isCorrect, score } = user;
  const { isAnimating } = useDelay(1200, isStopped);
  const onIsRight =  isCorrect && isStopped;
  const onIsWrong = !isCorrect && isStopped;
  const direction = useRef(1);
  const background =
  score < 10 ? '#aa4834' :
  score < 20 ? '#adadad' :
  score < 30 ? '#6ba816' :
  score < 40 ? '#167ca8' :
  '#9B7EBD';

  return (
    <motion.div
      className={css['score']}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x:   0, transition: { duration: 0.5 } }}
           exit={{ opacity: 0, y: 100, rotate: -20, transition: { duration: 1, delay: 0.4 } }}
    >
      <DisplayItem user={user} shouldAnimate={onIsRight} delay={2200} timer={timer} isSolved />
      <DisplayItem user={user} shouldAnimate={onIsRight} delay={1400} timer={timer} isTotal  />
      <DisplayItem user={user} shouldAnimate={onIsWrong} delay={1200} timer={timer} isLives  />
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
