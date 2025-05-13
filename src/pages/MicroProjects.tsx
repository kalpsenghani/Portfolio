import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProjectCard, { Project } from '@/components/ProjectCard';

// Sample micro projects data
const microProjectsData: Project[] = [
  {
    id: 1,
    title: "SpaceX Launch Tracker",
    description: "A comprehensive SpaceX launch tracker that displays upcoming and past launches with advanced filtering, sorting, and search capabilities. Features include mission details, launch status, and rocket information.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 2,
    title: "EventRaze",
    description: "A comprehensive event management platform featuring an interactive customer portal and intuitive admin dashboard. The system enables seamless event organization, ticket management, attendee tracking, and real-time analytics. The admin panel provides powerful tools for event creation, scheduling, and management.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    tags: ["PHP", "Postgres", "HTML", "CSS", "JavaScript","XAMPP"],
    //demoUrl: "https://event-management-system-frontend.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/EventRaze"
  },
  {
    id: 3,
    title: "Weather Forecast",
    description: "A dynamic weather application built with React and OpenWeatherMap API that provides real-time weather data. Features include detailed weather metrics, weather conditions visualization, and location-based weather updates. The app offers an intuitive interface for users to check current conditions and plan ahead with accurate forecasts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "OpenWeatherMap API", "CSS", "Weather API", "Forecast"],
    demoUrl: "https://weather-app-kalpsenghani.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Weather-App"
  },
  {
    id: 4,
    title: "Employee Management System",
    description: "A comprehensive employee management solution built with Angular and Node.js/GraphQL. Features include complete CRUD operations for employee data, secure file upload capabilities, robust authentication system, and a modern responsive UI. The system provides an efficient way to manage employee information, track records, and handle administrative tasks.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 5,
    title: "Portfolio with Admin Dashboard",
    description: "A modern, full-stack portfolio website featuring an integrated admin dashboard for seamless content and project management. The platform supports secure authentication with Next-Auth, state management via React Context API, and leverages MongoDB and PostgreSQL for data storage. The admin dashboard allows easy updates to portfolio content, project listings, and blog posts, all within a responsive and visually engaging UI.",
    image: "/lovable-uploads/Portfolio.png", // Provided screenshot
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "MongoDB"],
    demoUrl: "https://your-portfolio-demo-link.com/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
  {
    id: 6,
    title: "Pomodoro Timer",
    description: "A customizable Pomodoro timer with task tracking and statistics.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Timer", "Productivity", "Stats"],
    demoUrl: "https://example.com/pomodoro-demo",
    githubUrl: "https://github.com/example/pomodoro-timer"
  }
];

const MicroProjects = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Back Button */}
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Micro Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of smaller projects and experiments showcasing various web development concepts and tools
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicroProjects; 