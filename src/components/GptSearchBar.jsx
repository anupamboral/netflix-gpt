import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
import { model } from "../utils/geminiApi";
import { useRef } from "react";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang); //* for language changing feature

  //////
  const searchText = useRef(null);
  const handleGptSearch = async () => {
    //* we have created gemini api helper file, where we kept the the first two lines so genAI and model, their so these two lines are basically initializing the gemini api. and from their we will imported the model as it is needed to make the call.

    const prompt =
      "act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Give me names of 20 movies comma separated .like this example given ahead :  Gadar ,Sholay,Koi Mil Gaya,Sanam Re,Aashiqui 2.No unnecessary spaces, and unnecessary text rather than the movie names.";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  };

  //////

  //* early return
  if (!langKey) return;

  return (
    <div className="w-full pt-20 lg:ml-82 ml-8">
      <select
        className="p-2 m-2 mb-2 lg:-ml-20 -ml-6 bg-gray-900  text-white"
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
        className="bg-black p-2 grid grid-cols-12 lg:w-1/2 w-11/12"
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-2 bg-white col-span-9 rounded-xl"
        />
        <button
          type="submit"
          className="col-span-3 bg-red-500 m-2 rounded-xl hover:bg-red-900 text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
