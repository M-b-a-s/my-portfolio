import { useState } from "react";
import { TbBrandGithub, TbBrandGoogleHome, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter, TbUser } from "react-icons/tb";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const navLinks = [
  { href: "#about", icon: TbUser, title: "About" },
  {
    href: "https://github.com/M-b-a-s",
    icon: TbBrandGithub,
    title: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/ifechimenim",
    icon: TbBrandLinkedin,
    title: "LinkedIn",
    external: true,
  },
  {
    href: "https://instagram.com/mbas_ernest",
    icon: TbBrandInstagram,
    title: "Instagram",
    external: true,
  },
  {
    href: "https://x.com/ernest_mbas",
    icon: TbBrandTwitter,
    title: "Twitter",
    external: true,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-[700px] max-w-full backdrop-blur-lg bg-white/10 border border-[#bda87c] shadow-lg flex items-center pl-6 pr-2 py-3 rounded-xl transition-all duration-300"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      {/* Desktop View */}
      <div className="hidden md:flex flex-1 items-center justify-between w-full">
        <a
          href="#home"
          className="text-2xl text-[#815634] hover:text-[#212121] transition-colors"
          title="Home"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <TbBrandGoogleHome />
        </a>
        <div className="flex flex-1 items-center justify-between gap-0 border-x border-[#815634] mx-7">
          {navLinks.map(({ href, icon: Icon, title, external }) => (
            <a
              key={title}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-2xl flex-1 flex justify-center items-center text-[#815634] hover:text-[#212121] transition-colors px-2"
              title={title}
            >
              <Icon />
            </a>
          ))}
        </div>
        <a
          href="mailto:mbas750@gmail.com"
          className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors duration-200"
          style={{ whiteSpace: "nowrap" }}
        >
          Contact Me
        </a>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden w-full items-center justify-between">
        <a
          href="#home"
          className="text-2xl text-[#815634] hover:text-[#212121] transition-colors"
          title="Home"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <TbBrandGoogleHome />
        </a>
        <button
          className="text-3xl text-[#815634] hover:text-[#212121] focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <IoMdClose /> : <HiMenu />}
        </button>
        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs bg-white border border-[#bda87c] rounded-xl shadow-lg p-4 flex flex-col gap-3 z-50 animate-fade-in">
            {navLinks.map(({ href, icon: Icon, title, external }) => (
              <a
                key={title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-[#815634] hover:text-[#212121] text-lg font-medium px-2 py-2 rounded transition-colors"
                title={title}
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="text-2xl" />
                <span>{title}</span>
              </a>
            ))}
            <a
              href="mailto:mbas750@gmail.com"
              className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-4 py-2 rounded-xl shadow transition-colors duration-200 text-center mt-2"
              style={{ whiteSpace: "nowrap" }}
            >
              Contact Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;