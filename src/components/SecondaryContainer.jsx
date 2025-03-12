import { useSelector } from "react-redux";

import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  //* we already called useNowPlayingMovies hook in browse component to use it in main container so we already have that data in our store.
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movie);

  //*early return
  if (!movies.nowPlayingMovies) return;
  console.log(movies);
  return (
    <div className="text-white bg-black pb-10">
      <div className="relative lg:-mt-42 -mt-12 lg:bg-transparent bg-black">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies?.popularMovies} />
        <MoviesList title={"Top Rated Movie"} movies={movies?.topRatedMovies} />
        <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
