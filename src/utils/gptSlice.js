import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "Gpt Search",
  initialState: {
    showGptSearch: false,
    movieSuggestions: [],
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch; //*toggle onClick of gptSearch button present in the heeder to display the <GptSearch/> component in the browse page.
    },
    addMovieSuggestions: (state, action) => {
      state.movieSuggestions = action.payload;
    },
  },
});
export const { toggleGptSearch, addMovieSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
