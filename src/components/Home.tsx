import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode, type RefObject } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";
import Footer from "./Footer";
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
  const [toolsRef, toolsInView] = useInView();
  const [footerRef, footerInView] = useInView();

  useEffect(() => {
    if (!hasAnimated && footerInView) {
      setHasAnimated(true);
    }
  }, [footerInView, hasAnimated]);

  return (
    <div>
      <div className="fixed bottom-10 right-8 z-50">
        <ModeToggle />
      </div>
      <Navbar />
      <div className="mx-auto w-[90vw] md:w-[700px] max-w-full">
        <Hero />
        <AnimatedSection refObj={aboutRef} inView={aboutInView} hasAnimated={hasAnimated}>
          <About />
        </AnimatedSection>
        <AnimatedSection refObj={expRef} inView={expInView} hasAnimated={hasAnimated}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection refObj={projRef} inView={projInView} hasAnimated={hasAnimated}>
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection refObj={toolsRef} inView={toolsInView} hasAnimated={hasAnimated}>
          <ToolsSection />
        </AnimatedSection>
        <AnimatedSection refObj={footerRef} inView={footerInView} hasAnimated={hasAnimated}>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;