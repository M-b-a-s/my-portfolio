import Navbar from "./Navbar";
import meImg from "../assets/me.png";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const aboutParagraphs = [
    "I'm Mbas, a software engineer with a passion for building things that actually work-not just look good in a demo.",
    "What I do: I take messy ideas, half-baked features, or broken workflows and turn them into elegant, usable, and scalable solutions. I care about performance, accessibility, and writing code that stays clean even under pressure.",
    "I've contributed to meaningful projects across startups and personal experiments alike-some built to solve real pain points, others just for fun. Either way I learn fast and ship faster.",
    "When I'm not coding, I'm exploring product ideas, fine-tuning my dev sense, or playing the piano. I also question tabs vs spaces more often than I should.",
    "I don't just build apps, I build tools peop;e actually want to use.",
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
          <h2 className="text-xl font-semibold text-[#815634] mb-2">Software/AI & ML Engineer</h2>
          <p className="text-slate-600 max-w-xl mb-6">
            I build beautiful, performant web apps with React, TypeScript, and modern UI frameworks. Let's create something amazing together!
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
              {aboutParagraphs.slice(0, showMore ? aboutParagraphs.length : 2).map((text, idx) => (
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
                <h3 className="text-xl font-semibold text-[#815634]">Product Engineer</h3>
                <span className="text-slate-100 text-sm px-2 py-1 rounded bg-[#00704a]">Venueri</span>
                <span className="text-slate-500 text-sm ml-2">· 2025 – Present</span>
              </div>
              <span className="text-slate-400 text-sm md:text-right">Remote</span>
            </div>
            <p className="text-slate-700 text-base">
              Built and maintained scalable React applications, collaborated with designers and backend teams, and delivered features with a focus on performance and accessibility.
            </p>
            {/* Experience Item 2 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[#815634]">Frontend Intern</h3>
                <span className="text-slate-100 text-sm px-2 py-1 rounded bg-black">Cyncra Tech.</span>
                <span className="text-slate-500 text-sm ml-2">· 2025 - Present</span>
              </div>
              <span className="text-slate-400 text-sm md:text-right">Remote</span>
            </div>
            <p className="text-slate-700 text-base">
              Built responsive web applications using React and TypeScript, collaborated with designers to implement UI/UX improvements, and optimized performance for better user experience.
            </p>
            {/* Experience Item 3 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[#815634]">Fullstack Intern</h3>
                <span className="text-slate-100 text-sm px-2 py-1 rounded bg-gray-500">Akumzy Tech</span>
                <span className="text-slate-500 text-sm ml-2">· 2023</span>
              </div>
              <span className="text-slate-400 text-sm md:text-right">On-Site</span>
            </div>
            <p className="text-slate-700 text-base">
              Delivered custom web solutions for startups and individuals, focusing on clean UI, robust code, and fast delivery.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;