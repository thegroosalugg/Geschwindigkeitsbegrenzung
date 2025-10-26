import { motion, AnimatePresence } from 'framer-motion';
import InitialCountdown from './InitialCountdown';
import Question from '@/models/Question';
import Timer from '@/models/Timer';
import css from './Questions.module.css';

interface QuestionProps {
  question: Question;
     timer: Timer;
}

export default function Questions({ question, timer }: QuestionProps) {
  const questParts = question.body.split('___');
  const { isInitial, isStopped, isPaused, max, remaining } = timer;

  return (
    <motion.div
      className={css['container']}
      exit={{
           originX: 0.2,
                 y: 100,
            rotate: 35,
           opacity: 0,
        transition: { duration: 1, delay: 0.6 },
      }}
    >
      <AnimatePresence mode='wait'>
        {isInitial ? (
          <InitialCountdown key='countdown' />
        ) : (
          <motion.div
                  key={question.body}
            className={css['question']}
                style={{ originY: 0.2 }}
              initial={{ scaleY: 0 }}
                 exit={{ scaleY: 0 }}
              animate={{
                  scaleY: 1,
              transition: { duration: 0.5, ease: 'linear' },
            }}
          >
            <motion.h1
              animate={{
                     color: `var(--${isPaused ? 'white' : 'purple'})`,
                background: `var(--${isPaused ?  'teal' : 'white'})`,
              }}
            >
              {questParts[0]}
              <AnimatePresence mode='wait'>
                <motion.span
                      key={isStopped + ''}
                    style={{ minWidth: question.ans.length * 18 }}
                  initial={{ opacity: 0 }}
                     exit={{ opacity: 0 }}
                  animate={{
                       opacity: 1,
                         color: `var(--${isStopped ? 'gold' : isPaused ? 'white' : 'purple'})`,
                    transition: { delay: isPaused ? 0 : 0.3 },
                  }}
                >
                  {isStopped ? question.ans : '_'.repeat(question.ans.length + 1)}
                </motion.span>
              </AnimatePresence>
              {questParts[1]}
            </motion.h1>
            {/* offset animation time from progress timer */}
            <progress value={remaining} max={max - 500} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
