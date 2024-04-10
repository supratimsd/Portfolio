import React, { useState } from 'react'
import Nav from '../components/Nav'
import NavMob from '@/components/NavMob';
import Hero from '@/components/Hero';
import About from '@/components/About';
 

function HomePage() {
  const [nav,setnav]=useState(false);
  const openNav=()=>setnav(true);
  const closeNav=()=>setnav(false);
  return (
    <div >
      <div className='overflow-hidden'>
        <div>
          <NavMob nav={nav} closeNav={closeNav}/>
          <Nav openNav={openNav}/> 
          <Hero/>
          <div className='relative z-[-30]'>
              <About/>
          </div> 
        </div>          
      </div>
    </div>
  )
}

export default HomePage
