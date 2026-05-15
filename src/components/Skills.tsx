import { motion } from "motion/react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Python", level: 85 },
  { name: "UI/UX", level: 80 },
  { name: "AI/ML", level: 88 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto bg-white border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
        <div className="space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold italic font-serif">02 / Expertise</span>
          <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">Skill <span className="italic">Stack.</span></h2>
        </div>
        <p className="max-w-xs text-xs tracking-widest leading-relaxed text-gray-400 uppercase font-bold text-right">
          Translating complex problems into elegant digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-4 group"
          >
            <div className="flex justify-between items-end">
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">{skill.name}</span>
              <span className="text-[11px] font-bold text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full h-[1px] bg-gray-100 relative overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-luxury-black"
              />
            </div>
            <p className="text-[9px] text-gray-300 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Advanced Proficiency
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
