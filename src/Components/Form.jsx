import React from 'react'

const Form = ({button}) => {

  return (
    <> 
      <div className='w-7/12 ml-auto mr-auto m-4'>
       <input type="text" placeholder='Your first name' className='border w-full h-12 rounded-md pl-4 m-2'/>
    <input type="text" placeholder='Your Email' className='border  w-full h-12 rounded-md pl-4 m-2'/>
    </div>
    <div className='flex justify-center items-center'>
    <button className='h-14 rounded-full border-2 w-7/12 bg-sky-500 bg-gradient-to-t   bg:from-[sky-500] bg:to-[sky-800] text-white font-medium ring-transparent'>{button}</button>
    </div>
       </>

)
}

export default Form
