import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
   const { pathname, hash } = useLocation();

   useEffect(() => {
    // if not a hash link, scroll to top
      if (hash === '') {
         window.scrollTo(0, 0);
      }
    // else scroll to id
      else {
         // setTimeout(() => {
         const id = hash.replace('#', '');
         const element = document.getElementById(id);
         if (element) {
            element.scrollIntoView();
         }
      // }, 0);
      }
   }, [pathname, hash]);

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