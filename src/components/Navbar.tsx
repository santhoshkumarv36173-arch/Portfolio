import { motion } from "motion/react";
import { Github, Linkedin, Mail, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs tracking-[0.3em] font-bold uppercase italic font-serif"
        >
          SKV / 24
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors ${i === 0 ? 'text-luxury-black border-b border-black pb-1' : 'text-gray-500 hover:text-luxury-black'}`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <div className="h-4 w-[1px] bg-gray-100" />
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <a href="https://github.com/santhoshkumarv36173-arch" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/santhosh-kumar-v-5b3056380" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                <Linkedin size={16} />
              </a>
            </div>
            <motion.a 
              href="#contact"
              whileHover={{ backgroundColor: "#1A1A1A", color: "#FDFDFD" }}
              className="text-[11px] tracking-[0.1em] font-bold border border-black px-5 py-2 rounded-full transition-colors"
            >
              HIRE ME
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-luxury-white border-b border-luxury-gray p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-serif tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
