import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="glass-panel p-8 md:p-12 h-full flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6 ">01. About Me</h3>
        
        <div className="space-y-4 text-sm md:text-base opacity-80 leading-relaxed font-light">
          <p>
            I am a Full-Stack Developer with a strong foundation in data-driven problem-solving and scalable application development. My journey in technology stems from a deep curiosity about how systems communicate and how we can use data to make intelligent decisions.
          </p>
          <p>
            Currently pursuing my Bachelor of Technology in Computational Science at D. Y. Patil International University. I am experienced in the MERN stack and proficient in Python, Pandas, NumPy, and machine learning models.
          </p>
          <p>
            Whether I'm building efficient, clean server applications or integrating real-world ML engines, my goal is always to create impactful platforms that solve genuine problems while offering exceptional user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
