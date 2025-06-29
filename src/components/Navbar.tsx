import { FaHome, FaUser, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const navLinks = [
  { href: "#about", icon: FaUser, title: "About" },
  {
    href: "https://github.com/yourusername",
    icon: FaGithub,
    title: "GitHub",
    external: true,
  },
  {
    href: "https://instagram.com/yourusername",
    icon: FaLinkedin,
    title: "LinkedIn",
    external: true,
  },
  {
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
    title: "Instagram",
    external: true,
  },
  {
    href: "https://twitter.com/yourusername",
    icon: FaTwitter,
    title: "Twitter",
    external: true,
  },
];

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[500px] max-w-full backdrop-blur-lg bg-white/10 border border-[#bda87c] shadow-lg flex items-center px-6 py-3 rounded-xl transition-all duration-300"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      <div className="flex flex-1 items-center justify-between w-full">
        <a
          href="#home"
          className="text-2xl text-[#815634] hover:text-[#212121] transition-colors"
          title="Home"
        >
          <FaHome />
        </a>
        <div className="flex items-center gap-0 border-x border-[#bda87c]">
          {navLinks.map(({ href, icon: Icon, title, external }, idx) => (
            <a
              key={title}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-2xl text-[#815634] hover:text-[#212121] transition-colors px-4"
              title={title}
            >
              <Icon />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-5 py-2 rounded-xl shadow transition-colors duration-200"
          style={{ whiteSpace: "nowrap" }}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;