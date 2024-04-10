import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
interface Props{
    nav:boolean;
    closeNav:()=>void;
}
const NavMob=({nav,closeNav}:Props)=> {

  const navAmination=nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className={`fixed ${navAmination} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className='nav-link-mob'>Home</div>
        <div className='nav-link-mob'>Services</div>
        <div className='nav-link-mob'>About</div>
        <div className='nav-link-mob'>Project</div>
        <div className='nav-link-mob'>Blog</div>
      </div>
      <div onClick={closeNav}
      className='absolute cursor-pointer top-[2rem] w-[2rem] right-[2rem] h-[2rem] text-yellow-400'
      
        >
          
        <XMarkIcon />
      </div>
    </div>
  )
}

export default NavMob



