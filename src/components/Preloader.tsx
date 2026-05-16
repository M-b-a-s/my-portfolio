import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  duration = 3,
}) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete?.();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#2a2a2a] z-50"
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (isComplete) {
          // Remove from DOM after fade out
        }
      }}
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Larger outer circle */}
        <motion.div
          className="absolute w-32 h-32 border-8 border-white rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Smaller inner circle - bounces then enters */}
        <motion.div
          className="absolute w-12 h-12 bg-white rounded-full"
          initial={{ y: -80, opacity: 1 }}
          animate={{
            y: [
              -80, // Start position above
              -60, // Bounce 1
              -80, // Return
              -60, // Bounce 2
              -80, // Return
              -60, // Bounce 3
              -80, // Return
              0, // Final position in center
            ],
            opacity: [1, 1, 1, 1, 1, 1, 1, 0.8],
          }}
          transition={{
            duration: duration,
            times: [
              0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1,
            ],
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;