import Tools from "./Tools";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiVite, SiNextdotjs } from "react-icons/si";

const toolsItems = [
  {
    icon: <FaReact className="w-8 h-8" />,
    color: "blue",
    label: "React",
  },
  {
    icon: <SiTypescript className="w-8 h-8" />,
    color: "indigo",
    label: "TypeScript",
  },
  {
    icon: <SiNextdotjs className="w-8 h-8" />,
    color: "gray",
    label: "Next.js",
  },
  {
    icon: <SiVite className="w-8 h-8" />,
    color: "purple",
    label: "Vite",
  },
  {
    icon: <FaNodeJs className="w-8 h-8" />,
    color: "green",
    label: "Node.js",
  },
  {
    icon: <FaGitAlt className="w-8 h-8" />,
    color: "orange",
    label: "Git",
  },
];

const ToolsSection = () => (
  <section id="tools" className="mt-20 px-4">
    <h2 className="text-3xl font-bold text-[#212121] mb-4">
      Tools & Technologies
    </h2>
    <Tools items={toolsItems} />
  </section>
);

export default ToolsSection;
