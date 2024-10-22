import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import NavBar from '@/components/navigation/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode='popLayout'>
        <motion.main
          id='main'
          key={pathname + Math.random()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
