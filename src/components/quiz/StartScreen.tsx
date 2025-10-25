import { motion } from 'framer-motion';
import Timer from '@/models/Timer';
import useDebounce from '@/hooks/useDebounce';
import Header from '../ui/Header';
import PlayButton from '../ui/PlayButton';
import css from './StartScreen.module.css';

export default function StartScreen({ timer }: { timer: Timer }) {
  const { isDebouncing, throttleFn } = useDebounce();

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
      <PlayButton disabled={isDebouncing} onClick={() => throttleFn(timer.start, 700)}>
        Spiel
      </PlayButton>
    </>
  );
}
