import React from 'react'

const Boxes = ({title,content}) => {
  return (
    <div className='w-2/4 border h-48 border-black rounded-2xl p-4 ml-2 bg-gradient-to-b from-[rgba(113,158,220,20%)] dark:to-[rgba(113,158,220,10%)] backdrop-blur-lg shadow-lg ring-1 ring-white/5 ' >
      <div className='font-bold text-gray-800'>{title}</div>
      <div className='h-36 relative top-4 '>
        <div className='text-gray-800 font-semibold'>{content}</div>
      </div>
    </div>
  )
}

export default Boxes
