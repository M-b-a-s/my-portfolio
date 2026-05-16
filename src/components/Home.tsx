import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode, type RefObject } from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import ProjectsSection from "./ProjectsSection";
import Skills from "./Skills";
import { useInView } from "../lib/useInView";
import { ModeToggle } from "./mode-toggle";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   duration: 0.7,
    //   ease: [0, 0, 0.58, 1], // cubic-bezier for easeOut
    // },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  refObj: RefObject<HTMLElement | null>;
  inView: boolean;
  hasAnimated: boolean;
}

const AnimatedSection = ({ children, refObj, inView, hasAnimated }: AnimatedSectionProps) => (
  <motion.section
    ref={refObj}
    initial="hidden"
    animate={hasAnimated ? "visible" : inView ? "visible" : "hidden"}
    variants={sectionVariants}
  >
    {children}
  </motion.section>
);

const Home = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [aboutRef, aboutInView] = useInView();
  const [expRef, expInView] = useInView();
  const [projRef, projInView] = useInView();
  const [skillsRef, skillsInView] = useInView();

  useEffect(() => {
    if (!hasAnimated && (aboutInView || skillsInView || expInView || projInView)) {
      setHasAnimated(true);
    }
  }, [projInView, aboutInView, skillsInView, expInView, hasAnimated]);

  return (
    <div>
      <div className="fixed bottom-10 right-8 z-50">
        <ModeToggle />
      </div>
      <div className="mx-auto max-w-full">
        <Hero />
        <AnimatedSection refObj={aboutRef} inView={aboutInView} hasAnimated={hasAnimated}>
          <About />
        </AnimatedSection>
        <AnimatedSection refObj={skillsRef} inView={skillsInView} hasAnimated={hasAnimated}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection refObj={expRef} inView={expInView} hasAnimated={hasAnimated}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection refObj={projRef} inView={projInView} hasAnimated={hasAnimated}>
          <ProjectsSection />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;
