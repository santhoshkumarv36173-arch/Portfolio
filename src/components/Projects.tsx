import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Attendance System",
    description: "AI-powered attendance system using face recognition technology for students.",
    tags: ["Python", "OpenCV", "ML"],
    image: "https://picsum.photos/seed/attendance/800/600",
    github: "https://github.com/santhoshkumarv36173-arch/attendance-system",
    live: "#"
  },
  {
    title: "Road Safety AI Assistant",
    description: "AI-based road safety assistant for accident prevention and awareness.",
    tags: ["Python", "AI", "Data Analysis"],
    image: "https://picsum.photos/seed/roadsafety/800/600",
    github: "https://github.com/santhoshkumarv36173-arch/road-safety-ai",
    live: "https://example.com"
  },
  {
    title: "Student Portfolio",
    description: "Premium responsive personal portfolio website with smooth animations.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/seed/portfolio/800/600",
    github: "https://github.com/santhoshkumarv36173-arch/portfolio",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
        <div className="space-y-4">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-bold italic font-serif">04 / Selected Works</span>
          <h2 className="text-5xl md:text-7xl font-serif font-light leading-[1.1]">Featured <span className="italic">Cases.</span></h2>
        </div>
        <p className="max-w-[200px] text-[10px] tracking-widest leading-relaxed text-gray-400 uppercase font-black text-right">
          A Curation of Modern Digital Artifacts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer space-y-6"
          >
            <div className="aspect-video bg-gray-100 relative overflow-hidden grayscale transition duration-700 hover:grayscale-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1 h-[1px] bg-black" />
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none">{project.tags.join(" / ")}</p>
              </div>
              <h4 className="text-xl font-serif font-light leading-tight group-hover:underline decoration-1 underline-offset-4">{project.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">{project.description}</p>
              
              <div className="flex gap-4 pt-2">
                <a href={project.github} className="text-[9px] font-black uppercase tracking-widest hover:text-gray-400 transition-colors">GitHub</a>
                <a href={project.live} className="text-[9px] font-black uppercase tracking-widest hover:text-gray-400 transition-colors">Live View</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
