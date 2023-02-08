import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home