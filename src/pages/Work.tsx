import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import gameoImage from "../assets/gameo.png";
import jobTrackerImage from "../assets/job-tracker.png";
import portfolioImage from "../assets/portfolio.png";

const projects = [
  {
    id: "01",
    title: "Job Tracker",
    category: "AI workflow",
    year: "2026",
    image: jobTrackerImage,
    href: "https://github.com/M-b-a-s",
    summary:
      "A focused application tracker with job stages, links, edits, and AI-assisted job-description analysis.",
    details: ["React", "TypeScript", "OpenAI", "Status boards"],
  },
  {
    id: "02",
    title: "Gameo",
    category: "Product interface",
    year: "2026",
    image: gameoImage,
    href: "https://github.com/M-b-a-s",
    summary:
      "A game discovery interface with category navigation, rich cover art, platform metadata, and scoring.",
    details: ["React", "TypeScript", "Game data", "Responsive UI"],
  },
  {
    id: "03",
    title: "Portfolio",
    category: "Personal site",
    year: "2026",
    image: portfolioImage,
    href: "https://github.com/M-b-a-s",
    summary:
      "A clean personal portfolio with responsive sections, animated transitions, and a compact visual identity.",
    details: ["Vite", "Tailwind CSS", "Framer Motion", "Design system"],
  },
  {
    id: "04",
    title: "Selected Labs",
    category: "Experiments",
    year: "Ongoing",
    image: portfolioImage,
    href: "https://github.com/M-b-a-s",
    summary:
      "Small experiments around automation, interface polish, cloud tooling, and production-minded prototypes.",
    details: ["Automation", "Cloud", "UX polish", "Prototypes"],
  },
];

const Work = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const moveActiveProject = (direction: "previous" | "next") => {
    const activeIndex = projects.findIndex(
      (project) => project.id === activeProjectId,
    );
    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % projects.length
        : (activeIndex - 1 + projects.length) % projects.length;

    setActiveProjectId(projects[nextIndex].id);
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-4 pb-6 pt-28 text-black md:px-7 lg:flex lg:h-screen lg:min-h-0 lg:flex-col lg:overflow-hidden lg:px-10 lg:pb-10">
      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-5xl">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-black/55">
              Your first complete project archive
            </p>
            <h1 className="mt-4 max-w-5xl text-[clamp(2rem,4.6vw,4.9rem)] font-semibold leading-[0.96] text-black">
              Designed across web apps, dashboards, and playful interfaces with
              details that show up when you look closer.
            </h1>
          </div>

          <div className="hidden shrink-0 gap-2 pt-10 md:flex">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform hover:scale-95"
              aria-label="Previous project"
              onClick={() => moveActiveProject("previous")}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform hover:scale-95"
              aria-label="Next project"
              onClick={() => moveActiveProject("next")}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 lg:min-h-0 lg:flex-1 lg:flex-row">
          {projects.map((project) => {
            const isActive = project.id === activeProjectId;

            return (
              <motion.article
                key={project.id}
                className="group relative min-h-[28rem] overflow-hidden rounded-lg bg-black text-white shadow-sm lg:h-full lg:min-w-0"
                animate={{ flex: isActive ? 4.2 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActiveProjectId(project.id)}
                onFocus={() => setActiveProjectId(project.id)}
                tabIndex={0}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover object-left-top transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-black/12" />
                <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 text-xs font-semibold text-white/82">
                  <span>{project.id}</span>
                  <span className="rounded-full bg-white/16 px-3 py-1 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-xs font-semibold text-white/68">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-5">
                    <h2 className="max-w-[13rem] text-2xl font-semibold leading-none md:text-3xl">
                      {project.title}
                    </h2>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black opacity-100 transition-transform hover:scale-95 lg:opacity-0 lg:group-hover:opacity-100"
                      aria-label={`Open ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.38, ease: "easeOut" }}
                  >
                    <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/82">
                      {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-white/22 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Work;
