
import {  useSelector } from 'react-redux';
import useMovieTrairer from '../hooks/useMovieTrairer';

const VideoBackground = ({movie_id}) => {
     const trairerVideo = useSelector((store) => store.movies.TraireMovies);
     useMovieTrairer(movie_id);
  return (
    <div className='w-screen'>       
      <iframe className = "w-screen aspect-video" src={"https://www.youtube.com/embed/"+trairerVideo+"?si=pOuQnVv8evzMmDOA"+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
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