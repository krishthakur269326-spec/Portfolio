import React from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectSection from './components/ProjectSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // animate only once
      offset: 100,    // trigger distance from viewport
    });
  }, []);

  return (
    <div className='bg-[#0a0a0a] overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App