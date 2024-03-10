import React, { useEffect } from 'react'
import { API_OPTIONS } from './Constent';

const VideoBackground = ({movie_id}) => {
  const getMovieVideo = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_OPTIONS);
     const json = await data.json();
     console.log(json);

     const Trailer = json.results.filter((video) => video.type === "Trailer");
     console.log(Trailer);
  }
   useEffect(() => {
    getMovieVideo();
   },[])
  return (
    <div>       
      <h1 className='py-6 text-lg w-1/3'>{movie_id}</h1>
    </div>
  )
}

export default VideoBackground

   // {
    //   "iso_639_1": "en",
    //   "iso_3166_1": "US",
    //   "name": "Official Trailer",
    //   "key": "e1k1PC0TtmE",
    //   "site": "YouTube",
    //   "size": 1080,
    //   "type": "Trailer",
    //   "official": true,
    //   "published_at": "2023-11-30T13:02:56.000Z",
    //   "id": "65880cfc5aba326759b95156"
    // }