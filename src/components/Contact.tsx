import React, { useState } from 'react';
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReasonSelect = (reason: string) => {
    setFormData(prev => ({ ...prev, reason }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '82927390-3cc2-4ef8-8ce2-2249f91f37cc',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          reason: formData.reason,
          message: formData.message,
          subject: 'New Contact Form Submission'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-900/70 border-gray-800 rounded-xl overflow-hidden h-full flex flex-col justify-center">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Let's Talk</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="firstName" className="block text-base font-semibold text-white">First Name</label>
              <Input 
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
                placeholder="First name"
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="lastName" className="block text-base font-semibold text-white">Last Name</label>
              <Input 
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-base font-semibold text-white">Email</label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors input-shadow-effect rounded-2xl"
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-base font-semibold text-white mb-1">Reason for Contact</label>
            <div className="flex gap-3">
              {['Freelance', 'Collaboration', 'General Inquiry'].map(option => (
                <button
                  type="button"
                  key={option}
                  onClick={() => handleReasonSelect(option)}
                  className={`px-4 py-2 input-shadow-effect border-2 border-blue-700 text-white font-semibold focus:outline-none transition-colors duration-200 rounded-2xl ${formData.reason === option ? 'bg-blue-600' : 'bg-gray-800'} ${formData.reason === option ? 'ring-2 ring-blue-400' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-base font-semibold text-white">Message</label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-transparent border-2 border-blue-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 transition-colors resize-none input-shadow-effect rounded-2xl"
              placeholder="Your message"
              required
            />
          </div>
          {submitStatus.type && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

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
