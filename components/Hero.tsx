import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, ArrowRightCircleIcon } from '@heroicons/react/20/solid';

function Hero() {
  return (
    <div className="h-full bg-[#191919] bg-cover bg-center">
      <Particle/>
      <div className='w-[80%] grid-cols-1 mx-auto grid lg:gris-cols-2 gap-[3rem]  items-center'>
        <div>
        <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            Hi,myself <span className='text-pink-600 '>Supratim</span> Dey
        </h1>
        
        <TextEffect/>
        <div className='w-[20vmax]  relative  items-center rounded-full  '>
            <Image src="/images/Supratim_Dark.jpg" alt="user" width={400} height={400} layout="responsive" className="clip_path  "/>
            
        </div>
        <p className='mt-[2rem] mb-[6rem] text-[50px] text-white '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda similique quasi earum nostrum natus tenetur non voluptatibus ratione optio cupiditate.
        </p>
        
        
        </div>
        
        
        <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6'>
            <button className='px-[6rem] hover:bg-yellow-400 transition-all duration-300 font-bold uppercase bg-[#55e6a5] text-[15px] py-[1rem] text-black rounded-md flex items-center space-x-2'>
                <p>Learn about me!!!!</p>
              <ArrowRightCircleIcon className='w-[1.5rem] h-[1.7rem] text-black'/>                
            </button>
        </div>
        
      </div>
    </div>
  )
}

export default Hero;
// rounded-full