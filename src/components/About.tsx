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
        className="group relative inline-flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#212121] text-center text-3xl font-bold leading-none text-white shadow-xl transition-transform duration-300 hover:scale-95 md:w-52"
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 bg-[#815634] transition-transform duration-[2000ms] ease-out group-hover:scale-y-100" />
        <span className="relative z-10">
          About
          <br />
          me
        </span>
      </a>
    </div>
  </section>
);

export default About;
