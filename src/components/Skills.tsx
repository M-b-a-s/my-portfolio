import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiCypress,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiLinux,
} from "react-icons/si";

import { RiNextjsFill } from "react-icons/ri"

const skillSlides = [
  {
    label: "Frontend",
    title: "Front End Engineer.",
    copy: "Building responsive interfaces that feel clear, fast, and intentional. I work across component systems, accessibility, state management, performance, and polished interaction patterns that make products easier to use.",
    accent: "#2563eb",
    tools: [
      { name: "React", icon: SiReact },
      { name: "NextJs", icon: RiNextjsFill },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    label: "Backend",
    title: "Back End Developer.",
    copy: "Delivering reliable server-side systems with clean APIs, thoughtful data models, authentication flows, and maintainable architecture. I care about code that is efficient, understandable, and ready to scale.",
    accent: "#e11d48",
    tools: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    label: "DevOps",
    title: "DevOps Engineer.",
    copy: "Designing deployment workflows, cloud-ready infrastructure, and automation that keeps teams shipping with confidence. I connect code, environments, observability, and delivery into a smoother release path.",
    accent: "#16a34a",
    tools: [
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    label: "QA",
    title: "QA Engineer.",
    copy: "Protecting product quality with practical test strategies, automation, exploratory testing, and clear bug reporting. I focus on catching real user-impacting issues before they reach production.",
    accent: "#f59e0b",
    tools: [
      { name: "Cypress", icon: SiCypress },
      { name: "Jest", icon: SiJest },
      { name: "Testing Library", icon: SiTestinglibrary },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = skillSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % skillSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((index) =>
      index === 0 ? skillSlides.length - 1 : index - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % skillSlides.length);
  };

  return (
    <section
      id="skills"
      className="relative h-full overflow-hidden px-4 py-20 text-[#4b4b4b] md:px-12"
      style={{
        backgroundColor: "#f6f5f1",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(120,120,120,0.18) 1px, transparent 0), repeating-radial-gradient(circle at 0 0, transparent 0 8px, rgba(120,120,120,0.08) 9px 10px)",
        backgroundSize: "28px 28px, 36px 36px",
      }}
    >
      <div className="mb-16 flex items-center justify-between text-[0.65rem] font-black uppercase tracking-[0.35em] text-[#6c6c6c]">
        <span>Skills</span>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[130px_1fr] lg:grid-cols-[180px_1fr]">
        <div className="hidden md:flex md:items-start md:justify-center">
          <div className="flex h-[33rem] w-20 items-center justify-center border border-[#777]/50 bg-white/20">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSlide.label}
                className="text-2xl font-black uppercase tracking-[0.75em] text-[#5d5d5d] [writing-mode:vertical-rl]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                {activeSlide.label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.label}
              className="grid min-h-[34rem] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>
                <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-[#6f6f6f] md:hidden">
                  {activeSlide.label}
                </p>
                <h2 className="text-2xl font-black tracking-[0.18em] text-[#5c5c5c]">
                  <span className="mr-3 inline-block h-px w-8 translate-y-[-0.35rem] bg-[#777]" />
                  {activeSlide.title}
                </h2>
                <p className="mt-12 max-w-xl text-lg font-bold leading-[1.75] tracking-[0.2em] text-[#626262]">
                  {activeSlide.copy}
                </p>
              </div>

              <div className="relative min-h-[26rem]">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#bfc4c8]/60 bg-white/25" />
                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#bfc4c8]/60 bg-white/20" />

                {activeSlide.tools.map(({ name, icon: Icon }, index) => {
                  const positions = [
                    "left-[22%] top-[8%]",
                    "right-[12%] top-[24%]",
                    "left-[16%] bottom-[18%]",
                    "right-[20%] bottom-[10%]",
                  ];

                  return (
                    <div
                      key={name}
                      className={`absolute ${positions[index]} flex items-center gap-3`}
                    >
                      <span className="hidden h-px w-12 bg-[#6a6a6a] md:block" />
                      <div className="flex h-20 w-20 items-center justify-center bg-white/85 text-4xl text-[#606060] shadow-sm [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]">
                        <Icon />
                      </div>
                      <span className="text-sm font-black uppercase tracking-wide text-[#5a5a5a] md:text-base">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {skillSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  className="h-5 w-5 rounded-full border border-[#aeb4ba] transition-all"
                  style={{
                    backgroundColor:
                      index === activeIndex ? activeSlide.accent : "#d7d9da",
                    transform:
                      index === activeIndex ? "scale(1.15)" : "scale(1)",
                  }}
                  aria-label={`Show ${slide.label} skills`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#aeb4ba] bg-white/60 text-[#4d4d4d] transition-colors hover:bg-white"
                aria-label="Previous skill slide"
                onClick={goToPrevious}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#aeb4ba] bg-white/60 text-[#4d4d4d] transition-colors hover:bg-white"
                aria-label="Next skill slide"
                onClick={goToNext}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
