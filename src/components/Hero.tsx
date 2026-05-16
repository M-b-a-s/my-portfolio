import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import meImg from "../assets/me.png";
import { ArrowDownRight } from "lucide-react";

const Hero = () => {
  const displayName = "Ifechimenim Ikwukala-Mbas — ";
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const nameX = useSpring(useTransform(scrollYProgress, [0, 1], [72, -180]), {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: `url(${meImg})`,
        backgroundPosition: "top center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Top content - Location badge */}
      <div className="absolute z-10 top-[40%] left-0 p-4 rounded-r-full bg-black/80 b">
        <div className="flex items-center gap-3 w-fit">
          <div className="bg-white rounded-full p-3">
            <svg
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-white text-sm">
            <p>Located in</p>
            <p className="font-semibold">Nigeria</p>
          </div>
        </div>
      </div>

      {/* Right side content - Title */}
      <div className="absolute z-10 top-[35%] right-0 pr-8 hidden md:block">
        <ArrowDownRight className="text-white"/>
        <p className="text-2xl text-white mb-4">
          Software & <br />QA Engineer
        </p>
      </div>

      {/* Bottom - Full width name */}
      <div className="absolute bottom-0 z-10 w-full overflow-hidden py-12">
        <motion.div
          className="w-max"
          style={{ x: nameX }}
        >
          <motion.div
            className="flex w-max whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[displayName, displayName].map((name, index) => (
              <h1
                key={index}
                className="pr-10 text-9xl md:pr-16 lg:text-8xl font-bold text-white leading-none"
              >
                {name}
              </h1>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
