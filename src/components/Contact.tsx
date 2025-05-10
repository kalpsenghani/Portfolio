import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Github, Linkedin, Send, Download, Eye, FileText, X, Code2, MessageSquare } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kalpsenghani0601@gmail.com',
    href: 'mailto:kalpsenghani0601@gmail.com',
    bg: 'bg-blue-700',
    iconColor: 'text-white',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kalpsenghani',
    href: 'https://github.com/kalpsenghani',
    bg: 'bg-gray-700',
    iconColor: 'text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kalpsenghani',
    href: 'https://linkedin.com/in/kalpsenghani',
    bg: 'bg-blue-800',
    iconColor: 'text-white',
  },
];

// LeetCode SVG
const LeetCodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.5 36.5L14 25.5L35.5 14.5" stroke="#FFA116" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 25.5H35.5" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
// HackerRank SVG
const HackerRankIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#2EC866"/>
    <path d="M25 15V35" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <path d="M18 25H32" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);
// Stack Overflow SVG
const StackOverflowIcon = () => (
  <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="34" height="34" rx="8" fill="#F48024"/>
    <path d="M18 35V30H32V35" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 28L30 32" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M22 24L32 28" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <path d="M24 20L34 24" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const codingPlatforms = [
  {
    icon: LeetCodeIcon,
    label: 'LeetCode',
    href: 'https://leetcode.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: HackerRankIcon,
    label: 'HackerRank',
    href: 'https://hackerrank.com',
    bg: 'bg-white',
    iconColor: '',
  },
  {
    icon: StackOverflowIcon,
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com',
    bg: 'bg-white',
    iconColor: '',
  },
];

const ProfessionalSummary = () => (
  <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
    <CardHeader>
      <CardTitle className="text-3xl font-bold text-white">Professional Summary</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 text-base mb-8">
              I'm a Full Stack Engineer with a specialization in AI and autonomous agents, creating intuitive and intelligent applications that solve complex problems.
            </p>
            <div className="space-y-4 mb-8">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
          >
            <span className={`w-11 h-11 flex items-center justify-center rounded-full ${method.bg} ${method.iconColor} text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
              <method.icon className="w-6 h-6" />
            </span>
            <div className="flex flex-col">
              <span className="text-white font-medium leading-tight">{method.label}</span>
              <span className="text-gray-300 text-sm leading-tight">{method.value}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex gap-6 mt-4">
        {codingPlatforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-14 h-14 flex items-center justify-center rounded-full bg-transparent text-3xl transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_16px_4px_rgba(36,160,255,0.25)] hover:scale-110`}
            aria-label={platform.label}
          >
            <platform.icon />
          </a>
        ))}
            </div>
    </CardContent>
  </Card>
);

const ContactForm = () => (
  <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-white">Let's Talk</CardTitle>
    </CardHeader>
    <CardContent>
            <form className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-base font-semibold text-white">Name</label>
          <Input 
            id="name" 
            className="bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors" 
            placeholder="Your name" 
          />
              </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-base font-semibold text-white">Email</label>
          <Input 
            id="email" 
            className="bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors" 
            placeholder="Your email" 
          />
              </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-base font-semibold text-white">Message</label>
                <Textarea
                  id="message"
                  rows={5}
            className="bg-transparent border border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors resize-none"
                  placeholder="Your message"
                />
              </div>
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >
          Send Message <Send size={20} />
              </Button>
            </form>
    </CardContent>
  </Card>
);

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Let's connect</h2>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Professional Summary, Contact Methods, Coding Platforms */}
        <ProfessionalSummary />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
