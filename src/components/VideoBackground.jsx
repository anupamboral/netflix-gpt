import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailers } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
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

  const movieTrailer =
    filteredVideos.length > 0 ? filteredVideos[0] : movieVideos[0];
  // console.log(movieTrailer);

  return (
    <div>
      <iframe
        className="w-[99dvw] aspect-video min-h-[30rem] lg:mt-[-95px] mt-[-25px] "
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          movieTrailer?.key
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
