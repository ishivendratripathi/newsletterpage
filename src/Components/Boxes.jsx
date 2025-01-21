import React from 'react'


const Boxes = ({title,content,svg,Dark,setDark}) => {
  return (
    <>
    <div className={` block border min-h-0 max-w-sm rounded-2xl shadow-md m-6 p-4 tracking-wide pointer-events-none bg-white ${Dark ? " text-gray-600" : "bg-white text-black"}`} >
<div className='flex gap-2'><span className='text-blue-400' >{svg}</span>
    <span className='font-semibold'>{title}</span></div>
    <div className='pl-1 mt-4 text-gray-500'>{content}</div>
    </div>
     </>
  )
}

export default Boxes
