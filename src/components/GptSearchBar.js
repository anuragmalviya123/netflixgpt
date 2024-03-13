import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" className='p-4 m-4  bg-black  border-2 border-indigo-600 text-white rounded-lg col-span-9' placeholder='What would we like to watch today'></input>
            <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar


 