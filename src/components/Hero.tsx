
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import AnimatedText from './AnimatedText';

const Hero = () => {
  const handleResumeDownload = () => {
    // Link to the resume PDF file
    window.open('/kalp_resume.pdf', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block">Hi, I'm Kalp Senghani</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">I build AI-powered full stack experiences</span>
          </motion.h1>
          
          <motion.h2 
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="block">I craft</span>
            <AnimatedText 
              text={[
                "AI-powered full stack experiences", 
                "intelligent applications", 
                "autonomous software agents",
                "developer tools & frameworks"
              ]} 
              className="text-blue-400 font-medium" 
            />
          </motion.h2>
          
          <motion.p 
            className="text-md mb-10 text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Full Stack Engineer with a focus on AI innovation and autonomous agents.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button className="py-6 px-8 bg-blue-600 hover:bg-blue-700 text-white">
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="py-6 px-8 border-blue-500/30 text-blue-400 hover:bg-blue-900/20"
              onClick={handleResumeDownload}
            >
              Resume
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="animate-bounce p-2 bg-blue-900/30 rounded-full border border-blue-500/20">
              <a href="#technologies" className="text-blue-400">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
