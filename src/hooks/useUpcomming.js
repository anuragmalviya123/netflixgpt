import { useDispatch } from "react-redux";
import { addUpcomming } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../components/Constent";

const useUpcomming = () => {
    const dispatch = useDispatch();
    const getApiCall = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomming(json.results));
        console.log(json.results);
    };

    useEffect(() => {
        getApiCall();
    },[])
}
export default useUpcomming;