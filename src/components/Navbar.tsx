import { FaHome, FaUser, FaProjectDiagram, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[500px] max-w-full backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg flex items-center px-6 py-3 rounded-2xl transition-all duration-300"
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
    >
      <div className="flex items-center gap-6">
        <a
          href="#home"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="Home"
        >
          <FaHome />
        </a>
        <a
          href="#about"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="About"
        >
          <FaUser />
        </a>
        <a
          href="#projects"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="Projects"
        >
          <FaProjectDiagram />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors"
          title="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
      <a
        href="#contact"
        className="ml-auto bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-2 rounded-full shadow transition-colors duration-200"
      >
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;