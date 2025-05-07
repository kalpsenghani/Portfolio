
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Brain, Code, Bot } from 'lucide-react';

const aiProjects = [
  {
    id: 1,
    title: 'Text-to-SQL Generator',
    description: 'Convert natural language to SQL queries with high accuracy.',
    icon: <Code className="w-10 h-10 text-blue-400" />,
    status: 'Live Demo'
  },
  {
    id: 2,
    title: 'Resume Analyzer',
    description: 'AI-powered tool to optimize your resume for ATS systems.',
    icon: <Bot className="w-10 h-10 text-purple-400" />,
    status: 'Coming Soon'
  },
  {
    id: 3,
    title: 'Autonomous Agent Framework',
    description: 'Create and deploy custom AI agents for complex tasks.',
    icon: <Brain className="w-10 h-10 text-green-400" />,
    status: 'Alpha Testing'
  },
  {
    id: 4,
    title: 'Code Generator',
    description: 'Generate boilerplate code from high-level specifications.',
    icon: <Rocket className="w-10 h-10 text-red-400" />,
    status: 'Live Demo'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50
    }
  }
};

const AiLab = () => {
  return (
    <section id="ai-lab" className="section-container">
      <h2 className="section-title">AI Lab</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">Where software meets autonomy. Explore my experiments in artificial intelligence and autonomous agent development.</p>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        {aiProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className="glowing-card bg-gray-900/70 border-gray-800 h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-lg bg-gray-800/50">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-900/50 text-blue-300">
                      {project.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="text-center">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Explore AI Lab
        </Button>
      </div>
    </section>
  );
};

export default AiLab;
