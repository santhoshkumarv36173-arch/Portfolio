import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold italic font-serif">01 / About Me</span>
            <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight">
              Crafting <br /> <span className="italic">the future</span> <br /> through code.
            </h2>
          </div>
          
          <div className="relative group max-w-md">
            <div className="p-2 border border-gray-100 rounded-2xl">
              <img 
                src="https://picsum.photos/seed/santhosh-about/800/1000" 
                alt="Santhosh Kumar V" 
                className="grayscale group-hover:grayscale-0 transition-all duration-700 rounded-xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxury-black rounded-full flex items-center justify-center text-luxury-white text-[10px] uppercase tracking-[0.3em] font-bold text-center p-4">
              Student / CSE
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16 lg:pt-32"
        >
          <div className="space-y-6">
            <h3 className="text-xl tracking-[0.2em] font-black uppercase text-gray-400">My Philosophy</h3>
            <p className="text-2xl font-serif font-light leading-relaxed leading-snug">
              I am a CSE student at Saveetha Engineering College with a deep passion for web development and AI. 
              My goal is to become a high-impact full-stack developer who builds seamless, <span className="italic underline decoration-1 underline-offset-4">intelligent</span> user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Career Goal</span>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Full Stack Architect & AI Integration</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Focus</span>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Next.js, Python, & Gen AI</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Interests</span>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Modern Web & Machine Learning</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400">Location</span>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">Chennai, IN</p>
            </div>
          </div>

          <blockquote className="border-l border-luxury-black pl-8 py-2">
            <p className="text-xl font-serif italic opacity-60 leading-relaxed font-light">
              "Technology is best when it brings people together and solves real-world challenges through elegant logic."
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
