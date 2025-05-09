import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { Rocket, Brain, Code, Bot } from 'lucide-react';

interface AILab {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  shortDescription: string;
  icon: React.ReactNode;
  status: string;
}

const aiLabs: AILab[] = [
  {
    id: "autonomous-agents",
    title: "Autonomous Agents Lab",
    description: "Research and development of self-learning AI agents that can understand, plan, and execute complex tasks autonomously.",
    shortDescription: "Building the next generation of autonomous AI agents that can think and act independently.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["LLM", "Reinforcement Learning", "Planning", "Decision Making"],
    icon: <Brain className="w-10 h-10 text-green-400" />,
    status: "Alpha Testing"
  },
  {
    id: "nlp-innovation",
    title: "NLP Innovation Lab",
    description: "Advancing natural language processing capabilities through novel architectures and training methodologies.",
    shortDescription: "Pushing the boundaries of language understanding and generation with cutting-edge NLP research.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["NLP", "Transformers", "Language Models", "Text Generation"],
    icon: <Code className="w-10 h-10 text-blue-400" />,
    status: "Live Demo"
  },
  {
    id: "ai-automation",
    title: "AI Automation Lab",
    description: "Developing intelligent automation solutions that combine AI with traditional automation techniques.",
    shortDescription: "Creating smart automation systems that learn and adapt to complex workflows.",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Automation", "Workflow", "Integration", "Process Mining"],
    icon: <Bot className="w-10 h-10 text-purple-400" />,
    status: "Coming Soon"
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

const AILabs = () => {
  const navigate = useNavigate();

  const handleLearnMore = (labId: string) => {
    navigate(`/ai-labs/${labId}`);
  };

  return (
    <section id="ai-labs" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          AI Labs
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Exploring the frontiers of artificial intelligence through research and innovation
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {aiLabs.map((lab, index) => (
          <motion.div
            key={lab.id}
            variants={itemVariants}
            className="h-full"
          >
            <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col glowing-card bg-gray-900/70 border-gray-800 rounded-xl">
              <div className="overflow-hidden h-48 relative">
                <img 
                  src={lab.image} 
                  alt={lab.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-white">{lab.title}</CardTitle>
                  {lab.icon}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {lab.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-blue-400 mt-2">{lab.status}</span>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-gray-400">
                  {lab.shortDescription}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-2">
                <Button 
                  onClick={() => handleLearnMore(lab.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default AILabs; 