import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import PortfolioImg from '../assets/projects/Portfolio.png'
import { RiRadioButtonFill } from 'react-icons/ri';

const Portfolio = () => {

   const navigate = useNavigate();

   return (
      <>
      <Navbar />
      <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute h-full w-full object-fill' src={PortfolioImg} alt="PortfolioImg" />
         <div className='z-10 absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white pb-5 px-3'>
            <h2 className='py-2 text-2xl sm:text-[36px]'>Personal Portfolio</h2>
            <h3 className='text-[12px] sm:text-[16px]'>React JS / Tailwind Css / GetForm</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <h2>Overview</h2>
            <p className='my-3'>Welcome to my portfolio website, which I developed using React, Tailwind CSS, Getform.io, and React Toastify. Let me provide you with an explanation of these terms and how they contributed to the development of my website. <br/><br/> Getform.io is a form backend service that allows developers to add forms to their websites without having to write any backend code. With Getform, developers can create custom forms, collect data, and receive form submissions via email. This service simplifies the process of handling form submissions, making it easy to integrate forms into any website. <br/><br/> Overall, the combination of React, Tailwind CSS, Getform.io, and React Toastify has allowed me to create a dynamic, responsive portfolio website that is easy to use and visually appealing. The use of these technologies has simplified the development process and provided a range of useful tools for creating a high-quality website.</p>
            <h2 className='text-2xl'>Hosted Platform</h2>
            <p className='text-lg my-2'>.....</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'><a href="#" target="_blank" without rel="noopener noreferrer" >DEMO</a></button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'><a href="https://github.com/MuhammadAbdullahMushtaq/Portfolio" target="_blank" without rel="noopener noreferrer" >CODE</a></button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Tailwind Css</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Get Form</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React Toastify</p>
               </div>
            </div>
         </div>
         <p onClick={() => navigate(-1)} className='cursor-pointer underline'>Back</p>
      </div>

      </div>
      </>

  )
}

export default Portfolio