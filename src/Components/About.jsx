import React from 'react'
import Image from '../assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-fit p-2 flex items-center py-4'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
         <div className='col-span-2 px-1'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            </p>
            <p className='py-2 text-gray-600'>
            Welcome to my Portfolio! I am an Entry-level Frontend Developer with a passion for creating beautiful and functional websites. I will be graduating in Computer Science, I have honed my skills in ,React Js, HTML, CSS, and JavaScript, and I am excited to showcase my abilities through the projects that I have completed.
            Whether it's designing responsive layouts, creating engaging user interfaces, or implementing dynamic functionality, I am committed to delivering high-quality work that exceeds expectations. I am eager to continue learning and growing as a developer, and I believe that my passion for this field, combined with my technical expertise, make me a valuable addition to any team.
            </p>
            <p className='py-2 text-gray-600'>
            Thank you for visiting my portfolio website, and I invite you to explore my projects to see the range of my abilities as a frontend developer.
            </p>
         </div>
         <div className='w-[95%] m-auto p-4 flex justify-center items-center rounded-xl shadow-xl shadow-gray-400 hover:scale-105 ease-in duration-300 sm:w-[90%] md:w-ful'>
            <img className='rounded-xl' src={Image} alt="about" />
         </div>
      </div>
    </div>
  )
}

export default About