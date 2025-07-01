import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import ProjectsSection from "./ProjectsSection";
import ToolsSection from "./ToolsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-[90vw] md:w-[700px] max-w-full">
        <Hero />
        <About />
        <Experience />
        <ProjectsSection />
        <ToolsSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;