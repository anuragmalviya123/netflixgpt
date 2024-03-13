import { useSelector } from "react-redux";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRated from "../hooks/useTopRated";
import useUpcomming from "../hooks/useUpcomming";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundlyContainer from "./SecoundlyContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

   useNowPlayingMovie();
   usePopularMovie();
   useTopRated();
   useUpcomming();
    return (
        <div>
                <Header/>
                {showGptSearch ?  (<GptSearch/> ): (<>  <MainContainer/> <SecoundlyContainer/></>)}
       
        </div>
)}

export default Browse;