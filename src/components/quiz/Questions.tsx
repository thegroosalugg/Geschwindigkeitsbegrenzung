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
  const quesArray = question.q.split('___');
  const { isInitial, isStopped, isPaused, max, remaining } = timer;

  return (
    <motion.div
      className={css['question']}
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
          <motion.article
                key={question.id}
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
                     color: isPaused ? '#e6e6e6' : '#42275a',
                background: isPaused ? '#3A6D8C' : '#e6e6e6'
              }}
            >
              {quesArray[0]}
              <AnimatePresence mode='wait'>
                <motion.span
                      key={isStopped + ''}
                    style={{ minWidth: 72 }}
                  initial={{ opacity: 0 }}
                     exit={{ opacity: 0 }}
                  animate={{
                       opacity: 1,
                         color: isStopped ? '#cd8f2a' : isPaused ? '#e6e6e6' : '#42275a',
                    transition: { delay: isPaused ? 0 : 0.3 },
                  }}
                >
                  {isStopped ? question.a : '_____'}
                </motion.span>
              </AnimatePresence>
              {quesArray[1]}
            </motion.h1>
            {/* offset animation time from progress timer */}
            <progress value={remaining} max={max - 500} />
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
