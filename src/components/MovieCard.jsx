import { IMG_CDN_URL } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

import { addMovieDetails, toggleMovieDetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img
        className="w-36  lg:h-48 h-36 grow m-4"
        src={IMG_CDN_URL + movie.poster_path}
        alt="movieImg"
        onClick={() =>
          dispatch(addMovieDetails(movie)) &&
          dispatch(toggleMovieDetails()) &&
          dispatch(toggleGptSearch())
        }
      />
    </div>
  );
};

export default MovieCard;
