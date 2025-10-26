import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useDelay from '@/hooks/useDelay';
import User from '@/models/User';
import Timer from '@/models/Timer';
import css from './Score.module.css';

interface ScoreItemProps {
      isSolved?: boolean;
       isTotal?: boolean;
       isLives?: boolean;
  shouldAnimate: boolean;
          delay: number;
          timer: Timer;
           user: User;
}

const ScoreItem = ({ isSolved, isTotal, isLives, shouldAnimate, delay, timer, user }: ScoreItemProps) => {
  const { isAnimating } = useDelay(delay, timer.isStopped);
  const { total, score, solved, lives, item } = user;
  const hasItem = isTotal && item;
  const baseValue = isSolved ? solved : isTotal ? total : lives;

  let content;
  if (isSolved) content = baseValue - 1;
  if (isTotal)  content = hasItem ? 'Freeze!' : baseValue - score;
  if (isLives)  content = baseValue + (timer.isInitial ? 0 : 1);

  const background = isLives
    ? `var(--${lives <= 0 ? "black" : lives <= 1 ? "danger" : lives <= 2 ? "warning" : "info"})`
    : isTotal
    ? `var(--${item ? "teal" : "white"})`
    : `hsl(${80 + solved * 15}, ${50 + solved * 2}%, ${35 + solved * 2}%)`;

  const color = isTotal ? { color: `var(--${item ? 'white' : 'purple'})` } : {};

  function clickHandler() {
    if (hasItem && !timer.isStopped) timer.pause();
  }

  return (
    <motion.p
      className={css['score-item']}
        initial={false}
        onClick={clickHandler}
        animate={{
             ...color,
           background,
               cursor: hasItem ? 'pointer' : '',
                scale:
                  (shouldAnimate && !isTotal) || hasItem
                    ? [1, 1.2, 1]
                    : timer.isPaused && isTotal
                    ? [1, 2, 1]
                    : 1,
           transition: {
                   ease: 'easeInOut',
             background: { duration: 0.8, delay: isLives ? 1.5 : 0 },
                  scale: {
                       delay: isSolved ? 1.8 : 0.2,
                    duration: hasItem  ?   2 : 0.5,
                      repeat: hasItem && Infinity,
                  },
           },
        }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate && !hasItem          ? [1, 0, 1] : 1,
              scaleY: shouldAnimate &&  isTotal && !item ? [1, 0, 1] : 1,
              scaleX: shouldAnimate && !isTotal          ? [1, 0, 1] : 1,
          translateY: isSolved ? -4 : isLives ? -2 : 0,
          transition: {
                 ease: 'easeInOut',
             duration: 0.5,
                delay: isTotal ? 1.3 : isSolved ? 2.2 : 1
          },
        }}
      >
        {((shouldAnimate && isAnimating) || hasItem) ? content : baseValue}
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
  const background = `var(--${
    score < 10 ? 'gray'    :
    score < 20 ? 'danger'  :
    score < 30 ? 'success' :
    score < 40 ? 'teal'    :
    'violet'
  })`;

  return (
    <motion.div
      className={css['score']}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x:   0, transition: { duration: 0.5 } }}
           exit={{ opacity: 0, y: 100, rotate: -20, transition: { duration: 1, delay: 0.4 } }}
    >
      <ScoreItem {...{ user, timer }} shouldAnimate={onIsRight} delay={2200} isSolved />
      <ScoreItem {...{ user, timer }} shouldAnimate={onIsRight} delay={1400} isTotal  />
      <ScoreItem {...{ user, timer }} shouldAnimate={onIsWrong} delay={1200} isLives  />
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
