import Navbar from "./Navbar";
import meImg from "../assets/me.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="mx-auto w-[90vw] md:w-[700px] max-w-full">
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
            <p>
              I'm Mbas, a software engineer with a passion for building things that actually work-not just look good in a demo.
            </p>
            <p>
              What I do: I take messy ideas, half-baked features, or broken workflows and turn them into elegant, usable, and scalable solutions. I care about performance, accessibility, and writing code that stays clean even under pressure.
            </p>
            <p>
              I've contributed to meaningful projects across startups and personal experiments alike-some built to solve real pain points, others just for fun. Either way I learn fast and ship faster.
              
            </p>
            <p>
              When I'm not coding, I'm exploring product ideas, fine-tuning my dev sense, or playing the piano. I also question tabs vs spaces more often than I should.
            </p>
            <p>
              I don't just build apps, I build tools peop;e actually want to use.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;