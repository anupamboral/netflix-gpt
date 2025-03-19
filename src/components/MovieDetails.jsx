import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { IMG_CDN_URL } from "../utils/constants";
import { toggleMovieDetails, toggleMovieTrailer } from "../utils/movieSlice";
import MovieDetailsPageVideo from "./MovieDetailsPageVideo";

const MovieDetails = () => {
  const showMovieTrailer = useSelector((store) => store.movie.showMovieTrailer);
  console.log(showMovieTrailer);
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movie.movieDetails);
  if (!movieDetails) return; //* early return
  console.log(movieDetails);
  return (
    <div className={"lg:h-[54rem]  h-[150rem]    bg-black"}>
      <Header />

      <div className="  p-2  pt-24 lg:pl-12 pl-6 lg:flex">
        <img
          className="lg:w-1/3 w-11/12   lg:h-[70dvh] mx-2    m-4 mt-10"
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="movieImg"
        />
        <div className="h-96 m-4 lg:pl-12 pl-0 mx-1 lg:mt-4 mt-28 text-white lg:w-1/2 w-[100%]">
          <h1 className="text-4xl  pt-4 font-bold">
            {movieDetails.original_title}
          </h1>
          <p className="m-4 lg:mx-4 mx-0 text-xl">
            {movieDetails.vote_average}⭐
          </p>
          <p className="m-4 lg:mx-0 mx-0 text-xl">
            Release on:-{movieDetails.release_date}
          </p>
          <p className=" text-xl">{movieDetails.overview}</p>
          <button
            className=" border-2 border--cyan-400 text-2xl mt-4 p-2 m-2 ml-0 rounded-lg  border-cyan-600  bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold whitespace-nowrap"
            onClick={() => {
              //*for toggle the previous boolean value
              dispatch(toggleMovieTrailer(!showMovieTrailer));
            }}
          >
            {showMovieTrailer ? "Hide Trailer" : "See Trailer"}
          </button>{" "}
          <button
            className="  absolute z-50 top-18 border-2 border-cyan-600 text-sm p-2 m-2 rounded-lg bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold whitespace-nowrap left-2"
            onClick={() =>
              dispatch(toggleMovieDetails()) &&
              dispatch(toggleMovieTrailer(false))
            }
          >
            Go Back to Home Page
          </button>
        </div>
        <div className="absolute lg:w-[36rem] w-82 overflow-x-hidden left-0 lg:top-24 top-24 z-20 lg:ml-10 ml-2">
          {showMovieTrailer && (
            <MovieDetailsPageVideo movieId={movieDetails.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
