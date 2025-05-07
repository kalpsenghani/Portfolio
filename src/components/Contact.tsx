
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Contact = () => {
  const handleResumeDownload = () => {
    // Link to the resume PDF file
    window.open('/kalp_resume.pdf', '_blank');
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Resume</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <AnimatedCard delay={0.2}>
          <div className="glass-card bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">Professional Summary</h3>
            <p className="text-gray-400 mb-6">
              I'm a Full Stack Engineer with a specialization in AI and autonomous agents, creating intuitive and intelligent applications that solve complex problems.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-white">kalp@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-gray-500/20 text-gray-400">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-gray-300">GitHub</p>
                  <a href="https://github.com/kalpsenghani" className="text-white hover:text-blue-400 transition-colors">github.com/kalpsenghani</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-gray-300">LinkedIn</p>
                  <a href="https://linkedin.com/in/kalpsenghani" className="text-white hover:text-blue-400 transition-colors">linkedin.com/in/kalpsenghani</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4 justify-center">
              {/* HackerRank */}
              <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-green-600/20 text-green-400 hover:bg-green-600/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 01-.11-.11V8.112c0-.06.05-.11.11-.11h1.805c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm10.043 0c.06 0 .11.05.11.11v7.767c0 .06-.05.11-.11.11h-1.805c-.061 0-.11-.05-.11-.11V8.112c0-.06.049-.11.11-.11h1.805zm-7.01 2.817c-.061 0-.11.05-.11.11v1.916c0 .06-.05.111-.111.111h-1.237v-3.893h1.237c.06 0 .11.05.11.11v1.646zm0-2.817c.06 0 .11.05.11.11v.815c0 .061-.05.111-.11.111h-2.545c-.06 0-.11-.05-.11-.11v-.815c0-.06.05-.11.11-.11h2.544zm3.517 0c.06 0 .11.05.11.11v.815c0 .061-.05.111-.11.111h-2.545c-.06 0-.11-.05-.11-.11v-.815c0-.06.05-.11.11-.11h2.544z"/>
                </svg>
              </a>
              
              {/* LeetCode */}
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
              
              {/* Stack Overflow */}
              <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-orange-600/20 text-orange-400 hover:bg-orange-600/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </AnimatedCard>
        
        <AnimatedCard delay={0.4}>
          <div className="glowing-card bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <Input id="name" className="bg-gray-800/50 border-gray-700 text-white" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <Input id="email" className="bg-gray-800/50 border-gray-700 text-white" placeholder="Your email" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                  className="bg-gray-800/50 border-gray-700 text-white"
                  placeholder="Your message"
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                Send Message
                <Send size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Contact;
