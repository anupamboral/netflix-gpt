import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import GptSearch from "./GptSearch";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import MovieDetails from "./MovieDetails";

const Browse = () => {
  const gptSearchShow = useSelector((store) => store.gptSearch.showGptSearch); //* for displaying the GptSearch component on click of GptSearch button present in the Header. while GptSearch will be displayed then mainContainer and secondaryContainer will be hidden and vice-versa
  const showMovieDetails = useSelector((store) => store.movie.showMovieDetails); //* for displaying the MovieDetails component when the user clicks on any movie, so when the value of this will be true and also gptSearchShow value is false only then MovieDetails component will be displayed
  //* we extracted the logic of fetching the data from the api and storing it to the store into a custom hook to make this component cleaner, we named that hook useNowPlayingMovies();
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {showMovieDetails && !gptSearchShow ? (
        <MovieDetails />
      ) : (
        <>
          {gptSearchShow ? (
            <GptSearch />
          ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
