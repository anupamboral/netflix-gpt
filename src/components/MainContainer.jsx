import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import ShimmerUi from "./ShimmerUi";

const MainContainer = () => {
  //* to display a animation movie in the main container we used upcoming movies data instead of now playing movies data
  const movies = useSelector((store) => store.movie?.upcomingMovies);
  //*early return to display shimmer ui when data is not present
  if (!movies) return <ShimmerUi />;

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
