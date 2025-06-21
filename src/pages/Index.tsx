import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Blog from '@/components/Blog';
import CustomScrollbar from '@/components/CustomScrollbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomScrollbar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Technologies />
        <About />
        <Projects />
        <Blog />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
