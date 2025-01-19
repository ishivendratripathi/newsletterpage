import React from 'react'

const Middletext = ({text1,text2}) => {
  return (
    <div className='w-10/12 max-w-fit ml-auto mr-auto'>
      <div className='text-gray-800 mt-4'>{text1}</div>
    <div className='text-gray-800'>{text2}</div>
    </div>
  )
}

export default Middletext
