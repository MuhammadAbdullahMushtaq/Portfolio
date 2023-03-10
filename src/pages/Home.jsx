import {React} from 'react';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

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