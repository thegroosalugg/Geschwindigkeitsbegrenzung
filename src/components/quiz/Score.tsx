import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import useDelay from '@/hooks/useDelay';
import User from '@/models/User';
import Timer from '@/models/Timer';
import css from './Score.module.css';

interface DispItemProps {
          entry: { solved?: number, total?: number, score?: number, lives?: number };
  shouldAnimate: boolean;
          delay: number;
      condition: boolean;
}

const DisplayItem = ({ entry, shouldAnimate, delay, condition }: DispItemProps) => {
  const { isAnimating } = useDelay(delay, condition);
  const { total, score, solved, lives } = entry;
  const baseValue = solved ?? total ?? lives ?? 0;
  const isValid = (n: number | undefined) => n !== undefined;
  const content = baseValue + (isValid(total) ? -score! : isValid(solved) ? -1 : 1);
  const background =
    isValid(lives)
      ? {
          background:
            lives <= 0 ? '#000000' : lives <= 1 ? '#aa4834' : lives <= 2 ? '#8a692d' : '#1666a8',
        }
      : {};

  return (
    <motion.p
      initial={false}
      animate={{
        ...background,
             scale: shouldAnimate && !isValid(total) ? [1, 1.2, 1] : 1,
        transition: {
               ease: 'easeInOut',
              scale: { duration: 0.5, delay: isValid(solved) ? 1.8 : 0.2 },
         background: { duration: 0.8, delay: isValid(lives)  ? 1.5 :   0 },
        },
      }}
    >
      <motion.span
        initial={false}
        animate={{
             opacity: shouldAnimate                    ? [1, 0, 1] : 1,
              scaleY: shouldAnimate &&  isValid(total) ? [1, 0, 1] : 1,
              scaleX: shouldAnimate && !isValid(total) ? [1, 0, 1] : 1,
          transition: {
                 ease: 'easeInOut',
             duration: 0.5,
                delay: isValid(total) ? 1.3 : isValid(solved) ? 2.2 : 1
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
  const { isCorrect, solved, lives, score, total } = user;
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
          style={{ paddingTop: !isMobile ? '4rem' : '' }}
           exit={{ opacity: 0, y: 100, rotate: -20, transition: { duration: 1, delay: 0.4 } }}
    >
      <DisplayItem entry={{    solved    }} shouldAnimate={onIsRight} delay={2200} condition={isStopped} />
      <DisplayItem entry={{ total, score }} shouldAnimate={onIsRight} delay={1400} condition={isStopped} />
      <DisplayItem entry={{    lives     }} shouldAnimate={onIsWrong} delay={1200} condition={isStopped} />
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
