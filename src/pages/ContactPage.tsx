import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1b1c20] text-white pt-20">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)]">
        {/* Left Section - Contact Form */}
        <motion.section
          className="flex-1 flex flex-col justify-center px-8 md:px-12 py-12 lg:py-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="max-w-md space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none py-3 placeholder:text-white/50 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none py-3 placeholder:text-white/50 transition-colors"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-white/30 focus:border-white outline-none py-3 placeholder:text-white/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full text-black bg-white font-bold py-3 px-6 uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.section>

        {/* Right Section - Contact Info */}
        <motion.section
          className="flex-1 flex flex-col justify-center items-center px-8 md:px-12 py-12 lg:py-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative max-w-md">
            {/* Decorative circle border */}

            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-4">
                Reach <span className="">out</span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed mt-12">
                Ready to connect? Reach out for collaborations,
                opportunities, or just a good tech conversation.{" "}
                <span className="text-white font-semibold">Shoot!</span>
              </p>

              {/* Contact methods */}
              <motion.div
                className="mt-12 space-y-4 text-sm text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>
                  <span className="text-white/80 font-semibold">Email:</span>{" "}
                  mbas750@gmail.com
                </p>
                <p>
                  <span className="text-white/80 font-semibold">Location:</span>{" "}
                  Nigeria
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ContactPage;
