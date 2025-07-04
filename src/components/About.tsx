import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const aboutParagraphs = [
  "I'm Mbas, a software engineer with a passion for building things that actually work-not just look good in a demo.",
  "What I do: I take messy ideas, half-baked features, or broken workflows and turn them into elegant, usable, and scalable solutions. I care about performance, accessibility, and writing code that stays clean even under pressure.",
  "I've contributed to meaningful projects across startups and personal experiments alike-some built to solve real pain points, others just for fun. Either way I learn fast and ship faster.",
  "When I'm not coding, I'm exploring product ideas, fine-tuning my dev sense, or playing the piano. I also question tabs vs spaces more often than I should.",
  "I don't just build apps, I build tools people actually want to use.",
];

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="about" className="mt-20 px-4">
      <h2 className="text-3xl font-bold text-[#212121] dark:text-white mb-4">
        About
      </h2>
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
  );
};

export default About;
