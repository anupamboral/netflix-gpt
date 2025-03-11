import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailers: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addMovieTrailers } = movieSlice.actions;
export default movieSlice.reducer;
