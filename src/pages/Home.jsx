import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <StatisticsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
