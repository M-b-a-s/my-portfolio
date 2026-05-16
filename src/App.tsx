import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider"
import Preloader from "./components/Preloader";
import Home from "./components/Home";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const isAboutPage = window.location.pathname === "/about";
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isAboutPage) {
      setShowPreloader(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowPreloader(false), 400); // match fade duration
    }, 3000); // 
    return () => clearTimeout(timer);
  }, [isAboutPage]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

    <div className="min-h-screen w-full relative">
      <AnimatePresence mode="wait">
        {showPreloader && (
          <motion.div
            key="preloader"
            className="flex items-center justify-center min-h-screen w-full fixed inset-0 z-50 bg-[#2a2a2a]"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Preloader
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showPreloader ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {!showPreloader && (isAboutPage ? <AboutPage /> : <Home />)}
      </motion.div>
    </div>
    </ThemeProvider>
  );
};

export default App;
