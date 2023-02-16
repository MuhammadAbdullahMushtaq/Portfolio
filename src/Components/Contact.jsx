import React from 'react'
import ContactImg from '../assets/contact.jpg'
import Resume from '../assets/MuhammadAbdullahMushtaq.pdf'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Contact = () => {

   const clearInputs = () => {
         Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
         );
         Array.from(document.querySelectorAll("textarea")).forEach(
            input => (input.value = "")
         );
         // this.setState({
         //    itemvalues: [{}]
         // });
      }

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
                     <p className='py-4'>I am available for freelance or full-time position. Contact me and let's talk.</p>
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

            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
               <div className='p-4'>
                  <form action='https://getform.io/f/2a31df75-c496-41eb-b996-2288610d76f0' method='POST' >
                     <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                        <div className='flex flex-col'>
                           <label className='uppercase text-sm py-2'>Name<span className='text-red-700 text-base pl-1'>*</span></label>
                           <input required type="text" name='name' className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>
                        <div className='flex flex-col'>
                           <label className='uppercase text-sm py-2'>WhatsApp Contact<span className='text-red-700 text-base pl-1'>*</span></label>
                           <input required type="tel" pattern="[0-9]{4}-[0-9]{7}" placeholder='0000-0000000' name='phone' className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>
                     </div>
                     <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email<span className='text-red-700 text-base pl-1'>*</span></label>
                        <input required type="email" name='email' className='border-2 rounded-lg p-3 flex border-gray-300' />
                     </div>
                     <div className='flex flex-col py-2'>
                        <label title="fields marked with * are required" className='uppercase text-sm py-2 cursor-pointer'>Subject<span className='text-red-700 text-base pl-1'>*</span></label>
                        <input required type="text" name='subject' className='border-2 rounded-lg p-3 flex border-gray-300' />
                        <input type="hidden" name='_customFieldName' style={{display:'none !important'}} />
                     </div>
                     <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message<span className='text-red-700 text-base pl-1'>*</span></label>
                        <textarea required name='message' minLength='20' maxLength='500' className='border-2 rounded-lg p-3 border-gray-300' rows='8'></textarea>
                     </div>
                     <button type='submit' onClick={setTimeout(clearInputs, 1)} className='w-full p-4 mt-4 text-gray-100 bg-gradient-to-r from-[#5651e5] to-[#709dff]'>send message</button>
                  </form>
               </div>
            </div>

         </div>

      </div>

   </div>
   )
}

export default Contact