import { ArrowDownTrayIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

function About() {
  return (
    <div className='bg-[#030637] pb-[5rem] pt-[5rem] sticky md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
        <div>
            <h1 className='text-[20px] font-bold uppercase text-[#9A0680] mb-[4rem]'>About Me</h1>
            <h2 className='text-[35px] md:text-[35px] lg:text-[50px] font-bold text-white leading-[2rem] capitalize mb-[3rem]'>THE GAME<span className='text-[#F8DE22]'>CHANGER</span></h2>
            <div className='mb-[3rem] flex items-center md:space-x-10'>
                <span className='w-[50px] hidden md:block h-[3px] bg-[#9A0680] rounded-sm'></span>
                <p className='text-[20px] w-[80%] text-[#9290C3]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae et tempore possimus dicta repellat dolore error ab, nostrum, blanditiis quam facere omnis cumque, eligendi nemo expedita placeat reiciendis nulla itaque.</p>
            </div>
            <button className='px-[6rem] hover:bg-yellow-400 transition-all duration-300 font-bold bg-[#55e6a5] text-[20px] py-[1rem] text-black items-center rounded-md flex space-x-2'>
            
                <p>Github</p>
              <ArrowRightCircleIcon className='w-[1.5rem] h-[1.7rem] text-black'/>                
            </button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default About
