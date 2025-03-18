import { IMG_CDN_URL } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";

import { addMovieDetails, toggleMovieDetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (!movie.poster_path) return; //* early return
  return (
    <div>
      <img
        className="w-36  lg:h-48 h-36  m-4 rounded-xl"
        src={IMG_CDN_URL + movie.poster_path}
        alt="movieImg"
        onClick={() =>
          dispatch(addMovieDetails(movie)) &&
          dispatch(toggleMovieDetails(true)) &&
          dispatch(toggleGptSearch(false))
        }
      />
    </div>
  );
};

export default MovieCard;
