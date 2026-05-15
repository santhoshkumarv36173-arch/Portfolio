import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-radial from-luxury-gray to-transparent pointer-events-none z-0"
      />

      <div className="z-10 text-center space-y-12 max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="w-48 h-48 rounded-full border border-gray-200 p-2">
            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <img 
                src="https://picsum.photos/seed/santhosh-profile/400/400" 
                alt="Santhosh" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-[64px] font-serif leading-[1.1] font-light tracking-tight">
              Santhosh<br/>Kumar V
            </h1>
            <p className="text-sm tracking-[0.2em] uppercase text-gray-400 font-semibold">CSE Student & Full Stack Architect</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-y-10"
        >
          <p className="text-base leading-relaxed text-gray-600 max-w-xs font-light">
            Building AI-driven products and modern digital experiences at Saveetha Engineering College.
          </p>

          <div className="flex gap-4 items-center">
            <a href="https://github.com/santhoshkumarv36173-arch" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-[10px] uppercase font-bold opacity-60 hover:opacity-100 transition-opacity">GH</a>
            <a href="https://linkedin.com/in/santhosh-kumar-v-5b3056380" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-[10px] uppercase font-bold opacity-60 hover:opacity-100 transition-opacity">LN</a>
            <div className="flex items-center gap-3 ml-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[11px] tracking-wider uppercase font-semibold text-gray-400">Available</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
