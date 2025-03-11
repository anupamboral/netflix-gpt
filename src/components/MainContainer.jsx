import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  //*early return
  if (!movies) return;

  const { poster_path, overview } = movies[0];

  console.log(movies);
  return (
    <div>
      <VideoBackground />
      <VideoTitle moviePoster={poster_path} movieDetails={overview} />
    </div>
  );
};

export default MainContainer;
