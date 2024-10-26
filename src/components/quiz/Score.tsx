// import { motion, AnimatePresence } from 'framer-motion';
import User from '@/model/User';
import css from './Score.module.css';

export default function Score({ user }: { user: User }) {
  const { solved, missed, score } = user;

  return (
    <div className={css['score']}>
      <p>{solved}</p>
      <p>{score}</p>
      <p>{missed}</p>
    </div>
  );
}
