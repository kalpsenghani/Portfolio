import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "AI Engineer & Full Stack Developer",
    description: "Leading development of agentic applications and automations, specializing in AI-powered workflows and LLM integrations.",
    type: "experience"
  },
  {
    id: 2,
    year: "2021 - 2023",
    title: "Senior Software Engineer",
    description: "Architected and implemented enterprise-grade applications with a focus on React, Node.js, and cloud infrastructure.",
    type: "experience"
  },
  {
    id: 3,
    year: "2019 - 2021",
    title: "Software Developer",
    description: "Built user-centric web applications and delivered solutions for diverse client requirements.",
    type: "experience"
  },
  {
    id: 4,
    year: "2015 - 2019",
    title: "B.S. Computer Science",
    description: "Graduated with honors, focusing on artificial intelligence and distributed systems.",
    type: "education"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Bio */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Who I Am</h3>
              <p className="text-muted-foreground mb-4">
                I'm a <span className="font-semibold text-blue-400">full stack engineer</span> who specializes in building intelligent, AI-powered applications that solve complex problems.
              </p>
              <p className="text-muted-foreground mb-4">
                With expertise spanning both <span className="font-semibold text-blue-400">frontend and backend development</span>, I focus on creating seamless user experiences backed by robust, scalable architectures.
              </p>
              <p className="text-muted-foreground">
                Currently, I'm exploring the potential of <span className="font-semibold text-blue-400">AI agents</span> to automate workflows and enhance software capabilities.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                <Skill label="AI/ML" percentage={90} />
                <Skill label="React" percentage={95} />
                <Skill label="Node.js" percentage={85} />
                <Skill label="TypeScript" percentage={90} />
                <Skill label="Python" percentage={80} />
                <Skill label="Cloud Architecture" percentage={75} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
            
            <div className="space-y-12">
              {timelineData.map((item) => (
                <div key={item.id} className="relative pl-14">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center rounded-full border-4 border-background z-10">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  
                  <Card className="glass-card rounded-xl border-muted">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-blue-400">{label}</span>
      <span className="text-sm text-muted-foreground">{percentage}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
