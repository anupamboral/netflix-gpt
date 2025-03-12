import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        className="w-36  lg:h-48 h-36 grow m-4"
        src={IMG_CDN_URL + movie.poster_path}
        alt="movieImg"
      />
    </div>
  );
};

export default MovieCard;
