import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NavBar from "@/components/navigation/NavBar";
import { useEffect } from "react";
import { postAnalytics } from "@/util/analytics";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    postAnalytics()
  })

  return (
    <div id="content">
      <NavBar />
      <AnimatePresence mode="popLayout">
        <motion.main
                  id="main"
                 key={pathname}
                exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
