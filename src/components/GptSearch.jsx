import { LOG_IN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="relative w-[100dvw]  h-full">
      <div>
        <img
          src={LOG_IN_PAGE_BACKGROUND_IMAGE}
          alt="background-image"
          className=" h-[100dvh] w-[100dvw] absolute -z-10"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
