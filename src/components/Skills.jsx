import { motion } from 'motion/react';
import { Database, Layout, Server, Brain, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={24} />,
    skills: ['JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'HTML5/CSS3', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'FastAPI']
  },
  {
    title: 'Data & DB',
    icon: <Database size={24} />,
    skills: ['MongoDB', 'Pandas', 'NumPy', 'SQL', 'Data Structures']
  },
  {
    title: 'Machine Learning',
    icon: <Brain size={24} />,
    skills: ['Model Training', 'NLP', 'Random Forest', 'Predictive Analysis']
  },
  {
    title: 'Core Concepts',
    icon: <Terminal size={24} />,
    skills: ['Algorithms', 'OOPs', 'System Design', 'Clean Code']
  },
  {
    title: 'Tools',
    icon: <GitBranch size={24} />,
    skills: ['Git', 'GitHub', 'Vite', 'Postman', 'Vercel']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="glass-panel p-8 md:p-12 h-full flex flex-col">
      <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 ">
        02. Technical Skills
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="space-y-3"
          >
            <div className="group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary opacity-60 scale-75">{category.icon}</span>
                <p className="text-[10px] md:text-xs font-mono opacity-40">{category.title}</p>
              </div>
              <div className="space-y-1">
                {category.skills.map(skill => (
                  <p key={skill} className="text-xs md:text-sm font-semibold opacity-90">{skill}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-auto p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
        <div>
          <p className="text-[10px] mono mb-1 opacity-50 font-mono">Current Focus</p>
          <p className="text-sm font-medium text-primary">Generative AI , LLM Fine-tuning & Full Stack Development</p>
        </div>
      </div>
    </section>
  );
}
