import { motion } from "motion/react";

const education = [
  {
    college: "Saveetha Engineering College",
    degree: "BE",
    department: "Computer Science and Engineering",
    year: "1st Year",
    cgpa: "8.8",
    period: "2024 - Present"
  },
  // Add other items if needed, but only 1st year was provided
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="space-y-4 mb-24">
        <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold italic font-serif">03 / Journey</span>
        <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">Education <span className="italic">History.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 overflow-hidden border border-gray-100">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 space-y-6 bg-white group hover:bg-gray-50/50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">{item.period}</span>
              <div className="px-3 py-1 border border-gray-200 rounded-md text-[10px] font-black uppercase tracking-widest">CGPA: {item.cgpa}</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-light leading-tight group-hover:italic transition-all">
                {item.college}
              </h3>
              <div className="space-y-1">
                <p className="text-sm text-gray-800 font-medium tracking-tight">
                  {item.degree} in {item.department}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{item.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
