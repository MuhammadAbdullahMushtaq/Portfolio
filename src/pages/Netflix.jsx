import { React } from 'react'
import NetflixImg from '../assets/projects/netflix.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Netflix = () => {
  return (
     <div className='w-full '>
      <div className='w-full h-[30vh] lg:h-[40vh] relative'>
         <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
         <img  className='absolute z-1 h-full w-full object-cover' src={NetflixImg} alt="cryptoImg" />
         <div className='absolute top-[70%] left-[50%] right-[50%] w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] text-white z-10 pb-5 px-3'>
            <h2 className='py-2'>Netflix Clone</h2>
            <h3 className='text-[12px] sm:text-[16px]'>React JS / Tailwind / Firebase</h3>
         </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-6 pt-8'>
         <div className='col-span-5 md:col-span-4'>
            <p className=''>Project</p>
            <h2>Overview</h2>
            <p>This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view information as well as the location of the integrated with the Google Maps API. User authentication is available so you can Sign-up & Sign-in to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.</p>
            <button className='px-6 py-1 mt-4 mr-8 sm:px-8 sm:py-2'>Demo</button>
            <button className='px-6 py-1 mt-4 sm:px-8 sm:py-2'>Code</button>
         </div>

         <div className='col-span-5 lg md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-2'>
            <div className='p-1'>
               <p className='text-center font-bold pb-2'>Technologies</p>
               <div className='grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-1 text-[16px] sm:text-[16px]'>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />React</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Redux</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Google API</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Tailwind</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Firebase</p>
                  <p className='flex items-center text-gray-600 py-2'><RiRadioButtonFill className='pr-1' />Firebase</p>
               </div>
            </div>
         </div>
      <Link to={'/#netflix'} ><p className='cursor-pointer underline'>Back</p></Link>
      </div>

   </div>
  )
}

export default Netflix

// //how to change the value of a state variable when width will be 768px?
// import React, { useLayoutEffect, useState } from 'react';

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }


// import React from 'react';

// class ShowWindowDimensions extends React.Component {
//   state = { width: 0, height: 0 };
//   render() {
//     return <span>Window size: {this.state.width} x {this.state.height}</span>;
//   }
//   updateDimensions = () => {
//     this.setState({ width: window.innerWidth, height: window.innerHeight });
//   };
//   componentDidMount() {
//     window.addEventListener('resize', this.updateDimensions);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateDimensions);
//   }
// }




//Source: https://stackoverflow.com/questions/19014250

