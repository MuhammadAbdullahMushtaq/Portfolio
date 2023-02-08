import React from 'react'
import HtmlImage from '../assets/skills/html.png'
import CSSImage from '../assets/skills/css.png'
import JSImage from '../assets/skills/javascript.png'
import ReactImage from '../assets/skills/react.png'
import ReduxImage from '../assets/skills/redux.png'
import ReactNativeImage from '../assets/skills/reactNative.png'
import TailwindImage from '../assets/skills/tailwind.png'
import BootStrapImage from '../assets/skills/bootstrap.png'
import MaterialUIImage from '../assets/skills/materialUi.png'
import StyledComponentsImage from '../assets/skills/styled-components.png'
import GithubImage from '../assets/skills/github1.png'
import FireBaseImage from '../assets/skills/firebase.png'

const Skills = () => {
  return (
    <div id='skills' className='w-[98%] sm:w-[99%] lg:h-screen p-2'>
      <div className='px-1 max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase tracking-widest text-xl text-[#5651e5]'>
          skills
        </p>
        <h2 className='py-4'>
          What I Can Do
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={CSSImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>CSS</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={JSImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>JavaScript</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={ReactImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>React</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={ReduxImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Redux</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={ReactNativeImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>React Native</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={TailwindImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Tailwind</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={BootStrapImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>BootStrap</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={MaterialUIImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Material UI</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={StyledComponentsImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Styled Components</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={GithubImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>Github</h3>
            </div>
          </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={FireBaseImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>FireBase</h3>
            </div>
          </div>
          </div>

        </div>        
      </div>
    </div>
  )
}

export default Skills