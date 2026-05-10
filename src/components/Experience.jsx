import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'TechnoHacks',
    period: 'Jun 2025 – Aug 2025',
    description: [
      'Processed comprehensive datasets using Python (Pandas, NumPy).',
      'Built and refined machine learning and NLP models for predictive analysis.',
      'Extracted actionable insights from raw data pipelines.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'GMMSPL',
    period: 'May 2024 – Jul 2024',
    description: [
      'Built responsive and highly user-friendly interfaces.',
      'Worked extensively on backend integrations utilizing Flask and Django.',
      'Optimized application performance and database queries.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="glass-panel p-8 md:p-12 h-full">
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8"
      >
        03. Experience
      </motion.h3>

      <div className="relative flex-1">
        <div className="timeline-line hidden md:block"></div>
        <div className="space-y-10 md:space-y-8 h-full md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative md:pl-6"
            >
              <div className={`absolute left-0 top-1 timeline-dot hidden md:block ${index !== 0 ? 'opacity-40' : ''}`}></div>
              
              <div className="group transition-colors">
                <p className={`text-[10px] md:text-xs font-mono mb-1 ${index === 0 ? 'text-primary' : 'opacity-40'}`}>
                  {exp.period}
                </p>
                <div className="flex flex-col mb-4">
                  <h4 className="text-base md:text-lg font-bold">{exp.company}</h4>
                  <p className="text-xs md:text-sm opacity-60 text-primary">{exp.role}</p>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-70 text-xs md:text-sm leading-relaxed">
                      <span className="text-primary mt-1.5 opacity-50 text-[10px]">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
