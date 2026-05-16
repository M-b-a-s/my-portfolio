import { motion } from "framer-motion";

const aboutText = [
  "I'm Mbas, a software engineer who enjoys turning rough ideas into clean, useful products.",
  "I care about systems that work well in the real world: fast interfaces, reliable cloud workflows, thoughtful automation, and code that stays understandable after launch.",
];

const AboutPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white pt-20">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)]">
        {/* Left Section - About Text */}
        <motion.section
          className="flex-1 flex flex-col justify-center px-8 md:px-12 py-12 lg:py-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              About Me
            </h1>
            <div className="space-y-6 text-lg md:text-xl leading-relaxed font-light opacity-90">
              {aboutText.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            <motion.button
              className="mt-10 px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.section>

       
      </div>
    </main>
  );
};

export default AboutPage;
