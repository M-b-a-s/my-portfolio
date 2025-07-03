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
        className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold rounded-xl shadow transition-colors duration-200 md:px-6 md:py-2 md:text-base px-8 py-2 text-sm"
      >
        Hire Me
      </a>
      <a
        href="#"
        className="border font-semibold rounded-xl shadow transition-colors duration-200 hover:cursor-pointer md:px-6 md:py-2 md:text-base px-3 py-1.5 text-sm flex items-center justify-center
          md:bg-white md:border-[#815634] md:text-[#815634]
          bg-[#007848] border-green-600 text-white animate-pulse md:animate-none md:bg-white md:text-[#815634] md:border-[#815634]"
        style={{ minWidth: 120 }}
      >
        <span className="block md:hidden">active</span>
        <span className="hidden md:block">Open to opportunities</span>
      </a>
    </div>
  </section>
);

export default Hero;
