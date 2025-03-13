import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  //* to display a animation movie in the main container we used popular movies data instead of now playing movies data
  const movies = useSelector((store) => store.movie?.popularMovies);
  //*early return
  if (!movies) return;
  const mainMovie = movies[17];
  const { poster_path, overview } = mainMovie;

  console.log(movies);
  return (
    <div>
      <VideoTitle moviePoster={poster_path} movieDetails={overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
