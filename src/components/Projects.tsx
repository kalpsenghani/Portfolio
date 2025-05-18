import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kalpsenghani1.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "A comprehensive employee management solution built with Angular and Node.js/GraphQL. Features include complete CRUD operations for employee data, secure file upload capabilities, robust authentication system, and a modern responsive UI. The system provides an efficient way to manage employee information, track records, and handle administrative tasks.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 3,
    title: "SpaceX Launch Tracker",
    description: "A comprehensive SpaceX launch tracker that displays upcoming and past launches with advanced filtering, sorting, and search capabilities. Features include mission details, launch status, and rocket information.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "AI Task Manager",
    description: "A sophisticated task management platform powered by AI that intelligently organizes and optimizes your workflow. Features include smart task categorization using NLP, automated priority assignment, deadline suggestions, and productivity insights. The system learns from your work patterns to provide personalized recommendations and helps you maintain focus on high-impact tasks.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["AI", "React", "Node.js", "NLP", "Machine Learning"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/kalpsenghani/ai-task-manager",
    status: "In Progress",
    statusColor: "text-green-400",
    statusGlow: "animate-pulse"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A robust e-commerce platform built with Java Spring Boot, featuring microservices architecture and real-time inventory management. The system implements secure payment processing, order tracking, and customer analytics. Key features include Docker containerization for easy deployment, Kafka for event streaming and real-time notifications, and Swagger for comprehensive API documentation. The platform ensures high availability and scalability through distributed architecture.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Java", "Spring Boot", "Docker", "Kafka", "Swagger", "Microservices"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/example/ecommerce-platform"
  },
  {
    id: 6,
    title: "AI Job Advisor",
    description: `A full stack web application that analyzes resumes using AI to provide job role suggestions, resume improvement tips, and interview preparation questions. We can Upload Resume for AI Analysis. It has Intelligent parsing and analysis using OpenAI GPT-4 along with Personalized Recommendations. It gives Top 5 job role suggestions matching the candidate's profile and resume improvement tips Interview questions based on experience and Stores previous analysis results`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    tags: ["Axios", "OpenAI GPT-4", "React", "Node.js"],
    demoUrl: "https://yourjobadvisor.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/AI_Job_Advisor",
    status: "In progress",
    statusColor: "bg-blue-600 hover:bg-blue-700 text-white",
    statusGlow: "animate-pulse"
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
