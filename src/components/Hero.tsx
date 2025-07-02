import meImg from "../assets/me.png";

const Hero = () => (
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
        href="mailto:mbas750@gmail.com"
        className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold rounded-l-xl shadow transition-colors duration-200 md:px-6 md:py-2 md:text-base px-3 py-1.5 text-sm"
      >
        Hire me
      </a>
      <a
        href="#"
        className="backdrop-blur-md bg-white/30 border border-[#815634] text-[#815634] font-semibold rounded-r-xl shadow transition-colors duration-200 hover:bg-white/50 hover:border-[#815634] md:px-4 md:py-1.5 md:text-base px-2.5 py-1 text-sm opacity-100 pointer-events-auto cursor-pointer"
        style={{
          boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.15)",
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        }}
      >
        · open to opportunities
      </a>
    </div>
  </section>
);

export default Hero;
