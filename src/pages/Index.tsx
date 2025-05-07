import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import AiLab from '@/components/AiLab';
import Blog from '@/components/Blog';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import CustomScrollbar from '@/components/CustomScrollbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <CustomScrollbar />
      <BackgroundAnimation />
      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <Technologies />
        <About />
        <Projects />
        <Blog />
        <AiLab />
        {/* Renamed from Contact to Resume in the UI (component remains the same) */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
