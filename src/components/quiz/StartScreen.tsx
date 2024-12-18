import { motion } from 'framer-motion';
import Timer from '@/models/Timer';
import useDebounce from '@/hooks/useDebounce';
import css from './StartScreen.module.css';

export default function StartScreen({ timer }: { timer: Timer }) {
  const { isDebouncing, throttleFn } = useDebounce();
  const mouseEvent = (scale: number) =>
    ({ scale, color: '#FFFFFF', textShadow: '2px 2px 4px #4B0082', borderColor: '#e6e6e6' });

  return (
    <section className={css['start-screen']}>
      <motion.h1
        animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}
           exit={{  scaleY:      0, transition: { duration: 0.5 } }}
      >
        Geschwindigkeitsbegrenzung
      </motion.h1>
      <motion.img
            src='/skeletons.png'
            alt='skeletons playing instruments'
        animate={{ opacity: [0, 1], transition: { duration: 1, ease: 'easeIn' } }}
           exit={{ opacity: 0 }}
      />
      <motion.button
          disabled={isDebouncing}
           onClick={() => throttleFn(timer.start, 700)}
        whileHover={mouseEvent(1.1)}
          whileTap={mouseEvent(1.2)}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
           animate={{
             opacity: [0, 1],
               scale: [1.2, 1],
          background: ['#898121', '#859F3D', '#C4E1F6', '#789DBC', '#257180'],
          transition: {
            background: { duration: 8, repeat: Infinity, repeatType: 'mirror' },
              duration: 0.7,
          },
        }}
      >
        Präpositionen
      </motion.button>
    </section>
  );
}
