import { motion } from 'framer-motion'
import Header from '../ui/Header'
import css from './AboutApp.module.css'

export default function AboutApp() {
  const variants = { animate: { opacity: [0, 1] } }

  return (
    <motion.div className={css['about-app']} animate="animate" transition={{ staggerChildren: 0.2 }}>
      <Header {...{ variants }}>About</Header>
      <motion.p {...{ variants }}>
        I’m a full‑stack developer based in Berlin. I built this quiz app while studying for my B2 German exam, after
        noticing how often learners struggled with verb–preposition combinations. Instead of memorising long lists, I
        wanted a small, focused tool that makes practice quick, repeatable, and a bit more fun. The app uses the
        learning materials from my course and wraps them in a clean, responsive interface. You can find more details in
        the project’s README below.
      </motion.p>
      <motion.nav className={css['app-links']} {...{ variants }}>
        <a href="https://github.com/thegroosalugg/Geschwindigkeitsbegrenzung" target="_blank">
          View Source Code
        </a>
        <a href="https://victor-loginov.vercel.app/" target="_blank">
          More from me
        </a>
      </motion.nav>
      <Header {...{ variants }}>Privacy</Header>
      <motion.p {...{ variants }}>
        This app collects minimal technical data (page URL, screen size, browser user agent, and timestamp) for learning
        purposes only. The data is not retained long-term and is not shared with any third parties.
      </motion.p>
    </motion.div>
  )
}
