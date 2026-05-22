import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import myPhoto from "../assets/my-photo.jpg";

const contactDetails = [
  {
    label: "Email",
    value: "mbas750@gmail.com",
    href: "mailto:mbas750@gmail.com",
  },
  { label: "Location", value: "Nigeria" },
  { label: "Social", value: "@ernest_mbas", href: "https://x.com/ernest_mbas" },
];

const AboutPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#191919] px-3 py-3 text-black md:px-4 md:py-4 lg:h-screen lg:min-h-0">
      <div className="grid min-h-[calc(100vh-1.5rem)] overflow-hidden rounded-[18px] bg-white md:min-h-[calc(100vh-2rem)] lg:h-full lg:min-h-0 lg:grid-cols-[1fr_1.05fr]">
        <motion.section
          className="flex min-h-[58vh] flex-col bg-white px-6 pb-9 pt-28 sm:px-9 md:px-12 lg:min-h-0 lg:px-14 lg:pb-11 lg:pt-28"
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <a
            href="mailto:mbas750@gmail.com"
            className="w-fit border-b border-black text-sm font-semibold leading-none transition-opacity hover:opacity-60"
          >
            Send email
          </a>

          <div className="mt-auto max-w-[32rem] pt-24 lg:pt-0">
            <div className="mb-5 h-px w-full max-w-[29rem] bg-black/70" />
            <p className="mb-2 text-xs font-semibold uppercase text-black/50">
              About
            </p>
            <h1 className="text-[clamp(2.15rem,5vw,4.85rem)] font-medium leading-[0.95] text-black">
              Mbas Ernest
            </h1>

            <div className="mt-5 max-w-[30rem] space-y-4 text-sm font-medium leading-relaxed text-black/82 md:text-[0.95rem]">
              <p>
                I am a software engineer focused on turning rough ideas into
                clean, useful products that feel fast, reliable, and easy to
                understand.
              </p>
              <p>
                My work sits around polished interfaces, practical automation,
                cloud workflows, and codebases that stay maintainable after the
                first launch.
              </p>
            </div>

            <div className="mt-8">
              <p className="border-b border-black pb-1 text-sm font-semibold">
                Contact info
              </p>
              <dl className="mt-4 grid max-w-sm grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-xs font-medium text-black/78 sm:text-sm">
                {contactDetails.map(({ label, value, href }) => (
                  <div key={label} className="contents">
                    <dt className="text-black/55">{label}</dt>
                    <dd>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="transition-opacity hover:opacity-60"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative min-h-[65vh] overflow-hidden bg-black lg:min-h-0"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        >
          <img
            src={myPhoto}
            alt="Mbas Ernest portrait"
            className="h-full w-full object-cover object-[50%_52%] grayscale contrast-125 brightness-75"
          />
          <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,transparent_0,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.62)_100%)]" />

          <a
            href="/"
            className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase text-white/82 transition-colors hover:text-white md:bottom-7 md:left-7"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Go back
          </a>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutPage;
