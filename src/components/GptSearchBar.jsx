import { API_OPTIONS, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
import { model } from "../utils/geminiApi";
import { useRef } from "react";
import { addMovieQuery, addMovieSuggestions } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang); //* for language changing feature
  const searchTmdbMovie = async (query) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        query +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  //////
  const searchText = useRef(null); //* to keep track what the user is typing in the input box.

  const handleGptSearch = async () => {
    //* we have created gemini api helper file, where we kept the the first two lines so genAI and model, their so these two lines are basically initializing the gemini api. and from their we will imported the model as it is needed to make the call.

    const prompt =
      "act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Give me names of 15 movies comma separated .like this example given ahead :  Gadar ,Sholay,Koi Mil Gaya,Sanam Re,Aashiqui 2.No unnecessary spaces, and unnecessary text rather than the movie names.";
    const result = await model.generateContent(prompt);
    const gtpResultArray = result.response.text().split(","); //* split method will convert the string into an array after split it from the commas.

    console.log(gtpResultArray);

    const promiseArray = gtpResultArray.map((movie) => searchTmdbMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addMovieQuery(searchText.current.value));
    dispatch(addMovieSuggestions(tmdbResults));
  };

  //////

  //* early return
  if (!langKey) return;

  return (
    <div className="w-[100dvw]   pt-20 lg:pl-82 pl-5">
      <select
        className="p-2 m-2 mb-2 lg:-ml-20 -ml-2 bg-gray-900  text-cyan-500"
        onChange={handleLanguageChange}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearch();
        }}
        className="bg-black p-2 grid grid-cols-12 lg:w-4/5 w-49/50"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-2 bg-white col-span-9 rounded-xl placeholder-purple-700"
        />
        <button
          type="submit"
          className="col-span-3 border-2 mr-0 bg-red-500 m-2 rounded-xl hover:bg-red-900  border-cyan-600 hover:border-fuchsia-600 hover:shadow-2xl shadow-fuchsia-600 bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold lg:text-2xl text-lg/4  hover:bg-gradient-to-r hover:from-pink-500 hover:via-cyan-500 hover:to-amber-300 "
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
