import Projects from "./Projects";
import portfolioImg from "../assets/portfolio.png";
import viteSvg from "../../public/vite.svg";

const projectItems = [
  <a
    href="https://www.m-b-a-s.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src={portfolioImg}
      alt="Portfolio Website"
      className="w-full h-full object-cover rounded-lg"
    />
  </a>,
  <a
    href="https://your-ai-chatbot.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src={viteSvg}
      alt="AI Chatbot"
      className="w-full h-full object-cover rounded-lg"
    />
  </a>,
  <a
    href="https://your-ecommerce-dashboard.com"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src={viteSvg}
      alt="E-commerce Dashboard"
      className="w-full h-full object-cover rounded-lg"
    />
  </a>,
];

const ProjectsSection = () => (
  <section id="projects" className="mt-20 px-4">
    <h2 className="text-3xl font-bold text-[#212121] dark:text-white mb-8">
      Projects
    </h2>
    <div className="flex justify-center">
      <Projects color="#815634" items={projectItems} />
    </div>
    <div className="flex justify-center mt-6">
      <a
        href="#"
        className="bg-white border border-[#815634] hover:bg-[#312f2f] hover:text-white text-[#615634] font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200"
      >
        More Projects
      </a>
    </div>
  </section>
);

export default ProjectsSection;
