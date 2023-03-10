import React from 'react'
import { Link } from 'react-router-dom'
import ProjectItems from './ProjectItems'

import PortfolioImg from '../assets/projects/Portfolio.png'
import WeatherAppImg from '../assets/projects/WeatherApp.png'
import ECommerceImg from '../assets/projects/ECommerce.jpg'
import DictionaryImg from '../assets/projects/Dictionary.png'
import QuizImg from '../assets/projects/QuizApp.png'
import NotebookImg from '../assets/projects/Notebook.png'

const Projects = () => {
  return (
   <div id="projects" className='w-full px-1'>
      <div className='max-w-[1240px] mx-auto py-16 px-2'>
         <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Projects</p>
         <h2 className='py-4'>What I've Built</h2>
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

            <ProjectItems id="portfolio" title='Personal Portfolio' tech="React" backgroundImg={PortfolioImg} projectUrl='/portfolio' />
            <ProjectItems id="weather" title='Weather App' tech="React Js" backgroundImg={WeatherAppImg} projectUrl='/weather' />
            <ProjectItems id="dictionary" title='Dictionary App' tech="React Js" backgroundImg={DictionaryImg} projectUrl='/dictionary' />
            <ProjectItems id="quiz" title='Quiz App' tech="Html Css Js" backgroundImg={QuizImg} projectUrl='/quiz' />
            <ProjectItems id="notebook" title='Notes Book' tech="Html Css Js" backgroundImg={NotebookImg} projectUrl='/notebook' />
            <ProjectItems id="ecommerce" title='ECommerce UI' tech="Html Css Js" backgroundImg={ECommerceImg} projectUrl='/ecommerce' />

         </div>
         <Link to={'/allProjects'} >
            <button id='allprojects' className='w-[150px] py-1 my-6 text-center rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer sm:w-[150px] md:w-[200px]' >All Projects</button>
         </Link>
      </div>
   </div>
  )
}

export default Projects