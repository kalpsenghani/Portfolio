import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
  statusColor?: string;
  statusGlow?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: index * 0.1
        }
      }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full group"
    >
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-gray-900/70 border-gray-800 rounded-xl relative project-card-hover card-shadow-effect">
        {/* Simple but visible shadow effect */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-xl transition-all duration-300 blur-md scale-150 group-hover:scale-100 -z-10"></div>
        
        <div className="overflow-hidden h-48 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
              {project.title}
              {project.statusGlow === 'in-progress' && (
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              )}
            </CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs bg-gray-800/50 text-blue-300 border-blue-500/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-gray-400">
            {project.description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="flex justify-between gap-4 pt-2">
          {project.demoUrl && (
            <Button asChild className={`w-full px-8 py-2 rounded-full ${
              project.status 
                ? project.statusColor || '' 
                : 'bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200'
            }`}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                {project.status ? project.status : 'Live Demo'}
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button asChild className="w-full px-8 py-2 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white focus:ring-2 focus:ring-gray-400 hover:shadow-xl transition duration-200">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
