import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./components/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  const pathname = window.location.pathname;
  const isAboutPage = pathname === "/about";
  const isWorkPage = pathname === "/work";
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/" || pathname === "";
  
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setShowPreloader(false);
      return;
    }

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowPreloader(false), 400); // match fade duration
    }, 3000); // 
    return () => clearTimeout(timer);
  }, [isHomePage]);

  const renderPage = () => {
    if (isAboutPage) return <AboutPage />;
    if (isWorkPage) return <div className="min-h-screen flex items-center justify-center text-2xl">Work Page - Coming Soon</div>;
    if (isContactPage) return <ContactPage />;
    return <Home />;
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full relative flex flex-col">
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
              <Preloader />
            </motion.div>
          )}
        </AnimatePresence>

        {!showPreloader && (
          <>
            <Navbar />
            <motion.main
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {renderPage()}
            </motion.main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
