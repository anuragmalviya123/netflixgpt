import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black'>
         <h1 className='text-6xl font-bold text-white'>{title}</h1>
         <h1 className='py-6 text-lg w-1/3 text-white'>{overview}</h1>

         <div>
          <button className='bg-gray-500 text-black p-4 px-10 rounded-lg hover:bg-opacity-50 text-white'>Play</button>
          <button className='mx-2 bg-pink-500 text-black p-4 px-10 rounded-lg hover:bg-opacity-50 text-white'>More Info</button>
         </div>

    </div>
  )
}

export default VideoTitle



 