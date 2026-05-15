const About = () => (
  <section id="about" className="mt-10 px-4 py-24">
    <div className="mx-auto flex max-w-4xl flex-col gap-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-4xl">
        <p className="text-2xl font-semibold leading-tight text-[#212121] dark:text-white ">
          Helping products stand strong in the digital era. Together we build
          systems that raise the standard. No noise, just thoughtful engineering
          across frontend, backend, QA, system design, and DevOps.
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[#4f4f4f] dark:text-[#b9b7b7] md:text-2xl">
          The combination of product sense, clean code, infrastructure thinking,
          and quality-focused delivery puts me in a unique place in the software
          engineering world.
        </p>
      </div>

      <a
        href="/about"
        className="inline-flex aspect-square w-40 shrink-0 items-center justify-center rounded-full bg-[#212121] text-center text-3xl font-bold leading-none text-white shadow-xl transition-transform duration-300 hover:scale-95 hover:bg-black md:w-52"
      >
        About
        <br />
        me
      </a>
    </div>
  </section>
);

export default About;
