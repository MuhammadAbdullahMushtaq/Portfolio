import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Image from '../assets/logo.png';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
   const [nav, setNav] = useState(false);
   
   const handleNav = () => {
      setNav(!nav)
   }
   return (
      <div id='navbar' className='w-full h-20 shadow-xl px-2 z-[100]'>
         <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <a href="#main">
            <img className='md:w-20 cursor-pointer' src={Image} alt='LogoImage' style={{ height: '50px' }} />
            </a>
            <div>
               <ul className='hidden md:flex'> 
                  <a href='#main'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                  </a>
                  <a href="#about">
                     <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                  </a>
                  <a href='#skills'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                  </a>
                  <a href='#projects'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                  </a>
                  <a href='#contact'>
                     <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
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
                     <img style={{width: '60px', height: '30px'}} src={Image} alt='LogoImage' />
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
                  <a className='duration-700' onClick={handleNav} href='#main'>
                     <li className='py-4 text-sm uppercase'>Home</li>
                  </a>
                  <a className='duration-700' onClick={handleNav} href='#about'>
                     <li className='py-4 text-sm uppercase'>About</li>
                  </a>
                  <a className='duration-700' onClick={handleNav} href='#skills'>
                     <li className='py-4 text-sm uppercase'>Skills</li>
                  </a>
                  <a className='duration-700' onClick={handleNav} href='#projects'>
                     <li className='py-4 text-sm uppercase'>Projects</li>
                  </a>
                  <a className='duration-700' onClick={handleNav} href='#contact'>
                     <li className='py-4 text-sm uppercase'>Contact</li>
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