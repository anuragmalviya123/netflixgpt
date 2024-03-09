import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundlyContainer from "./SecoundlyContainer";

const Browse = () => {
   useNowPlayingMovie()
    return (
        <div>
        <Header/>
        <MainContainer/>
        <SecoundlyContainer/>
        </div>
)}

export default Browse;