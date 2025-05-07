
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "AI Task Manager",
    description: "An intelligent task management system that uses NLP to categorize, prioritize, and suggest deadlines for your tasks.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "React", "Node.js", "NLP"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Autonomous Coding Agent",
    description: "A coding assistant that can understand complex requirements and generate complete code solutions with explanations.",
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["AI", "Python", "LangChain", "Agents"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Developer Portfolio Generator",
    description: "A tool that creates personalized developer portfolios by analyzing GitHub repositories and customizing designs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind", "GitHub API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "AI Content Platform",
    description: "A platform for generating and optimizing content for blogs, social media, and marketing materials with AI assistance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["LLM", "React", "Express", "OpenAI"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

// Get all unique tags
const allTags = Array.from(
  new Set(projectsData.flatMap((project) => project.tags))
);

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projectsData.filter((project) => project.tags.includes(selectedTag))
    : projectsData;

  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title">Projects</h2>
      
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Button
          onClick={() => setSelectedTag(null)}
          className={`filter-button ${
            selectedTag === null ? 'filter-button-active' : 'bg-gray-800 hover:bg-gray-700 text-white'
          }`}
        >
          All
        </Button>
        
        {allTags.map((tag) => (
          <Button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`filter-button ${
              selectedTag === tag ? 'filter-button-active' : 'bg-gray-800 hover:bg-gray-700 text-white'
            }`}
          >
            {tag}
          </Button>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      {/* View All Projects button would link to a dedicated projects page in the full implementation */}
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          View All Projects
        </Button>
      </motion.div>
    </section>
  );
};

export default Projects;
