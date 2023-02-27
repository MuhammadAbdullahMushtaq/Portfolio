import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ECommerceImg from '../assets/projects/ECommerce.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';

const ECommerce = () => {

   const navigate = useNavigate();

   return (
      <>
      <Navbar />
      <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute h-full w-full object-fill' src={ECommerceImg} alt="ECommerceImg" />
         <div className='z-10 absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white pb-5 px-3'>
            <h2 className='py-2 text-2xl sm:text-[36px]'>ECommerce UI</h2>
            <h3 className='text-[12px] sm:text-[16px]'>Html / CSS / JS</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <h2>Overview</h2>
            <p className='my-3'>The E-commerce UI website is built using HTML, CSS, JavaScript, and Font Awesome. HTML is used to create the structure and content of the website, while CSS is used to style and layout the webpage. JavaScript is used to add interactivity and dynamic behavior to the website, such as showing and hiding elements based on user actions or updating the content without refreshing the page.<br/> In summary, the E-commerce UI website is a responsive and visually appealing website built using HTML, CSS, JavaScript, and Font Awesome. It provides a user-friendly interface for customers to browse and purchase products, with various features like search bars, shopping carts, and social media integration.</p>
            <h2 className='text-2xl my-2'>Hosted Platform</h2>
            <p className='text-lg'>Firebase</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'><a href="https://webcv-b5851.web.app/ " target="_blank" without rel="noopener noreferrer" >DEMO</a></button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'><a href="https://github.com/MuhammadAbdullahMushtaq/RedStore_ECom" target="_blank" without rel="noopener noreferrer" >CODE</a></button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Html</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Css</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Google Fonts</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Font Awesome</p>
               </div>
            </div>
         </div>
         <p onClick={() => navigate(-1)} className='cursor-pointer underline'>Back</p>
      </div>

      </div>
      </>
   )
}

export default ECommerce