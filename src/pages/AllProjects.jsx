import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ProjectItems from '../Components/ProjectItems'
import WeatherAppImg from '../assets/projects/WeatherAp.jpg'
import ECommerceImg from '../assets/projects/ECommerce.jpg'
import DictionaryImg from '../assets/projects/netflix.jpg'
import NotesBookImg from '../assets/projects/twitch.jpg'


const AllProjects = () => {

  return (
   <div>
      <Navbar />
      <div id="projects" className='w-full px-1'>
         <div className='max-w-[1240px] mx-auto py-16 px-2'>
            <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectItems title='Weather App' tech="React Js" backgroundImg= {WeatherAppImg} projectUrl='/weather' />
               <ProjectItems title='ECommerce UI' tech="Html Css Js" backgroundImg= {ECommerceImg} projectUrl='/ecommerce' />
               <ProjectItems title='Dictionary App' tech="React Js" backgroundImg= {DictionaryImg} projectUrl='/dictionary' />
               <ProjectItems title='Quiz App' tech="Html Css Js" backgroundImg= {NotesBookImg} projectUrl='/quiz' />
               <ProjectItems title='Notes Book' tech="Html Css Js" backgroundImg= {NotesBookImg} projectUrl='/notebook' />

            </div>
            <Link to={'/#allprojects'} ><p className='py-1 my-6 cursor-pointer underline'>Back</p></Link>
         </div>
      </div>

   </div>
   )
}

export default AllProjects