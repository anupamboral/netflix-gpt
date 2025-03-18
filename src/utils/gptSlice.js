import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt Search",
  initialState: {
    showGptSearch: false,
    movieSuggestions: [],
    movieQuery: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
    addMovieSuggestions: (state, action) => {
      state.movieSuggestions = action.payload;
    },
    addMovieQuery: (state, action) => {
      state.movieQuery = action.payload;
    },
  },
});
export const { toggleGptSearch, addMovieSuggestions, addMovieQuery } =
  gptSlice.actions;
export default gptSlice.reducer;
