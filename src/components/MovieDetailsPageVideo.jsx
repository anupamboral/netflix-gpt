import { useEffect } from "react";
import { addMovieTrailers } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const MovieDetailsPageVideo = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieVideos = useSelector((store) => store.movie?.movieTrailer);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieTrailers(json.results));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  //*early return
  if (!movieVideos) return;

  const filteredVideos = movieVideos.filter(
    (video) => video.name === "Official Trailer"
  );

  //* if filtered video contains 1 or more than ` videos then we will display the first video from the filtered videos otherwise we will just display from whatever video available in the movieVideos.
  const movieTrailer =
    filteredVideos.length >= 1 ? filteredVideos[0] : movieVideos[0];
  // console.log(movieTrailer);

  return (
    <div>
      <iframe
        className="  lg:w-[32rem] w-[90dvw] h-[70dvh] overflow-x-hidden       m-4 mt-10"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          movieTrailer?.key
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetailsPageVideo;
