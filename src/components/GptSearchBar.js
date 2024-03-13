import React from 'react'
import Lang from './LanguageConstent'

const GptSearchBar = () => {
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
            <input type="text" className='p-4 m-4  bg-black  border-2 border-indigo-600 text-white rounded-lg col-span-9' placeholder={Lang.hindi.gptSearchPlaceholder}></input>
            <button className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg'>{Lang.hindi.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar


 