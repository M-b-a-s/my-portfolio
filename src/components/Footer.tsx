import { useEffect, useState } from "react";
import { ArrowDownLeft } from "lucide-react";
import meImg from "../assets/me.png";

const socialLinks = [
  { href: "https://github.com/M-b-a-s", title: "GitHub" },
  { href: "https://instagram.com/mbas_ernest", title: "Instagram" },
  { href: "https://x.com/ernest_mbas", title: "Twitter" },
  { href: "https://www.linkedin.com/in/ifechimenim", title: "LinkedIn" },
];

const getLocalTime = () =>
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Lagos",
    timeZoneName: "short",
  }).format(new Date());

const Footer = () => {
  const [localTime, setLocalTime] = useState(getLocalTime);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLocalTime(getLocalTime());
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#1b1c20] px-6 py-10 text-white md:px-14 lg:px-20"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col">
        <div className="pt-20 max-w-5xl">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-7">
              <img
                src={meImg}
                alt="M-b-a-s"
                className="h-15 w-15 rounded-full object-cover object-top md:h-24 md:w-24"
              />
              <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.04em]">
                Let's build
              </h2>
            </div>
            <h2 className="text-6xl font-semibold leading-[0.95] tracking-[-0.04em]">
              together
            </h2>
          </div>

          <div className="relative mt-24">
            <div className="h-px w-full bg-white/15" />
            <ArrowDownLeft className="absolute -top-28 right-[12%] h-8 w-8 text-white/80" />
            <a
              href="mailto:mbas750@gmail.com"
              className="group absolute left-2/3 top-0 flex aspect-square w-35 md:w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-[#eaecfc] text-lg font-semibold text-black transition-transform duration-300 hover:scale-95"
            >
              <span className="absolute inset-x-[-20%] bottom-[-15%] h-[125%] translate-y-full rounded-[45%_45%_0_0] bg-[#815634] transition-transform duration-[1400ms] ease-out group-hover:translate-y-0" />
              <span className="absolute inset-x-[-30%] bottom-[38%] h-16 translate-y-28 opacity-0 transition-all duration-[1400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="footer-liquid-wave block h-full rounded-[45%] bg-white/25" />
              </span>
              <span className="absolute inset-x-[-35%] bottom-[42%] h-20 translate-y-28 opacity-0 transition-all duration-[1600ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="footer-liquid-wave footer-liquid-wave-slow block h-full rounded-[48%] bg-white/15" />
              </span>
              <span className="relative z-10 transition-colors duration-700 group-hover:text-white">
                Get in touch
              </span>
            </a>
          </div>

          <div className="mt-25 md:mt-10 flex flex-col gap-4 md:flex-row">
            <a
              href="mailto:mbas750@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-md font-semibold text-white transition-colors hover:border-white/60 "
            >
              mbas750@gmail.com
            </a>
            <a
              href="https://cal.com/m-b-a-s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-md font-semibold text-white transition-colors hover:border-white/60"
            >
              Book a call
            </a>
          </div>
        </div>

        <div className="mt-auto grid gap-10 pt-20 md:grid-cols-[1fr_1fr_2fr] md:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-white/35">Version</p>
            <p className="mt-6 text-sm font-semibold">
              {new Date().getFullYear()} &copy; Edition
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-white/35">
              Local time
            </p>
            <p className="mt-6 text-sm font-semibold">{localTime}</p>
          </div>
          <div className="md:justify-self-end">
            <p className="text-sm font-bold uppercase text-white/35">
              Socials
            </p>
            <div className="mt-6 flex flex-wrap gap-x-9 gap-y-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
