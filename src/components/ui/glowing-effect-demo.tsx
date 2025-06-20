"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles, Github, ExternalLink } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Tech icon mapping (from Technologies.tsx)
const techIconMap: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  Angular: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
  'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  Redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'Material UI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
  jQuery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  Django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  TensorFlow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  FastAPI: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  REST: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg',
  Supabase: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Postgres: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  SQLite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  AWS: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  Azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  Vercel: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  Netlify: 'https://www.netlify.com/v3/img/components/logomark.png',
  Jenkins: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  Linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  LLM: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  OpenAI: 'https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png',
  Agents: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Timer: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Productivity: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  Stats: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  IoT: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'WebSocket': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'D3.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Weather API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Forecast': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
};

// Micro projects data (from MicroProjects.tsx, simplified)
const microProjectsData = [
  {
    title: "AI Task Manager",
    description: "AI-powered platform for smart task organization and productivity.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AI", "React", "Node.js", "NLP", "Machine Learning"],
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/kalpsenghani/ai-task-manager"
  },
  {
    title: "EventRaze",
    description: "Event management platform with admin dashboard.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["PHP", "Postgres", "HTML", "CSS", "JavaScript", "XAMPP"],
    demoUrl: undefined,
    githubUrl: "https://github.com/kalpsenghani/EventRaze"
  },
  {
    title: "Weather Forecast",
    description: "Weather app with real-time data and forecasts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "OpenWeatherMap API", "CSS", "Weather API", "Forecast"],
    demoUrl: "https://weather-app-kalpsenghani.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Weather-App"
  },
  {
    title: "YouTube Short VS Long Analyzer",
    description: "A YouTube analytics platform for comparing short and long video performance, audience, and engagement.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
    demoUrl: undefined,
    githubUrl: "https://github.com/kalpsenghani/YT_Analyzer"
  },
  {
    title: "AI Content Platform",
    description: "AI-powered content generation and optimization.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["LLM", "React", "Express", "OpenAI"],
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/example/project4"
  },
  {
    title: "Pomodoro Timer",
    description: "Customizable Pomodoro timer with stats.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Timer", "Productivity", "Stats"],
    demoUrl: "https://example.com/pomodoro-demo",
    githubUrl: "https://github.com/example/pomodoro-timer"
  }
];

export default function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {microProjectsData.map((project, idx) => (
        <GridItem key={project.title} project={project} />
      ))}
    </ul>
  );
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface GridItemProps {
  project: Project;
}

const GridItem = ({ project }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none md:col-span-6 xl:col-span-4`}>
      <div
        className="relative h-full rounded-2xl border-2 border-white/30 hover:border-blue-400 transition-colors duration-300 p-2 md:rounded-3xl md:p-3 overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 pointer-events-none z-0" />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 rounded-xl p-6 md:p-6 z-10">
          <div className="flex flex-row items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-sans text-xl font-semibold text-white md:text-2xl drop-shadow-lg mb-1">
                {project.title}
              </h3>
              <p className="font-sans text-sm text-gray-200 md:text-base drop-shadow mb-2">
                {project.description}
              </p>
            </div>
            {/* Tech stack logos - vertical column, glassmorphism style */}
            <div className="flex flex-col gap-2 items-end justify-start min-w-[2.5rem]">
              {project.tags.map((tag) => (
                techIconMap[tag] ? (
                  <div
                    key={tag}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/30 backdrop-blur-md border border-white/10 shadow-md"
                    title={tag}
                  >
                    <img
                      src={techIconMap[tag]}
                      alt={tag}
                      className="w-6 h-6 object-contain"
                      style={{ filter: 'none' }}
                    />
                  </div>
                ) : null
              ))}
            </div>
          </div>
          {/* GitHub and Live buttons */}
          <div className="flex flex-row items-center justify-end gap-2 mt-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-gray-900 hover:border-blue-400 transition-colors"
                title="View on GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-gray-900 hover:border-blue-400 transition-colors"
                title="View Live"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}; 