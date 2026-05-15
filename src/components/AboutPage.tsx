import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";

const aboutText = [
  "I'm Mbas, a software engineer who enjoys turning rough ideas into clean, useful products.",
  "I care about systems that work well in the real world: fast interfaces, reliable cloud workflows, thoughtful automation, and code that stays understandable after launch.",
  "My work sits around software engineering, DevOps, and cloud infrastructure, with a bias for shipping practical things people can actually use.",
];

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101114] text-white">
      <a
        href="/"
        className="fixed left-5 top-5 z-30 text-sm font-semibold text-white transition-colors hover:text-white/70"
      >
        ©M-b-a-s
      </a>

      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Preloader
              sentence="About M-b-a-s"
              manualMode={false}
              blurAmount={4}
              borderColor="#ffffff"
              glowColor="rgba(255, 255, 255, 0.45)"
              animationDuration={0.8}
              pauseBetweenAnimations={0.6}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="flex min-h-screen items-center justify-center px-5 py-24">
        <motion.div
          className="max-w-4xl bg-black/40 px-6 py-10 backdrop-blur-md md:px-12 md:py-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 24 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-6 text-sm font-bold uppercase text-white/45">
            About
          </p>
          <div className="space-y-6 text-2xl font-medium leading-tight text-white md:text-5xl">
            {aboutText.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
