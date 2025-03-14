import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const langKey = useSelector((store) => store.config.lang); //* for language changing feature

  //////
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(apiKey);

  const getResponse = async () => {
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "best action movies in json format";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
  };
  getResponse();
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
      <form className="bg-black p-2 grid grid-cols-12 lg:w-1/2 w-11/12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-2 m-2 bg-white col-span-9 rounded-xl"
        />
        <button className="col-span-3 bg-red-500 m-2 rounded-xl hover:bg-red-900 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
