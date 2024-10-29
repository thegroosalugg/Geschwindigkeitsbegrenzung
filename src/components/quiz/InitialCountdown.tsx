import { motion } from 'framer-motion';
import css from './InitialCountdown.module.css';

const NumberSpan = ({ num }: { num: number }) => {
  const delay = (num === 3 ? 1 : num === 1 ? 3 : num) - 0.5;
  return (
    <motion.span
        style={{ originY: 1 }}
      initial={{ opacity: 0, scaleY: 1 }}
      animate={{ opacity: [1, 0], scaleY: [1, 0], transition: { duration: 1, delay } }}
    >
      {num}
    </motion.span>
  );
};

export default function InitialCountdown() {
  return (
    <motion.div className={css['countdown']} exit={{ opacity: 0 }}>
      <NumberSpan num={3} />
      <NumberSpan num={2} />
      <NumberSpan num={1} />
    </motion.div>
  );
}
