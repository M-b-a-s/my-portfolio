import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Gamepad2,
  PanelsTopLeft,
  Plus,
} from "lucide-react";

const projectItems = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing my skills and projects. Built with React, TypeScript, and Tailwind CSS with smooth animations powered by Framer Motion and a clean, accessible UI using shadcn/UI components.",
    icon: PanelsTopLeft,
    accent: "#815634",
    background: "from-[#241b16] via-[#815634] to-[#ead9c7]",
    techUsed: ["React", "TypeScript", "Tailwind CSS", "shadcn/UI", "Vite"],
  },
  {
    id: 2,
    title: "Job Tracker",
    description:
      "A comprehensive application tracking system that helps job seekers organize their applications, track interview stages, and set reminders. Features include AI-powered application insights, customizable status boards, and detailed analytics on job search progress.",
    icon: BriefcaseBusiness,
    accent: "#4659ee",
    background: "from-[#111827] via-[#4659ee] to-[#dce2ff]",
    techUsed: ["Next.js", "TypeScript", "Shadcn/UI", "openAI"],
  },
  {
    id: 3,
    title: "Gameo",
    description:
      "An interactive gaming platform that connects players with similar interests and skill levels. Includes real-time matchmaking, personalized game recommendations, and a social community for discussing strategies and sharing gameplay highlights.",
    icon: Gamepad2,
    accent: "#16a34a",
    background: "from-[#092013] via-[#16a34a] to-[#dff7e8]",
    techUsed: ["React", "TypeScript", "Tailwind CSS", "Chakra UI"],
  },
];

const ProjectsSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(projectItems[0].id);
  const activeProject =
    projectItems.find((project) => project.id === activeProjectId) ??
    projectItems[0];

  return (
    <section
      id="projects"
      className="grid min-h-screen overflow-hidden bg-[#f7f5f0] text-black lg:grid-cols-[1fr_1fr]"
    >
      <div className="flex items-center px-6 py-10 md:px-16 lg:px-24">
        <div className="w-full max-w-xl">
          <p className="mb-8 text-xs font-black uppercase tracking-[0.2em]">
            Projects
          </p>

          <div>
            {projectItems.map((project) => {
              const isActive = project.id === activeProjectId;

              return (
                <button
                  key={project.id}
                  type="button"
                  className="group w-full border-b border-black/35 py-5 text-left first:border-t"
                  onClick={() => setActiveProjectId(project.id)}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                >
                  <div className="flex items-center justify-between gap-5">
                    <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                      {project.title}
                    </h2>
                    <Plus
                      className={`h-7 w-7 shrink-0 transition-transform duration-300 ${
                        isActive ? "rotate-45" : "group-hover:rotate-45"
                      }`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <p className="mt-5 max-w-lg text-sm leading-relaxed text-black/60">
                          {project.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.techUsed.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-black/25 px-3 py-1 text-xs font-semibold text-black/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <a
            href="https://github.com/M-b-a-s"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-black transition-opacity hover:opacity-60"
          >
            More projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div
        className={`relative hidden min-h-screen overflow-hidden border-l border-black bg-gradient-to-br ${activeProject.background} lg:block`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotate: 8 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="absolute h-[34rem] w-[34rem] rounded-full bg-white/15 blur-3xl" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/35 bg-white/20 text-white shadow-2xl backdrop-blur-md">
              <activeProject.icon className="h-28 w-28 stroke-[1.4]" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.26),transparent_24%),linear-gradient(135deg,rgba(0,0,0,0.16),rgba(0,0,0,0.34))]" />
        <div
          className="absolute right-10 top-10 h-5 w-5 rounded-full"
          style={{ backgroundColor: activeProject.accent }}
        />
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/45 pt-5 text-sm font-semibold text-white">
          <span>Project</span>
          <span className="inline-flex items-center gap-2">
            {activeProject.title}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
