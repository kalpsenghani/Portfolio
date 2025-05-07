
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
      className="h-full"
    >
      <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col glowing-card bg-gray-900/70 border-gray-800 rounded-xl">
        <div className="overflow-hidden h-48 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">{project.title}</CardTitle>
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
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button asChild className="w-full bg-gray-800 hover:bg-gray-700 text-white">
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
