import { LogOut } from 'lucide-react'
import React, { useState } from 'react'
import { Twitter,SunMedium,CircleHelp } from 'lucide-react'
import Logo from './Logo.svg';

const Nav = ({Dark,setDark}) => {


  return (
    <div className='h-24 flex justify-between w-9/12 m-auto'>
     <div className='mt-8'><img src={Logo} alt="" /> </div>
    <span className='w-1/4 h-2 p-4'><img src="somthi" alt="" /></span>
    <ul className='flex gap-4'>
      <button onClick={()=>{
        setDark(!Dark)
      }} className=' text-sky-600'><SunMedium /></button>
      <button className='text-gray-400'><Twitter /></button>
      <button className='text-gray-400'><CircleHelp /></button>
    </ul>
    </div>
  )
}

export default Nav
