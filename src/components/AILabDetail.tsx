import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface AILabDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  researchPapers?: {
    title: string;
    url: string;
  }[];
}

const aiLabDetails: Record<string, AILabDetail> = {
  "autonomous-agents": {
    id: "autonomous-agents",
    title: "Autonomous Agents Lab",
    description: "Research and development of self-learning AI agents that can understand, plan, and execute complex tasks autonomously.",
    longDescription: `The Autonomous Agents Lab focuses on developing the next generation of AI systems that can operate independently in complex environments. Our research combines advances in large language models, reinforcement learning, and planning algorithms to create agents that can:
    
    • Understand and decompose complex tasks
    • Plan and execute multi-step actions
    • Learn from experience and adapt to new situations
    • Collaborate with humans and other agents
    • Make decisions under uncertainty
    
    Our work spans various domains including robotics, virtual assistants, and autonomous systems.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["LLM", "Reinforcement Learning", "Planning", "Decision Making"],
    features: [
      "Multi-agent collaboration systems",
      "Task decomposition and planning",
      "Reinforcement learning from human feedback",
      "Autonomous decision making",
      "Adaptive learning systems"
    ],
    githubUrl: "https://github.com/kalpsenghani/autonomous-agents",
    demoUrl: "https://demo.autonomous-agents.ai",
    researchPapers: [
      {
        title: "Autonomous Task Planning with Large Language Models",
        url: "https://arxiv.org/abs/2304.03442"
      },
      {
        title: "Multi-Agent Collaboration in Complex Environments",
        url: "https://arxiv.org/abs/2305.12345"
      }
    ]
  },
  "nlp-innovation": {
    id: "nlp-innovation",
    title: "NLP Innovation Lab",
    description: "Advancing natural language processing capabilities through novel architectures and training methodologies.",
    longDescription: `The NLP Innovation Lab is dedicated to pushing the boundaries of language understanding and generation. Our research focuses on:
    
    • Novel transformer architectures
    • Efficient training methodologies
    • Multilingual language models
    • Domain-specific language understanding
    • Ethical AI and bias mitigation
    
    We combine theoretical advances with practical applications to create more capable and efficient language models.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["NLP", "Transformers", "Language Models", "Text Generation"],
    features: [
      "Custom transformer architectures",
      "Efficient training methods",
      "Multilingual models",
      "Domain adaptation",
      "Bias detection and mitigation"
    ],
    githubUrl: "https://github.com/kalpsenghani/nlp-innovation",
    researchPapers: [
      {
        title: "Efficient Training of Large Language Models",
        url: "https://arxiv.org/abs/2306.07890"
      }
    ]
  },
  "ai-automation": {
    id: "ai-automation",
    title: "AI Automation Lab",
    description: "Developing intelligent automation solutions that combine AI with traditional automation techniques.",
    longDescription: `The AI Automation Lab focuses on creating intelligent systems that can automate complex workflows while learning and adapting to new situations. Our work includes:
    
    • Process mining and optimization
    • Intelligent workflow automation
    • Robotic process automation
    • Integration with existing systems
    • Continuous learning and improvement
    
    We combine traditional automation techniques with cutting-edge AI to create more flexible and intelligent automation solutions.`,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Automation", "Workflow", "Integration", "Process Mining"],
    features: [
      "Intelligent workflow automation",
      "Process mining and optimization",
      "RPA with AI capabilities",
      "System integration",
      "Continuous improvement"
    ],
    githubUrl: "https://github.com/kalpsenghani/ai-automation",
    demoUrl: "https://demo.ai-automation.ai"
  }
};

const AILabDetail = () => {
  const { labId } = useParams();
  const navigate = useNavigate();
  const lab = labId ? aiLabDetails[labId] : null;

  if (!lab) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Lab not found</h1>
          <Button onClick={() => navigate('/#ai-labs')}>Back to AI Labs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            className="mb-8 text-blue-400 hover:text-blue-300"
            onClick={() => navigate('/#ai-labs')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Labs
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl font-bold text-white mb-4">{lab.title}</h1>
                <p className="text-xl text-gray-400 mb-8">{lab.description}</p>
                
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="whitespace-pre-line text-gray-300">{lab.longDescription}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-white mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {lab.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {lab.researchPapers && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">Research Papers</h2>
                    <div className="space-y-4">
                      {lab.researchPapers.map((paper, index) => (
                        <motion.a
                          key={index}
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <h3 className="text-lg font-medium text-white mb-2">{paper.title}</h3>
                          <p className="text-blue-400 text-sm">View Paper →</p>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-8"
              >
                <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 mb-6">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {lab.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 text-blue-300 rounded-full text-sm border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {lab.githubUrl && (
                      <Button
                        className="w-full px-8 py-2 rounded-full bg-gradient-to-b from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white focus:ring-2 focus:ring-gray-400 hover:shadow-xl transition duration-200"
                        onClick={() => window.open(lab.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </Button>
                    )}
                    
                    {lab.demoUrl && (
                      <Button
                        className="w-full px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                        onClick={() => window.open(lab.demoUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AILabDetail; 