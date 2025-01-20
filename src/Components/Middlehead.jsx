import React from 'react'

const Middlehead = ({textnormal,textnorma2,textspecial}) => {
  return (
    <div className='max-w-fit mr-auto ml-auto mx-auto'>
      <span className='text-7xl font-medium flex justify-center items-center sm:flex sm:justify-center sm:items-center ml-10'>{textnormal}</span>
      <br />
      <div className='ml-10'>
      <span className='text-7xl font-medium'>{textnorma2}</span>
    <span className='text-7xl font-extrabold bg-gradient-to-r from-[#1D93F2] via-[#1BA4E3] via-25% to-[#4A85EF] bg-clip-text text-transparent dark:text-glow dark:from-[#34B5F2] dark:via-[#B4E5FC] dark:to-[#3796E7]'>{textspecial}</span>
    </div>
    </div>
  )
}

export default Middlehead
