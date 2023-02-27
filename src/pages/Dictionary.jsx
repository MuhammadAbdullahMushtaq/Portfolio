import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import DictionaryImg from '../assets/projects/Dictionary.png';
import { RiRadioButtonFill } from 'react-icons/ri';

const Dictionary = () => {

   const navigate = useNavigate();

   return (
   <>
      <Navbar />
      <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute h-full w-full object-fill' src={DictionaryImg} alt="DictionaryImg" />
         <div className='z-10 absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white pb-5 px-3'>
            <h2 className='py-2 text-2xl sm:text-[36px]'>Dictionary App</h2>
            <h3 className='text-[12px] sm:text-[16px]'>React JS / Material UI / Dictionary Api</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <h2>Overview</h2>
            <p className='my-3'>The Dictionary website built using React, Material UI, Dictionary Api and axios is a dynamic web application that provides users with the ability to search for the meanings and definitions of words. <br/> The website integrates with a Dictionary API using the axios library to fetch data from the API in real-time. This allows users to receive accurate and up-to-date definitions. The API also provides information such as adverb, adjective, pronunciation.The website is designed with a user-friendly interface that allows users to easily search for words and navigate through the different sections of the website. The search bar is prominently displayed on the homepage, making it easy for users to enter the word they are looking for. <br/> Once a user enters a word, the website sends a request to the API and displays the results on the page. The results are organized in a clear and concise manner, with the definition, part of speech, and example sentences displayed prominently. <br/> The Dictionary website also includes additional feature such as the ability to save words to a favorites list.</p>
            <h2 className='text-2xl'>Hosted Platform</h2>
            <p className='text-lg my-2'>Netlify</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'><a href="https://reactdict.netlify.app/" target="_blank" without rel="noopener noreferrer" >DEMO</a></button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'><a href="https://github.com/MuhammadAbdullahMushtaq/React_Dictionary" target="_blank" without rel="noopener noreferrer" >CODE</a></button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Material UI</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Dictionary API</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Axios</p>
               </div>
            </div>
         </div>
      <p onClick={() => navigate(-1)} className='cursor-pointer underline'>Back</p>
      </div>

      </div>
      </>
   )
}

export default Dictionary