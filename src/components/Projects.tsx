import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

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
    image: "/lovable-uploads/Ems.png",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 3,
    title: "SpaceX Launch Tracker",
    description: "A comprehensive SpaceX launch tracker that displays upcoming and past launches with advanced filtering, sorting, and search capabilities. Features include mission details, launch status, and rocket information.",
    image: "/lovable-uploads/Space-X.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "Crypto Analytics Dashboard",
    description: "A full-stack web application for tracking and analyzing cryptocurrency data in real-time. Features real-time price tracking, historical data visualization, portfolio management, price alerts, and interactive charts. Built with React, Tailwind CSS, FastAPI, MongoDB, and more.",
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://crypto-analytics-frontend.onrender.com/", // Replace with actual live link if available
    githubUrl: "https://github.com/kalpsenghani/crypto-analytics-dashboard"
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
    title: "YouTube Short VS Long Analyzer",
    description: "A comprehensive analytics platform that compares the performance, audience demographics, and engagement metrics of YouTube Shorts versus long-form videos. Features include side-by-side analytics, interactive charts, and actionable insights to help creators optimize their content strategy for both formats.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
    demoUrl: "https://yt-analyzer-kappa.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
    status: "In Progress",
    statusColor: "",
    statusGlow: "in-progress"
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

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
