import React from 'react';
import About from './Components/About';
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
    </div>
  )
}

export default Home