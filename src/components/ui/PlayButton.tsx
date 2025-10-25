import { motion, HTMLMotionProps } from "framer-motion";
import User from "@/models/User";
import css from './PlayButton.module.css';

const backgrounds = ['easy', 'medium', 'hard'];

export default function PlayButton({
  children,
  ...props
}: { children: React.ReactNode } & HTMLMotionProps<"button">) {
  const level = User.getDifficulty();

  return (
    <motion.button
      className={css["play-btn"]}
           style={{ background: `var(--${backgrounds[level - 1]})` }}
      whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.5 } }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
