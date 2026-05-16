import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "Nerve Logistics",
    year: "2025 - Present",
    location: "Remote",
    description:
      "As CTO of Nerve Logistics, I defined and owned the technical vision and architecture, leading end-to-end platform development from system design and API architecture to deployment. I built a modular, scalable application with modern web technologies, established engineering best practices, and made key technology stack decisions balancing performance, scalability, and maintainability. Beyond overseeing secure backend design and data handling, I mentored contributors and drove product-focused engineering execution with a systems-thinking mindset..",
  },
  {
    title: "Product Engineer",
    company: "Venueri",
    year: "2025",
    location: "Remote",
    description:
      "Built and maintained scalable React applications, collaborated with designers and backend teams, and delivered features with a focus on performance and accessibility.",
  },
  {
    title: "Frontend Engineer",
    company: "Cyncra Tech",
    year: "2025",
    location: "Remote",
    description:
      "Built responsive web applications using React and TypeScript, collaborated with designers to implement UI/UX improvements, and optimized performance for better user experience.",
  },
  {
    title: "Fullstack Engineer",
    company: "Akumzy Tech",
    year: "2023",
    location: "On-Site",
    description:
      "Delivered custom web solutions for startups and individuals, focusing on clean UI, robust code, and fast delivery.",
  },
];

const featuredExperience = experiences[0];
const supportingExperiences = experiences.slice(1);

const Experience = () => (
  <section
    id="experience"
    className="relative overflow-hidden bg-[#f7f6f3] px-4 py-16 text-[#202124] md:px-10 lg:px-20"
  >
    <div className="pointer-events-none absolute right-10 top-20 text-[11rem] font-black leading-none text-black/[0.025] md:text-[17rem]">
      Work
    </div>

    <div className="relative mx-auto max-w-7xl">
      <div className="mb-16 flex items-center justify-between text-[0.65rem] font-black uppercase tracking-[0.35em] text-[#6c6c6c]">
        <span>Experience</span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-6 max-w-sm text-xs font-semibold leading-relaxed text-[#6f6f6f]">
            A compact timeline of the teams, products, and engineering problems
            I have worked on so far.
          </p>
          <h2 className="max-w-lg text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Software
            <br />
            Experience
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[#777]">
            These roles shaped how I build: clean interfaces, reliable systems,
            practical collaboration, and delivery that respects both users and
            teams.
          </p>
        </div>

        <div className="relative">
          <div className="bg-[#242527] p-8 text-white shadow-2xl md:p-10">
            <div className="mb-8 h-px w-16 bg-white/60" />
            <p className="text-3xl font-semibold leading-tight">
              {featuredExperience.title}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 text-[0.65rem] font-black uppercase tracking-[0.2em] text-white/45 md:grid-cols-4">
              <div>
                <p>Company</p>
                <p className="mt-3 text-white">{featuredExperience.company}</p>
              </div>
              <div>
                <p>Location</p>
                <p className="mt-3 text-white">{featuredExperience.location}</p>
              </div>
              <div>
                <p>Period</p>
                <p className="mt-3 text-white">{featuredExperience.year}</p>
              </div>
              <div>
                <p>Status</p>
                <p className="mt-3 text-white">Active Role</p>
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-xs font-semibold leading-relaxed text-[#6a6a6a]">
            {featuredExperience.description}
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {supportingExperiences.map((experience) => (
          <article key={experience.company} className="group">
            <p className="mb-4 text-xs font-bold text-[#777]">
              {experience.company}
            </p>
            <h3 className="max-w-xs text-3xl font-black leading-none tracking-[-0.04em]">
              {experience.title}
            </h3>
            <div className="mt-6 h-px w-full bg-black/25" />
            <div className="mt-4 flex items-center justify-between text-xs font-semibold text-[#666]">
              <span>{experience.year}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-8 text-sm leading-relaxed text-[#707070]">
              {experience.description}
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#999]">
              {experience.location}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
