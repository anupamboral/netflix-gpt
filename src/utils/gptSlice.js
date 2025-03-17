import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt Search",
  initialState: {
    showGptSearch: false,
    movieSuggestions: [],
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = action.payload
    },
    addMovieSuggestions: (state, action) => {
      state.movieSuggestions = action.payload;
    },
  },
});
export const { toggleGptSearch, addMovieSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
