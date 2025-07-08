import { useState } from "react";
import portfolioImg from "../assets/portfolio.png";
import jobTracker from '../assets/job-tracker.png';
import gameo from '../assets/gameo.png'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

const projectItems = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio showcasing my skills and projects. Built with React, TypeScript, and Tailwind CSS with smooth animations powered by Framer Motion and a clean, accessible UI using shadcn/UI components.",
    image: portfolioImg,
    techUsed: ["React", "TypeScript", "Tailwind CSS", "shadcn/UI", "Vite"]
  },
  {
    id: 2,
    title: "Job Tracker",
    description: "A comprehensive application tracking system that helps job seekers organize their applications, track interview stages, and set reminders. Features include AI-powered application insights, customizable status boards, and detailed analytics on job search progress.",
    image: jobTracker,
    techUsed: ["Next.js", "TypeScript", "Shadcn/UI", "openAI"]
  },
  {
    id: 3,
    title: "Gameo",
    description: "An interactive gaming platform that connects players with similar interests and skill levels. Includes real-time matchmaking, personalized game recommendations, and a social community for discussing strategies and sharing gameplay highlights.",
    image: gameo,
    techUsed: ["React", "TypeScript", "Tailwind CSS", "Chakra UI"]
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="mt-20 px-4">
      <h2 className="text-3xl font-bold text-[#212121] dark:text-white mb-8">
        Projects
      </h2>
      
      {/* Desktop Version */}
      <div className="hidden md:flex md:flex-col md:space-y-8">
        {projectItems.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="flex flex-col">
              <div className="h-64 w-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pt-6">
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-[#f5f5f5] dark:bg-[#2a2a2a] text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Mobile Version - Creative Card Stack */}
      <div className="md:hidden">
        <div className="relative h-[500px] w-full">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.id}
              className="absolute w-full rounded-xl overflow-hidden"
              initial={{ 
                top: index * 40, 
                scale: 1 - (index * 0.05),
                zIndex: projectItems.length - index 
              }}
              animate={{ 
                top: activeProject === project.id ? 0 : index * 40,
                scale: activeProject === project.id ? 1 : 1 - (index * 0.05),
                zIndex: activeProject === project.id ? projectItems.length + 1 : projectItems.length - index
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <Card className="w-full h-full border-2 border-[#815634]/20">
                <div className="h-40 w-full relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-end">
                    <CardHeader className="text-white pb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </CardHeader>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  {(activeProject === project.id || index === 0) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardDescription className="text-sm mb-4">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techUsed.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-[#f5f5f5] dark:bg-[#2a2a2a] text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/M-b-a-s"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-[#815634] hover:bg-[#312f2f] hover:text-white text-[#615634] font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200"
        >
          More Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
