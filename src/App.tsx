import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "./components/Preloader";
import Home from "./components/Home";

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowPreloader(false), 800); // match fade duration
    }, 8000); // Show preloader for 8 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

    <div className="min-h-screen w-full relative">
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            key="preloader"
            className="flex items-center justify-center min-h-screen w-full fixed inset-0 z-50 bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1, scale: fadeOut ? 0.95 : 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Preloader
              sentence="One sec, please..."
              manualMode={false}
              blurAmount={5}
              borderColor="#815634"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!showPreloader && <Home />}
    </div>
    </ThemeProvider>
  );
};

export default App;
