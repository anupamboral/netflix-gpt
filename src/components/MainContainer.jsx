import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  //*early return
  if (!movies) return;
  const mainMovie = movies[4];
  const { poster_path, overview } = mainMovie;

  // console.log(movies);
  return (
    <div>
      <VideoTitle moviePoster={poster_path} movieDetails={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
