import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { IMG_CDN_URL } from "../utils/constants";
import { useState } from "react";
import VideoBackground from "./VideoBackground";
import { toggleMovieDetails } from "../utils/movieSlice";

const MovieDetails = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const dispatch = useDispatch();
  const movieDetails = useSelector((store) => store.movie.movieDetails);
  if (!movieDetails) return; //* early return
  console.log(movieDetails);
  return (
    <div className={" h-[200dvh] bg-black"}>
      <Header />

      <div className="  p-2  pt-24 pl-12 lg:flex">
        <img
          className="lg:w-1/3 w-3/4   lg:h-[70dvh]    m-4 mt-10"
          src={IMG_CDN_URL + movieDetails.poster_path}
          alt="movieImg"
        />
        <div className="h-96 m-4 lg:mt-4 mt-28 text-white lg:w-1/2 w-10/12">
          <h1 className="text-4xl pl-4 font-bold">
            {movieDetails.original_title}
          </h1>
          <p className="m-4 text-xl">{movieDetails.vote_average}⭐</p>
          <p className="m-4 text-xl">Release on:-{movieDetails.release_date}</p>
          <p className="m-4 text-xl">{movieDetails.overview}</p>
          <button
            className=" border-2 border--cyan-400 text-2xl p-2 m-2 rounded-lg  border-cyan-600  bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold whitespace-nowrap"
            onClick={() => setShowTrailer(!showTrailer)}
          >
            {showTrailer ? "Hide Trailer" : "See Trailer"}
          </button>{" "}
          <button
            className="  absolute z-50 top-18 border-2 border-cyan-600 text-sm p-2 m-2 rounded-lg bg-gradient-to-r from-purple-700 via-cyan-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold whitespace-nowrap left-2"
            onClick={() => dispatch(toggleMovieDetails())}
          >
            Go Back to Home Page
          </button>
        </div>
        <div className="absolute w-[50dvw] left-0 lg:top-180 top-24 z-20 flex justify-start">
          {showTrailer && <VideoBackground movieId={movieDetails.id} />}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
