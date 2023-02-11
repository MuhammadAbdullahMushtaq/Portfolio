import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo_transparent.png';
import Resume from '../assets/MuhammadAbdullahMushtaq.pdf'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
   const [nav, setNav] = useState(false);
   
   const { hash } = useLocation();
   
   useEffect(() => {
        // if not a hash link, scroll to top
        if (hash == '') {
         window.scrollTo(0, 0);
      }
    // else scroll to id
      else {
         const id = hash.replace('#','');
         const element = document.getElementById(id);
         if (element) {
            element.scrollIntoView();
         }
      }
   });
   
   const handleNav = () => {
      setNav(!nav)
   }
   return (
      <div id='navbar' className='w-full h-20 shadow-xl px-2 z-[100]'>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link to="/#main">
            <img className='md:w-20 cursor-pointer' src={Logo} alt='LogoImage' style={{ height: '50px' }} />
            </Link>
            <div>
               <ul className='hidden md:flex'> 
                  <Link to="/#main">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                  </Link>
                  <Link to="/#about">
                     <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                  </Link>
                  <Link to='/#skills'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                  </Link>
                  <Link to='/#projects'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                  </Link>
                  <Link to='/#contact'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                  </Link>
                  <a href={Resume} without rel="noopener noreferrer" target="_blank">
                     <li className='ml-10 text-sm uppercase hover:border-b'>Resume</li>
                  </a>
               </ul>
               <div onClick={handleNav} className='md:hidden'>
                  <AiOutlineMenu size={25} />
               </div>
            </div>
         </div>
         <div className={nav ? 'md:hidden fixed overflow-auto left-0 top-0 w-full h-screen bg-black/70' : ''   }>
            <div className={nav ? 'fixed overflow-auto left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-out duration-500' 
                                 : 'fixed left-[-200%] top-0 ease-in duration-1000'}>
               <div>
                  <div className='w-full flex items-center justify-between' >
                     <Link className='duration-1000' onClick={handleNav} to="#main">
                     <img style={{width: '60px', height: '30px'}} src={Logo} alt='LogoImage' />
                     </Link>
                     <div onClick={handleNav} className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2.5 cursor-pointer'>
                        <AiOutlineClose/>
                     </div>
                  </div>
                  <div className='border-b border-gray-300 my-4'>
                     <p className='w-[85%] md:w-[90%] my-4'>
                        Let's Build Some Design Together.
                     </p>
                  </div>
               </div>
               <div className='py-4 flex flex-col'>
                  <ul>
                  <Link className='duration-1000' onClick={handleNav} to="#main">
                     <li className='py-4 text-sm uppercase'>Home</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="#about">
                     <li className='py-4 text-sm uppercase'>About</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="#skills">
                     <li className='py-4 text-sm uppercase'>Skills</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="#projects">
                     <li className='py-4 text-sm uppercase'>Projects</li>
                  </Link>
                  <Link className='duration-1000' onClick={handleNav} to="#contact">
                     <li className='py-4 text-sm uppercase'>Contact</li>
                  </Link>
                  <a href={Resume} without rel="noopener noreferrer" target="_blank">
                     <li className='py-4 text-sm uppercase'>Resume</li>
                  </a>
                  </ul>
                  <div className='pt-40'>
                     <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                     <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                        <div className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn />
                        </div>
                        <div className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub />
                        </div>
                        <div className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail />
                        </div>
                        <div className='sm:p-3 rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Navbar