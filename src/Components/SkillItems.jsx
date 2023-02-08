import React from 'react'

const SkillItems = () => {
  return (
    <div>
      <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center '>
            <div className='m-auto'>
              <img className='w-[64px] h-[64px ]' src={HtmlImage} alt="html" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <h3>HTML</h3>
            </div>
          </div>
          </div>
    </div>
  )
}

export default SkillItems