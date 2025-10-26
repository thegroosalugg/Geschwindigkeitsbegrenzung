import { motion } from "framer-motion";
import { translations } from "@/data/translations";
import WordEntry from "./WordEntry";
import Header from "../ui/Header";
import css from "./WordBook.module.css";

export default function WordBook() {
  return (
    <>
      <Header>Verben</Header>
      <motion.ul
        className={css["wordbook"]}
          animate={{ opacity: [0, 1], transition: { duration: 1, ease: "easeIn" } }}
      >
        {translations.map((word) => (
          <WordEntry key={word.body} {...word} />
        ))}
      </motion.ul>
    </>
  );
}
