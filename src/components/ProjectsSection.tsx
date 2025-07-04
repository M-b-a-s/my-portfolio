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
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-2 m-4">
      <div className="col-start-1 row-start-1 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 bg-[#815634] rounded-md p-10">0</div>
      <div className="col-start-1 row-start-2 row-span-2 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 bg-[#815634] rounded-md p-10">1</div>
      <div className="col-start-2 row-start-1 row-span-2 md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-1 bg-[#815634] rounded-md p-10">3</div>
      <div className="md:block md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1 bg-[#815634] rounded-md p-10">4</div>
      <div className="hidden md:block md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-2 bg-[#815634] rounded-md p-10">5</div>
      {/* <Projects color="#815634" items={projectItems} /> */}
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
