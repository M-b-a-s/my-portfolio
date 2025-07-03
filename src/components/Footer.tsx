import { useState } from "react";

const Footer = () => {
  const [showCallModal, setShowCallModal] = useState(false);
  return (
    <footer className="mt-24">
      <div className="flex flex-col w-full">
        <div className="flex w-full max-w-2xl mx-auto">
          <hr className="flex-grow border-t border-[#e5e5e5]" />
        </div>
        <h2 className="text-3xl font-bold text-[#212121] mt-6">Let's Connect</h2>
        <p className="mt-4 text-slate-600 max-w-xl">
          Tired of prototypes that never launch or designs that don't convert? I turn ideas into products that actually do the job - and make money. If you're building for impact, not just aesthetics, let's make it real. Serious builders only.
        </p>
        <div className="flex items-center gap-4 mt-6 flex-wrap">
          <a href="mailto:mbas750@gmail.com" className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold rounded-xl shadow transition-colors duration-200 md:px-6 md:py-2 md:text-base px-3 py-1.5 text-sm">Send Message</a>
          <button onClick={() => setShowCallModal(true)} className="bg-white border border-[#815634] text-[#815634] font-semibold rounded-xl shadow transition-colors duration-200 hover:cursor-pointer md:px-6 md:py-2 md:text-base px-3 py-1.5 text-sm">Book a Call</button>
        </div>
        {/* Modal for Book a Call */}
        {showCallModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setShowCallModal(false)}>
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-2xl text-slate-400 hover:text-[#815634] focus:outline-none" onClick={() => setShowCallModal(false)} aria-label="Close modal">&times;</button>
              <h3 className="text-2xl font-bold mb-4 text-[#212121]">Schedule a Call</h3>
              <p className="mb-6 text-slate-600 text-center">You’ll be redirected to my Cal.com page to book a time that works for you.</p>
              <a href="https://cal.com/m-b-a-s" target="_blank" rel="noopener noreferrer" className="bg-[#815634] hover:bg-[#312f2f] text-white font-semibold px-6 py-2 rounded-xl shadow transition-colors duration-200">Go to Cal.com</a>
            </div>
          </div>
        )}
        <div className="flex items-center w-full max-w-2xl mx-auto mt-10">
          <hr className="flex-grow border-t border-[#e5e5e5]" />
        </div>
        <p className="mt-4 mb-2 text-slate-400 text-xs text-center w-full">&copy; {new Date().getFullYear()} M-b-a-s.</p>
        <p className=" text-slate-400 text-xs text-center w-full pb-6">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
