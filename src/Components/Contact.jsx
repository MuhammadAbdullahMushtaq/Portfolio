import React  from 'react'
import ContactImg from '../assets/contact.jpg'
import Resume from '../assets/MuhammadAbdullahMushtaq.pdf'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Form from './Form'

const Contact = () => {

   return (
      <div id='contact' className='w-full'>

      <div className='max-w-[1240px] m-auto px-3 py-16 w-full'>
         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
         <h2 className='py-4'>Get In Touch</h2>

         <div className='grid lg:grid-cols-5 gap-8'>
{/* {leftSide Info} */}

            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
               <div className='lg:p-4 h-full'>
                  <div>
                     <img className='w-full rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="contact" />
                  </div>
                  <div>
                     <h2 className='py-3'>Muhammad Abdullah Mushtaq</h2>
                     <p>Frontend Developer</p>
                     <p className='py-4'>I am Available for Freelance or Full-time Position. Contact me and let's talk.</p>
                  </div>
                  <div>
                     <p className='uppercase pt-8'>Connect With Me</p>
                     <div className='flex justify-between items-center py-4'>
                        <a href='https://linkedin.com/in/muhammad-abdullah-mushtaq' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <FaLinkedinIn />
                        </a>
                        <a href='https://github.com/MuhammadAbdullahMushtaq/' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <FaGithub />
                        </a>
                        <a href='mailto:abdullahmushtaq08@gmail.com' target="_blank" without rel="noopener noreferrer" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <AiOutlineMail />
                        </a>
                        <a href={Resume} without rel="noopener noreferrer" target="_blank" className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <BsFillPersonLinesFill />
                        </a>
                     </div>
                  </div>
               </div>
            </div>

{/* {rightSide form} */}
            <Form />

         </div>

      </div>

   </div>
   )
}

export default Contact