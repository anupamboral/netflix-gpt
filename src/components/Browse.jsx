import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //* we extracted the logic of fetching the data from the api and storing it to the store into a custom hook to make this component cleaner, we named that hook useNowPlayingMovies();
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />

      <SecondaryContainer />
    </div>
  );
};

export default Browse;
