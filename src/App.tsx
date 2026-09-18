import React from 'react';
import NavBar from './components/NavBar';
import HomeContent from './components/HomeContent';
import AboutContent from './components/AboutContent';
import SkillsContent from './components/SkillsContent';
import ProjectsContent from './components/ProjectsContent';
import ContactContent from './components/ContactContent';
import Footer from './components/Footer';

const App = () => (
  <>
    <NavBar />
    <HomeContent />
    <AboutContent />
    <SkillsContent />
    <ProjectsContent />
    <ContactContent />
    <Footer />
  </>
);

export default App;
