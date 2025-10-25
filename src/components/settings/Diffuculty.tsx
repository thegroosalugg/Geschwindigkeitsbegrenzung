import { motion } from "framer-motion";
import { useState } from "react";
import SelectButton from "./SelectButton";
import User from "@/models/User";
import Header from "../ui/Header";
import css from "./Diffuculty.module.css";

export default function DiffucultySelect() {
  const level = User.getDifficulty();
  const [isActive, setIsActive] = useState(level);

  return (
    <>
      <Header>Schwierigkeitsgrad</Header>
      <motion.div
         className={css["difficulty"]}
           animate="animate"
        transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      >
        <SelectButton level={1} state={{ isActive, setIsActive }} />
        <SelectButton level={2} state={{ isActive, setIsActive }} />
        <SelectButton level={3} state={{ isActive, setIsActive }} />
      </motion.div>
    </>
  );
}
