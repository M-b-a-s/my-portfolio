import Navbar from "./Navbar";
import meImg from "../assets/me.png";

const Home = () => {
  return (
    <div>
        <Navbar />
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center mt-32 px-4">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#815634] shadow-lg mb-6 flex items-center justify-center bg-white">
            <img
              src={meImg}
              alt="M-b-a-s"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#212121] mb-2">Hi! I'm M-b-a-s</h1>
          <h2 className="text-xl font-semibold text-[#815634] mb-2">Software Engineer</h2>
          <p className="text-center text-slate-600 max-w-xl mb-6">
            I build beautiful, performant web apps with React, TypeScript, and modern UI frameworks. Let's create something amazing together!
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white border border-[#815634] text-[#815634] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#815634] hover:text-white transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </section>
    </div>
  )
}

export default Home