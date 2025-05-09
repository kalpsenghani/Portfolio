import React from 'react';
import { motion } from 'framer-motion';

// Icons imported as image URLs for simplicity
const techStack = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', docs: 'https://www.tensorflow.org/learn' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', docs: 'https://docs.aws.amazon.com/' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', docs: 'https://tailwindcss.com/docs' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'n8n', icon: 'https://cdn.jsdelivr.net/gh/n8n-io/n8n/icons/icon.svg', docs: 'https://docs.n8n.io/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Technologies I Work With
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div>
      
      <motion.div
        className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {techStack.map((tech, index) => (
          <motion.a
            key={tech.name}
            href={tech.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group no-underline"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.96 }}
          >
            <div className="relative p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
              <motion.img 
                src={tech.icon} 
                alt={tech.name} 
                className="w-16 h-16 relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </div>
            <motion.span 
              className="mt-2 text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {tech.name}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
