import { LOG_IN_PAGE_BACKGROUND_IMAGE } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="relative">
      <div>
        <img
          src={LOG_IN_PAGE_BACKGROUND_IMAGE}
          alt="background-image"
          className=" h-[150dvh] w-screen absolute -z-10"
        />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
