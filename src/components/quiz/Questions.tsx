import { motion, AnimatePresence } from 'framer-motion';
import Question from '@/model/Question';
import Timer from '@/model/Timer';
import User from '@/model/User';
import css from './Questions.module.css';

interface QuestionProps {
  question: Question;
      user: User;
     timer: Timer;
}

export default function Questions({ user, question, timer }: QuestionProps) {
  const quesArray = question.q.split('___');

  return (
    <AnimatePresence mode='wait'>
        <motion.div
          className={css['question']}
              key={question.id}
            style={{ originY: 0.2 }}
          initial={{  scaleY:   0 }}
             exit={{  scaleY:   0 }}
          animate={{
                scaleY: timer.isStopped && user.choice ? [1, 0, 1] : 1,
            transition: { scaleY: { delay: 0.2 } },
          }}
        >
          <h1>
            {quesArray[0]}
            <AnimatePresence mode='wait'>
              <motion.span
                    key={timer.isStopped + ''}
                  style={{ minWidth: 72 }}
                initial={{  opacity:  0 }}
                   exit={{  opacity:  0 }}
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
          <progress value={timer.remaining} max={timer.max} />
        </motion.div>
      </AnimatePresence>
  )
}
