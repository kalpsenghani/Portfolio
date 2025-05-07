
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/80 backdrop-blur-md py-2 shadow-lg shadow-black/10' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with glowing effect on the left */}
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-80 blur-lg transition-all duration-500"></div>
            <div className="relative p-1 bg-gray-900 rounded-full">
              <img 
                src="/lovable-uploads/e9810342-de6a-4f13-9171-0077afe8c75a.png" 
                alt="Kalp Logo" 
                className="h-14 w-14" 
              />
            </div>
          </div>
          
          {/* Island style navigation */}
          <div className="hidden md:flex px-8 py-2 bg-gray-800/80 backdrop-blur-lg rounded-full border border-gray-700/50 shadow-xl">
            <div className="flex space-x-8 items-center justify-center">
              <IslandNavLink href="#about">About</IslandNavLink>
              <IslandNavLink href="#projects">Projects</IslandNavLink>
              <IslandNavLink href="#blog">Blog</IslandNavLink>
              <IslandNavLink href="#ai-lab">AI Lab</IslandNavLink>
            </div>
          </div>
          
          {/* Contact Button on right */}
          <div className="hidden md:block">
            <Button
              className="px-5 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full transition-all duration-300"
            >
              <a href="#contact">Contact</a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-gray-800"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden p-4 bg-gray-900/95 border-t border-gray-800 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="flex flex-col space-y-3">
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink href="#ai-lab" onClick={() => setMobileMenuOpen(false)}>AI Lab</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const IslandNavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode;
}) => {
  return (
    <a 
      href={href} 
      className="relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-blue-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-all duration-300"></span>
      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
    </a>
  );
};

const MobileNavLink = ({ 
  href, 
  children,
  onClick
}: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-300 hover:text-white py-2 px-4 block hover:bg-gray-800 rounded-md transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
