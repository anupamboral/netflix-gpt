import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import ShimmerUi from "./ShimmerUi";
import useSearchTmdbMovie from "../hooks/useTmdbMovieSearch";

const MainContainer = () => {
  const movies = useSearchTmdbMovie("Elemental");
  console.log(movies);
  //*early return to display shimmer ui when data is not present
  if (movies === null) return <ShimmerUi />;

  const mainMovie = movies[0];
  const { poster_path, overview } = mainMovie;

  return (
    <div>
      <VideoTitle
        moviePoster={poster_path}
        movieDetails={overview}
        movie={mainMovie}
      />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
