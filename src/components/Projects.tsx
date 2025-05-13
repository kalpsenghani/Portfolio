import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Task Manager",
    description: "An intelligent task management system that uses NLP to categorize, prioritize, and suggest deadlines for your tasks.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "React", "Node.js", "NLP"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/example/project1"
  },
  {
    id: 2,
    title: "Autonomous Coding Agent",
    description: "A coding assistant that can understand complex requirements and generate complete code solutions with explanations.",
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Python", "LangChain", "Agents"],
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Developer Portfolio Generator",
    description: "A tool that creates personalized developer portfolios by analyzing GitHub repositories and customizing designs.",
    image: "https://images.unsplash.com/photo-1498050108023-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind", "GitHub API"],
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/example/project3"
  },
  {
    id: 4,
    title: "AI Content Platform",
    description: "A platform for generating and optimizing content for blogs, social media, and marketing materials with AI assistance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["LLM", "React", "Express", "OpenAI"],
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/example/project4"
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    description: "A modern dashboard for controlling and monitoring smart home devices with real-time analytics and automation rules.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["IoT", "React", "WebSocket", "D3.js"],
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/example/project5"
  },
  {
    id: 6,
    title: "AI Job Advisor",
    description: `A full stack web application that analyzes resumes using AI to provide job role suggestions, resume improvement tips, and interview preparation questions. We can Upload Resume for AI Analysis. It has Intelligent parsing and analysis using OpenAI GPT-4 along with Personalized Recommendations. It gives Top 5 job role suggestions matching the candidate's profile and resume improvement tips Interview questions based on experience and Stores previous analysis results`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["Axios", "OpenAI GPT-4", "React", "Node.js"],
    demoUrl: "https://yourjobadvisor.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/AI_Job_Advisor"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Button */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link to="/micro-projects">
          <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white">
            View Micro Projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
