import { motion } from 'framer-motion';
import Timer from '@/models/Timer';
import useDebounce from '@/hooks/useDebounce';
import Header from '../ui/Header';
import User from '@/models/User';
import css from './StartScreen.module.css';

const backgrounds = ['easy', 'medium', 'hard'];

export default function StartScreen({ timer }: { timer: Timer }) {
  const { isDebouncing, throttleFn } = useDebounce();
  const level = User.getDifficulty();

  return (
    <>
      <Header>Geschwindigkeitsbegrenzung</Header>
      <motion.img
        className={css['cover-img']}
              src='/skeletons.png'
              alt='skeletons playing instruments'
          animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}
             exit={{ opacity: 0 }}
      />
      <motion.button
         className={css['play-btn']}
          disabled={isDebouncing}
           onClick={() => throttleFn(timer.start, 700)}
             style={{ background: `var(--${backgrounds[level - 1]})`}}
        whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.1  }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
      >
        Spiel
      </motion.button>
    </>
  );
}
