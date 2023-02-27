import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import ProjectItems from '../Components/ProjectItems'

import PortfolioImg from '../assets/projects/Portfolio.png'
import WeatherAppImg from '../assets/projects/WeatherApp.png'
import DictionaryImg from '../assets/projects/Dictionary.png'
import QuizImg from '../assets/projects/QuizApp.png'
import NotebookImg from '../assets/projects/Notebook.png'
import ECommerceImg from '../assets/projects/ECommerce.jpg'


const AllProjects = () => {

  return (
   <div>
      <Navbar />
      <div className='w-full px-1'>
         <div className='max-w-[1240px] mx-auto py-16 px-2'>
            <p className='uppercase tracking-widest text-xl text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

               <ProjectItems title='Personal Portfolio' tech="React Js" backgroundImg={PortfolioImg} projectUrl='/portfolio' />
               <ProjectItems title='Weather App' tech="React Js" backgroundImg= {WeatherAppImg} projectUrl='/weather' />
               <ProjectItems title='Dictionary App' tech="React Js" backgroundImg= {DictionaryImg} projectUrl='/dictionary' />
               <ProjectItems title='Quiz App' tech="Html Css Js" backgroundImg= {QuizImg} projectUrl='/quiz' />
               <ProjectItems title='Notes Book' tech="Html Css Js" backgroundImg= {NotebookImg} projectUrl='/notebook' />
               <ProjectItems title='ECommerce UI' tech="Html Css Js" backgroundImg= {ECommerceImg} projectUrl='/ecommerce' />

            </div>
            <Link to={'/#allprojects'} ><p className='py-1 my-6 cursor-pointer underline'>Back</p></Link>
         </div>
      </div>

   </div>
   )
}

export default AllProjects