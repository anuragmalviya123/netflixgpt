import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        TraireMovies: null,
        PopularMovie: null,
        TopRated: null,
        Upcomming: null
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
         state.nowPlayingMovies = action.payload;
        },
        addTraireMovies: (state,action) => {
            state.TraireMovies = action.payload;
           },
        addPopularMovie: (state,action) => {
            state.PopularMovie = action.payload;
           },
        addTopRated: (state,action) => {
            state.TopRated = action.payload;
           },
        addUpcomming: (state,action) => {
            state.Upcomming = action.payload;
           },
    },
});

export const {addNowPlayingMovies,addTraireMovies,addPopularMovie,addTopRated,addUpcomming} = moviesSlice.actions;
export default moviesSlice.reducer;