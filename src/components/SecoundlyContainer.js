import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecoundlyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.PopularMovie}/>
        <MovieList title={"Top Rated"} movies={movies.TopRated}/>
        <MovieList title={"Upcomming"} movies={movies.Upcomming}/>

    </div>
  )
}

export default SecoundlyContainer