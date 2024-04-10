import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react';

// const Props=()=>{
//   openNav=()=>void;
// }

interface Props{
  openNav:()=> void;
}

const Nav=({ openNav }: Props)=> {
  return (
    <div className='w-[100%] sticky z-[1] top-0 h-[12vh] bg-[#1B1A55] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
            WEB
            <span className='text-yellow-400'> DEV</span>
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>About</div>
        <div className='nav-link'>Services</div>
        <div className='nav-link'>Contact</div>
        <div className='nav-link'>Blog</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-200'/>
        </div>
      </div>
    </div>
  );
}

export default Nav
