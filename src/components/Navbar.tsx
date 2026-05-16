import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { href: "#home", title: "Home" },
  { href: "#projects", title: "Work" },
  { href: "#about", title: "About" },
  { href: "#contact", title: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/M-b-a-s", title: "GitHub" },
  { href: "https://www.linkedin.com/in/ifechimenim", title: "LinkedIn" },
  { href: "https://instagram.com/mbas_ernest", title: "Instagram" },
  { href: "https://x.com/ernest_mbas", title: "Twitter" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 90);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);

    if (href === "#home") {
      scrollToTop();
    }
  };

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToTop();
  };

  const hiddenOnScrollClass = hasScrolled
    ? "translate-y-[-120%] opacity-0 pointer-events-none"
    : "translate-y-0 opacity-100";

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-black px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className={`text-sm font-semibold text-white transition-all duration-300 hover:text-white/70 ${hiddenOnScrollClass}`}
              onClick={handleHomeClick}
            >
              ©M-b-a-s
            </a>
          </div>

          <div className="flex items-center">
            <div
              className={`hidden items-center gap-8 rounded-full border-3 bg-black/75 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 md:flex ${hiddenOnScrollClass}`}
            >
              {navigationLinks.slice(1).map(({ href, title }) => (
                <a
                  key={title}
                  href={href}
                  className="transition-colors hover:text-white/70"
                >
                  {title}
                </a>
              ))}
            </div>

            <button
              type="button"
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/80 text-white shadow-lg transition-all duration-300 hover:cursor-pointer md:h-14 md:w-14 ${
                hasScrolled
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-100 md:opacity-0 md:pointer-events-none"
              }`}
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] cursor-default bg-black/40"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="fixed bottom-0 right-0 top-0 z-[70] flex w-full flex-col bg-[#1b1c20] px-8 py-9 text-white md:px-24 md:py-20 lg:w-[40%]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="absolute right-6 top-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-black/80 transition-transform hover:scale-95 hover:cursor-pointer md:right-10 md:top-10 md:h-14 md:w-14"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-6 w-6 stroke-[1.5]" />
              </button>

              <div>
                <p className="text-sm font-bold uppercase text-white/40">
                  Navigation
                </p>
                <div className="mt-10 h-px w-full bg-white/15" />
                <div className="mt-8 flex flex-col items-start gap-5">
                  {navigationLinks.map(({ href, title }, index) => (
                    <a
                      key={title}
                      href={href}
                      className="group flex items-center gap-7 text-5xl leading-none text-white transition-colors hover:text-white/70"
                      onClick={() => handleNavClick(href)}
                    >
                      <span
                        className={`h-3 w-3 rounded-full bg-white transition-opacity ${
                          index === 0
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      {title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-12">
                <p className="text-sm font-bold uppercase text-white/40">
                  Socials
                </p>
                <div className="mt-10 h-px w-full bg-white/15" />
                <div className="mt-7 flex flex-wrap gap-5">
                  {socialLinks.map(({ href, title }) => (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white transition-colors hover:text-white/60"
                    >
                      {title}
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
