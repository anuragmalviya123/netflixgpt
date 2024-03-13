import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggetion from './GptSuggetion'
import { Back } from './Constent'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
          <img src={Back} alt="logo" />
      </div>
      <GptSearchBar/>
      <GptSuggetion/>
    </div>
  )
}

export default GptSearch