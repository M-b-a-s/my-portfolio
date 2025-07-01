import Navbar from "./Navbar";
import meImg from "../assets/me.png";
import { useState } from "react";
import { FaChevronDown, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiVite, SiNextdotjs } from "react-icons/si";
import Tools from "./Tools"; 
import Projects from "./Projects";
import { AiOutlineLink } from "react-icons/ai";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);
  const aboutParagraphs = [
    "I'm Mbas, a software engineer with a passion for building things that actually work-not just look good in a demo.",
    "What I do: I take messy ideas, half-baked features, or broken workflows and turn them into elegant, usable, and scalable solutions. I care about performance, accessibility, and writing code that stays clean even under pressure.",
    "I've contributed to meaningful projects across startups and personal experiments alike-some built to solve real pain points, others just for fun. Either way I learn fast and ship faster.",
    "When I'm not coding, I'm exploring product ideas, fine-tuning my dev sense, or playing the piano. I also question tabs vs spaces more often than I should.",
    "I don't just build apps, I build tools peop;e actually want to use.",
  ];

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

  const projectItems = [
    <a
      href="https://your-portfolio-site.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <img
        src="/src/assets/portfolio.png"
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
        src="/public/vite.svg"
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
        src="/public/vite.svg"
        alt="E-commerce Dashboard"
        className="w-full h-full object-cover rounded-lg"
      />
    </a>,
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-auto w-[90vw] md:w-[700px] max-w-full">
        {/* Hero Section */}
        <section className="flex flex-col justify-center mt-32 px-4 ">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#815634] shadow-lg mb-6 flex items-center justify-center bg-white">
            <img
              src={meImg}
              alt="M-b-a-s"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl text-[#212121] mb-2">Hi! I'm M-b-a-s</h1>
          <h2 className="text-xl font-semibold text-[#815634] mb-2">
            Software/AI & ML Engineer
          </h2>
          <p className="text-slate-600 max-w-xl mb-6">
            I build beautiful, performant web apps with React, TypeScript, and
            modern UI frameworks. Let's create something amazing together!
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-6 py-2 rounded-l-xl shadow transition-colors duration-200"
            >
              Hire me
            </a>
            <a
              href="#"
              className="bg-[#4c4e50] text-[#ffffff] font-semibold px-6 py-2 rounded-r-xl shadow transition-colors duration-200"
            >
              · open to opportunities
            </a>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="mt-20 px-4">
          <h2 className="text-3xl font-bold text-[#212121] mb-4">About</h2>
          <div className="space-y-4 text-slate-700 text-lg max-w-2xl">
            {/* Mobile: show only first 3 paragraphs unless showMore is true */}
            <div className="block md:hidden">
              {aboutParagraphs
                .slice(0, showMore ? aboutParagraphs.length : 2)
                .map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              {!showMore && (
                <button
                  className="flex items-center gap-2 text-[#815634] font-semibold mt-2 px-2 py-1 rounded hover:bg-[#f5f5f5] transition-colors"
                  onClick={() => setShowMore(true)}
                >
                  More <FaChevronDown className="text-base" />
                </button>
              )}
            </div>
            {/* Desktop: show all paragraphs */}
            <div className="hidden md:block">
              {aboutParagraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="mt-20 px-4">
          <h2 className="text-3xl font-bold text-[#212121] mb-4">Experience</h2>
          <div className="flex flex-col gap-8 max-w-2xl">
            {/* Experience Item 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[#815634]">
                  Product Engineer
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm px-2 py-1 rounded bg-[#74c0a7] text-[#00704a] font-semibold flex items-center gap-1 min-w-[120px]">
                    <AiOutlineLink className="inline-block align-middle text-base mb-[2px]" />
                    Venueri
                  </span>
                  <span className="text-slate-500 text-sm">
                    · 2025 – Present
                  </span>
                </div>
              </div>
              <span className="text-slate-400 text-sm md:text-right">
                Remote
              </span>
            </div>
            <p className="text-slate-700 text-base">
              Built and maintained scalable React applications, collaborated with
              designers and backend teams, and delivered features with a focus on
              performance and accessibility.
            </p>
            {/* Experience Item 2 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[#815634]">
                  Frontend Engineer(Intern)
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm px-2 py-1 rounded bg-[#696868] text-black font-semibold flex items-center gap-1 min-w-[120px]">
                    <AiOutlineLink className="inline-block align-middle text-base mb-[2px]" />
                    Cyncra Tech
                  </span>
                  <span className="text-slate-500 text-sm">
                    · 2025 - Present
                  </span>
                </div>
              </div>
              <span className="text-slate-400 text-sm md:text-right">
                Remote
              </span>
            </div>
            <p className="text-slate-700 text-base">
              Built responsive web applications using React and TypeScript,
              collaborated with designers to implement UI/UX improvements, and
              optimized performance for better user experience.
            </p>
            {/* Experience Item 3 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[#815634]">
                  Fullstack Engineer(Intern)
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-slate-100 text-sm px-2 py-1 rounded bg-gray-500 font-semibold flex items-center gap-1 min-w-[120px]">
                    <AiOutlineLink className="inline-block align-middle text-base mb-[2px]" />
                    Akumzy Tech
                  </span>
                  <span className="text-slate-500 text-sm">· 2023</span>
                </div>
              </div>
              <span className="text-slate-400 text-sm md:text-right">On-Site</span>
            </div>
            <p className="text-slate-700 text-base">
              Delivered custom web solutions for startups and individuals, focusing
              on clean UI, robust code, and fast delivery.
            </p>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="mt-20 px-4">
          <h2 className="text-3xl font-bold text-[#212121] mb-8">Projects</h2>
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
        {/* Tools & Technologies Section */}
        <section id="tools" className="mt-20 px-4">
          <h2 className="text-3xl font-bold text-[#212121] mb-4">
            Tools & Technologies
          </h2>
          <Tools items={toolsItems} />
        </section>
      {/* Footer Section */}
      <footer className="mt-24">
        <div className="flex flex-col w-full">
          <div className="flex w-full max-w-2xl mx-auto">
            <hr className="flex-grow border-t border-[#e5e5e5]" />
          </div>
          <h2 className="text-3xl font-bold text-[#212121] mt-6">Let's Connect</h2>
          <p className="mt-4 text-slate-600 max-w-xl">
            Tired of prototypes that never launch or designs that don't convert? I turn ideas into products that actually do the job - and make money. If you're building for impact, not just aesthetics, let's make it real. Serious builders only.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="mailto:mbas750@gmail.com" className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200">Send Message</a>
            <span className="text-slate-400 font-semibold">or</span>
            <button onClick={() => setShowCallModal(true)} className="bg-white border border-[#815634] text-[#815634] font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200 hover:cursor-pointer">Book a Call</button>
          </div>
          {/* Modal for Book a Call */}
          {showCallModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowCallModal(false)}>
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <button className="absolute top-4 right-4 text-2xl text-slate-400 hover:text-[#815634] focus:outline-none" onClick={() => setShowCallModal(false)} aria-label="Close modal">&times;</button>
                <h3 className="text-2xl font-bold mb-4 text-[#212121]">Schedule a Call</h3>
                <p className="mb-6 text-slate-600 text-center">You’ll be redirected to my Cal.com page to book a time that works for you.</p>
                <a href="https://cal.com/m-b-a-s" target="_blank" rel="noopener noreferrer" className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200">Go to Cal.com</a>
              </div>
            </div>
          )}
          <div className="flex items-center w-full max-w-2xl mx-auto mt-10">
            <hr className="flex-grow border-t border-[#e5e5e5]" />
          </div>
          <p className="mt-4 mb-2 text-slate-400 text-xs text-center w-full">&copy; {new Date().getFullYear()} M-b-a-s.</p>
          <p className=" text-slate-400 text-xs text-center w-full">All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Home;