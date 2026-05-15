import { motion } from "motion/react";
import { Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold italic font-serif">05 / Get in touch</span>
            <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tighter leading-none">
              Let's <br /> <span className="italic">connect.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[11px] tracking-wider uppercase font-bold text-gray-400">Available for Collaborate</span>
            </div>

            <div className="space-y-6 flex flex-col items-start font-serif text-[#1A1A1A]">
              <a href="mailto:santhoshkumarv36173@gmail.com" className="group flex items-center gap-4 text-2xl md:text-4xl font-light hover:italic transition-all">
                santhoshkumarv36173@gmail.com
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gray-400 font-sans" />
              </a>
              <a href="tel:+919600277182" className="group flex items-center gap-4 text-2xl md:text-3xl font-light hover:italic transition-all">
                +91 9600277182
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-gray-400 font-sans" />
              </a>
            </div>

            <div className="flex gap-8 pt-6">
              <a href="https://linkedin.com/in/santhosh-kumar-v-5b3056380" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity"><Linkedin size={20} /></a>
              <a href="https://github.com/santhoshkumarv36173-arch" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity"><Github size={20} /></a>
              <a href="https://www.instagram.com/smart____sk__maths" target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-opacity"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10 bg-gray-50/50 p-8 md:p-12 border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Your Identity</label>
              <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-200 pb-3 text-sm focus:outline-none focus:border-luxury-black transition-colors placeholder:text-gray-300" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Your Reach</label>
              <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-200 pb-3 text-sm focus:outline-none focus:border-luxury-black transition-colors placeholder:text-gray-300" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Brief Inquiry</label>
            <textarea rows={4} placeholder="How can I help you?" className="w-full bg-transparent border-b border-gray-200 pb-3 text-sm focus:outline-none focus:border-luxury-black transition-colors placeholder:text-gray-300" />
          </div>
          <motion.button 
            type="button"
            whileHover={{ backgroundColor: "#1A1A1A", color: "#FDFDFD" }}
            className="w-full py-5 border border-black rounded-full uppercase tracking-[0.2em] font-bold text-[11px] transition-colors"
          >
            Confirm Inquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
