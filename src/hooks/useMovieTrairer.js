import React, { useEffect } from 'react'
import { addTraireMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../components/Constent';
const useMovieTrairer = (movie_id) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
   
        const Trailer = json.results.filter((video) => video.type === "Trailer");
        dispatch(addTraireMovies(Trailer[0].key));
     }
      useEffect(() => {
       getMovieVideo();
      },[])
}

export default useMovieTrairer;