import { motion, AnimatePresence } from 'framer-motion';
import Question from '@/models/Question';
import Timer from '@/models/Timer';
import css from './Questions.module.css';

interface QuestionProps {
  question: Question;
     timer: Timer;
}

export default function Questions({ question, timer }: QuestionProps) {
  const quesArray = question.q.split('___');

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
        {!timer.isInitial && (
          <motion.article
                key={question.id}
              style={{ originY: 0.2 }}
            initial={{ scaleY: 0 }}
               exit={{ scaleY: 0 }}
            animate={{
                  scaleY: 1,
              transition: { scaleY: { delay: 0.2, duration: 0.5, ease: 'easeInOut' } },
            }}
          >
            <h1>
              {quesArray[0]}
              <AnimatePresence mode='wait'>
                <motion.span
                      key={timer.isStopped + ''}
                    style={{ minWidth: 72 }}
                  initial={{ opacity: 0 }}
                     exit={{ opacity: 0 }}
                  animate={{
                       opacity: 1,
                         color: timer.isStopped ? '#cd8f2a' : '#42275a',
                    transition: { delay: 0.3 },
                  }}
                >
                  {timer.isStopped ? question.a : '_____'}
                </motion.span>
              </AnimatePresence>
              {quesArray[1]}
            </h1>
            {/* offset animation time from progress timer */}
            <progress value={timer.remaining} max={timer.max - 500} />
          </motion.article>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
