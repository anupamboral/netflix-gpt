import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieDetails: {},
    showMovieDetails: false,
    showMovieTrailer: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailers: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    toggleMovieDetails: (state, action) => {
      state.showMovieDetails = action.payload;
    },
    toggleMovieTrailer: (state, action) => {
      state.showMovieTrailer = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  addMovieTrailers,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieDetails,
  toggleMovieDetails,
  toggleMovieTrailer,
} = movieSlice.actions;
export default movieSlice.reducer;
