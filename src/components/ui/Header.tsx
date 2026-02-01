import { motion } from "framer-motion";
import css from './Header.module.css';

export default function Header({ children, ...props }: { children: React.ReactNode }) {
  return (
    <motion.h1
      className={css["header"]}
        animate={{ opacity: [0, 1], transition: { duration: 1, ease: "easeIn" } }}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
