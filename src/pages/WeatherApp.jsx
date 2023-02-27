import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import WeatherAppImg from '../assets/projects/WeatherApp.png';
import { RiRadioButtonFill } from 'react-icons/ri';

const WeatherApp = () => {

   const navigate = useNavigate();

   return (
   <>
      <Navbar />
      <div className='w-full'>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute h-full w-full object-fill' src={WeatherAppImg} alt="WeatherAppImg" />
         <div className='z-10 absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white pb-5 px-3'>
            <h2 className='py-2 text-2xl sm:text-[36px]'>Weather App</h2>
            <h3 className='text-[12px] sm:text-[16px]'>React JS / BootStrap / OpenWeather Api</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <h2>Overview</h2>
            <p className='my-3'>Welcome to weather website, where you can find accurate and up-to-date information on the weather conditions in your area and around the world. Built with React JS, Bootstrap and Open Weather API. <br/> To ensure that data is reliable and comprehensive, I have integrated the Open Weather API, which provides real-time weather updates from a vast network of weather stations worldwide. <br/> The API returns data in JSON format, which can be easily consumed by the website built using React. The website will use the API to fetch current weather conditions. With this powerful tool, you can see accurate and current information on temperature, Condition.</p>
            <h2 className='text-2xl'>Hosted Platform</h2>
            <p className='text-lg my-2' >Firebase</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'><a href="https://weatherapp-react-ae5b5.web.app/ " target="_blank" without rel="noopener noreferrer" >DEMO</a></button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'><a href="https://github.com/MuhammadAbdullahMushtaq/WeatherApp-React" target="_blank" without rel="noopener noreferrer" >CODE</a></button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Bootstrap</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Open Weather API</p>
               </div>
            </div>
         </div>
      <p onClick={() => navigate(-1)} className='cursor-pointer underline'>Back</p>
      </div>

      </div>
      </>
   )
}

export default WeatherApp