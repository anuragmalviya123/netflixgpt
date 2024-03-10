import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-36 px-12'>
         <h1 className='text-6xl font-bold'>{title}</h1>
         <h1 className='py-6 text-lg w-1/3'>{overview}</h1>

         <div>
          <button className='bg-gray-500 text-black p-4 px-10 rounded-lg '>Play</button>
          <button className='mx-2 bg-pink-500 text-black p-4 px-10 rounded-lg'>More Info</button>
         </div>

    </div>
  )
}

export default VideoTitle



 