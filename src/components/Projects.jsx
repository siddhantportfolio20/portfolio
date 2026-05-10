import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CareXpertAI',
    subtitle: 'Intelligent Healthcare Platform',
    period: '2026 – Present',
    description: 'An advanced healthcare platform combining AI-based diagnostics with practical applications. Features a Random Forest ML model, Google Maps API integration, and voice assistance for automated medical reporting.',
    tech: ['MERN Stack', 'FastAPI', 'Random Forest Model', 'Google Maps API', 'NLP'],
    github: 'https://github.com/siddhantportfolio20',
    link: '#'
  },
  {
    title: 'Garbage Management System',
    subtitle: 'Community-Driven Tracking Platform',
    period: '2025',
    description: 'A comprehensive waste registration and tracking software system. Built to empower community-driven environmental management with an intuitive UI and resilient backend.',
    tech: ['Django', 'Flask', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/siddhantportfolio20',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="glass-panel p-8 md:p-12 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] ">
          04. Featured Projects
        </h3>
        <span className="text-[10px] text-primary font-mono cursor-pointer hover:underline">View All &rarr;</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 h-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`flex flex-col bg-white/5 rounded-2xl p-6 border border-white/5 transition-colors hover:border-primary/30 ${index !== 0 ? 'opacity-70 hover:opacity-100' : ''}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg md:text-xl font-bold tracking-tight mb-1">{project.title}</h4>
                <p className="text-[11px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded inline-block">
                  {project.tech[0]} + {project.tech[1]}
                </p>
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-all p-1">
                  <Github size={18} />
                </a>
              </div>
            </div>

            <p className="opacity-70 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.slice(2).map(tech => (
                <span key={tech} className="font-mono text-[9px] px-2 py-1 bg-background/50 border border-glass-border rounded uppercase opacity-60">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
