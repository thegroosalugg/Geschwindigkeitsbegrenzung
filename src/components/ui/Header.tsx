import { motion } from "framer-motion";
import css from './Header.module.css';
import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      className={css["header"]}
        animate={{ opacity: [0, 1], transition: { duration: 1, ease: "easeIn" } }}
    >
      {children}
    </motion.h1>
  );
}
